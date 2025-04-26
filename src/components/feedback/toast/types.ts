import type { ReactNode } from "react"

export type ToastVariant = "default" | "success" | "error" | "warning" | "info"

export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"

export interface ToastProps {
  title?: string
  message: string
  variant?: ToastVariant
  isVisible?: boolean
  onClose?: () => void
  duration?: number
  icon?: ReactNode
  showCloseButton?: boolean
  className?: string
  position?: ToastPosition
  isDismissible?: boolean
  actionText?: string
  onAction?: () => void
}

export interface ToastContainerProps {
  position?: ToastPosition
  maxToasts?: number
  className?: string
  children: ReactNode
}
