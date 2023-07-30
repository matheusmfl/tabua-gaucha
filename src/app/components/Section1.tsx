import { GlasmorphismCards } from "./microComponents/GlasmorphismCards";

export function Section1() {
  return (
    <section className="bg-section-1 flex flex-col py-10 px-6">
      {/* Div texto */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="font-roboto text-[32px] font-normal text-white">
          Nossa essência
        </h2>
        <div className="w-[160px] h-[1px] " />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-12 pt-[60px]">
        <GlasmorphismCards title="Peças de madeira maciça de longa duração e sem necessidade de manutenção" />
        <GlasmorphismCards title="Autenticidade em cada peça devido ao design natural e único promovido pela natureza de cada peça" />
        <GlasmorphismCards title="Temos peças a pronta entrega e desenvolvemos projetos personalizados sob demanda para todo o Brasil" />
      </div>

    </section>
  )
}