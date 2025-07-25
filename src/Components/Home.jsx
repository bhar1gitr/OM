import { useState, useEffect } from "react"
import { Heart, Users, Calendar, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`flex items-center space-x-3 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl animate-pulse">
                🕉
              </div>
              <div>
                <h1 className="text-2xl font-bold">Shree Ganesh Mandal</h1>
                <p className="text-orange-200 text-sm">Ganpati Bappa Morya</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                About
              </Link>
              <Link
                to="/events"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Events
              </Link>
              <Link
                to="/donation"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Donation
              </Link>
              <Link
                to="/council"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Council Members
              </Link>
              <Link
                to="/rules"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Rules & Regulations
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 animate-slideDown">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  Home
                </Link>
                <Link to="/about" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  About
                </Link>
                <Link to="/events" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  Events
                </Link>
                <Link to="/donation" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  Donation
                </Link>
                <Link to="/council" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  Council Members
                </Link>
                <Link to="/rules" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  Rules & Regulations
                </Link>
                <Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300 font-medium">
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-orange-600 mb-6 animate-bounce">गणपति बाप्पा मोर्या</h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Welcome to our Ganesh Chaturthi celebration! Join us in honoring Lord Ganesha with devotion, joy, and
                community spirit.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/events"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join Celebration
                </Link>
                <Link
                  to="/events"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Events
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Users, number: "5000+", label: "Devotees" },
                { icon: Calendar, number: "10", label: "Days of Celebration" },
                { icon: Heart, number: "₹2,50,000", label: "Donations Received" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-lg transform transition-all duration-1000 hover:scale-105 hover:shadow-xl animate-float ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{
                    transitionDelay: `${600 + index * 200}ms`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <stat.icon className="w-12 h-12 text-orange-600 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeInUp">Explore Our Celebration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp">
              Discover everything about our Ganesh festival celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "About Us",
                description: "Learn about our 25+ years of celebrating Lord Ganesha",
                link: "/about",
                icon: "🏛️",
                color: "from-orange-400 to-red-500",
              },
              {
                title: "Events & Programs",
                description: "Join our cultural programs and religious ceremonies",
                link: "/events",
                icon: "🎭",
                color: "from-red-400 to-pink-500",
              },
              {
                title: "Council Members",
                description: "Meet our dedicated organizing committee",
                link: "/council",
                icon: "👥",
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Donation",
                description: "Support our celebration with your generous contributions",
                link: "/donation",
                icon: "💝",
                color: "from-green-400 to-teal-500",
              },
              {
                title: "Rules & Guidelines",
                description: "Important guidelines for all participants",
                link: "/rules",
                icon: "📋",
                color: "from-blue-400 to-indigo-500",
              },
              {
                title: "Contact Us",
                description: "Get in touch with our organizing team",
                link: "/contact",
                icon: "📞",
                color: "from-purple-400 to-pink-500",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`bg-gradient-to-br ${item.color} rounded-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slideInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl animate-pulse">
                  🕉
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Shree Ganesh Mandal</h3>
                  <p className="text-gray-400">Ganpati Bappa Morya</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Celebrating Lord Ganesha with devotion and community spirit for over 25 years.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">123 Temple Street, Mumbai, Maharashtra 400001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">info@shreeganesha.org</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", to: "/" },
                  { name: "About Us", to: "/about" },
                  { name: "Events", to: "/events" },
                  { name: "Council", to: "/council" },
                  { name: "Rules", to: "/rules" },
                  { name: "Contact", to: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a
                  to="#"
                  className="bg-orange-600 hover:bg-orange-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  to="#"
                  className="bg-orange-600 hover:bg-orange-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  to="#"
                  className="bg-orange-600 hover:bg-orange-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Shree Ganesh Mandal. All rights reserved. | Made with ❤️ for Lord Ganesha
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
