import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FeaturesSection = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Mobile App Development",
      description:
        "Stay ahead in the mobile-first era with our top-notch mobile app development services. We transform ideas into seamless, user-friendly, and high-performance mobile applications.",
      image: "/rectangle-75-4.png",
    },
    {
      id: 2,
      title: "E-Commerce Solutions",
      description:
        "Power your online business with our e-commerce solutions. We build robust, secure, and scalable platforms that enhance your digital presence and drive sales.",
      image: "/rectangle-75-5.png",
    },
  ];

  return (
    <section className="flex flex-col gap-[60px] w-full py-16">
      <div className="flex flex-row gap-12 w-full">
        {features.map((feature) => (
          <div key={feature.id} className="w-[616px]">
            <img
              className="w-full h-[254px] rounded-t-[10px]"
              alt={feature.title}
              src={feature.image}
            />
            <Card className="rounded-t-none rounded-b-[10px] shadow-[0px_4px_10px_#0000001a]">
              <CardContent className="p-0">
                <div className="p-[15px]">
                  <div className="font-['Montserrat',Helvetica] font-semibold text-x-252525 text-2xl tracking-[0] leading-[31.2px]">
                    {feature.title}
                  </div>
                  <Separator className="my-4 w-full" />
                  <div className="font-['Poppins',Helvetica] font-medium text-x-767676 text-lg tracking-[0] leading-6">
                    {feature.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
