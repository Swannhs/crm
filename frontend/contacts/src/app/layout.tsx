import type { Metadata } from "next";
import "@/styles/globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "MyManager Dashboard",
  description: "Modern minimalist dashboard for MyManager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-slate-50 text-slate-900">
        <Providers>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 min-h-screen">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
