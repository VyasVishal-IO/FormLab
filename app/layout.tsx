import DesignerContextProvider from "@/components/context/DesignerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Another Next.js project also using Typescript, Dnd-Kit, PostgreSQL, Prisma, Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-black text-white`}>
          <NextTopLoader 
            color="#ffffff" 
            initialPosition={0.08} 
            crawlSpeed={200} 
            height={3} 
            crawl={true} 
            showSpinner={false} 
            easing="ease"
            speed={200}
          />
          <DesignerContextProvider>
            <ThemeProvider 
              attribute="class" 
              defaultTheme="dark" 
              forcedTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}