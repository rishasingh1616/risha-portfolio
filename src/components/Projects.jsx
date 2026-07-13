import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-950 px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Projects built around real business questions.
          </h2>
        </div>

        <div>
          {projects.map((project) => (
            <article
              key={project.id}
              className="border-t border-slate-800 py-16"
            >
              <div className="grid gap-10 md:grid-cols-[180px_1fr]">
                <div>
                  <p className="text-sm tracking-[0.3em] text-slate-500">
                    {project.number}
                  </p>

                  <p className="mt-3 text-sm uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </p>
                </div>

                <div>
                  <h3 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                    {project.shortDescription}
                  </p>

                  <div className="mt-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                      Business Problem
                    </p>

                    <p className="max-w-3xl leading-7 text-slate-400">
                      {project.problem}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-sm font-medium text-cyan-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                    >
                      View Case Study

                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
                      >
                        View GitHub
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects