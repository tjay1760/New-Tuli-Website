import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const HeroContentSection = (): JSX.Element => {
  return (
    <section className="flex w-full py-14 items-center justify-center gap-[74px] bg-[#e6f2fe]">
      <div className="flex max-w-7xl mx-auto items-center justify-between gap-[74px] px-4">
        <div className="relative">
          <img
            className="w-[593px] h-[459px] object-cover"
            alt="Tuli Books user interface"
            src="/mask-group.png"
          />
        </div>

        <div className="flex flex-col gap-[35px] max-w-[620px]">
          <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-[#071d6e] text-[length:var(--h-2-font-size)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)] tracking-[var(--h-2-letter-spacing)]">
            Why
            <br />
            Tuli Books
          </h2>

          <p className="font-['Montserrat',Helvetica] font-normal text-black text-base tracking-[0.20px] leading-5">
            Tuli Books is a powerful financial app designed to help small
            businesses grow and boost their income. With features like Bill
            &amp; Pay for managing transactions, accepting non-cash payments
            from banks and digital wallets, accessing capital loans through the
            Business Capital Solution, and selling Tuli Books Digital Products
            (TBDP) such as credit, electricity tokens, and game vouchers, it
            offers multiple income opportunities. The app also provides
            automated digital bookkeeping to track all business transactions
            seamlessly—all in one intuitive and user-friendly platform
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span className="text-[#1d66ff] font-link font-[number:var(--link-font-weight)] text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] [font-style:var(--link-font-style)]">
              Learn More
            </span>
            <ArrowRightIcon className="w-[9px] h-4 text-[#1d66ff]" />
          </a>
        </div>
      </div>
    </section>
  );
};
