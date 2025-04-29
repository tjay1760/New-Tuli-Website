import React from 'react'
const services = [
    {
      title: "Invoicing",
      description:
        "Create polished invoices with the click of a button. From adding your company logo to changing fonts, customize invoice templates to reflect your brand.",
      icon: "/invoicing.png",
    },
    {
      title: "Bookkeeping",
      description:
        "Spend more time building your business, not on your books. Flexible bookkeeping that grows alongside your business.",
      icon: "/bookeeping.png",
    },
    {
      title: "Tax Filling",
      description:
        "File your taxes locally and globally putting your government tax filling compliant using local and global experts.",
      icon: "/tax-filing.png",
    },
    {
      title: "Expert Advisors",
      description:
        "Connect with our expert advisors in your local language to support the growth and profitability of your business.",
      icon: "/expert-advisors.png",
    },
  ];
const OurServicesSection = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 w-2/3 mx-auto">
      One Platform That Has All The Features Your Business Needs To Grow
    </h2>
    <div className="flex gap-2">
      {services.map((service) => (
        <div key={service.title} className="shadow-2xl rounded-md">
          <div className="flex flex-col items-center p-6">
            <img className="text-4xl mb-4" src={service.icon} />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="mt-10 bg-green-600 px-6 py-2 rounded-sm font-medium hover:bg-green-600">
      Get started Today
    </button>
  </section>

  )
}

export default OurServicesSection