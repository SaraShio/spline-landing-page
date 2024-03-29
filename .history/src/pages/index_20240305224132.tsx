import Image from "next/image";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardOne from "../../components/CardOne";
import CardTwo from "../../components/CardTwo";
import CardThree from "../../components/CardThree";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Header />

      <Hero/>

      <div className={StyleSheet.card_containers}>
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      </div>


      <Footer />
    </main>
  );
}
