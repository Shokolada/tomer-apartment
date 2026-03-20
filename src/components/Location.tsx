export default function Location() {
  return (
    <>
      {/* Address + Map section */}
      <section className="py-16 px-4">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-3xl sm:text-[45px] font-semibold text-black text-center mb-4">
            כתובת
          </h2>
          <p className="text-center text-text-dark text-lg sm:text-xl mb-8">
            נחמן מברסלב 20, פתח תקווה
          </p>

          {/* Google Map */}
          <div className="w-full">
            <iframe
              src="https://maps.google.com/maps?q=%D7%A0%D7%97%D7%9E%D7%9F%20%D7%9E%D7%91%D7%A8%D7%A1%D7%9C%D7%91%2020%20%D7%A4%D7%AA%D7%97%20%D7%AA%D7%A7%D7%95%D7%95%D7%94&t=m&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מיקום הדירה"
            />
          </div>
        </div>
      </section>

      {/* Waze section */}
      <section className="py-12 px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <h2 className="text-3xl sm:text-[45px] font-semibold text-black mb-8">
            איך להגיע
          </h2>
          <a
            href="https://waze.com/ul?q=%D7%A0%D7%97%D7%9E%D7%9F%20%D7%9E%D7%91%D7%A8%D7%A1%D7%9C%D7%91%2020%20%D7%A4%D7%AA%D7%97%20%D7%AA%D7%A7%D7%95%D7%95%D7%94&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block animate-tada"
          >
            <svg
              className="w-20 h-20 sm:w-28 sm:h-28 text-[#33ccff] mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.54 6.63c.69 1.41 1.07 2.97 1.07 4.6 0 4.41-3.1 8.34-7.56 9.24a8.8 8.8 0 01-1.81.19c-.69 0-1.37-.08-2.02-.22-.6.36-1.37.58-2.17.58-.34 0-.68-.04-1-.12a3.71 3.71 0 01-2.34-1.7c-2.09-1.27-3.59-3.32-4.15-5.73A9.15 9.15 0 01.32 11.5c0-1.16.22-2.27.62-3.3C2.21 4.87 5.43 2.5 9.2 2.5c1.74 0 3.36.49 4.74 1.34A9.3 9.3 0 0120.54 6.63zM8.5 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.48 3.5a.75.75 0 00-.69 1.05C7.34 17.25 9.47 18.5 12 18.5s4.66-1.25 5.67-3.45a.75.75 0 00-.69-1.05H7.02z" />
            </svg>
            <p className="text-text-dark text-lg mt-2 font-medium">
              נווט עם Waze
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
