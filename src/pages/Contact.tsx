import { useState } from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from 'lucide-react'
import FaqList from '../components/FaqList'
import Seo from '../components/Seo'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { contactFaq, hours, serviceDetails, site } from '../data/site'
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

      {/* Formularz */}
      <section className="bg-mist py-20" aria-labelledby="napisz">
        <div className="mx-auto grid max-w-site gap-14 px-4 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">Rezerwacja</p>
            <h2 id="napisz" className="mt-3 font-display text-[34px] text-ink lg:text-[40px]">Jak umówić wizytę</h2>
            <ol className="mt-8 space-y-6">
              {[
                ['Zadzwoń', `Najszybciej: ${site.phone}. Ustalimy termin i rodzaj zabiegu.`],
                ['Lub napisz', 'Wypełnij formularz obok – otworzy się wiadomość e-mail z Twoim zapytaniem.'],
                ['Przyjdź do gabinetu', `${site.street}, ${site.postal} ${site.city}. Przed zabiegiem krótko porozmawiamy.`],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage font-display text-lg text-white">{i + 1}</span>
                  <span><strong className="block text-ink">{t}</strong>{d}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
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

function ContactForm() {
  const [f, setF] = useState({ name: '', phone: '', service: '', msg: '' })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value })
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Zapytanie o wizytę${f.service ? ' – ' + f.service : ''}`
    const body = `Imię: ${f.name}\nTelefon: ${f.phone}\nZabieg: ${f.service || '-'}\n\n${f.msg}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
  const input = 'w-full rounded-xl border border-[#dedede] bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/30'
  return (
    <form onSubmit={submit} className="rounded-[24px] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-ink">Imię
          <input required value={f.name} onChange={set('name')} className={input + ' mt-2 font-normal'} autoComplete="name" />
        </label>
        <label className="block text-sm font-bold text-ink">Telefon
          <input required type="tel" value={f.phone} onChange={set('phone')} className={input + ' mt-2 font-normal'} autoComplete="tel" />
        </label>
      </div>
      <label className="mt-5 block text-sm font-bold text-ink">Zabieg
        <select value={f.service} onChange={set('service')} className={input + ' mt-2 font-normal'}>
          <option value="">Nie wiem – proszę o doradzenie</option>
          {serviceDetails.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
        </select>
      </label>
      <label className="mt-5 block text-sm font-bold text-ink">Wiadomość
        <textarea rows={4} value={f.msg} onChange={set('msg')} placeholder="Opisz krótko dolegliwości lub preferowany termin" className={input + ' mt-2 font-normal'} />
      </label>
      <button type="submit" className="btn-sage mt-6 w-full gap-2"><Send size={16} /> Wyślij zapytanie</button>
      <p className="mt-3 text-center text-xs text-[#8a8a8a]">Formularz otworzy Twój program pocztowy. Dane nie są nigdzie zapisywane.</p>
    </form>
  )
}
