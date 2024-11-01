import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  tag?: "section" | "header" | "footer";
}

export default function Section({
  children,
  className,
  tag = "section",
}: SectionProps) {
  const Tag = tag;
  return <Tag className={clsx("px-[4%] py-12", className)}>{children}</Tag>;
}
