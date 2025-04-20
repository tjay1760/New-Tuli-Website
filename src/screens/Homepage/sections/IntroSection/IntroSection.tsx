import React from "react";
import { Button } from "../../../../components/ui/button";

export const IntroSection = (): JSX.Element => {
  return (
    <section className="py-16 md:py-24 bg-[#f8f4f1]">
      <div className="container">
        <div className="max-w-[531px] flex flex-col items-start gap-6">
          <h1 className="font-['Montserrat',Helvetica] font-bold text-[#071d6e] text-4xl leading-tight tracking-[0.8px]">
            Effortless Bookkeeping, Endless Possibilities
          </h1>

          <p className="font-['Poppins',Helvetica] text-[#071d6e] text-base leading-[26px]">
            Save time and cut costs with expert support and AI powered
            <br />
            automated solutions, so you can focus on growing your business
          </p>

          <Button className="bg-[#1cdb92] hover:bg-[#19c585] text-[#1a2a42] font-['Montserrat',Helvetica] font-bold text-lg rounded-[10px] px-4 py-[13px]">
            Get started for free
          </Button>
        </div>
      </div>
    </section>
  );
};
