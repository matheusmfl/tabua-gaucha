import { CarrosselEncomenda } from "./microComponents/CarrosselEncomenda";

export function SectionEncomenda() {
  return (
    <section className="py-10 px-6 md:px-10 md:py-20 bg-stone-100 flex flex-col gap-10 font-roboto">

      {/* HeadLine  com separator*/}
      <div className="flex flex-col gap-[22px]">
        <h2 className="text-[32px] font-inter leading-[48px] font-medium text-[#3C3A1E]">
          Alguns de nossos trabalhos <br /> sob encomenda
        </h2>

        <div className="h-[2px] md:h-[4px] w-[160px] bg-[#DDA35D]" />
      </div>

      {/* Carrossel Component */}

      <div>
        <CarrosselEncomenda />
      </div>


      {/* End Section */}

      <div className="pt-4 flex flex-col gap-10">
        <span className="text-xl text-stone-600 font-medium">
          Gostou dos nossos produtos? Clique no botão abaixo para ver o nosso catálogo completo e solicitar peças sob medida.
        </span>

        <button className="rounded-[4px] md:w-[305px] py-3 bg-green-700 shadow-md px-[10px] flex items-center justify-center text-white font-semibold text-xl leading-[28px] " type="submit">
          Ver catálogo completo
        </button>
      </div>


    </section>
  )
}