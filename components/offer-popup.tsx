"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => setIsOpen(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition z-10"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 pt-8 pb-6 text-center">
          <div className="text-5xl font-bold text-white mb-2">50%</div>
          <p className="text-purple-100 text-lg font-semibold">OFF YOUR FIRST MONTH</p>
        </div>

        {/* Content */}
        <div className="px-6 py-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Limited Time Offer!</h2>
          <p className="text-slate-600 mb-6">
            Find your perfect rental home and save big on your first month. Use code below at checkout.
          </p>

          {/* Promo Code */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg py-3 mb-6">
            <p className="text-sm text-slate-600 mb-1">Promo Code</p>
            <p className="text-2xl font-bold text-purple-600 font-mono">NEST50</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition mb-3"
          >
            Claim Offer Now
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full border-2 border-slate-200 text-slate-700 font-semibold py-2 rounded-lg hover:bg-slate-50 transition"
          >
            Maybe Later
          </button>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 text-center border-t border-slate-200">
          <p className="text-xs text-slate-500">Valid for new users only. Offer expires in 7 days.</p>
        </div>
      </div>
    </div>
  )
}
