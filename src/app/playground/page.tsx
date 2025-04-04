import Link from "next/link"
import { Footer } from "@/components/footer"
import { PlaygroundCard } from "@/components/playground-card"
import { Brain, Sticker } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface PlaygroundItem {
  title: string
  description: string
  label: string
  icon: LucideIcon
  href: string
  gradient: string
  comingSoon?: boolean
}

const playgroundItems: PlaygroundItem[] = [
  {
    title: "Memory Game",
    description: "Test your memory with this fun card matching game featuring beautiful images.",
    label: "Interactive Game",
    icon: Brain,
    href: "/playground/memory-game",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Sticker Generator",
    description: "Create custom stickers with borders, shadows, and text from your images.",
    label: "Design Tool",
    icon: Sticker,
    href: "/playground/sticker-generator",
    gradient: "from-green-500 to-teal-500",
    comingSoon: true  // Added this property to make it "Coming Soon"
  }
]

export default function PlaygroundPage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Playground</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Welcome to my experimental playground! This is where I explore new ideas,
            technologies, and design concepts. Feel free to interact with the projects below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {playgroundItems.map((item) => (
            <PlaygroundCard
              key={item.title}
              title={item.title}
              description={item.description}
              label={item.label}
              icon={<item.icon className="h-5 w-5" />}
              href={item.href}
              gradient={item.gradient}
              comingSoon={item.comingSoon}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="text-primary hover:underline flex items-center gap-1"
          >
            ← Back to main portfolio
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
