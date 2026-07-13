import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
  const { projectId } = useParams()

  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Project not found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back
        </Link>

        <h1 className="mt-10 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 text-slate-400 text-lg">
          {project.shortDescription}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">
            Business Problem
          </h2>

          <p className="mt-4 text-slate-400">
            {project.problem}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">
            Solution
          </h2>

          <p className="mt-4 text-slate-400">
            {project.solution}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">
            Key Insights
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-400">
            {project.insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-black"
          >
            View GitHub
          </a>
        )}
      </div>
    </main>
  )
}

export default ProjectDetails