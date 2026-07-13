function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 md:px-16 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
            I am open to Data Analyst internships, entry-level opportunities,
            freelance projects, and professional collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-2xl font-bold mb-6">
              Let&apos;s Connect
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              Have an opportunity, project, or question? You can contact me
              through email, LinkedIn, or GitHub.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:rishasingh3010@gmail.com"
                className="flex items-center gap-4 bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-cyan-400 transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium break-all">
                    rishasingh3010@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-cyan-400 transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 font-bold">
                  in
                </div>

                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="text-white font-medium">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/rishasingh1616"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-cyan-400 transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 font-bold">
                  GH
                </div>

                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white font-medium">
                    github.com/rishasingh1616
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form
              action="mailto:rishasingh3010@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-slate-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-slate-300 mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-slate-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-slate-950 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact