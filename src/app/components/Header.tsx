import Image from "next/image";
import logo from '../assets/logo.svg'
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-stone-800 flex items-center justify-center md:py-5 py-[10px]">
      {/* div principal */}
      <Link href={'/'}>
        <div className="text-white font-roboto text-xs flex gap-[10px] items-center justify-center">
          <span>Tábua Gaúcha</span>
          <Image src={logo} alt="Logomarca" />
          <span>Madeira rústica</span>
        </div>
      </Link>

    </header>
  )
}