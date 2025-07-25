"use client"
import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin, Users, Music, Award, Star } from "lucide-react"
import Header from "./Header"

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const events = [
    {
      date: "Sep 19",
      fullDate: "September 19, 2024",
      event: "Ganesh Chaturthi - Pran Pratishtha",
      time: "6:00 AM",
      duration: "2 hours",
      location: "Main Pandal",
      category: "religious",
      description: "Sacred installation ceremony of Lord Ganesha with traditional rituals",
      participants: "All devotees welcome",
      highlights: ["Vedic chanting", "Flower decoration", "Prasad distribution"],
    },
    {
      date: "Sep 20",
      fullDate: "September 20, 2024",
      event: "Classical Dance Competition",
      time: "7:00 PM",
      duration: "3 hours",
      location: "Cultural Stage",
      category: "cultural",
      description: "Traditional dance forms competition for all age groups",
      participants: "Pre-registration required",
      highlights: ["Bharatanatyam", "Kathak", "Folk dances", "Prize distribution"],
    },
    {
      date: "Sep 21",
      fullDate: "September 21, 2024",
      event: "Bhajan Sandhya",
      time: "6:30 PM",
      duration: "2.5 hours",
      location: "Main Pandal",
      category: "religious",
      description: "Evening of devotional songs and spiritual music",
      participants: "Open to all",
      highlights: ["Local artists", "Community singing", "Spiritual discourse"],
    },
    {
      date: "Sep 22",
      fullDate: "September 22, 2024",
      event: "Children's Art Competition",
      time: "10:00 AM",
      duration: "3 hours",
      location: "Activity Area",
      category: "competition",
      description: "Art and craft competition for children aged 5-15 years",
      participants: "Children only",
      highlights: ["Drawing", "Painting", "Clay modeling", "Certificates for all"],
    },
    {
      date: "Sep 23",
      fullDate: "September 23, 2024",
      event: "Community Feast",
      time: "12:00 PM",
      duration: "4 hours",
      location: "Dining Hall",
      category: "community",
      description: "Traditional vegetarian feast for all devotees",
      participants: "All devotees",
      highlights: ["Traditional recipes", "Community service", "Free for all"],
    },
    {
      date: "Sep 24",
      fullDate: "September 24, 2024",
      event: "Musical Evening",
      time: "7:30 PM",
      duration: "3 hours",
      location: "Cultural Stage",
      category: "cultural",
      description: "Live musical performances by renowned artists",
      participants: "All music lovers",
      highlights: ["Classical music", "Devotional songs", "Local talent showcase"],
    },
    {
      date: "Sep 25",
      fullDate: "September 25, 2024",
      event: "Youth Talent Show",
      time: "6:00 PM",
      duration: "4 hours",
      location: "Main Stage",
      category: "competition",
      description: "Platform for young talents to showcase their skills",
      participants: "Age 16-25 years",
      highlights: ["Singing", "Dancing", "Drama", "Stand-up comedy"],
    },
    {
      date: "Sep 26",
      fullDate: "September 26, 2024",
      event: "Spiritual Discourse",
      time: "5:00 PM",
      duration: "2 hours",
      location: "Main Pandal",
      category: "religious",
      description: "Enlightening discourse on Lord Ganesha's teachings",
      participants: "All devotees",
      highlights: ["Learned speaker", "Q&A session", "Spiritual guidance"],
    },
    {
      date: "Sep 27",
      fullDate: "September 27, 2024",
      event: "Cultural Parade",
      time: "4:00 PM",
      duration: "3 hours",
      location: "Street Procession",
      category: "cultural",
      description: "Colorful procession with traditional performances",
      participants: "Community members",
      highlights: ["Traditional costumes", "Music bands", "Dance groups"],
    },
    {
      date: "Sep 28",
      fullDate: "September 28, 2024",
      event: "Visarjan Ceremony",
      time: "4:00 PM",
      duration: "6 hours",
      location: "Pandal to Water Body",
      category: "religious",
      description: "Final farewell ceremony with grand procession",
      participants: "All devotees",
      highlights: ["Grand procession", "Final aarti", "Eco-friendly immersion"],
    },
  ]

  const categories = [
    { id: "all", name: "All Events", icon: Calendar, color: "bg-gray-600" },
    { id: "religious", name: "Religious", icon: Star, color: "bg-orange-600" },
    { id: "cultural", name: "Cultural", icon: Music, color: "bg-purple-600" },
    { id: "competition", name: "Competitions", icon: Award, color: "bg-green-600" },
    { id: "community", name: "Community", icon: Users, color: "bg-blue-600" },
  ]

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

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
              <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6 animate-fadeInUp">
                Events & Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fadeInUp">
                Join us for 10 days of spiritual celebrations, cultural programs, and community activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Categories</h2>
            <p className="text-gray-600">Filter events by category to find what interests you most</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-slideInUp ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Header */}
                <div
                  className={`p-6 ${
                    event.category === "religious"
                      ? "bg-gradient-to-r from-orange-500 to-red-500"
                      : event.category === "cultural"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : event.category === "competition"
                          ? "bg-gradient-to-r from-green-500 to-teal-500"
                          : "bg-gradient-to-r from-blue-500 to-indigo-500"
                  } text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">{event.date}</div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">{event.fullDate}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.event}</h3>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-orange-500" />
                      <span>
                        {event.time} ({event.duration})
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-3 text-orange-500" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Event Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Don't Miss Any Event!</h3>
              <p className="text-xl mb-6">
                Stay updated with our event schedule and be part of this divine celebration
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Download Schedule
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Set Reminders
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
