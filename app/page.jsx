"use client";
import AnimatedBackground from "@/components/AnimatedBackground";
import Form from "@/components/forms/FormMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CircleArrowDown } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center  mx-auto p-4">
      <Header />

      <div className="text-center sm:max-w-4xl pt-10 sm:pt-18 pb-20">
        <p className="text-[65px] sm:text-[115px] sm:leading-[130px] font-bold dark:text-gray-100 text-gray-800">Um espaço para ouvir você!</p>
        <p className="text-[20px] sm:text-[21px] sm:leading-[25px] mx-10 sm:mx-10 md:mx-auto  dark:text-gray-100 text-gray-800 pt-3 sm:pt-7">Envie sugestões e registre suas reclamações<br/> de forma fácil e confidencial.</p>
      </div>
      

      <Link href="#form" className="mb-20">
        <CircleArrowDown
          size={40}
          className="animate-bounce transition duration-1000 dark:hover:drop-shadow-[0_0_15px_gray] hover:drop-shadow-[0_0_15px_black]"
        />
      </Link>



      {/* O conteúdo principal cresce para empurrar o Footer para baixo */}
      <div id="form" className="flex-1 flex flex-col max-w-3xl items-center justify-center ">
        <Form />
      </div>

      <Footer />

      <AnimatedBackground />
    </main>
  );
}
