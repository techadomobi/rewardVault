"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Coins } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/earn", label: "Earn" },
  { href: "/rewards", label: "Rewards" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
]

const userLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Profile" },
  { href: "/activity", label: "Activity" },
  { href: "/settings", label: "Settings" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-out
        ${scrolled 
          ? 'glass-strong py-2 shadow-lg shadow-black/10' 
          : 'bg-transparent py-4'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-xl group-hover:bg-primary/30 group-hover:rotate-6 transition-all duration-300" />
              <Coins className="w-6 h-6 text-primary relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Reward</span>
              <span className="text-primary">Vault</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-300
                    ${isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span 
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full
                      transition-all duration-300
                      ${isActive ? 'w-4' : 'w-0'}
                    `}
                  />
                  {/* Hover background */}
                  <span 
                    className={`
                      absolute inset-0 rounded-lg bg-primary/10 
                      transition-opacity duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'}
                    `}
                  />
                </Link>
              )
            })}
            
            {/* User Navigation (Dashboard, Profile, etc.) */}
            <div className="h-6 w-px bg-border mx-2" />
            {userLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-300
                    ${isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span 
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full
                      transition-all duration-300
                      ${isActive ? 'w-4' : 'w-0'}
                    `}
                  />
                  {/* Hover background */}
                  <span 
                    className={`
                      absolute inset-0 rounded-lg bg-primary/10 
                      transition-opacity duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'}
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/signin">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`
                  absolute inset-0 w-6 h-6 transition-all duration-300
                  ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}
                `} 
              />
              <X 
                className={`
                  absolute inset-0 w-6 h-6 transition-all duration-300
                  ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}
                `} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
          `}
        >
          <nav className="flex flex-col gap-1 py-4 border-t border-border">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-3 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            
            {/* User Links Section */}
            <div className="h-px bg-border my-2" />
            {userLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-3 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${(index + navLinks.length) * 50}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            
            <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
              <Link href="/signin">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
              </Link>
              <Link href="/get-started">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
