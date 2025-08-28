import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Pashupatinath Films Production</h3>
            <p className="text-muted-foreground text-pretty">
              A fully integrated studio renowned for delivering iconic works in modern Nepali and Indian Bhojpuri cinema
              since 2018.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/company" className="block text-muted-foreground hover:text-primary transition-colors">
                The Company
              </Link>
              <Link href="/events" className="block text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground">
              For business inquiries and collaborations, reach out to our production team.
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2018 - 2025 Pashupatinath Film Productions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
