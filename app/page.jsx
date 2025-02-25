"use client";
import AnimatedBackground from "@/components/AnimatedBackground";
import Form from "@/components/forms/FormMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-3xl mx-auto p-4">
      <Header />

      {/* O conteúdo principal cresce para empurrar o Footer para baixo */}
      <div className="flex-1 flex flex-col ">
        <Form />
      </div>

      <Footer />

      <AnimatedBackground />
    </main>
  );
}
