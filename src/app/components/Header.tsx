import Image from "next/image";
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-stone-800 flex items-center justify-center md:py-5 py-[10px]">
      {/* div principal */}
      <div className="text-white font-roboto text-xs flex gap-[10px] items-center justify-center">
        <span>Tábua Gaúcha</span>
        <Image src={logo} alt="Logomarca" />
        <span>Madeira rústica</span>
      </div>
    </header>
  )
}