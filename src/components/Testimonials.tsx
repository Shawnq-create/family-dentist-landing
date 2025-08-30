'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Popescu',
    image: '/images/people/filip-rankovic-grobgaard-9_1Y_IKP4tY-unsplash.jpg',
    rating: 5,
    text: 'Excellent service! Dr. Smith and the team made my family feel comfortable during our visit. The kids actually enjoyed their dental cleaning!',
    treatment: 'Family Dental Care'
  },
  {
    name: 'Alexandru Ionescu',
    image: '/images/people/filip-rankovic-grobgaard-9_1Y_IKP4tY-unsplash.jpg',
    rating: 5,
    text: 'Professional and caring staff. The dental implant procedure was painless and the results are amazing. Highly recommend!',
    treatment: 'Dental Implants'
  },
  {
    name: 'Elena Gheorghe',
    image: '/images/people/filip-rankovic-grobgaard-9_1Y_IKP4tY-unsplash.jpg',
    rating: 5,
    text: 'The cosmetic dentistry work exceeded my expectations. My smile looks natural and beautiful. Thank you for the amazing work!',
    treatment: 'Cosmetic Dentistry'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied patients</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
