import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import pfp from '../assets/pfp-pic.jfif'
  import { Badge } from "@/components/ui/badge"
  import { Linkedin, Facebook, Instagram,Github, Dot} from 'lucide-react';
  import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


export function Navbar() {

  return (
    <>
        <div className="w-full flex flex-row justify-between items-center">
        <div className="md:w-1/6 w-2/6 md:h-[160px] h-[100px] inline-flex justify-between items-center flex-col">
        <Avatar>
            <AvatarImage src={pfp} alt="pfp" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-row justify-evenly items-center">
        <Dot color="#1eff00" strokeWidth={3} className="p-0 m-0" />
        <Badge variant="default">Available</Badge>
        </div>

        </div>
        <div className="md:w-5/6 w-4/6 md:h-[130px] h-[100px] flex flex-col justify-between items-start">
            <div className="font-bold md:text-3xl text-sm">
                Abderrahim Ait Oufassi
            </div>
            <div className="font-bold md:text-xl text-xs">
                FullStack Developer
            </div>
            <div className="font-bold text-xl flex flex-row justify-between items-center w-1/4 text-blue">
            <ToggleGroup type="single">
              <ToggleGroupItem value="a"><Linkedin/></ToggleGroupItem>
              <ToggleGroupItem value="b"><Facebook /></ToggleGroupItem>
              <ToggleGroupItem value="c"><Instagram /></ToggleGroupItem>
              <ToggleGroupItem value="c"><Github /></ToggleGroupItem>
            </ToggleGroup>
            </div>
        </div>
        </div>
    </>
  )
}

