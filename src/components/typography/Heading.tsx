import type React from "react"
import { cn } from "../../utils/cn"
import type { HeadingProps } from "./types"
import { JSX } from "react"

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
type TextColor = "default" | "muted" | "accent" | "success" | "warning" | "error" | "info"
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold"
type TextAlign = "left" | "center" | "right" | "justify"

 // Heading component for displaying h1-h6 elements with consistent styling

const Heading: React.FC<HeadingProps> = ({
  level = 2,
  size,
  color = "default",
  align = "center",
  weight = "bold",
  truncate = false,
  className,
  children,
  id,
  ...props
}) => {
  // Map heading level to default size if not explicitly provided
  const defaultSizeMap: Record<HeadingLevel, TextSize> = {
    1: "4xl",
    2: "3xl",
    3: "2xl",
    4: "xl",
    5: "lg",
    6: "base",
  }

  const headingSize = size || defaultSizeMap[level]

  // Map size to Tailwind classes
  const sizeClasses: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  }

  // Map color to Tailwind classes
  const colorClasses: Record<TextColor, string> = {
    default: "text-gray-900 dark:text-gray-50",
    muted: "text-gray-600 dark:text-gray-400",
    accent: "text-primary-600 dark:text-primary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-amber-600 dark:text-amber-400",
    error: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
  }

  // Map weight to Tailwind classes
  const weightClasses: Record<TextWeight, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  // Map alignment to Tailwind classes
  const alignClasses: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }

  const classes = cn(
    sizeClasses[headingSize],
    colorClasses[color],
    weightClasses[weight],
    alignClasses[align],
    truncate && "truncate",
    "tracking-tight leading-tight",
    className,
  )

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag id={id} className={classes} {...props}>
      {children}
    </HeadingTag>
  )
}

export default Heading
