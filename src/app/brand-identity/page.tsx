import { Footer } from "@/components/footer"

export default function BrandIdentityPage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Brand Identity Design</h1>
          <p className="text-lg text-muted-foreground">
            Strategic brand identity systems that communicate values and connect with audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 mb-16">
          {/* Snooze Brand Project */}
          <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
            <div className="relative h-auto w-full bg-muted flex justify-center">
              <img 
                src="/images/snooze-brand.jpg" 
                alt="Snooze brand identity" 
                className="w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-3">Snooze</h3>
              <p className="text-base text-muted-foreground mb-5">Brand identity for a premium mattress company focused on quality sleep and comfort</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-secondary px-3 py-1 rounded">Logo Design</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Brand Guidelines</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Visual Identity</span>
              </div>
            </div>
          </div>

          {/* Authentic Arc Brand Project */}
          <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
            <div className="relative h-auto w-full bg-muted flex justify-center">
              <img 
                src="/images/authentic-arc-brand.jpg" 
                alt="Authentic Arc brand identity" 
                className="w-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-3">Authentic Arc</h3>
              <p className="text-base text-muted-foreground mb-5">Brand identity for a contemporary apparel store with a focus on authenticity and quality</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-secondary px-3 py-1 rounded">Logo Design</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Brand Guidelines</span>
                <span className="text-sm bg-secondary px-3 py-1 rounded">Visual Identity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Need a brand identity for your business?</p>
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