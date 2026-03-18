const articles = [
  {
    year: '2026',
    title: 'Best Practices for Accessible Web Development',
    description: 'A comprehensive guide to building accessible websites that work for everyone.',
    link: '#',
    date: 'Mar 15',
    image: '/placeholder-article.jpg',
  },
  {
    year: '2024',
    title: 'Building Modern React Applications',
    description: 'Learn the latest patterns and best practices for React development.',
    link: '#',
    date: 'Dec 10',
    image: '/placeholder-article.jpg',
  },
  {
    year: '2024',
    title: 'Mastering TypeScript',
    description: 'A deep dive into TypeScript features that will make you a better developer.',
    link: '#',
    date: 'Aug 22',
    image: '/placeholder-article.jpg',
  },
  {
    year: '2020',
    title: 'Introduction to Next.js',
    description: 'Getting started with the React framework for production.',
    link: '#',
    date: 'May 8',
    image: '/placeholder-article.jpg',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Writing
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {articles.map((article, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-background-light lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      href={article.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${article.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {article.title}
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
                    {article.description}
                  </p>
                  <p className="mt-2 text-xs text-foreground-accent">
                    {article.year} · {article.date}
                  </p>
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
      </div>
    </section>
  );
}
