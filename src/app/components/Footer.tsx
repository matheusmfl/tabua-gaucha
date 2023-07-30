import Image from 'next/image'
import logo from '../assets/logo.svg'
export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-[10px] bg-stone-800 gap-[10px]">
      <div className="flex gap-[10px] items-center justify-center">
        <Image src={logo} alt='logomarca' className='w-[32px] h-[32px]' />
        <span className='font-roboto text-white text-xs font-normal'>Tábua Gaúcha</span>
      </div>

      <span className='font-roboto text-white text-xs font-normal'>
        São Miguel das Missões, Rio Grande do Sul, Brasil
      </span>

      <span className='font-roboto text-white text-xs font-normal'>
        +55 55 99722 - 1058
      </span>

    </footer>
  )
}