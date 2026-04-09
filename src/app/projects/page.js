import Proj_card from "@/components/Proj_card";
import { connectDB } from "@/lib/mongodb";
import Link from "next/link";

async function getProjects(category) {
  const db = await connectDB();

  const query = category && category !== "all"
    ? { category }
    : {};

  const projects = await db
    .collection("projects")
    .find(query)
    .sort({ createdAt: -1 })
    .toArray();

  return projects;
}

export default async function Projects({ searchParams }){

    const { category = "all" } = await searchParams;
    const projects = await getProjects(category);

    const base = "text-gray-600 bg-white border border-gray-200 rounded-xl w-40 h-12 font-semibold transition-all";
    const hover = "hover:text-black hover:bg-gray-50";
    const active = "bg-linear-to-r from-blue-500 to-purple-600 text-white border-none";

    return (
        <>
            <div className="pt-40 flex flex-col items-center">
                <h1 className="text-6xl font-semibold">My <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span></h1>
                <p className="text-gray-600 m-5">Explore my portfolio of web/app, game, and infrastructure projects</p>
                <div className="flex gap-5 mt-10">
                    <Link href="/projects?category=all">
                        <button className={`${base} ${category === "all" ? active : hover}`}>
                            All Projects
                        </button>
                    </Link>

                    <Link href="/projects?category=Web/App">
                        <button className={`${base} ${category === "Web/App" ? active : hover}`}>
                            Web/App
                        </button>
                    </Link>

                    <Link href="/projects?category=Game">
                        <button className={`${base} ${category === "Game" ? active : hover}`}>
                            Game
                        </button>
                    </Link>

                    <Link href="/projects?category=Infra">
                        <button className={`${base} ${category === "Infra" ? active : hover}`}>
                            Infrastructure
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap pt-20 pb-20 pl-30 pr-30 w-full items-center justify-center">
                <Proj_card projects={projects} />
            </div>
        </>
    );
}