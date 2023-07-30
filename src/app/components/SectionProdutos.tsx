import { ProductCard } from "./microComponents/ProductCard";

export function SectionProdutos() {
  return (
    <section className="py-20 px-6 flex flex-col gap-10">

      {/* Chamada */}
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-center font-roboto text-[#3C3A1E] text-4xl font-normal leading-[51px]">
          Nossa linha de <br />produtos
        </h2>

        <div className="w-[160px] h-[1px] bg-[#3C3A1E]" />
      </div>

      {/* Produtos */}
      <div className="flex flex-col gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </section>
  )
}