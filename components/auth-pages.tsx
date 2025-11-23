"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface AuthPagesProps {
  page: "login" | "register"
  onLogin?: (userData: { name: string; role: "Admin" | "Promoter" }) => void
  onNavigate: (page: string) => void
}

export default function AuthPages({ page, onLogin, onNavigate }: AuthPagesProps) {
  const [role, setRole] = useState<"Admin" | "Promoter">("Promoter")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleLogin = () => {
    if (onLogin && email && password) {
      const userData = {
        name: name || email.split("@")[0],
        role,
      }
      onLogin(userData)
    }
  }

  if (page === "login") {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Card className="bg-white/5 border-white/10 backdrop-blur w-full max-w-md p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Login to Promos</h2>
            <p className="text-gray-400">Access your promoter account and manage campaigns</p>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">I am a:</label>
            <div className="flex gap-2">
              <Button
                variant={role === "Admin" ? "default" : "outline"}
                size="sm"
                onClick={() => setRole("Admin")}
                className="flex-1"
              >
                Admin
              </Button>
              <Button
                variant={role === "Promoter" ? "default" : "outline"}
                size="sm"
                onClick={() => setRole("Promoter")}
                className="flex-1"
              >
                Promoter
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20"
            />
          </div>

          <Button onClick={handleLogin} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            Login
          </Button>

          <p className="text-center text-sm text-gray-400">
            This is a demo. In production, this would connect to your authentication backend.
          </p>

          <div className="text-center">
            <button
              onClick={() => onNavigate("register")}
              className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Don't have an account? Register here
            </button>
          </div>
        </Card>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
      <Card className="bg-white/5 border-white/10 backdrop-blur w-full max-w-md p-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">Create your Promos account</h2>
          <p className="text-gray-400">Join as a promoter and start earning</p>
        </div>

        <div>
          <p className="text-sm text-gray-300 font-semibold mb-3">Onboarding Steps:</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">1.</span>
              <span>Collect your profile details and credentials</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">2.</span>
              <span>Verify your identity with documents</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">3.</span>
              <span>Approval and profile published to marketplace</span>
            </li>
          </ul>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-2">Full Name</label>
          <Input
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/10 border-white/20"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-2">Email</label>
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-2">Password</label>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-white/20"
          />
        </div>

        <Button onClick={() => onNavigate("home")} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
          Create Account
        </Button>

        <p className="text-center text-sm text-gray-400">
          This is a demo. In production, this would process your registration.
        </p>

        <div className="text-center">
          <button
            onClick={() => onNavigate("login")}
            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Already have an account? Login here
          </button>
        </div>
      </Card>
    </section>
  )
}
