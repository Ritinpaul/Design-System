import { forwardRef } from "react";
import { cn } from "../../../utils/cn";
import type { SelectProps } from "./types";
import { Label } from "../../typography";
import HelperText from "../../typography/HelperText";

 // Select component for selecting from a list of options
const Select = forwardRef<HTMLSelectElement, SelectProps>(
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
      options = [],
      placeholder,
      containerClassName,
      selectClassName,
      labelClassName,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;

    // Size classes
    const sizeClasses = {
      sm: "h-8 text-xs px-2 py-1",
      md: "h-10 text-sm px-3 py-2",
      lg: "h-12 text-base px-4 py-3",
    };

    // Variant classes
    const variantClasses = {
      default: "border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800",
      filled: "border-0 bg-gray-100 dark:bg-gray-700",
      outline: "bg-transparent border border-gray-300 dark:border-gray-600",
    };

    // State classes
    const stateClasses = cn(
      "rounded-md focus:outline-none transition-colors appearance-none pr-8",
      error
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400"
        : success
        ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:border-green-400 dark:focus:border-green-400 dark:focus:ring-green-400"
        : "focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400",
      disabled && "cursor-not-allowed opacity-60 bg-gray-100 dark:bg-gray-700",
    );

    const selectClasses = cn(
      "w-full", 
      sizeClasses[size],
      variantClasses[variant],
      stateClasses,
      className,
      selectClassName
    );

    return (
      <div className={cn("flex flex-col", containerClassName)}>
        {label && (
          <Label htmlFor={selectId} required={required} disabled={disabled} className={cn("mb-1", labelClassName)}>
            {label}
          </Label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            className={selectClasses}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${selectId}-error`
                : success
                ? `${selectId}-success`
                : helperText
                ? `${selectId}-helper`
                : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 dark:text-gray-300">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {error ? (
          <HelperText id={`${selectId}-error`} error>
            {error}
          </HelperText>
        ) : success ? (
          <HelperText id={`${selectId}-success`} success>
            {success}
          </HelperText>
        ) : helperText ? (
          <HelperText id={`${selectId}-helper`}>{helperText}</HelperText>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
