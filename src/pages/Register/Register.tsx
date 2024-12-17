/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { RegisterFormValidation } from "@/lib/validation";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { useState } from "react"; // Import useState to manage the image file
import { Loader } from "lucide-react";
import Container from "@/components/shared/Container";
import BackToHome from "@/components/ui/BackToHome";
import CustomFormField, {
  FormFieldType,
} from "@/components/ui/CustomFormField";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import signUp from "@/actions/auth/signUp";

const Register = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof RegisterFormValidation>>({
    resolver: zodResolver(RegisterFormValidation),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "USER",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof RegisterFormValidation>) => {
    setLoading(true);
    console.log(values);
    try {
      const response = await signUp(values);
      toast.success("Register Successful");
      console.log(response);
      navigate("/login");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container className="flex justify-center items-center h-screen relative">
      <BackToHome />
      <div className="mx-auto w-full max-w-xl space-y-8 rounded-lg border bg-white p-10 shadow-lg sm:p-20 dark:border-zinc-700 dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn("space-y-6 flex-1", className)}
          >
            <CustomFormField
              label="Name"
              control={form.control}
              className="rounded-none"
              fieldType={FormFieldType.INPUT}
              name="name"
              placeholder="Enter Your Name"
              iconAlt="user"
            />
            <CustomFormField
              label="Email"
              control={form.control}
              className="rounded-none"
              fieldType={FormFieldType.INPUT}
              name="email"
              placeholder="Enter Your Email"
              iconAlt="email"
            />
            <CustomFormField
              label="Password"
              control={form.control}
              className="rounded-none"
              fieldType={FormFieldType.INPUT}
              name="password"
              placeholder="Enter Your Password"
              iconAlt="password"
            />
            {/* Dropzone for image upload */}
            <CustomFormField
              label="Role"
              control={form.control}
              className="rounded-none"
              fieldType={FormFieldType.SELECT}
              name="role"
              placeholder="Select Your Role"
              iconAlt="password"
            >
              <SelectItem value="USER">User</SelectItem>
              <SelectItem value="VENDOR">Vendor</SelectItem>
            </CustomFormField>

            <Button
              disabled={loading}
              className="mt-4 bg-primary mx-auto lg:mx-0 w-full"
            >
              Register {loading && <Loader className="ml-2 animate-spin" />}
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
          Don&apos;t have an account?
          <Link to="/login" className="font-semibold underline">
            Sign In
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
