const experiences = [
  {
    period: '2025 — Present',
    title: 'Co Founder',
    company: 'Epoclip',
    companyUrl: 'https://www.epoclip.com',
    description:
      'Epoclip is a browser utility (extension and webapp) that lets you save and revisit moments from YouTube videos.',
    technologies: ['JavaScript', 'TypeScript', 'Next.js'],
    links: [],
  },
  {
    period: '2023 — 2025',
    title: 'FullStack & App Developer',
    company: 'Fivost',
    companyUrl: '#',
    description:
      'Build and maintain critical components used to construct the entire fullstack of all company works. ',
    technologies: ['JavaScript', 'HTML & CSS',  'React', 'React Native'],
    links: [],
  },
  {
    period: '2024 — 2024',
    title: 'Sales Executive',
    company: 'Stratifie',
    companyUrl: '#',
    description:
      'Created Leads and connected them with the Branding Agency',
    technologies: ['Sales','Other'],
    links: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-background-light lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground-accent sm:col-span-2">
                  {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.title} ·{' '}
                          <span className="inline-block">
                            {experience.company}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-foreground-muted">
                    {experience.description}
                  </p>
                  {experience.links.length > 0 && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {experience.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-foreground-muted hover:text-primary focus-visible:text-primary"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${link.text} (opens in a new tab)`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                            </svg>
                            <span>{link.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group"
            aria-label="View Full Résumé"
            target="_blank"
            href="https://drive.google.com/file/d/1FjsZs-nrLtaJnMW_NdB9oCUReZ5d6yFn/view?usp=sharing"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                View Full{' '}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                  Résumé
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
