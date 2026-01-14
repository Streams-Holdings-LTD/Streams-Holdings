import { MapPin, Users, Laptop } from "lucide-react"

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">How We Work</h2>
          <div className="h-1 w-24 bg-[#1FC8B5] mx-auto mb-8 rounded-full" />

          <h3 className="text-2xl font-semibold text-center mb-12">Our Approach</h3>

          <p className="text-lg text-foreground/80 leading-relaxed text-center mb-16">
            We provide remote blockchain and software development services across Canada and internationally.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1F6AE1]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-[#1F6AE1]" size={36} />
              </div>
              <div className="text-4xl font-bold text-[#1F6AE1] mb-2">01</div>
              <h4 className="text-xl font-semibold mb-3">Consultation</h4>
              <p className="text-foreground/70 leading-relaxed">
                Understanding your vision and technical requirements for blockchain solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1FC8B5]/10 rounded-full flex items-center justify-center mb-6">
                <Laptop className="text-[#1FC8B5]" size={36} />
              </div>
              <div className="text-4xl font-bold text-[#1FC8B5] mb-2">02</div>
              <h4 className="text-xl font-semibold mb-3">Development</h4>
              <p className="text-foreground/70 leading-relaxed">
                Building secure, scalable systems with cutting-edge blockchain technology
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1F6AE1]/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-[#1F6AE1]" size={36} />
              </div>
              <div className="text-4xl font-bold text-[#1F6AE1] mb-2">03</div>
              <h4 className="text-xl font-semibold mb-3">Deployment</h4>
              <p className="text-foreground/70 leading-relaxed">
                Launching and supporting your project with ongoing maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
