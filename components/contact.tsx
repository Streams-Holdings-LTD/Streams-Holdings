"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, User } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact</h2>
          <div className="h-1 w-24 bg-[#1FC8B5] mx-auto mb-8 rounded-full" />

          <h3 className="text-2xl font-semibold text-center mb-12">Contact Streams Holdings LTD</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-11 py-6 text-base"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-11 py-6 text-base"
                required
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Textarea
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="pl-11 pt-3 min-h-[160px] text-base resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1F6AE1] hover:bg-[#1F6AE1]/90 text-white font-semibold rounded-md text-lg py-6"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
