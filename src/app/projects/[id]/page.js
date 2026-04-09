import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from 'next/image'

export default async function Detail({ params }){

    const { id } = await params;

    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
        cache: "no-store",
    });

    const project = await res.json();

    return (
        <>
            <div className="pt-25 pl-10">
                <Link href="/projects" className="flex gap-2 items-center text-gray-600 hover:text-black transition-all duration-300">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to Projects
                </Link>
            </div>

            <div className="p-10 mt-5">
                <h1 className="text-5xl font-semibold">{project.title}</h1>
                <div className="flex gap-8 mt-4">
                    <div className="flex  items-center gap-2 text-blue-500">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p className="text-gray-600">{project.date}</p>
                    </div>
                    <div className="flex  items-center gap-2 text-purple-600">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="text-gray-600">{project.role}</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-7 w-[90%] indent-10">{project.short_desc}</p>

                <div className="mt-8 flex gap-5">
                    {
                        project.github && 
                        <Link href={project.github} className="flex items-center gap-2 text-white bg-linear-to-r from-blue-500 to-purple-600 w-40 h-10 rounded-lg justify-center text-lg hover:scale-103 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            <FontAwesomeIcon icon={faGithub} />
                            View Code
                        </Link>
                    }
                    {
                        project.video &&
                        <Link href={project.video} className="flex items-center gap-2 text-blue-500 border border-blue-500 rounded-lg w-40 justify-center hover:bg-blue-500 hover:text-white hover:scale-103 transition-all duration-300">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            Presentation
                        </Link>
                    }
                </div>
            </div>

            <div className="p-10">
                <h1 className="mt-10 mb-5 text-3xl">Gallery</h1>
                <div className="columns-3 gap-4 items-center justify-center">
                    {
                        project.images.map( i => (
                            <Image key={i} src={i} width={400} height={400} alt='me' className='w-full mb-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300'></Image>
                        ))
                    }
                </div>
            </div>

            <div className="flex gap-10 w-full p-10 mt-10 justify-between">
                <div className="w-[70%]">
                    <div className="mb-10">
                        <h2 className="text-3xl mb-4">About This Project</h2>
                        <p className="text-gray-600 indent-10">{project.full_desc}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl mb-4">Key Features</h2>
                        <ul>
                            {
                                project.features.map( f => (
                                    <li key={f} className="mb-2 list-disc list-inside marker:text-xl marker:text-blue-500 text-gray-600">{f}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-[25%]">
                    <div className="bg-white shadow-lg border border-gray-200 w-full p-5 rounded-xl">
                        <h2 className="text-2xl mb-4">Tech Stack</h2>
                        <div className="flex gap-3 flex-wrap">
                            {
                                project.stack.map( s => (
                                    <div key={s} className='flex items-center justify-center bg-blue-50 border rounded-full border-blue-300 p-1 w-22'>
                                        <p className='text-blue-600 text-[12px]'>{s}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="bg-white shadow-lg border border-gray-200 w-full p-5 rounded-xl mt-7">
                        <h2 className="text-2xl mb-4">Tech Stack</h2>
                        <div className="flex gap-3 text-white bg-linear-to-r from-blue-500 to-purple-600 w-30 h-10 items-center justify-center rounded-lg">
                            <p>{project.category}</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg border border-gray-200 w-full p-5 rounded-xl mt-7">
                        <h2 className="text-2xl mb-4">Tags</h2>
                        <div className="flex gap-3 flex-wrap">
                            {
                                project.stack.map( s => (
                                    <div key={s} className='flex items-center justify-center bg-gray-100 border rounded-full border-gray-300 p-1 w-22'>
                                        <p className='text-gray-600 text-[12px]'>{s}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center pt-20 pb-20 mt-10'>
                <h1 className='font-bold text-4xl mb-5'>LInterested in Working Together?</h1>
                <p className='text-gray-500 mb-10'>Let's create something amazing together.</p>
                <Link href="/contact" className='bg-linear-to-r from-blue-500 to-purple-600 text-white w-50 h-15 rounded-lg flex items-center justify-center text-lg font-semibold hover:-translate-y-0.5 hover:shadow-xl transition duration-300'>Get In Touch</Link>
            </div>
        </>
    );
}