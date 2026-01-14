import { Shield, Code2, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">About Us</h2>
          <div className="h-1 w-24 bg-[#1FC8B5] mx-auto mb-12 rounded-full" />

          <p className="text-lg text-foreground/80 leading-relaxed mb-12 text-center">
            Streams Holdings LTD is a software and blockchain development company specializing in decentralized
            technologies. We design and develop cryptocurrencies, decentralized exchanges (DEXs), token generation
            platforms, and DeFi infrastructure. Our work focuses on building secure, scalable, and transparent systems
            that support modern Web3 ecosystems.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1F6AE1]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#1F6AE1]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-foreground/70 leading-relaxed">
                Built with industry-leading security practices and audited smart contracts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1FC8B5]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[#1FC8B5]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable</h3>
              <p className="text-foreground/70 leading-relaxed">
                Designed to handle growth and adapt to evolving blockchain technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1F6AE1]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-[#1F6AE1]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent</h3>
              <p className="text-foreground/70 leading-relaxed">
                Open systems that prioritize clarity and trust in decentralized networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
