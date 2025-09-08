import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-200 overflow-hidden relative",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 shadow-sm",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 shadow-sm",
        outline:
          "text-foreground border-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground [a&]:hover:border-ring",
        jamatec:
          "border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary backdrop-blur-sm [a&]:hover:from-primary/20 [a&]:hover:to-secondary/20 [a&]:hover:border-primary [a&]:hover:shadow-sm [a&]:hover:shadow-primary/20",
        "jamatec-filled":
          "border-transparent bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-sm [a&]:hover:shadow-md [a&]:hover:shadow-primary/25 [a&]:hover:-translate-y-0.5",
        cyber:
          "border-accent/50 bg-accent/10 text-accent backdrop-blur-sm [a&]:hover:bg-accent/20 [a&]:hover:border-accent [a&]:hover:text-accent-foreground [a&]:hover:shadow-sm",
        success:
          "border-green-500/30 bg-green-500/10 text-green-500 [a&]:hover:bg-green-500/20 [a&]:hover:border-green-500",
        warning:
          "border-yellow-500/30 bg-yellow-500/10 text-yellow-500 [a&]:hover:bg-yellow-500/20 [a&]:hover:border-yellow-500",
        info:
          "border-blue-500/30 bg-blue-500/10 text-blue-500 [a&]:hover:bg-blue-500/20 [a&]:hover:border-blue-500",
      },
      size: {
        default: "text-xs px-3 py-1",
        sm: "text-[10px] px-2 py-0.5 rounded-md",
        lg: "text-sm px-4 py-1.5 rounded-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
