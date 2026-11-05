import { Link } from 'react-router-dom'
import { GraduationCap, HeartHandshake, MessagesSquare, Sparkles, ShieldCheck, Users } from 'lucide-react'
import Seo from '../components/Seo'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { contraindications, scope, site } from '../data/site'
import { breadcrumb, personSchema } from '../data/schema'

const highlights = [
  { icon: GraduationCap, title: 'Dyplomowany technik masażysta', text: 'Oraz instruktor gimnastyki korekcyjnej – z formalnym przygotowaniem do pracy z ciałem.' },
  { icon: Users, title: 'Doświadczenie z Niemiec', text: 'Wieloletnia praca w placówce rehabilitacyjnej: terapie manualne, masaże i kinezyterapia.' },
  { icon: HeartHandshake, title: 'Indywidualne podejście', text: 'Nie pracuję schematami – technikę i intensywność dobieram do Twojego problemu.' },
  { icon: ShieldCheck, title: 'Dyskrecja i komfort', text: 'Spokojna atmosfera, czysty gabinet i pełna dyskrecja podczas każdej wizyty.' },
]

const steps = [
  { icon: MessagesSquare, title: 'Rozmowa', text: 'Pytam o dolegliwości, styl życia, przebyte urazy i operacje. Jeśli masz dokumentację medyczną – weź ją ze sobą.' },
  { icon: HeartHandshake, title: 'Dobór zabiegu', text: 'Na tej podstawie dobieram technikę, intensywność i partie ciała, którymi się zajmiemy.' },
  { icon: Sparkles, title: 'Zabieg', text: 'Pracuję w spokojnej atmosferze, na bieżąco pytając o komfort i odczucia.' },
  { icon: GraduationCap, title: 'Zalecenia', text: 'Po zabiegu podpowiem, jak dbać o ciało w domu i czy warto zaplanować kolejne wizyty.' },
]

const problems = [
  'ból pleców, karku i odcinka lędźwiowego',
  'napięcia mięśniowe i bóle głowy napięciowe',
  'przeciążenia od pracy siedzącej lub fizycznej',
  'ograniczona ruchomość stawów',
  'stany po kontuzjach i urazach',
  'stany po operacjach i z endoprotezami',
  'wady postawy u dzieci i dorosłych',
  'obrzęki i uczucie ciężkich nóg',
  'stres, przemęczenie, problemy ze snem',
  'regeneracja po treningach',
]

export default function About() {
  return (
    <>
      <Seo
        title="O mnie – Karolina Orlik, masażystka i instruktor gimnastyki korekcyjnej | Tarnów"
        description="Karolina Orlik – dyplomowany technik masażysta i instruktor gimnastyki korekcyjnej z doświadczeniem z placówki rehabilitacyjnej w Niemczech. Gabinet masażu w Tarnowie, ul. Ochronek 34."
        path="/o-mnie"
        image="/img/karolina-orlik-masazystka-tarnow.jpg"
        jsonLd={[personSchema, breadcrumb('O mnie', '/o-mnie')]}
      />
      <PageBanner title="O mnie" />

      {/* Intro – 1:1 z oryginałem */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-site items-start gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <img
              src="/img/karolina-orlik-masazystka-tarnow.jpg"
              alt="Karolina Orlik – masażystka w swoim gabinecie masażu w Tarnowie"
              width={900}
              height={1200}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-[40px] font-extrabold text-body lg:text-[48px]">O mnie</h1>
            <p className="mt-2 font-display text-xl text-leaf">Karolina Orlik – masaż leczniczy i gimnastyka korekcyjna, Tarnów</p>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.9]">
              <p>
                Zajmuję się masażem leczniczym, relaksacyjnym oraz pracą z ciałem ukierunkowaną na redukcję bólu, napięć i przeciążeń.
                Swoją działalność w Polsce rozpoczęłam w połowie 2025 roku. Wcześniej pracowałam w placówce rehabilitacyjnej w Niemczech. Tam zdobyłam największe doświadczenie w pracy z pacjentami, prowadząc terapie manualne, masaże oraz kinezyterapię. Moimi pacjentami były osoby w różnym wieku – z problemami bólowymi, ograniczeniami spowodowanymi chorobą bądź kontuzjami, a także osoby po operacjach i z endoprotezami.
              </p>
              <p>
                Każdy masaż poprzedzam krótką rozmową, aby dobrać odpowiednią technikę oraz intensywność zabiegu. Nie pracuję schematami – najważniejsze jest dla mnie realne wsparcie organizmu pacjenta. Podczas zabiegu dbam o spokojną atmosferę, pełną dyskrecję oraz komfort pacjenta.
                Moim celem jest nie tylko rozluźnienie mięśni, ale również poprawa funkcjonowania i regeneracja organizmu.
              </p>
              <p>
                Jeśli czujesz, że Twoje ciało potrzebuje ulgi, regeneracji lub profesjonalnego wsparcia – serdecznie zapraszam do kontaktu. Wspólnie zadbamy o Twoje zdrowie i dobre samopoczucie.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dlaczego ja */}
      <section className="bg-mist py-20" aria-labelledby="dlaczego">
        <div className="mx-auto max-w-site px-4">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">Dlaczego warto</p>
            <h2 id="dlaczego" className="mt-3 font-display text-[34px] text-ink lg:text-[40px]">Doświadczenie, które czujesz w dłoniach</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                  <h.icon className="text-sage" size={34} strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-xl text-ink">{h.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Z czym przyjść + zakres */}
      <section className="py-20">
        <div className="mx-auto grid max-w-site gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-[30px] font-extrabold text-body lg:text-[36px]">Z czym możesz do mnie przyjść</h2>
            <p className="mt-4 leading-relaxed">Najczęściej pomagam osobom, które zmagają się z:</p>
            <ul className="mt-5 grid gap-x-6 gap-y-2 text-[16px] sm:grid-cols-2">
              {problems.map((p) => (
                <li key={p} className="flex gap-2"><span className="text-sage" aria-hidden="true">●</span>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[30px] font-extrabold text-body lg:text-[36px]">Zakres mojej pracy</h2>
            <ul className="mt-6 space-y-2 text-[17px]">
              {scope.map((s) => (
                <li key={s}>
                  <span className="text-ink" aria-hidden="true">✔ </span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href={site.phoneHref} className="btn-sage">
                Umów wizytę
              </a>
              <Link to="/cennik" className="font-bold text-leaf underline-offset-4 hover:underline">Zobacz cennik →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Jak wygląda wizyta */}
      <section className="bg-mist py-20" aria-labelledby="wizyta">
        <div className="mx-auto max-w-site px-4">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">Pierwsza wizyta</p>
            <h2 id="wizyta" className="mt-3 font-display text-[34px] text-ink lg:text-[40px]">Jak wygląda wizyta w gabinecie</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <li className="relative h-full rounded-2xl bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                  <span className="absolute right-6 top-5 font-display text-4xl text-sage/40">0{i + 1}</span>
                  <s.icon className="text-sage" size={30} strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Przeciwwskazania */}
      <section className="py-20">
        <div className="mx-auto max-w-[860px] px-4">
          <Reveal>
            <h2 className="text-[28px] font-extrabold text-body lg:text-[32px]">Przeciwwskazania do masażu</h2>
            <p className="mt-4 leading-relaxed">Dla Twojego bezpieczeństwa masażu nie wykonuje się m.in. w przypadku:</p>
            <ul className="mt-4 space-y-2">
              {contraindications.map((c) => (
                <li key={c} className="flex gap-2"><span className="text-bronze" aria-hidden="true">–</span>{c}</li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] italic">W razie wątpliwości porozmawiajmy przed wizytą lub skonsultuj się z lekarzem prowadzącym.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
