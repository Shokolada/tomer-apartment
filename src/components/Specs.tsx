export default function Specs() {
  const specs = [
    { label: "חדרים", value: "3.5", icon: "🛏️" },
    { label: "שטח", value: '~78 מ"ר', icon: "📐" },
    { label: "מצב", value: "משופצת", icon: "✨" },
    { label: "ריהוט", value: "מרוהטת במלואה", icon: "🛋️" },
    { label: "חניה", value: "חניה צמודה", icon: "🚗" },
    { label: "חוזה", value: "מינימום 12 חודשים", icon: "📋" },
    { label: "מחיר", value: "4,500 ₪/חודש", icon: "💰" },
    { label: "כניסה", value: "מיידית", icon: "🔑" },
  ];

  return (
    <section id="specs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient-text">פרטי הנכס</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-dark-card border border-dark-border rounded-2xl p-5 text-center hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{spec.icon}</div>
              <div className="text-gold font-bold text-lg mb-1">
                {spec.value}
              </div>
              <div className="text-text-secondary text-sm">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
