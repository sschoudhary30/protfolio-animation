// src/components/mdx/Warning.tsx
import Callout from "./Callout";
import { ReactNode } from "react";

export default function Warning({ children }: { children: ReactNode }) {
  return <Callout variant="warn">{children}</Callout>;
}
