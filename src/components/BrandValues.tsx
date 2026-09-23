const values = [
  {
    title: "Quality",
    text: "MSSQUEEN is presented as a premium footwear house. Every pair is shown with care for finish, proportion, and lasting visual composure.",
  },
  {
    title: "Design",
    text: "The design language is elongated, feminine, and precise — pointed lines, considered ornament, and a signature black-and-gold presence.",
  },
  {
    title: "Authenticity",
    text: "Official information is offered so customers can distinguish genuine MSSQUEEN communication from unofficial sources.",
  },
  {
    title: "Craftsmanship",
    text: "Attention rests on silhouette, detailing, and presentation. The brand values a refined result over excess decoration.",
  },
];

export function BrandValues() {
  return (
    <section className="bg-[#070707] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-brand text-xs tracking-[0.4em] text-gold uppercase">
          Brand Values
        </p>
        <h2 className="mt-4 text-center font-display text-4xl text-gold md:text-5xl">
          What Defines the House
        </h2>
        <div className="mx-auto mt-5 h-px w-28 bg-gold" />

        <ul className="mt-16 grid gap-px bg-gold/25 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title} className="bg-[#070707] px-8 py-12">
              <h3 className="font-display text-3xl text-gold">{value.title}</h3>
              <div className="mt-4 h-px w-16 bg-gold/80" />
              <p className="mt-6 font-body text-xl leading-relaxed text-gold-muted">
                {value.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
