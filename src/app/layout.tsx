import type { Metadata } from "next"
import "./globals.css"
import { SidebarWithContent, SidebarProvider } from "@/components/sidebar"
import { ResponsiveContent } from "@/components/responsive-content"
import ClientBody from "./ClientBody"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "./page-transition"
import { CustomCursor } from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: "Mohammed Hinan A K",
  description: "Designer",
  openGraph: {
    images: ['/images/profile-photo.jpg'],
  },
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SidebarWithContent />
      <div className="flex-1 overflow-x-hidden">
        <ResponsiveContent>
          <PageTransition>
            {children}
          </PageTransition>
        </ResponsiveContent>
      </div>
    </div>
  );
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
            <SidebarProvider>
              <LayoutContent>{children}</LayoutContent>
            </SidebarProvider>
            <CustomCursor />
          </ClientBody>
        </ThemeProvider>
      </body>
    </html>
  )
}
