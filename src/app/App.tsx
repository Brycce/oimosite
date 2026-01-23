import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Contact } from "@/app/components/Contact";
import { AnimationProvider } from "@/app/components/AnimationProvider";

export default function App() {
  return (
    <AnimationProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Contact />
      </div>
    </AnimationProvider>
  );
}