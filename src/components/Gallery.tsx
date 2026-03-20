import Image from "next/image";

interface RoomSectionProps {
  title: string;
  images: { src: string; alt: string }[];
  layout?: "stacked" | "side-by-side";
}

function RoomSection({ title, images, layout = "stacked" }: RoomSectionProps) {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-3xl sm:text-[45px] font-semibold text-text-dark text-center mb-10">
          {title}
        </h2>

        {layout === "side-by-side" ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {images.map((img) => (
              <div key={img.src} className="w-full sm:w-1/2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="w-[87%] mx-auto h-auto"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {images.map((img, i) => (
              <div key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-[87%] mx-auto h-auto"
                />
                {i < images.length - 1 && (
                  <div className="w-[87%] mx-auto mt-6">
                    <hr className="border-divider" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Gallery() {
  return (
    <div id="gallery">
      {/* האולפן - The Studio */}
      <RoomSection
        title="האולפן"
        images={[
          { src: "/images/apartment-3.jpg", alt: "חדר הקלטות — האולפן" },
          { src: "/images/apartment-6.png", alt: "פינת אוכל וגיטרות" },
        ]}
        layout="stacked"
      />

      {/* יחידת הדיור - The Living Unit */}
      <RoomSection
        title="יחידת הדיור"
        images={[
          { src: "/images/apartment-4.jpg", alt: "חדר שינה" },
          { src: "/images/apartment-8.jpg", alt: "חדר נוסף" },
        ]}
        layout="side-by-side"
      />

      <section className="bg-white py-6 px-4">
        <div className="max-w-[1140px] mx-auto space-y-6">
          {[
            { src: "/images/apartment-7.png", alt: "מטבח ופינת אוכל" },
            { src: "/images/apartment-9.jpg", alt: "סלון" },
            { src: "/images/apartment-10.png", alt: "עיצוב פנים" },
          ].map((img, i) => (
            <div key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-[87%] mx-auto h-auto"
              />
              {i < 2 && (
                <div className="w-[87%] mx-auto mt-6">
                  <hr className="border-divider" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* המקלחת - The Shower */}
      <RoomSection
        title="המקלחת"
        images={[
          { src: "/images/apartment-5.jpg", alt: "מקלחת" },
          { src: "/images/apartment-1.jpg", alt: "חדר רחצה" },
        ]}
        layout="side-by-side"
      />
    </div>
  );
}
