"use client"

import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

async function sendMail(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        }),
    });

    alert("ส่งแล้ว");

    form.reset();
}

export default function Contact(){
    return (
        <>
            <div className="pt-40 flex flex-col items-center">
                <h1 className="text-6xl font-semibold">Get In <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span></h1>
                <p className="text-gray-600 m-5">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
            </div>
            <div className="flex w-full justify-center gap-8 mt-10 mb-20">
                <form onSubmit={sendMail} className="bg-white w-130 shadow-lg rounded-xl p-5 flex flex-col gap-5">
                    <h1 className="text-3xl font-semibold">Send a Message</h1>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">Name</label>
                        <input name="name" placeholder="Your name" className="bg-gray-50 border border-gray-200 rounded-lg h-12 pl-3 outline-none focus:border-blue-600"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">Email</label>
                        <input name="email" placeholder="your.email@example.com" className="bg-gray-50 border border-gray-200 rounded-lg h-12 pl-3 outline-none focus:border-blue-600"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">Message</label>
                        <textarea name="message" placeholder="Tell me about your project..." className="bg-gray-50 border border-gray-200 rounded-lg h-45 resize-none pl-3 pt-3 outline-none focus:border-blue-600"></textarea>
                    </div>
                    <button className="bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg h-12 flex gap-2 items-center justify-center hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg transition-all duration-300">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        Send Message
                    </button>
                </form>
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-semibold">Contact Information</h1>
                    <div className="flex flex-col gap-3">
                        <div className="bg-white border border-gray-200 rounded-lg w-130 p-5 flex gap-4 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                            <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-xl w-13 flex items-center justify-center text-white text-2xl">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p className="text-gray-500">Email</p>
                                <p className="hover:text-blue-500 transition-all duration-300">top.p1234558@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg w-130 p-5 flex gap-4 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                            <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-xl w-13 flex items-center justify-center text-white text-2xl">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p className="text-gray-500">Phone</p>
                                <p className="hover:text-blue-500 transition-all duration-300">082 550 8806</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg w-130 p-5 flex gap-4 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                            <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-xl w-13 flex items-center justify-center text-white text-2xl">
                                <FontAwesomeIcon icon={faMapLocation} />
                            </div>
                            <div>
                                <p className="text-gray-500">Location</p>
                                <p className="hover:text-blue-500 transition-all duration-300">Chinat, Thailand</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-xl">Connect With Me</p>
                            <div className="mt-4 flex gap-3">
                                <Link href="https://github.com/Alakok77">
                                    <div className="w-15 h-15 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                    </div>
                                </Link>
                                <Link href="mailto:top.p1234558@gmail.com">
                                    <div className="w-15 h-15 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className="w-15 h-15 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                    </div>
                                </Link>
                                <Link href="https://web.facebook.com/phiphop.thong.aun/?locale=th_TH">
                                    <div className="w-15 h-15 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-gray-500 hover:text-blue-600"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-130 mt-6 border border-blue-400 rounded-lg p-6 bg-linear-to-r from-blue-50 to-purple-50">
                        <h3 className="text-xl font-semibold mb-2">Available for Work</h3>
                        <p className="text-gray-500 text-sm">I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life!</p>
                    </div>
                </div>
            </div>
        </>
    );
}