"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BottomSections() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", type: "general", message: "" })

  const handleSubmit = () => {
    alert("Thank you for your message! In production, this would be sent to your backend.")
    setContactForm({ name: "", email: "", type: "general", message: "" })
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 border-t border-white/10">
      {/* About Section */}
      <div>
        <Card className="bg-white/5 border-white/10 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-white mb-6">About Promos</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <p>
              Promos is a transparent marketplace connecting brands with verified promoters. We believe in data-driven
              decision-making and clear metrics for every campaign.
            </p>
            <p>
              Our mission is to simplify the process of finding the right promotional talent, ensuring success through
              verified performance data, transparent pricing, and a community of trusted partners.
            </p>
          </div>
        </Card>
      </div>

      {/* Creator Section */}
      <div>
        <Card className="bg-white/5 border-white/10 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-white mb-6">Creator</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
              NJ
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Built by Nishant Jha</h3>
              <p className="text-gray-300 mb-4">
                Full-stack developer passionate about MERN stack, clean UI design, and data-driven applications. Always
                building tools to solve real problems.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Portfolio
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact Section */}
      <div>
        <Card className="bg-white/5 border-white/10 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-white mb-6">Contact & Report</h2>
          <p className="text-gray-400 mb-8">Have questions? Need to report something? We're here to help.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2">Name</label>
                <Input
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="bg-white/10 border-white/20"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="bg-white/10 border-white/20"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">Type</label>
                <select
                  value={contactForm.type}
                  onChange={(e) => setContactForm({ ...contactForm, type: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded text-white p-2"
                >
                  <option value="general">General enquiry</option>
                  <option value="report-promoter">Report a promoter</option>
                  <option value="report-campaign">Report a campaign</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded text-white p-2 min-h-32"
                />
              </div>

              <Button onClick={handleSubmit} className="bg-emerald-500 hover:bg-emerald-600 text-white w-full">
                Send Message
              </Button>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <Card className="bg-emerald-500/10 border-emerald-400/30 p-4 backdrop-blur">
                <h3 className="font-semibold text-white mb-2">Support Hours</h3>
                <p className="text-sm text-gray-300">Mon – Sat</p>
                <p className="text-sm text-emerald-400 font-semibold">9:00 AM – 7:00 PM IST</p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-4 backdrop-blur">
                <h3 className="font-semibold text-white mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300">
                      Promoter Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300">
                      Best Practices
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-white/10">
        <p className="text-sm text-gray-500">© 2025 Promos. All rights reserved.</p>
      </div>
    </section>
  )
}
