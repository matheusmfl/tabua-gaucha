import Image from "next/image"
import iconMadeira from '../../assets/iconsProduct/madeira.svg'
import iconDimensao from '../../assets/iconsProduct/dimensao.svg'
import iconPeso from '../../assets/iconsProduct/peso.svg'

interface ProductDescriptionProps {
  price: string,
  madeira: string,
  dimensao: string,
  peso: string
}

export function ProductDescription({ price, madeira, dimensao, peso }: ProductDescriptionProps) {
  return (
    <section className="py-3 flex flex-col gap-3">
      <div className="py-3">
        <span className="font-inter font-medium text-[32px] text-green-700">R$ {price},00</span>
      </div>
      {/* Div descriptions */}
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex gap-[10px] items-center font-inter text-base font-medium leading-[20px] text-[#3C3A1E]">
          <Image src={iconMadeira} alt="Tipo de madeira: " />
          {madeira}
        </div>

        <div className="flex gap-[10px] items-center font-inter text-base font-medium leading-[20px] text-[#3C3A1E]">
          <Image src={iconDimensao} alt="Dimensões do produto: " />
          {dimensao}
        </div>

        <div className="flex gap-[10px] items-center font-inter text-base font-medium leading-[20px] text-[#3C3A1E]">
          <Image src={iconPeso} alt="Peso do produto: " />
          {peso}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-[10px] py-3">

          <button className="text-center py-3 shadow-lg hover:scale-105 uppercase text-xl bg-green-700 text-slate-50 rounded-[4px] w-full">
            COMPRAR
          </button>

          <button className="text-center py-3 shadow-lg hover:scale-105 uppercase text-xl bg-green-700 text-slate-50 rounded-[4px] w-full">
            COMPRAR
          </button>

        </div>

      </div>
    </section>
  )
}