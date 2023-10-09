import { CarrosselEncomenda } from "./microComponents/CarrosselEncomenda";

export function SectionEncomenda() {
  return (
    <section className="py-10 px-6 md:pl-20 md:py-20 md:pr-0 bg-stone-100 flex flex-col gap-10 font-roboto">

      {/* HeadLine  com separator*/}
      <div className="flex flex-col gap-[22px]">

        <h2 className="text-[32px] font-inter leading-[48px] font-medium text-[#3C3A1E]">
          Alguns de nossos trabalhos <br /> sob encomenda
        </h2>

        <div className="h-[2px] md:h-[4px] w-[160px] bg-[#DDA35D]" />

        <span className="text-xl text-stone-600 font-medium">
          Descubra a elegância atemporal da coleção de móveis sob medida da Tábua Gaúcha. <br />
          Encomende agora mesmo seu móvel personalizado conforme sua preferência!
        </span>


      </div>

      {/* Carrossel Component */}

      <div>
        <CarrosselEncomenda />
      </div>


      {/* End Section */}

      <div className="pt-4 flex flex-col gap-10">


        <button className="rounded-[4px] md:w-[305px] py-3 bg-green-700 shadow-md px-[10px] flex items-center justify-center text-white font-semibold text-xl leading-[28px] " type="submit">
          Encomendar personalizado
        </button>
      </div>


    </section>
  )
}