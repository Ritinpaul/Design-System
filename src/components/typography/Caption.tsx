import type React from "react"
import { cn } from "../../utils/cn"
import type { CaptionProps } from "./types"


 // Caption component for small, supplementary text

const Caption: React.FC<CaptionProps> = ({
  size = "base",
  color = "muted",
  align = "center",
  weight = "normal",
  truncate = false,
  className,
  children,
  id,
  ...props
}) => {
  const sizeClasses: Record<NonNullable<CaptionProps["size"]>, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
  }

  // Map color to tailwind classes
  const colorClasses: Record<NonNullable<CaptionProps["color"]>, string> = {
    default: "text-gray-900 dark:text-gray-50",
    muted: "text-gray-600 dark:text-gray-400",
    accent: "text-primary-600 dark:text-primary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-amber-600 dark:text-amber-400",
    error: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
  }

  // Map font weight to tailwind classes
  const weightClasses: Record<NonNullable<CaptionProps["weight"]>, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  //Map text alignment to tailwind classes
  const alignClasses: Record<NonNullable<CaptionProps["align"]>, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }

  const classes = cn(
    sizeClasses[size],
    colorClasses[color],
    weightClasses[weight],
    align && alignClasses[align],
    truncate && "truncate",
    "leading-tight",
    className,
  )  

  return (
    <span id={id} className={cn("block", classes)} {...props}>
      {children}
    </span>
  )
}

export default Caption
