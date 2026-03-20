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
      {/* Dark overlay matching original #575050 at 93% opacity + brightness 82% */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(87, 80, 80, 0.93)",
          filter: "brightness(82%)",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-[15%] py-24 max-w-5xl mx-auto">
        {/* Main title with white border box */}
        <div className="inline-block border-2 border-white px-6 sm:px-8 py-5 sm:py-8 mb-10 sm:mb-12">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-black text-white leading-tight"
            style={{ textShadow: "0px 0px 10px #151515" }}
          >
            דירת אולפן להשכרה בפתח תקוה
          </h1>
        </div>

        {/* Spacer */}
        <div className="h-10 sm:h-12" />

        {/* WhatsApp button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-10 sm:mb-12 hover:opacity-90 transition-opacity"
        >
          <div className="bg-[#25D366] text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-md flex items-center gap-3 justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </div>
        </a>

        {/* Subtitle */}
        <h2
          className="text-2xl sm:text-3xl md:text-[40px] text-white font-normal mb-4"
          style={{ textShadow: "0px 0px 10px #151515" }}
        >
          לגור בדירת אולפן מפנקת
        </h2>

        {/* Price */}
        <h2
          className="text-2xl sm:text-3xl md:text-[40px] text-white font-normal mb-8"
          style={{ textShadow: "0px 0px 10px #151515" }}
        >
          4500 ש&quot;ח / חודש
        </h2>

        {/* Description */}
        <p
          className="text-lg sm:text-xl md:text-[28px] text-white font-light leading-relaxed max-w-3xl mx-auto"
          style={{ textShadow: "0px 0px 10px #151515" }}
        >
          אולפן מחולק לחדר הקלטה וקונטרול, אזור המתנה מעוצב, מטבחון, שרותי
          אורחים ויחידת דיור מפנקת
        </p>
      </div>
    </section>
  );
}
