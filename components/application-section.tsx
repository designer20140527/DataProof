import { FileCheck, Lightbulb, ShieldCheck } from "lucide-react"
import Image from "next/image"

export default function ApplicationSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* White container with rounded corners */}
        <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
          {/* Subtitle and Heading */}
          <div className="mb-10 text-left">
            <div className="mb-2 inline-flex items-center rounded-full border border-gray-200 px-3 py-1">
              <Lightbulb className="mr-2 h-4 w-4 text-gray-700" />
              <span className="font-mono text-xs font-medium text-gray-700">What we're building</span>
            </div>
            <h2 className="text-5xl font-bold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Application Scenarios
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Column 1 - One full container */}
            <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm">
              <div className="p-6">
                <div className="mb-6 overflow-hidden rounded-lg relative" style={{ paddingBottom: 'calc(7/6 * 100%)' }}>
                  {/* Image container - with 6:7 aspect ratio */}
                  <Image 
                    src="/image-app1.png" 
                    alt="Financial Data Verification" 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                  Financial Data Verification
                </h3>
                <p className="font-mono text-sm text-gray-600">
                  Use DataProof to verify financial statements and transaction records, ensuring authenticity and
                  preventing fraud.
                </p>
              </div>
            </div>

            {/* Column 2 - Two containers */}
            <div className="flex flex-col gap-6">
              {/* Top container - Content + Icon */}
              <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-[#e1fef1] p-6 shadow-sm">
                <div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Academic Research Data Verification
                  </h3>
                  <p className="font-mono text-sm text-gray-600">
                    Verify the accuracy of research data, ensuring integrity and preventing manipulation.
                  </p>
                </div>
                <div className="mt-4 flex justify-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <FileCheck className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Bottom container - Content + Image */}
              <div className="overflow-hidden rounded-xl bg-[#EFEDFF] shadow-sm">
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Supply Chain Data Verification
                  </h3>
                  <p className="mb-4 font-mono text-sm text-gray-600">
                    Confirm product data in the supply chain, ensuring transparency and traceability.
                  </p>
                  <div className="overflow-hidden rounded-lg relative pb-[60%]">
                    {/* Image container */}
                    <Image 
                      src="/image-app2.png" 
                      alt="Supply Chain Data Verification" 
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Two containers */}
            <div className="flex flex-col gap-6">
              {/* Top container - Image + Content */}
              <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm">
                <div className="p-6">
                  <div className="mb-6 overflow-hidden rounded-lg relative pb-[60%]">
                    {/* Image container */}
                    <Image 
                      src="/image-app3.png" 
                      alt="Healthcare Data Verification" 
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Healthcare Data Verification
                  </h3>
                  <p className="font-mono text-sm text-gray-600">
                    Validate patient data and medical records, ensuring accuracy and protecting privacy.
                  </p>
                </div>
              </div>

              {/* Bottom container - Content + Icon */}
              <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm flex-grow">
                <div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Contract and Agreement Verification
                  </h3>
                  <p className="font-mono text-sm text-gray-600">
                    Ensure contracts and agreements are authentic and untampered with.
                  </p>
                </div>
                <div className="mt-auto pt-8 flex justify-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <ShieldCheck className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
