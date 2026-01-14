"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="Streams Holdings LTD" fill className="object-contain" />
            </div>
            <span className="font-semibold text-lg text-foreground">Streams Holdings LTD</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-we-work")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              How We Work
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1F6AE1] hover:bg-[#1F6AE1]/90 text-white font-semibold rounded-md"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-we-work")}
              className="text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              How We Work
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1F6AE1] hover:bg-[#1F6AE1]/90 text-white font-semibold rounded-md w-full"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
