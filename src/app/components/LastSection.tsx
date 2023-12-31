import Image from "next/image";
import { Cards } from "./microComponents/Cards";
import teste from '../assets/bg-last-section.svg'


export function LastSection() {

  return (
    <section className="px-6 py-20 lg:px-20 flex flex-col gap-10 relative">
      {/* Titulo da sessão */}
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-center font-roboto text-[#3C3A1E] text-4xl font-normal leading-[51px]">
          Garantias e qualidades <br />da Tábua Gaúcha
        </h2>

        <div className="w-[160px] h-[4px] bg-[#DDA35D]" />
      </div>

      {/* Sessão de cards */}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
        <Cards title="qualidade"
          description="Todas as peças da Tábua Gaúcha são feitas de material 
          selecionado para oferecer um produto final da melhor qualidade e longa durabilidade" />
        <Cards title="entrega" description="Entregamos nossos produtos para todo território nacional e para internacional também" />
        <Cards title="compra segura" description="Aceitamos diversas formas de pagamento e também parcelamos em até 6x sem juros no cartão de crédito" />
      </div>

      {/* Botão CTA */}
      <div>
        <button className="rounded-[4px] md:w-[380px] w-full bg-green-500 py-4 shadow-lg text-center text-white font-roboto text-xl font-medium uppercase">
          Faça um orçamento
        </button>
      </div>

      <div className="absolute -z-10 left-0 top-0 md:hidden">
        <Image src={teste} alt='test' />
      </div>
    </section>
  )
}