'use client'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { usePathname } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'

// export const metadata: Metadata = {
//   title: 'ABAS Dashboard',
//   description: 'ABAS Dashboard',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/auth/login';
  const isResetPage = pathname === '/auth/reset';
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className='flex items-stretch bg-customBgPage dark:bg-customBgDarkPage'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              {!isLoginPage && !isResetPage && <Sidebar />}
            </div>
            <div className='flex-1 relative'>
              {!isLoginPage && !isResetPage && <Navbar/>}
              <div className=''>
                {children}
                <Toaster/>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
