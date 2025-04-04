import type { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import ClientBody from "./ClientBody"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "./page-transition"
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Mohammed Hinan A K",
  description: "Designer",
  openGraph: {
    images: ['/images/profile-photo.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <ClientBody>
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 overflow-x-hidden">
                <div className="relative">
                  <PageTransition>
                    {children}
                  </PageTransition>
                </div>
              </div>
            </div>
            <CustomCursor />
          </ClientBody>
        </ThemeProvider>
      </body>
    </html>
  )
}
