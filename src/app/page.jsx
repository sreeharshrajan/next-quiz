import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/homepage/Hero";
import Stats from "@/components/homepage/Stats";
import Results from "@/components/homepage/Results";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Stats />
      <Results />
      <Footer /> */}
    </>
  );
}
