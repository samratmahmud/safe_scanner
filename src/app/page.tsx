import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Header from "./home/Header";
import Cards from "./home/Cards";
import ButtonGroup from "./home/ButtonGroup";
import Features from "./home/Features";
import Footer from "./home/Footer";
import SearchDetails from "@/components/template/SearchDetails";

export default function Home() {
  return (
    <div className="bg-stone-900">
      <Navbar />
      <Header />
      <Cards />
      <ButtonGroup />
      <Features />
      <Footer />
      {/* <SearchDetails /> */}
    </div>
  );
}
