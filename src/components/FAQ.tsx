"use client";

import { useState } from "react";

const faqs = [
  {
    q: "איפה הדירה ממוקמת?",
    a: "הדירה נמצאת בכתובת נחמן מברסלב 20, פתח תקוה. מספר דקות ממחלף נחשונים כביש 6, וממחלף שעריה — כביש 471. כך שהגישה לדירה וממנה ממש נוחה.",
  },
  {
    q: "מה יש באזור?",
    a: "הדירה בקרבת קניון סירקין וכמה דקות נסיעה ממרכז העיר.",
  },
  {
    q: "האם יש תחבורה ציבורית?",
    a: "כן, יש אוטובוסים סדירים כמעט לכל מקום. תחנת הרכבת של פתח תקוה ממוקמת 10 דקות מהדירה.",
  },
  {
    q: "האם הדירה מתאימה לזוג?",
    a: 'גודל הדירה כ-78 מ"ר והיא מתאימה ליחיד או לזוג.',
  },
  {
    q: "לכמה זמן חוזה השכירות?",
    a: "השכירות היא ל-12 חודשים מינימום.",
  },
  {
    q: "האם ניתן לעבור עם בעלי חיים?",
    a: "אנחנו מאוד אוהבים בעלי חיים, עם זאת הדירה מושקעת מאוד — פרקט/אולפן, על כן לא ניתן לעבור עם בעלי חיים לדירה.",
  },
  {
    q: "האם הדירה מרוהטת?",
    a: "הדירה מרוהטת קומפלט — מקרר, מכונת כביסה, מיקרוגל, פינת ישיבה (ספות, שולחן קפה), שולחן אוכל קטן + שני כסאות. חדר שינה: מיטה זוגית, ארון, שידות. כל התאורה הקיימת בדירה נשארת. בחדר הקונטרול יש שולחן עבודה גדול, ספה, וארון ציוד חיצוני.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-[1140px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-[45px] font-semibold text-black">
            שאלות ותשובות
          </h2>
          <p className="text-text-light-gray text-[15px] font-light mt-2">
            כל מה שרציתם לשאול...
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-10 sm:space-y-[55px] mt-10 sm:mt-[55px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-faq-bg border border-faq-border p-8 sm:p-[45px]"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-right"
              >
                <span
                  className={`font-bold text-xl sm:text-2xl md:text-[34px] leading-tight transition-colors duration-300 ${
                    openIndex === i ? "text-faq-active" : "text-black"
                  }`}
                >
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mr-4 transition-all duration-300 ${
                    openIndex === i
                      ? "text-faq-active rotate-90"
                      : "text-black -rotate-90"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                </svg>
              </button>
              <div
                className={`faq-content ${openIndex === i ? "open" : ""}`}
              >
                <p className="text-black text-base sm:text-lg font-light leading-relaxed mt-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
