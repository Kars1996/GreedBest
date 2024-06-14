import { MeshGradient } from "@/components/global/GradientMesh";
import { ReactNode } from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { FiCommand } from "react-icons/fi";
import Image from "next/image";
import "@/styles/globals.css";


export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center justify-center pt-10">
        <Image width="1000" height="1000" src="https://r2.greed.best/greed.png" className="w-52 h-52" alt="greed"/>
        <h1 className="text-6xl font-bold text-white">greed</h1>
        <span className="text-sm pb-4 pt-5 text-zinc-300 text-center">An aesthetic all-in-one bot, enhancing communities with user-focused commands.</span>
        <div className="flex flex-col gap-4 sm:flex-row">
          <SplashItem name="Commands" link="/commands" icon={<FiCommand />} />
          <SplashItem name="Discord" link="https://discord.gg/greedbot" icon={<BsDiscord />} />
          <SplashItem name="Documentation" link="https://docs.greed.best/" icon={<BiBookAdd />} />
        </div>
      </div>
    </>
  );
}

const SplashItem = ( { name, link, icon }: { name: string, link: string, icon: ReactNode }) => {
  return (
      <a href={link} className="flex flex-row gap-2 items-center justify-center rounded-lg py-4 px-20 bg-[#121317] bg-opacity-90  border-opacity-10 text-white hover:bg-opacity-50 sm:px-6 hover:scale-105 transition-transform duration-500">
          {icon}
          {name}
      </a>
  )
}