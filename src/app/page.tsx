import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Gallery />
      <Specs />
      <FAQ />
      <Location />
      <Contact />

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-dark-border text-center">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} כל הזכויות שמורות
        </p>
      </footer>
    </main>
  );
}
