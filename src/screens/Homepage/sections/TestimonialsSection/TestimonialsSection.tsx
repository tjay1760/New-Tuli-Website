import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <div className="w-full py-8">
      <div className="relative w-full max-w-[642px] mx-auto">
        <Card className="relative w-full overflow-hidden shadow-md">
          <CardContent className="p-0">
            <div className="relative w-full h-[277px]">
              <div className="absolute w-full h-full top-0 left-0 bg-[url(/image-1.png)] bg-cover bg-center">
                {/* Tuli Books logo container */}
                <div className="relative w-[69px] h-[15px] top-1.5 left-[5px] bg-gray-900 rounded-[17px] flex items-center justify-center">
                  <span className="font-['Montserrat',Helvetica] font-extrabold text-[8px] text-center tracking-[0] leading-[10.4px] whitespace-nowrap">
                    <span className="text-white">Tuli </span>
                    <span className="text-[#ffae45]">Books</span>
                  </span>
                </div>

                {/* Small white pill/button in top right */}
                <div className="absolute w-[30px] h-3.5 top-2 right-[25px] bg-white rounded-[17px] backdrop-blur-[2px]" />
              </div>

              {/* Screenshot overlay */}
              <img
                className="absolute w-64 h-[109px] top-1 right-1 object-cover"
                alt="Screenshot of Tuli Books interface"
                src="/screenshot-2025-04-10-at-9-55-28-a-m--1.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
