"use client";

import { HomeHeader } from "@/components/home-header"
import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"
import { ParallaxBackground } from "@/components/parallax-background"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FollowerPointerCard } from "@/components/FollowerPointerCard"

export default function Home() {
  const casestudiesRef = useRef(null);
  const graphicDesignRef = useRef(null);
  const casestudyCardsRef = useRef<HTMLDivElement[]>([]);
  const graphicCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the section headings
    gsap.fromTo(
      casestudiesRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: casestudiesRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    gsap.fromTo(
      graphicDesignRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: graphicDesignRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    // Animate case study cards
    casestudyCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
          }
        }
      );
    });
    
    // Animate graphic design cards
    graphicCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
          }
        }
      );
    });
    
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add cards to refs
  const addToCardRef = (el: HTMLDivElement | null, ref: React.MutableRefObject<HTMLDivElement[]>) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <main className="pt-6 px-4 md:px-8 pb-12">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Hero Section */}
      <HomeHeader />

      {/* Casestudies Section */}
      <section className="mt-24 mb-20">
        <div className="flex items-center justify-between mb-10" ref={casestudiesRef}>
          <h2 className="text-2xl font-semibold">Casestudies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Doctor's Appointment Booking App Card */}
          <FollowerPointerCard title="View full case study">
            <div 
              className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              ref={(el) => addToCardRef(el, casestudyCardsRef)}
            >
              <div className="relative h-64 w-full bg-white flex items-center justify-center p-4">
                <img 
                  src="/images/doctors-booking-app.jpg" 
                  alt="Doctor's Appointment Booking App" 
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">View case study</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Doctor's Appointment Booking App</h3>
                <p className="text-sm text-muted-foreground">Designed an app for seamlessly booking appointments with doctors</p>
                <Link href="/doctorsapp" className="absolute inset-0" aria-label="View Doctor's Appointment Booking App case study"></Link>
              </div>
            </div>
          </FollowerPointerCard>

          {/* LooMY App Card */}
          <FollowerPointerCard title="View full case study">
            <div 
              className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              ref={(el) => addToCardRef(el, casestudyCardsRef)}
            >
              <div className="relative h-64 w-full bg-[#FFEB3B] flex items-center justify-center p-4">
                <img 
                  src="/images/loomy-app.jpg" 
                  alt="LooMY anonymous chatting app" 
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">View case study</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">LooMY</h3>
                <p className="text-sm text-muted-foreground">An anonymous chatting app</p>
                <Link href="/loomy" className="absolute inset-0" aria-label="View LooMY case study"></Link>
              </div>
            </div>
          </FollowerPointerCard>

          {/* Annam Case Study Card */}
          <FollowerPointerCard title="View full case study">
            <div 
              className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              ref={(el) => addToCardRef(el, casestudyCardsRef)}
            >
              <div className="relative h-64 w-full bg-green-100 flex items-center justify-center p-4">
                <img 
                  src="/images/food-rescue-hero.jpg" 
                  alt="Annam food rescue platform" 
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">View case study</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Annam</h3>
                <p className="text-sm text-muted-foreground">A platform connecting surplus food donors, NGOs, and volunteers to reduce food waste and hunger</p>
                <Link href="/aahar" className="absolute inset-0" aria-label="View Annam case study"></Link>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="mt-24 mb-20">
        <div className="flex items-center justify-between mb-10" ref={graphicDesignRef}>
          <h2 className="text-2xl font-semibold">Graphic & Print Design</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Brand Identity Card with combined images */}
          <FollowerPointerCard title="View more">
            <div 
              className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              ref={(el) => addToCardRef(el, graphicCardsRef)}
            >
              <div className="relative h-64 w-full bg-muted">
                <div className="absolute inset-0 grid grid-cols-2 gap-0">
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src="/images/authentic-arc-brand.jpg" 
                      alt="Authentic Arc brand identity" 
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src="/images/snooze-brand.jpg" 
                      alt="Snooze brand identity" 
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">View brand identity projects</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Brand Identity Design</h3>
                <p className="text-sm text-muted-foreground">Strategic brand identity systems that communicate values and connect with audiences</p>
                <Link href="/brand-identity" className="absolute inset-0" aria-label="View Brand Identity Design"></Link>
              </div>
            </div>
          </FollowerPointerCard>

          {/* Print Collateral Card */}
          <FollowerPointerCard title="View more">
            <div 
              className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              ref={(el) => addToCardRef(el, graphicCardsRef)}
            >
              <div className="relative h-64 w-full bg-muted">
                <div className="absolute inset-0 grid grid-cols-2 gap-0">
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src="/images/neue-album-covers.jpg" 
                      alt="NEUE Magazine Design" 
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src="/images/dream-illusion-magazine.jpg" 
                      alt="Dream Illusion Magazine Design" 
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">View print collateral projects</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Print Collateral</h3>
                <p className="text-sm text-muted-foreground">Magazines, brochures, and other print materials</p>
                <Link href="/print-collaterals" className="absolute inset-0" aria-label="View Print Collateral"></Link>
              </div>
            </div>
          </FollowerPointerCard>
          
          {/* Custom Poster Design Card */}
          <FollowerPointerCard title="View more">
            <div 
              className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              ref={(el) => addToCardRef(el, graphicCardsRef)}
            >
              <div className="relative h-64 w-full bg-muted">
                <div className="absolute inset-0 grid grid-cols-2 gap-0">
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src="/images/excel-workshop-poster.jpg" 
                      alt="MS Excel Workshop poster" 
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src="/images/mec-day-poster.jpg" 
                      alt="MEC Day poster" 
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">View poster design projects</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Poster Design</h3>
                <p className="text-sm text-muted-foreground">Event posters and promotional materials</p>
                <Link href="/poster-design" className="absolute inset-0" aria-label="View Poster Design"></Link>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
