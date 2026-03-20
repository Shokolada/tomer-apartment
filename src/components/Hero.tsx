"use client";

const WHATSAPP_URL =
  "https://wa.me/972522557030?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%93%D7%99%D7%A8%D7%94%20%D7%91%D7%A4%D7%AA%D7%97%20%D7%AA%D7%A7%D7%95%D7%95%D7%94";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/apartment-1.jpg)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-shimmer" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6 px-5 py-2 border border-gold/40 rounded-full">
          <span className="text-gold text-sm font-light tracking-wide">
            להשכרה מיידית
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="gold-gradient-text">דירת אולפן</span>
          <br />
          <span className="text-text-primary">להשכרה בפתח תקווה</span>
        </h1>

        <p className="text-text-secondary text-lg md:text-xl mb-2">
          נחמן מברסלב 20, פתח תקווה
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl md:text-4xl font-bold text-gold">
            4,500 ₪
          </span>
          <span className="text-text-secondary text-lg">/ חודש</span>
        </div>

        {/* Quick specs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: "חדרים", value: "3.5" },
            { label: 'מ"ר', value: "~78" },
            { label: "מרוהטת", value: "✓" },
            { label: "חניה", value: "✓" },
          ].map((spec) => (
            <div
              key={spec.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3"
            >
              <div className="text-gold font-bold text-lg">{spec.value}</div>
              <div className="text-text-secondary text-sm">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            שלח הודעה בוואטסאפ
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gold/50 hover:border-gold text-gold font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-gold/10"
          >
            צפה בתמונות
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
