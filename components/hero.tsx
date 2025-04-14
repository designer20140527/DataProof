import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative">
      <section className="relative mt-4 flex flex-col items-center justify-center">
        <div className="relative h-[450px] w-full rounded-lg">
          {/* Image container with title.png - can overflow */}
          <Image 
            src="/title.png" 
            alt="DataProof Title" 
            fill
            className="animate-fade-in"
            style={{ 
              objectFit: 'contain',
              objectPosition: 'center',
              transform: 'scale(1.25)'
            }}
            priority
          />
        </div>

        <div className="mt-[-20px] relative z-10">
          <div className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black shadow-[2px_4px_0px_#1a1e2e] hover:bg-white cursor-pointer group">
            <div className="relative overflow-hidden">
              <div className="flex items-center transition-transform duration-300 transform group-hover:translate-y-full">
                <span>LEARN MORE ON DATAPROOF GITBOOK</span>
              </div>
              <div className="absolute top-0 left-0 flex items-center transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0">
                <span>LEARN MORE ON DATAPROOF GITBOOK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-[#1a1e2e]/80 backdrop-blur-sm p-12 text-white relative">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left side content (70%) */}
          <div className="md:w-[65%] z-10">
            <h2 className="mb-6 text-5xl font-bold leading-tight" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Data gets verified. Truth gets revealed. Content stays private.
            </h2>

            <p className="mb-8 font-mono text-base leading-relaxed">
              DataProof is a decentralized AI-powered data verification platform that guarantees the authenticity of your
              data. We use advanced encryption methods, including Zero-Knowledge Proof (ZKP) and AES-256, to keep your
              data secure during verification.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://t.me/DataProof_Official" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white cursor-pointer group">
                <div className="relative overflow-hidden">
                  <div className="flex items-center gap-2 transition-transform duration-300 transform group-hover:translate-y-full">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                      <path
                        d="m18.6357 15.6701 1.7164 -5.1493c1.4995 -4.49838 2.2492 -6.74758 1.0619 -7.93485 -1.1872 -1.18726 -3.4364 -0.43753 -7.9348 1.06193L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698c-0.49075 0.84414 -0.49075 1.88671 0 2.73082 0.51586 0.8874 2.33117 1.4925 5.96181 2.7027 0.44994 0.15 0.95614 0.0429 1.29307 -0.2909l5.50566 -5.45465c0.3097 -0.30687 0.8096 -0.30454 1.1164 0.0052 0.3069 0.30974 0.3046 0.8096 -0.0052 1.11647l-5.4167 5.36658c-0.3713 0.3679 -0.4889 0.931 -0.3236 1.4269 1.2102 3.6306 1.8153 5.446 2.7027 5.9618 0.8441 0.4908 1.8867 0.4908 2.7308 0 0.8874 -0.5158 1.4925 -2.3311 2.7027 -5.9618Z"
                        fill="#000000"
                        strokeWidth="1"
                      />
                    </svg>
                    <span>Telegram</span>
                  </div>
                  <div className="absolute top-0 left-0 flex items-center gap-2 transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                      <path
                        d="m18.6357 15.6701 1.7164 -5.1493c1.4995 -4.49838 2.2492 -6.74758 1.0619 -7.93485 -1.1872 -1.18726 -3.4364 -0.43753 -7.9348 1.06193L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698c-0.49075 0.84414 -0.49075 1.88671 0 2.73082 0.51586 0.8874 2.33117 1.4925 5.96181 2.7027 0.44994 0.15 0.95614 0.0429 1.29307 -0.2909l5.50566 -5.45465c0.3097 -0.30687 0.8096 -0.30454 1.1164 0.0052 0.3069 0.30974 0.3046 0.8096 -0.0052 1.11647l-5.4167 5.36658c-0.3713 0.3679 -0.4889 0.931 -0.3236 1.4269 1.2102 3.6306 1.8153 5.446 2.7027 5.9618 0.8441 0.4908 1.8867 0.4908 2.7308 0 0.8874 -0.5158 1.4925 -2.3311 2.7027 -5.9618Z"
                        fill="#000000"
                        strokeWidth="1"
                      />
                    </svg>
                    <span>Telegram</span>
                  </div>
                </div>
              </Link>

              <Link href="https://x.com/DataProof_COIN" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#1a1e2e] px-6 py-3 text-sm font-medium text-white hover:bg-[#1a1e2e] cursor-pointer group">
                <div className="relative overflow-hidden">
                  <div className="flex items-center gap-2 transition-transform duration-300 transform group-hover:translate-y-full">
                    <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                      <path
                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                        fill="white"
                      />
                    </svg>
                    <span>Twitter X</span>
                  </div>
                  <div className="absolute top-0 left-0 flex items-center gap-2 transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0">
                    <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                      <path
                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                        fill="white"
                      />
                    </svg>
                    <span>Twitter X</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right side image container */}
          <div className="md:w-[35%] relative">
            <div className="w-[450px] h-[450px] absolute right-[-20%] bottom-[-35%] animate-floating">
              <Image 
                src="/image-info.png" 
                alt="DataProof Info" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
