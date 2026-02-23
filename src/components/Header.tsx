function Header() {
  return (
    <header className="sticky mx-auto w-full">
      <div className="flex max-w-[425px] mx-auto items-center justify-between lg:hidden">
        <a
          href="/"
          aria-label="Home"
          className="inline-flex min-w-0 flex-1 items-center rounded-[0.625rem] bg-blue p-5"
        >
          <img src="/logoBlue.svg" alt="Logo" className="h-10 w-auto" />
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
      </div>

      <div className="hidden items-center justify-between font-mono uppercase text-base leading-none lg:flex">
        <a href="#collection">Notre collection</a>
        <a href="/" aria-label="Home">
          <img src="/logoBlack.svg" alt="Logo" className="h-10 w-auto" />
        </a>
        <div className="flex items-center gap-16">
          <a href="#pourquoi">Le pourquoi</a>
          <a href="#pack-trio">Pack Trio</a>
        </div>
      </div>
    </header>
  )
}

export default Header
