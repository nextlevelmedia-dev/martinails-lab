// Dati dell'attività condivisi tra metadata, sitemap e dati strutturati.
// Nome, indirizzo e telefono devono restare identici al profilo Google Business.

export const site = {
  name: "Martinails Lab",
  url: "https://martinails-lab.com",
  description:
    "Nail art, ricostruzione unghie, gel e manicure a Cremona. Lavorazioni curate nei dettagli presso lo studio Martinails Lab in Via del Giordano 78E.",
  phone: "+393926788551",
  phoneLabel: "+39 392 678 8551",
  whatsappUrl: "https://wa.me/393926788551",
  instagramUrl: "https://www.instagram.com/martinails.lab/",
  mapsUrl: "https://maps.app.goo.gl/qnUPxtExb1CkzmMKA",
  address: {
    street: "Via del Giordano 78E",
    postalCode: "26100",
    city: "Cremona",
    province: "CR",
    region: "Lombardia",
    country: "IT",
    note: "Presso Simona Acconciature",
  },
  geo: {
    latitude: 45.1292923,
    longitude: 10.0218476,
  },
} as const;

export const services = [
  {
    name: "Manicure normale",
    detail: "Pulizia, forma e cura dell’unghia naturale.",
    price: "20 €",
    amount: 20,
  },
  {
    name: "Gel flessibile",
    detail: "Copertura leggera e confortevole per unghie curate e resistenti.",
    price: "50 €",
    amount: 50,
  },
  {
    name: "Gel rigido",
    detail:
      "Copertura più strutturata per un risultato resistente, definito e duraturo.",
    price: "55 €",
    amount: 55,
  },
  {
    name: "Allungamento",
    detail:
      "Ricostruzione con lunghezza e forma studiate in base alla mano.",
    price: "85 €",
    amount: 85,
  },
  {
    name: "Allungamento con muretto",
    detail: "Ricostruzione elaborata con tecnica muretto.",
    price: "Da 145 €",
    amount: 145,
  },
  {
    name: "Unghia con muretto",
    detail: "Durante semplice copertura gel.",
    price: "+5 € l’una",
    amount: 5,
  },
  {
    name: "Disegni e applicazioni",
    detail: "Decorazioni incluse nel trattamento.",
    price: "Gratis",
    amount: 0,
  },
];

export const faqs = [
  {
    question: "Quanto tempo richiede ogni trattamento?",
    answer:
      "La durata varia in base al trattamento scelto e al tipo di lavorazione. Un servizio più semplice richiede meno tempo, mentre ricostruzioni, allungamenti e nail art elaborate possono richiedere una seduta più lunga. Al momento della prenotazione potremo valutare insieme il servizio più adatto.",
  },
  {
    question: "Le unghie respirano?",
    answer:
      "No, le unghie non respirano perché sono composte principalmente da cheratina. Ciò che conta è lavorare nel rispetto dell’unghia naturale, utilizzare prodotti di qualità e seguire correttamente i tempi di mantenimento e rimozione.",
  },
  {
    question: "Ogni quanto tempo è consigliato fare il refill?",
    answer:
      "In genere il refill è consigliato ogni 3 o 4 settimane. La frequenza può variare in base alla velocità di crescita dell’unghia naturale, alla lunghezza e al tipo di trattamento realizzato.",
  },
  {
    question: "Il gel può dare una sensazione di calore?",
    answer:
      "Durante la polimerizzazione può capitare di percepire una breve sensazione di calore. L’intensità può variare da persona a persona ed è generalmente temporanea. Ogni trattamento viene eseguito prestando attenzione al comfort durante tutte le fasi.",
  },
  {
    question: "Posso scegliere una nail art personalizzata?",
    answer:
      "Certo. Colori, forme e decorazioni possono essere studiate insieme per creare un risultato personale e armonioso. Puoi partire da un’ispirazione oppure affidarti a una proposta pensata per le tue mani e il tuo stile.",
  },
];

// Descrizioni delle foto in /public/images/tornado, nello stesso ordine dei file
const galleryAlts = [
  "Nail art bianca con decorazioni rosse effetto marmo su unghie squadrate",
  "French viola glitterata con applicazioni su unghie a mandorla",
  "Unghie a stiletto rosa con french leopardata e fiocco nero 3D",
  "Nail art blu glitter e nera su unghie a mandorla",
  "Gel rosa sfumato con nail art di fiori secchi e foglia oro",
  "Smalto gel azzurro con stelline su unghie corte",
  "Nail art pop con fragole, ciliegie e fiocchi rosa dipinti a mano",
  "Effetto cat eye blu su base nera per unghie corte",
  "Gel bordeaux con french sottile e decorazione glitter",
  "Gel bordeaux con french e cuoricini dipinti a mano",
  "Nail art rosa effetto marmo su unghie squadrate",
  "French viola con glitter su unghie a mandorla lunghe",
  "Unghie a stiletto nere opache con dettagli glitter",
  "Ricostruzione unghie nude rosa naturale a forma squadrata",
  "Nail art con stelle nere su base nude",
  "Nail art leopardata grigia e argento con strass",
  "Gel nude lattiginoso con decorazione natalizia",
  "Nail art multicolore con fiori e disegni dipinti a mano",
  "Unghie a mandorla con sfumatura glitter oro",
  "French rossa glitterata con foglia oro su unghie a mandorla",
  "Unghie a stiletto rosse con french e baci dipinti",
  "Nail art floreale delicata su base nude",
  "French rosa fluo sfumata con filo oro",
  "Nail art con cuori bianchi su base nude",
  "Nail art nera e bianca con croce gioiello e stelle",
  "Unghie lilla con rose rosse dipinte a mano",
  "French a pois bianchi e neri con fiore",
  "Nail art con linee oro su base nude squadrata",
  "French sfumata marrone con fiori bianchi",
  "Baby boomer sfumato nude e bianco su unghie squadrate",
  "Nail art fluo rosa, viola e giallo con dettagli leopardati",
  "Mix nail art leopardata, zebrata e con borchie su base nera",
  "Unghie bianche a pois colorati",
  "Gel rosa con cuori e strass",
  "Gel nude glitterato con cuori dipinti",
  "Fiori bianchi 3D su unghie lattiginose glitterate",
];

export const galleryImages = galleryAlts.map((alt, index) => ({
  src: `/images/tornado/gallery${index + 1}.webp`,
  alt,
}));

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
