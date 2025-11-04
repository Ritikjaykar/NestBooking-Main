"use client"

import Link from "next/link"
import { useState } from "react"
import { Upload, Calendar, CheckCircle } from "lucide-react"

export default function ClaimPropertyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfPurchase: "",
    documentType: "",
    docNumber: "",
    additionalInfo: "",
    document: null as File | null,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        document: e.target.files![0],
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Handle form submission logic here
  }

  const handleNewClaim = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      dateOfPurchase: "",
      documentType: "",
      docNumber: "",
      additionalInfo: "",
      document: null,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Section */}
      <div className="border-b border-gray-200 px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Logo */}
            <div className="flex items-center gap-2 md:w-[200px] flex-shrink-0">
              <div
                style={{ backgroundColor: "#6366f1" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md"
              >
                N
              </div>
              <span className="font-bold text-gray-900 text-xl">Nestbooking</span>
            </div>

            {/* Center - Buttons */}
            <div className="flex flex-wrap justify-center gap-8 w-full md:w-auto">
              <button className="text-gray-700 hover:text-gray-900 transition font-semibold text-base whitespace-nowrap">
                Manage Properties
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition font-semibold text-base whitespace-nowrap">
                Claim your Properties
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition font-semibold text-base whitespace-nowrap">
                Search
              </button>
            </div>

            {/* Right - Back to Home */}
            <div className="md:w-[200px] flex justify-end flex-shrink-0">
              <Link href="/" passHref>
                <button className="text-gray-700 hover:text-gray-900 transition font-bold text-base whitespace-nowrap">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Form or Success Message */}
      <main className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
              {/* Form Title */}
              <div className="mb-8">
                <h1 
                  style={{ color: "#6366f1" }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  Claim Property
                </h1>
                <p className="text-gray-600">Fill out the form below to claim your property</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name, Email, Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Row 2: Date of Purchase, Select Document, Doc Number */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="dateOfPurchase" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Purchase
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="dateOfPurchase"
                        name="dateOfPurchase"
                        value={formData.dateOfPurchase}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="documentType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Document
                    </label>
                    <select
                      id="documentType"
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select document type</option>
                      <option value="deed">Property Deed</option>
                      <option value="contract">Purchase Contract</option>
                      <option value="title">Title Document</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="docNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      Doc. Number
                    </label>
                    <input
                      type="text"
                      id="docNumber"
                      name="docNumber"
                      value={formData.docNumber}
                      onChange={handleInputChange}
                      placeholder="Enter document number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Row 3: Additional Info and Upload Document */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Info
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Enter any additional information"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="document" className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Document
                    </label>
                    <div className="h-full">
                      <label
                        htmlFor="document"
                        className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-500 transition bg-gray-50 hover:bg-gray-100"
                      >
                        <Upload size={40} className="text-gray-400 mb-2" />
                        <span className="text-sm font-medium text-gray-600">
                          {formData.document ? formData.document.name : "Click to upload or drag and drop"}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (MAX. 10MB)</span>
                        <input
                          type="file"
                          id="document"
                          name="document"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#6366f1" }}
                    className="px-20 py-3.5 text-white rounded-xl hover:opacity-90 transition font-semibold text-lg shadow-md hover:shadow-lg"
                  >
                    Submit Claim
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Success Message
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div 
                    style={{ backgroundColor: "#D1FAE5" }}
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle size={60} style={{ color: "#10B981" }} />
                  </div>
                </div>
                
                <h1 
                  style={{ color: "#10B981" }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Thank You for Submitting!
                </h1>
                
                <p className="text-gray-600 text-lg mb-2">
                  Your property claim has been successfully submitted.
                </p>
                
                <p className="text-gray-600 mb-8">
                  We have received your application and will review it shortly. You will receive a confirmation email at <span className="font-semibold text-gray-900">{formData.email}</span> within 24-48 hours.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleNewClaim}
                    style={{ backgroundColor: "#6366f1" }}
                    className="px-8 py-3 text-white rounded-xl hover:opacity-90 transition font-semibold shadow-md hover:shadow-lg"
                  >
                    Submit Another Claim
                  </button>
                  <Link href="/" passHref>
                    <button className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition font-semibold shadow-md hover:shadow-lg">
                      Back to Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}