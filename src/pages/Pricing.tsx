import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import PaymentMethods from '../components/PaymentMethods'
import { categories, prices, pricesFor, pricingFaq, serviceDetails, type ServiceDetail } from '../data/site'
import { breadcrumb, businessSchema, makeFaqSchema, servicesListSchema } from '../data/schema'


const tips = [
  'Na masaż ciała najlepiej nie przychodzić tuż po obfitym posiłku.',
  'Na gimnastykę korekcyjną zabierz wygodny strój sportowy.',
  'Jeśli masz dokumentację medyczną (np. po operacji lub urazie) – weź ją ze sobą.',
  'Po masażu warto wypić szklankę wody i dać ciału chwilę odpoczynku.',
]

export default function Pricing() {
  const cats = Object.entries(categories) as [keyof typeof categories, string][]
  const [active, setActive] = useState<keyof typeof categories>('terapia')
  return (
    <>
      <Seo
        title="Cennik masażu Tarnów – masaż leczniczy od 65 zł | Karolina Orlik"
        description="Cennik gabinetu masażu w Tarnowie: masaż leczniczy 30 min 65 zł / 60 min 130 zł, Kobido 200 zł, Hot Stone 130 zł, drenaż limfatyczny od 50 zł, gimnastyka korekcyjna od 50 zł."
        path="/cennik"
        jsonLd={[businessSchema, servicesListSchema, makeFaqSchema(pricingFaq), breadcrumb('Cennik', '/cennik')]}
      />
      <PageBanner title="Cennik" />

      {/* Tabela – 1:1 z oryginałem */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[860px] px-4">
          <Reveal>
            <h1 className="text-center font-display text-[36px] tracking-[0.12em] text-leaf lg:text-[40px]">CENNIK</h1>
          </Reveal>

          <div className="-mx-4 mt-10 overflow-x-auto px-4 py-3">
            <table className="w-full min-w-[420px] border-separate border-spacing-0 text-[15px]">
              <caption className="sr-only">Cennik masaży i gimnastyki korekcyjnej – Tarnów</caption>
              <thead>
                <tr className="text-left text-sm font-bold uppercase tracking-[0.2em] text-leaf [&>th]:border-b-2 [&>th]:border-[#e6e6e6]">
                  <th scope="col" className="py-4 pr-4">Rodzaj</th>
                  <th scope="col" className="py-4 pr-4 text-right">Czas</th>
                  <th scope="col" className="py-4 text-right">Cena</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((p, i) => (
                  <tr
                    key={p.name + p.time}
                    className={
                      'relative cursor-default text-bronze transition duration-200 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-[0_14px_32px_rgba(0,0,0,0.13)] hover:[&>th]:shadow-[inset_4px_0_0_#9CC7A1] ' +
                      (i % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-white')
                    }
                  >
                    <th scope="row" className="py-3 pl-3 pr-4 text-left font-normal">{p.name}</th>
                    <td className="py-3 pr-4 text-right">{p.time} min</td>
                    <td className="py-3 pr-3 text-right font-semibold">{p.price} zł</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-[28px] font-extrabold text-body">Formy płatności</h2>
            <PaymentMethods />
          </div>
        </div>
      </section>

      {/* Opisy zabiegów */}
      <section className="bg-mist py-20" aria-labelledby="opisy">
        <div className="mx-auto max-w-site px-4">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">Opisy zabiegów</p>
            <h2 id="opisy" className="mt-3 font-display text-[34px] text-ink lg:text-[40px]">Który zabieg wybrać?</h2>
            <p className="mx-auto mt-4 max-w-[640px]">Krótko o każdym zabiegu – dla kogo jest i czego się spodziewać. Nie wiesz, co wybrać? Zadzwoń, doradzę.</p>
          </Reveal>

          <div role="tablist" aria-label="Kategorie zabiegów" className="mt-12 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
            {cats.map(([key, label]) => (
              <button
                key={key}
                role="tab"
                id={`tab-${key}`}
                aria-selected={active === key}
                aria-controls={`panel-${key}`}
                onClick={() => setActive(key)}
                className={
                  'shrink-0 rounded-full px-6 py-3 text-[14px] font-bold transition ' +
                  (active === key ? 'bg-sage text-white shadow-[0_8px_20px_rgba(156,199,161,0.45)]' : 'bg-white text-ink hover:bg-sage-light')
                }
              >
                {label}
              </button>
            ))}
          </div>

          {cats.map(([key, label]) => (
            <div key={key} role="tabpanel" id={`panel-${key}`} aria-labelledby={`tab-${key}`} hidden={active !== key} className="mt-10">
              <h3 className="sr-only">{label}</h3>
              <motion.div
                key={active === key ? 'on' : 'off'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {serviceDetails
                  .filter((s) => s.category === key)
                  .map((s) => (
                    <ServiceCard key={s.slug} s={s} />
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Przygotowanie + FAQ */}
      <section className="py-20">
        <div className="mx-auto grid max-w-site gap-14 px-4 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <h2 className="text-[28px] font-extrabold text-body lg:text-[32px]">Jak przygotować się do wizyty</h2>
            <ul className="mt-6 space-y-3">
              {tips.map((t) => (
                <li key={t} className="flex gap-3"><span className="text-sage" aria-hidden="true">✔</span>{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-[15px]">
              Więcej o tym, jak pracuję, przeczytasz na stronie <Link to="/o-mnie" className="font-bold text-leaf hover:underline">O mnie</Link>.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-6 text-[28px] font-extrabold text-body lg:text-[32px]">Pytania o cennik</h2>
            <FaqList items={pricingFaq} />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Wybrałeś zabieg?" text="Zadzwoń, a ustalimy dogodny termin wizyty w gabinecie przy ul. Ochronek 34 w Tarnowie." />
    </>
  )
}

function ServiceCard({ s }: { s: ServiceDetail }) {
  const pr = pricesFor(s.name)
  return (
    <article id={s.slug} className="h-full scroll-mt-24 rounded-2xl bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h4 className="font-display text-[22px] text-ink">{s.name}</h4>
        <p className="text-sm font-bold text-bronze">{pr.map((p) => `${p.time} min – ${p.price} zł`).join(' · ')}</p>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed">{s.long}</p>
      <p className="mt-4 text-sm font-bold text-ink">Dla kogo:</p>
      <ul className="mt-1 flex flex-wrap gap-2">
        {s.forWhom.map((f) => (
          <li key={f} className="rounded-full bg-sage-light px-3 py-1 text-[13px] text-ink">{f}</li>
        ))}
      </ul>
    </article>
  )
}
