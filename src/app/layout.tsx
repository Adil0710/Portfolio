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
}) 
{
  
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[rgba(0,0,0)] !scroll-smooth scrollbar overflow-auto`}>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
         
        </ThemeProvider>
      </body>
    </html>
  );
}
