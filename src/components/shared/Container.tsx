import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-[calc(1280px_-_12px)] mx-auto px-7 lg:px-12 xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
