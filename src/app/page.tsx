import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LastSection } from "./components/LastSection";
import { Section1 } from "./components/Section1";
import { SectionProdutos } from "./components/SectionProdutos";
import { SectionSobDemanda } from "./components/SectionSobDemanda";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <SectionProdutos />
      <SectionSobDemanda />
      <LastSection />
      <Footer />
    </>
  )
}
