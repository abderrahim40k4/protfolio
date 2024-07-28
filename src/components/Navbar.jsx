import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export function Navbar() {

  return (
    <>
        <div className="w-full flex flex-row justify-between items-start">
        <div className="w-1/3 h-full">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        <div className="w-2/3">
        test
        </div>
        </div>
    </>
  )
}

