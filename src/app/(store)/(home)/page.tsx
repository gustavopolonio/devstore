import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')
  const products = await response.json()
  return products
}

export default async function Home() {
  const [highlightedProduct, ...secondaryProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={highlightedProduct.image}
          alt=""
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] border-2 border-zinc-500 rounded-full p-1 pl-5 bg-black/60">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="bg-violet-500 rounded-full px-4 h-full flex items-center font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {secondaryProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src={product.image}
            alt=""
            width={500}
            height={500}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] border-2 border-zinc-500 rounded-full p-1 pl-5 bg-black/60">
            <span className="text-sm truncate">{product.title}</span>
            <span className="bg-violet-500 rounded-full px-4 h-full flex items-center font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
