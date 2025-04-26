import { forwardRef } from "react"
import { cn } from "@/utils/cn"
import type { TextInputProps } from "./types"
import { Label } from "../../typography/index"
import HelperText from "../../typography/HelperText"

 //TextInput component for collecting user input
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      size = "md",
      variant = "default",
      required = false,
      disabled = false,
      startIcon,
      endIcon,
      containerClassName,
      inputClassName,
      labelClassName,
      id,
  
      className,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`

    // Size classes
    const sizeClasses = {
      sm: "h-8 text-xs px-2",
      md: "h-10 text-sm px-3",
      lg: "h-12 text-base px-4",
    }

    // Variant classes
    const variantClasses = {
      default: "border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800",
      filled: "border-0 bg-gray-100 dark:bg-gray-700",
      outline: "bg-transparent border border-gray-300 dark:border-gray-600",
    }

    // State classes
    const stateClasses = cn(
      "rounded-md focus:outline-none transition-colors",
      error
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400"
        : success
          ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:border-green-400 dark:focus:border-green-400 dark:focus:ring-green-400"
          : "focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400",
      disabled && "cursor-not-allowed opacity-60 bg-gray-100 dark:bg-gray-700",
    )

    // Icon classes
    const hasStartIcon = !!startIcon
    const hasEndIcon = !!endIcon
    const iconClasses = {
      start: {
        sm: "pl-7",
        md: "pl-9",
        lg: "pl-11",
      },
      end: {
        sm: "pr-7",
        md: "pr-9",
        lg: "pr-11",
      },
    }

    // Icon container classes
    const iconContainerClasses = {
      sm: "w-8",
      md: "w-10",
      lg: "w-12",
    }

    // Input classes
    const inputClasses = cn(
      "w-full",
      sizeClasses[size],
      variantClasses[variant],
      stateClasses,
      hasStartIcon && iconClasses.start[size],
      hasEndIcon && iconClasses.end[size],
      inputClassName,
    )

    return (
      <div className={cn("flex flex-col", containerClassName)}>
        {label && (
          <Label htmlFor={inputId} required={required} disabled={disabled} className={cn("mb-1", labelClassName)}>
            {label}
          </Label>
        )}
        <div className="relative w-full">
          {startIcon && (
            <div className={cn("absolute inset-y-0 left-0 flex items-center justify-center", iconContainerClasses[size])}>
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={inputClasses}
            {...props}
          />
          {endIcon && (
            <div className={cn("absolute inset-y-0 right-0 flex items-center justify-center", iconContainerClasses[size])}>
              {endIcon}
            </div>
          )}
        </div>
        {error ? (
          <HelperText id={`${inputId}-error`} error>
            {error}
          </HelperText>
        ) : success ? (
          <HelperText id={`${inputId}-success`} success>
            {success}
          </HelperText>
        ) : helperText ? (
          <HelperText id={`${inputId}-helper`}>{helperText}</HelperText>
        ) : null}
      </div>
    )
  },
)

TextInput.displayName = "TextInput"

export default TextInput
