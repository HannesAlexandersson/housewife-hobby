import { BlockProps } from "@/utils/globalTypes";

export interface TextBlockSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

export interface TextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  block: BlockProps;
  className?: string;
  variant?: "dark" | "light";
  showImage?: boolean;
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  reverse?: boolean;
}
