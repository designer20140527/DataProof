"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveLink(sectionId);
    
    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 py-6 transition-all duration-700 ease-in-out">
      <div className="mx-auto max-w-[1168px] flex justify-center">
        <div 
          className={`
            flex transition-all duration-700 ease-in-out
            ${scrolled 
              ? 'bg-[#1a1e2e]/60 backdrop-blur-md rounded-lg py-1 px-1 shadow-lg' 
              : 'w-full'
            }
          `}
        >
          <div className={`
            flex items-center w-full transition-all duration-700 ease-in-out
            ${scrolled ? 'justify-center gap-3' : 'justify-between'}
          `}>
            <div className="header-logo flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a1e2e] transition-all duration-700 ease-in-out">
              <Link href="/">
                <Image src="/logo.png" alt="DataProof Logo" width={30} height={30} className="h-8 w-8" />
              </Link>
            </div>

            <nav className="h-11 rounded-lg bg-[#1a1e2e] px-6 flex items-center transition-all duration-700 ease-in-out">
              <ul className="flex items-center space-x-6">
                <li className="relative">
                  <a 
                    href="#top" 
                    onClick={(e) => scrollToSection(e, 'top')} 
                    className="text-[15px] text-white cursor-pointer relative pb-1 block"
                  >
                    Home
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0.5 bg-white rounded-full transition-all duration-300 ${activeLink === 'top' ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}></span>
                  </a>
                </li>
                <li className="relative">
                  <a 
                    href="#about" 
                    onClick={(e) => scrollToSection(e, 'about')} 
                    className="text-[15px] text-white cursor-pointer relative pb-1 block"
                  >
                    About
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0.5 bg-white rounded-full transition-all duration-300 ${activeLink === 'about' ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}></span>
                  </a>
                </li>
                <li className="relative">
                  <a 
                    href="#tokenomics" 
                    onClick={(e) => scrollToSection(e, 'tokenomics')} 
                    className="text-[15px] text-white cursor-pointer relative pb-1 block"
                  >
                    Tokenomics
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0.5 bg-white rounded-full transition-all duration-300 ${activeLink === 'tokenomics' ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}></span>
                  </a>
                </li>
                <li className="relative">
                  <a 
                    href="#roadmap" 
                    onClick={(e) => scrollToSection(e, 'roadmap')} 
                    className="text-[15px] text-white cursor-pointer relative pb-1 block"
                  >
                    Roadmap
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0.5 bg-white rounded-full transition-all duration-300 ${activeLink === 'roadmap' ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}></span>
                  </a>
                </li>
                <li className="relative">
                  <a 
                    href="#faq" 
                    onClick={(e) => scrollToSection(e, 'faq')} 
                    className="text-[15px] text-white cursor-pointer relative pb-1 block"
                  >
                    FAQ
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0.5 bg-white rounded-full transition-all duration-300 ${activeLink === 'faq' ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}></span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="header-gitbook h-11 rounded-lg bg-[#1a1e2e] px-4 flex items-center transition-all duration-700 ease-in-out">
              <div className="relative overflow-hidden group cursor-pointer">
                <div className="flex items-center transition-transform duration-300 transform group-hover:translate-y-full">
                  <span className="text-[15px] text-white">GitBook</span>
                  <ChevronRight className="ml-1 h-5 w-5 text-white" />
                </div>
                <div className="absolute top-0 left-0 flex items-center transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0">
                  <span className="text-[15px] text-white">GitBook</span>
                  <ChevronRight className="ml-1 h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
