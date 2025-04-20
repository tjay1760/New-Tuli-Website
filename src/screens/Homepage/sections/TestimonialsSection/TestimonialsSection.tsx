import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import HeroImage from '../../../../../public/Hero-Dashboard-Image.png'

export const TestimonialsSection = (): JSX.Element => {
  return (
    <div className="w-full py-8 bg-[#f8f4f1] h-full">
      <div className="relative w-full max-w-[642px] mx-auto">
<img src={HeroImage}/>
      </div>
    </div>
  );
};
