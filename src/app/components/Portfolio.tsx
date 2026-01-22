import { Card } from "@/app/components/ui/card";
import { ArrowUpRight, Wrench, TrendingUp, Hammer, Brain, Users, Briefcase } from "lucide-react";

const apps = [
  {
    name: "TradesPro Suite",
    description: "Tools for electricians, plumbers, and contractors to win more jobs, close deals faster, and grow their revenue.",
    icon: Wrench,
    color: "bg-blue-50 text-blue-600",
    status: "Live",
    category: "Our Products"
  },
  {
    name: "JobFlow",
    description: "Lead management and follow-up automation built specifically for home service professionals.",
    icon: TrendingUp,
    color: "bg-yellow-50 text-yellow-600",
    status: "Live",
    category: "Our Products"
  },
  {
    name: "LocalBuild.ca",
    description: "Platform connecting homeowners with qualified contractors. Post home improvement jobs and receive competitive bids.",
    icon: Hammer,
    color: "bg-orange-50 text-orange-600",
    status: "Live",
    category: "Client Work"
  },
  {
    name: "DeepPersonality",
    description: "Online assessment platform helping people understand themselves better through clinically validated personality tests.",
    icon: Brain,
    color: "bg-purple-50 text-purple-600",
    status: "Live",
    category: "Client Work"
  },
  {
    name: "Custom SaaS Development",
    description: "Need an app built? We partner with founders and businesses to build custom SaaS products from the ground up.",
    icon: Briefcase,
    color: "bg-green-50 text-green-600",
    status: "Available",
    category: "Services"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl text-white">Our Work</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From our own suite of tools for trades professionals to custom development partnerships with innovative startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-shadow duration-300 group cursor-pointer border-2 hover:border-[#E8E580] bg-slate-800 border-slate-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${app.color}`}>
                  <app.icon className="w-6 h-6" />
                </div>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    app.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : app.status === "Beta"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {app.status}
                </span>
              </div>
              
              <h3 className="mb-3 text-xl flex items-center gap-2 group-hover:text-[#E8E580] transition-colors text-white">
                {app.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {app.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}