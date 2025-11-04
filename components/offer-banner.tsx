"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-purple-100">Limited Time Offer</p>
            <p className="text-2xl sm:text-3xl font-bold">Get 50% OFF Your First Month!</p>
            <p className="text-sm text-purple-100 mt-1">Use code: NEST50 at checkout</p>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 p-2 hover:bg-purple-500 rounded-lg transition-colors"
          aria-label="Close offer banner"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  )
}
