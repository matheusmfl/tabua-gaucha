import { Baloon } from "./microComponents/Baloon";

export function SectionFeedback() {
  return (
    <section className="py-10 px-6 flex flex-col gap-10 bg-[#F5E6C0]">

      {/* Section divisor + texto */}
      <div className="flex gap-[20px] flex-col">
        <span className="font-inter text-[#3C3A1E] font-medium leading-[28px] ">
          O que dizem<br />
          <strong>NOSSOS CLIENTES</strong>
        </span>

        <div className="w-[160px] h-[2px] bg-[#DDA35D]" />

      </div>


      {/* Section comentários */}

      <div className="flex flex-col gap-3">
        <Baloon name="Robson Maranhão" title="Muito boa a qualidade, entregaram dentro do prazo e veio impecável, acabamento de ótima qualidade." />
        <Baloon name="Robson Maranhão" title="Muito boa a qualidade, entregaram dentro do prazo e veio impecável, acabamento de ótima qualidade." />
        <Baloon name="Robson Maranhão" title="Muito boa a qualidade, entregaram dentro do prazo e veio impecável, acabamento de ótima qualidade." />
        <Baloon name="Robson Maranhão" title="Muito boa a qualidade, entregaram dentro do prazo e veio impecável, acabamento de ótima qualidade." />

      </div>
    </section>
  )
}