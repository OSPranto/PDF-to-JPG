"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Icons.home,
  },
  {
    name: "Features",
    href: "/features",
    icon: Icons.features,
  },
  {
    name: "Reviews",
    href: "/reviews",
    icon: Icons.reviews,
  },
  {
    name: "About",
    href: "/about",
    icon: Icons.about,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Icons.contact,
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
    icon: Icons.privacy,
  },
  {
    name: "Terms of Service",
    href: "/terms",
    icon: Icons.terms,
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
          <Icons.menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-6">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">PDF TO JPG</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-6">
            <nav className="grid gap-1 px-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
