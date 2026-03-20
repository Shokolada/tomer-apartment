import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Location />
      <Description />
      <Gallery />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer
        className="py-6 px-4 text-center"
        style={{ backgroundColor: "rgba(122, 122, 122, 0.33)" }}
      >
        <p className="text-black text-xs tracking-wider">
          @ כל הזכויות שמורות
        </p>
      </footer>
    </main>
  );
}
