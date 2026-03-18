const aboutParagraphs = [
  'I\'d describe myself as a generalist - not because I couldn\'t pick a lane, but because I genuinely never wanted to. My curiosity has always pulled me across tech, management, economics, and a few other rabbit holes. I find it fascinating how ideas from one domain quietly solve problems in another.',
  'Just wrapped up my BCA, but college for me was more about the ecosystem than the curriculum. Competed in inter-college events, came back with some wins, and ran communities like Eventgrid, IEDC, Leaders Academy, and YFYD.org - Eventgrid grew to 1,000+ members, which I\'m pretty proud of.',
  'Outside of that, I read a lot and play sports to reset.',
  'Still figuring things out. But I think that\'s kind of the point.',
];

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-foreground-accent/20 bg-gradient-to-br from-background-light/80 via-background/90 to-background p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-foreground-accent/15 blur-2xl" />

        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground-accent">
          About
        </p>
        <blockquote className="border-l-2 border-primary/70 pl-4 text-sm leading-relaxed text-foreground-muted sm:text-[15px]">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? '' : 'mt-4'}>
              {paragraph}
            </p>
          ))}
        </blockquote>
      </div>
    </section>
  );
};

export default About;
