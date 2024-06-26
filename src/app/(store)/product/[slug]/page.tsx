import Image from 'next/image'

export default function Product() {
  return (
    <div className="relative grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$99
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$8,25
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button className="flex justify-center items-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              P
            </button>
            <button className="flex justify-center items-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              M
            </button>
            <button className="flex justify-center items-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              G
            </button>
            <button className="flex justify-center items-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              GG
            </button>
          </div>
        </div>

        <button className="mt-8 flex justify-center items-center h-12 rounded-full bg-emerald-600 font-semibold text-white">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
