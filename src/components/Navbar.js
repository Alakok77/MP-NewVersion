"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();
    
    return (
        <>
            <nav className="flex justify-between pl-10 pr-10 pt-5 pb-5 items-center shadow-sm bg-white/80 backdrop-blur-md fixed w-full top-0">
                <div className="flex gap-3 items-center">
                    <div className="bg-linear-to-r from-blue-500 to-purple-600 w-10 h-10 flex justify-center items-center rounded-lg">
                        <p className="text-white text-3xl font-bold">P</p>
                    </div>
                    <p className="font-bold text-2xl">Phiphop</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/"
                          className={pathname === "/" ? "bg-linear-to-r from-blue-500 to-purple-600 w-18 h-10 rounded-lg text-white flex items-center justify-center" : "w-18 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                    >Home</Link>
                    <Link href="/about"
                          className={pathname === "/about" ? "bg-linear-to-r from-blue-500 to-purple-600 w-18 h-10 rounded-lg text-white flex items-center justify-center" : "w-18 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                    >About</Link>
                    <Link href="/projects"
                          className={pathname === "/projects" ? "bg-linear-to-r from-blue-500 to-purple-600 w-18 h-10 rounded-lg text-white flex items-center justify-center" : "w-18 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                    >Projects</Link>
                    <Link href="/contact"
                          className={pathname === "/contact" ? "bg-linear-to-r from-blue-500 to-purple-600 w-18 h-10 rounded-lg text-white flex items-center justify-center" : "w-18 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                    >Contact</Link>
                    <Link href="/login"
                          className={pathname === "/login" ? "bg-linear-to-r from-blue-500 to-purple-600 w-18 h-10 rounded-lg text-white flex items-center justify-center" : "w-18 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                    >Login</Link>
                </div>
            </nav>
        </>
    );
}
