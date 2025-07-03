import Image from "next/image"
import { Footer } from "@/components/footer"
import { ListeningSection} from "@/components/listening-section"
import TextPressure from "@/components/TextPressure"
import TiltedCard from "@/components/TiltedCard"

export default function AboutMePage() {
  return (
    <main className="pt-8 px-8 pb-12 ml-16">
      <section className="max-w-4xl mx-auto mb-16">
        <div style={{position: 'relative', height: '120px', marginBottom: '2rem'}} className="flex items-center">
          <TextPressure 
            text="Hello, I'm Hinan :)"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="hsl(var(--foreground))"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <p className="text-lg mb-8">
          A little about me ~ I am BTech graduate and a self taught designer from Kerala, India.
        </p>

        {/* Image gallery */}
        <div className="flex flex-wrap gap-4 mb-16">
          <TiltedCard
            imageSrc="/images/eid-mubarak.jpg"
            altText="Eid Mubarak design"
            captionText="This is the first thing i ever designed,i took half a day to design this😂"
            containerHeight="192px"
            containerWidth="192px"
            imageHeight="192px"
            imageWidth="192px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-sm text-center">This is the first thing i ever designed,i took half a day to design this😂</p>
            }
          />
          
          <TiltedCard
            imageSrc="/images/classroom.jpg"
            altText="Hinan in classroom"
            captionText="Was attending a quiz competition during the pandemic"
            containerHeight="192px"
            containerWidth="192px"
            imageHeight="192px"
            imageWidth="192px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-sm text-center">Was attending a quiz competition during the pandemic</p>
            }
          />
          
          <TiltedCard
            imageSrc="/images/workshop.jpg"
            altText="Hinan at workshop"
            captionText="From Delineate 3.0, A Photoshop workshop conducted by IEEEMECSB"
            containerHeight="192px"
            containerWidth="192px"
            imageHeight="192px"
            imageWidth="192px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-sm text-center">From Delineate 3.0, A Photoshop workshop conducted by IEEEMECSB</p>
            }
          />
          
          <TiltedCard
            imageSrc="/images/friends.jpg"
            altText="Hinan with friends"
            captionText="Fam🤗"
            containerHeight="192px"
            containerWidth="192px"
            imageHeight="192px"
            imageWidth="192px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-sm text-center">Fam🤗</p>
            }
          />
        </div>

        {/* Story section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Notes ( My Story )</h2>
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="mb-4 text-amber-500">Sunday May 01, 2022 at 12.37 PM</div>
            <p className="mb-6 text-muted-foreground">
            My adventure started during my first year of college. My senior asked me, "Do you know how to make posters?"
            </p>
            <p className="text-muted-foreground">
            Since then, I've been trying to learn more and more about design. I have explored many niches like illustration, graphic design, and 3D design. I fell for UI/UX because, at its core, it tries to solve problems creatively and intuitively. I also had the opportunity to attend a design conference conducted by Fofkozhikode. I consider myself fortunate to have secured a seat at that event, where I listened to many industry-leading designers like Anil Reddy, Yasha Patki, Arun Antony, and Jose Joseph. It was an incredible experience to listen, interact with them, and gain valuable insights. I constantly strive to update my skills and would welcome any opportunity to become a better designer.

            </p>
          </div>
        </div>
        
        {/* Listening Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What I'm Listening To</h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <iframe 
              src="https://open.spotify.com/embed/playlist/1LMckgC9399iAupilNNJdN?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
        
        {/* Hobbies section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">ഒരു ഫയൽ ചിത്രം</h2>
          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/group-photo.jpg"
              alt="Group photo with classmates"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-base">
            Im glad to have a bunch of nice seniors who promoted and helped me to grow as a designer, Special thanks to <strong>Ashal P S</strong>, <strong>Ashwin Gireesh</strong>, <strong>Lakshmipriya</strong>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
