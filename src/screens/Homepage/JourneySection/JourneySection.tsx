import React from 'react'
const steps = [
    {
      color: "bg-yellow-400",
      title: "Book a call",
      description: "Our experts will discuss your business, your needs, and structure our agreement."
    },
    {
      color: "bg-red-500",
      title: "Dedicated Onboarding",
      description: "We'll schedule a kick off call, get access to your financial tools, and open a whatsapp channel for 24/7 communication."
    },
    {
      color: "bg-cyan-800",
      title: "Sit back and relax",
      description: "We'll hit the ground running and own your back office finances so that you can focus on growing your business."
    }
  ];

const JourneySection = () => {
  return (
    <section className='md:flex '>
         <div>
        <h2 className="text-3xl md:text-4xl text-blue-900 mb-8">
          Launch Your Journey:
          <br />
          Get Started With Web & Cloud Solutions
        </h2>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className={`w-20 h-12 mt-1 rounded-lg ${step.color}`} />
              <div>
                <h4 className="font-semibold text-md text-gray-800">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src='/unlock-potential.png'/>
    </section>
  )
}

export default JourneySection