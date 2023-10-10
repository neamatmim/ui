import * as React from 'react'

export interface BoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Box({ children, ...other }: BoxProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  )
}

Box.displayName = 'Box'

// import { cva, type VariantProps } from "class-variance-authority";
// import { twMerge } from "tailwind-merge";

// const buttonVariants = cva(["your", "base", "classes"], {
//   variants: {
//     intent: {
//       primary: ["your", "primary", "classes"],
//     },
//   },
//   defaultVariants: {
//     intent: "primary",
//   },
// });

// export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

// export const button = (variants: ButtonVariants) =>
//   twMerge(buttonVariants(variants));
// components/button.ts
// import { cva } from "class-variance-authority";

// const button = cva(["font-semibold", "border", "rounded"], {
//   variants: {
//     intent: {
//       primary: [
//         "bg-blue-500",
//         "text-white",
//         "border-transparent",
//         "hover:bg-blue-600",
//       ],
//       // **or**
//       // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
//       secondary: [
//         "bg-white",
//         "text-gray-800",
//         "border-gray-400",
//         "hover:bg-gray-100",
//       ],
//     },
//     size: {
//       small: ["text-sm", "py-1", "px-2"],
//       medium: ["text-base", "py-2", "px-4"],
//     },
//   },
//   compoundVariants: [
//     {
//       intent: "primary",
//       size: "medium",
//       class: "uppercase",
//       // **or** if you're a React.js user, `className` may feel more consistent:
//       // className: "uppercase"
//     },
//   ],
//   defaultVariants: {
//     intent: "primary",
//     size: "medium",
//   },
// });

// button();
// // => "font-semibold border rounded bg-blue-500 text-white border-transparent hover:bg-blue-600 text-base py-2 px-4 uppercase"

// button({ intent: "secondary", size: "small" });
// => "font-semibold border rounded bg-white text-gray-800 border-gray-400 hover:bg-gray-100 text-sm py-1 px-2"

// // components/button.ts
// import { cva, type VariantProps } from "class-variance-authority";

// export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
// export const buttonVariants = cva("…", {
//   variants: {
//     optional: { a: "…", b: "…" },
//     required: { a: "…", b: "…" },
//   },
// });

// /**
//  * Button
//  */
// export interface ButtonProps
//   extends Omit<ButtonVariantProps, "required">,
//     Required<Pick<ButtonVariantProps, "required">> {}

// export const button = (props: ButtonProps) => buttonVariants(props);

// // ❌ TypeScript Error:
// // Argument of type "{}": is not assignable to parameter of type "ButtonProps".
// //   Property "required" is missing in type "{}" but required in type
// //   "ButtonProps".
// button({});

// // ✅
// button({ required: "a" });
// components/card.ts
// import type { VariantProps } from "class-variance-authority";
// import { cva, cx } from "class-variance-authority";

// /**
//  * Box
//  */
// export type BoxProps = VariantProps<typeof box>;
// export const box = cva(["box", "box-border"], {
//   variants: {
//     margin: { 0: "m-0", 2: "m-2", 4: "m-4", 8: "m-8" },
//     padding: { 0: "p-0", 2: "p-2", 4: "p-4", 8: "p-8" },
//   },
//   defaultVariants: {
//     margin: 0,
//     padding: 0,
//   },
// });

// /**
//  * Card
//  */
// type CardBaseProps = VariantProps<typeof cardBase>;
// const cardBase = cva(["card", "border-solid", "border-slate-300", "rounded"], {
//   variants: {
//     shadow: {
//       md: "drop-shadow-md",
//       lg: "drop-shadow-lg",
//       xl: "drop-shadow-xl",
//     },
//   },
// });

// export interface CardProps extends BoxProps, CardBaseProps {}
// export const card = ({ margin, padding, shadow }: CardProps = {}) =>
//   cx(box({ margin, padding }), cardBase({ shadow }));
// import React from "react";
// import { cva, type VariantProps } from "class-variance-authority";

// const button = cva("button", {
//   variants: {
//     intent: {
//       primary: [
//         "bg-blue-500",
//         "text-white",
//         "border-transparent",
//         "hover:bg-blue-600",
//       ],
//       secondary: [
//         "bg-white",
//         "text-gray-800",
//         "border-gray-400",
//         "hover:bg-gray-100",
//       ],
//     },
//     size: {
//       small: ["text-sm", "py-1", "px-2"],
//       medium: ["text-base", "py-2", "px-4"],
//     },
//   },
//   compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
//   defaultVariants: {
//     intent: "primary",
//     size: "medium",
//   },
// });

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof button> {}

// export const Button: React.FC<ButtonProps> = ({
//   className,
//   intent,
//   size,
//   ...props
// }) => <button className={button({ intent, size, className })} {...props} />;
// const greeter = cva("Good morning!", {
//   variants: {
//     isLoggedIn: {
//       true: "Here's a secret only logged in users can see",
//       false: "Log in to find out more…",
//     },
//   },
//   defaultVariants: {
//     isLoggedIn: "false",
//   },
// });

// greeter();
// // => "Good morning! Log in to find out more…"

// greeter({ isLoggedIn: "true" });
// // => "Good morning! Here's a secret only logged in users can see"
