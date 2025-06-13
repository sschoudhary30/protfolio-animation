// src/components/mdx/Tip.tsx
import { ReactNode } from 'react';

export default function Tip({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-md border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
      {/*  ✅ no extra <p> wrapper */}
      <div className="text-sm text-blue-800 dark:text-blue-200">
        {children}
      </div>
    </aside>
  );
}
