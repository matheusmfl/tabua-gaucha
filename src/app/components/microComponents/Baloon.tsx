import Image from "next/image";
import star from '../../assets/star.svg'

export function Baloon({ name, title }: { name: string, title: string }) {
  return (
    <div className="rounded-lg bg-slate-50 shadow-lg py-5 px-5 gap-[10px] flex flex-col ">

      {/* Name + Stars */}

      <div className="flex flex-col gap-[10px]">
        <h2 className="font-roboto text-lg font-medium leading-[24px] text-slate-900">
          {name}
        </h2>

        {/* star div */}

        <div className="flex">
          <Image src={star} alt="Estrelinha" />
          <Image src={star} alt="Estrelinha" />
          <Image src={star} alt="Estrelinha" />
          <Image src={star} alt="Estrelinha" />
          <Image src={star} alt="Estrelinha" />
        </div>
      </div>

      {/* Title */}

      <span className="text-sm font-normal font-roboto text-slate-900">
        {title}
      </span>


    </div>
  )
}