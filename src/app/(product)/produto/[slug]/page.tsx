import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Description } from "@/app/components/product/Description";
import { IconsCarrossel } from "@/app/components/product/IconsCarrossel";
import { ProductDescription } from "@/app/components/product/ProductDescription";
import { ProductImgs } from "@/app/components/product/ProductImgs";
import { ProductTitle } from "@/app/components/product/ProductTitle";
import { builder, getCategories, getPage } from "../../../../../sanity/sanity-utils";


type Props = {
  params: { slug: string }
}
export default async function Page({ params }: Props) {

  const page = await getPage(params.slug)
  const categories = await getCategories(params.slug)





  const images: any = []

  page.images.map((image) => {
    const imageUrl = builder.image(image.asset._ref).url()
    images.push({ url: imageUrl, alt: image.alt })
    
  })

  const tags: string[] = []

  const mainImage = builder.image(page.mainImage.asset._ref).url()

  categories.map((tag) => tags.push(tag.title))
  return (
    <>
      <Header />
      {/* Carrossel rotativo */}
      <div className="py-4">
        <IconsCarrossel />
      </div>
      <main className="flex flex-col gap-3 px-3 py-1">
        {/* Carrossel imagens */}
        <ProductImgs thumbs={images} mainImage={mainImage}
        />
        {/* Divisor */}
        <div className="h-[1px] bg-[#3C3A1E]" />
        {/* Product Title */}
        <ProductTitle title={page.title} tags={tags} />
        {/* Divisor */}
        <div className="h-[1px] bg-[#3C3A1E]" />
        {/* Especificações do produto */}
        <ProductDescription dimensao={page.dimension} peso={page.peso} price={page.price} madeira={page.madeira} />
        {/* Divisor */}
        <div className="h-[1px] bg-[#3C3A1E]" />

      </main>
      <Description slug={params.slug} />
      <Footer />
    </>

  )
}