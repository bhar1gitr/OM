"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/events"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/donation"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Donation
              </Link>
              <Link
                to="/council"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Council Members
              </Link>
              <Link
                to="/rules"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rules & Regulations
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
