import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, Briefcase, Trophy, Quote } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CompanyPage() {
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
              The <span className="text-primary">Company</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Meet the visionary leadership and learn about the company that's revolutionizing Nepali and Indian
              Bhojpuri cinema.
            </p>
          </div>

          {/* Company Overview */}
          <Card className="mb-16 border-border bg-card/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">The Company</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                Pashupatinath Production, also known as Pashupatinath Film Productions, has consistently pushed
                boundaries across the spectrum, creating and producing entertaining content and engaging audiences
                worldwide through a vast variety of different platforms.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start">
                  <Quote className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <blockquote className="text-lg text-foreground font-medium italic text-pretty">
                    "Our mission is and will always be to deliver world-class, ground-breaking stories through quality,
                    innovation, and detail, that touch lives across the globe."
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Card className="border-border bg-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <User className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Leadership</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Mr. Sonu Khatri</h3>
                      <div className="space-y-2 mb-4">
                        <Badge variant="outline" className="mr-2">
                          Director since 2018
                        </Badge>
                        <Badge variant="outline">Managing Director</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        Mr. Khatri has been the Director of Pashupatinath Production Pvt Ltd. since 2018, and the
                        Managing Director of Sonu Khatri since 2018. In his capacity at the helm, he not only leads the
                        Pashupatinath Production but has also seen immense success in his career.
                      </p>
                    </div>

                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Trophy className="h-5 w-5 text-secondary mr-2" />
                        <h4 className="font-semibold text-foreground">Career Highlights</h4>
                      </div>
                      <p className="text-sm text-muted-foreground text-pretty">
                        Celebrated Nepali actor turned visionary producer-director, leading the company to deliver some
                        of the most iconic works in modern cinema.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/our-story.jpeg"
                alt="Mr. Sonu Khatri - Director, Pashupatinath Film Productions"
                className="w-full h-[500px] object-cover rounded-lg border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">Mr. Sonu Khatri</h3>
                <p className="text-sm opacity-90">Director & Managing Director</p>
              </div>
            </div>
          </div>

          {/* Company Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border bg-card/50 text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">6+ Years</h3>
                <p className="text-muted-foreground">Of Excellence in Film Production</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 text-center">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Multiple</h3>
                <p className="text-muted-foreground">Blockbuster Productions</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Global</h3>
                <p className="text-muted-foreground">Audience Reach</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Experience Our Vision</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Discover how our leadership and commitment to excellence have shaped the landscape of modern cinema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/">View Our Films</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
