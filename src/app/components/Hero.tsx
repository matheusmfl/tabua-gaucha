import Image from "next/image";
import heroImg from '../assets/hero-img.png'

export function Hero() {
  return (
    <main className="pt-10 flex flex-col gap-5 bg-hero-bg bg-no-repeat bg-cover md:bg-opacity-100 bg-center md:pt-0 md:flex-row md:justify-between md:items-end md:gap-10">
      {/* Container 1 */}
      <div className="py-3 px-4 flex flex-col gap-[10px] md:px-10 md:gap-10 md:py-4">
        <h1 className="font-roboto text-[32px] text-stone-600 font-normal ">
          Móveis rústicos<br /> Premium com design <br className="md:hidden" /> exclusivo
        </h1>
        <div className="w-[80px] h-[4px] bg-stone-600 md:w-[120px] md:h-[6px]" />


        {/* Texto que só existe na responsividade */}
        <div className="hidden md:flex">
          <h2 className="text-stone-600 text-2xl">
            Sua melhor opção em móveis artesanais de madeira!
          </h2>
        </div>
      </div>

      {/* Hero IMG */}
      <div className="w-full md:h-full">
        <Image src={heroImg} alt="Imagem contendo mesa de centro de madeira" className="w-full" />
      </div>
    </main>
  )
}