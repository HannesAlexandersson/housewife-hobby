import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";
import { TypographyProps } from "./Typography.types";

const typographyVariants = cva("leading-normal", {
  variants: {
    variant: {
      h1: "text-6xl font-bold md:text-7xl",
      h2: "text-4xl font-bold md:text-5xl",
      h3: "text-3xl font-semibold md:text-4xl",
      h4: "text-lg font-semibold md:text-xl",
      h5: "text-md font-medium md:text-lg",
      h6: "text-md font-medium",
      p: "font-normal",
      blockquote: "border-l-4 pl-4 italic text-gray-600",
      span: "font-normal",
      small: "text-sm font-normal",
      strong: "font-semibold",
      b: "font-semibold",
      em: "italic",
      code: "font-mono text-sm bg-gray-100 px-1 rounded",
      pre: "font-mono text-sm bg-gray-100 p-4 rounded",
      a: "text-primaryAccent hover:text-linkHoverClr underline focus:outline-none focus:ring-2 focus:ring-primaryAccent",
      ul: "list-disc pl-5",
      ol: "list-decimal pl-5",
      li: "mb-2",
      table: "min-w-full border-collapse",
      th: "border-b px-4 py-2 text-left",
      td: "border-b px-4 py-2",
      img: "max-w-full h-auto",
      figure: "my-4",
      figcaption: "text-sm text-gray-500",
      hr: "border-t border-gray-300 my-4",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { variant: "p", size: "sm", class: "text-sm" },
    { variant: "p", size: "md", class: "text-base" },
    { variant: "p", size: "lg", class: "text-lg" },
  ],
  defaultVariants: {
    variant: "p",
    size: "md",
  },
});

const Typography = ({
  children,
  className,
  variant = "p",
  size,
  ...props
}: TypographyProps) => {
  const Element = variant;

  return (
    <Element
      className={cn(typographyVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Typography;
