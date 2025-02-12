"use client"
import AnimatedBackground from "@/components/AnimatedBackground";
import Form from "@/components/FormMain";
import Header from "@/components/Header";

export default function Home() {
  return (
  <main className="max-w-3xl mx-auto p-4">   
    <Header/>
      <div className="">
        <Form/>
      </div>

    <AnimatedBackground/>
  </main>

  );
}
