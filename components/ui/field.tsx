"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

// 1. Field Group
const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
FieldGroup.displayName = "FieldGroup"

// 2. Field Container
const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { "data-invalid"?: boolean }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
))
Field.displayName = "Field"

// 3. Field Label
const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
))
FieldLabel.displayName = "FieldLabel"

// 4. Field Error
interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  errors?: any[]
}

const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, errors, children, ...props }, ref) => {
    // استخراج نص الخطأ سواء مررت مصفوفة أو نص مباشر
    const errorMessage = errors && errors[0]?.message ? errors[0].message : children

    if (!errorMessage) return null

    return (
      <p
        ref={ref}
        className={cn("text-xs font-medium text-red-500 mt-1", className)}
        {...props}
      >
        {errorMessage}
      </p>
    )
  }
)
FieldError.displayName = "FieldError"

export { Field, FieldGroup, FieldLabel, FieldError }