import type React from "react"
import { cn } from "../../utils/cn"
import type { HelperTextProps } from "./types"


 // HelperText component for form field guidance, errors, or additional information

const HelperText: React.FC<HelperTextProps> = ({
  color,
  align = "center",
  weight = "normal",
  truncate = false,
  error = false,
  success = false,
  className,
  children,
  id,
  ...props
}) => {
  // Determine color based on state
  let textColor = color || "muted"
  if (error) textColor = "error"
  if (success) textColor = "success"

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

  const classes = cn(
    "text-xs",
    colorClasses[textColor],
    weightClasses[weight],
    alignClasses[align],
    truncate && "truncate",
    "mt-1 leading-tight",
    className,
  )

  return (
    <p id={id} className={classes} {...props}>
      {children}
    </p>
  )
}

export default HelperText
