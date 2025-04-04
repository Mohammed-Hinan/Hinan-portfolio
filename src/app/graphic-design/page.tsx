import Link from "next/link"
import { Footer } from "@/components/footer"

export default function GraphicDesignPage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Graphic Design</h1>
          <p className="text-lg text-muted-foreground">
            Explore my graphic design work across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/brand-identity" className="block">
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-72 w-full bg-muted">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/eid-mubarak.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">Brand identity designs for various clients</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Brand Identity</h3>
                <p className="text-sm text-muted-foreground">Logo design, color systems, and brand guidelines</p>
              </div>
            </div>
          </Link>

          <Link href="/print-collaterals" className="block">
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-72 w-full bg-muted">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/eid-mubarak.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">Print materials for marketing and communication</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Print Collaterals</h3>
                <p className="text-sm text-muted-foreground">Brochures, business cards, and marketing materials</p>
              </div>
            </div>
          </Link>

          <Link href="/poster-design" className="block">
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-72 w-full bg-muted">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/eid-mubarak.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">Poster designs for events and promotions</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Poster Design</h3>
                <p className="text-sm text-muted-foreground">Event posters and promotional materials</p>
              </div>
            </div>
          </Link>

          <Link href="/graphic-design/illustrations" className="block">
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-72 w-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Illustration Work</h3>
                <p className="text-sm text-muted-foreground">Custom illustrations for various projects</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}