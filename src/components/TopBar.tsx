'use client'

import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} />
            <span>0720.123.123</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>Strada Maria Rosetti 26A, București 020487</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-200 transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
