import Image from "next/image";
import Hero from "./page/Hero";
import Explore from "./page/Explore";
import Book from "./page/Book";

export default function Home() {
  return (
    <div className=" pt-[45px] ">
      <Hero />
      <Explore/>
      <Book />
         </div>
  );
}
