import HeroScene3D from './HeroScene3D'

function Hero() {
  return (
    <section className="relative pt-4 md:pt-56 lg:pt-66 xl:pt-16 2xl:pt-50">
      <HeroScene3D />
      <div className="relative z-10 flex flex-col justify-between md:h-135 xl:h-100 2xl:h-135">
        <span className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 rounded-tl-[10px] border-l border-t border-lines" />
        <span className="pointer-events-none absolute right-0 top-0 z-20 h-5 w-5 rounded-tr-[10px] border-r border-t border-lines" />
        <span className="pointer-events-none absolute bottom-0 left-0 z-20 h-5 w-5 rounded-bl-[10px] border-b border-l border-lines" />
        <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-5 w-5 rounded-br-[10px] border-b border-r border-lines" />
        <div aria-hidden="true" />
        <h1 className="relative z-10 p-4 pt-6 md:p-0 md:pb-6 lg:pb-8 font-serif text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.75rem] 2xl:text-[14.5rem] leading-none tracking-[-0.01em] text-text">
          <span className="md:hidden">
            Pressez,<br />Souriez,<br />Déstressez.
          </span>

          <span className="hidden md:grid md:grid-cols-2 md:items-start">
            <span className="text-left">Pressez,</span>
            <span className="text-right">Souriez,</span>
            <span className="col-span-2 text-right">Déstressez.</span>
          </span>
        </h1>
      </div>
      <hr className="relative z-10 mt-5 md:mt-12 lg:mt-16 2xl:mt-20 dashed-divider-horizontal" />
      <div className="relative z-10 md:flex md:justify-between md:items-center md:mt-12 lg:mt-16 xl:mt-20">
        <p className="mt-5 md:m-0 font-mono text-sm uppercase md:max-w-[315px] lg:max-w-[400px]">Nos boules anti-stress en forme d'animaux mignons allient douceur, ergonomie et matériaux éco-responsables. Le bien-être n'a jamais été aussi adorable.</p>
        <a className="mt-5 md:m-0 block font-mono uppercase text-white bg-black p-6 text-center rounded-md md:w-fit md:px-20 lg:px-24">Essayez maintenant</a>    
      </div>
    </section>
  )
}

export default Hero
