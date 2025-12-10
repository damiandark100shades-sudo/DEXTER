import Image from "next/image"

export default function Profile () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-23 md:px-12 lg:py-15 lg:px-16">
            <div className="w-full  py-10 px-2 md:w-[350px] flex flex-col h-auto shadow-md rounded-md md:py-10 md:px-4">
               <div className="flex  justify-center">
                  <Image
                  src="/mybg.png"
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="rounded-2xl w-[100px] h-[100px] border border-gray-100"/> 
               </div>
                  <h1 className="text-lg font-semibold text-center text-gray-800">Emmanuel Augustine</h1>
                  <p className="text-center text-sm">@emmy</p>
                  <div className="flex justify-center mt-3">
                     <button className="w-[115px] h-10 border rounded-xl border-gray-700 ">Edit Profile</button>
                  </div>
                  <div className="mt-5 flex flex-col gap-4">
                     <p className="border-b border-gray-300 text-lg text-center">email:augustine@gmail.com</p>
                     <p className="border-b border-gray-300 text-lg text-center">userId: 4567</p>
                  </div>
            </div>
        </main>
    )
}