export function FeatureCard({ text }: { text: string }) {
  return (
    <div className="rounded-lg bg-card px-4 py-2 text-sm hover:bg-secondary transition-colors duration-200 cursor-pointer">
      {text}
    </div>
  )
}
