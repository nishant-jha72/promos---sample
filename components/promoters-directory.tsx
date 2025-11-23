"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const promotersData = [
  {
    id: 1,
    name: "Raj Kumar",
    company: "Tech Influencers",
    promotionRate: 82,
    successRate: 88,
    promos: 45,
    price: 3500,
    initials: "RK",
  },
  {
    id: 2,
    name: "Priya Singh",
    company: "Media House",
    promotionRate: 75,
    successRate: 92,
    promos: 32,
    price: 4200,
    initials: "PS",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Digital Marketing",
    promotionRate: 88,
    successRate: 85,
    promos: 58,
    price: 4800,
    initials: "AP",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    company: "Creative Studio",
    promotionRate: 70,
    successRate: 89,
    promos: 23,
    price: 3000,
    initials: "SJ",
  },
  {
    id: 5,
    name: "Vikram Desai",
    company: "Social Squad",
    promotionRate: 90,
    successRate: 91,
    promos: 67,
    price: 5000,
    initials: "VD",
  },
  {
    id: 6,
    name: "Neha Gupta",
    company: "Brand Ambassadors",
    promotionRate: 78,
    successRate: 86,
    promos: 41,
    price: 3800,
    initials: "NG",
  },
]

export default function PromotersDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [minAccuracy, setMinAccuracy] = useState(0)
  const [sortBy, setSortBy] = useState("accuracy")
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards")

  const filteredPromoters = promotersData
    .filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.company.toLowerCase().includes(searchQuery.toLowerCase())
      const meetsAccuracy = p.successRate >= minAccuracy
      return matchesSearch && meetsAccuracy
    })
    .sort((a, b) => {
      if (sortBy === "accuracy") return b.successRate - a.successRate
      if (sortBy === "promotion") return b.promotionRate - a.promotionRate
      return b.promos - a.promos
    })

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-white mb-8">Promoter Directory</h2>

      {/* Filters */}
      <Card className="bg-white/5 border-white/10 p-6 backdrop-blur mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-gray-400 block mb-2">Search</label>
            <Input
              placeholder="Search by name, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border-white/20"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">Min Accuracy: {minAccuracy}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={minAccuracy}
              onChange={(e) => setMinAccuracy(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded text-white p-2"
            >
              <option value="accuracy">Accuracy</option>
              <option value="promotion">Promotion Rate</option>
              <option value="promos">Promos</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">View</label>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("cards")}
              >
                Cards
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
              >
                Table
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          Found <span className="text-emerald-400 font-semibold">{filteredPromoters.length}</span> promoters using demo
          data
        </div>
      </Card>

      {/* Card View */}
      {viewMode === "cards" && (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPromoters.map((promoter) => (
            <Card
              key={promoter.id}
              className="bg-white/5 border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {promoter.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{promoter.name}</h3>
                    <p className="text-sm text-gray-400">{promoter.company}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Promotion Rate</span>
                      <span className="text-xs text-emerald-400 font-semibold">{promoter.promotionRate}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{ width: `${promoter.promotionRate}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Success Rate</span>
                      <span className="text-xs text-emerald-400 font-semibold">{promoter.successRate}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{ width: `${promoter.successRate}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm py-2 border-t border-white/10">
                  <span className="text-gray-400">
                    Promos: <span className="text-white font-semibold">{promoter.promos}</span>
                  </span>
                  <span className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-300 text-xs">
                    ₹{promoter.price}
                  </span>
                </div>

                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Invite</Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Promoter</th>
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Company</th>
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Promo Rate</th>
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Success Rate</th>
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Promos</th>
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Price</th>
                <th className="px-4 py-3 text-left text-gray-400 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPromoters.map((promoter) => (
                <tr key={promoter.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {promoter.initials}
                      </div>
                      <span className="text-white font-medium">{promoter.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{promoter.company}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full"
                          style={{ width: `${promoter.promotionRate}%` }}
                        />
                      </div>
                      <span className="text-emerald-400 font-semibold text-xs">{promoter.promotionRate}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full"
                          style={{ width: `${promoter.successRate}%` }}
                        />
                      </div>
                      <span className="text-emerald-400 font-semibold text-xs">{promoter.successRate}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white">{promoter.promos}</td>
                  <td className="px-4 py-3 text-emerald-400 font-semibold">₹{promoter.price}</td>
                  <td className="px-4 py-3">
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs">
                      Invite
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
