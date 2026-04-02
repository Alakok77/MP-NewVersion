"use client"

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/navigation";

export default function Login(){

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            console.log("login success");
            router.push("/dashboard");
            router.refresh();
        } else {
            console.log(data.error);
        }
    };

    return (
        <>
            <form onSubmit={handleLogin} className="mt-25 p-10 rounded-2xl flex flex-col items-center shadow-lg w-120 h-150 m-auto bg-white">
                <div className="bg-linear-to-r from-blue-500 to-purple-600 w-15 h-15 flex justify-center items-center rounded-lg">
                    <p className="text-white text-4xl font-bold">P</p>
                </div>
                <p className="text-4xl mt-8">Welcome Back</p>
                <p className="text-gray-500 mt-2">Sign in to access the dashboard</p>
                <div className='mt-10'>
                    <label className='text-gray-700'>Username</label>
                    <div className='w-100 h-10 bg-gray-100 rounded-lg flex gap-2 items-center pl-2 mt-2 border border-gray-400 focus-within:border-blue-600'>
                        <FontAwesomeIcon icon={faUser} className='text-gray-700'/>
                        <input name='username' placeholder="Enter your Username" type="text" className='outline-0 w-100 pl-1'></input>
                    </div>
                </div>
                <div className='mt-2'>
                    <label className='text-gray-700'>Password</label>
                    <div className='w-100 h-10 bg-gray-100 rounded-lg flex gap-2 items-center pl-2 mt-2 border border-gray-400 focus-within:border-blue-600'>
                        <FontAwesomeIcon icon={faLock} className='text-gray-700'/>
                        <input name='password' placeholder="Enter your password" type="password" className='outline-0 w-100 pl-1'></input>
                    </div>
                </div>
                <button type='submit' className='bg-linear-to-r from-blue-500 to-purple-600 w-100 h-10 rounded-lg mt-7 text-white text-lg hover:-translate-y-0.5 hover:shadow-xl transition duration-300'>Sing in</button>
            </form>
        </>
    );
}