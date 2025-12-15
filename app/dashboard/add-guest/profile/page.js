import { auth, signOut } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Profile () {
   const session = await auth()
   console.log(session);

   if (!session) {
      redirect("/auth/login")
   }
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-23 md:px-12 lg:py-15 lg:px-16">
            <div className="w-full  py-10 px-2 md:w-[350px] flex flex-col h-auto shadow-md rounded-md md:py-10 md:px-4">
               <div className="flex  justify-center">
                  <Image
                  src={session?.user?.image}
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="rounded-2xl w-20 h-20 border border-gray-100"/> 
               </div>
                  <h1 className="text-lg font-semibold text-center text-gray-800">{session?.user?.name}</h1>
                  <p className="text-center text-sm">@emmy</p>
                  <div className="flex justify-center mt-3">
                     <button className="w-[90px] h-9 border rounded-xl border-gray-700 ">Edit Profile</button>
                  </div>
                  <div className="mt-5 flex flex-col gap-4">
                     <p className="border-b border-gray-300 text-lg text-center">Email: {session?.user?.email}</p>
                     <p className="border-b border-gray-300 text-lg text-center">userId: {session?.user?.id}</p>
                  </div>
                  <form action={async ()=>{
                                "use server"
                              await signOut(); 
                  }}
                   className="mt-3 flex justify-end">
                     <button className="w-full h-10 cursor-pointer bg-red-500 rounded-md text-white ">LogOut</button>
                  </form>
            </div>
        </main>
    )
}