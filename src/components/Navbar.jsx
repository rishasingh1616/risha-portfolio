function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-900 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a
          href="/#home"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Risha Singh
        </a>

        <div className="flex items-center gap-5 text-sm text-slate-300 md:gap-8">
          <a
            href="/#projects"
            className="transition hover:text-cyan-400"
          >
            Work
          </a>

          <a
            href="/#about"
            className="transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="/#contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar