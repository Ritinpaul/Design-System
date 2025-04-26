import type React from "react"
import { cn } from "../../utils/cn"
import type { LabelProps } from "./types"
import type { TextColor, TextWeight, TextAlign, TextSize } from "./types"

// Label component for form elements with consistent styling
const Label: React.FC<LabelProps> = ({
  size = "sm",
  color = "default",
  align = "center",
  weight = "medium",
  truncate = false,
  required = false,
  disabled = false,
  className,
  children,
  htmlFor,
  id,
  ...props
}) => {
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

  // Compute final color 
  const effectiveColor = disabled ? "muted" : color

  const classes = cn(
    sizeClasses[size],
    colorClasses[effectiveColor],
    weightClasses[weight],
    alignClasses[align],
    truncate && "truncate",
    "block mb-2 leading-none",
    disabled && "cursor-not-allowed opacity-60",
    className,
  )

  return (
    <label id={id} htmlFor={htmlFor} className={classes} {...props}>
      {children}
      {required && <span className="ml-1 text-red-500 dark:text-red-400">*</span>}
    </label>
  )
}

export default Label
