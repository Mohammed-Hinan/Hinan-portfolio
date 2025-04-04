"use client"

import Link from "next/link"
import { Copy } from "lucide-react"
import { useState } from "react"

export function HomeHeader() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammedhinanak@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-3xl">
      <p className="text-lg mb-2">Hello</p>

      <h1 className="text-4xl font-bold mb-4">
        Meet Hinan, a UI/UX designer who thrives on experimenting and trying new things
      </h1>

      <p className="text-md text-muted-foreground mb-6">
        When I&apos;m not designing, you&apos;ll probably find me watching movies, trying to cook something new(not a pro chef), editing videos, listening music.
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-green-500 rounded-full" />
          <p className="text-sm">
            Currently desperately searching for a job
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/about-me"
            className="px-4 py-1.5 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
          >
            About me
          </Link>
          <button
            className="px-4 py-1.5 bg-secondary rounded-full text-sm flex items-center gap-1.5 hover:bg-secondary/80 transition-colors"
            onClick={handleCopyEmail}
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </div>
    </div>
  )
}
