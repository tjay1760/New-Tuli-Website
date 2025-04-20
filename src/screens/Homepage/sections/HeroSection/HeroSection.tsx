import { UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = ["Features", "About us", "Blog", "Resources"];

  return (
    <header className="w-full bg-[#f8f4f1] py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="mr-8">
            <h1 className="font-['Montserrat',Helvetica] font-extrabold text-4xl">
              <span className="text-[#183ff5]">Tuli Books</span>
            </h1>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="inline-flex items-center justify-center p-4 font-['Montserrat',Helvetica] font-semibold text-[#071d6e] text-base">
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center gap-6">
            <Button className="bg-[#133359] text-white font-['Montserrat',Helvetica] font-semibold rounded-[10px] px-[18px] py-[9px] h-auto">
              Sign up
            </Button>

            <Button
              variant="outline"
              className="bg-white border-[#133359] text-black font-['Montserrat',Helvetica] font-semibold rounded-[10px] px-[18px] py-[9px] h-auto"
            >
              Book a demo
            </Button>

            <div className="flex items-center">
              <UserIcon className="h-5 w-5 text-[#071d6e]" />
            </div>
          </div>
        </div>

        {/* Hero content would go here - visible in the image but not in the original code */}
       
      </div>
    </header>
  );
};
