import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva([""], {
  variants: {
    variant: {
      primary: [
        "font-semibold",
        "border",
        "rounded",
        "hover:cursor-pointer",
        "bg-primaryAccent",
        "text-background",
        "border-transparent",
        "hover:bg-background",
        "hover:text-primaryAccent",
        "hover:border-primaryAccent",
      ],
      secondary: [
        "font-semibold",
        "border",
        "rounded",
        "hover:cursor-pointer",
        "bg-background",
        "text-text-black-500",
        "border-text-black-500",
        "hover:bg-black-500",
        "hover:text-background",
        "hover:border-background",
        "transition-colors",
      ],
      navbar: ["bg-transparent", "text-tertiaryTextClr", "border-transparent"],
      outlinedSecondary:
        "font-semibold rounded hover:cursor-pointer bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
      ghost:
        "bg-transparent text-secondaryTextClr border-none hover:text-linkHoverClr hover:text-shadow-2xs",
      category:
        "rounded-md shadow-lg shadow-gray-600 flex items-center justify-center flex-1 bg-annika-pink h-36 p-1 border-none text-annika-orange text-4xl hover:bg-annika-orange hover:text-annika-pink transition-colors font-bold uppercase break-words cursor-pointer hover:shadow-xl hover-transition-shadow hover:transform hover:scale-[1.02]",
      empty: "",
      categoryOutline:
        "rounded-md shadow-lg shadow-gray-600 flex items-center justify-center flex-1 bg-annika-pink h-36 p-1 border-none text-annika-orange text-4xl hover:bg-annika-orange hover:text-annika-pink transition-colors font-bold uppercase break-words cursor-pointer hover:shadow-xl hover-transition-shadow hover:transform hover:scale-[1.02] ring-1 ring-annika-blue",
    },

    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-3", "px-6"],
      none: ["text-base", "py-0", "px-0"],
    },
    // `boolean` variants are also supported!
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
});
// Usage example:
button();
// => "font-semibold border rounded bg-blue-500 text-white border-transparent text-base py-2 px-4 hover:bg-blue-600 uppercase"

button({ disabled: true });
// => "font-semibold border rounded bg-blue-500 text-white border-transparent text-base py-2 px-4 opacity-50 cursor-not-allowed uppercase"

button({ variant: "secondary", size: "small" });
// => "font-semibold border rounded bg-white text-gray-800 border-gray-400 text-sm py-1 px-2 hover:bg-gray-100"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  disabled,
  ...props
}) => (
  <button
    className={button({ variant, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);
