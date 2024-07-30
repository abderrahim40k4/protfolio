import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Badge } from "@/components/ui/badge"
  import { Linkedin, Facebook, Instagram,Github, Dot} from 'lucide-react';

export function Navbar() {

  return (
    <>
        <div className="w-full flex flex-row justify-between items-center">
        <div className="w-1/6 h-[160px] inline-flex justify-between items-center flex-col">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-row justify-evenly items-center">
        <Dot color="#1eff00" strokeWidth={3} className="p-0 m-0" />
        <Badge variant="default">Available</Badge>
        </div>

        </div>
        <div className="md:w-5/6 w-4/6 h-[130px] flex flex-col justify-between items-start">
            <div className="font-bold text-3xl">
                Abderrahim Ait Oufassi
            </div>
            <div className="font-bold text-xl">
                FullStack Developer
            </div>
            <div className="font-bold text-xl flex flex-row justify-between items-center w-1/4 text-blue">
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

