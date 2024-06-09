import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ReduxProviders from "@/redux/ReduxProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Ectore",
  description: "Admin pannel for ectore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ReduxProviders>{children}</ReduxProviders>
        </ClerkProvider>
      </body>
    </html>
  );
}
