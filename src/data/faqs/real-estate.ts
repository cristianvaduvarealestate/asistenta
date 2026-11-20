export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const REAL_ESTATE_FAQS: FAQItem[] = [
  {
    id: "reprezentare-exclusiva",
    question: "Ce înseamnă reprezentarea unei singure părți în tranzacție?",
    answer:
      "Înseamnă că lucrez dedicat pentru o singură parte dintr-o tranzacție pe baza unui contract de colaborare agreat în scris: fie pentru cumpărător (căutarea proprietății potrivite, analiză comparativă de piață și negociere fermă), fie pentru vânzător (promovare țintită și valorificare optimă). Nu reprezint concomitent ambele părți în aceeași tranzacție, eliminând astfel orice conflict de interese.",
  },
  {
    id: "fara-comision-dublu",
    question: "Cum funcționează onorariul de consultanță și de ce nu iei comision dublu?",
    answer:
      "Comisionul dublu pune consultantul într-o poziție incompatibilă, unde nu poate apăra pe deplin interesele nimănui. Serviciile mele sunt remunerate pe bază de onorariu sau comision contractual transparent, plătit exclusiv de partea pe care o asist. Dacă te asist la cumpărare, onorariul este stabilit doar cu tine, fără a pretinde comision suplimentar de la vânzător.",
  },
  {
    id: "verificari-juridice",
    question: "Ce verificări documentare și tehnice se fac înainte de cumpărare?",
    answer:
      "Analizăm istoricul actelor puse la dispoziție de vânzător, extrasul de carte funciară pentru sarcini și ipoteci, releveul și documentația cadastrală, atestatele fiscale și certificatele de eficiență energetică. De asemenea, colaborăm îndeaproape cu biroul notarial autorizat ales pentru validarea juridică finală și autentificarea actelor de vânzare-cumpărare.",
  },
  {
    id: "negociere-pret",
    question: "Cum mă ajuți în procesul de negociere a prețului unei locuințe?",
    answer:
      "Fundamentăm negocierea pe date verificabile din piață: prețuri reale de tranzacționare din zonă, istoricul listării, costurile eventualelor renovări necesare și termenii de plată doriți de proprietar, formulând oferte argumentate și echilibrate.",
  },
  {
    id: "prezenta-vizionari-notar",
    question: "Mă asisti fizic la vizionări și la semnarea contractului la notar?",
    answer:
      "Da, particip alături de tine la vizionările relevante pentru a analiza la fața locului calitatea construcției, vecinătățile și starea finisajelor. Te însoțesc de asemenea la biroul notarial pe parcursul redactării și semnării antecontractului și a contractului final.",
  },
  {
    id: "off-market",
    question: "Oferi acces la oportunități de proprietăți off-market sau pre-listing?",
    answer:
      "Prin contactele profesionale consolidate și prin platformele din ecosistemul propriu (precum HomeFind sau AiXLuxury), identific adesea proprietăți disponibile înainte de publicarea lor pe marile portaluri sau oportunități ale unor proprietari care doresc o vânzare discretă.",
  },
  {
    id: "credit-ipotecar",
    question: "Cum mă ajuți dacă am nevoie de credit ipotecar pentru cumpărarea locuinței?",
    answer:
      "Colaborez cu specialiștii de la Smart Credit România pentru analiza capacității de îndatorare și obținerea unei pre-aprobări financiare înainte de semnarea promisiunii de vânzare și achitarea vreunui avans, reducând riscul de blocare a fondurilor.",
  },
  {
    id: "rezidential-vs-comercial",
    question: "Care este abordarea ta pentru proprietățile rezidențiale față de cele comerciale sau de investiție?",
    answer:
      "La achizițiile rezidențiale punem accent pe confortul de familie: calitatea vieții, liniștea zonei, orientarea cardinală și facilitățile din proximitate. La proprietățile comerciale sau investiționale analizăm indicatorii de randament (yield brut și net), calitatea chiriașilor, riscul de vacanță și costurile operaționale.",
  },
];
