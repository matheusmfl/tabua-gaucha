import Image from "next/image";
import heroImg from '../assets/hero-img.webp'

export function Hero() {
  return (
    <main className="pt-10 flex flex-col gap-5 bg-hero-bg bg-no-repeat bg-cover md:bg-opacity-100 bg-center md:pt-0 md:grid md:grid-cols-2 md:justify-between  md:gap-10">
      {/* Container 1 */}
      <div>
        <div className="py-3 px-4 flex flex-col gap-[10px] md:px-20 lg:pt-20 lg:pb-20 md:my-auto md:h-full md:justify-center md:gap-10 md:py-4">
          <h1 className="font-inter text-[32px] text-stone-600 font-normal ">
            Móveis rústicos<br /> Premium com design <br className="md:hidden" /> exclusivo
          </h1>
          <div className="w-[80px] h-[4px] bg-[#DDA35D] md:w-[120px] md:h-[6px]" />


          {/* Texto que só existe na responsividade */}
          <div className="hidden md:flex">
            <h2 className="text-stone-600 text-2xl">
              Sua melhor opção em móveis artesanais de madeira!
            </h2>
          </div>
        </div>
      </div>


      {/* Hero IMG */}
      <div className="w-full md:h-full lg:relative hidden lg:block">
        <Image src={heroImg} fill priority alt="Imagem contendo mesa de centro de madeira" className="w-full object-cover object-top" />
      </div>
      <div className="w-full md:h-full lg:relative lg:hidden">
        <Image src={heroImg} priority alt="Imagem contendo mesa de centro de madeira" className="w-full object-cover object-top" />
      </div>
    </main>
  )
}