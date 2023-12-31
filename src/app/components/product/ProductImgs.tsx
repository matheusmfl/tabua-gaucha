'use client'
import Image from "next/image";
import { useState } from "react";


interface Images {
  url: string
  alt: string
}
interface Product {
  mainImage: string
  thumbs: Images[]
}

export function ProductImgs({ mainImage, thumbs }: Product) {
  const [currentImage, setCurrentImage] = useState(mainImage);

  const handleThumbnailClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <main className="flex flex-col gap-[20px]">
      <div className="rounded w-full">
        <Image src={`${currentImage}`} style={{ transition: "opacity 0.8s ease-in-out" }} alt="Alternative" width={400} height={280} className="rounded aspect-square object-cover h-[280px]" />
      </div>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
        <div className="w-[91px] h-full aspect-video cursor-pointer relative" onClick={() => handleThumbnailClick(mainImage)}>
          <Image src={mainImage} style={{ transition: "opacity 0.8s ease-in-out" }} className="rounded-lg object-cover absolute h-[82px]" alt="imagem principal" width={400} height={400} />
        </div>
        {thumbs &&
          thumbs.map((image, index) => (
            <div key={index}
              className="w-[91px] h-[82px] aspect-video cursor-pointer relative "
              onClick={() => handleThumbnailClick(image.url)}>
              <Image src={image.url} alt={image.alt} fill className="rounded-lg object-cover absolute" style={{ transition: "opacity 0.3s ease-in-out" }} />
            </div>
          ))}
      </div>
    </main>
  )
}