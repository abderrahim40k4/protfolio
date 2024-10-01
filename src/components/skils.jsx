import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

import { BsBootstrap } from 'react-icons/bs'
import { DiLaravel, DiMongodb, DiSass } from 'react-icons/di'
import { RiNodejsLine, RiReactjsLine, RiTailwindCssLine, RiVuejsLine } from 'react-icons/ri'
import { TbBrandMysql, TbBrandNextjs } from 'react-icons/tb'


export function Skils() {

  return (
    <>

      <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-20 text-4xl text-center">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className='text-7xl text-green-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiLaravel className='text-7xl text-red-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-7xl text-white' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiVuejsLine className='text-7xl text-teal-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className='text-7xl text-sky-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiSass className='text-7xl text-fuchsia-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsBootstrap className='text-7xl text-violet-400' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb className='text-7xl text-emerald-600' />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandMysql className='text-7xl text-blue' />
          </div>
        </div>

      </div>

    </>
  )
}
