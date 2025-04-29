import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesWrapperSection = (): JSX.Element => {
  // Data for service cards
  const serviceCards = [
    {
      id: 1,
      image: "/rectangle-75.png",
      title: "Small Medium Enterprises",
      description: "Pay your staff (and yourself)",
      titleFont: "Poppins",
    },
    {
      id: 2,
      image: "/rectangle-75-1.png",
      title: "Freelancer",
      description: "Create and send professional invoices in minutes",
      titleFont: "Montserrat",
    },
    {
      id: 3,
      image: "/rectangle-75-2.png",
      title: "Consultants",
      description: "Make informed business decisions to cut down costs ",
      titleFont: "Montserrat",
    },
    {
      id: 4,
      image: "/rectangle-75-3.png",
      title: "Contractors",
      description: "Stay compliant with local and global regulations ",
      titleFont: "Montserrat",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[60px] w-full py-10">
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="font-bold text-[40px] text-center text-[#071d6e] leading-[48px] font-['Poppins',Helvetica]">
          Built for Business owners like you
        </h2>
      </div>

      <div className="flex flex-wrap items-start gap-12 w-full">
        {serviceCards.map((card) => (
          <Card key={card.id} className="w-[616px] rounded-none shadow-none">
            <img
              className="w-full h-[254px] object-cover"
              alt={card.title}
              src={card.image}
            />
            <CardContent className="p-0">
              <div className="bg-white rounded-[0px_0px_10px_10px] shadow-[0px_4px_10px_#0000001a] h-[233px]">
                <div className="pt-[19px] px-[15px]">
                  <h3
                    className={`font-['${card.titleFont}',Helvetica] font-semibold text-x-252525 text-2xl leading-[31.2px]`}
                  >
                    {card.title}
                  </h3>
                </div>

                <img
                  className="w-[588px] h-px mt-[49px] mx-[15px]"
                  alt="Line"
                  src="/line-10.svg"
                />

                <div className="px-[15px] pt-4">
                  <p className="font-['Poppins',Helvetica] font-medium text-x-767676 text-lg leading-6">
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
