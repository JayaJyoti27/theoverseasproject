import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/footer";

/** Marketing-site chrome (header/footer) around the public job board — no login needed. */
export default function PublicJobsLayout({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {title && (
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-ink">{subtitle}</p>}
          </div>
        )}

        {children}
      </main>

      <Footer />
    </div>
  );
}
