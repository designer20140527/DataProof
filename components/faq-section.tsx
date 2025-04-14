"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: React.ReactNode
  isOpen: boolean
  toggleOpen: () => void
}

function FaqItem({ question, answer, isOpen, toggleOpen }: FaqItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)
  
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen, answer])

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
          {question}
        </h3>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: `${height}px` }}
      >
        <div 
          ref={contentRef} 
          className={`pb-6 transform transition-opacity duration-300 ease-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="font-mono text-sm leading-relaxed text-gray-600">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: "What is DataProof?",
      answer: (
        <p>
          DataProof is a decentralized platform that verifies the authenticity of data using blockchain, AI, and
          cryptographic technologies. It allows users to validate documents, files, records, or transactions — without
          revealing the underlying data — by combining Zero-Knowledge Proofs (ZKP), AES-256 encryption, and AI-powered
          fraud detection.
        </p>
      ),
    },
    {
      question: "How does DataProof work?",
      answer: (
        <div>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>AES-256 encryption to protect data from end to end,</li>
            <li>AI models that scan for fraud or anomalies,</li>
            <li>ZKPs to prove data is authentic without exposing it,</li>
            <li>On-chain anchoring to generate tamper-proof proof certificates.</li>
          </ul>
          <p>
            Users receive a private authenticity report showing trust scores, anomaly flags, and a cryptographic
            verification hash — without disclosing the original content.
          </p>
        </div>
      ),
    },
    {
      question: "What types of data can be verified with DataProof?",
      answer: (
        <ul className="list-inside list-disc space-y-1">
          <li>Financial reports & statements,</li>
          <li>Research data & academic submissions,</li>
          <li>Supply chain records & certificates,</li>
          <li>Patient health data & clinical logs,</li>
          <li>Smart contracts & legal agreements,</li>
          <li>PDFs, APIs, and database exports.</li>
        </ul>
      ),
    },
    {
      question: "How does DataProof ensure privacy during verification?",
      answer: (
        <p>
          All data is encrypted using AES-256, and never stored in plaintext. During the verification process,
          Zero-Knowledge Proofs (ZKP) allow the system to validate authenticity without exposing any raw content. The
          result is a privacy-preserving proof of integrity — only metadata, scores, and proof hashes are shown.
        </p>
      ),
    },
    {
      question: "What is the role of the $DATA token?",
      answer: (
        <div>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Pay for verification services,</li>
            <li>Stake for rewards and network participation,</li>
            <li>Vote on governance proposals,</li>
            <li>Access premium features,</li>
            <li>Incentivize validators and developers,</li>
            <li>Settle platform transaction fees,</li>
            <li>Access tokenized data in the future.</li>
          </ul>
          <p>It's more than a utility token — it's the foundation of decentralized trust and engagement.</p>
        </div>
      ),
    },
    {
      question: "How do staking and rewards work on DataProof?",
      answer: (
        <div>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Earn rewards based on platform activity,</li>
            <li>Secure the verification network as validators,</li>
            <li>Gain higher trust levels and access priority processing.</li>
          </ul>
          <p>
            Staking also grants voting rights in protocol governance, allowing token holders to help steer DataProof's
            development and policy.
          </p>
        </div>
      ),
    },
    {
      question: "Who can become a validator?",
      answer: (
        <div>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Run proof checks (ZKP, AI inference),</li>
            <li>Anchor verified hashes on-chain,</li>
            <li>Help ensure decentralization and transparency.</li>
          </ul>
          <p>Validators are rewarded for accurate validation and penalized for dishonest or negligent behavior.</p>
        </div>
      ),
    },
    {
      question: "Can third parties verify a proof?",
      answer: (
        <p>
          Yes. All verification results are hashed and recorded on-chain. Third parties can confirm that a dataset or
          document has passed through DataProof by referencing the public proof hash — without accessing the original
          file or sensitive details.
        </p>
      ),
    },
    {
      question: "Is DataProof only for blockchain data?",
      answer: (
        <p>
          No. DataProof is designed to work across Web2 and Web3 systems. It can verify traditional enterprise files
          (e.g., Excel, PDFs), SQL exports, cloud data feeds, and smart contract-related and on-chain records. This
          makes it a truly universal integrity protocol.
        </p>
      ),
    },
    {
      question: "What industries can benefit from using DataProof?",
      answer: (
        <ul className="list-inside list-disc space-y-1">
          <li>Finance — verifying audits, ledgers, and disclosures,</li>
          <li>Academia — certifying research originality and data trails,</li>
          <li>Healthcare — anchoring sensitive records while staying HIPAA/GDPR-compliant,</li>
          <li>Supply Chain — verifying product and compliance documents,</li>
          <li>Legal — validating contracts, NDAs, and version histories.</li>
        </ul>
      ),
    },
  ]

  return (
    <section id="faq" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center text-5xl font-bold" style={{ fontFamily: "Satori TRIAL, sans-serif" }}>
          FAQ
        </h2>

        <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
