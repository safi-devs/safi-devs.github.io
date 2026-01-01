const facts = [
  "I speak fluent JavaScript… and sometimes English! 😆",
  "50% debugging, 50% coding. The struggle is real!💻",
  "break it, then fix it. That’s the superpower!🛠️",
];

const FunFacts = () => {
  return (
    <section className="container mx-auto py-8 relative z-10">
      <h2 className="text-2xl font-bold mb-6">Fun-facts</h2>
      <div className="flex flex-wrap gap-3">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2.5 
                       bg-[var(--color-surface)] 
                       border border-dashed border-[var(--color-border)] 
                       rounded-[var(--radius)]
                       hover:border-[var(--color-highlight)] transition-all cursor-default"
          >
            <span className="text-[var(--color-foreground)] font-bold text-[15px]">
              {fact}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
