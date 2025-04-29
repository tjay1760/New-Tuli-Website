
import { BlogSection } from "./sections/BlogSection";

import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroContentSection } from "./sections/HeroContentSection/HeroContentSection";
import { HeroSection } from "./sections/HeroSection";
import { IntroSection } from "./sections/IntroSection";
import { NewsletterSection } from "./sections/NewsletterSection/NewsletterSection";
import { ServicesWrapperSection } from "./sections/ServicesWrapperSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import OurServicesSection from "./sections/OurServicesSection/OurServicesSection";
import JourneySection from "./JourneySection/JourneySection";

export const Homepage = (): JSX.Element => {
  // Company logos data for the partners section
  const partnerLogos = [
    { src: "/image-27.png", alt: "Partner logo 1" },
    { src: "/image-28.png", alt: "Partner logo 2" },
    { src: "/image-29.png", alt: "Partner logo 3", hasBackground: true },
    { src: "/image-30.png", alt: "Partner logo 4" },
    { src: "/image-31.png", alt: "Partner logo 5" },
  ];

  return (
    <main className="bg-white w-full">
      <div className="relative w-full mx-auto max-w-[1440px]">
        {/* Hero area with intro and testimonials */}
        <section className="w-full">
          <HeroSection />
          <div className="flex flex-row w-full">
            <div className="flex-1">
              <IntroSection />
            </div>
            <div className="flex-1">
              <TestimonialsSection />
            </div>
          </div>
        </section>

        {/* Hero content section */}
        <section className="w-full">
          <HeroContentSection />
        </section>
        <section className="w-full">
          <OurServicesSection/>
        </section>
        {/* Services wrapper section */}
        <section className="w-full">
          <ServicesWrapperSection />
        </section>

        
        <section className="w-full py-16">
          <JourneySection/>
        </section>

        {/* Partners section */}
        <section className="w-full py-16">
          <div className="max-w-[1073px] mx-auto flex items-center justify-between">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="relative">
                {logo.hasBackground ? (
                  <div className="relative">
                    <div className="w-[241px] h-[86px] bg-white rounded-[10px] shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005]" />
                    <img
                      className="w-[162px] h-[162px] absolute top-[-38px] left-10 object-cover"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </div>
                ) : (
                  <img
                    className={`object-cover ${
                      index === 0
                        ? "w-[130px] h-[130px]"
                        : index === 1
                          ? "w-[173px] h-[110px]"
                          : index === 3
                            ? "w-[162px] h-8"
                            : "w-[94px] h-[21px]"
                    }`}
                    alt={logo.alt}
                    src={logo.src}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Team section */}
        <section className="w-full">
          <TeamSection />
        </section>

        {/* Newsletter section */}
        <section className="w-full">
          <NewsletterSection />
        </section>

        {/* Footer section */}
        <footer className="w-full">
          <FooterSection />
        </footer>
      </div>
    </main>
  );
};
