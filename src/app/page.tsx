import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LastSection } from "./components/LastSection";
import Manutencao from "./components/Manutenção";
import { Section1 } from "./components/Section1";
import { SectionEncomenda } from "./components/SectionEncomenda";
import { SectionFeedback } from "./components/SectionFeedback";
import { SectionProdutos } from "./components/SectionProdutos";
import { SectionSobDemanda } from "./components/SectionSobDemanda";

export default function Home() {
  return (
    <>
      <Header />
      <Manutencao />
      {/* <Hero />
      <Section1 />
      <SectionEncomenda />
      <SectionProdutos />
      <SectionFeedback />
      <LastSection />
      <Footer /> */}
    </>
  );
}
