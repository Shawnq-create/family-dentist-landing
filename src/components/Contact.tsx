'use client'

import { useEffect, useRef } from 'react'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
      };
    };
    initMap: () => void;
  }
}

export default function Contact() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 44.4268, lng: 26.1025 }, // Approximate coordinates for Bucharest
          zoom: 15,
        })

        new window.google.maps.Marker({
          position: { lat: 44.4268, lng: 26.1025 },
          map: map,
          title: 'DentaCare Family - Strada Maria Rosetti 26A, București 020487',
        })
      }
    }

    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      window.initMap = loadGoogleMaps
      document.head.appendChild(script)
    } else {
      loadGoogleMaps()
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Clinic</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in the heart of Bucharest. We're here to serve you and your family.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Strada Maria Rosetti 26A<br />
                    București 020487<br />
                    Romania
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">0720.123.123</p>
                  <p className="text-sm text-gray-500">Call for appointments and emergencies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency only</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@dentacarefamily.ro</p>
                  <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
              <div ref={mapRef} className="w-full h-full">
                {/* Fallback content when Google Maps is not loaded */}
                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us Here</h3>
                    <p className="text-gray-600">
                      Strada Maria Rosetti 26A<br />
                      București 020487
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Strada+Maria+Rosetti+26A,+București+020487"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
