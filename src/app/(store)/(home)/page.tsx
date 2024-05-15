import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-never-stop-learning.png"
          alt=""
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] border-2 border-zinc-500 rounded-full p-1 pl-5 bg-black/60">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="bg-violet-500 rounded-full px-4 h-full flex items-center font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-java.png"
          alt=""
          width={500}
          height={500}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] border-2 border-zinc-500 rounded-full p-1 pl-5 bg-black/60">
          <span className="text-sm truncate">Moletom Java</span>
          <span className="bg-violet-500 rounded-full px-4 h-full flex items-center font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={500}
          height={500}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] border-2 border-zinc-500 rounded-full p-1 pl-5 bg-black/60">
          <span className="text-sm truncate">Moletom Do While</span>
          <span className="bg-violet-500 rounded-full px-4 h-full flex items-center font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
