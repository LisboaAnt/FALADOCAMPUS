"use client";
import AnimatedBackground from "@/components/AnimatedBackground";
import Form from "@/components/forms/FormMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center  mx-auto p-4">
      <Header />

      <div className="text-center max-w-4xl pt-10 sm:pt-24 pb-20">
        <p className="text-5xl sm:text-[115px] sm:leading-[130px] font-bold dark:text-gray-100 text-gray-800">Um espaço para ouvir você!</p>
        <p className="text-[13px] sm:text-[21px] sm:leading-[25px] mx-16 sm:mx-auto  dark:text-gray-100 text-gray-800 pt-3 sm:pt-7">Envie sugestões, registre suas reclamações ou faça denúncias <br/> de forma fácil e confidencial.</p>
      </div>

      {/* O conteúdo principal cresce para empurrar o Footer para baixo */}
      <div className="flex-1 flex flex-col max-w-3xl items-center justify-center ">
        <Form />
      </div>

      <Footer />

      <AnimatedBackground />
    </main>
  );
}
