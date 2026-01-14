"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/blockchain-banner.png" alt="Blockchain Network" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-32">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Blockchain & Web3
          <br />
          Software Development
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty">
          Designing decentralized systems, DEX platforms, token infrastructure, and DeFi technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            className="bg-[#1F6AE1] hover:bg-[#1F6AE1]/90 text-white font-semibold rounded-md text-lg px-8 py-6"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={scrollToServices}
            variant="outline"
            className="border-2 border-[#1FC8B5] text-[#1FC8B5] bg-transparent hover:bg-[#1FC8B5]/10 font-semibold rounded-md text-lg px-8 py-6"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
