"use client";

import { useState } from "react";

const faqs = [
  {
    q: "מה כוללת הדירה?",
    a: "הדירה מרוהטת במלואה וכוללת: סלון מאובזר, מטבח מאובזר עם כל המכשירים, חדר שינה עם מיטה זוגית, חדר שינה/עבודה נוסף, מזגנים, דוד שמש, מכונת כביסה, וכל מה שצריך למגורים מיידיים.",
  },
  {
    q: "האם יש חניה?",
    a: "כן, לדירה יש חניה צמודה פרטית.",
  },
  {
    q: "מה אורך החוזה המינימלי?",
    a: "חוזה מינימלי של 12 חודשים.",
  },
  {
    q: "האם מותר לגדל חיות מחמד?",
    a: "ניתן לדון בכך, יש לפנות ישירות בוואטסאפ לבירור.",
  },
  {
    q: "איפה הדירה ממוקמת בדיוק?",
    a: "הדירה ממוקמת ברחוב נחמן מברסלב 20, פתח תקווה. אזור שקט ונגיש, בקרבה לתחבורה ציבורית, קניונים ושירותים.",
  },
  {
    q: "מה המחיר כולל?",
    a: "המחיר הוא 4,500 ₪ לחודש. התשלומים עבור ארנונה, חשמל, מים, גז וועד בית הם בנפרד ועל חשבון השוכר.",
  },
  {
    q: "איך אפשר לתאם ביקור?",
    a: "ניתן ליצור קשר ישירות בוואטסאפ או בטלפון: 052-2557030. נשמח לתאם ביקור בדירה בתיאום מראש.",
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
            <span className="gold-gradient-text">שאלות נפוצות</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/40 mx-auto" />
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
                <span className="font-bold text-text-primary text-lg pr-0 pl-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
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
