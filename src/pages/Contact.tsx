import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import FaqList from '../components/FaqList'
import Seo from '../components/Seo'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { contactFaq, hours, site } from '../data/site'
import { breadcrumb, businessSchema, makeFaqSchema } from '../data/schema'

export default function Contact() {
  return (
    <>
      <Seo
        title="Kontakt – Gabinet Masażu Karolina Orlik, ul. Ochronek 34, Tarnów"
        description="Umów wizytę w gabinecie masażu w Tarnowie: tel. +48 888 804 777, gabinet@karolinaorlik.pl. Ul. Ochronek 34, 33-100 Tarnów. Pn–Pt 8:30–18:00, Sob 8:30–13:00."
        path="/kontakt"
        jsonLd={[businessSchema, makeFaqSchema(contactFaq), breadcrumb('Kontakt', '/kontakt')]}
      />
      <PageBanner title="Kontakt" />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-site gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <h1 className="text-[30px] font-extrabold leading-tight text-body lg:text-[34px]">
              Gabinet masażu i gimnastyki korekcyjnej
            </h1>
            <p className="mt-2 font-display text-2xl text-leaf">{site.owner}</p>

            <address className="mt-8 space-y-4 not-italic text-[17px]">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-leaf">
                <MapPin className="mt-1 shrink-0 text-sage" size={20} />
                <span>Ochronek 34<br />{site.postal} {site.city}</span>
              </a>
              <a href={site.phoneHref} className="flex items-center gap-3 font-bold hover:text-leaf">
                <Phone className="shrink-0 text-sage" size={20} /> 888 804 777
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-leaf">
                <Mail className="shrink-0 text-sage" size={20} /> {site.email}
              </a>
            </address>

            <h2 className="mt-10 text-xl font-extrabold text-ink">Godziny otwarcia</h2>
            <table className="mt-4 text-[17px]">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <th scope="row" className="py-1 pr-16 text-left font-bold text-body">{h.day}</th>
                    <td className="py-1">{h.open ? `${h.open}–${h.close}` : 'Zamknięte'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={site.phoneHref} className="btn-sage">Zadzwoń i umów wizytę</a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-leaf hover:bg-leaf hover:text-white"><Facebook size={18} /></a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-leaf hover:bg-leaf hover:text-white"><Instagram size={18} /></a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <iframe
              title="Mapa dojazdu – Gabinet Masażu Karolina Orlik, Ochronek 34, Tarnów"
              src={site.mapsEmbed}
              className="h-[420px] w-full rounded-2xl border-0 lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      {/* Jak umówić wizytę */}
      <section className="bg-mist py-20" aria-labelledby="rezerwacja">
        <div className="mx-auto max-w-site px-4">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">Rezerwacja</p>
            <h2 id="rezerwacja" className="mt-3 font-display text-[34px] text-ink lg:text-[40px]">Jak umówić wizytę</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: 'Zadzwoń', d: `Najszybciej: ${site.phone}. Ustalimy termin i rodzaj zabiegu.`, href: site.phoneHref },
              { t: 'Lub napisz', d: `E-mail: ${site.email} – odpowiem i zaproponuję termin.`, href: `mailto:${site.email}` },
              { t: 'Przyjdź do gabinetu', d: `${site.street}, ${site.postal} ${site.city}. Przed zabiegiem krótko porozmawiamy.`, href: site.mapsUrl },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08}>
                <li className="h-full">
                  <a href={x.href} {...(i === 2 ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex h-full gap-4 rounded-2xl bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage font-display text-lg text-white">{i + 1}</span>
                    <span><strong className="block text-ink">{x.t}</strong>{x.d}</span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[860px] px-4">
          <h2 className="mb-8 text-center font-display text-[32px] text-ink">Pytania o wizytę</h2>
          <FaqList items={contactFaq} />
        </div>
      </section>
    </>
  )
}

