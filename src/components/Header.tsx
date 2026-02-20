function Header() {
  return (
    <header className="sticky mx-auto flex max-w-[425px] items-center justify-between">
      <a
        href="/"
        aria-label="Home"
        className="inline-flex w-full items-center rounded-[0.625rem] bg-blue p-5"
      >
        <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
      </a>
      <button
        type="button"
        aria-label="Open menu"
        className="relative inline-flex items-center justify-center overflow-hidden rounded-[0.625rem] bg-blue px-[1.625rem] py-[2rem]"
      >
        <span className="dashed-divider absolute left-0" />
        <span className="flex flex-col gap-1">
          <span className="h-0.5 w-6 rounded bg-deep-blue" />
          <span className="h-0.5 w-6 rounded bg-deep-blue" />
          <span className="h-0.5 w-6 rounded bg-deep-blue" />
        </span>
      </button>
    </header>
  )
}

export default Header
