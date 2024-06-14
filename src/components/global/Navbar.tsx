"use client";
import { BsDiscord } from "react-icons/bs"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="fixed top-0 z-50 w-full flex justify-center items-center bg-loti-200 text-white h-20 border-b-2 border-loti-300">
            <div className="flex flex-row justify-between max-w-5xl items-center mx-auto w-full">
                <div className="flex justify-start">
                    <Link href="/" className="flex items-center">
                        <Image width="100" height="100" src="https://r2.greed.best/greed.png" alt="Greed" className="w-14 h-14" />
                        <h1 className="text-4xl font-bold">greed</h1>
                    </Link>
                </div>
                <div className="hidden justify-center -ml-20 gap-10 items-center sm:flex">
                    <Link href="/commands" className={`font-semibold ${pathname === '/commands' ? 'border-b-2 border-loti-pink text-loti-pink py-6' : 'hover:text-loti-pink'}`}>Commands</Link>
                    <Link href="/legal" className={`font-semibold ${pathname === '/legal' ? 'border-b-2 border-loti-pink text-loti-pink py-6' : 'hover:text-loti-pink'}`}>Legal</Link>
                    <Link href="/status" className={`font-semibold ${pathname === '/status' ? 'border-b-2 border-loti-pink text-loti-pink py-6' : 'hover:text-loti-pink'}`}>Status</Link>
                </div>
                <div className="flex justify-end">
                    <Link href='https://discord.gg/greedbot' className="flex items-center bg-blue-500 px-4 rounded-2xl gap-2 h-10 hover:bg-blue-700">
                        <BsDiscord />
                        <span>Discord</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}