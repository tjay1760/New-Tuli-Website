import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BlogSection = (): JSX.Element => {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      title: "Blog Title",
      image: "/rectangle-9.png",
    },
    {
      id: 2,
      title: "Blog Title",
      image: "/rectangle-9-2.png",
    },
    {
      id: 3,
      title: "Blog Title",
      image: "/rectangle-9-3.png",
    },
    {
      id: 4,
      title: "Blog Title",
      image: "/rectangle-9-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] py-16 w-full">
      <header className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-2 relative">
          <div className="relative w-full text-center">
            <div className="relative w-20 h-px mx-auto">
              <img className="w-20 h-[3px]" alt="Line" src="/line-9.svg" />
            </div>
            <h2 className="mt-2 [font-family:'Montserrat',Helvetica] text-x-505050 font-bold text-[40px] text-center tracking-[0] leading-[48.0px]">
              Blog
            </h2>
          </div>
        </div>
        <p className="[font-family:'Montserrat',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[28.8px]">
          Recommended Blog Posts
        </p>
      </header>

      <div className="w-full max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="w-full shadow-[0px_4px_4px_#00000040] rounded-[10px] overflow-hidden"
            >
              <div className="relative h-[274px]">
                <img
                  className="w-full h-full object-cover"
                  alt={`Blog post ${post.id}`}
                  src={post.image}
                />
              </div>
              <CardContent className="p-0">
                <div className="h-[99px] bg-[#f1f1f1] rounded-[0px_0px_10px_10px] flex items-center justify-center">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-[#504f4f] text-[27px] tracking-[0] leading-[normal]">
                    {post.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
