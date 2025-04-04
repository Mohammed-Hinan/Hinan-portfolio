"use client"

import { Music } from "lucide-react"

export function ListeningSection() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold mb-6">What I am Listening recently</h2>

      <div className="bg-card rounded-lg border border-border p-6 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Music className="h-10 w-10 text-muted-foreground" />
          <p className="text-muted-foreground text-sm">Not playing anything right now</p>
        </div>
      </div>
    </section>
  )
}
