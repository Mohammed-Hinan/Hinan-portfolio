import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function PrintCollateralsPage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Print Collateral Design</h1>
          <p className="text-lg text-muted-foreground">
            Creative print materials that make a lasting impression across various formats.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 mb-16">
          {/* Illuminati Poster Series */}
          <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
            <div className="relative h-auto w-full bg-muted flex justify-center">
              <img 
                src="/images/illuminati-poster-series.jpg" 
                alt="Illuminati poster series" 
                className="w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-3">Illuminati Poster Series</h3>
              <p className="text-base text-muted-foreground mb-5">Minimalist poster series featuring the iconic illuminati symbol with detailed line work</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-secondary px-3 py-1 rounded">Poster Design</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Typography</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Illustration</span>
              </div>
            </div>
          </div>

          {/* NEUE Album Cover Series */}
          <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
            <div className="relative h-auto w-full bg-muted flex justify-center">
              <img 
                src="/images/neue-album-covers.jpg" 
                alt="NEUE album cover series" 
                className="w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-3">NEUE Album Cover Series</h3>
              <p className="text-base text-muted-foreground mb-5">Contemporary album cover designs featuring reimagined classical art with bold typography</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-secondary px-3 py-1 rounded">Album Art</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Typography</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Digital Collage</span>
              </div>
            </div>
          </div>

          {/* DREAM ILLUSION Magazine */}
          <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
            <div className="relative h-auto w-full bg-muted flex justify-center">
              <img 
                src="/images/dream-illusion-magazine.jpg" 
                alt="DREAM ILLUSION magazine design" 
                className="w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-3">DREAM ILLUSION Magazine</h3>
              <p className="text-base text-muted-foreground mb-5">Conceptual magazine design exploring surrealism and visual illusions with classical art references</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-secondary px-3 py-1 rounded">Editorial Design</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Magazine Layout</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Mixed Media</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Need print collateral for your business?</p>
          <a 
            href="mailto:mohammedhinanak@gmail.com" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Let's Collaborate
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}