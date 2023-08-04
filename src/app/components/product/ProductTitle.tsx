import Link from "next/link"

interface ProductTitleProps {
  tags: string[],
  title: string
}

export function ProductTitle({ tags, title }: ProductTitleProps) {
  return (
    <div className="py-[10px]  flex flex-col gap-[10px]">
      {/* tags */}

      <div className="pl-2 flex gap-2 flex-wrap">

        {/* link inicio */}
        <Link href={'/'} className="uppercase font-roboto text-base font-medium leading-[20px] text-black" >
          <div className="py-[2px] px-2 bg-stone-200 rounded-[4px] shadow-md">
            Início
          </div>
        </Link>

        {tags && tags.map((tag, index) => {
          return (
            <div key={index} className="uppercase bg-[#3C3A1E] py-[2px] px-2 shadow-md rounded-[4px] font-roboto text-base font-medium leading-[20px] text-white">
              <span>{tag}</span>
            </div>
          )
        })}

      </div>

      <h2 className="font-inter text-[#3C3A1E] text-2xl leading-[29px] font-normal">
        {title}
      </h2>
    </div>
  )
}