import Image from "next/image"

interface ToolProps {
  name: string
  description: string
  icon: string
}

const tools: ToolProps[] = [
  {
    name: "Figma",
    description: "Design tool",
    icon: "https://ext.same-assets.com/1288700763/1984544590.png"
  },
  {
    name: "Framer",
    description: "Website Tool",
    icon: "https://framerusercontent.com/images/2IMY5w2ag8B91dALf9uxwTE4A.gif"
  },
  {
    name: "Miro",
    description: "Design tool",
    icon: "https://ext.same-assets.com/1288700763/1984544590.png"
  },
  {
    name: "Adobe CC",
    description: "Design tool",
    icon: "https://ext.same-assets.com/1288700763/1984544590.png"
  }
]

export function AccessibilityStack() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold mb-6">Accessibility Stack</h2>
      <p className="text-sm text-muted-foreground mb-6">Softwares I use in my day to day life</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <div key={tool.name} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
            <div className="relative h-6 w-6 flex-shrink-0">
              <Image
                src={tool.icon}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
