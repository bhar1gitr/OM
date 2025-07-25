"use client"
import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Send, User, MessageSquare } from "lucide-react"
import Header from "./Header"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Temple Street", "Mumbai, Maharashtra 400001", "Near City Center Mall"],
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210 (Main)", "+91 98765 43211 (Emergency)", "+91 98765 43212 (Events)"],
      color: "from-green-400 to-teal-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shreeganesha.org", "events@shreeganesha.org", "donations@shreeganesha.org"],
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Clock,
      title: "Timings",
      details: ["Daily: 6:00 AM - 10:00 PM", "Office: 9:00 AM - 6:00 PM", "Emergency: 24/7 Available"],
      color: "from-purple-400 to-pink-500",
    },
  ]

  const departments = [
    { name: "General Inquiries", contact: "+91 98765 43210", email: "info@shreeganesha.org" },
    { name: "Event Coordination", contact: "+91 98765 43211", email: "events@shreeganesha.org" },
    { name: "Donations", contact: "+91 98765 43212", email: "donations@shreeganesha.org" },
    { name: "Volunteer Registration", contact: "+91 98765 43213", email: "volunteers@shreeganesha.org" },
    { name: "Media & Press", contact: "+91 98765 43214", email: "media@shreeganesha.org" },
    { name: "Emergency Support", contact: "+91 98765 43215", email: "emergency@shreeganesha.org" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6 animate-fadeInUp">Contact Us</h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fadeInUp">
                Get in touch with our organizing team for any questions or support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${info.color} rounded-lg p-6 text-white transform transition-all duration-300 hover:scale-105 animate-slideInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <info.icon className="w-12 h-12 mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/90 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Send className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-800">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                      <div className="relative">
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="events">Event Information</option>
                        <option value="volunteer">Volunteer Registration</option>
                        <option value="donation">Donation Query</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Please describe your inquiry in detail..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Temple Street, Mumbai</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">123 Temple Street, Mumbai, Maharashtra 400001</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Daily: 6:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <p className="mb-6">Stay connected with us on social media for updates and announcements</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Direct contacts for specific departments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-3 text-orange-600" />
                    <span className="text-sm">{dept.contact}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-3 text-orange-600" />
                    <span className="text-sm">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
