"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Book verified promoters with transparent performance data.
            </h1>
            <p className="text-lg text-gray-300">
              Connect with the right promoters for your campaigns. Compare rates, success metrics, and pricing in one
              place.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={() => onNavigate("promoters")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-8"
            >
              Browse promoters
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("register")} className="text-base px-8">
              Become a promoter
            </Button>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Card className="bg-white/5 border-white/10 p-4 text-center backdrop-blur">
              <p className="text-3xl font-bold text-emerald-400">78%</p>
              <p className="text-sm text-gray-400 mt-2">Avg promotion rate</p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-4 text-center backdrop-blur">
              <p className="text-3xl font-bold text-emerald-400">92%</p>
              <p className="text-sm text-gray-400 mt-2">Avg success rate</p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-4 text-center backdrop-blur">
              <p className="text-3xl font-bold text-emerald-400">₹2K–5K</p>
              <p className="text-sm text-gray-400 mt-2">Price per promo</p>
            </Card>
          </div>
        </div>

        {/* Right Column - Stats Card */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-400/30 p-8 backdrop-blur">
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 text-sm mb-2">Promotion Rate</p>
                <div className="flex items-center gap-3">
                  <p className="text-4xl font-bold text-white">78%</p>
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-300 text-sm mb-2">Success Rate</p>
                <div className="flex items-center gap-3">
                  <p className="text-4xl font-bold text-white">92%</p>
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-300 text-sm mb-2">Avg Price / Promo</p>
                <p className="text-2xl font-bold text-emerald-400">₹3,500</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-3">This week's campaigns</p>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "65%" }} />
                </div>
              </div>
            </div>
          </Card>

          {/* Badge Card */}
          <Card className="bg-emerald-500/10 border-emerald-400/30 p-4 backdrop-blur">
            <p className="text-sm text-gray-300">
              <span className="text-emerald-400 font-semibold">Top performer unlocked</span> · +12 successful promos
              this month
            </p>
          </Card>

          {/* Profile Highlight */}
          <Card className="bg-white/5 border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-all">
            <div className="space-y-4">
              <img
                src="/verified-promoter.jpg"
                alt="Featured promoter"
                className="w-20 h-20 rounded-full mx-auto ring-2 ring-emerald-400/30 animate-pulse-glow"
              />
              <p className="text-center text-sm text-gray-400">Verified promoter profile</p>
              <p className="text-center text-sm text-gray-300">
                Top performer with 50+ successful campaigns and 95% success rate
              </p>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">View sample profile</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
