import Image from "next/image";
import productImage from '../../assets/product-img.jpeg'

export function ProductCard() {
  return (
    <div className="w-full flex flex-col">
      {/* div Img */}
      <div>
        <Image src={productImage} alt="Imagem do produto" width={400} height={600} className="w-full h-[456px]" />
      </div>

      {/* Descrição do produto */}
      <div className="py-[10px] px-[10px] flex justify-between gap-[10px] bg-white shadow-xl">
        <span className="pr-[12px] font-roboto text-base font-normal text-[#3C3A1E] leading-[20px]">
          Mesinha de canto com suporte metálico 70x45x40 cm, acabamento verniz cerejeira
        </span>

        {/* preço div */}
        <div className="flex items-start justify-start">
          <span className="font-roboto text-[#3C3A1E] font-medium text-base">
            R$: 1.200
          </span>
        </div>

      </div>
    </div>
  )
}