"use client"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isLoggedIn: boolean
  user: { name: string; role: "Admin" | "Promoter" } | null
  onNavigate: (page: string) => void
  onLogout: () => void
  currentPage: string
}

export default function Header({ isLoggedIn, user, onNavigate, onLogout, currentPage }: HeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand & Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
            P
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Promos</h1>
            <p className="text-xs text-gray-400">Promoter marketplace for modern campaigns</p>
          </div>

          {/* Profile Picture */}
          <div className="ml-4">
            <img
              src="/professional-profile.jpg"
              alt="Profile"
              className="w-14 h-14 rounded-full shadow-lg ring-2 ring-emerald-400/30 animate-float"
            />
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-2">
          <Button
            variant={currentPage === "home" ? "default" : "ghost"}
            size="sm"
            onClick={() => onNavigate("home")}
            className="text-base"
          >
            Home
          </Button>
          <Button
            variant={currentPage === "promoters" ? "default" : "ghost"}
            size="sm"
            onClick={() => onNavigate("promoters")}
            className="text-base"
          >
            Promoters
          </Button>
          <Button variant="ghost" size="sm" onClick={() => onNavigate("register")} className="text-base">
            Become a promoter
          </Button>
        </nav>

        {/* Right: Auth Area */}
        <div className="flex items-center gap-3">
          {isLoggedIn && user ? (
            <>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {getInitials(user.name)}
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.role}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={onLogout} className="text-base bg-transparent">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => onNavigate("login")} className="text-base">
                Login
              </Button>
              <Button size="sm" onClick={() => onNavigate("register")} className="text-base">
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
