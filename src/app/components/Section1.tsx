import { GlasmorphismCards } from "./microComponents/GlasmorphismCards";

export function Section1() {
  return (
    <section className="bg-section-1 flex flex-col py-10 px-6">
      {/* Div texto */}
      <div className="flex flex-col gap-3 items-left justify-center">
        <h2 className="font-inter text-[32px] font-normal text-white">
          Encomende seu móvel rústico
        </h2>
        <div className="w-[160px] h-[1px] bg-[#DDA35D] " />

        <span className="font-inter text-[24px] font-semibold leading-[32px] text-white">
          Personalize cada elemento do seu móvel
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-12 pt-[60px]">
        <GlasmorphismCards title="Madeira" subtitle="Escolha a madeira que compõe o design do seu ambiente com nossas opções tamanhos e cores variadas" />
        <GlasmorphismCards title="Ferragens e marcenarias" subtitle="De metal ou madeira, conte com a nossa ampla lista de ferragens e modelos de marcenaria" />
        <GlasmorphismCards title="Acabamento" subtitle="Escolha o verniz mais apropriado para o seu uso, com opções de cor, brilho ou para ambientes externos" />
      </div>

    </section>
  )
}