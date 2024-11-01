import clsx from "clsx";

interface HeadingTextProps {
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function HeadingFont({
  children,
  className,
  level = "h1",
}: HeadingTextProps) {
  const sizes = {
    h1: "text-7xl",
    h2: "text-5xl",
    h3: "text-4xl",
    h4: "text-3xl",
    h5: "text-2xl",
    h6: "text-xl",
  };

  const Tag = level;

  return (
    <Tag className={clsx("font-bold", sizes[level], className)}>{children}</Tag>
  );
}
