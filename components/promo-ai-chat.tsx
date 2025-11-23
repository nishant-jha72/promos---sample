"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
}

export default function PromoAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi! I'm PROMO AI. I can help you find the right promoters, understand campaign metrics, and answer questions about our marketplace. What can I help you with?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newUserMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        text: inputValue,
      }

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "This is a demo. In production, I would be connected to the Promos API or an AI service to provide intelligent responses about promoters, campaigns, and marketplace insights.",
      }

      setMessages((prev) => [...prev, newUserMessage, botReply])
      setInputValue("")
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-28 right-8 z-50 w-96 max-h-96 bg-white/5 border-white/10 backdrop-blur shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
                AI
              </div>
              <h3 className="text-white font-semibold">PROMO AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/80">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-emerald-500/20 text-white border border-emerald-400/30"
                      : "bg-white/10 text-gray-200 border border-white/20"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4 flex gap-2">
            <Input
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="bg-white/10 border-white/20 text-white"
            />
            <Button onClick={handleSendMessage} size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Send
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
