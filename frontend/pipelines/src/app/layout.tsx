import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pipelines | MyManager",
  description: "Sales pipeline and CRM kanban board",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-[280px] min-h-screen bg-[#f8fafc]">
                {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
