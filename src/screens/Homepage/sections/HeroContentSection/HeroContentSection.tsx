import { CircleCheck } from "lucide-react";

export const HeroContentSection = (): JSX.Element => {
  return (
    <section className="flex w-full py-14 items-center justify-center gap-[74px] bg-[#e6f2fe] font-['Montserrat',Helvetica]">
      <div className="flex max-w-7xl mx-auto items-center justify-between gap-[74px] px-4">
        <div className="relative">
          <img
            className="w-[593px] h-[459px] object-cover"
            alt="Tuli Books user interface"
            src="/The_money_man.png"
          />
        </div>

        <div className="flex flex-col gap-[35px] max-w-[620px]">
          <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-[#071d6e] text-[length:var(--h-2-font-size)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)] tracking-[var(--h-2-letter-spacing)]">
          Grow your business anywhere
          </h2>

          <p className="font-['Montserrat',Helvetica] font-normal text-black text-base tracking-[0.20px] leading-5">
            Tuli Books streamlines financial management, enabling small
            businesses to thrive with automated bookkeeping and user-friendly
            tools. From day one, we collaborate with you to ensure your finances
            are on the right track, helping you save time and money.
          </p>

          <p className="font-bold font-['Montserrat',Helvetica] ">What we do:</p>
          <ul className="flex flex-col gap-2">
            <li  className="flex gap-2"><CircleCheck/> Invoicing</li>
            <li className="flex gap-2"><CircleCheck/>Bookeeping</li>
            <li className="flex gap-2"><CircleCheck/>Tax Filings</li>
            <li className="flex gap-2"><CircleCheck/>24/7 WhatsApp Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
