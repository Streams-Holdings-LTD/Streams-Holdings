import { Card } from "@/components/ui/card"
import { Blocks, ArrowLeftRight, FileCode2, Globe } from "lucide-react"

const services = [
  {
    title: "Blockchain Software Development",
    description: "Custom blockchain solutions tailored to your business needs, from concept to deployment.",
    icon: Blocks,
  },
  {
    title: "DEX Development",
    description: "Build decentralized exchanges with advanced trading features and liquidity management.",
    icon: ArrowLeftRight,
  },
  {
    title: "Smart Contract Development",
    description: "Secure, audited smart contracts for tokens, DeFi protocols, and automated systems.",
    icon: FileCode2,
  },
  {
    title: "Web3 Application Design",
    description: "User-friendly interfaces connecting traditional web with decentralized technologies.",
    icon: Globe,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Services</h2>
          <div className="h-1 w-24 bg-[#1FC8B5] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-[#1FC8B5]/50 bg-card"
              >
                <div className="w-14 h-14 bg-[#1F6AE1]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-[#1F6AE1]" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
