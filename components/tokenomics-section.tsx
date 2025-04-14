import { Coins, Check } from "lucide-react"

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-16 bg-[#1a1e2e] text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-center text-5xl font-bold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
          Tokenomics
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Token Info */}
          <div className="rounded-xl bg-[#2a2e3e] p-6">
            <div className="mb-6 flex items-center">
              <Coins className="mr-3 h-8 w-8 text-gray-300" />
              <div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
                  Token Symbol: <span className="text-gray-300">$DATA</span>
                </h3>
                <p className="font-mono text-sm text-gray-300">Total Supply: 1,000,000,000 $DATA</p>
              </div>
            </div>

            <h4 className="mb-4 text-lg font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Token Utility
            </h4>
            <ul className="space-y-3 font-mono text-sm text-gray-300">
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Data Verification Access</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Staking for Rewards</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Governance Participation</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Premium Services Access</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Incentives for Validators and Developers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Transaction Fees</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" />
                <span>Tokenized Data</span>
              </li>
            </ul>
          </div>

          {/* Token Allocation */}
          <div className="rounded-xl bg-[#2a2e3e] p-6">
            <h4 className="mb-6 text-lg font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
              Token Allocation
            </h4>

            <div className="mb-6 h-4 overflow-hidden rounded-full bg-[#3a3e4e]">
              <div className="flex h-full">
                <div className="h-full w-[60%] bg-gray-400" title="Liquidity: 60%"></div>
                <div className="h-full w-[5%] bg-gray-500" title="Ecosystem Development: 5%"></div>
                <div className="h-full w-[15%] bg-gray-600" title="Staking Rewards: 15%"></div>
                <div className="h-full w-[5%] bg-gray-500" title="Platform Operations: 5%"></div>
                <div className="h-full w-[5%] bg-gray-500" title="Team & Advisors: 5%"></div>
                <div className="h-full w-[10%] bg-gray-600" title="Community Incentives: 10%"></div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-[#3a3e4e] p-4">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-gray-400"></div>
                  <span className="font-mono text-xs font-medium">Liquidity</span>
                </div>
                <p className="font-mono text-lg font-bold text-white">60%</p>
              </div>

              <div className="rounded-lg bg-[#3a3e4e] p-4">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-gray-500"></div>
                  <span className="font-mono text-xs font-medium">Ecosystem Development</span>
                </div>
                <p className="font-mono text-lg font-bold text-white">5%</p>
              </div>

              <div className="rounded-lg bg-[#3a3e4e] p-4">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-gray-600"></div>
                  <span className="font-mono text-xs font-medium">Staking Rewards</span>
                </div>
                <p className="font-mono text-lg font-bold text-white">15%</p>
              </div>

              <div className="rounded-lg bg-[#3a3e4e] p-4">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-gray-500"></div>
                  <span className="font-mono text-xs font-medium">Platform Operations</span>
                </div>
                <p className="font-mono text-lg font-bold text-white">5%</p>
              </div>

              <div className="rounded-lg bg-[#3a3e4e] p-4">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-gray-500"></div>
                  <span className="font-mono text-xs font-medium">Team & Advisors</span>
                </div>
                <p className="font-mono text-lg font-bold text-white">5%</p>
              </div>

              <div className="rounded-lg bg-[#3a3e4e] p-4">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-gray-600"></div>
                  <span className="font-mono text-xs font-medium">Community Incentives</span>
                </div>
                <p className="font-mono text-lg font-bold text-white">10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
