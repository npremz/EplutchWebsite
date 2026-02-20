function Hero() {
  return (
    <section className="mt-4">
      <div className="relative overflow-hidden">
        <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 rounded-tl-[10px] border-l border-t border-lines" />
        <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 rounded-tr-[10px] border-r border-t border-lines" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 rounded-bl-[10px] border-b border-l border-lines" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 rounded-br-[10px] border-b border-r border-lines" />
        <h1 className="p-4 pt-6 font-serif text-[4rem] leading-none tracking-[-0.01em] text-text">
          Pressez,<br/>Souriez,<br/>Déstressez.
        </h1>
      </div>
      <hr className="mt-5 dashed-divider-horizontal" />
      <p className="mt-5 font-mono text-sm uppercase">Nos boules anti-stress en forme d'animaux mignons allient douceur, ergonomie et matériaux éco-responsables. Le bien-être n'a jamais été aussi adorable.</p>
      <a className="mt-5 block font-mono uppercase text-white bg-black p-6 text-center rounded-md">Try it now</a>    
    </section>
  )
}

export default Hero
