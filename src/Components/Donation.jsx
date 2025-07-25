"use client"
import { useState, useEffect } from "react"
import { Heart, Gift, Star, Users, CreditCard, Smartphone, Building } from "lucide-react"
import Header from "./Header"

export default function DonationPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const donations = [
    {
      amount: 500,
      title: "Prasad Offering",
      description: "Help provide prasad for devotees",
      icon: Gift,
      color: "from-green-400 to-teal-500",
      benefits: ["Prasad for 50 devotees", "Name in prasad sponsors", "Blessings certificate"],
    },
    {
      amount: 1000,
      title: "Decoration Fund",
      description: "Support beautiful decorations",
      icon: Star,
      color: "from-purple-400 to-pink-500",
      benefits: ["Flower decorations", "Lighting arrangements", "Recognition plaque"],
    },
    {
      amount: 2500,
      title: "Cultural Programs",
      description: "Sponsor cultural events and programs",
      icon: Users,
      color: "from-blue-400 to-indigo-500",
      benefits: ["Event sponsorship", "Program mention", "VIP seating", "Photo with artists"],
    },
    {
      amount: 5000,
      title: "Pandal Maintenance",
      description: "Help maintain the pandal structure",
      icon: Building,
      color: "from-orange-400 to-red-500",
      benefits: ["Major sponsor recognition", "Pandal banner", "Special darshan", "Annual report mention"],
    },
  ]

  const paymentMethods = [
    { name: "Credit/Debit Card", icon: CreditCard, description: "Secure online payment" },
    { name: "UPI Payment", icon: Smartphone, description: "Quick mobile payment" },
    { name: "Bank Transfer", icon: Building, description: "Direct bank transfer" },
  ]

  const majorDonors = [
    { name: "Shri Rajesh Industries", amount: "₹50,000", category: "Corporate Sponsor" },
    { name: "Smt. Priya Sharma", amount: "₹25,000", category: "Individual Donor" },
    { name: "Kumar Family Trust", amount: "₹30,000", category: "Trust Donation" },
    { name: "Local Business Association", amount: "₹40,000", category: "Community Support" },
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
                Support Our Celebration
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fadeInUp">
                Your generous donations help us organize a beautiful celebration and serve the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Donation Categories</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to contribute to our celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {donations.map((donation, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${donation.color} rounded-lg p-6 text-white transform transition-all duration-300 hover:scale-105 animate-slideInUp cursor-pointer ${
                  selectedAmount === donation.amount ? "ring-4 ring-yellow-300" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedAmount(donation.amount)}
              >
                <donation.icon className="w-12 h-12 mb-4 animate-pulse" />
                <div className="text-3xl font-bold mb-2">₹{donation.amount}</div>
                <h3 className="text-xl font-semibold mb-3">{donation.title}</h3>
                <p className="text-white/90 mb-4">{donation.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    {donation.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-white/70 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 mt-4">
                  Select This Amount
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donation */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                <h3 className="text-3xl font-bold mb-4">Custom Donation</h3>
                <p className="text-xl">Choose your own amount to contribute to our celebration</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <label className="block text-lg font-semibold mb-4">Enter Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg text-gray-800 text-xl font-semibold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Quick Select:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[100, 250, 750, 1500, 3000, 7500].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setCustomAmount(amount.toString())}
                          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Payment Methods</h4>
                  <div className="space-y-3">
                    {paymentMethods.map((method, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg p-4 flex items-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                      >
                        <method.icon className="w-8 h-8 mr-4" />
                        <div>
                          <div className="font-semibold">{method.name}</div>
                          <div className="text-sm text-white/80">{method.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-orange-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 mt-6 transform hover:scale-105">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Donors Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Generous Donors</h2>
            <p className="text-xl text-gray-600">We thank these generous souls for their contributions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorDonors.map((donor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{donor.name}</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">{donor.amount}</p>
                <p className="text-sm text-gray-600">{donor.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Transparency & Accountability</h2>
              <p className="text-xl text-gray-600">We believe in complete transparency in our financial dealings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">₹2,50,000</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Collected</h3>
                <p className="text-gray-600">This year's donations</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹2,00,000</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Festival Expenses</h3>
                <p className="text-gray-600">Decoration, programs, prasad</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">₹50,000</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Service</h3>
                <p className="text-gray-600">Charity and social work</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105">
                Download Detailed Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
