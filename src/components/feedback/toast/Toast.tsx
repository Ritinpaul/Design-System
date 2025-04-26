"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "../../../utils/cn"
import type { ToastProps } from "./types"

  //Toast component for displaying temporary notifications
const Toast: React.FC<ToastProps> = ({
  title,
  message,
  variant = "default",
  isVisible = true,
  onClose,
  duration = 5000,
  icon,
  showCloseButton = true,
  className,
  position = "top-right",
  isDismissible = true,
  actionText,
  onAction,
}) => {
  const [isShowing, setIsShowing] = useState(isVisible)

  useEffect(() => {
    if (duration > 0 && isShowing) {
      const timer = setTimeout(() => {
        setIsShowing(false)
        if (onClose) {
          setTimeout(onClose, 300) 
        }
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, isShowing, onClose])

  useEffect(() => {
    setIsShowing(isVisible)
  }, [isVisible])

  const handleClose = () => {
    setIsShowing(false)
    if (onClose) {
      setTimeout(onClose, 300) 
    }
  }

  const handleClick = () => {
    if (isDismissible) {
      handleClose()
    }
  }

  // Variant styles
  const variantStyles = {
    default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    warning: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  }

  // Icon colors
  const iconColors = {
    default: "text-gray-500 dark:text-gray-400",
    success: "text-green-500 dark:text-green-400",
    error: "text-red-500 dark:text-red-400",
    warning: "text-amber-500 dark:text-amber-400",
    info: "text-blue-500 dark:text-blue-400",
  }

  // Default icons based on variant
  const defaultIcons = {
    default: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    error: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    info: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }

  // Position styles
  const positionStyles = {
    "top-right": "right-0 top-0",
    "top-left": "left-0 top-0",
    "bottom-right": "right-0 bottom-0",
    "bottom-left": "left-0 bottom-0",
    "top-center": "top-0 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 transform -translate-x-1/2",
  }

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "fixed z-50 p-4 transform transition-all duration-300 ease-in-out",
        positionStyles[position],
        isShowing ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-start p-4 rounded-lg shadow-lg border",
          variantStyles[variant],
          isDismissible && "cursor-pointer",
          "max-w-sm w-full",
        )}
        onClick={handleClick}
      >
        {(icon || defaultIcons[variant]) && (
          <div className={cn("flex-shrink-0 mr-3", iconColors[variant])}>{icon || defaultIcons[variant]}</div>
        )}

        <div className="flex-1 min-w-0">
          {title && <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</h3>}
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</div>

          {actionText && onAction && (
            <button
              type="button"
              className={cn(
                "mt-2 text-sm font-medium",
                variant === "default"
                  ? "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  : `text-${variant}-600 hover:text-${variant}-700 dark:text-${variant}-400 dark:hover:text-${variant}-300`,
              )}
              onClick={(e) => {
                e.stopPropagation()
                onAction()
              }}
            >
              {actionText}
            </button>
          )}
        </div>

        {showCloseButton && (
          <button
            type="button"
            className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              handleClose()
            }}
            aria-label="Close"
          >
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default Toast
