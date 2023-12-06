import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'

export const metadata: Metadata = {
  title: 'ABAS Dashboard',
  description: 'ABAS Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className='flex'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar/>
            <div className='flex-1'>
              <Navbar/>
              <div className='p-5'>
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
