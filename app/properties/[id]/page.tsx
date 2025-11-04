"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Ruler as Ruler2,
  Home,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPropertyById } from "@/app/lib/properties-data"

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = Number.parseInt(params.id as string)
  const propertyData = getPropertyById(propertyId)

  const [currentImageIdx, setCurrentImageIdx] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!propertyData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property not found</h1>
          <Link href="/properties">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Back to listings</Button>
          </Link>
        </div>
      </div>
    )
  }

  const images = propertyData.images || [propertyData.image]
  const features = propertyData.features || []
  const priceHistory = propertyData.priceHistory || []

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent"></div>
              <span className="text-lg font-bold text-foreground">Nestbooking</span>
            </div>
<div className="hidden md:flex items-center gap-4">
  <Link
    href="/login"
    className="text-sm text-foreground font-semibold hover:text-secondary transition"
  >
    Login
  </Link>
  <Link
    href="/signup"
    className="px-6 py-2 bg-secondary text-white rounded-lg text-sm font-semibold hover:bg-secondary/90 transition"
  >
    Sign Up
  </Link>
</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/properties"
          className="mb-6 inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80"
        >
          <ChevronLeft size={16} />
          Back to map
        </Link>

        {/* Title Section */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{propertyData.title}</h1>
            <p className="mt-1 flex items-center gap-1 text-muted-foreground">
              <MapPin size={16} />
              {propertyData.address}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? "text-red-500" : ""}
            >
              <Heart size={18} className={isFavorite ? "fill-current" : ""} />
              Favorite
            </Button>
            <Button variant="outline" size="sm">
              <Share2 size={18} />
              Share
            </Button>
            <Button variant="outline" size="sm">
              Browse nearby listings
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8 grid gap-4 lg:grid-cols-3">
          <div className="relative lg:col-span-2">
            <img
              src="/1.png"
              alt="Property"
              className="h-96 w-full rounded-lg object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background"
            >
              <ChevronRight size={24} />
            </button>
          </div>
<div className="flex flex-col gap-2">
  {["/1.png", "/2.png", "/3.png", "/4.png"].map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`Property ${idx + 1}`}
      className={`h-24 w-full cursor-pointer rounded-lg object-cover transition-opacity ${
        idx === currentImageIdx ? "opacity-100 ring-2 ring-accent" : "opacity-60 hover:opacity-80"
      }`}
      onClick={() => setCurrentImageIdx(idx)}
    />
  ))}

  <button className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted text-sm font-medium text-muted-foreground hover:bg-muted/80">
    + View all photos
  </button>
</div>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Price and Key Info */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#7065F0]">${propertyData.price}</span>
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-4">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bed size={20} />
                    <span className="text-sm">{propertyData.beds}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Bedrooms</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath size={20} />
                    <span className="text-sm">{propertyData.baths}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Bathrooms</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Ruler2 size={20} />
                    <span className="text-sm">{propertyData.sqft.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Square Feet</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Home size={20} />
                    <span className="text-sm">Modern Loft</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">About this home</h2>
              <p className="mb-4 text-muted-foreground">{propertyData.description}</p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Add a question
                </Button>
                <Button variant="outline" size="sm">
                  See more info
                </Button>
              </div>
            </div>

            {/* Rental Features */}
            {features.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Rental features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex justify-between border-b border-border pb-3">
                      <span className="text-muted-foreground">{feature.label}</span>
                      <span className="font-medium text-foreground">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price History */}
            {priceHistory.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Rent Price History for {propertyData.title}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 text-left font-semibold text-foreground">Date</th>
                        <th className="pb-3 text-left font-semibold text-foreground">Price</th>
                        <th className="pb-3 text-left font-semibold text-foreground">Event</th>
                        <th className="pb-3 text-left font-semibold text-foreground">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceHistory.map((history, idx) => (
                        <tr key={idx} className="border-b border-border">
                          <td className="py-3 text-muted-foreground">{history.date}</td>
                          <td className="py-3 font-medium text-foreground">{history.price}</td>
                          <td className="py-3 text-muted-foreground">{history.event}</td>
                          <td className="py-3 text-muted-foreground">{history.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Map Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Map</h2>
              <div className="relative h-80 w-full overflow-hidden rounded-lg border border-border bg-muted">
                <img src="/map-location.png" alt="Map" className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">See more listings in this location →</p>
            </div>

            {/* Similar Listings */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Similar listings</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {propertyData.similarListings?.map((listing) => (
                  <Link key={listing.id} href={`/properties/${listing.id}`}>
                    <div className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg cursor-pointer">
                      <div className="relative">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="h-40 w-full object-cover"
                        />
                        <div className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                          POPULAR
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="mb-1 flex items-baseline gap-1">
                          <span className="text-lg font-bold text-foreground">${listing.price}</span>
                          <span className="text-xs text-muted-foreground">/month</span>
                        </div>
                        <h3 className="mb-1 font-semibold text-foreground">{listing.title}</h3>
                        <p className="mb-2 text-xs text-muted-foreground">{listing.location}</p>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <span>
                            <Bed size={14} className="inline" /> {listing.beds} Beds
                          </span>
                          <span>
                            <Bath size={14} className="inline" /> {listing.baths} Bathrooms
                          </span>
                          <span>
                            <Ruler2 size={14} className="inline" /> {listing.sqft} sqft
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Request Tour Card */}
            <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">Request a home tour</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Calendar size={18} />
                  In Person
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Phone size={18} />
                  Virtual
                </Button>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Request a tour</Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                By requesting a tour, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-accent"></div>
                <span className="font-bold text-foreground">Nestbooking</span>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">SELL A HOME</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Request an offer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">BUY, RENT AND SELL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Buy and sell properties
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">ABOUT</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Company
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Nestbooking. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
