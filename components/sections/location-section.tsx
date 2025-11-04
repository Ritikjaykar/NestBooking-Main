"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Search, Home, Calendar, Wrench, Heart, X } from "lucide-react"

const properties = [
  {
    id: 1,
    image: "/1.png",
    title: "Beachfront Villa",
    location: "Malibu, California, US",
    price: "$4,850,000",
    beds: 5,
    baths: 4,
    sqft: 4500,
    rating: 4.8,
  },
  {
    id: 2,
    image: "/2.png",
    title: "Modern Apartment",
    location: "San Francisco, California, US",
    price: "$2,500,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    rating: 4.7,
  },
  {
    id: 3,
    image: "/3.png",
    title: "Mountain Retreat",
    location: "Aspen, Colorado, US",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    sqft: 3500,
    rating: 4.9,
  },
  {
    id: 4,
    image: "/4.png",
    title: "Contemporary Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 5,
    image: "/5.png",
    title: "Luxury Condo",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 6,
    image: "/6.png",
    title: "City Apartment",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 7,
    image: "/7.png",
    title: "Suburban Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 8,
    image: "/8.png",
    title: "Modern Villa",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 9,
    image: "/9.png",
    title: "Beach House",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 10,
    image: "/10.png",
    title: "Mountain Cabin",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 11,
    image: "/11.png",
    title: "Urban Loft",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 12,
    image: "/12.png",
    title: "Garden Home",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 13,
    image: "/13.png",
    title: "Penthouse Suite",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 14,
    image: "/14.png",
    title: "Country Estate",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 15,
    image: "/15.png",
    title: "Lake House",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 16,
    image: "/16.png",
    title: "City Townhouse",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 17,
    image: "/17.png",
    title: "Modern Duplex",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 18,
    image: "/18.png",
    title: "Suburban Villa",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 19,
    image: "/19.png",
    title: "Beach Condo",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
  {
    id: 20,
    image: "/20.png",
    title: "Mountain View",
    location: "Miami, Florida, US",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    rating: 4.6,
  },
]

export default function LocationSection() {
  const [isCompact, setIsCompact] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState("property")
  const [visibleCount, setVisibleCount] = useState(16)
  const searchBarRef = useRef<HTMLDivElement>(null)

  // Airbnb-style smooth scroll detection
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY
          
          // Only auto-collapse if not manually expanded
          if (!isExpanded) {
            // More stable thresholds to prevent flickering
            if (currentScroll > 150) {
              setIsCompact(true)
            } else if (currentScroll < 100) {
              setIsCompact(false)
            }
          }
          
          lastScrollY = currentScroll
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isExpanded])

  // Handle tab click in compact mode
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    if (isCompact && !isExpanded) {
      setIsExpanded(true)
      // Scroll to search bar smoothly
      setTimeout(() => {
        searchBarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  // Handle collapse
  const handleCollapse = () => {
    setIsExpanded(false)
  }

  return (
    <motion.section
      className="relative bg-gray-50 pt-0 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Search Bar */}
      <motion.div
        ref={searchBarRef}
        layout
        animate={{
          y: isCompact && !isExpanded ? 0 : -70,
          scale: isCompact && !isExpanded ? 0.92 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`mx-auto max-w-6xl transition-all duration-400 ${
          isCompact && !isExpanded
            ? "sticky top-1 z-[100]"
            : "relative -mt-20 z-10"
        }`}
      >
        <motion.div 
          layout
          className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow duration-400 ${
            isCompact && !isExpanded
              ? "shadow-md py-1"
              : "shadow-xl py-6"
          }`}
        >
          {/* Compact Header - Only show when compact AND not expanded */}
          {isCompact && !isExpanded ? (
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex gap-4 text-sm font-semibold">
                <button
                  onClick={() => handleTabClick("property")}
                  className={`relative transition-colors duration-200 px-3 py-1 rounded-lg ${
                    activeTab === "property"
                      ? "text-purple-700 bg-purple-50"
                      : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                  }`}
                >
                  Property
                </button>
                <button
                  onClick={() => handleTabClick("track")}
                  className={`relative transition-colors duration-200 px-3 py-1 rounded-lg ${
                    activeTab === "track"
                      ? "text-purple-700 bg-purple-50"
                      : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                  }`}
                >
                  Track
                </button>
                <button
                  onClick={() => handleTabClick("providers")}
                  className={`relative transition-colors duration-200 px-3 py-1 rounded-lg ${
                    activeTab === "providers"
                      ? "text-purple-700 bg-purple-50"
                      : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                  }`}
                >
                  Services
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert(`Searching in: ${activeTab}`)}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors duration-200 shadow-sm"
              >
                <Search className="h-3.5 w-3.5" /> Search
              </motion.button>
            </div>
          ) : (
            /* Expanded Mode */
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header with close button when expanded in sticky mode */}
              {isCompact && isExpanded && (
                <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Search Properties</h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCollapse}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </motion.button>
                </div>
              )}

              {/* Tabs */}
              <div className="flex border-b border-gray-200 bg-white">
                {[
                  { id: "property", label: "Property Search", icon: Home },
                  { id: "track", label: "Track Availability", icon: Calendar },
                  { id: "providers", label: "Service Providers", icon: Wrench },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-3 font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-purple-600"
                        : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="hidden sm:inline text-sm">{tab.label}</span>
                    <span className="sm:hidden text-sm">{tab.label.split(' ')[0]}</span>
                    
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="p-4 bg-white"
                >
                  {activeTab === "property" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {[
                          "Project Name",
                          "Builder Name", 
                          "Unit Number",
                          "Floors",
                          "Location",
                        ].map((label) => (
                          <div key={label}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {label}
                            </label>
                            <input
                              type="text"
                              placeholder={label}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end pt-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            alert(`Searching in: ${activeTab}`)
                            if (isExpanded) handleCollapse()
                          }}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-medium transition-colors duration-300 shadow-sm"
                        >
                          <Search className="h-3.5 w-3.5" />
                          Search Properties
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "track" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {["Project Name", "Unit Number"].map((label) => (
                          <div key={label}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {label}
                            </label>
                            <input
                              type="text"
                              placeholder={label}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end pt-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            alert(`Searching in: ${activeTab}`)
                            if (isExpanded) handleCollapse()
                          }}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-medium transition-colors duration-300 shadow-sm"
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          Check Status
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "providers" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Service Type
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400">
                            <option>Select Service</option>
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>Painting</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Location"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Provider Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Provider Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end pt-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            alert(`Searching in: ${activeTab}`)
                            if (isExpanded) handleCollapse()
                          }}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-medium transition-colors duration-300 shadow-sm"
                        >
                          <Wrench className="h-3.5 w-3.5" />
                          Find Providers
                        </motion.button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Properties */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Based on your location
          </h2>
          <p className="text-gray-600">
            Some of our picked properties near your location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {properties.slice(0, visibleCount).map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200 z-10"
                >
                  <Heart
                    size={18}
                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                  />
                </motion.button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-1">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{p.location}</p>
                <p className="text-purple-700 font-bold text-xl">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / View Less Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          {visibleCount < properties.length && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => Math.min(prev + 16, properties.length))}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors duration-300 shadow-md"
            >
              Load More Properties
            </motion.button>
          )}
          {visibleCount > 16 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setVisibleCount(16)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium transition-colors duration-300 shadow-md"
            >
              View Less
            </motion.button>
          )}
        </div>
      </div>
    </motion.section>
  )
}