import { ArrowUpRight, Brain, FileText, Lock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OfferSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-center text-5xl font-bold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
          What We Offer?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm group">
            <div className="m-2.5 overflow-hidden rounded-lg">
              <div className="h-64 rounded-lg relative overflow-hidden">
                <Image 
                  src="/image-offer1.png" 
                  alt="AI-driven Fraud Detection"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                  AI-driven Fraud Detection
                </h3>
                <ArrowUpRight className="h-5 w-5 opacity-0 transition-all duration-300 transform translate-x-[-10px] translate-y-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <p className="mb-6 font-mono text-sm text-gray-600">
                AI algorithms detect anomalies and signs of data tampering for accurate fraud detection.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                <Brain className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm group">
            <div className="m-2.5 overflow-hidden rounded-lg">
              <div className="h-64 rounded-lg relative overflow-hidden">
                <Image 
                  src="/image-offer2.png" 
                  alt="Data Encryption"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                  Data Encryption
                </h3>
                <ArrowUpRight className="h-5 w-5 opacity-0 transition-all duration-300 transform translate-x-[-10px] translate-y-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <p className="mb-6 font-mono text-sm text-gray-600">
                AES-256 encryption ensures data security before, during, and after verification.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                <Lock className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm group">
            <div className="m-2.5 overflow-hidden rounded-lg">
              <div className="h-64 rounded-lg relative overflow-hidden">
                <Image 
                  src="/image-offer3.png" 
                  alt="Zero-Knowledge Proof (ZKP)"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                  Zero-Knowledge Proof (ZKP)
                </h3>
                <ArrowUpRight className="h-5 w-5 opacity-0 transition-all duration-300 transform translate-x-[-10px] translate-y-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <p className="mb-6 font-mono text-sm text-gray-600">
                Validate data without revealing its content, preserving privacy during the verification process.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                <Shield className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm group">
            <div className="m-2.5 overflow-hidden rounded-lg">
              <div className="h-64 rounded-lg relative overflow-hidden">
                <Image 
                  src="/image-offer4.png" 
                  alt="Anonymous Reports"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                  Anonymous Reports
                </h3>
                <ArrowUpRight className="h-5 w-5 opacity-0 transition-all duration-300 transform translate-x-[-10px] translate-y-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <p className="mb-6 font-mono text-sm text-gray-600">
                Receive data authenticity reports showing only the verification score and anomalies without exposing raw
                data.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                <FileText className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
