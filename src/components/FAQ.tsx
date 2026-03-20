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
    <section id="faq" className="py-20 px-4 bg-dark-card/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient-text">שאלות ותשובות</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/40 mx-auto mb-6" />
          <p className="text-text-secondary text-lg">
            כל מה שרציתם לשאול...
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/20 transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-right"
              >
                <span
                  className={`font-bold text-lg pr-0 pl-4 transition-colors duration-300 ${
                    openIndex === i ? "text-gold" : "text-text-primary"
                  }`}
                >
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "text-gold rotate-180" : "text-gold"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`faq-content ${openIndex === i ? "open" : ""}`}
              >
                <p className="px-5 pb-5 text-text-secondary leading-relaxed">
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
