const WAZE_URL =
  "https://waze.com/ul?ll=32.0853,34.8878&navigate=yes&q=%D7%A0%D7%97%D7%9E%D7%9F%20%D7%9E%D7%91%D7%A8%D7%A1%D7%9C%D7%91%2020%20%D7%A4%D7%AA%D7%97%20%D7%AA%D7%A7%D7%95%D7%95%D7%94";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=%D7%A0%D7%97%D7%9E%D7%9F+%D7%9E%D7%91%D7%A8%D7%A1%D7%9C%D7%91+20+%D7%A4%D7%AA%D7%97+%D7%AA%D7%A7%D7%95%D7%95%D7%94";

export default function Location() {
  return (
    <section id="location" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient-text">מיקום</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/40 mx-auto mb-6" />
          <p className="text-text-secondary text-lg">
            נחמן מברסלב 20, פתח תקווה
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-dark-border mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d34.8878!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z16A15dWX157X3yDXnteR16jXodec15EgMjAsINek16rXlyDXqten15XXlQ!5e0!3m2!1siw!2sil!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="מיקום הדירה"
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#33ccff] hover:bg-[#28b8e8] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.54 6.63c.69 1.41 1.07 2.97 1.07 4.6 0 4.41-3.1 8.34-7.56 9.24a8.8 8.8 0 01-1.81.19c-.69 0-1.37-.08-2.02-.22-.6.36-1.37.58-2.17.58-.34 0-.68-.04-1-.12a3.71 3.71 0 01-2.34-1.7c-2.09-1.27-3.59-3.32-4.15-5.73A9.15 9.15 0 01.32 11.5c0-1.16.22-2.27.62-3.3C2.21 4.87 5.43 2.5 9.2 2.5c1.74 0 3.36.49 4.74 1.34A9.3 9.3 0 0120.54 6.63zM8.5 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.48 3.5a.75.75 0 00-.69 1.05C7.34 17.25 9.47 18.5 12 18.5s4.66-1.25 5.67-3.45a.75.75 0 00-.69-1.05H7.02z" />
            </svg>
            נווט עם Waze
          </a>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-gold/50 hover:border-gold text-gold font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-gold/10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            פתח ב-Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
