import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 border-t border-gray-300 m-10">
                    <div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-linear-to-r from-blue-500 to-purple-600 w-10 h-10 flex justify-center items-center rounded-lg">
                                <p className="text-white text-3xl font-bold">P</p>
                            </div>
                            <p className="font-bold text-2xl">Phiphop</p>
                        </div>
                        <p className="text-gray-600 mt-4">IT student in Network Engineering, passionate about software development and building modern digital experiences.</p>
                    </div>
                    <div className="ml-7">
                        <p className="text-lg font-semibold">Quick Links</p>
                        <div className="flex flex-col mt-4">
                            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                            <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
                            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Contact</p>
                        <div className="mt-4 flex gap-3">
                            <Link href="https://github.com/Alakok77">
                                <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                </div>
                            </Link>
                            <Link href="mailto:top.p1234558@gmail.com">
                                <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                </div>
                            </Link>
                            <Link href="https://web.facebook.com/phiphop.thong.aun/?locale=th_TH">
                                <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 w-[97%] flex justify-center items-center h-25">
                    <p className="text-gray-600">© 2026 Phiphop. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}