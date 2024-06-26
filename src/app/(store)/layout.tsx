import { Header } from '@/components/header'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-rows-[min-content_max-content] gap-5 mx-auto w-full max-w-[1600px] min-h-screen p-8">
      <Header />
      {children}
    </div>
  )
}
