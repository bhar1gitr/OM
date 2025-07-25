"use client"
import { useState, useEffect } from "react"
import { Heart, Users, Calendar, Award, Star, Target } from "lucide-react"
import { Link } from "react-router-dom";
import Header from "./Header"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const achievements = [
    { year: "1999", title: "Mandal Established", description: "Founded with the vision of community celebration" },
    { year: "2005", title: "First Cultural Program", description: "Organized our first major cultural event" },
    { year: "2010", title: "Eco-Friendly Initiative", description: "Started using clay idols and natural decorations" },
    { year: "2015", title: "Community Service Award", description: "Recognized for outstanding community service" },
    { year: "2020", title: "Digital Celebration", description: "Adapted to virtual celebrations during pandemic" },
    { year: "2024", title: "25 Years Milestone", description: "Celebrating 25 years of devotion and service" },
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
              <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6 animate-fadeInUp">About Our Mandal</h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fadeInUp">
                25 Years of Devotion, Community Service, and Cultural Preservation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-3xl font-bold text-orange-600">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To celebrate Lord Ganesha's divine presence while fostering community unity, cultural preservation,
                  and spiritual growth. We organize various cultural programs, charitable activities, and religious
                  ceremonies throughout the festival, bringing people together in devotion and joy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-3xl font-bold text-orange-600">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be a beacon of cultural heritage and spiritual enlightenment, inspiring future generations to
                  embrace our traditions while adapting to modern times. We envision a community where devotion,
                  service, and celebration unite people from all walks of life.
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-8 text-white">
                <h4 className="text-3xl font-bold mb-6">What We Do</h4>
                <div className="space-y-4">
                  {[
                    "Daily Aarti and Bhajan sessions",
                    "Cultural programs and competitions",
                    "Community service and charity work",
                    "Eco-friendly celebration practices",
                    "Educational workshops for youth",
                    "Food distribution to the needy",
                    "Traditional art and craft exhibitions",
                    "Spiritual discourses and lectures",
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 animate-slideInRight"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                      <span className="text-white/90">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeInUp">Our Journey</h2>
            <p className="text-xl text-gray-600 animate-fadeInUp">
              Milestones in our 25-year celebration of Lord Ganesha
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-300"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-slideInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-2xl font-bold text-orange-600 mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our community's devotion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of Service", icon: Calendar },
              { number: "50,000+", label: "Devotees Served", icon: Users },
              { number: "₹25,00,000", label: "Charity Distributed", icon: Heart },
              { number: "100+", label: "Cultural Programs", icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-6 transform transition-all duration-1000 hover:scale-105 animate-float ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <stat.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fadeInUp">Join Our Celebration</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto animate-fadeInUp">
            Be part of our spiritual journey and help us continue this beautiful tradition for generations to come.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Events
            </Link>
            <Link
              href="/donation"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Support Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
