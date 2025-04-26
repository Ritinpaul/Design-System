import type React from "react"
import type { InputHTMLAttributes } from "react"

export type InputSize = "sm" | "md" | "lg"

export type InputVariant = "default" | "filled" | "outline"

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  helperText?: string
  error?: string
  success?: string
  size?: InputSize
  variant?: InputVariant
  required?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
  id?: string
}
