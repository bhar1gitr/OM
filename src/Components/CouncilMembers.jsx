"use client"
import { useState, useEffect } from "react"
import { Phone, Mail, Award, Users, Calendar, Heart } from "lucide-react"
import Header from "./Header"

export default function CouncilPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const councilMembers = [
    {
      name: "Shri Rajesh Sharma",
      position: "President",
      experience: "15 years",
      phone: "+91 98765 43210",
      email: "rajesh@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Overall coordination", "Community relations", "Strategic planning"],
    },
    {
      name: "Smt. Priya Patel",
      position: "Vice President",
      experience: "12 years",
      phone: "+91 98765 43211",
      email: "priya@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Cultural programs", "Women's committee", "Decoration planning"],
    },
    {
      name: "Shri Amit Kumar",
      position: "Secretary",
      experience: "10 years",
      phone: "+91 98765 43212",
      email: "amit@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Documentation", "Meeting coordination", "Communication"],
    },
    {
      name: "Shri Suresh Gupta",
      position: "Treasurer",
      experience: "8 years",
      phone: "+91 98765 43213",
      email: "suresh@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Financial management", "Donation tracking", "Budget planning"],
    },
    {
      name: "Smt. Meera Singh",
      position: "Cultural Secretary",
      experience: "7 years",
      phone: "+91 98765 43214",
      email: "meera@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Event planning", "Artist coordination", "Program scheduling"],
    },
    {
      name: "Shri Vikram Joshi",
      position: "Security Head",
      experience: "9 years",
      phone: "+91 98765 43215",
      email: "vikram@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Crowd management", "Safety protocols", "Volunteer coordination"],
    },
    {
      name: "Smt. Kavita Reddy",
      position: "Prasad Committee Head",
      experience: "6 years",
      phone: "+91 98765 43216",
      email: "kavita@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Food preparation", "Distribution management", "Kitchen coordination"],
    },
    {
      name: "Shri Deepak Agarwal",
      position: "Decoration Head",
      experience: "11 years",
      phone: "+91 98765 43217",
      email: "deepak@shreeganesha.org",
      image: "/placeholder.svg?height=200&width=200",
      responsibilities: ["Pandal decoration", "Lighting arrangements", "Theme planning"],
    },
  ]

  const committees = [
    {
      name: "Executive Committee",
      members: ["President", "Vice President", "Secretary", "Treasurer"],
      icon: Users,
      color: "from-orange-400 to-red-500",
    },
    {
      name: "Cultural Committee",
      members: ["Cultural Secretary", "Program Coordinators", "Artist Liaisons"],
      icon: Award,
      color: "from-red-400 to-pink-500",
    },
    {
      name: "Security Committee",
      members: ["Security Head", "Volunteer Coordinators", "Safety Officers"],
      icon: Heart,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Prasad Committee",
      members: ["Prasad Head", "Kitchen Staff", "Distribution Team"],
      icon: Calendar,
      color: "from-green-400 to-teal-500",
    },
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
              <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6 animate-fadeInUp">Council Members</h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fadeInUp">
                Meet the dedicated team behind our successful Ganesh celebrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced leaders committed to serving our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {councilMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slideInUp overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{member.position}</p>

                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-gray-700">Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-orange-500" />
                      {member.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-orange-500" />
                      {member.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Committees</h2>
            <p className="text-xl text-gray-600">Specialized teams working together for a successful celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committees.map((committee, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${committee.color} rounded-lg p-6 text-white transform transition-all duration-300 hover:scale-105 animate-slideInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <committee.icon className="w-12 h-12 mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-4">{committee.name}</h3>
                <ul className="space-y-2">
                  {committee.members.map((member, idx) => (
                    <li key={idx} className="text-white/90 text-sm">
                      • {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Have questions? Reach out to our council members</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
              <p className="mb-6">For general questions about our celebration, events, or how to get involved</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@shreeganesha.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
