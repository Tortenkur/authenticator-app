"use client";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function ProfilePage(){
    const router = useRouter()
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error: any) {
            toast.error(error.message);
        }

    }
    return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <hr />
        <button
         onClick={logout}
         className="p-2 border border-gray-300 rounded-lg mt-2 mb-4 focus:outline-none focus:border-gray-600"
        >Logout</button>
    </div>
    )
}

