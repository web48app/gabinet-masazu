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
