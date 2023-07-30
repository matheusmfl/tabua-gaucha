import Image from "next/image";
import icon from '../../assets/card-icon.svg'

export function GlasmorphismCards({ title }: { title: string }) {
  return (
    <div className="w-full px-5 pb-5 flex flex-col items-center justify-center rounded-lg shadow-glasmophism-shadow backdrop-blur-2xl bg-glasmophism-bg">
      {/* Icon */}
      <div className="-translate-y-8">
        <Image src={icon} alt="Icone de madeira" />
      </div>

      <span className="font-roboto text-center text-base text-white font-medium leading-6 -translate-y-4">
        {title}</span>
    </div>
  )
}