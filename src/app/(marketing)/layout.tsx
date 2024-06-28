import { ThemeToggleButton } from '@/components/lit2l/ThemeToggleButton'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col border-4'>
      <header className='container sticky left-0 right-0 top-0 z-40 border-b bg-background/50'>
        <div className='flex h-20 items-center justify-between py-6'>
          <MainNav items={marketingConfig.mainNav} />
          <ThemeToggleButton />
          <nav>
            <Link
              href='/login'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
