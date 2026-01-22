import { Lightbulb, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries to create cutting-edge solutions that solve real-world problems."
  },
  {
    icon: Rocket,
    title: "Speed & Quality",
    description: "We deliver products quickly without compromising on quality, security, or user experience."
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Our users are at the heart of everything we do. We build products people love to use."
  }
];

export function About() {
  return (
    <section className="px-6 py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl text-white">Who We Are</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Oimo Technologies wears two hats: we're publishers of apps that help home service pros grow their businesses, 
            and we're experienced developers who partner with entrepreneurs to build their SaaS products from scratch. 
            Whether it's our own tools or yours, we deliver software that works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#E8E580]">
                <value.icon className="w-8 h-8 text-[#1E1E1E]" />
              </div>
              <h3 className="mb-3 text-2xl text-white">{value.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}