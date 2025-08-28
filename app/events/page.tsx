"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Users, Star, ChevronLeft, ChevronRight, Music } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const bhojpuriEventImages = [
  {
    id: 1,
    src: "/bhojpuri-award-ceremony-stage-performance.png",
    alt: "Award Ceremony Stage Performance",
    title: "Main Stage Performance",
  },
  {
    id: 2,
    src: "/bhojpuri-festival-red-carpet-celebrities.png",
    alt: "Red Carpet Event",
    title: "Red Carpet Arrivals",
  },
  {
    id: 3,
    src: "/bhojpuri-cultural-dance-performance-festival.png",
    alt: "Cultural Dance Performance",
    title: "Cultural Performances",
  },
  {
    id: 4,
    src: "/bhojpuri-award-winners-trophy-ceremony.png",
    alt: "Award Winners",
    title: "Award Winners",
  },
  {
    id: 5,
    src: "/bhojpuri-festival-audience-celebration.png",
    alt: "Festival Audience",
    title: "Celebrating Together",
  },
  {
    id: 6,
    src: "/bhojpuri-music-concert-live-performance.png",
    alt: "Live Music Concert",
    title: "Live Music Concert",
  },
]

const nepaliEventImages = [
  {
    id: 1,
    src: "/nepali-concert-stage-performance.png",
    alt: "Nepali Concert Stage Performance",
    title: "Live Stage Performance",
  },
  {
    id: 2,
    src: "/nepali-traditional-instruments-concert.png",
    alt: "Traditional Nepali Instruments",
    title: "Traditional Music",
  },
  {
    id: 3,
    src: "/nepali-folk-dance-performance.png",
    alt: "Nepali Folk Dance",
    title: "Cultural Dance",
  },
  {
    id: 4,
    src: "/nepali-concert-audience-celebration.png",
    alt: "Concert Audience",
    title: "Celebrating Together",
  },
  {
    id: 5,
    src: "/nepali-musicians-backstage.png",
    alt: "Musicians Backstage",
    title: "Behind the Scenes",
  },
  {
    id: 6,
    src: "/nepali-concert-finale-fireworks.png",
    alt: "Concert Finale",
    title: "Grand Finale",
  },
]

const bhojpuriArtists = [
  {
    id: 1,
    name: "Dinesh Lal Yadav",
    role: "Lead Actor",
    image: "/artist-dinesh-lal-yadav-bhojpuri-actor.png",
  },
  {
    id: 2,
    name: "Khesari Lal Yadav",
    role: "Singer & Actor",
    image: "/artist-khesari-lal-yadav-bhojpuri-singer.png",
  },
  {
    id: 3,
    name: "Pawan Singh",
    role: "Playback Singer",
    image: "/artist-pawan-singh-bhojpuri-singer.png",
  },
  {
    id: 4,
    name: "Amrapali Dubey",
    role: "Actress",
    image: "/artist-amrapali-dubey-bhojpuri-actress.png",
  },
  {
    id: 5,
    name: "Ritesh Pandey",
    role: "Singer",
    image: "/artist-ritesh-pandey-bhojpuri-singer.png",
  },
  {
    id: 6,
    name: "Akshara Singh",
    role: "Actress & Singer",
    image: "/artist-akshara-singh-bhojpuri-actress.png",
  },
]

const nepaliArtists = [
  {
    id: 1,
    name: "Narayan Gopal",
    role: "Folk Singer",
    image: "/artist-narayan-gopal-nepali-singer.png",
  },
  {
    id: 2,
    name: "Aruna Lama",
    role: "Classical Singer",
    image: "/artist-aruna-lama-nepali-singer.png",
  },
  {
    id: 3,
    name: "Ani Choying Drolma",
    role: "Buddhist Singer",
    image: "/artist-ani-choying-drolma-nepali-singer.png",
  },
  {
    id: 4,
    name: "Rajesh Hamal",
    role: "Actor & Host",
    image: "/artist-rajesh-hamal-nepali-actor.png",
  },
  {
    id: 5,
    name: "Deepak Bajracharya",
    role: "Musician",
    image: "/artist-deepak-bajracharya-nepali-musician.png",
  },
  {
    id: 6,
    name: "Tara Devi",
    role: "Traditional Singer",
    image: "/artist-tara-devi-nepali-singer.png",
  },
]

const bhojpuriSponsors = [
  { id: 1, name: "Air Canada", logo: "/sponsor-air-canada-logo.png" },
  { id: 2, name: "TD Bank", logo: "/sponsor-td-bank-logo.png" },
  { id: 3, name: "Rogers", logo: "/sponsor-rogers-logo.png" },
  { id: 4, name: "Shoppers Drug Mart", logo: "/sponsor-shoppers-drug-mart-logo.png" },
  { id: 5, name: "Tim Hortons", logo: "/sponsor-tim-hortons-logo.png" },
  { id: 6, name: "Canadian Tire", logo: "/sponsor-canadian-tire-logo.png" },
]

const nepaliSponsors = [
  { id: 1, name: "Nepal Airlines", logo: "/sponsor-nepal-airlines-logo.png" },
  { id: 2, name: "Himalayan Bank", logo: "/sponsor-himalayan-bank-logo.png" },
  { id: 3, name: "Ncell", logo: "/sponsor-ncell-logo.png" },
  { id: 4, name: "Everest Bank", logo: "/sponsor-everest-bank-logo.png" },
  { id: 5, name: "Wai Wai", logo: "/sponsor-wai-wai-logo.png" },
  { id: 6, name: "Goldstar Shoes", logo: "/sponsor-goldstar-shoes-logo.png" },
]

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState<"bhojpuri" | "nepali">("nepali")
  const [currentArtist, setCurrentArtist] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const currentEventImages = activeEvent === "bhojpuri" ? bhojpuriEventImages : nepaliEventImages
  const currentArtists = activeEvent === "bhojpuri" ? bhojpuriArtists : nepaliArtists
  const currentSponsors = activeEvent === "bhojpuri" ? bhojpuriSponsors : nepaliSponsors

  // Auto-scroll for artist slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArtist((prev) => (prev + 1) % currentArtists.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [currentArtists.length])

  useEffect(() => {
    setCurrentArtist(0)
  }, [activeEvent])

  const nextArtist = () => {
    setCurrentArtist((prev) => (prev + 1) % currentArtists.length)
  }

  const prevArtist = () => {
    setCurrentArtist((prev) => (prev - 1 + currentArtists.length) % currentArtists.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Our Works
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Events</span> & Festivals
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Experience the grandeur of our cultural celebrations and award ceremonies that bring together the finest
              talents in cinema and music.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveEvent("bhojpuri")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeEvent === "bhojpuri"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Star className="mr-2 h-4 w-4 inline" />
                Bhojpuri Award Festival
              </button>
              <button
                onClick={() => setActiveEvent("nepali")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeEvent === "nepali"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Music className="mr-2 h-4 w-4 inline" />
                Nepali Musical Concert
              </button>
            </div>
          </div>

          <Card className="mb-16 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  {activeEvent === "bhojpuri" ? (
                    <>
                      <Badge className="mb-4 bg-primary text-primary-foreground">Featured Event</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        International Bhojpuri Award & Festival
                      </h2>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-5 w-5 mr-2 text-secondary" />
                          <span>Toronto • Vancouver • Calgary • Ottawa • London</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-5 w-5 mr-2 text-secondary" />
                          <span>Annual Multi-City Tour</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-5 w-5 mr-2 text-secondary" />
                          <span>International Artists & Filmmakers</span>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                        A premier celebration of Bhojpuri cinema, bringing together artists, filmmakers, and fans to
                        honor the best of the industry. This festival travels across major Canadian cities, offering a
                        unique cultural experience that celebrates our rich heritage.
                      </p>
                    </>
                  ) : (
                    <>
                      <Badge className="mb-4 bg-secondary text-secondary-foreground">Cultural Event</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        Nepali Musical Concert
                      </h2>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-5 w-5 mr-2 text-secondary" />
                          <span>Toronto • Vancouver • Calgary • Ottawa • London</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-5 w-5 mr-2 text-secondary" />
                          <span>Seasonal Cultural Celebration</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-5 w-5 mr-2 text-secondary" />
                          <span>Traditional & Contemporary Artists</span>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                        An enchanting musical journey celebrating the rich traditions of Nepali culture through folk
                        songs, classical music, and contemporary performances. Experience the soulful melodies and
                        vibrant rhythms that define Nepal's musical heritage.
                      </p>
                    </>
                  )}
                </div>
                <div className="relative">
                  <img
                    src={
                      activeEvent === "bhojpuri"
                        ? "/international-bhojpuri-award-festival-banner.png"
                        : "/nepali-musical-concert-banner.png"
                    }
                    alt={
                      activeEvent === "bhojpuri" ? "International Bhojpuri Award & Festival" : "Nepali Musical Concert"
                    }
                    className="w-full h-[400px] object-cover rounded-lg border border-border"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hidden sections - Set to true to show again */}
          {false && (
            <>
              {/* Event Gallery */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Event Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentEventImages.map((image) => (
                    <Card
                      key={image.id}
                      className="group cursor-pointer overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      onClick={() => setSelectedImage(image.id)}
                    >
                      <div className="relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button size="sm" variant="secondary">
                            View Full Size
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground text-balance">{image.title}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Guest Artists Slider */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Artists</h3>
                <div className="relative">
                  <Card className="border-border bg-card/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-[400px] flex items-center justify-center">
                        <div className="flex transition-transform duration-500 ease-in-out w-full">
                          {currentArtists.map((artist, index) => (
                            <div
                              key={artist.id}
                              className={`w-full flex-shrink-0 transition-opacity duration-500 ${
                                index === currentArtist ? "opacity-100" : "opacity-0 absolute inset-0"
                              }`}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                <div className="relative">
                                  <img
                                    src={artist.image || "/placeholder.svg"}
                                    alt={artist.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
                                </div>
                                <div className="flex items-center justify-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
                                  <div className="text-center">
                                    <h4 className="text-3xl font-bold text-foreground mb-2">{artist.name}</h4>
                                    <Badge variant="outline" className="mb-4">
                                      {artist.role}
                                    </Badge>
                                    <p className="text-muted-foreground text-pretty">
                                      {activeEvent === "bhojpuri"
                                        ? "Celebrated artist bringing exceptional talent to the International Bhojpuri Award & Festival."
                                        : "Renowned musician showcasing the beautiful traditions of Nepali music and culture."}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Slider Controls */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={prevArtist}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={nextArtist}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Slider Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {currentArtists.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentArtist ? "bg-primary" : "bg-muted"
                        }`}
                        onClick={() => setCurrentArtist(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sponsors Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Our Sponsors</h3>
                <Card className="border-border bg-card/50">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                      {currentSponsors.map((sponsor) => (
                        <div key={sponsor.id} className="flex items-center justify-center">
                          <img
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Us at Our Next Event</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              {activeEvent === "bhojpuri"
                ? "Be part of the celebration that honors the finest in Bhojpuri cinema and brings together artists and fans from around the world."
                : "Experience the enchanting world of Nepali music and immerse yourself in the rich cultural traditions that define our heritage."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Event Updates
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={currentEventImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
              alt={currentEventImages.find((img) => img.id === selectedImage)?.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
