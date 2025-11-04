export interface Property {
  id: number
  title: string
  price: number
  location: string
  address: string
  image: string
  beds: number
  baths: number
  sqft: number
  popular?: boolean
  images?: string[]
  description?: string
  features?: { label: string; value: string }[]
  priceHistory?: { date: string; price: string; event: string; source: string }[]
  similarListings?: {
    id: number
    title: string
    price: number
    location: string
    image: string
    beds: number
    baths: number
    sqft: number
  }[]
}

export const propertiesData: Property[] = [
  {
    id: 1,
    title: "Palm Harbor",
    price: 2095,
    location: "2697 Green Valley, Highland Lake, FL",
    address: "2697 Green Valley, Highland Lake, FL",
    image: "/modern-house-exterior.png",
    beds: 3,
    baths: 2,
    sqft: 1500,
    popular: true,
    images: ["/modern-house-exterior.png", "/luxury-home.png", "/suburban-house-with-garden.png"],
    description:
      "Beautiful modern home with open floor plan and premium finishes. Features spacious bedrooms, updated kitchen, and large backyard. Perfect for families looking for comfort and style.",
    features: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
      { label: "Square Feet", value: "1,500 sqft" },
      { label: "Year Built", value: "2015" },
      { label: "Lot Size", value: "7,500 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "2 Car Garage" },
    ],
    priceHistory: [
      { date: "10/12/2022", price: "$2,095/mo", event: "Listed for Sale", source: "Estately" },
      { date: "10/10/2022", price: "$1,995/mo", event: "Price Change", source: "Estately" },
      { date: "03/04/2020", price: "$1,750/mo", event: "Rented", source: "Public Records" },
    ],
  },
  {
    id: 2,
    title: "Beverly Springfield",
    price: 2700,
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    image: "/luxury-home.png",
    beds: 4,
    baths: 2,
    sqft: 2100,
    popular: true,
    images: ["/luxury-home.png", "/modern-house-exterior.png", "/suburban-house-with-garden.png"],
    description:
      "Stunning luxury home with lake views and premium amenities. Features gourmet kitchen, master suite, and entertainment spaces. Ideal for those seeking upscale living.",
    features: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "2" },
      { label: "Square Feet", value: "2,100 sqft" },
      { label: "Year Built", value: "2018" },
      { label: "Lot Size", value: "8,500 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "3 Car Garage" },
    ],
    priceHistory: [
      { date: "10/12/2022", price: "$2,700/mo", event: "Listed for Sale", source: "Estately" },
      { date: "09/15/2022", price: "$2,600/mo", event: "Price Change", source: "Estately" },
    ],
  },
  {
    id: 3,
    title: "Faulkner Ave",
    price: 4550,
    location: "909 Woodland St, Michigan, IN",
    address: "909 Woodland St, Michigan, IN",
    image: "/suburban-house-with-garden.png",
    beds: 4,
    baths: 3,
    sqft: 3100,
    popular: true,
    images: ["/suburban-house-with-garden.png", "/luxury-home.png", "/modern-house-exterior.png"],
    description:
      "Spacious estate with premium finishes and extensive grounds. Perfect for large families or those needing extra space for home office and entertainment.",
    features: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "3" },
      { label: "Square Feet", value: "3,100 sqft" },
      { label: "Year Built", value: "2016" },
      { label: "Lot Size", value: "10,000 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "3 Car Garage" },
    ],
    priceHistory: [{ date: "10/12/2022", price: "$4,550/mo", event: "Listed for Sale", source: "Estately" }],
  },
  {
    id: 4,
    title: "St. Crystal",
    price: 2400,
    location: "210 US Highway, Highland Lake, FL",
    address: "210 US Highway, Highland Lake, FL",
    image: "/house-rental.jpg",
    beds: 4,
    baths: 2,
    sqft: 1800,
    images: ["/house-rental.jpg", "/cozy-home.jpg", "/modern-rental.jpg"],
    description:
      "Check out this Custom Backyard Entertaining Space! 3223sqft, 4 bedrooms, 2 full bathrooms house on a Lake View street in the heart of Highland Lake. This home features an open floor plan with plenty of upgrades! Never worry about the sun, including premium insulation and large windows. Smart home, Shower, and Toilet are connected to the internet. Minimum one year lease.",
    features: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "2" },
      { label: "Square Feet", value: "2,073 sqft" },
      { label: "Year Built", value: "2018" },
      { label: "Lot Size", value: "9,061 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "Driveway & Fees" },
    ],
    priceHistory: [
      { date: "10/12/2022", price: "$2,400/mo", event: "Listed for Sale", source: "Estately" },
      { date: "10/10/2022", price: "$2,000/mo", event: "Price Change", source: "Estately" },
      { date: "03/04/2020", price: "$1,650/mo", event: "Rented", source: "Public Records" },
      { date: "01/20/2019", price: "$1,100/mo", event: "Black Friday", source: "Public Records" },
      { date: "04/01/2009", price: "$1,650/mo", event: "Listed for Sale", source: "Public Records" },
    ],
  },
  {
    id: 5,
    title: "Cove Red",
    price: 1500,
    location: "243 Curlee Road, Palm Harbor, TX",
    address: "243 Curlee Road, Palm Harbor, TX",
    image: "/cozy-home.jpg",
    beds: 3,
    baths: 1,
    sqft: 1200,
    images: ["/cozy-home.jpg", "/house-rental.jpg", "/modern-rental.jpg"],
    description:
      "Cozy home perfect for small families or professionals. Features updated kitchen, comfortable bedrooms, and well-maintained yard.",
    features: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "1" },
      { label: "Square Feet", value: "1,200 sqft" },
      { label: "Year Built", value: "2012" },
      { label: "Lot Size", value: "6,000 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "1 Car Garage" },
    ],
    priceHistory: [{ date: "10/12/2022", price: "$1,500/mo", event: "Listed for Sale", source: "Estately" }],
  },
  {
    id: 6,
    title: "The Old Steele",
    price: 1600,
    location: "103 Lake Shores, Michigan, IN",
    address: "103 Lake Shores, Michigan, IN",
    image: "/vintage-property.jpg",
    beds: 3,
    baths: 1,
    sqft: 1400,
    images: ["/vintage-property.jpg", "/cozy-home.jpg", "/house-rental.jpg"],
    description:
      "Charming vintage property with character and charm. Recently updated with modern amenities while maintaining original appeal.",
    features: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "1" },
      { label: "Square Feet", value: "1,400 sqft" },
      { label: "Year Built", value: "1995" },
      { label: "Lot Size", value: "6,500 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "Driveway" },
    ],
    priceHistory: [{ date: "10/12/2022", price: "$1,600/mo", event: "Listed for Sale", source: "Estately" }],
  },
  {
    id: 7,
    title: "St. Crystal",
    price: 2400,
    location: "210 US Highway, Highland Lake, FL",
    address: "210 US Highway, Highland Lake, FL",
    image: "/modern-rental.jpg",
    beds: 4,
    baths: 2,
    sqft: 1800,
    images: ["/modern-rental.jpg", "/house-rental.jpg", "/cozy-home.jpg"],
    description: "Modern rental property with all the latest amenities and finishes.",
    features: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "2" },
      { label: "Square Feet", value: "1,800 sqft" },
      { label: "Year Built", value: "2020" },
      { label: "Lot Size", value: "8,000 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "2 Car Garage" },
    ],
    priceHistory: [{ date: "10/12/2022", price: "$2,400/mo", event: "Listed for Sale", source: "Estately" }],
  },
  {
    id: 8,
    title: "Cove Red",
    price: 1500,
    location: "243 Curlee Road, Palm Harbor, TX",
    address: "243 Curlee Road, Palm Harbor, TX",
    image: "/cozy-family-home.png",
    beds: 3,
    baths: 1,
    sqft: 1200,
    images: ["/cozy-family-home.png", "/cozy-home.jpg", "/house-rental.jpg"],
    description: "Family-friendly home with great location and amenities.",
    features: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "1" },
      { label: "Square Feet", value: "1,200 sqft" },
      { label: "Year Built", value: "2014" },
      { label: "Lot Size", value: "6,000 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "1 Car Garage" },
    ],
    priceHistory: [{ date: "10/12/2022", price: "$1,500/mo", event: "Listed for Sale", source: "Estately" }],
  },
  {
    id: 9,
    title: "Tarpon Bay",
    price: 1600,
    location: "103 Lake Shores, Michigan, IN",
    address: "103 Lake Shores, Michigan, IN",
    image: "/waterfront-property.png",
    beds: 3,
    baths: 1,
    sqft: 1400,
    images: ["/waterfront-property.png", "/vintage-property.jpg", "/cozy-home.jpg"],
    description: "Beautiful waterfront property with stunning views and direct water access.",
    features: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "1" },
      { label: "Square Feet", value: "1,400 sqft" },
      { label: "Year Built", value: "2010" },
      { label: "Lot Size", value: "7,000 sqft" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Cooling", value: "Central" },
      { label: "Heating", value: "Forced Air" },
      { label: "Parking", value: "Driveway" },
    ],
    priceHistory: [{ date: "10/12/2022", price: "$1,600/mo", event: "Listed for Sale", source: "Estately" }],
  },
]

export function getPropertyById(id: number): Property | undefined {
  return propertiesData.find((property) => property.id === id)
}
