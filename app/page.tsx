"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CampaignInsights from "@/components/campaign-insights"
import PromotersDirectory from "@/components/promoters-directory"
import AuthPages from "@/components/auth-pages"
import BottomSections from "@/components/bottom-sections"
import PromoAIChat from "@/components/promo-ai-chat"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name: string; role: "Admin" | "Promoter" } | null>(null)

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleLogin = (userData: { name: string; role: "Admin" | "Promoter" }) => {
    setUser(userData)
    setIsLoggedIn(true)
    setCurrentPage("home")
  }

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    setCurrentPage("home")
  }

  return (
    <main className="bg-pattern min-h-screen">
      <Header
        isLoggedIn={isLoggedIn}
        user={user}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        currentPage={currentPage}
      />

      <div className="pt-20">
        {currentPage === "home" && <HeroSection onNavigate={handleNavigate} />}
        {currentPage === "home" && <CampaignInsights />}
        {currentPage === "promoters" && <PromotersDirectory />}
        {currentPage === "login" && <AuthPages page="login" onLogin={handleLogin} onNavigate={handleNavigate} />}
        {currentPage === "register" && <AuthPages page="register" onNavigate={handleNavigate} />}
        {currentPage === "home" && <BottomSections />}
      </div>

      <PromoAIChat />
    </main>
  )
}
