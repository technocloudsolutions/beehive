import { Mail, Phone, MapPin, MessageCircle, Send, Heart, Star } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 72 999 1144',
    href: 'tel:+94729991144',
    color: 'from-amber-500 to-amber-600',
    hoverColor: 'hover:text-amber-400'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+94 72 999 1144',
    href: 'https://wa.me/94729991144',
    color: 'from-emerald-500 to-emerald-600',
    hoverColor: 'hover:text-emerald-400'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@beehivevilla.com',
    href: 'mailto:info@beehivevilla.com',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:text-blue-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '71/1, Ogastawatta, Kandy, Sri Lanka',
    href: 'https://maps.google.com/?q=7.261185,80.609176',
    color: 'from-red-500 to-red-600',
    hoverColor: 'hover:text-red-400'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative section-padding bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-full translate-y-48 -translate-x-48" />
      
      <div className="relative container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-amber-200 rounded-full px-6 py-2 mb-6">
            <Send className="h-5 w-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-medium">Get in Touch</span>
          </div>
          <h2 className="section-title">
            Contact Us
          </h2>
          <p className="section-subtitle">
            Have questions or ready to book your stay? Get in touch with us and we&apos;ll help you plan your perfect eco-friendly getaway in the heart of Kandy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="card-modern p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gradient-gold mb-3">
                  Reach Out to Us
                </h3>
                <p className="text-gray-600">
                  We&apos;re here to help make your stay memorable
                </p>
                <div className="flex items-center justify-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">5.0 Rating</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">{info.label}</p>
                          <a
                            href={info.href}
                            className={`text-gray-600 ${info.hoverColor} transition-colors font-medium break-words`}
                            target={info.label === 'Location' ? '_blank' : undefined}
                            rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-amber-500 mr-2" />
                  Response Times
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span className="font-medium text-emerald-600">Within 1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="font-medium text-blue-600">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span className="font-medium text-amber-600">Immediate</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/beehivevilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/beehivevilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up delay-200">
            <div className="card-modern p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gradient-nature mb-3">
                  Book Your Stay
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you with availability and pricing
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-modern p-8 bg-gradient-to-r from-amber-50 to-emerald-50 border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🐝 Ready for Your Eco-Adventure?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable experience combining luxury accommodation with unique bee keeping adventures in the beautiful hills of Kandy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94729991144?text=Hi, I'm interested in booking a stay at Bee Hive Villa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Quick WhatsApp Booking
              </a>
              <a
                href="tel:+94729991144"
                className="btn-outline inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 