import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

// Define footer data for better maintainability
const footerLinks = [
  {
    title: "Company Info",
    links: ["About Us", "Carrer", "Blog"],
  },
  {
    title: "Features",
    links: ["Classrooms", "Events", "Live Chat", "Unlimited Support"],
  },
  {
    title: "Our Services",
    links: ["CRM", "E-Commerce Solutions", "Cloud Services", "SaaS Products"],
  },
];

const contactInfo = [
  { icon: <PhoneIcon className="h-6 w-6" />, text: "(480) 555-0103" },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    text: "4517 Washington Ave. Manchester, Kentucky 39495",
    multiline: true,
  },
  { icon: <SendIcon className="h-6 w-6" />, text: "belen@example.com" },
];

const socialIcons = [
  { icon: <FacebookIcon className="h-6 w-6" /> },
  { icon: <InstagramIcon className="h-6 w-6" /> },
  { icon: <TwitterIcon className="h-6 w-6" /> },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#1a2a42]">
      <div className="w-full bg-white py-[50px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-8 md:gap-[100px]">
            {footerLinks.map((column, index) => (
              <div key={index} className="flex flex-col gap-5">
                <h3 className="font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                  {column.title}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] [font-style:var(--link-font-style)]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-5">
              <h3 className="font-h-5 font-[number:var(--h-5-font-weight)] text-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                Get In Touch
              </h3>
              <div className="flex flex-col gap-2.5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    {item.icon}
                    <div
                      className={`text-second-text-color ${!item.multiline ? "whitespace-nowrap" : ""} font-h-6 font-[number:var(--h-6-font-weight)] text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] [font-style:var(--h-6-font-style)]`}
                    >
                      {item.multiline ? (
                        <>
                          4517 Washington Ave. Manchester, <br />
                          Kentucky 39495
                        </>
                      ) : (
                        item.text
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f9f9f9] py-[25px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-['Montserrat',Helvetica] font-medium text-second-text-color text-sm tracking-[0.20px] leading-6">
                Copyright © 2022 BelenSolutions. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-center gap-5">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-second-text-color hover:text-text-color transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
