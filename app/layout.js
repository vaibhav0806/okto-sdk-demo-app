import "./globals.css";
import { Inter } from "next/font/google";
import LightDarkModeProvider from "./lightDarkModeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Okto SDK demo app",
  description: "Okto SDK demo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white`}>
        <LightDarkModeProvider>{children}</LightDarkModeProvider>
      </body>
    </html>
  );
}
