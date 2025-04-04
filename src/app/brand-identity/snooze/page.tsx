import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function SnoozeBrandPage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <section className="max-w-6xl mx-auto">
        <Link 
          href="/brand-identity" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Brand Identity
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Snooze</h1>
          <p className="text-lg text-muted-foreground">
            Brand identity for a premium mattress company focused on quality sleep
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="relative h-[400px] w-full bg-muted rounded-lg overflow-hidden mb-8">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/12284962/file/original-a1c9e3c1c0e1a0c0c7a9e3c1c0e1a0c0.png?resize=1600x1200')" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Client</h3>
              <p className="text-muted-foreground">Snooze Mattress Company</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Timeline</h3>
              <p className="text-muted-foreground">3 weeks</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Deliverables</h3>
              <p className="text-muted-foreground">Logo, Color Palette, Typography, Brand Guidelines</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-4">
              Snooze needed a brand identity that would position them as a premium mattress company in a competitive market. The goal was to create a visual identity that communicated comfort, quality, and the importance of good sleep, while feeling modern and approachable.
            </p>
            <p className="text-muted-foreground">
              The resulting identity system includes a distinctive wordmark that incorporates subtle sleep imagery, a calming color palette, and typography that balances premium quality with approachability.
            </p>
          </div>
        </div>

        {/* Logo Design */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Logo Design</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Concept Development</h3>
              <p className="text-muted-foreground">
                The logo concept for Snooze incorporates subtle sleep imagery into a clean, modern wordmark. The double 'O' in the name provided an opportunity to create a visual metaphor for comfort and rest, resembling pillows or closed eyes.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Versatility</h3>
              <p className="text-muted-foreground">
                The logo was designed to work across various applications, from product packaging and store signage to digital platforms and marketing materials, ensuring consistent brand recognition.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] w-full bg-muted rounded-lg overflow-hidden mb-8">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/12284962/file/original-a1c9e3c1c0e1a0c0c7a9e3c1c0e1a0c0.png?resize=1600x1200')" }}
            ></div>
          </div>
        </div>

        {/* Brand System */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Brand System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Color Palette</h3>
              <p className="text-muted-foreground">
                A calming color palette of deep blues and soft neutrals was developed to evoke feelings of tranquility and rest, with accent colors that add warmth and approachability to the brand.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Typography</h3>
              <p className="text-muted-foreground">
                The typography system balances premium quality with approachability, using a clean sans-serif for headlines and a readable serif for body text to create a sophisticated yet welcoming feel.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative h-64 w-full bg-muted rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/12284962/file/original-a1c9e3c1c0e1a0c0c7a9e3c1c0e1a0c0.png?resize=1600x1200')" }}
              ></div>
            </div>
            <div className="relative h-64 w-full bg-muted rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/12284962/file/original-a1c9e3c1c0e1a0c0c7a9e3c1c0e1a0c0.png?resize=1600x1200')" }}
              ></div>
            </div>
            <div className="relative h-64 w-full bg-muted rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://cdn.dribbble.com/userupload/12284962/file/original-a1c9e3c1c0e1a0c0c7a9e3c1c0e1a0c0.png?resize=1600x1200')" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">View another project</p>
          <Link 
            href="/brand-identity/authentic-arc" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Authentic Arc Brand Identity
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}