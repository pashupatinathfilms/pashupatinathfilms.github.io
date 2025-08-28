import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Star, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const moviePosters = [
  {
    id: 1,
    title: "Nirahua Chalal London",
    year: "2019",
    genre: "Drama",
    rating: "8.2",
    language: "Bhojpuri",
    image: "/nirhua_chalal_london.jpg",
    synopsis: "A heartwarming comedy-drama about a man's journey to London and the adventures that follow.",
    link: "https://www.youtube.com/watch?v=7yKkyLMR-RA",
    linkType: "movie",
  },
  {
    id: 2,
    title: "Prem Geet",
    year: "2016",
    genre: "Romance, Drama",
    rating: "8.5",
    language: "Bhojpuri",
    image: "/prem_geet.jpg",
    synopsis: "A beautiful love story that transcends boundaries and touches hearts across cultures.",
    link: "https://youtu.be/BzjjLO0w7wo",
    linkType: "movie",
  },
  {
    id: 3,
    title: "Prem Geet 2",
    year: "2017",
    genre: "Romance, Drama",
    rating: "8.7",
    language: "Bhojpuri",
    image: "/prem_geet2.jpg",
    synopsis: "The continuation of the beloved love story with even more emotional depth and stunning visuals.",
    link: "https://youtu.be/Js6ppTJ7C6c",
    linkType: "movie",
  },
  {
    id: 4,
    title: "Jay Shambhu",
    year: "2018",
    genre: "Action, Drama",
    rating: "8.0",
    language: "Bhojpuri",
    image: "/jay_sambhu.jpeg",
    synopsis: "An action-packed drama that showcases the triumph of good over evil with spectacular sequences.",
    link: "https://youtu.be/wMrOIQpi-Y4",
    linkType: "movie",
  },
  {
    id: 5,
    title: "One Man Army",
    year: "2020",
    genre: "Action, Thriller",
    rating: "7.8",
    language: "Bhojpuri",
    image: "/one_man_army.jpg",
    synopsis: "A gripping thriller about one man's fight against corruption and injustice.",
    link: "https://youtu.be/eTrjeKxMPfU",
    linkType: "trailer",
  },
  {
    id: 6,
    title: "Tripitak",
    year: "2021",
    genre: "Drama, Spiritual",
    rating: "8.3",
    language: "Nepali",
    image: "/tripitak-spiritual-drama-movie-poster.png",
    synopsis: "A profound spiritual journey that explores the depths of human consciousness and enlightenment.",
    link: "https://youtu.be/jLl562HMXRg",
    linkType: "trailer",
  },
  {
    id: 7,
    title: "Ahimsa",
    year: "2022",
    genre: "Drama, Philosophy",
    rating: "8.6",
    language: "Nepali",
    image: "/ahimsa-philosophical-drama-movie-poster.png",
    synopsis: "A thought-provoking film about non-violence and its power to transform society.",
  },
  {
    id: 8,
    title: "Police Story",
    year: "2026",
    genre: "Action, Crime",
    rating: "0.0",
    language: "Bhojpuri",
    image: "/police_story.jpeg",
    synopsis: "An intense action-crime drama that follows the challenges faced by a dedicated police officer.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Crafting Stories That
            <span className="text-primary block">Resonate Globally</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Established in 2018, Pashupatinath Film Productions delivers iconic works in modern Nepali and Indian
            Bhojpuri cinema, balancing popular appeal with critical acclaim.
          </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://youtu.be/eTrjeKxMPfU" target="_blank" rel="noopener noreferrer">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Latest
            </a>
            </Button>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of critically acclaimed and commercially successful films that have captivated
              audiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {moviePosters.map((movie) => (
              <Card
                key={movie.id}
                className="group cursor-pointer overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {movie.link ? (
                      <Button size="sm" variant="secondary" asChild>
                        <a href={movie.link} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2 h-4 w-4" />
                          {movie.linkType === "trailer" ? "Watch Trailer" : "Watch Movie"}
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="secondary" disabled>
                        <Play className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                  {movie.link && (
                    <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-primary fill-current" />
                      <span className="text-xs text-foreground font-medium">{movie.rating}</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground text-balance flex-1">{movie.title}</h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Badge variant="secondary" className="text-xs">
                        {movie.language}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {movie.year}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {movie.genre.split(",")[0]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty line-clamp-2">{movie.synopsis}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
