const skills = [
  'Power BI',
  'SQL',
  'Microsoft Excel',
  'Python',
  'Pandas',
  'NumPy',
  'DAX',
  'Power Query',
  'Data Cleaning',
  'Data Visualization',
  'MySQL',
  'Git & GitHub',
]

function Skills() {
  return (
    <section
  id="skills"
  className="scroll-mt-24 px-6 md:px-16 py-20 bg-slate-900"
>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills