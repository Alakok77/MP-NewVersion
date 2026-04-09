import Proj_card from "@/components/Proj_card";
import { connectDB } from "@/lib/mongodb";

async function getProjects() {
  const db = await connectDB();

  const projects = await db
    .collection("projects")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return projects;
}

export default async function Projects(){

    const projects = await getProjects();

    return (
        <>
            <div className="pt-40 flex flex-col items-center">
                <h1 className="text-6xl font-semibold">My <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span></h1>
                <p className="text-gray-600 m-5">Explore my portfolio of web/app, game, and infrastructure projects</p>
                <div className="flex gap-5 mt-10">
                    <button className="text-gray-600 bg-white border border-gray-200 rounded-xl w-40 h-12 font-semibold hover:text-black hover:bg-gray-50 transition-all">All Projects</button>
                    <button className="text-gray-600 bg-white border border-gray-200 rounded-xl w-40 h-12 font-semibold hover:text-black hover:bg-gray-50 transition-all">Web/App</button>
                    <button className="text-gray-600 bg-white border border-gray-200 rounded-xl w-40 h-12 font-semibold hover:text-black hover:bg-gray-50 transition-all">Game</button>
                    <button className="text-gray-600 bg-white border border-gray-200 rounded-xl w-40 h-12 font-semibold hover:text-black hover:bg-gray-50 transition-all">infrastructure</button>
                </div>
            </div>
            <div className="flex flex-wrap pt-20 pb-20 pl-30 pr-30 w-full">
                <Proj_card projects={projects} />
            </div>
        </>
    );
}