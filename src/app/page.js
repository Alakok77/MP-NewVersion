import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';

export default function Home() {
  return (
    <>

      {/* My Profile */}
      <div className="flex items-center justify-center gap-10 mt-10 pt-20 pb-10">

        <div className='w-130'>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">Hi, I'm <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Phiphop</span></h1>
          <p className="text-gray-600 text-2xl mt-15">Network Enthusiast & Full Stack Developer</p>
          <p className="text-gray-500 mt-4">Combining networking knowledge with web development to create efficient, reliable, and well-structured applications.</p>
          <div className="mt-4 flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-500 hover:text-blue-600"/>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-500 hover:text-blue-600"/>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-gray-500 hover:text-blue-600"/>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-gray-500 hover:text-blue-600"/>
            </div>
          </div>
          <div className='flex gap-3 mt-10'>
            <Link href='/projects' className='bg-linear-to-r from-blue-500 to-purple-600 w-50 h-10 rounded-lg flex items-center justify-center text-white font-extralight text-lg hover:-translate-y-0.5 hover:shadow-xl transition duration-300'>View Projects</Link>
            <Link href='/contact' className='text-lg text-blue-500 flex items-center justify-center border-2 border-blue-500 rounded-lg h-10 w-40 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition duration-300'>Contact Me</Link>
          </div>
        </div>

        <div className='rounded-full p-0.5 shadow-lg'>
          <Image src="/profile.png" width={400} height={400} alt='me' className='rounded-full'></Image>
        </div>

      </div>

      {/* My Project */}
      

      {/* Work Together */}
      <div className='flex flex-col items-center justify-center pt-20 pb-20'>
        <h1 className='font-bold text-5xl mb-5'>Let's Work Together</h1>
        <p className='text-gray-500 mb-10'>Have a project in mind? Let's create something amazing together.</p>
        <Link href="/contact" className='bg-linear-to-r from-blue-500 to-purple-600 text-white w-50 h-15 rounded-lg flex items-center justify-center text-lg font-semibold hover:-translate-y-0.5 hover:shadow-xl transition duration-300'>Get In Touch</Link>
      </div>
    </>
  );
}
