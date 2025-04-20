import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#1a2a42] py-20">
      <div className="container flex flex-col items-center gap-20">
        <div className="flex flex-col items-center max-w-[692px] text-center">
          <div className="flex flex-col items-center gap-2.5">
            <span className="font-['Montserrat',Helvetica] font-bold text-[#4fd574] text-2xl tracking-[0.20px] leading-6">
              Newsletter
            </span>

            <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)]">
              Join Our Newsletter
            </h2>

            <p className="font-['Poppins',Helvetica] font-semibold text-white text-xl tracking-[0] leading-7">
              Subscribe to get information, latest news and other
              <br />
              interesting offers about Belen Solutions.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[688px]">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="relative h-[58px] rounded-[5px]">
                <Input
                  className="absolute w-full h-[58px] rounded-[5px] pl-5 pr-[130px] font-['Montserrat',Helvetica] text-sm text-[#5e6282] tracking-[0.20px] leading-7 border-[#e6e6e6]"
                  placeholder="Your email address"
                />
                <Button className="absolute right-0 h-[58px] w-[117px] bg-[#4fd574] hover:bg-[#3dc563] rounded-[0px_5px_5px_0px] font-['Montserrat',Helvetica] font-semibold text-light-text-color text-sm tracking-[0.20px] leading-7 border border-[#e6e6e6]">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
