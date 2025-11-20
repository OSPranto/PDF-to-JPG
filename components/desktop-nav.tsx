"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {navigation.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
              pathname === item.href ? "text-foreground" : "text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}
