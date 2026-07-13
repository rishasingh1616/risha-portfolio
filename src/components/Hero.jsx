const skills = ['Power BI', 'SQL', 'Excel', 'Python']

const stats = [
  {
    value: '3+',
    label: 'Featured Projects',
  },
  {
    value: '10+',
    label: 'Analytics Skills',
  },
  {
    value: '2026',
    label: 'Expected Graduation',
  },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 left-[-8rem] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex min-h-[70vh] items-center">
          <div className="hero-content max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Open to Data Analyst opportunities
            </div>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
              Data Analyst Portfolio
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
              Hi, I&apos;m
              <span className="block text-cyan-400">
                Risha Singh.
              </span>
            </h1>

            <h2 className="mt-8 max-w-4xl text-2xl font-medium leading-snug text-slate-300 md:text-4xl">
              I don&apos;t just build dashboards.
              <span className="block text-white">
                I uncover stories hidden in data.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              I use Power BI, SQL, Excel, and Python to transform raw data into
              clear insights that support better business decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <a
                href="https://github.com/rishasingh1616"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/risha-singh-a32b4735a/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:rishasingh3010@gmail.com"
                className="transition hover:text-cyan-400"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid border-y border-slate-800 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-8 ${
                index !== stats.length - 1
                  ? 'border-b border-slate-800 sm:border-b-0 sm:border-r'
                  : ''
              }`}
            >
              <p className="text-3xl font-semibold text-white md:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#projects"
          className="mt-12 flex w-fit items-center gap-4 text-sm text-slate-500 transition hover:text-cyan-400"
        >
          <span className="flex h-10 w-6 justify-center rounded-full border border-slate-700 pt-2">
            <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>

          Scroll to explore
        </a>
      </div>
    </section>
  )
}

export default Hero