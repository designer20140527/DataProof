import { Check } from "lucide-react"
import Image from "next/image"

export default function SafeguardSection() {
  return (
    <section className="bg-[#1a1e2e] py-16 text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Centered heading */}
        <h2
          className="mb-12 text-center text-5xl font-bold leading-tight"
          style={{ fontFamily: "Satori TRIAL, sans-serif" }}
        >
          Safeguard of the Dark Forest
        </h2>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Left side image container */}
          <div className="md:w-[50%]">
            <div className="overflow-hidden rounded-lg h-[500px]">
              <div className="w-full h-full relative">
                <Image 
                  src="/image-safe.png" 
                  alt="DataProof Safeguard" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="scale-100"
                />
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="md:w-[50%]">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2a2e3e]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Complete Privacy Protection
                  </h3>
                  <p className="font-mono text-sm text-gray-300">
                    End-to-end encryption and ZKP ensure your data is protected at every stage of verification.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2a2e3e]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Decentralized Verification
                  </h3>
                  <p className="font-mono text-sm text-gray-300">
                    A decentralized network ensures secure and transparent data validation.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2a2e3e]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    AI-Enhanced Efficiency
                  </h3>
                  <p className="font-mono text-sm text-gray-300">
                    AI speeds up fraud detection, providing faster and more accurate verification.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2a2e3e]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Cross-industry Applications
                  </h3>
                  <p className="font-mono text-sm text-gray-300">
                    DataProof supports data verification for multiple industries, from finance to research.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2a2e3e]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                    Rewards & Incentives
                  </h3>
                  <p className="font-mono text-sm text-gray-300">
                    Validators and users are rewarded, fostering a thriving ecosystem.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
