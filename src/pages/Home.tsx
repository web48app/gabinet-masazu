import { Link } from 'react-router-dom'
import { ChevronRight, MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import FaqList from '../components/FaqList'
import { faq, services, site } from '../data/site'
import { businessSchema, faqSchema, personSchema, websiteSchema } from '../data/schema'

export default function Home() {
  return (
    <>
      <Seo
        title="Masaż leczniczy Tarnów – Gabinet Masażu Karolina Orlik"
        description="Gabinet masażu leczniczego, terapii manualnej i gimnastyki korekcyjnej w Tarnowie (ul. Ochronek 34). Masaż od 65 zł. Umów wizytę: +48 888 804 777."
        path="/"
        jsonLd={[businessSchema, personSchema, websiteSchema, faqSchema]}
      />
      <Helmet>
        <link rel="preload" as="image" href="/img/gabinet-masazu-tarnow-hero.jpg" imageSrcSet="/img/gabinet-masazu-tarnow-hero-960.jpg 960w, /img/gabinet-masazu-tarnow-hero.jpg 1920w" imageSizes="100vw" />
      </Helmet>

      {/* HERO */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden lg:min-h-[525px]">
        <img
          src="/img/gabinet-masazu-tarnow-hero.jpg"
          srcSet="/img/gabinet-masazu-tarnow-hero-960.jpg 960w, /img/gabinet-masazu-tarnow-hero.jpg 1920w"
          sizes="100vw"
          alt="Wnętrze gabinetu masażu Karoliny Orlik w Tarnowie – stół do masażu"
          width={1920}
          height={700}
          {...{ fetchpriority: 'high' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5b5b5b]/45" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-[620px] px-4 py-20 text-center text-white lg:pt-28"
        >
          <h1 className="font-display text-[40px] leading-[1.2] sm:text-5xl lg:text-[64px]">
            Masaż leczniczy i terapia manualna
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed sm:text-lg">
            Pomagam w redukcji bólu, napięć mięśniowych oraz przeciążeń układu ruchu. Każdy zabieg dobieram indywidualnie do problemu i potrzeb pacjenta.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link to="/cennik" className="btn-outline-white">
              Cennik <ChevronRight size={16} />
            </Link>
            <a href={site.phoneHref} className="btn-hero">
              Umów wizytę <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-20 lg:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-20">
          <Reveal>
            <h2 className="text-[32px] font-extrabold leading-tight text-ink lg:text-[42px]">
              Gabinet masażu leczniczego i gimnastyki korekcyjnej w Tarnowie
            </h2>
            <p className="mt-6 leading-[1.8]">
              Nazywam się <strong>Karolina Orlik</strong> i prowadzę gabinet masażu leczniczego, terapii manualnej oraz gimnastyki korekcyjnej.
            </p>
            <p className="mt-4 leading-[1.8]">
              Jestem dyplomowanym technikiem masażystą oraz instruktorem gimnastyki korekcyjnej. Posiadam wieloletnie doświadczenie zdobyte w placówce fizjoterapeutycznej w Niemczech, gdzie pracowałam z pacjentami z różnymi problemami narządu ruchu.
            </p>
            <Link to="/o-mnie" className="btn-sage mt-8">Poznaj mnie</Link>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src="/img/gabinet-masazu-tarnow-wnetrze.jpg"
              alt="Gabinet masażu leczniczego i terapii manualnej – Karolina Orlik, Tarnów"
              width={900}
              height={1200}
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-[520px] rounded-[24px] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            />
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-mist py-20 lg:py-24" aria-labelledby="uslugi">
        <div className="mx-auto max-w-site px-4">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">Zakres usług</p>
            <h2 id="uslugi" className="mt-3 font-display text-[34px] text-ink lg:text-[42px]">Masaże i terapia w Tarnowie</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 0.08}>
                <article className="h-full rounded-2xl bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
                  <h3 className="font-display text-xl text-ink">{s.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed">{s.text}</p>
                  {s.from && <p className="mt-4 text-sm font-bold text-bronze">od {s.from} zł</p>}
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/cennik" className="btn-sage">Zobacz pełny cennik</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24" aria-labelledby="faq">
        <div className="mx-auto max-w-[860px] px-4">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">FAQ</p>
            <h2 id="faq" className="mt-3 font-display text-[34px] text-ink lg:text-[42px]">Najczęstsze pytania</h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={faq} />
          </div>
        </div>
      </section>

      {/* LOCAL CTA */}
      <section className="pb-6">
        <div className="mx-auto grid max-w-site gap-6 px-4 md:grid-cols-3">
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[#ececec] p-6 hover:border-sage">
            <MapPin className="shrink-0 text-sage" size={28} />
            <span><strong className="block text-ink">{site.street}</strong>{site.postal} {site.city}</span>
          </a>
          <a href={site.phoneHref} className="flex items-center gap-4 rounded-2xl border border-[#ececec] p-6 hover:border-sage">
            <Phone className="shrink-0 text-sage" size={28} />
            <span><strong className="block text-ink">{site.phone}</strong>Zadzwoń i umów wizytę</span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-[#ececec] p-6">
            <Clock className="shrink-0 text-sage" size={28} />
            <span><strong className="block text-ink">Pn–Pt 8:30–18:00</strong>Sobota 8:30–13:00</span>
          </div>
        </div>
      </section>
    </>
  )
}
