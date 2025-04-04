import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image: string
  tag: string
  external?: boolean
}

export function ProjectCard({ title, description, link, image, tag, external = false }: ProjectCardProps) {
  const Tag = () => (
    <div className={`px-2 py-0.5 text-xs rounded-md ${
      tag === "New"
        ? "bg-blue-500/20 text-blue-400"
        : tag === "Shipped"
          ? "bg-green-500/20 text-green-400"
          : "bg-purple-500/20 text-purple-400"
    }`}>
      {tag}
    </div>
  )

  const content = (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-md">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Tag />
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  )

  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return (
    <Link href={link}>
      {content}
    </Link>
  )
}
