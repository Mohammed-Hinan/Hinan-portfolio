"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { FloatingNav } from "@/components/FloatingNav"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FlowingMenu from "@/components/FlowingMenu"
import { BarChart, Bar, CartesianGrid, LabelList, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function DoctorsAppPage() {
  // Refs for animations
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const introRef = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize GSAP animations
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power3.out"
      }
    );
    
    // Project overview animation with stagger
    gsap.fromTo(
      overviewRef.current?.children || [],
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
      }
    );
    
    // Introduction paragraph animation
    gsap.fromTo(
      introRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      }
    );
    
    // Animate each section on scroll
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Animate children of each section
      const sectionTitle = section.querySelector('h2');
      const sectionDivider = section.querySelector('.border-t');
      const sectionContent = section.querySelector('p');
      const sectionItems = section.querySelectorAll('.grid > div');
      
      if (sectionTitle && sectionDivider && sectionContent) {
        gsap.fromTo(
          [sectionTitle, sectionDivider, sectionContent],
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
      
      if (sectionItems.length) {
        gsap.fromTo(
          sectionItems,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionItems[0],
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
    
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Function to add sections to refs array
  const addToSectionRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Clinic Features data
  const clinicFeatures = [
    { feature: "Real‑time availability tracking", value: 85 },
    { feature: "Filtering by doctor, time, day, and department", value: 90 },
    { feature: "In‑app payment options", value: 75 },
    { feature: "Appointment reminders and notifications", value: 95 },
    { feature: "Doctor ratings and reviews", value: 55 },
    { feature: "Favorite doctors list", value: 35 },
    { feature: "Know the current token in consultation", value: 5 },
  ];
  // Booking Challenges data
  const bookingChallenges = [
    { challenge: "Long wait times", value: 95 },
    { challenge: "Difficulty reaching the clinic", value: 60 },
    { challenge: "Lack of appointment slots", value: 80 },
    { challenge: "Other", value: 5 },
  ];

  return (
    <main className="pt-24 px-8 pb-24">
      <FloatingNav
        navItems={[
          { name: "The Challenge", link: "#challenge" },
          { name: "Research", link: "#research" },
          { name: "Developing", link: "#developing" },
          { name: "Mid-Fidelity", link: "#mid-fidelity" },
          { name: "Design", link: "#design-system" },
          { name: "High-Fi", link: "#high-fidelity" },
          { name: "Final", link: "#final-solution" },
          { name: "Reflection", link: "#reflection" },
        ]}
      />
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24" ref={heroRef}>
          {/* Removing the Back to home CTA */}
          <h1 className="text-5xl font-bold mb-8">Doctor's United: Redefining Appointment Booking</h1>
          <p className="text-2xl text-muted-foreground mb-8">
            From long waits to seamless scheduling – discover how we revolutionized a clinic's experience.
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-24" ref={overviewRef}>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Timeline</h3>
            <p className="text-lg">May 2023 ~ July 2023</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Disciplines</h3>
            <p className="text-lg">User Experience Design<br /> User Interface Design</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Responsibilities</h3>
            <p className="text-lg">UX Research<br />Wireframing<br />Designing<br />Prototyping</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Tools</h3>
            <p className="text-lg">Figma<br />Adobe Illustrator<br />Protopie<br />React Native</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Team</h3>
            <p className="text-lg">Mohammed Hinan A K<br />Ashal P S</p>
          </div>
        </div>
       
        {/* Introduction */}
        <div className="mb-24" ref={introRef}>
          <p className="text-xl leading-relaxed mb-8">
            Imagine a world where booking a doctor's appointment isn't a struggle against endless phone calls and frustrating wait times. With Doctor's United, we turned that vision into reality. This case study explores the journey of transforming a traditional booking system into a user-friendly, engaging digital experience.
          </p>
        </div>

        {/* The Challenge Section */}
        <div id="challenge" className="mb-24 scroll-mt-24" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Booking a doctor's appointment should be as simple as scheduling a coffee meet-up. However, patients were stuck with outdated methods—endless waiting, busy phone lines, and a clunky interface. This inefficiency not only delayed care but also added stress to an already overwhelming situation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/10 rounded-lg p-8 border border-green-900/20">
              <h3 className="font-medium mb-4 text-xl">Inefficient Phone Booking</h3>
              <p className="text-lg">Patients struggled with long wait times and busy lines.</p>
            </div>
            
            <div className="bg-green-900/10 rounded-lg p-8 border border-green-900/20">
              <h3 className="font-medium mb-4 text-xl">Fragmented Process</h3>
              <p className="text-lg">Multiple steps, unclear communication, and inconsistent appointment confirmation left users frustrated.</p>
            </div>
            
            <div className="bg-green-900/10 rounded-lg p-8 border border-green-900/20">
              <h3 className="font-medium mb-4 text-xl">Lack of Transparency</h3>
              <p className="text-lg">Uncertainty about doctor availability and appointment timings meant many missed out on timely care.</p>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div id="research" className="mb-24 scroll-mt-24" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">Research</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            We started by listening. Through quantitative surveys and empathy mapping, we discovered that users were overwhelmed by traditional booking methods. Real quotes like "I don't want to waste time waiting on hold" and "I need a quick, efficient solution" became the backbone of our research.
          </p>
          
          <div className="space-y-12 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Most Important Features</CardTitle>
                <CardDescription>What users value most in a clinic app</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ width: "100%", height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={clinicFeatures}
                      layout="vertical"
                      margin={{ right: 16 }}
                    >
                      <CartesianGrid horizontal={false} />
                      <YAxis
                        dataKey="feature"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        hide
                      />
                      <XAxis dataKey="value" type="number" hide />
                      <Bar dataKey="value" fill="#3b82f6" radius={4}>
                        <LabelList
                          dataKey="feature"
                          position="insideLeft"
                          offset={8}
                          style={{ fill: "#fff", fontSize: 14, fontWeight: 500 }}
                        />
                        <LabelList
                          dataKey="value"
                          position="right"
                          offset={8}
                          style={{ fill: "#222", fontSize: 14, fontWeight: 600 }}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="text-muted-foreground leading-none">
                  Survey of 100+ users, 2024
                </div>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Top Booking Challenges</CardTitle>
                <CardDescription>What users struggle with most</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ width: "100%", height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={bookingChallenges}
                      layout="vertical"
                      margin={{ right: 16 }}
                    >
                      <CartesianGrid horizontal={false} />
                      <YAxis
                        dataKey="challenge"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        hide
                      />
                      <XAxis dataKey="value" type="number" hide />
                      <Bar dataKey="value" fill="#22c55e" radius={4}>
                        <LabelList
                          dataKey="challenge"
                          position="insideLeft"
                          offset={8}
                          style={{ fill: "#fff", fontSize: 14, fontWeight: 500 }}
                        />
                        <LabelList
                          dataKey="value"
                          position="right"
                          offset={8}
                          style={{ fill: "#222", fontSize: 14, fontWeight: 600 }}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="text-muted-foreground leading-none">
                  Survey of 100+ users, 2024
                </div>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/10 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl font-bold text-green-500 mb-4">75%</span>
              <p className="text-lg">of patients find phone booking frustrating due to long wait times</p>
            </div>
            
            <div className="bg-green-900/10 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl font-bold text-green-500 mb-4">82%</span>
              <p className="text-lg">of patients would use a mobile app to book appointments if available</p>
            </div>
            
            <div className="bg-green-900/10 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl font-bold text-green-500 mb-4">63%</span>
              <p className="text-lg">want to see doctor availability in real-time</p>
            </div>
          </div>
        </div>

        {/* Developing Solution Section */}
        <div id="developing" className="mb-24 scroll-mt-16" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">Developing Solution</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Based on our research insights, we created a storyboard to visualize the contrast between traditional booking methods and our digital solution. This helped us align our design direction with user needs and expectations.
          </p>
          
          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/doctor-moodboard.png"
                alt="Moodboard showing the contrast between frustrating traditional booking methods and the ease of app-based booking"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mid-Fidelity Wireframes Section */}
        <div id="mid-fidelity" className="mb-24 scroll-mt-16" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">Mid-Fidelity Wireframes</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            After establishing our design direction, we created mid-fidelity wireframes to define the information architecture and user flow. These wireframes helped us visualize the app structure before adding visual design elements.
          </p>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-full h-[600px] mx-auto overflow-auto">
              <div className="relative w-full" style={{ height: "1200px" }}>
                <Image
                  src="/images/midfi-wireframes.png"
                  alt="Mid-fidelity wireframes showing the complete user flow for the doctor appointment booking app"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design System Section */}
        <div id="design-system" className="mb-24 scroll-mt-16" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">Design System</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            We created a comprehensive design system to ensure consistency across all screens and accelerate the design process by providing reusable components.
          </p>
          
          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/sticker-sheet.png"
                alt="Sticker sheet for doctor appointment booking app"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-6">Color Palette</h3>
              <div className="flex flex-wrap justify-between gap-y-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-md bg-[#f2f2f2] shadow-sm mb-2 flex items-end justify-center"></div>
                  <span className="text-sm font-medium">#f2f2f2</span>
                  <span className="text-xs text-muted-foreground">Background</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-md bg-[#d9e6ff] shadow-sm mb-2 flex items-end justify-center"></div>
                  <span className="text-sm font-medium">#d9e6ff</span>
                  <span className="text-xs text-muted-foreground">Secondary</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-md bg-[#b3c6d3] shadow-sm mb-2 flex items-end justify-center"></div>
                  <span className="text-sm font-medium">#b3c6d3</span>
                  <span className="text-xs text-muted-foreground">Tertiary</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-md bg-[#0066ff] shadow-sm mb-2 flex items-end justify-center"></div>
                  <span className="text-sm font-medium">#0066ff</span>
                  <span className="text-xs text-muted-foreground">Primary</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-md bg-[#000000] shadow-sm mb-2 flex items-end justify-center"></div>
                  <span className="text-sm font-medium">#000000</span>
                  <span className="text-xs text-muted-foreground">Text</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-medium mb-4">Color Usage</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0066ff] text-white p-4 rounded-md flex items-center justify-center">
                    <span>Primary Buttons & CTAs</span>
                  </div>
                  <div className="bg-[#f2f2f2] p-4 rounded-md flex items-center justify-center border border-[#e0e0e0]">
                    <span>Card Backgrounds</span>
                  </div>
                  <div className="bg-[#d9e6ff] p-4 rounded-md flex items-center justify-center">
                    <span>Selected Items & Highlights</span>
                  </div>
                  <div className="bg-[#b3c6d3] p-4 rounded-md flex items-center justify-center">
                    <span>Secondary Elements & Icons</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-6">Typography</h3>
              <div className="space-y-8">
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Inter / Bold / 32px</p>
                  <p className="text-4xl font-bold">Headline Large</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Inter / Medium / 24px</p>
                  <p className="text-3xl font-medium">Headline Medium</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Inter / Regular / 18px</p>
                  <p className="text-xl font-normal">Body Large</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Inter / Regular / 16px</p>
                  <p className="text-base font-normal">Body Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Fidelity Wireframes Section */}
        <div id="high-fidelity" className="mb-24 scroll-mt-16" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">High-Fidelity Wireframes</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            With our design system in place, we created high-fidelity wireframes that brought the app to life. These detailed screens showcase the complete user journey with all visual elements, interactions, and micro-animations.
          </p>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-full h-[600px] mx-auto overflow-auto">
              <div className="relative w-full" style={{ height: "1800px" }}>
                <Image
                  src="/images/hifi-wireframes.png"
                  alt="High-fidelity wireframes showing the complete user interface for the doctor appointment booking app"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final Solution Section */}
        <div id="final-solution" className="mb-24 scroll-mt-16" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">Final Solution</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Doctor's United is now a sleek, user-centered app that makes scheduling appointments a breeze. Our design addresses user frustrations and elevates the entire experience by focusing on clarity, ease, and engagement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Instant Booking</h3>
              <p className="text-lg">
                Users can reserve an appointment with just a few clicks, eliminating long wait times and frustration.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Interactive Scheduling</h3>
              <p className="text-lg">
                A dynamic calendar and filtering system let users choose their preferred doctor and time slot with ease.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">User-Centric Interface</h3>
              <p className="text-lg">
                Clear visual cues, intuitive navigation, and interactive animations guide the user through the entire process.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Seamless Payments</h3>
              <p className="text-lg">
                Integrated payment options ensure a smooth transaction without leaving the app.
              </p>
            </div>
          </div>
          
          <div className="bg-green-900/10 p-8 rounded-lg border border-green-900/20">
            <h3 className="text-2xl font-medium mb-6 flex items-center gap-2">
              <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Interactive Prototype</span>
            </h3>
            <p className="text-lg mb-8">
              We created a fully interactive prototype to test the complete user journey from registration to booking and managing appointments.
            </p>
            <div className="relative w-full h-[600px] border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden">
              <iframe 
                src="https://embed.figma.com/proto/QDmNBk5Hg7m8ykhFl122Ng/Clinic-Appointment-Booking-App?node-id=311-2126&p=f&scaling=scale-down&content-scaling=fixed&page-id=198%3A1936&starting-point-node-id=311%3A2134&embed-host=share" 
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Reflection Section */}
        <div id="reflection" className="mb-24 scroll-mt-16" ref={(el) => addToSectionRefs(el)}>
          <h2 className="text-3xl font-semibold mb-6">Reflection</h2>
          <div className="border-t border-border my-6"></div>
          
          <div className="text-xl leading-relaxed space-y-6">
            <p>
              Working on Doctor's United was more than a design project—it was a journey into understanding the true needs of users in a healthcare setting. I learned that effective design isn't just about aesthetics; it's about solving problems in a way that resonates emotionally and functionally with people.
            </p>
            
            <p>
              Every step, from empathy mapping to interactive prototyping, reinforced the importance of user-centric storytelling. The insights gained from this project continue to influence my design process, ensuring that every digital experience I create is as intuitive and engaging as Doctor's United.
            </p>
          </div>
        </div>

        <div style={{ height: '400px', position: 'relative', marginTop: '4rem' }}>
          <FlowingMenu items={[
            { link: '/loomy', text: 'LooMY', image: '/images/loomy-app.jpg' },
            { link: '/aahar', text: 'Annam', image: '/images/food-rescue-hero.jpg' },
          ]} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
