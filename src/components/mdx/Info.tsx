import Callout from "./Callout";
import { ReactNode } from "react";

export default function Info({ children }: { children: ReactNode }) {
  return <Callout variant="info">{children}</Callout>;
}
