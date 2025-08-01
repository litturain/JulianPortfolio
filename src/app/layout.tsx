import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Julian | Digital Creative & Tech Consultant",
  description: "Kenyan digital creative specializing in web development, AI solutions, and brand strategy. Transforming ideas into digital experiences.",
  keywords: ["Julian", "Kenya", "digital creative", "web developer", "AI consultant", "brand strategy", "Nairobi", "tech"],
  authors: [{ name: "Julian" }],
  openGraph: {
    title: "Julian | Digital Creative & Tech Consultant",
    description: "Kenyan digital creative specializing in web development, AI solutions, and brand strategy",
    url: "https://julian.dev",
    siteName: "Julian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian | Digital Creative & Tech Consultant",
    description: "Kenyan digital creative specializing in web development, AI solutions, and brand strategy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground font-sans"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
