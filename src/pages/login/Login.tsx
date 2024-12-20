/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { LoginFormValidation } from "@/lib/validation";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { useAppDispatch } from "@/redux/features/hooks";
import { decodeToken } from "@/utils/decodeToken";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useState } from "react";
import { Loader } from "lucide-react";
import Container from "@/components/shared/Container";
import BackToHome from "@/components/ui/BackToHome";
import CustomFormField, {
  FormFieldType,
} from "@/components/ui/CustomFormField";
import { Button } from "@/components/ui/button";
import signIn from "@/actions/auth/signIn";

const Login = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof LoginFormValidation>) => {
    setLoading(true);
    try {
      const result = await signIn(values);
      console.log(result);
      toast.success(result?.message);
      const user = decodeToken(result.data.accessToken) as TUser;
      dispatch(setUser({ user, token: result.data.accessToken }));
      localStorage.setItem("token", result.data.accessToken);
      navigate("/");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container className="flex justify-center items-center h-screen relative">
      <BackToHome />
      <div className="mx-auto w-full max-w-xl space-y-6 rounded-lg border bg-white p-10 shadow-lg sm:p-20 dark:border-zinc-700 dark:bg-zinc-900">
        <h1 className="text-3xl font-medium text-center mb-10">Welcome Back</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn("space-y-6 flex-1", className)}
          >
            <CustomFormField
              control={form.control}
              className=" rounded-none border"
              fieldType={FormFieldType.INPUT}
              name="email"
              placeholder="Enter Your Email"
              iconAlt="user"
            />
            <CustomFormField
              control={form.control}
              className=" rounded-none"
              fieldType={FormFieldType.INPUT}
              name="password"
              placeholder="Enter Your Password"
              iconAlt="user"
            />
            <Button
              disabled={loading}
              className="mt-4 bg-primary mx-auto lg:mx-0 w-full"
            >
              Login
              {loading && <Loader size={22} className="animate-spin ml-2" />}
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
          Don&apos;t have an account?
          <Link to="/register" className="font-semibold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </Container>
  );
};
export default Login;
