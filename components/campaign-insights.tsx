"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const campaigns = [
  {
    id: 1,
    name: "Starter campaigns",
    badge: "For early-stage brands",
    promotionRate: "60–70%",
    price: "₹2,000",
    successRate: "~80%",
  },
  {
    id: 2,
    name: "Growth campaigns",
    badge: "For scaling businesses",
    promotionRate: "70–80%",
    price: "₹3,500",
    successRate: "~85%",
  },
  {
    id: 3,
    name: "High-impact launches",
    badge: "For major announcements",
    promotionRate: "75–85%",
    price: "₹5,000",
    successRate: "~92%",
  },
]

export default function CampaignInsights() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
      <div className="mb-12 space-y-4">
        <h2 className="text-4xl font-bold text-white">Campaign insights at a glance</h2>
        <p className="text-lg text-gray-400">
          Compare promotion rate, price, and success rate across different campaign types to find the right promoters
          for your goals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Card
            key={campaign.id}
            className={`bg-white/5 border-white/10 p-6 backdrop-blur cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:border-emerald-400/30 ${
              hoveredId === campaign.id ? "ring-2 ring-emerald-400/50" : ""
            }`}
            onMouseEnter={() => setHoveredId(campaign.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-300 font-semibold">
                {campaign.badge}
              </div>

              <h3 className="text-xl font-bold text-white">{campaign.name}</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Promotion Rate</p>
                  <p className="text-lg font-semibold text-emerald-400">{campaign.promotionRate}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Price per promo</p>
                  <p className="text-lg font-semibold text-white">From {campaign.price} / promo</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Success Rate</p>
                  <p className="text-lg font-semibold text-emerald-400">{campaign.successRate} success rate</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
        <p className="text-sm text-gray-400">
          <span className="text-gray-300 font-medium">Note:</span> Numbers are example data. Connect to your backend for
          live campaign metrics.
        </p>
      </div>
    </section>
  )
}
