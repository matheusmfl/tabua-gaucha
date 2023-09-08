import Link from "next/link";
import { builder, getProducts } from "../../../sanity/sanity-utils";
import { Product } from "../../../sanity/types/Product";
import { ProductCard } from "./microComponents/ProductCard";

export async function SectionProdutos() {
  const products: Product[] = await getProducts()


  return (
    <section className="py-20 px-6 flex flex-col gap-10">

      {/* Chamada */}

      <div className="flex items-center justify-center flex-col gap-5 md:items-start">
        <h2 className="text-center md:text-left font-inter text-[#3C3A1E] text-4xl font-normal leading-[51px]">
          Produtos a pronta <br /> entrega
        </h2>

        <div className="w-[160px] h-[2px] md:h-[4px]  bg-[#DDA35D]" />
      </div>

      {/* Produtos */}
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
        {products.map((product, index) => {
          const imageUrl = builder.image(product.mainImage.asset._ref).url();

          return (
            <Link href={`/produto/${product.slug.current}`} key={index}>
              <ProductCard key={index} altImage={'qualquercoisa'} imageUrl={imageUrl} price={product.price} description={product.homeTitle} />
            </Link>

          )
        })}


      </div>

      {/* Textos */}
      <div>
        <h3 className="font-roboto text-xl font-normal leading-[32px] text-stone-600 pr-[2px]">
          Gostou dos nossos produtos? clique no botão abaixo para ver o nosso catálogo completo ou solicitar peças sob medida.
        </h3>
      </div>

      {/* botão */}
      <div>
        <button className="rounded-[4px] md:w-[380px] w-full bg-green-500 py-4 shadow-lg text-center text-white font-roboto text-xl font-medium uppercase">
          faça um orçamento
        </button>
      </div>

    </section >
  )
}