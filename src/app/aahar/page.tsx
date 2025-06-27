import Image from "next/image";
import { CaseStudyNav } from "@/components/case-study-nav";
import QuantitativePieCharts from "@/components/QuantitativePieCharts";

export default function AnnamPage() {
  return (
    <main className="pt-16 px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
      <CaseStudyNav />
      <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
        {/* Hero Section */}
        <div className="mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">Annam: Bridging Food Surplus to Need</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8">
            Designing a platform to connect surplus food donors with NGOs and volunteers to reduce food waste and hunger.
          </p>
          <div className="relative w-full mb-8 sm:mb-12">
            <Image
              src="/images/food-rescue-hero.jpg" // Placeholder image, update as needed
              alt="Annam: Bridging Food Surplus to Need"
              width={1200}
              height={300}
              className="mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 mb-16 sm:mb-24">
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wider">Timeline</h3>
            <p className="text-base sm:text-lg">Jan 2024 ~ Mar 2024</p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wider">Disciplines</h3>
            <p className="text-base sm:text-lg">UX Design<br />UI Design<br />Service Design</p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wider">Responsibilities</h3>
            <p className="text-base sm:text-lg">Research<br />Wireframing<br />Prototyping<br />UI Design<br />User Testing</p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wider">Tools</h3>
            <p className="text-base sm:text-lg">Figma<br />Miro<br />Adobe Illustrator</p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wider">Team</h3>
            <p className="text-base sm:text-lg">Aarav Sharma<br />Priya Menon<br />Riya Patel</p>
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
    </main>
  );
} 