'use client';
import Image from "next/image";
import { CaseStudyNav } from "@/components/case-study-nav";
import QuantitativePieCharts from "@/components/QuantitativePieCharts";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import FlowingMenu from "@/components/FlowingMenu";
import { FloatingNav } from "@/components/FloatingNav";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import { FollowerPointerCard } from "@/components/FollowerPointerCard";

export default function AnnamPage() {
  const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <main className="pt-16 px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
      <FloatingNav
        navItems={[
          { name: "The Challenge", link: "#challenge" },
          { name: "Research", link: "#research" },
          { name: "Developing", link: "#developing" },
          { name: "Wireframes", link: "#wireframes" },
          { name: "Design", link: "#design-system" },
          { name: "High-Fi", link: "#high-fidelity" },
          { name: "Reflection", link: "#reflection" },
        ]}
      />
      <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
        {/* Hero Section */}
        <div className="mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">Annam: Bridging Food Surplus to Need</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8">
            Designing a platform to connect surplus food donors with NGOs and volunteers to reduce food waste and hunger.
          </p>
          <div className="relative w-full mb-8 sm:mb-12">
            <Carousel
              plugins={[autoplay.current]}
              className="w-full max-w-3xl mx-auto"
            >
              <CarouselContent>
                {/* Slide 1 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-green-700 flex items-center justify-center text-2xl">🔑</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">Multi‑Role Sign‑In</div>
                        <div className="text-base text-neutral-300 text-center">Log in as a Donor, NGO, or Volunteer—each role sees a custom dashboard.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 2 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-yellow-700 flex items-center justify-center text-2xl">📸</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">Donor Posts Surplus</div>
                        <div className="text-base text-neutral-300 text-center">Quickly register your surplus food with a snap and a few taps.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 3 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-blue-700 flex items-center justify-center text-2xl">🔔</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">NGO Notification & Response</div>
                        <div className="text-base text-neutral-300 text-center">Get instant alerts when food is available—accept or decline in one tap.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 4 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-purple-700 flex items-center justify-center text-2xl">🚚</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">Requesting Transport & Volunteer Support</div>
                        <div className="text-base text-neutral-300 text-center">Request our vetted driver or tap nearby volunteers to assist with pick‑up.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 5 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-cyan-700 flex items-center justify-center text-2xl">🗺️</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">Driver Assignment & Routing</div>
                        <div className="text-base text-neutral-300 text-center">Drivers see pick‑up & drop‑off details and navigate straight to the donor.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 6 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-pink-700 flex items-center justify-center text-2xl">🧪</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">On‑Site Safety Check</div>
                        <div className="text-base text-neutral-300 text-center">Scan your sample with our easy‑carry tester to ensure safety before transit.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 7 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-lime-700 flex items-center justify-center text-2xl">🚐</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">Van Design & Layout</div>
                        <div className="text-base text-neutral-300 text-center">Our custom vans feature refrigerated storage and secure food compartments—keeping donations fresh and safe en route.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* Slide 8 */}
                <CarouselItem>
                  <div className="p-2">
                    <Card className="bg-neutral-900/80 border-none shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center min-h-[220px] p-8">
                        <div className="w-12 h-12 mb-4 rounded-full bg-orange-700 flex items-center justify-center text-2xl">✅</div>
                        <div className="text-xl font-bold mb-2 text-white text-center">Delivery Confirmation & Tracking</div>
                        <div className="text-base text-neutral-300 text-center">Drop off safely, snap a proof‑of‑delivery photo, and close the loop.</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Project Overview */}
        <div className="flex justify-center items-center w-full mb-16 sm:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3 uppercase tracking-wider">TIMELINE</h3>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">Apr 2025 ~ Jun 2025</p>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3 uppercase tracking-wider">DISCIPLINES</h3>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">UX Design<br />UI Design<br />Service Design</p>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3 uppercase tracking-wider">RESPONSIBILITIES</h3>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">Research<br />Wireframing<br />Prototyping<br />UI Design<br />User Testing</p>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3 uppercase tracking-wider">TOOLS</h3>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">Figma<br />Miro<br />Adobe Illustrator</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16 sm:mb-24">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Every day, large amounts of edible food are wasted while many go hungry. Many restaurants, caterers, and individuals are willing to donate excess food but lack a direct channel. NGOs struggle to access surplus food in real time, leading to unnecessary waste and missed support opportunities. Annam bridges this gap by providing a platform for donors to list surplus food, NGOs to verify and schedule pickups, and volunteers/drivers to ensure safe delivery to those in need.
          </p>
        </div>

        {/* The Challenge Section */}
        <div id="challenge" className="mb-16 sm:mb-24 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">The Challenge</h2>
          <div className="border-t border-border my-4 sm:my-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 mb-8">
            <div className="bg-green-900/10 rounded-lg p-4 sm:p-8 border border-green-900/20">
              <h3 className="font-medium mb-2 sm:mb-4 text-lg sm:text-xl">NGO Challenges</h3>
              <ul className="list-disc ml-6 text-base sm:text-lg">
                <li>Difficulty in locating consistent food sources</li>
                <li>Lack/inconsistent communication channels with donors</li>
                <li>Lack of active volunteers for coordination & delivery</li>
                <li>Manual food testing is time-consuming & inconsistent</li>
              </ul>
            </div>
            <div className="bg-green-900/10 rounded-lg p-4 sm:p-8 border border-green-900/20">
              <h3 className="font-medium mb-2 sm:mb-4 text-lg sm:text-xl">Why Donors Hold Back</h3>
              <ul className="list-disc ml-6 text-base sm:text-lg">
                <li>Unaware of donation service</li>
                <li>Busy schedules & added effort</li>
                <li>Fear of liability and food-related complaints</li>
                <li>Lack of a fast and reliable pickup system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Under Construction Notice - Minimal and Clean */}
      <div className="mt-24 flex justify-center">
        <div className="flex flex-col items-center justify-center bg-neutral-900 rounded-xl px-8 py-10 shadow-lg w-full max-w-xl">
          <span className="text-4xl mb-4">🚧</span>
          <span className="text-2xl sm:text-3xl font-bold text-white mb-2">Under Construction</span>
          <span className="text-base text-neutral-300">This section is being updated. Check back soon!</span>
        </div>
      </div>
      <div style={{ height: '400px', position: 'relative', marginTop: '4rem' }}>
        <FlowingMenu items={[
          { link: '/doctorsapp', text: "Doctor's App", image: '/images/doctors-booking-app.jpg' },
          { link: '/loomy', text: 'LooMY', image: '/images/loomy-app.jpg' },
        ]} />
      </div>
    </main>
  );
} 