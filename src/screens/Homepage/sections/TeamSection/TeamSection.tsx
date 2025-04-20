import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Team member data for easy mapping
const teamMembers = [
  {
    id: 1,
    name: "S. Raman",
    title: "Physics Professor",
    image: "/testimonial-user-cover-1.png",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 4,
  },
  {
    id: 2,
    name: "Chris Fox",
    title: "Maths Professor",
    image: "/testimonial-user-cover-2.png",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 4,
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center gap-2 mb-12">
        <div className="flex flex-col items-center justify-center gap-2 relative">
          <div className="relative w-full h-14">
            <div className="absolute w-20 h-px top-0 left-1/2 -translate-x-1/2">
              <img
                className="absolute w-20 h-[3px] top-[-3px] left-0"
                alt="Line"
                src="/line-9.svg"
              />
            </div>

            <h2 className="font-['Montserrat',Helvetica] text-x-505050 font-bold text-[40px] text-center tracking-[0] leading-[48px] whitespace-nowrap mt-2">
              Our Team
            </h2>
          </div>
        </div>

        <p className="font-['Montserrat',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[28.8px]">
          We have excellent team&nbsp;&nbsp;at Belen Solutions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="w-full max-w-[508px] bg-transparent border-0 shadow-none"
          >
            <CardContent className="flex flex-col items-center p-0">
              <div className="flex flex-col items-center pt-6 pb-0 px-6 w-full bg-[#133359] overflow-hidden">
                <div
                  className="w-32 h-32 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />

                <div className="flex flex-col items-center gap-4 p-8 w-full">
                  <p className="font-['Montserrat',Helvetica] font-normal text-second-text-color text-sm text-center leading-5 max-w-[320px]">
                    {member.testimonial}
                  </p>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-[22px] h-[22px]">
                        {i < member.rating ? (
                          <img
                            className="w-full h-full"
                            alt="StarIcon rating"
                            src="/icn-bxs-star.svg"
                          />
                        ) : (
                          <img
                            className="w-full h-full"
                            alt="Empty star"
                            src="/icn-bx-star.svg"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-1 px-6">
                    <h3 className="font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap">
                      {member.name}
                    </h3>
                    <p className="text-second-text-color text-center whitespace-nowrap font-h-6 font-[number:var(--h-6-font-weight)] text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)]">
                      {member.title}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
