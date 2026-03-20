export default function Description() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "מרוהטת במלואה",
      desc: "הדירה מאובזרת ומרוהטת ברמה גבוהה, מוכנה למגורים מיידיים",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "משופצת ומעוצבת",
      desc: "שיפוץ מלא, עיצוב מודרני ונקי עם גימורים ברמה גבוהה",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: "חניה פרטית",
      desc: "מקום חניה צמוד לדירה, ללא צורך בחיפוש חניה",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "מיקום מעולה",
      desc: "קרבה לתחבורה ציבורית, קניונים, פארקים ומרכזי קניות",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient-text">אודות הדירה</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/40 mx-auto mb-6" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            דירת אולפן מרווחת ויוקרתית בפתח תקווה, 3.5 חדרים על שטח של כ-78
            מ&quot;ר. הדירה עברה שיפוץ מקיף ומאובזרת במלואה — מוכנה למגורים
            מיידיים. מינימום 12 חודשי חוזה.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 text-gold mb-4 group-hover:bg-gold/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">
                {f.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
