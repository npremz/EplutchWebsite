const choices = [
  {
    title: 'Froggy',
  },
  {
    title: 'Piou',
  },
  {
    title: 'Teddi',
  },
]

function Choice() {
  return (
    <section className="mt-16 md:mt-50">
      <div className="flex flex-col items-center">
        <h2 className="font-serif text-[2.5rem] md:text-[5rem] leading-none text-text max-w-[250px] md:max-w-[500px] text-center">Choisissez votre compagnon anti-stress préféré</h2>
        <p className="mt-8 md:mt-10 font-mono text-xs uppercase text-text text-center max-w-[280px]">
          Trois personnages craquants, trois personnalités. Lequel adopterez-vous ?
        </p>
      </div>

      <div className="mt-16 md:mt-20 flex flex-col">
        {choices.map((choice, index) => (
          <div key={choice.title}>
            <button type="button" className="w-full text-left">
              <p
                className={`font-serif text-[8rem] md:text-[19rem] leading-none text-text text-center ${
                  index === 0 ? 'pb-4 md:pb-12' : ''
                }`}
              >
                {choice.title}
              </p>
            </button>
            {index < choices.length - 1 ? <hr className="my-3 md:my-8 h-px border-0 bg-lines" /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Choice
