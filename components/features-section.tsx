import { Database, Lock, Shield } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="about" className="mt-16 bg-gray-100 py-16">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="mb-4 text-5xl font-bold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
          Core Mission
        </h2>
        <p className="mx-auto mb-16 max-w-3xl font-mono text-base leading-relaxed text-gray-700">
          DataProof aims to provide secure, AI-powered data validation tools that eliminate fraud and manipulation while
          safeguarding privacy with advanced cryptographic techniques.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-xl bg-white p-8 text-left shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Database className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Decentralized Platform
            </h3>
            <p className="font-mono text-sm text-gray-600">
              We use blockchain technology to ensure a transparent and secure data verification process, free from
              third-party manipulation.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-xl bg-white p-8 text-left shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Shield className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Zero-Knowledge Proofs (ZKP)
            </h3>
            <p className="font-mono text-sm text-gray-600">
              ZKP enables us to validate data authenticity without revealing any sensitive information, ensuring
              privacy.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-xl bg-white p-8 text-left shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Lock className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Data Encryption
            </h3>
            <p className="font-mono text-sm text-gray-600">
              AES-256 encryption secures your data before it enters the system, ensuring end-to-end protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
