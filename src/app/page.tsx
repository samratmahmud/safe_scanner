import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Header from "./home/Header";
import Cards from "./home/Cards";
import ButtonGroup from "./home/ButtonGroup";

export default function Home() {
  return (
    <div className="bg-stone-600">
      <Navbar />
      <Header />
      <Cards />
      <ButtonGroup />
    </div>
  );
}
