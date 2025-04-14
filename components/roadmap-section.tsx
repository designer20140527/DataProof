export default function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-16 text-center text-5xl font-bold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
          Roadmap
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Phase 1 */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300 md:left-auto md:right-0 md:top-8 md:h-px md:w-full md:translate-x-0"></div>
            <div className="relative z-10 h-full rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1a1e2e] px-3 py-1 text-xs font-bold text-white">
                Phase 1
              </div>
              <h3 className="mb-4 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                Foundation & Community Building
              </h3>
              <ul className="space-y-2 font-mono text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Platform Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community Activation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initial Partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Launch DataProof Token ($DATA)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300 md:left-0 md:top-8 md:h-px md:w-full md:translate-x-0"></div>
            <div className="relative z-10 h-full rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1a1e2e] px-3 py-1 text-xs font-bold text-white">
                Phase 2
              </div>
              <h3 className="mb-4 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                AI Integration & Beta Testing
              </h3>
              <ul className="space-y-2 font-mono text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI Engine Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Open Beta Launch</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Staking Mechanics Go Live</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Engagement Layer Expansion</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300 md:left-0 md:top-8 md:h-px md:w-full md:translate-x-0"></div>
            <div className="relative z-10 h-full rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1a1e2e] px-3 py-1 text-xs font-bold text-white">
                Phase 3
              </div>
              <h3 className="mb-4 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                ZKP Integration & Privacy Enhancements
              </h3>
              <ul className="space-y-2 font-mono text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Zero-Knowledge Proof (ZKP) Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Advanced Verification Suite</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Governance Onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Strategic Global Integrations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300 md:hidden"></div>
            <div className="relative z-10 h-full rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1a1e2e] px-3 py-1 text-xs font-bold text-white">
                Phase 4
              </div>
              <h3 className="mb-4 text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                Ecosystem Growth & Industry Leadership
              </h3>
              <ul className="space-y-2 font-mono text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cross-Platform Integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Global Ecosystem Scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Data Tokenization Begins</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thought Leadership Push</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
