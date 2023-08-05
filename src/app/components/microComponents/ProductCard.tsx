import Image from "next/image";

interface productCard {
  imageUrl: string
  altImage: string
  description: string
  price: string
  key: number
}

export function ProductCard({ imageUrl, altImage, description, price, key }: productCard) {

  return (
    <div className="w-full flex flex-col" key={key}>
      {/* div Img */}
      <div className="shadow-xl">
        <Image src={imageUrl} alt={altImage} width={400} height={600} className="w-full aspect-square shadow-xl" />
      </div>

      {/* Descrição do produto */}
      <div className="py-[10px] px-[10px] flex justify-between gap-[10px] bg-white shadow-xl">
        <span className="pr-[12px] font-roboto text-base font-normal text-[#3C3A1E] leading-[20px]">
          {description}
        </span>

        {/* preço div */}
        <div className="flex items-start justify-start">
          <span className="font-roboto text-[#3C3A1E] font-medium text-base">
            R$: {price}
          </span>
        </div>

      </div>
    </div>
  )
}