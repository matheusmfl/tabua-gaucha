import Image from "next/image";
import encomenda from '../assets/sob-encomenda-img.png'

export function SectionSobDemanda() {
  return (
    <section className="py-20 px-6 flex flex-col gap-10">
      {/* Chamada */}
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-center font-roboto text-[#3C3A1E] text-4xl font-normal leading-[51px]">
          Projetos sob demanda
        </h2>

        <div className="w-[160px] h-[1px] bg-[#3C3A1E]" />
      </div>

      {/* Textos */}
      <div>
        <h3 className="font-roboto text-xl font-normal leading-[32px] text-stone-600 pr-[2px]">
          Sinta-se a vontade par escolher o tipo de madeira, dimensões e acabamento que sua peça vai ter, nossos projetistas irão acompanhar em todas as etapas para auxiliar na escolha das melhores peças para a sua necessidade de design.
        </h3>
      </div>

      {/* Imagem */}
      <div>
        <Image src={encomenda} alt="Foto de madeiras com suas características" className="w-full" />
      </div>
    </section>
  )
}