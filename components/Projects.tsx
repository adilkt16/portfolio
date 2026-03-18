const projects = [
  {
    image: '/placeholder-project.jpg',
    title: 'Epoclip',
    description:
      'A web utility platform which helps to clip certain parts of the videos alone and share them. Web + Chrome Extension',
    technologies: ['Typescript', 'Next.js', 'HTML & CSS'],
    link: 'https://epoclip.com',
    stats: null,
  },
  {
    image: '/placeholder-project.jpg',
    title: 'Eventgrid.info',
    description:
      'Plan, publish, and track every college event in one app.',
    technologies: ['React Native', 'Firebase'],
    link: 'https://eventgrid.info',
    stats: null,
  },
  {
    image: '/placeholder-project.jpg',
    title: 'Instagram Tool for Export View',
    description:
      'Upload your Instagram data export to browse and download your media. Everything runs locally in your browser — your data never leaves your device.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vibe Coding'],
    link: 'https://epoclip.com/iaas',
    stats: null,
  },
  {
    image: '/placeholder-project.jpg',
    title: 'AltRise - Alarm App',
    description:
      'AltRise Clock: The Alarm That Actually Wakes You Up.',
    technologies: ['Kotlin'],
    link: 'https://play.google.com/store/apps/details?id=com.altrise.clockapp&pcampaignid=web_share',
    stats: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-background-light lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      href={/^https?:\/\//i.test(project.link) ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
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
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-foreground-muted">
                    {project.description}
                  </p>
                  {project.stats && (
                    <p className="mt-2 text-xs font-semibold text-primary">{project.stats}</p>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="rounded border-2 border-foreground-accent/10 bg-background-light overflow-hidden aspect-video flex items-center justify-center">
                    <span className="text-foreground-accent text-sm">Image</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group"
            aria-label="View Full Project Archive"
            href="https://github.com/adilkt16"
            target="_blank"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                View Full Project{' '}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                  Archive
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
