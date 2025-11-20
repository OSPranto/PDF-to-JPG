"use client"

import Link from "next/link"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-bottom">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <Icons.logo className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold text-sm sm:text-base">PDF TO JPG</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <DesktopNav />
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
