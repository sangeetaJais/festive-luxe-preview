export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-charcoal/10 bg-[#F4EFE6]"
    >
      <div className="mx-auto max-w-3xl px-8 py-16 text-center sm:py-20 md:py-24">
        <h2
          id="about-heading"
          className="font-serif text-2xl uppercase text-[#2C2C2C] sm:text-3xl md:text-4xl"
          style={{ letterSpacing: '3px' }}
        >
          The Zelvora Story
        </h2>

        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-[#2C2C2C]/80 sm:mt-10 sm:text-[15px] sm:leading-7">
          <p>
          ZELVORA LIFESTYLE was conceptualized and engineered by a professional software developer with a vision to merge clean coding standards with premium curated fashion. Driven by a passion for minimal aesthetics, our founder handpicks every piece in this collective to redefine everyday elegance for the modern lifestyle.
          </p>
          <p>
            Every single piece in our collection is curated with absolute
            precision, ensuring top-tier quality and design. From minimalist daily
            studs to statement festive drops, ZELVORA is engineered to elevate your
            personal style journal cleanly and effortlessly.
          </p>
          <p>
            Delivering curated elegance and happiness across your local
            neighborhoods.
          </p>
        </div>
      </div>
    </section>
  )
}
