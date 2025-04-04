import Link from "next/link"
import { Footer } from "@/components/footer"
import { PlaygroundCard } from "@/components/playground-card"
import { Paintbrush, Code, Palette, type LucideIcon, Type, Box, Puzzle } from "lucide-react"

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
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes for your next design project.",
    label: "Design Tool",
    icon: Palette,
    href: "/playground/color-palette",
    gradient: "from-blue-500 to-violet-500",
    comingSoon: true
  },
  {
    title: "Interactive Typography",
    description: "Experiment with different typography and see the results in real-time.",
    label: "Typography",
    icon: Type,
    href: "/playground/typography",
    gradient: "from-amber-500 to-orange-500",
    comingSoon: true
  },
  {
    title: "CSS Animation Lab",
    description: "Create and experiment with CSS animations and transitions.",
    label: "Animation",
    icon: Paintbrush,
    href: "/playground/animations",
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    title: "UI Component Showcase",
    description: "Explore a collection of beautifully designed UI components.",
    label: "Components",
    icon: Box,
    href: "/playground/components",
    gradient: "from-rose-500 to-pink-500",
    comingSoon: true
  },
  {
    title: "Interactive SVG Playground",
    description: "Create and manipulate SVG graphics with interactive controls.",
    label: "Graphics",
    icon: Code,
    href: "/playground/svg",
    gradient: "from-indigo-500 to-purple-500",
    comingSoon: true
  },
  {
    title: "Layout Explorer",
    description: "Experiment with different layout techniques and responsive designs.",
    label: "Layouts",
    icon: Puzzle,
    href: "/playground/layouts",
    gradient: "from-teal-500 to-green-500",
    comingSoon: true
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
