import Image from "next/image";

export default function Description() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1140px] mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-[45px] font-semibold text-black mb-2">
            מידע כללי
          </h2>
        </div>

        {/* Two column layout: image left, text right */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/apartment-1.jpg"
              alt="סלון הדירה"
              width={673}
              height={455}
              className="w-[87%] mx-auto h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-right">
            <p className="text-lg sm:text-xl text-text-dark leading-relaxed">
              דירת האולפן ממוקמת ברחוב נחמן מברסלב 20, פתח תקוה. הדירה כוללת
              3.5 חדרים על שטח של כ-78 מ&quot;ר, מרוהטת במלואה ומוכנה למגורים
              מיידיים.
            </p>
            <p className="text-lg sm:text-xl text-text-dark leading-relaxed mt-4">
              האולפן מחולק לחדר הקלטה וקונטרול, אזור המתנה מעוצב, מטבחון, שרותי
              אורחים ויחידת דיור מפנקת. הדירה עברה שיפוץ מקיף עם גימורים
              ברמה גבוהה.
            </p>
            <p className="text-lg sm:text-xl text-text-dark leading-relaxed mt-4">
              מינימום 12 חודשי חוזה. חניה צמודה כלולה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
