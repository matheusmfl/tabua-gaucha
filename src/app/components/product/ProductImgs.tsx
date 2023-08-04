import Image from "next/image";


interface Images {
  url: string
  alt: string
}
interface Product {
  mainImage: string
  thumbs: Images[]
}

export function ProductImgs({ mainImage, thumbs }: Product) {
  return (
    <main className="flex flex-col gap-[10px] px-3">
      <div className="rounded w-full">
        <Image src={`${mainImage}`} alt="Alternative" width={400} height={300} className="rounded" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {thumbs &&
          thumbs.map((image, index) => (
            <div key={index} className="w-[91px] h-[82px] aspect-video cursor-pointer relative">
              <Image src={image.url} alt={image.alt} fill className="rounded-lg absolute" />
            </div>
          ))}
      </div>
    </main>
  )
}