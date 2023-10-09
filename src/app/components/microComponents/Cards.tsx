import icon1 from '../../assets/qualidade-icon.svg'
import icon2 from '../../assets/entrega-icon.svg'
import icon3 from '../../assets/compra-segura-icon.svg'
import Image from 'next/image'

interface CardsProps {
  title: 'qualidade' | 'entrega' | 'compra segura'
  description: string
}

const iconMap = {
  qualidade: icon1,
  entrega: icon2,
  'compra segura': icon3,
};

export function Cards({ title, description }: CardsProps) {
  const icon = iconMap[title]
  return (
    <div className="flex flex-col justify-center items-center shadow-md gap-5 rounded-lg bg-[#3C3A1E] p-5">
      {/* Icon */}
      <div>
        <Image src={icon} alt={`ícone ${title}`} />
      </div>

      {/* titulo */}
      <h3 className='text-center font-roboto font-normal uppercase text-white text-lg'>
        {title}
      </h3>

      {/* description */}
      <div>
        <span className='text-center inline-block font-roboto font-normal text-white text-lg leading-[25px]'>
          {description}
        </span>
      </div>
    </div>
  )
}