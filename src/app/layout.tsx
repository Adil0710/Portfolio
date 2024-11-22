// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import ClientLayout from "@/components/ClientLayout"; // Import client wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adil | Portfolio",
  description: "Developed by Adil Patel (Fullstack Developer)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[rgba(0,0,0)]`}>
        <ThemeProvider>
          <ClientLayout>
            <div className="fixed inset-x-0 top-0 isolate z-[99] h-20">
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[1px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[2px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[3px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[6px]"></div>
              <div className="gradient-mask-t-0 absolute inset-0 backdrop-blur-[12px]"></div>
            </div>
            {children}
            <div className="fixed inset-x-0 bottom-0 isolate z-[99] h-16">
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[1px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[2px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[3px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[6px]"></div>
              <div className="gradient-mask-b-0 absolute inset-0 backdrop-blur-[12px]"></div>
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
