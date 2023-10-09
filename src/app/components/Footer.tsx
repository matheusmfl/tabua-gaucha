import Image from 'next/image'
import logo from '../assets/logo.svg'
import { DialogComponent } from './microComponents/DialogComponent'
export function Footer() {
  return (
    <footer className="flex flex-col lg:flex-col-reverse px-6 py-[28px] bg-stone-800 gap-[10px] lg:px-20">
      {/* Links */}

      <div className='flex flex-col gap-4  pb-4 lg:flex-row lg:justify-between'>
        <DialogComponent title='Devoluções e trocas' />
        <DialogComponent title='Formas de entrega' />
        <DialogComponent title='Formas de pagamentos e garantias' />
        <DialogComponent title='Horários de atendimento' />
        <DialogComponent title='Fale conosco' />
      </div>

      <div className='flex flex-col items-center justify-center gap-3'>
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
      </div>


    </footer>
  )
}