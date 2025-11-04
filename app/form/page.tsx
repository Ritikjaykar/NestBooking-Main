// tenancy application page

"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Bell, LogOut, User, HelpCircle } from "lucide-react"

export default function ApplicationsPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [formData, setFormData] = useState({
    // Personal step
    title: "",
    name: "",
    dob: "",
    email: "",
    phone: "",
    dlNumber: "",
    dlState: "",
    ssn: "",
    gra: "yes",
    vehicles: false,
    referenceName: "",
    referenceRelationship: "",
    referenceYears: "",
    referenceEmail: "",
    referencePhone: "",
    // Employment step
    employmentStatus: "",
    businessName: "",
    businessPhone: "",
    businessAddress: "",
    suburb: "",
    postcode: "",
    state: "",
    country: "",
    position: "",
    currentlyEmployed: "yes",
    startDate: "",
    endDate: "",
    employmentType: "",
    annualIncome: "",
    supervisorName: "",
    supervisorPosition: "",
    supervisorPhone: "",
    supervisorEmail: "",
    // Living Arrangements step
    previousArrangementNote: false,
    reason: "",
  })

  const steps = ["Personal", "Employment", "Living Arrangements", "Docs"]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber)
  }

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderPersonalStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">Personal Details</h3>
        <p className="text-sm text-slate-600 mb-6">
          Please start your profile below by filling in your personal information
        </p>

        {/* Applicant Details */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-6">Applicant Details</h4>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Title</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select title</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-900 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="hi@example.com"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1(234) 567 - 891"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Driver's License Number (if applicable)
              </label>
              <input
                type="text"
                name="dlNumber"
                value={formData.dlNumber}
                onChange={handleInputChange}
                placeholder="e.g. AB1234"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Driver's License State</label>
              <select
                name="dlState"
                value={formData.dlState}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select one</option>
                <option value="CA">CA</option>
                <option value="NY">NY</option>
                <option value="TX">TX</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-900 mb-2">Social Security Number</label>
            <input
              type="text"
              name="ssn"
              value={formData.ssn}
              onChange={handleInputChange}
              placeholder="e.g. AAA-GG-SSSS"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-900 mb-2">Will you be receiving GRA?</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gra"
                  value="yes"
                  checked={formData.gra === "yes"}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-600">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gra"
                  value="no"
                  checked={formData.gra === "no"}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-600">No</span>
              </label>
            </div>
          </div>

          <div className="bg-slate-900 text-white text-sm p-3 rounded-lg mb-4">
            If you own any vehicles that will be on the property, please enter them here.
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="vehicles"
              checked={formData.vehicles}
              onChange={handleInputChange}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm text-slate-600">Tick here if a vehicle will be on the premises</span>
          </label>
        </div>

        {/* Personal Reference */}
        <div className="border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-4">Personal Reference Details</h4>
          <p className="text-sm text-slate-600 mb-6">
            Provided by an individual who knows you well and can vouch your character and abilities.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Name</label>
              <input
                type="text"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Relationship</label>
              <select
                name="referenceRelationship"
                value={formData.referenceRelationship}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select relationship</option>
                <option value="friend">Friend</option>
                <option value="family">Family</option>
                <option value="colleague">Colleague</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-900 mb-2">How many years have you known them?</label>
            <input
              type="text"
              name="referenceYears"
              value={formData.referenceYears}
              onChange={handleInputChange}
              placeholder="Years"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
              <input
                type="email"
                name="referenceEmail"
                value={formData.referenceEmail}
                onChange={handleInputChange}
                placeholder="hi@example.com"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
              <input
                type="tel"
                name="referencePhone"
                value={formData.referencePhone}
                onChange={handleInputChange}
                placeholder="+1(234) 567 - 891"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <label className="flex items-start gap-2 mt-4">
            <input type="checkbox" className="w-4 h-4 rounded mt-1" />
            <span className="text-xs text-slate-600">
              I give the authority to my Referees to release all my personal information relating to my rental
              application. I acknowledge the reference answers are confidential between the real estate agent and the
              referee.{" "}
              <a href="#" className="text-purple-600 hover:underline">
                View the terms.
              </a>
            </span>
          </label>

          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
            Send reference email
          </button>
        </div>
      </div>
    </div>
  )

  const renderEmploymentStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-slate-900 mb-2">Employment Status</h3>
        <p className="text-sm text-slate-600 mb-6">
          Please enter your current and most dominant Employment arrangement first
        </p>

        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-6">Employment Details</h4>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-900 mb-2">Employment Status</label>
            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option value="">Select your employment status</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self Employed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>

          {formData.employmentStatus && (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Business name"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Business Phone</label>
                  <input
                    type="tel"
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleInputChange}
                    placeholder="e.g. 3222 - 9000"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-900 mb-2">Business Address</label>
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  placeholder="e.g. 142 Riese Street"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Suburb</label>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleInputChange}
                    placeholder="e.g. Raytown"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Postcode</label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    placeholder="e.g. 1011"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select state</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="tx">Texas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select a country</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Your Employment Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="e.g. Designer"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Are you currently employed here
                  </label>
                  <div className="flex gap-4 mt-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="currentlyEmployed"
                        value="yes"
                        checked={formData.currentlyEmployed === "yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-slate-600">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="currentlyEmployed"
                        value="no"
                        checked={formData.currentlyEmployed === "no"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-slate-600">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    placeholder="MM/YYYY"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    placeholder="MM/YYYY"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Employment Type</label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select employment type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Gross Annual Employment Income
                  </label>
                  <input
                    type="text"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    placeholder="e.g. 50000"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Employment Reference */}
        {formData.employmentStatus && (
          <div className="border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-6">Employment Reference</h4>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Supervisor Name</label>
                <input
                  type="text"
                  name="supervisorName"
                  value={formData.supervisorName}
                  onChange={handleInputChange}
                  placeholder="Supervisor full name"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Supervisor Position</label>
                <input
                  type="text"
                  name="supervisorPosition"
                  value={formData.supervisorPosition}
                  onChange={handleInputChange}
                  placeholder="e.g. Owner"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="supervisorPhone"
                  value={formData.supervisorPhone}
                  onChange={handleInputChange}
                  placeholder="e.g. 3222 - 9000"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="supervisorEmail"
                  value={formData.supervisorEmail}
                  onChange={handleInputChange}
                  placeholder="hi@example.com"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <label className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 rounded mt-1" />
              <span className="text-xs text-slate-600">
                I give the authority to my Referees to release all my personal information relating to my rental
                application. I acknowledge the reference answers are confidential between the real estate agent and the
                referee.{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  View the terms.
                </a>
              </span>
            </label>

            <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
              Send reference email
            </button>
          </div>
        )}
      </div>
    </div>
  )

  const renderLivingArrangementsStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-slate-900 mb-2">Living Arrangements</h3>
        <p className="text-sm text-slate-600 mb-6">
          Current and previous living arrangement is required. Please provide a minimum of 4 years combined Current &
          Previous history
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Previous Living Arrangements */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4">Previous Living Arrangements</h4>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition mb-4">
              + Add Living Arrangement
            </button>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="previousArrangementNote"
                checked={formData.previousArrangementNote}
                onChange={handleInputChange}
                className="w-4 h-4 rounded mt-1"
              />
              <span className="text-sm text-slate-600">
                I don't have a previous living arrangement (e.g. Only lived in my childhood home)
              </span>
            </label>

            {formData.previousArrangementNote && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Reason for not having a previous living arrangement
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="e.g. I have never lived out of my childhood"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  rows={4}
                />
              </div>
            )}
          </div>

          {/* Current Living Arrangements */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4">Current Living Arrangements</h4>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition">
              + Add Living Arrangement
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDocsStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-slate-900 mb-2">Documents</h3>
        <p className="text-sm text-slate-600 mb-6">
          Below are the documentation requirements you must provide as proof of your identity and income sources.
        </p>

        {/* Residency Status */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-4">Residency Status</h4>
          <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option value="">Select residency status</option>
            <option value="citizen">Citizen</option>
            <option value="permanent">Permanent Resident</option>
            <option value="visa">Visa Holder</option>
          </select>
        </div>

        {/* Group A - Photo Identification */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <h4 className="font-semibold text-slate-900">Group A (Photo Identification)</h4>
            <div className="group relative">
              <HelpCircle size={18} className="text-slate-400 cursor-help" />
              <div className="absolute right-0 top-6 w-64 bg-slate-900 text-white text-xs rounded p-3 invisible group-hover:visible z-10 shadow-lg">
                Please select 1 of the 2 options here as proof of identity. If you use a digital license, please ensure
                you display the address portion of your license.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Driver License (Front)</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Driver License (Back)</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Passport</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Proof of Age Card (Front)</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Proof of Age Card (Back)</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>
          </div>
        </div>

        {/* Group B - Proof of Income */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <h4 className="font-semibold text-slate-900">Group B (Proof of Income)</h4>
            <div className="group relative">
              <HelpCircle size={18} className="text-slate-400 cursor-help" />
              <div className="absolute right-0 top-6 w-64 bg-slate-900 text-white text-xs rounded p-3 invisible group-hover:visible z-10 shadow-lg">
                Please provide the last 3 pay slips or the most recent bank account summary. Payslips required if
                employed & for other proof to show source of income.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Current Pay Slip</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Second Pay Slip</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Third Pay Slip</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Fourth Pay Slip</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="text-sm font-medium text-slate-900">
                And Or if self-employed, unemployed, retired/other
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Current bank account balance summary</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>
          </div>
        </div>

        {/* Group C - Proof of Address */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <h4 className="font-semibold text-slate-900">Group C (Proof of Address)</h4>
            <div className="group relative">
              <HelpCircle size={18} className="text-slate-400 cursor-help" />
              <div className="absolute right-0 top-6 w-64 bg-slate-900 text-white text-xs rounded p-3 invisible group-hover:visible z-10 shadow-lg">
                Please provide a proof of address or tenancy. If you provide to provide any documents with proof of
                address, please leave this section blank.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Utility Bill / Phone Bill</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Vehicle Registration</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Rental Receipts</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <label className="text-sm font-medium text-slate-900">Council or Water Rates</label>
              <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition">
                <span>📎</span> Select File
              </button>
            </div>
          </div>
        </div>

        {/* Supporting Documents */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <h4 className="font-semibold text-slate-900">Supporting Documents</h4>
            <div className="group relative">
              <HelpCircle size={18} className="text-slate-400 cursor-help" />
              <div className="absolute right-0 top-6 w-64 bg-slate-900 text-white text-xs rounded p-3 invisible group-hover:visible z-10 shadow-lg">
                These supporting documents provide further information for the assessment of your application.
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-medium text-slate-900 mb-4">Additional Documents</h5>
            <p className="text-sm text-slate-600 mb-4">e.g. Rent ledger, Medicare card and reference letter.</p>
            <button className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 transition">
              <span className="text-xl">+</span> Add Another Document
            </button>
          </div>
        </div>

        {/* Additional Comments */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-4">Additional Comments</h4>
          <textarea
            placeholder="Feel free to add any additional comments that you would like to be considered as part of your rental application."
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            rows={5}
          />
        </div>

        {/* Applicant Declarations */}
        <div className="border border-slate-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-4">Applicant Declarations</h4>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="w-4 h-4 rounded mt-1" />
            <span className="text-sm text-slate-600">
              I ([Applicant Name]) acknowledge that I have read, understood and agree with the Privacy statement and
              Collection notice below and the Tenancy Declaration
            </span>
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-slate-900">Nestbooking</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-gray-600 hover:text-slate-900 transition">
              Dashboard
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900 transition">
              Applications
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-slate-900 transition">
              <Bell size={20} />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition"
              >
                <div className="w-7 h-7 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  GI
                </div>
                <span className="text-sm font-semibold text-slate-900">Giovanni</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-slate-900 hover:bg-slate-50 flex items-center gap-2 transition"
                  >
                    <User size={16} /> My Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-slate-900 hover:bg-slate-50 flex items-center gap-2 transition"
                  >
                    <User size={16} /> My Info
                  </Link>
                  <hr className="my-2" />
                  <button className="w-full text-left px-4 py-2 text-slate-900 hover:bg-slate-50 flex items-center gap-2 transition">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Tenancy Applications</h1>

        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleStepClick(index + 1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition ${
                  currentStep > index + 1
                    ? "bg-purple-600 text-white cursor-pointer hover:bg-purple-700"
                    : currentStep === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-slate-200 text-slate-600 cursor-not-allowed"
                }`}
                disabled={currentStep < index + 1}
              >
                {currentStep > index + 1 ? "✓" : index + 1}
              </button>
              <span className={currentStep === index + 1 ? "font-semibold text-slate-900" : "text-slate-600"}>
                {step}
              </span>
              {index < steps.length - 1 && <ChevronRight size={20} className="text-slate-300 mx-2 flex-shrink-0" />}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8">
          {currentStep === 1 && renderPersonalStep()}
          {currentStep === 2 && renderEmploymentStep()}
          {currentStep === 3 && renderLivingArrangementsStep()}
          {currentStep === 4 && renderDocsStep()}
        </div>

        <div className="flex gap-4">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition"
            >
              Back
            </button>
          )}
          <button
            onClick={handleContinue}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition"
          >
            {currentStep === steps.length ? "Submit Application" : "Continue"}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 text-sm">
          <div className="flex items-center justify-center gap-1 mb-2">
            <span>⚡</span>
            <a href="#" className="hover:text-slate-900 transition">
              Powered by Estatery
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="hover:text-slate-900 transition">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900 transition">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
