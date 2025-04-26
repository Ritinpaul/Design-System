import type React from "react"
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"

export type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold"

export type TextAlign = "left" | "center" | "right" | "justify"

export type TextColor = "default" | "muted" | "accent" | "success" | "warning" | "error" | "info"

export interface TypographyBaseProps {
  className?: string
  children: React.ReactNode
  color?: TextColor
  align?: TextAlign
  weight?: TextWeight
  truncate?: boolean
  id?: string
}

export interface HeadingProps extends TypographyBaseProps {
  level?: HeadingLevel
  size?: TextSize
}

export interface ParagraphProps extends TypographyBaseProps {
  size?: TextSize
  maxLines?: number
}

export interface LabelProps extends TypographyBaseProps {
  size?: TextSize
  required?: boolean
  disabled?: boolean
  htmlFor?: string
}

export interface CaptionProps extends TypographyBaseProps {
  size?: "xs" | "sm" | "base"
}

export interface HelperTextProps extends TypographyBaseProps {
  error?: boolean
  success?: boolean
}
