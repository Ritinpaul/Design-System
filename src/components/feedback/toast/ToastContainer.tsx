import React from "react"
import { cn } from "../../../utils/cn"
import type { ToastContainerProps } from "./types"
 // Container for multiple Toast components

const ToastContainer: React.FC<ToastContainerProps> = ({
  position = "top-right",
  maxToasts = 5,
  className,
  children,
}) => {
  // Position styles
  const positionStyles = {
    "top-right": "right-0 top-0",
    "top-left": "left-0 top-0",
    "bottom-right": "right-0 bottom-0",
    "bottom-left": "left-0 bottom-0",
    "top-center": "top-0 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 transform -translate-x-1/2",
  }

  // Spacing styles based on position
  const spacingStyles = {
    "top-right": "space-y-2",
    "top-left": "space-y-2",
    "bottom-right": "space-y-2 flex-col-reverse",
    "bottom-left": "space-y-2 flex-col-reverse",
    "top-center": "space-y-2",
    "bottom-center": "space-y-2 flex-col-reverse",
  }

  const limitedChildren = React.Children.toArray(children).slice(0, maxToasts)

  return (
    <div
      className={cn("fixed z-50 p-4 flex flex-col", positionStyles[position], spacingStyles[position], className)}
      role="region"
      aria-label="Notifications"
    >
      {limitedChildren}
    </div>
  )
}

export default ToastContainer