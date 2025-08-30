'use client'

import { Phone } from 'lucide-react'

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-4 px-4 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Phone size={20} />
        <span className="font-medium">Call to make an appointment</span>
        <a 
          href="tel:0720123123" 
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          0720.123.123
        </a>
      </div>
    </div>
  )
}
