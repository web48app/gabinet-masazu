import Seo from '../components/Seo'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { scope, site } from '../data/site'
import { breadcrumb, personSchema } from '../data/schema'

export default function About() {
  return (
    <>
      <Seo
        title="O mnie – Karolina Orlik, masażystka i instruktor gimnastyki korekcyjnej | Tarnów"
        description="Karolina Orlik – dyplomowany technik masażysta i instruktor gimnastyki korekcyjnej z doświadczeniem z placówki rehabilitacyjnej w Niemczech. Gabinet w Tarnowie."
        path="/o-mnie"
        jsonLd={[personSchema, breadcrumb('O mnie', '/o-mnie')]}
      />
      <PageBanner title="O mnie" />

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

        <div className="mx-auto mt-16 max-w-site px-4">
          <Reveal>
            <h2 className="text-[34px] font-extrabold text-body lg:text-[40px]">Zakres mojej pracy</h2>
            <ul className="mt-6 space-y-2 text-[17px]">
              {scope.map((s) => (
                <li key={s}>
                  <span className="text-ink" aria-hidden="true">✔ </span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-block rounded-full bg-sage p-[10px_44px]">
              <a href={site.phoneHref} className="inline-block rounded-full bg-[#32373c] px-6 py-3 text-[15px] font-bold text-white transition hover:bg-ink">
                Umów wizytę
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
