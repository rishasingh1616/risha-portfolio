function About() {
  return (
    <section
  id="about"
  className="scroll-mt-24 px-6 md:px-16 py-20 bg-slate-900"
>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-slate-300 leading-8 mb-4">
              I am a BCA final-year student and aspiring Data Analyst with
              hands-on experience in Power BI, SQL, Excel, and Python.
            </p>

            <p className="text-slate-400 leading-8">
              I enjoy cleaning data, creating interactive dashboards,
              identifying trends, and presenting insights in a simple and
              meaningful way.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <p className="mb-3">
              <span className="text-cyan-400 font-semibold">Name:</span>{' '}
              Risha Singh
            </p>

            <p className="mb-3">
              <span className="text-cyan-400 font-semibold">Education:</span>{' '}
              BCA Final Year
            </p>

            <p className="mb-3">
              <span className="text-cyan-400 font-semibold">Role:</span>{' '}
              Aspiring Data Analyst
            </p>

            <p>
              <span className="text-cyan-400 font-semibold">Location:</span>{' '}
              India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About