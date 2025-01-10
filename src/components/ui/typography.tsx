import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "font-bold text-5xl xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl leading-snug",
      h2: "text-xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl pb-2 font-extrabold leading-snug",
      h3: "text-base xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold leading-snug",
      h4: "text-sm xl:text-xl lg:text-lg md:text-base sm:text-sb font-semibold leading-snug",
      h5: "text-xs xl:text-lg lg:text-base md:text-sb sm:text-sm font-semibold leading-snug",
      h6: "text-2xs xl:text-base lg:text-sb md:text-sm sm:text-xs font-semibold leading-snug",
      smallText: "text-2xs xl:text-sm lg:text-xs font-medium leading-snug dark:text-white",
      verySmallText: "text-3xs lg:text-2xs font-normal leading-snug",
      p: "text-2xs xl:text-base lg:text-sb md:text-sm sm:text-xs font-normal leading-snug",
      lead: "text-sm xl:text-xl lg:text-lg md:text-base sm:text-sb font-normal text-muted-foreground leading-snug",
      largeText:
        "text-xs xl:text-lg lg:text-base md:text-sb sm:text-sm font-semibold leading-snug",
      mutedText:
        "text-2xs xl:text-sm lg:text-xs font-normal leading-snug text-muted-foreground",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "div",
  smallText: "small",
  lead: "p",
  mutedText: "p",
  ul: "ul",
  verySmallText: "small",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild = false, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
