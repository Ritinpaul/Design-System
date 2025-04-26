import type React from "react"
import { cn } from "../../utils/cn"
import type { ParagraphProps } from "./types"


 // Paragraph component for displaying body text with consistent styling
 
const Paragraph: React.FC<ParagraphProps> = ({
  size = "base",
  color = "default",
  align = "center",
  weight = "normal",
  truncate = false,
  maxLines,
  className,
  children,
  id,
  ...props
}) => {
  // Map size to Tailwind classes
  const sizeClasses: Record<string, string> = {
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
  const colorClasses: Record<string, string> = {
    default: "text-gray-900 dark:text-gray-50",
    muted: "text-gray-600 dark:text-gray-400",
    accent: "text-primary-600 dark:text-primary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-amber-600 dark:text-amber-400",
    error: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
  }

  // Map weight to Tailwind classes
  const weightClasses: Record<string, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  // Map alignment to Tailwind classes
  const alignClasses: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }

  // Create max-lines style if specified
const maxLinesStyle: React.CSSProperties | {} = maxLines
  ? {
      display: "-webkit-box",
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: "vertical" as "vertical", 
      overflow: "hidden",
    }
  : {}

  const classes = cn(
    sizeClasses[size],
    colorClasses[color],
    weightClasses[weight],
    alignClasses[align],
    truncate && "truncate",
    "leading-relaxed",
    className,
  )

  return (
    <p id={id} className={classes} style={maxLinesStyle} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
