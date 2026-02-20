function Header() {
  return (
    <header className="flex items-center justify-between max-w-[425px] mx-auto">
      <a href="/" aria-label="Home" className="inline-flex items-center w-full p-5 bg-(--color-blue) rounded-[0.625rem]">
        <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
      </a>
      <button
        type="button"
        aria-label="Open menu"
        className="inline-flex relative overflow-hidden px-[1.625rem] py-[2rem] bg-(--color-blue) rounded-[0.625rem] items-center justify-center"
      >
        <span className="dashed-divider absolute left-0"></span>
        <span className="flex flex-col gap-1">
          <span className="h-0.5 w-6 rounded bg-[var(--color-deep-blue)]" />
          <span className="h-0.5 w-6 rounded bg-[var(--color-deep-blue)]" />
          <span className="h-0.5 w-6 rounded bg-[var(--color-deep-blue)]" />
        </span>
      </button>
    </header>
  )
}

export default Header
