'use client'

import { CheckCircle, Shield, Heart, Smile, Users, Clock } from 'lucide-react'

const services = [
  {
    icon: CheckCircle,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    price: 'From 150 RON'
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers to enhance your appearance.',
    price: 'From 300 RON'
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions with natural-looking results.',
    price: 'From 1200 RON'
  },
  {
    icon: Heart,
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care specifically designed for children and teenagers.',
    price: 'From 100 RON'
  },
  {
    icon: Users,
    title: 'Family Packages',
    description: 'Special rates for families with comprehensive care plans.',
    price: 'From 400 RON'
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    description: '24/7 emergency dental services for urgent dental problems.',
    price: 'From 200 RON'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to keep your family&apos;s smiles healthy and beautiful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold text-lg">{service.price}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
