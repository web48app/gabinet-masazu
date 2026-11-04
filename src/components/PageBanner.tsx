import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden bg-[#808080]">
      <img
        src="/img/gabinet-masazu-tarnow-hero-960.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="eager"
      />
      <div className="relative mx-auto max-w-site px-4 pb-16 pt-14 text-center text-white lg:pb-[70px] lg:pt-[90px]">
        <p className="font-display text-[42px] leading-tight lg:text-[48px]">{title}</p>
        <nav aria-label="Okruszki" className="mt-6 flex items-center justify-center gap-2 text-sm">
          <Link to="/" className="hover:underline">Strona główna</Link>
          <ChevronRight size={14} />
          <span className="text-sage" aria-current="page">{title}</span>
        </nav>
      </div>
    </section>
  )
}
