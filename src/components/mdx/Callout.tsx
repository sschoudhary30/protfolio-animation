// src/components/mdx/Callout.tsx
import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "info" | "warn" | "danger";

const variantStyles: Record<Variant, string> = {
  info: "border-blue-500  bg-blue-50  text-blue-800  dark:bg-blue-950  dark:text-blue-200",
  warn: "border-yellow-500 bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
  danger:
    "border-red-500   bg-red-50   text-red-800   dark:bg-red-950   dark:text-red-200",
};

export default function Callout({
  variant = "info",
  children,
}: {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <aside
      className={clsx("rounded-md border-l-4 p-4", variantStyles[variant])}
    >
      <div className="text-sm">{children}</div>
    </aside>
  );
}
export { default as Tip } from "./Tip";
export { default as Info } from "./Info";
export { default as Warning } from "./Warning";
