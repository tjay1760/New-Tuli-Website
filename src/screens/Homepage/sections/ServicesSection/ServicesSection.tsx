import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ServicesSection = (): JSX.Element => {
  const serviceCards = [
    {
      id: 1,
      title: "Consultants",
      image: "/rectangle-75-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Contractors",
      image: "/rectangle-75-3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="flex flex-col gap-[60px] w-full">
      <div className="flex gap-12">
        {serviceCards.map((card) => (
          <Card
            key={card.id}
            className="w-[616px] rounded-none shadow-[0px_4px_10px_#0000001a] overflow-hidden"
          >
            <div className="relative">
              <img
                className="w-full h-[254px] object-cover"
                alt={card.title}
                src={card.image}
              />
            </div>
            <CardContent className="p-0">
              <div className="p-[15px]">
                <h3 className="font-['Montserrat',Helvetica] font-semibold text-x-252525 text-2xl leading-[31.2px]">
                  {card.title}
                </h3>
                <Separator className="my-4 h-px w-full" />
                <p className="font-['Poppins',Helvetica] font-medium text-x-767676 text-lg leading-6">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
