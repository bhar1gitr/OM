"use client"
import { useState, useEffect } from "react"
import { Shield, AlertTriangle, CheckCircle, Clock, Users, Heart } from "lucide-react"
import Header from "./Header"

export default function RulesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const rulesSections = [
    {
      title: "General Guidelines",
      icon: Shield,
      color: "from-blue-400 to-indigo-500",
      rules: [
        "All devotees must maintain respectful behavior during prayers and ceremonies",
        "Photography is allowed but flash photography is prohibited during aarti",
        "Mobile phones should be kept on silent mode within the pandal premises",
        "Smoking, alcohol consumption, and non-vegetarian food are strictly prohibited",
        "Children must be accompanied by adults at all times",
        "Proper dress code must be followed - modest and traditional attire preferred",
        "Shoes must be removed before entering the main prayer area",
        "Maintain cleanliness and do not litter in the pandal or surrounding areas",
      ],
    },
    {
      title: "Safety & Security",
      icon: AlertTriangle,
      color: "from-red-400 to-pink-500",
      rules: [
        "Follow all instructions given by security personnel and volunteers",
        "Do not bring any sharp objects, weapons, or dangerous items",
        "Report any suspicious activity immediately to security",
        "Emergency exits must be kept clear at all times",
        "Do not climb on decorations, barriers, or pandal structures",
        "In case of emergency, follow evacuation procedures calmly",
        "First aid station is available - inform volunteers if medical help is needed",
        "Lost and found counter is available for missing items",
      ],
    },
    {
      title: "Donation Guidelines",
      icon: Heart,
      color: "from-green-400 to-teal-500",
      rules: [
        "All donations are voluntary and should be made willingly",
        "Official receipts will be provided for all donations above ₹500",
        "Cash donations should be made only at designated counters",
        "Online donation options are available through our official website",
        "Donation records are maintained transparently and audited annually",
        "Special donation categories: Prasad, Decoration, Cultural Programs, General Fund",
        "Corporate sponsorships are welcome with proper documentation",
        "All donations are used solely for festival expenses and community service",
      ],
    },
    {
      title: "Event Participation",
      icon: Users,
      color: "from-purple-400 to-pink-500",
      rules: [
        "Registration is required for all cultural program participants",
        "Age-appropriate categories for competitions and performances",
        "Original compositions and performances are encouraged",
        "Time limits must be strictly followed for all performances",
        "Participants must report 30 minutes before their scheduled time",
        "Props and costumes are participant's responsibility unless specified",
        "Judges' decisions in all competitions are final",
        "Certificates and prizes will be distributed on the final day",
      ],
    },
    {
      title: "Volunteer Code",
      icon: CheckCircle,
      color: "from-yellow-400 to-orange-500",
      rules: [
        "Volunteers must wear identification badges at all times",
        "Punctuality is essential - report for duty 15 minutes early",
        "Treat all devotees with respect and courtesy",
        "Follow the chain of command and report to designated coordinators",
        "Maintain confidentiality of internal matters and discussions",
        "No personal favors or special treatment to friends/relatives",
        "Emergency contact numbers must be provided during registration",
        "Volunteer appreciation ceremony will be held after the festival",
      ],
    },
    {
      title: "Timing & Schedule",
      icon: Clock,
      color: "from-indigo-400 to-purple-500",
      rules: [
        "Pandal opens daily at 6:00 AM and closes at 10:00 PM",
        "Morning aarti: 7:00 AM | Evening aarti: 7:00 PM",
        "Cultural programs start at 8:00 PM (except on special days)",
        "Prasad distribution: After morning and evening aarti",
        "Special darshan timings for senior citizens: 9:00 AM - 11:00 AM",
        "Last day (Visarjan) - Extended hours till completion of ceremony",
        "Cleaning and maintenance: 5:00 AM - 6:00 AM daily",
        "Committee meetings: Every alternate day at 11:00 PM",
      ],
    },
  ]

  const importantNotices = [
    {
      title: "COVID-19 Precautions",
      description: "Hand sanitizers available. Maintain social distancing when possible.",
      type: "info",
    },
    {
      title: "Parking Information",
      description: "Limited parking available. Public transport recommended.",
      type: "warning",
    },
    {
      title: "Lost & Found",
      description: "Contact security immediately for any lost items.",
      type: "info",
    },
    {
      title: "Emergency Contact",
      description: "24/7 helpline: +91 98765 43210",
      type: "emergency",
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
              <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6 animate-fadeInUp">
                Rules & Regulations
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fadeInUp">
                Guidelines for a peaceful and joyful celebration for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Important Notices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantNotices.map((notice, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 animate-slideInUp ${
                  notice.type === "emergency"
                    ? "bg-red-50 border-red-500"
                    : notice.type === "warning"
                      ? "bg-yellow-50 border-yellow-500"
                      : "bg-blue-50 border-blue-500"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3
                  className={`font-bold mb-2 ${
                    notice.type === "emergency"
                      ? "text-red-700"
                      : notice.type === "warning"
                        ? "text-yellow-700"
                        : "text-blue-700"
                  }`}
                >
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm">{notice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Sections */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Detailed Guidelines</h2>
            <p className="text-xl text-gray-600">
              Please read and follow these guidelines for everyone's safety and enjoyment
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {rulesSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === index
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-white text-orange-600 hover:bg-orange-50"
                }`}
              >
                <section.icon className="w-5 h-5 inline mr-2" />
                {section.title}
              </button>
            ))}
          </div>

          {/* Active Section Content */}
          <div className="max-w-4xl mx-auto">
            {rulesSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`transition-all duration-500 ${
                  activeSection === sectionIndex ? "block animate-fadeIn" : "hidden"
                }`}
              >
                <div className={`bg-gradient-to-br ${section.color} rounded-lg p-8 text-white mb-8`}>
                  <div className="flex items-center mb-6">
                    <section.icon className="w-12 h-12 mr-4" />
                    <h3 className="text-3xl font-bold">{section.title}</h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.rules.map((rule, ruleIndex) => (
                      <div
                        key={ruleIndex}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-slideInUp"
                        style={{ animationDelay: `${ruleIndex * 0.1}s` }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Questions About Rules?</h3>
              <p className="text-xl mb-6">
                If you have any questions about our guidelines or need clarification, please don't hesitate to contact
                us.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Security Team</div>
                    <div className="text-orange-200">+91 98765 43215</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">General Inquiries</div>
                    <div className="text-orange-200">info@shreeganesha.org</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
