import { Phone } from 'lucide-react'
import { site } from '../data/site'

export default function CtaBand({ title = 'Potrzebujesz ulgi dla ciała?', text = 'Zadzwoń i umów wizytę w gabinecie masażu w Tarnowie – dobierzemy zabieg do Twoich potrzeb.' }: { title?: string; text?: string }) {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-6 rounded-[28px] bg-sage px-8 py-12 text-center text-white md:flex-row md:text-left lg:px-14">
        <div>
          <h2 className="font-display text-[30px] leading-tight lg:text-[36px]">{title}</h2>
          <p className="mt-2 max-w-[560px] text-white/90">{text}</p>
        </div>
        <a href={site.phoneHref} className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-extrabold text-ink transition hover:bg-ink hover:text-white">
          <Phone size={18} /> {site.phone}
        </a>
      </div>
    </section>
  )
}
