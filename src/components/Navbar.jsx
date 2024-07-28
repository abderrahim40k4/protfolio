import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Linkedin, Facebook, Instagram,Github } from 'lucide-react';

export function Navbar() {

  return (
    <>
        <div className="w-full flex flex-row justify-between items-center">
        <div className="w-1/6 h-full">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        <div className="md:w-5/6 w-4/6 h-[100px] flex flex-col justify-between items-start">
            <div className="font-bold text-3xl text-gray-400">
                Abderrahim Ait Oufassi
            </div>
            <div className="font-bold text-xl text-gray-400">
                FullStack Developer
            </div>
            <div className="font-bold text-xl text-gray-400 flex flex-row justify-between items-center w-1/3">
            <Linkedin/>
            <Facebook />
            <Instagram />
            <Github />
            </div>
        </div>
        </div>
    </>
  )
}

