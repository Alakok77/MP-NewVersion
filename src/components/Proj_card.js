import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Proj_card({ projects }){
    return (
        <div className='flex flex-wrap gap-7 justify-center'>
          {
            projects.map(p => (
              <div key={p._id} className='group bg-white rounded-lg shadow-xl w-80 h-100 overflow-hidden border border-gray-300 hover:border-blue-400 hover:shadow-xl hover:scale-102 hover:-translate-y-1 transition-all duration-300'>
                  <Image src={p.thumbnail} width={200} height={200} alt={p.title} className='w-full h-[40%] object-cover group-hover:scale-110 transition-all duration-300'></Image>
                  <h3 className='ml-5 mr-5 mt-5 text-xl font-bold truncate group-hover:text-blue-600 transition-all duration-300'>{p.title}</h3>
                  <p className='ml-5 mr-5 mt-2 text-sm line-clamp-2 text-gray-600'>{p.short_desc}</p>
                  <div className='flex ml-5 mt-8 gap-2 items-center'>
                    {
                      p.tags.slice(0, 3).map(t => (
                        <div key={t} className='flex items-center justify-center bg-blue-50 border rounded-full border-blue-300 p-1 w-22'>
                          <p className='text-blue-600 text-[12px]'>{t}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className='flex ml-5 gap-2 items-center mt-3'>
                    <Link href={`/projects/${p._id}`} className='bg-linear-to-r from-blue-500 to-purple-600 rounded-lg text-white w-45 flex items-center justify-center h-10 hover:-translate-y-0.5 hover:shadow-xl transition duration-300'>View Details</Link>
                    {
                      p.github &&
                      <Link href={p.github}>
                        <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-500 hover:text-blue-600"/>
                        </div>
                      </Link>
                    }
                    {
                      p.video &&
                      <Link href={p.video}>
                        <div className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-500 hover:text-blue-600"/>
                        </div>
                      </Link>
                    }
                  </div>
              </div>
            ))
          }
        </div>
    );
}