import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section1 } from "./components/Section1";
import { SectionProdutos } from "./components/SectionProdutos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <SectionProdutos />
    </>
  )
}
