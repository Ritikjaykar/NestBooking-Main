// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { MapPin, Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react"

// const carouselSlides = [
//   {
//     id: 1,
//     title: "Complimentary tickets to",
//     subtitle: "LA PERLE IN DUBAI",
//     description: "And more with My Emirates Pass",
//     image: "/carousel1.jpg",
//     buttonText: "Learn more"
//   },
//   {
//     id: 2,
//     title: "Discover your dream home",
//     subtitle: "LUXURY PROPERTIES",
//     description: "Exclusive listings in prime locations",
//     image: "/carousel2.jpg",
//     buttonText: "Explore now"
//   },
//   {
//     id: 3,
//     title: "Find the perfect place",
//     subtitle: "YOUR NEW HOME AWAITS",
//     description: "Browse thousands of verified properties",
//     image: "/carousel3.jpg",
//     buttonText: "Get started"
//   }
// ]

// export default function Hero() {
//   const [activeTab, setActiveTab] = useState("property")
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   // Auto-play carousel
//   useEffect(() => {
//     if (!isAutoPlaying) return
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
//     setIsAutoPlaying(false)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
//     setIsAutoPlaying(false)
//   }

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//     setIsAutoPlaying(false)
//   }

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Carousel Background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={carouselSlides[currentSlide].image}
//             alt={carouselSlides[currentSlide].title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/30" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Carousel Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//       </button>
      
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Hero Content */}
//       <div className="relative z-10 h-full flex flex-col">
//         {/* Hero Text Content */}
//         <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl text-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <p className="text-white text-xl md:text-2xl lg:text-3xl font-light mb-2 italic">
//                   {carouselSlides[currentSlide].title}
//                 </p>
//                 <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight leading-tight">
//                   {carouselSlides[currentSlide].subtitle}
//                 </h1>
//                 <p className="text-white text-lg md:text-xl lg:text-2xl font-light mb-8 italic">
//                   {carouselSlides[currentSlide].description}
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
//                 >
//                   {carouselSlides[currentSlide].buttonText}
//                 </motion.button>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Carousel Indicators */}
//         <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//           {carouselSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "w-8 bg-white"
//                   : "w-2 bg-white/50 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Search Card at Bottom */}
//         <div className="px-4 sm:px-6 lg:px-8 pb-8">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="bg-white rounded-lg shadow-2xl overflow-hidden"
//             >
//               {/* Tabs */}
//               <div className="flex border-b-0">
//                 {[
//                   { id: "property", label: "Property Search" },
//                   { id: "track", label: "Track Availability" },
//                   { id: "providers", label: "Service Providers" }
//                 ].map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`flex-1 px-6 py-4 text-base md:text-lg font-medium transition-all duration-300 border-2 ${
//                       activeTab === tab.id
//                         ? "bg-green-700 text-white border-green-600"
//                         : "bg-green-800 text-white/90 border-green-700 hover:bg-green-700"
//                     } ${
//                       tab.id === "property" ? "rounded-tl-lg" : ""
//                     } ${
//                       tab.id === "providers" ? "rounded-tr-lg" : ""
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>

//               {/* Search Form */}
//               {activeTab === "property" && (
//                 <div className="p-8 bg-purple-900">
//                   {/* Search Input Labels */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Project Name
//                       </label>
//                     </div>
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Builder Name
//                       </label>
//                     </div>
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Unit Number
//                       </label>
//                     </div>
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Floors
//                       </label>
//                     </div>
//                   </div>

//                   {/* Search Inputs */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     {/* Project Name */}
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Project Name"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg transition-all duration-300"
//                       />
//                     </div>

//                     {/* Builder Name */}
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Builder Name"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg transition-all duration-300"
//                       />
//                     </div>

//                     {/* Unit Number */}
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Unit Number"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg transition-all duration-300"
//                       />
//                     </div>

//                     {/* Floors */}
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Floors"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg transition-all duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Track Availability Button */}
//                   <div className="flex justify-center">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-12 rounded-lg font-medium transition-all duration-300 shadow-lg border-2 border-blue-500"
//                     >
//                       Track Availability
//                     </motion.button>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "track" && (
//                 <div className="p-8 bg-purple-900">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Project Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter project name"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Unit Number
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter unit number"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-center mt-8">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-12 rounded-lg font-medium transition-all duration-300 shadow-lg border-2 border-blue-500"
//                     >
//                       Check Status
//                     </motion.button>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "providers" && (
//                 <div className="p-8 bg-purple-900">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Service Type
//                       </label>
//                       <select className="w-full px-6 py-4 bg-green-800 text-white border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg">
//                         <option>Select service</option>
//                         <option>Plumbing</option>
//                         <option>Electrical</option>
//                         <option>Carpentry</option>
//                         <option>Painting</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Location
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter location"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-lg font-normal text-white mb-3">
//                         Provider Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter provider name"
//                         className="w-full px-6 py-4 bg-green-800 text-white placeholder-white/70 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-center mt-8">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-12 rounded-lg font-medium transition-all duration-300 shadow-lg border-2 border-blue-500"
//                     >
//                       Find Providers
//                     </motion.button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


//hero.tsx

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselSlides = [
  { id: 1, title: "Complimentary tickets to", subtitle: "LA PERLE IN DUBAI", description: "And more with My Emirates Pass", image: "/carousel1.jpg", buttonText: "Learn more" },
  { id: 2, title: "Discover your dream home", subtitle: "LUXURY PROPERTIES", description: "Exclusive listings in prime locations", image: "/carousel2.jpg", buttonText: "Explore now" },
  { id: 3, title: "Find the perfect place", subtitle: "YOUR NEW HOME AWAITS", description: "Browse thousands of verified properties", image: "/carousel3.jpg", buttonText: "Get started" }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % carouselSlides.length), 5000)
    return () => clearInterval(t)
  }, [isAutoPlaying])

  const skip = (dir: 1 | -1) => {
    setCurrentSlide((p) => (p + dir + carouselSlides.length) % carouselSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Images - z-0 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={carouselSlides[currentSlide].image}
            alt={carouselSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - z-20 */}
      <button
        onClick={() => skip(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => skip(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content - z-10 */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-light mb-2 italic">
              {carouselSlides[currentSlide].title}
            </p>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight leading-tight">
              {carouselSlides[currentSlide].subtitle}
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-light mb-8 italic">
              {carouselSlides[currentSlide].description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 shadow-lg pointer-events-auto"
            >
              {carouselSlides[currentSlide].buttonText}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators - z-20 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 10000)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Smooth blend to content below */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent via-gray-50/70 to-gray-50 pointer-events-none z-5" />
    </section>
  )
}