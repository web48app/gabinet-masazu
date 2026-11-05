export const SITE_URL = 'https://gabinet.karolinaorlik.pl'

export const site = {
  name: 'Gabinet Masażu i Gimnastyki Korekcyjnej Karolina Orlik',
  shortName: 'Gabinet Masażu Karolina Orlik',
  owner: 'Karolina Orlik',
  phone: '+48 888 804 777',
  phoneHref: 'tel:+48888804777',
  email: 'gabinet@karolinaorlik.pl',
  street: 'ul. Ochronek 34',
  postal: '33-100',
  city: 'Tarnów',
  region: 'małopolskie',
  geo: { lat: 50.0175474, lng: 20.9994985 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ochronek+34,+33-100+Tarn%C3%B3w',
  mapsEmbed:
    'https://www.google.com/maps?q=Ochronek+34,+33-100+Tarn%C3%B3w&z=16&output=embed',
  facebook: 'https://www.facebook.com/gabinet.karolinaorlik/',
  instagram: 'https://www.instagram.com/gabinet.karolinaorlik/',
  hoursShort: 'pon. - pt.: 8:30 - 18:00',
}

export const hours = [
  { day: 'Poniedziałek', code: 'Monday', open: '08:30', close: '18:00' },
  { day: 'Wtorek', code: 'Tuesday', open: '08:30', close: '18:00' },
  { day: 'Środa', code: 'Wednesday', open: '08:30', close: '18:00' },
  { day: 'Czwartek', code: 'Thursday', open: '08:30', close: '18:00' },
  { day: 'Piątek', code: 'Friday', open: '08:30', close: '18:00' },
  { day: 'Sobota', code: 'Saturday', open: '08:30', close: '13:00' },
  { day: 'Niedziela', code: 'Sunday', open: null, close: null },
] as const

export type PriceItem = { name: string; time: number; price: number }

export const prices: PriceItem[] = [
  { name: 'Masaż leczniczy', time: 60, price: 130 },
  { name: 'Masaż leczniczy', time: 30, price: 65 },
  { name: 'Masaż relaksacyjny', time: 60, price: 130 },
  { name: 'Masaż kobido', time: 75, price: 200 },
  { name: 'Masaż hot-stone', time: 50, price: 130 },
  { name: 'Drenaż limfatyczny przyrządowy', time: 30, price: 50 },
  { name: 'Drenaż limfatyczny manualny', time: 40, price: 80 },
  { name: 'Masaż sportowy', time: 30, price: 80 },
  { name: 'Masaż stóp', time: 40, price: 100 },
  { name: 'Masaż klasyczny', time: 60, price: 150 },
  { name: 'Masaż klasyczny', time: 30, price: 75 },
  { name: 'Masaż antycellulitowy', time: 40, price: 150 },
  { name: 'Masaż twarzy z maseczką', time: 60, price: 150 },
  { name: 'Gimnastyka korekcyjna', time: 60, price: 100 },
  { name: 'Gimnastyka korekcyjna', time: 30, price: 50 },
]

export const scope = [
  'Masaż leczniczy',
  'Masaż klasyczny',
  'Masaż relaksacyjny',
  'Masaż sportowy',
  'Drenaż limfatyczny manualny',
  'Drenaż limfatyczny przyrządowy',
  'Masaż antycellulitowy',
  'Masaż stóp',
  'Masaż Hot Stone (gorącymi kamieniami)',
  'Masaż Kobido – naturalny lifting twarzy',
  'Gimnastyka korekcyjna dla dzieci i dorosłych',
]

export const services: { name: string; text: string; from?: number }[] = [
  {
    name: 'Masaż leczniczy',
    text: 'Ukierunkowana praca z bólem pleców, karku i kręgosłupa, napięciami mięśniowymi oraz przeciążeniami układu ruchu.',
    from: 65,
  },
  {
    name: 'Terapia manualna',
    text: 'Techniki manualne dobierane indywidualnie po krótkim wywiadzie – dla osób z ograniczoną ruchomością i dolegliwościami bólowymi.',
  },
  {
    name: 'Gimnastyka korekcyjna',
    text: 'Ćwiczenia korygujące wady postawy dla dzieci i dorosłych, prowadzone przez dyplomowanego instruktora.',
    from: 50,
  },
  {
    name: 'Masaż relaksacyjny i klasyczny',
    text: 'Rozluźnienie mięśni, redukcja stresu i regeneracja organizmu w spokojnej, dyskretnej atmosferze.',
    from: 75,
  },
  {
    name: 'Drenaż limfatyczny',
    text: 'Manualny lub przyrządowy drenaż wspierający krążenie limfy, redukcję obrzęków i uczucia ciężkich nóg.',
    from: 50,
  },
  {
    name: 'Masaż Kobido i masaż twarzy',
    text: 'Japoński masaż twarzy – naturalny lifting, poprawa napięcia skóry i owalu twarzy bez ingerencji.',
    from: 150,
  },
  {
    name: 'Masaż sportowy',
    text: 'Przygotowanie do wysiłku i szybsza regeneracja po treningu dla osób aktywnych fizycznie.',
    from: 80,
  },
  {
    name: 'Hot Stone, masaż stóp, antycellulitowy',
    text: 'Masaż gorącymi kamieniami, odprężający masaż stóp oraz masaż antycellulitowy modelujący sylwetkę.',
    from: 100,
  },
]

export const faq = [
  {
    q: 'Gdzie znajduje się gabinet masażu Karoliny Orlik?',
    a: 'Gabinet mieści się w Tarnowie przy ul. Ochronek 34 (33-100 Tarnów). Zapraszam pacjentów z Tarnowa i okolic.',
  },
  {
    q: 'Jak umówić wizytę na masaż w Tarnowie?',
    a: 'Najszybciej telefonicznie pod numerem +48 888 804 777. Można też napisać na adres gabinet@karolinaorlik.pl lub przez Facebook/Instagram gabinetu.',
  },
  {
    q: 'Ile kosztuje masaż leczniczy?',
    a: 'Masaż leczniczy kosztuje 65 zł za 30 minut lub 130 zł za 60 minut. Pełny cennik wszystkich zabiegów znajduje się w zakładce Cennik.',
  },
  {
    q: 'Czy potrzebuję skierowania na masaż?',
    a: 'Nie – gabinet przyjmuje prywatnie, bez skierowania. Jeśli jesteś po operacji, urazie lub masz endoprotezę, warto zabrać ze sobą dokumentację medyczną.',
  },
  {
    q: 'Czy przyjmujesz pacjentów po operacjach i z endoprotezami?',
    a: 'Tak. Podczas pracy w placówce rehabilitacyjnej w Niemczech prowadziłam terapie m.in. u osób po operacjach i z endoprotezami. Przed zabiegiem zawsze przeprowadzam krótką rozmowę, by dobrać technikę i intensywność.',
  },
  {
    q: 'Czy prowadzisz gimnastykę korekcyjną dla dzieci?',
    a: 'Tak, prowadzę gimnastykę korekcyjną dla dzieci i dorosłych. Zajęcia trwają 30 minut (50 zł) lub 60 minut (100 zł).',
  },
  {
    q: 'W jakich godzinach czynny jest gabinet?',
    a: 'Od poniedziałku do piątku w godzinach 8:30–18:00 oraz w soboty 8:30–13:00. W niedziele gabinet jest zamknięty.',
  },
  {
    q: 'Jakie formy płatności są dostępne?',
    a: 'Za zabiegi można zapłacić gotówką, kartą płatniczą lub BLIK-iem.',
  },
]

export type ServiceDetail = {
  slug: string
  name: string
  category: 'terapia' | 'relaks' | 'twarz' | 'ruch'
  short: string
  long: string
  forWhom: string[]
}

export const categories = {
  terapia: 'Masaże lecznicze i terapia',
  relaks: 'Masaże relaksacyjne i pielęgnacyjne',
  twarz: 'Masaże twarzy',
  ruch: 'Gimnastyka korekcyjna',
} as const

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'masaz-leczniczy',
    name: 'Masaż leczniczy',
    category: 'terapia',
    short: 'Praca z bólem, napięciem i przeciążeniem konkretnych partii mięśni.',
    long: 'Masaż leczniczy to zabieg ukierunkowany na konkretny problem – ból pleców, karku, odcinka lędźwiowego, barków czy kończyn. Łączę w nim techniki masażu klasycznego z elementami terapii manualnej, a intensywność dobieram po rozmowie i ocenie napięć. Celem jest zmniejszenie dolegliwości bólowych, rozluźnienie przykurczonych mięśni i poprawa zakresu ruchu.',
    forWhom: ['ból kręgosłupa, karku i pleców', 'napięcia i przeciążenia mięśni', 'osoby pracujące przy biurku lub fizycznie', 'stany po kontuzjach (po wygojeniu)'],
  },
  {
    slug: 'masaz-klasyczny',
    name: 'Masaż klasyczny',
    category: 'terapia',
    short: 'Masaż całego ciała lub wybranych partii – rozluźnienie i lepsze ukrwienie.',
    long: 'Masaż klasyczny to podstawa masażu – głaskanie, rozcieranie, ugniatanie, oklepywanie i wibracja. Poprawia ukrwienie i odżywienie tkanek, rozluźnia mięśnie i wspiera regenerację. Sprawdza się zarówno profilaktycznie, jak i przy zmęczeniu czy przewlekłych napięciach.',
    forWhom: ['zmęczenie i napięcie mięśni', 'profilaktyka i regeneracja', 'osoby prowadzące siedzący tryb życia'],
  },
  {
    slug: 'masaz-sportowy',
    name: 'Masaż sportowy',
    category: 'terapia',
    short: 'Przygotowanie do wysiłku i szybsza regeneracja po treningu.',
    long: 'Masaż sportowy jest dynamiczniejszy od klasycznego. Pomaga przygotować mięśnie do wysiłku, a po treningu lub zawodach przyspiesza regenerację i zmniejsza uczucie „zakwasów”. Polecam go osobom biegającym, trenującym na siłowni i uprawiającym sporty drużynowe.',
    forWhom: ['osoby aktywne fizycznie i sportowcy', 'regeneracja po treningu i zawodach', 'przeciążenia mięśni nóg, pleców, barków'],
  },
  {
    slug: 'drenaz-limfatyczny-manualny',
    name: 'Drenaż limfatyczny manualny',
    category: 'terapia',
    short: 'Delikatna technika wspierająca odpływ limfy i redukcję obrzęków.',
    long: 'Manualny drenaż limfatyczny to bardzo delikatny, rytmiczny masaż, który wspiera pracę układu chłonnego. Pomaga zmniejszyć obrzęki, uczucie ciężkich nóg i zatrzymywanie wody w organizmie. Zabieg jest wyjątkowo odprężający.',
    forWhom: ['uczucie ciężkich, opuchniętych nóg', 'obrzęki (po konsultacji z lekarzem)', 'zatrzymywanie wody w organizmie'],
  },
  {
    slug: 'drenaz-limfatyczny-przyrzadowy',
    name: 'Drenaż limfatyczny przyrządowy',
    category: 'terapia',
    short: 'Presoterapia – masaż uciskowy specjalnym mankietem.',
    long: 'Drenaż przyrządowy (presoterapia) wykorzystuje mankiety, które rytmicznie uciskają kończyny i wspierają odpływ limfy oraz krwi żylnej. To wygodne uzupełnienie drenażu manualnego i masażu antycellulitowego.',
    forWhom: ['ciężkie, zmęczone nogi', 'wsparcie przy cellulicie', 'uzupełnienie drenażu manualnego'],
  },
  {
    slug: 'masaz-relaksacyjny',
    name: 'Masaż relaksacyjny',
    category: 'relaks',
    short: 'Spokojny, płynny masaż odprężający ciało i umysł.',
    long: 'Masaż relaksacyjny wykonywany jest wolnym, płynnym tempem z użyciem olejków. Jego celem jest głębokie odprężenie, redukcja stresu i poprawa jakości snu. To dobry wybór, gdy potrzebujesz chwili tylko dla siebie.',
    forWhom: ['stres i przemęczenie', 'problemy z wyciszeniem się', 'prezent dla bliskiej osoby'],
  },
  {
    slug: 'masaz-hot-stone',
    name: 'Masaż Hot Stone',
    category: 'relaks',
    short: 'Masaż gorącymi kamieniami bazaltowymi – głębokie rozgrzanie i rozluźnienie.',
    long: 'Podczas masażu Hot Stone używam podgrzanych kamieni bazaltowych, które rozgrzewają tkanki i ułatwiają rozluźnienie nawet mocno napiętych mięśni. Ciepło działa kojąco, a zabieg łączy relaks z realną pracą na mięśniach.',
    forWhom: ['osoby szybko marznące', 'mocno napięte mięśnie', 'głęboki relaks'],
  },
  {
    slug: 'masaz-stop',
    name: 'Masaż stóp',
    category: 'relaks',
    short: 'Odprężający masaż stóp i podudzi.',
    long: 'Masaż stóp przynosi ulgę zmęczonym nogom, szczególnie osobom, które dużo stoją lub chodzą. Rozluźnia mięśnie stóp i podudzi, poprawia krążenie i działa ogólnie odprężająco.',
    forWhom: ['praca stojąca', 'zmęczone, obolałe stopy', 'relaks'],
  },
  {
    slug: 'masaz-antycellulitowy',
    name: 'Masaż antycellulitowy',
    category: 'relaks',
    short: 'Intensywny masaż modelujący, poprawiający wygląd skóry.',
    long: 'Masaż antycellulitowy to intensywniejsza praca na udach, pośladkach i brzuchu. Poprawia mikrokrążenie, ujędrnia skórę i wspiera wygładzenie „skórki pomarańczowej”. Najlepsze efekty daje seria zabiegów połączona z aktywnością fizyczną.',
    forWhom: ['cellulit', 'modelowanie sylwetki', 'poprawa jędrności skóry'],
  },
  {
    slug: 'masaz-kobido',
    name: 'Masaż Kobido',
    category: 'twarz',
    short: 'Japoński masaż twarzy – naturalny lifting bez ingerencji.',
    long: 'Kobido to tradycyjny japoński masaż twarzy, szyi i dekoltu. Szybkie, rytmiczne ruchy pobudzają krążenie, napinają skórę i rozluźniają mięśnie twarzy, dzięki czemu twarz wygląda na wypoczętą, a owal staje się bardziej wyraźny. Często nazywany jest „naturalnym liftingiem”.',
    forWhom: ['zmęczona, szara cera', 'utrata jędrności i owalu twarzy', 'napięcia mięśni twarzy i szczęki'],
  },
  {
    slug: 'masaz-twarzy-z-maseczka',
    name: 'Masaż twarzy z maseczką',
    category: 'twarz',
    short: 'Relaksujący masaż twarzy zakończony pielęgnacyjną maseczką.',
    long: 'Zabieg łączy odprężający masaż twarzy, szyi i dekoltu z nałożeniem maseczki pielęgnacyjnej. Skóra jest odżywiona i rozświetlona, a Ty – zrelaksowana.',
    forWhom: ['relaks i pielęgnacja', 'przed ważnym wydarzeniem', 'prezent'],
  },
  {
    slug: 'gimnastyka-korekcyjna',
    name: 'Gimnastyka korekcyjna',
    category: 'ruch',
    short: 'Ćwiczenia korygujące wady postawy dla dzieci i dorosłych.',
    long: 'Jako instruktor gimnastyki korekcyjnej prowadzę indywidualne zajęcia dla dzieci i dorosłych. Ćwiczenia dobieram do konkretnej wady postawy – skoliozy, pleców okrągłych, płaskostopia, koślawości kolan – i uczę ich prawidłowego wykonywania tak, by można było kontynuować je w domu.',
    forWhom: ['dzieci z wadami postawy', 'dorośli z bólem pleców od siedzącej pracy', 'płaskostopie, koślawość kolan, plecy okrągłe'],
  },
]

export const pricingFaq = [
  {
    q: 'Czy czas zabiegu obejmuje rozmowę przed masażem?',
    a: 'Przed każdym zabiegiem przeprowadzam krótką rozmowę, aby dobrać technikę i intensywność. Podany czas to czas trwania zabiegu.',
  },
  {
    q: 'Który masaż wybrać przy bólu pleców?',
    a: 'Przy bólu pleców, karku lub kręgosłupa najczęściej polecam masaż leczniczy (30 lub 60 minut). Jeśli nie wiesz, co wybrać – zadzwoń, doradzę.',
  },
  {
    q: 'Czy mogę zapłacić kartą lub BLIK-iem?',
    a: 'Tak. W gabinecie można zapłacić gotówką, kartą płatniczą lub BLIK-iem.',
  },
  {
    q: 'Czy warto wykupić serię zabiegów?',
    a: 'Przy przewlekłych dolegliwościach, drenażu limfatycznym czy masażu antycellulitowym najlepsze efekty daje seria zabiegów. Liczbę wizyt ustalamy indywidualnie.',
  },
]

export const contactFaq = [
  {
    q: 'Jak umówić wizytę?',
    a: 'Najszybciej telefonicznie: +48 888 804 777. Jeśli nie odbieram, najpewniej jestem w trakcie zabiegu – oddzwonię. Można też napisać e-mail na gabinet@karolinaorlik.pl.',
  },
  {
    q: 'Czy przyjmujesz w soboty?',
    a: 'Tak, w soboty gabinet jest czynny w godzinach 8:30–13:00.',
  },
  {
    q: 'Skąd przyjeżdżają pacjenci?',
    a: 'Gabinet znajduje się w Tarnowie przy ul. Ochronek 34. Przyjmuję pacjentów z Tarnowa i okolic.',
  },
]

export const contraindications = [
  'gorączka i ostre infekcje',
  'świeże urazy, stany zapalne i krwiaki w miejscu masażu',
  'zakrzepica i ostre stany zapalne żył',
  'zmiany skórne, rany i choroby skóry w okolicy zabiegu',
  'choroby nowotworowe – tylko za zgodą lekarza prowadzącego',
  'ciąża – wybrane zabiegi wyłącznie po konsultacji',
]

const norm = (s: string) => s.toLowerCase().replace(/-/g, ' ').trim()
export const pricesFor = (name: string) => prices.filter((p) => norm(p.name) === norm(name))
