import { Footer } from "@/components/footer"

export default function PosterDesignPage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Poster Design</h1>
          <p className="text-lg text-muted-foreground">
            Eye-catching poster designs for events, promotions, and campaigns that demand attention.
          </p>
        </div>

        {/* Pachaak Poster Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Pachaak Cultural Experience</h2>
          <p className="text-muted-foreground mb-8">
            A series of promotional posters for Pachaak, an immersive cultural experience celebrating Indian culinary traditions and storytelling.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pachaak Poster 1 */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/pachaak-punjab-poster.jpg" 
                  alt="Pachaak Punjab's taste poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Punjab's Culinary Secrets</h3>
                <p className="text-sm text-muted-foreground mb-3">Atmospheric promotional poster highlighting Punjab's rich culinary heritage</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Cultural</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Food</span>
                </div>
              </div>
            </div>

            {/* Pachaak Poster 2 */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/pachaak-surti-poster.jpg" 
                  alt="Pachaak Surti culinary mystery poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Surat's Culinary Mystery</h3>
                <p className="text-sm text-muted-foreground mb-3">Moody promotional poster exploring the fusion of gram flour and Surati spices</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Culinary</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Storytelling</span>
                </div>
              </div>
            </div>

            {/* Pachaak Poster 3 */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/pachaak-malabar-poster.jpg" 
                  alt="Pachaak Malabar traditions poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Malabar Family Traditions</h3>
                <p className="text-sm text-muted-foreground mb-3">Evocative poster featuring traditional banana leaf packaging and spice market connections</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Tradition</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Heritage</span>
                </div>
              </div>
            </div>

            {/* Pachaak Poster 4 */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/pachaak-veera-poster.jpg" 
                  alt="Pachaak Veera character poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Meet Explorer Veera</h3>
                <p className="text-sm text-muted-foreground mb-3">Character poster introducing Veera, one of the cultural explorers in the Pachaak experience</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Character</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Storytelling</span>
                </div>
              </div>
            </div>

            {/* Pachaak Poster 5 */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/pachaak-dawud-poster.jpg" 
                  alt="Pachaak Dawud Bhai character poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Meet Explorer Dawud Bhai</h3>
                <p className="text-sm text-muted-foreground mb-3">Character poster introducing Dawud Bhai, a Sufi explorer in the Pachaak narrative</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Character</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Cultural</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IEEE Event Posters Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">IEEE Event Posters</h2>
          <p className="text-muted-foreground mb-8">
            A collection of promotional materials designed for IEEE student branch events and activities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MEC Day Poster */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/mec-day-poster.jpg" 
                  alt="MEC Day celebration poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">MEC Day Celebration</h3>
                <p className="text-sm text-muted-foreground mb-3">Vibrant event poster for Model Engineering College's annual celebration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Event</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Typography</span>
                </div>
              </div>
            </div>

            {/* IEEE Team Call Poster */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/ieee-team-call-poster.jpg" 
                  alt="IEEE MEC team recruitment poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">IEEE Recruitment Campaign</h3>
                <p className="text-sm text-muted-foreground mb-3">Modern recruitment poster with clean interface design</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Recruitment</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">UI Design</span>
                </div>
              </div>
            </div>

            {/* Excel Workshop Poster */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/excel-workshop-poster.jpg" 
                  alt="MS Excel workshop poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">MS Excel Workshop</h3>
                <p className="text-sm text-muted-foreground mb-3">Educational event poster with isometric illustration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Workshop</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Technical</span>
                </div>
              </div>
            </div>

            {/* BrainBots Quiz Challenge */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/brainbots-quiz-poster.jpg" 
                  alt="BrainBots Robotics Quiz Challenge poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">BrainBots Quiz Challenge</h3>
                <p className="text-sm text-muted-foreground mb-3">Futuristic event poster with tech-inspired illustration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Competition</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Tech Design</span>
                </div>
              </div>
            </div>

            {/* MH Day Poster */}
            <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
              <div className="relative h-auto w-full bg-muted flex justify-center">
                <img 
                  src="/images/mh-day-poster.jpg" 
                  alt="MH Day celebration poster" 
                  className="w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">MH Day Celebration</h3>
                <p className="text-sm text-muted-foreground mb-3">Playful event poster with comic-style elements</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Event</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Need a poster designed for your next event?</p>
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