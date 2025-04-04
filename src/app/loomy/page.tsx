import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { CaseStudyNav } from "@/components/case-study-nav"
import AvatarBuilder from "@/components/AvatarBuilder"

export default function LoomyPage() {
  return (
    <main className="pt-16 px-8 pb-24">
      {/* Add the CaseStudyNav component at the top */}
      <CaseStudyNav />
      
      {/* Using margin-top instead of padding-top for better spacing */}
      <div className="max-w-5xl mx-auto mt-16">
        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-5xl font-bold mb-8">LooMY: Anonymous Chat App</h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Designing a secure, anonymous platform for authentic conversations without compromising privacy
          </p>
          
          <div className="relative w-full mb-12">
            <Image
              src="/images/loomy-avatars-banner.jpg"
              alt="Loomy: An Anonymous Chat App Featuring Loom, Your Cartoon Avatar, For Vibrant And Secure Conversations"
              width={1200}
              height={300}
              className="mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* Rest of the content remains unchanged */}
        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-24">
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
        <div className="mb-24">
          <p className="text-xl leading-relaxed mb-8">
            In a digital world where privacy is increasingly scarce, LooMY offers a refreshing alternative. 
            This case study explores how we created an anonymous chat platform that fosters authentic connections 
            while prioritizing user privacy and safety.
          </p>
        </div>

        {/* Remove the duplicate CaseStudyNav that was here */}
        
        {/* The Challenge Section */}
        <div id="challenge" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Most social platforms today require extensive personal information, creating privacy concerns and limiting authentic expression.
            We needed to create a platform that allows anonymous communication while still fostering meaningful connections and preventing misuse.
          </p>
          
          <div className="relative w-full mb-12">
            <Image
              src="/images/loomy-challenges.jpg"
              alt="LooMY app challenges: Privacy Concerns, Authenticity Barriers, and Safety Issues"
              width={1000}
              height={500}
              className="mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/10 rounded-lg p-8 border border-green-900/20">
              <h3 className="font-medium mb-4 text-xl">Privacy Concerns</h3>
              <p className="text-lg">Users are increasingly worried about data collection and privacy breaches on social platforms.</p>
            </div>
            
            <div className="bg-green-900/10 rounded-lg p-8 border border-green-900/20">
              <h3 className="font-medium mb-4 text-xl">Authenticity Barriers</h3>
              <p className="text-lg">Public profiles often lead to curated personas rather than genuine expression.</p>
            </div>
            
            <div className="bg-green-900/10 rounded-lg p-8 border border-green-900/20">
              <h3 className="font-medium mb-4 text-xl">Safety Issues</h3>
              <p className="text-lg">Anonymous platforms often struggle with harassment, spam, and inappropriate content.</p>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div id="research" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">Research</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            We conducted extensive research to understand user needs, pain points, and expectations for anonymous communication platforms.
          </p>
          
          <div className="space-y-12 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h4 className="text-xl font-medium mb-6">User Interviews</h4>
              <p className="text-lg mb-6">
                We conducted interviews with 15 potential users across different age groups to understand their concerns about privacy 
                on social platforms and their needs for anonymous communication.
              </p>
              
              {/* Survey Results */}
              <div className="space-y-8 mb-8">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-4">What may motivate you to use anonymous chat apps?</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Meeting new people</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Discussing personal topics anonymously</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Entertainment</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Seeking advice</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-4">Which features are most important to you in an anonymous chat app?</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Anonymity</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ease of use</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Instant connections with diverse people</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Communication features</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Privacy and security measures</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-4">What frustrates you about existing chat apps?</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Privacy concerns</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inappropriate content</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lack of features</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Slow response times</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Limited customization options</span>
                      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden ml-4">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-3">Key Findings</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>78% of users were concerned about their personal data being collected on social platforms</li>
                    <li>65% wanted to express opinions without fear of judgment or consequences</li>
                    <li>82% valued authentic conversations over curated social media personas</li>
                    <li>91% were worried about harassment in anonymous environments</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-3">User Quotes</h5>
                  <div className="space-y-4">
                    <blockquote className="italic border-l-2 border-green-500 pl-4 py-1">
                      "I want to connect with people based on shared interests, not how we look or where we work."
                    </blockquote>
                    <blockquote className="italic border-l-2 border-green-500 pl-4 py-1">
                      "I'm tired of feeling like I'm performing on social media instead of just being myself."
                    </blockquote>
                    <blockquote className="italic border-l-2 border-green-500 pl-4 py-1">
                      "Privacy is non-negotiable for me. I need to know my conversations aren't being stored or monitored."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h4 className="text-xl font-medium mb-6">Competitive Analysis</h4>
              <p className="text-lg mb-6">
                We analyzed several existing chat platforms to identify strengths, weaknesses, and opportunities for differentiation.
              </p>
              
              <div className="relative w-full h-[600px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/loomy-competitive-analysis.jpg"
                  alt="Competitive analysis of LooMY vs Omegle, Hinge, and WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-3">Key Advantages</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Only platform offering both anonymous chatting and customizable avatars</li>
                    <li>Unique combination of language filters and interest-based matching</li>
                    <li>Advanced privacy features like read receipts control and email change options</li>
                    <li>Comprehensive safety features while maintaining anonymity</li>
                  </ul>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-medium mb-3">Market Gaps</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Most platforms lack robust privacy controls while enabling social connections</li>
                    <li>Few competitors offer interest-based matching in anonymous environments</li>
                    <li>Limited options for users seeking both anonymity and profile customization</li>
                    <li>Insufficient content moderation on existing anonymous platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/10 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl font-bold text-green-500 mb-4">78%</span>
              <p className="text-lg">of users concerned about data privacy on social platforms</p>
            </div>
            
            <div className="bg-green-900/10 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl font-bold text-green-500 mb-4">65%</span>
              <p className="text-lg">want to express themselves without fear of judgment</p>
            </div>
            
            <div className="bg-green-900/10 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl font-bold text-green-500 mb-4">91%</span>
              <p className="text-lg">worried about harassment in anonymous environments</p>
            </div>
          </div>
        </div>

        {/* Developing Solution Section */}
        <div id="developing" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">Developing Solution</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Based on our research insights, we developed the core concept of LooMY - an anonymous chat platform with unique features 
            designed to balance privacy with meaningful connections.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-6">Core Features</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-green-500/20 rounded-full p-2 h-min">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Progressive Feature Unlocking</h4>
                    <p className="text-muted-foreground">Start with text-only messaging and unlock emojis, audio messages, images, and calls as your conversation deepens, ensuring safety through familiarity</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-green-500/20 rounded-full p-2 h-min">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Interest-Based Discovery</h4>
                    <p className="text-muted-foreground">Find connections through a customizable discovery page that filters potential matches by shared interests and language preferences</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-green-500/20 rounded-full p-2 h-min">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Message Translation</h4>
                    <p className="text-muted-foreground">Built-in translation feature allows conversations across language barriers, making connections truly global</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-green-500/20 rounded-full p-2 h-min">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Customizable Privacy</h4>
                    <p className="text-muted-foreground">Individual read receipt controls and granular privacy settings for each conversation</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-green-500/20 rounded-full p-2 h-min">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Dynamic Avatars</h4>
                    <p className="text-muted-foreground">Expressive avatars that can be customized to reflect your mood and personality while maintaining anonymity</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-6">User Flow</h3>
              <div className="relative w-full h-[600px]">
                <Image
                  src="/images/loomy-user-flow.jpg"
                  alt="LooMY app user flow diagram showing the complete journey from opening the app to chatting"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-6">Wireframes</h3>
            <div className="relative w-full h-[600px] mb-4">
              <Image
                src="/images/loomy-wireframes.jpg"
                alt="LooMY app wireframes showing the complete user interface flow"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground">Complete wireframe flow showing onboarding, profile creation, discovery, and chat interfaces</p>
          </div>
        </div>

        {/* Wireframes Section */}
        <div id="wireframes" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">Wireframes</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Based on our user flow and feature requirements, we created detailed wireframes to visualize the app's structure
            and interaction patterns before moving to high-fidelity designs.
          </p>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-6">Wireframe Exploration</h3>
            <div className="relative w-full h-[600px] mb-4">
              <Image
                src="/images/loomy-wireframes.jpg"
                alt="LooMY app wireframes showing the complete user interface flow"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground">Complete wireframe flow showing onboarding, profile creation, discovery, and chat interfaces</p>
          </div>
        </div>

        {/* Design System Section */}
        <div id="design-system" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">Visual Design & Branding</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            We created a distinctive visual identity with a bright, friendly interface that balances playfulness with trust,
            using a vibrant yellow as our primary color to convey optimism and connection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-24 bg-[#AFAFAF] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#AFAFAF</p>
                  <p className="text-xs text-muted-foreground">Gray</p>
                </div>
                <div>
                  <div className="h-24 bg-[#FFFFFF] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#FFFFFF</p>
                  <p className="text-xs text-muted-foreground">White</p>
                </div>
                <div>
                  <div className="h-24 bg-[#E1E1E1] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#E1E1E1</p>
                  <p className="text-xs text-muted-foreground">Light Gray</p>
                </div>
                <div>
                  <div className="h-24 bg-[#4B4B4B] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#4B4B4B</p>
                  <p className="text-xs text-muted-foreground">Dark Gray</p>
                </div>
                <div>
                  <div className="h-24 bg-[#FFFBE1] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#FFFBE1</p>
                  <p className="text-xs text-muted-foreground">Cream</p>
                </div>
                <div>
                  <div className="h-24 bg-[#F7F7F7] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#F7F7F7</p>
                  <p className="text-xs text-muted-foreground">Off-White</p>
                </div>
                <div>
                  <div className="h-24 bg-[#FAE943] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">#FAE943</p>
                  <p className="text-xs text-muted-foreground">Primary Yellow</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-6">Typography</h3>
              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Plus Jakarta Sans / Bold / 28px</p>
                  <p className="text-3xl font-bold">Headline Bold</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Plus Jakarta Sans / Semibold / 20px</p>
                  <p className="text-2xl font-semibold">Headline Semibold</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Plus Jakarta Sans / Medium / 18px</p>
                  <p className="text-xl font-medium">Headline Medium</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Plus Jakarta Sans / Regular / 16px</p>
                  <p className="text-base font-normal">Body Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Fidelity Wireframes Section */}
        <div id="high-fidelity" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">High-Fidelity Designs</h2>
          <div className="border-t border-border my-6"></div>
          
          <p className="text-xl leading-relaxed mb-12">
            Our final designs bring together all the research, user flows, and visual identity elements into a cohesive, 
            engaging experience that prioritizes both privacy and meaningful connection.
          </p>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="relative w-full h-[800px]">
              <Image
                src="/images/loomy-ui-showcase.jpg"
                alt="LooMY app complete UI showcase with onboarding, discovery, profile, and chat interfaces"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              Complete UI showcase featuring onboarding, discovery, profile creation, and messaging interfaces
            </p>
          </div>
        </div>

        {/* Avatar Story Section */}
        <div id="avatar-story" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">Avatar Story</h2>
          <div className="border-t border-border my-6"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-xl leading-relaxed mb-6">
                Creating the perfect avatar system was a journey of exploration and iteration. We wanted to design avatars that were 
                expressive, unique, and allowed users to represent themselves without revealing personal information.
              </p>
              
              <div className="bg-green-900/10 p-6 rounded-lg border border-green-900/20 mb-6">
                <h4 className="font-medium mb-3">Design Goals</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create avatars that express personality without revealing identity</li>
                  <li>Develop a system that's intuitive yet offers meaningful customization</li>
                  <li>Ensure the design is inclusive and appeals to diverse users</li>
                  <li>Balance playfulness with the serious nature of privacy</li>
                </ul>
              </div>
            </div>
            
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/concept-avatars.jpg"
                alt="Avatar design process showing sketches and digital iterations"
                fill
                className="object-contain bg-[#f5f5eb]"
              />
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <h3 className="text-xl font-medium mb-6">Avatar Evolution</h3>
            <p className="text-lg mb-8">
              Our avatar design went through multiple iterations, exploring different styles, expressions, and customization options
              before arriving at our final design system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <div className="bg-background p-4 rounded-lg border border-border flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src="/images/avatar-iteration-1.jpg"
                    alt="First avatar iteration - Orange square face with smile"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">Iteration 1</p>
                <p className="text-center text-xs text-muted-foreground mt-1">Geometric shapes</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-border flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src="/images/avatar-iteration-2.jpg"
                    alt="Second avatar iteration - Yellow circle with glasses"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">Iteration 2</p>
                <p className="text-center text-xs text-muted-foreground mt-1">Character details</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-border flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src="/images/avatar-iteration-3.jpg"
                    alt="Third avatar iteration - Purple circle with neutral expression"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">Iteration 3</p>
                <p className="text-center text-xs text-muted-foreground mt-1">Emotion range</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-border flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src="/images/avatar-iteration-4.jpg"
                    alt="Fourth avatar iteration - Yellow circle with sunglasses"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">Iteration 4</p>
                <p className="text-center text-xs text-muted-foreground mt-1">Accessory options</p>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-border flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src="/images/avatar-iteration-5.jpg"
                    alt="Final avatar iteration - Green square with expressive face"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">Final Design</p>
                <p className="text-center text-xs text-muted-foreground mt-1">Complete system</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Expressiveness</h5>
                <p className="text-sm text-muted-foreground">
                  Avatars needed to convey personality and emotion without revealing identity
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Customization</h5>
                <p className="text-sm text-muted-foreground">
                  Users wanted enough options to feel unique without overwhelming complexity
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Inclusivity</h5>
                <p className="text-sm text-muted-foreground">
                  Design system needed to feel welcoming and representative for all users
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-6">Final Avatar System</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-4">Interactive Avatar Builder</h4>
                <div className="avatar-builder-container bg-background p-6 rounded-lg border border-border">
                  <AvatarBuilder />
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground mb-2">This is a demonstration of how the avatar builder works in the app</p>
                  <p className="text-xs text-muted-foreground">Note: In the actual app, changes are applied in real-time</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Design Considerations</h4>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium text-sm mb-2">Expressiveness</h5>
                    <p className="text-sm text-muted-foreground">
                      Avatars needed to convey personality and emotion without revealing identity. We focused on creating a wide range of expressions and features that could represent different moods and personalities.
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium text-sm mb-2">Customization</h5>
                    <p className="text-sm text-muted-foreground">
                      Users wanted enough options to feel unique without overwhelming complexity. We balanced variety with simplicity to create a system that feels personal but remains easy to use.
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium text-sm mb-2">Inclusivity</h5>
                    <p className="text-sm text-muted-foreground">
                      Design system needed to feel welcoming and representative for all users. We created abstract shapes and colors that avoid gender, racial, or cultural stereotypes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Section */}
        <div id="reflection" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-6">Key Learnings</h2>
          <div className="border-t border-border my-6"></div>
          
          <div className="text-xl leading-relaxed space-y-6 mb-12">
            <p>
              Working on LooMY taught us valuable lessons about balancing privacy with user engagement. The project challenged us 
              to rethink how digital connections can be formed without compromising personal information.
            </p>
          </div>
          
          <ul className="list-disc pl-5 space-y-4 text-lg text-muted-foreground mb-12">
            <li>Balancing anonymity with accountability is crucial for creating safe online spaces</li>
            <li>Privacy features must be intuitive and transparent to build user trust</li>
            <li>Interest-based matching creates more meaningful connections than random pairing</li>
            <li>Ephemeral content encourages authentic, in-the-moment interactions</li>
            <li>Continuous moderation is essential for maintaining community standards</li>
          </ul>
          
          <div className="bg-green-900/10 p-8 rounded-lg border border-green-900/20">
            <h3 className="text-2xl font-medium mb-4">Future Opportunities</h3>
            <p className="text-lg mb-6">
              As we move forward with LooMY, we're exploring several opportunities to enhance the platform:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-2">Voice & Audio Features</h4>
                <p className="text-muted-foreground">
                  Implementing voice messaging and audio rooms while maintaining anonymity
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-2">Community Building</h4>
                <p className="text-muted-foreground">
                  Creating topic-based communities for deeper discussions while preserving privacy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Case Study */}
        <div className="mt-24 border-t border-border pt-12">
          <h3 className="text-lg uppercase text-muted-foreground mb-4">Previous Case Study</h3>
          <Link href="/doctorsapp" className="text-2xl font-semibold hover:text-primary transition-colors">
            Doctor's Appointment Booking App
          </Link>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}

// Remove the duplicate navigation section that was here
