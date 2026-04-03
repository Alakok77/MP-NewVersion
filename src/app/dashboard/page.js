"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export default function About(){
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [stats, setStats] = useState({
        "Web/App": 0,
        "Game": 0,
        "Infra": 0,
        total: 0,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (edit) {
            await fetch(`/api/projects/${selectedProject._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(selectedProject),
            });
        } else {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            await fetch("/api/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            });
        }

        await fetchProjects();

        setEdit(false);
        setOpen(false);
    };

    const fetchProjects = async () => {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        fetch("/api/projects/stats")
            .then(res => res.json())
            .then(data => setStats(data));
    }, []);

    return (
        < >
            <div className="mt-25 p-10">
                <p className=" text-4xl font-semibold text-gray-900">Welcome back, <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Admin User</span></p>
                <p className="text-gray-600 mt-2">Manage your portfolio projects</p>
                <div className="flex gap-10 mt-10">
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Total Projects</p>
                        <p className="text-2xl">{stats.total}</p>
                    </div>
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Web/App Projects</p>
                        <p className="text-2xl">{stats["Web/App"]}</p>
                    </div>
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Game Projects</p>
                        <p className="text-2xl">{stats["Game"]}</p>
                    </div>
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Infrastructure Projects</p>
                        <p className="text-2xl">{stats["Infra"]}</p>
                    </div>
                </div>
                <button onClick={() => setOpen(true)} className="cursor-pointer bg-linear-to-r from-blue-500 to-purple-600 text-white text-lg font-extralight w-60 h-13 rounded-lg mt-8 hover:-translate-y-0.5 hover:shadow-xl transition duration-300">+ Add New Project</button>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur" onClick={() => setOpen(false)} >
                    <div className="overflow-y-scroll bg-white p-10 rounded-2xl w-200 h-150" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between border-b-2 border-gray-200 p-5">
                            <p className="font-semibold text-2xl text-gray-900">Add New Project</p>
                            <FontAwesomeIcon icon={faClose} onClick={() => setOpen(false)} className="cursor-pointer text-xl text-gray-600" />
                        </div>
                        <form className="mt-7" onSubmit={handleSubmit}>
                            <div className="mt-2">
                                <label htmlFor="title" className="m-2 font-semibold text-gray-600">Title</label>
                                <input type="text" name="title" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                            </div>
                            <div className="flex w-full gap-5 mt-2">
                                <div className="w-[50%]">
                                    <label htmlFor="category" className="m-2 font-semibold text-gray-600">Category</label>
                                    <select name="category" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1">
                                        <option value="Web/App">Web/App Project</option>
                                        <option value="Game">Game Project</option>
                                        <option value="Infra">Infrastructure Project</option>
                                    </select>
                                </div>
                                <div className="w-[50%]">
                                    <label htmlFor="date" className="m-2 font-semibold text-gray-600">Date</label>
                                    <input type="text" name="date" placeholder="January 2026" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="role" className="m-2 font-semibold text-gray-600">Role</label>
                                <input type="text" name="role" placeholder="Full Stack Developer" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="thumbnail" className="m-2 font-semibold text-gray-600">Thumbnail URL</label>
                                <input type="text" name="thumbnail" placeholder="https://example.com/image.jpg" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="short_desc" className="m-2 font-semibold text-gray-600">Short Description</label>
                                <input type="text" name="short_desc" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="full_desc" className="m-2 font-semibold text-gray-600">Full Description</label>
                                <textarea type="text" name="full_desc" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"></textarea>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="tag" className="m-2 font-semibold text-gray-600">Tags (comma separated)</label>
                                <input type="text" name="tag" placeholder="React, Node.js, PostgreSQL" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="stack" className="m-2 font-semibold text-gray-600">Tech Stack (comma seperated)</label>
                                <input type="text" name="stack" placeholder="React, TypeScript, Tailwind CSS" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="feature" className="m-2 font-semibold text-gray-600">Features (comma separated)</label>
                                <textarea type="text" name="feature" placeholder="User authentication, Real-time updates, Responsive design" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"></textarea>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="img" className="m-2 font-semibold text-gray-600">Image URLs (comma seperated)</label>
                                <textarea type="text" name="img" placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"></textarea>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="doc" className="m-2 font-semibold text-gray-600">Document URLs (comma seperated)</label>
                                <textarea type="text" name="doc" placeholder="https://example.com/doc1.pdf, https://example.com/doc2.pdf" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"></textarea>
                            </div>
                            <div className="flex w-full gap-5 mt-2">
                                <div className="w-[50%]">
                                    <label htmlFor="github" className="m-2 font-semibold text-gray-600">GitHub URL (optional)</label>
                                    <input type="text" name="github" placeholder="https://github.com/..." className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                                </div>
                                <div className="w-[50%]">
                                    <label htmlFor="video" className="m-2 font-semibold text-gray-600">Presentation URL (optional)</label>
                                    <input type="text" name="video" placeholder="https://demo.example.com" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"></input>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-5">
                                <button className="ursor-pointer bg-linear-to-r from-blue-500 to-purple-600 text-white text-lg font-extralight w-full h-13 rounded-lg hover:-translate-y-0.5 hover:shadow-xl transition duration-300">Add Project</button>
                                <button className="ursor-pointer text-gray-600 text-lg font-extralight w-full h-13 rounded-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-100 transition duration-300">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {edit && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur" onClick={() => setEdit(false)} >
                    <div className="overflow-y-scroll bg-white p-10 rounded-2xl w-200 h-150" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between border-b-2 border-gray-200 p-5">
                            <p className="font-semibold text-2xl text-gray-900">Edit Project</p>
                            <FontAwesomeIcon icon={faClose} onClick={() => setEdit(false)} className="cursor-pointer text-xl text-gray-600" />
                        </div>
                        <form className="mt-7" onSubmit={handleSubmit}>
                            <div className="mt-2">
                                <label htmlFor="title" className="m-2 font-semibold text-gray-600">Title</label>
                                <input type="text" name="title" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                        value={selectedProject?.title || ""}
                                        onChange={(e) =>
                                            setSelectedProject({ ...selectedProject, title: e.target.value })
                                        }></input>
                            </div>
                            <div className="flex w-full gap-5 mt-2">
                                <div className="w-[50%]">
                                    <label htmlFor="category" className="m-2 font-semibold text-gray-600">Category</label>
                                    <select name="category" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                            value={selectedProject?.category || ""}
                                            onChange={(e) =>
                                                setSelectedProject({ ...selectedProject, category: e.target.value })
                                            }>
                                        <option value="Web/App">Web/App Project</option>
                                        <option value="Game">Game Project</option>
                                        <option value="Infra">Infrastructure Project</option>
                                    </select>
                                </div>
                                <div className="w-[50%]">
                                    <label htmlFor="date" className="m-2 font-semibold text-gray-600">Date</label>
                                    <input type="text" name="date" placeholder="January 2026" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                            value={selectedProject?.date || ""}
                                            onChange={(e) =>
                                                setSelectedProject({ ...selectedProject, date: e.target.value })
                                            }></input>
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="role" className="m-2 font-semibold text-gray-600">Role</label>
                                <input type="text" name="role" placeholder="Full Stack Developer" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                        value={selectedProject?.role || ""}
                                        onChange={(e) =>
                                            setSelectedProject({ ...selectedProject, title: e.target.value })
                                        }></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="thumbnail" className="m-2 font-semibold text-gray-600">Thumbnail URL</label>
                                <input type="text" name="thumbnail" placeholder="https://example.com/image.jpg" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                        value={selectedProject?.thumbnail || ""}
                                        onChange={(e) =>
                                            setSelectedProject({ ...selectedProject, title: e.target.value })
                                        }></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="short_desc" className="m-2 font-semibold text-gray-600">Short Description</label>
                                <input type="text" name="short_desc" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                        value={selectedProject?.short_desc || ""}
                                        onChange={(e) =>
                                            setSelectedProject({ ...selectedProject, title: e.target.value })
                                        }></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="full_desc" className="m-2 font-semibold text-gray-600">Full Description</label>
                                <textarea type="text" name="full_desc" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"
                                            value={selectedProject?.full_desc || ""}
                                            onChange={(e) =>
                                                setSelectedProject({ ...selectedProject, title: e.target.value })
                                            }></textarea>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="tag" className="m-2 font-semibold text-gray-600">Tags (comma separated)</label>
                                <input type="text" name="tag" placeholder="React, Node.js, PostgreSQL" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                        value={selectedProject?.tags?.join(", ") || ""}
                                        onChange={(e) =>
                                            setSelectedProject({
                                            ...selectedProject,
                                            tags: e.target.value.split(",").map(t => t.trim())
                                            })
                                        }></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="stack" className="m-2 font-semibold text-gray-600">Tech Stack (comma seperated)</label>
                                <input type="text" name="stack" placeholder="React, TypeScript, Tailwind CSS" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                        value={selectedProject?.stack?.join(", ") || ""}
                                        onChange={(e) =>
                                            setSelectedProject({
                                            ...selectedProject,
                                            tags: e.target.value.split(",").map(t => t.trim())
                                            })
                                        }></input>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="feature" className="m-2 font-semibold text-gray-600">Features (comma separated)</label>
                                <textarea type="text" name="feature" placeholder="User authentication, Real-time updates, Responsive design" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"
                                            value={selectedProject?.features?.join(", ") || ""}
                                            onChange={(e) =>
                                                setSelectedProject({
                                                ...selectedProject,
                                                tags: e.target.value.split(",").map(t => t.trim())
                                                })
                                            }></textarea>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="img" className="m-2 font-semibold text-gray-600">Image URLs (comma seperated)</label>
                                <textarea type="text" name="img" placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"
                                            value={selectedProject?.images?.join(", ") || ""}
                                            onChange={(e) =>
                                                setSelectedProject({
                                                ...selectedProject,
                                                tags: e.target.value.split(",").map(t => t.trim())
                                                })
                                            }></textarea>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="doc" className="m-2 font-semibold text-gray-600">Document URLs (comma seperated)</label>
                                <textarea type="text" name="doc" placeholder="https://example.com/doc1.pdf, https://example.com/doc2.pdf" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-30 outline-none pl-3 pt-2 mt-1 resize-none"
                                            value={selectedProject?.documents || ""}
                                            onChange={(e) =>
                                                setSelectedProject({ ...selectedProject, title: e.target.value })
                                            }></textarea>
                            </div>
                            <div className="flex w-full gap-5 mt-2">
                                <div className="w-[50%]">
                                    <label htmlFor="github" className="m-2 font-semibold text-gray-600">GitHub URL (optional)</label>
                                    <input type="text" name="github" placeholder="https://github.com/..." className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                            value={selectedProject?.github || ""}
                                            onChange={(e) =>
                                                setSelectedProject({ ...selectedProject, title: e.target.value })
                                            }></input>
                                </div>
                                <div className="w-[50%]">
                                    <label htmlFor="video" className="m-2 font-semibold text-gray-600">Presentation URL (optional)</label>
                                    <input type="text" name="video" placeholder="https://demo.example.com" className="border border-gray-300 bg-gray-100 w-full rounded-lg h-10 outline-none pl-3 mt-1"
                                            value={selectedProject?.video || ""}
                                            onChange={(e) =>
                                                setSelectedProject({ ...selectedProject, title: e.target.value })
                                            }></input>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-5">
                                <button className="ursor-pointer bg-linear-to-r from-blue-500 to-purple-600 text-white text-lg font-extralight w-full h-13 rounded-lg hover:-translate-y-0.5 hover:shadow-xl transition duration-300">Update Project</button>
                                <button className="ursor-pointer text-gray-600 text-lg font-extralight w-full h-13 rounded-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-100 transition duration-300">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <table className="m-auto bg-white shadow-lg w-360 p-3 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 h-15"> 
                    <tr>
                        <th className="text-start pl-5">Project</th>
                        <th className="text-start">Category</th>
                        <th className="text-start">Date</th>
                        <th className="text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map(p => (
                          <tr key={p._id} className="border-t border-gray-300">
                            <td className="p-2">
                                <div className="flex gap-5 pl-4 items-center">
                                    <Image src={p.thumbnail} width={100} height={100} alt="thumbnail" className="rounded-lg object-cover w-20 h-20"></Image>
                                    <div className="w-100">
                                        <p className="text-xl mb-1">{p.title}</p>
                                        <p className="truncate w-full text-sm text-gray-600">{p.short_desc}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="w-30 py-1 bg-blue-50 text-blue-600 rounded-full text-sm capitalize border border-blue-20 text-center">{p.category}</div>
                            </td>
                            <td className="text-gray-600">{p.date}</td>
                            <td>
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faEdit} className="text-gray-600 cursor-pointer" onClick={async () => {
                                        const res = await fetch(`/api/projects/${p._id}`);
                                        const data = await res.json();

                                        setSelectedProject(data);
                                        setEdit(true);
                                    }}/>
                                    <FontAwesomeIcon icon={faTrash} className="text-gray-600 cursor-pointer" onClick={async () => {
                                        await fetch(`/api/projects/${p._id}`, {
                                        method: "DELETE",
                                        });

                                        await fetchProjects();
                                    }}/>
                                </div>
                            </td>
                          </tr>  
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}