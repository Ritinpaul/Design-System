import type { SelectHTMLAttributes } from "react"

export type SelectSize = "sm" | "md" | "lg"

export type SelectVariant = "default" | "filled" | "outline"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string
  helperText?: string
  error?: string
  success?: string
  size?: SelectSize
  variant?: SelectVariant
  required?: boolean
  options: SelectOption[]
  placeholder?: string
  containerClassName?: string
  selectClassName?: string
  labelClassName?: string
  id?: string
}
