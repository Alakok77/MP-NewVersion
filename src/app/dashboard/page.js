"use client"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function About(){
    const [open, setOpen] = useState(false);

    return (
        < >
            <div className="mt-25 p-10">
                <p className=" text-4xl font-semibold text-gray-900">Welcome back, <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Admin User</span></p>
                <p className="text-gray-600 mt-2">Manage your portfolio projects</p>
                <div className="flex gap-10 mt-10">
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Total Projects</p>
                        <p className="text-2xl">10</p>
                    </div>
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Web/App Projects</p>
                        <p className="text-2xl">10</p>
                    </div>
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Game Projects</p>
                        <p className="text-2xl">10</p>
                    </div>
                    <div className="bg-white shadow-lg w-80 h-30 rounded-lg flex flex-col justify-center p-10 gap-3">
                        <p className="text-gray-600">Infrastructure Projects</p>
                        <p className="text-2xl">10</p>
                    </div>
                </div>
                <button onClick={() => setOpen(true)} className="cursor-pointer bg-linear-to-r from-blue-500 to-purple-600 text-white text-lg font-extralight w-60 h-13 rounded-lg mt-8 hover:-translate-y-0.5 hover:shadow-xl transition duration-300">+ Add New Project</button>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur" onClick={() => setOpen(false)} >
                    <div className="bg-white p-6 rounded-2xl w-200 h-150" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between border-b-2 border-gray-200 p-5">
                            <p className="font-semibold text-2xl text-gray-900">Add New Project</p>
                            <FontAwesomeIcon icon={faClose} onClick={() => setOpen(false)} className="cursor-pointer text-xl text-gray-600" />
                        </div>
                        <form>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title"></input>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <table className="m-auto bg-white shadow-lg w-360 p-3 rounded-lg">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
}