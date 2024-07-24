'use client'

import Logo from './Logo'
import { Button } from './ui/button'
import { Icons } from '@/components/icons'
import { MobileNav } from '@/components/mobile-nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { type MainNavItem } from '@/types/index.d'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex gap-6 md:gap-10'>
      <Button className='hidden items-center space-x-2 text-red-950 md:flex'>
        <Logo />
        <span className='hidden font-kronaOne tracking-[-.09em]  sm:inline-block'>
          {siteConfig.name}
        </span>
      </Button>
      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium tracking-widest transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Logo />}
        <span className='font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  )
}
