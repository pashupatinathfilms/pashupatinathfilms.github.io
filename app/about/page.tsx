"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, Target, Award, Globe } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect, useRef, useState } from "react"

// Animated Section Component with Parallax
function AnimatedSection({ children, className = "", delay = 0, parallaxSpeed = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  parallaxSpeed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [elementTop, setElementTop] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
      // Get initial position
      setElementTop(ref.current.offsetTop)
    }

    return () => observer.disconnect()
  }, [delay])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    if (parallaxSpeed !== 0) {
      window.addEventListener('scroll', throttledScroll, { passive: true })
      return () => window.removeEventListener('scroll', throttledScroll)
    }
  }, [parallaxSpeed])

  // Calculate parallax offset
  const parallaxOffset = parallaxSpeed !== 0 ? (scrollY - elementTop) * parallaxSpeed : 0

  return (
    <div 
      ref={ref} 
      className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out ${className}`}
      style={{
        transform: parallaxSpeed !== 0 
          ? `translate3d(0, calc(-32px + ${parallaxOffset}px), 0)` 
          : 'translateY(32px)'
      }}
    >
      {children}
    </div>
  )
}

// Hero Image Component with True Parallax Effect
function HeroImage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Check if hero section is still visible
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetHeight
        setIsVisible(currentScrollY < heroBottom)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  // Calculate parallax offsets
  const backgroundOffset = scrollY * 0.5 // Background moves slower
  const overlayOffset = scrollY * 0.3 // Overlay moves even slower
  const contentOffset = scrollY * 0.1 // Content moves very slowly

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax - Slower */}
      <div 
        className="absolute inset-0 w-full h-[130%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/company.jpeg')",
          transform: `translate3d(0, ${backgroundOffset}px, 0)`,
          transition: isVisible ? 'none' : 'transform 0.1s ease-out',
        }}
      />
      
      {/* Multiple Shader Layers with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"
        style={{
          transform: `translate3d(0, ${overlayOffset}px, 0)`,
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40"
        style={{
          transform: `translate3d(0, ${overlayOffset}px, 0)`,
        }}
      />
      
      {/* Animated Overlay Pattern with Parallax */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate3d(0, ${overlayOffset * 0.7}px, 0)`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:60px_60px] animate-pulse" />
      </div>
      
      {/* Content Overlay with Minimal Parallax */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-center px-4"
        style={{
          transform: `translate3d(0, ${contentOffset}px, 0)`,
        }}
      >
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="block opacity-90 animate-slide-up">
              Crafting
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-slide-up animation-delay-300">
              Cinema
            </span>
            <span className="block opacity-90 animate-slide-up animation-delay-500">
              Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-700">
            Where storytelling meets innovation, and dreams become cinematic reality
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator with No Parallax */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-sm font-medium tracking-wide">SCROLL</span>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Custom Styles */}
      <style jsx global>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .hero-parallax {
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .slide-in-left {
          transform: translateX(-50px) translateY(8px);
        }
        
        .slide-in-right {
          transform: translateX(50px) translateY(8px);
        }
        
        .slide-in-up {
          transform: translateY(30px);
        }
        
        .fade-in-slow {
          transition-duration: 1.2s;
        }
        
        .fade-in-medium {
          transition-duration: 0.8s;
        }
        
        .fade-in-fast {
          transition-duration: 0.6s;
        }
      `}</style>
      {/* Navigation - Fixed on top */}
      <Navigation />

      {/* Hero Image Section */}
      <HeroImage />

      {/* Content Section */}
      <div className="relative z-10 bg-background">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Our Works
          </Link>
        </div>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16 fade-in-medium" parallaxSpeed={0.05}>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                The story of Pashupatinath Film Productions - a journey of passion, excellence, and global storytelling
                that began in 2018.
              </p>
            </AnimatedSection>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection delay={200} className="slide-in-left fade-in-slow" parallaxSpeed={0.03}>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Established in 2018 by celebrated Nepali actor Sonu Khatri and a visionary producer-director,
                Pashupatinath Film Productions Pvt. Ltd. is a fully integrated studio renowned for delivering some of
                the most iconic works in modern Nepali and Indian Bhojpuri cinema.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400} className="slide-in-right fade-in-slow" parallaxSpeed={0.07}>
              <div className="relative">
                <img
                  src="/modern-film-production-studio-building-with-cinema.jpg"
                  alt="Pashupatinath Film Productions Studio"
                  className="w-full h-[400px] object-cover rounded-lg border border-border"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Our Production Studio</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Journey Section */}
          <AnimatedSection delay={100} className="slide-in-up fade-in-medium mb-12" parallaxSpeed={0.02}>
            <Card className="border-border bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Journey</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Over the years, the company has evolved into a powerhouse, excelling as a production and distribution
                  entity, as well as a premier visual effects studio. The banner's debut production was a blockbuster
                  success, setting a benchmark for excellence. Since then, Pashupatinath has continued its winning streak
                  with critically and commercially successful films such as{" "}
                  <span className="text-primary font-medium">Nirahua Chalal London</span>,{" "}
                  <span className="text-primary font-medium">Prem Geet</span>,{" "}
                  <span className="text-primary font-medium">Prem Geet 2</span>,{" "}
                  <span className="text-primary font-medium">Jay Shambhu</span>,{" "}
                  <span className="text-primary font-medium">One Man Army</span>,{" "}
                  <span className="text-primary font-medium">Tripitak</span>, and{" "}
                  <span className="text-primary font-medium">Ahimsa</span>.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Mission Section */}
          <AnimatedSection delay={200} className="slide-in-up fade-in-medium mb-12" parallaxSpeed={0.04}>
            <Card className="border-border bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Our mission is to craft content that resonates globally, balancing popular appeal with critical acclaim,
                  while championing the evolution of Indian Bhojpuri and Nepali cinema.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Excellence Section */}
          <AnimatedSection delay={300} className="slide-in-up fade-in-medium mb-12" parallaxSpeed={0.06}>
            <Card className="border-border bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Commitment to Excellence</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  At Pashupatinath Film Productions, storytelling lies at the heart of everything we do. With originality,
                  quality, and meticulous attention to detail as our guiding principles, we create content that not only
                  entertains but also offers a meaningful cinematic experience. As a trusted platform for the country's
                  biggest stars, our films consistently push creative boundaries while preserving cultural authenticity.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Expanding Horizons Section */}
          <AnimatedSection delay={400} className="slide-in-up fade-in-medium mb-12" parallaxSpeed={0.08}>
            <Card className="border-border bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Expanding Horizons</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Our journey is one of constant exploration and innovation. By venturing into diverse international
                  markets and incorporating cutting-edge visual effects, we aspire to elevate the global standing of
                  Nepali and Indian cinema. The company remains steadfast in its vision to inspire, entertain, and connect
                  audiences worldwide through compelling narratives and unparalleled production quality.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection delay={500} className="slide-in-up fade-in-fast text-center" parallaxSpeed={0.01}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience Our Stories?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Discover our collection of films that have captivated audiences across the globe and continue to set new
                standards in cinema.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/">View Our Works</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/events">Upcoming Events</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
