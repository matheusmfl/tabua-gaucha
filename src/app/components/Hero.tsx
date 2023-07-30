import Image from "next/image";
import heroImg from '../assets/hero-img.png'

export function Hero() {
  return (
    <main className="pt-10 flex flex-col gap-5 bg-hero-bg">
      {/* Container 1 */}
      <div className="py-3 px-4 flex flex-col gap-[10px]">
        <h1 className="font-roboto text-[32px] text-stone-600 font-normal ">
          Móveis rústicos<br /> Premium com design <br /> exclusivo
        </h1>
        <div className="w-[80px] h-[4px] bg-stone-600" />
      </div>

      {/* Hero IMG */}
      <div className="w-full">
        <Image src={heroImg} alt="Imagem contendo mesa de centro de madeira" className="w-full" />
      </div>
    </main>
  )
}