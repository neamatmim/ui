import * as React from "react";

export interface BoxProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Box({ children, ...other }: BoxProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

Box.displayName = "Box";
