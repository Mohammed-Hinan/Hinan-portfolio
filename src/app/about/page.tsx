// Add existing imports
import { ListeningSection } from "@/components/listening-section"

export default function About() {
  return (
    <main className="pt-6 px-8 pb-12 ml-16">
      {/* Existing about page content */}
      
      {/* Listening Section */}
      <ListeningSection />
      
      {/* Rest of the about page content */}
      {/* Replace the "When I am not designing..." paragraph with the Malayalam text */}
      <p className="text-muted-foreground mb-6">
        ഒരു ഫയൽ ചിത്രം
      </p>
    </main>
  )
}