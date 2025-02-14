import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import type { Metadata } from "next";
import { source } from '@/lib/source';

export const metadata: Metadata = {
  title: "MetEngine",
  description: "One - click LP, Copy trade DLMM positions, track IL in Real-Time all from Telegram.",
  icons: {
    icon: "/favicon.jpeg",
  },
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
