import Image from "next/image";
import icon from '../../assets/card-icon.svg'

export function GlasmorphismCards() {
  return (
    <div className="w-full px-5 pb-5 flex flex-col items-center justify-center">
      {/* Icon */}
      <div>
        <Image src={icon} alt="Icone de madeira" />
      </div>

      <span className="font-roboto text-center text-base text-white font-medium leading-6">
        Peças de madeira maciça de longa
        duração e sem necessidade de manutenção</span>
    </div>
  )
}