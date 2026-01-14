import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Streams Holdings LTD</h3>
            <p className="text-white/70 leading-relaxed">
              Professional blockchain and Web3 software development company
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Blockchain Development</li>
              <li>DEX Platforms</li>
              <li>Smart Contracts</li>
              <li>Web3 Applications</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1FC8B5] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1FC8B5] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Streams-Holdings-LTD"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1FC8B5] transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Streams Holdings LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
