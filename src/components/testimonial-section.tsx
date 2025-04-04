import Image from "next/image"

interface TestimonialProps {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "Alseena Reem",
    role: "UX Manager at Northeastern",
    quote: "Panth Shah has consistently shown exceptional talent, creativity, and dedication in enhancing the Student Hub platform at Northeastern. His strong analytical and creative skills and ability to work independently and collaboratively make him a valuable asset to any team.",
    avatar: "https://ext.same-assets.com/1288700763/2784652659.png"
  },
  {
    name: "Jae Yoon Choi",
    role: "Product Designer at T-Mobile",
    quote: "Panth's proficiency in CS gives him a solid foundation, and his drive to integrate this knowledge with UX design exemplifies his unique approach to problem-solving. While still in the early stages of his design journey, Panth's passion and dedication to the craft are admirable.",
    avatar: "https://ext.same-assets.com/1288700763/653221422.png"
  }
]

export function TestimonialSection() {
  return (
    <section className="mb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-1">Testimonials</h2>
        <p className="text-sm text-muted-foreground">Let&apos;s See What Wonderful People Think About Me</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
