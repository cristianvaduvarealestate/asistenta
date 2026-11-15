import { BusinessChecklist } from "./types";

export const BUSINESS_CHECKLISTS: BusinessChecklist[] = [
  // 1. Înființare companie nouă
  {
    id: "checklist-lansare-companie",
    slug: "infiintare-companie-noua-start-up",
    title: "Checklist de Asigurare la Înființarea unei Companii Noi (Start-up)",
    targetEvent: "Lansarea operațiunilor comerciale ale unei societăți nou înființate",
    summary: "Pașii esențiali pentru a proteja patrimoniul fondatorilor și a respecta obligațiile legale chiar de la deschiderea primului sediu comercial.",
    steps: [
      {
        phase: "Etapa 1: Înregistrare și structură juridică",
        items: [
          {
            title: "Verifică dacă domeniul de activitate impune asigurare profesională obligatorie",
            details: "Anumite coduri CAEN (asistență medicală, contabilitate, arhitectură, brokeraj, transport) nu pot funcționa legal fără o poliță de răspundere profesională depusă la corpul profesional sau la registrul autorității de reglementare.",
            priority: "critic",
            verifiedNote: "Conform legilor specifice de organizare a profesiilor reglementate.",
          },
          {
            title: "Protejează patrimoniul personal al administratorului (Poliță D&O)",
            details: "În primii ani de funcționare, deciziile rapide și constrângerile de cash-flow pot atrage acțiuni în răspundere din partea creditorilor sau asociaților.",
            priority: "important",
          },
        ],
      },
      {
        phase: "Etapa 2: Sediul social și punctul de lucru",
        items: [
          {
            title: "Verifică cerințele de asigurare din contractul de închiriere a sediului",
            details: "Majoritatea proprietarilor impun o poliță de răspundere civilă a chiriașului (Tenant's Liability) și asigurarea amenajărilor interioare (fit-out) cu renunțare la dreptul de regres.",
            priority: "critic",
          },
          {
            title: "Evaluează echipamentele IT și mobilierul achiziționat",
            details: "Încheie o poliță de bunuri (Property) sau echipamente electronice (EEI) pentru laptopurile, monitoarele și serverele firmei.",
            priority: "important",
          },
        ],
      },
      {
        phase: "Etapa 3: Angajarea primilor colaboratori",
        items: [
          {
            title: "Pregătește pachetul de protecție pentru echipă",
            details: "Asigurarea de accidente de muncă și sănătate privată crește atractivitatea companiei în procesul de recrutare încă din prima zi.",
            priority: "recomandat",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Amânarea asigurării până când 'firma face profit' — riscurile de incendiu, furt sau erori nu așteaptă maturizarea cifrei de afaceri.",
      "Semnarea unui contract de închiriere fără a verifica costul polițelor de răspundere impuse de proprietar.",
    ],
    prefillAction: {
      category: "cladiri-si-spatii-comerciale",
      message: "Bună ziua. Am înființat o companie nouă și doresc un pachet de bază de asigurare pentru sediu și răspundere.",
    },
  },

  // 2. Semnarea unui contract de închiriere spațiu comercial
  {
    id: "checklist-inchiriere-spatiu-comercial",
    slug: "semnare-contract-inchiriere-spatiu-comercial-mall",
    title: "Checklist la Semnarea unui Contract de Închiriere Spațiu Comercial / Mall",
    targetEvent: "Deschiderea unui magazin, showroom sau restaurant într-un centru comercial sau parc de retail",
    summary: "Ghid de verificare a cerințelor rigide de asigurare impuse de proprietarii comerciali și evitarea litigiilor costisitoare.",
    steps: [
      {
        phase: "Analiza clauzelor de asigurare din contractul de leasing",
        items: [
          {
            title: "Identifică limita minimă de Răspundere Civilă Față de Terți (RCG)",
            details: "Proprietarii mari de mall-uri impun uzual limite între 500.000 EUR și 2.000.000 EUR per eveniment și în agregat anual.",
            priority: "critic",
          },
          {
            title: "Verifică includerea clauzei de Răspundere a Chiriașului față de Proprietar (Tenant's Liability)",
            details: "Această secțiune acoperă incendiul sau inundația provocată de tine care distruge spațiul închiriat.",
            priority: "critic",
          },
          {
            title: "Existența clauzei de 'Renunțare la Dreptul de Regres' (Waiver of Subrogation)",
            details: "Asigurătorul tău trebuie să declare că nu se va regresa împotriva proprietarului, iar asigurătorul proprietarului trebuie să declare reciprocitatea.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Protecția investiției în amenajare (Fit-out)",
        items: [
          {
            title: "Asigură investițiile locative și îmbunătățirile aduse spațiului",
            details: "Proprietarul își asigură pereții de bază; parchetul, tavanele casetate, sistemul de iluminat, vitrinele și mobilierul personalizat trebuie asigurate de tine.",
            priority: "important",
          },
          {
            title: "Poliță CAR/EAR pe durata lucrărilor de șantier de amenajare interioară",
            details: "Înainte de deschidere, pe perioada lucrărilor de amenajare, proprietarul solicită o asigurare pentru șantierul de montaj.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Transmiterea unei polițe standard de răspundere fără denumirea explicită a proprietarului ca 'Asigurat Adițional' (Additional Insured).",
      "Omiterea asigurării stocurilor de marfă din magazin în speranța că 'le acoperă mall-ul'.",
    ],
    prefillAction: {
      category: "raspundere-civila-generala",
      message: "Bună ziua. Semnez un contract de închiriere într-un spațiu comercial și am nevoie de polița de răspundere și bunuri cerută de proprietar.",
    },
  },

  // 3. Deschiderea unui restaurant / cafenea (HoReCa)
  {
    id: "checklist-deschidere-restaurant",
    slug: "deschidere-restaurant-cafenea-bar",
    title: "Checklist de Asigurare la Deschiderea unui Restaurant sau Cafenea",
    targetEvent: "Lansarea unei unități de alimentație publică",
    summary: "Asigurarea bucătăriei calde, protecția la toxiinfecții alimentare, riscurile de incendiu la hote și răspunderea pentru oaspeți.",
    steps: [
      {
        phase: "Siguranța bucătăriei și autorizarea ISU",
        items: [
          {
            title: "Sistem de stingere automată a incendiilor pentru hota de gătit (tip Ansul)",
            details: "Majoritatea asigurătorilor condiționează emiterea poliței de incendiu pentru restaurante de existența unui sistem automat de stingere cu agent chimic umed la nivelul h勧ei.",
            priority: "critic",
          },
          {
            title: "Asigurarea utilajelor de gătit și a instalațiilor frigorifice (Machinery Breakdown)",
            details: "Cuptoarele combi, vitrinele frigorifice și mașinile de spălat vase industriale sunt expuse la variații de tensiune și avarii mecanice.",
            priority: "important",
          },
        ],
      },
      {
        phase: "Răspunderea față de oaspeți și produse servite",
        items: [
          {
            title: "Clauza de Intoxicație Alimentară (Food Poisoning) inclusă în polița RCG",
            details: "Acoperă cheltuielile medicale și compensațiile solicitate de clienți în caz de contaminare bacteriană.",
            priority: "critic",
          },
          {
            title: "Răspunderea pentru bunurile lăsate la garderobă de clienți",
            details: "Dacă localul pune la dispoziție o garderobă organizată cu jetoane, se impune o clauză dedicată de răspundere.",
            priority: "recomandat",
          },
        ],
      },
      {
        phase: "Continuitatea afacerii",
        items: [
          {
            title: "Business Interruption (Pierdere de Profit)",
            details: "Dacă un incendiu sau o inundație închide bucătăria 2 luni, polița plătește chiria spațiului și salariile bucătarilor.",
            priority: "critic",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Lipsa curățării periodice autorizate a tubulaturii de exhaustare (grăsimile acumulate sunt principala cauză de refuz de plată în caz de incendiu).",
      "Neefectuarea probelor alimentare martor păstrate 48h conform cerințelor sanitare.",
    ],
    prefillAction: {
      category: "cladiri-si-spatii-comerciale",
      message: "Bună ziua. Deschid un restaurant / unitate HoReCa și am nevoie de pachetul complet de asigurare (incendiu, bucătărie, toxiinfecții).",
    },
  },

  // 4. Achiziția unui utilaj industrial sau echipament greu
  {
    id: "checklist-achizitie-utilaj-industrial",
    slug: "achizitie-utilaje-industriale-linii-tehnologice",
    title: "Checklist la Achiziția și Punerea în Funcțiune a unui Utilaj Industrial",
    targetEvent: "Investiție în mașini-unelte, roboți, linii de ambalare sau echipamente de prelucrare",
    summary: "Cum să asiguri utilajul de la transportul din fabrică, la montaj, probe tehnologice și exploatare operațională pe termen lung.",
    steps: [
      {
        phase: "Faza de transport și sosire în fabrică",
        items: [
          {
            title: "Poliță CARGO pe durata transportului (Incoterms CIP/CIF)",
            details: "Verifică dacă asigurarea de transport a furnizorului acoperă riscurile până la descărcarea fizică pe fundația din fabrica ta.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Faza de montaj și probe (Testing & Commissioning)",
        items: [
          {
            title: "Poliță EAR (Erection All Risks) pentru perioada de instalare",
            details: "Garantează utilajul împotriva scăpării din macara, montajului greșit și avariilor din timpul probelor de pornire.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Faza de exploatare comercială",
        items: [
          {
            title: "Poliță de Avarii Accidentale ale Mașinilor (Machinery Breakdown)",
            details: "Polița de incendiu a fabricii nu acoperă griparea motorului sau ruperea arborelui; ai nevoie de MB la valoarea din nou a utilajului.",
            priority: "critic",
          },
          {
            title: "MLOP (Machinery Loss of Profits) dacă utilajul este verigă unică",
            details: "Dacă oprirea acestui utilaj oprește toată fabrica, asigură pierderea de profit din avarierea lui.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Baza pe garanția producătorului: garanția acoperă doar defectele de fabricație, nu și erorile de operare ale muncitorilor tăi sau supratensiunea din rețea!",
      "Nedeclararea utilajului la asigurător imediat după semnarea procesului-verbal de punere în funcțiune.",
    ],
    prefillAction: {
      category: "echipamente-utilaje-instalatii",
      message: "Bună ziua. Achiziționăm un utilaj industrial nou și dorim structurarea protecției (transport, montaj și avarii accidentale MB).",
    },
  },

  // 5. Achiziția sau extinderea unei flote auto comerciale
  {
    id: "checklist-flota-auto",
    slug: "achizitie-extindere-flota-auto-comerciala",
    title: "Checklist la Creșterea și Administrarea unei Flote Auto Comerciale",
    targetEvent: "Achiziția a 5 sau mai multe vehicule comerciale (autoturisme, autoutilitare sau camioane)",
    summary: "Negocierea condițiilor de flotă unificate, asistență rutieră europeană și controlul daunalității șoferilor.",
    steps: [
      {
        phase: "Structurarea contractului de flotă",
        items: [
          {
            title: "Unificarea scadențelor RCA și CASCO la o dată fixă",
            details: "Evită riscul de a circula cu mașini neasigurate prin gestionarea unei polițe master cu plăți trimestriale și regularizări periodice.",
            priority: "important",
          },
          {
            title: "Negocierea franșizelor CASCO în funcție de tipul vehiculului",
            details: "Pentru autoturisme de agenți poți alege franșiză fixă mică (100-200 EUR); pentru camioane se recomandă franșize mai mari pentru a reduce prima anuală.",
            priority: "important",
          },
        ],
      },
      {
        phase: "Extinderi operaționale esențiale",
        items: [
          {
            title: "Asistență rutieră extinsă și tractare inclusă",
            details: "Tractarea unui cap-tractor de pe autostrada din Germania poate costa mii de euro; asigură-te că polița CASCO o include cu limite adecvate.",
            priority: "critic",
          },
          {
            title: "Vehicul de înlocuire (Replacement Vehicle)",
            details: "Pentru mașinile de vânzări sau livrări, obținerea unei mașini la schimb pe durata reparațiilor menține activitatea operațională.",
            priority: "recomandat",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Necomunicarea către asigurător a utilizării vehiculelor în regim de curierat sau transport marfă (nerespectarea destinației de utilizare poate anula despăgubirea).",
      "Ignorarea instalării de sisteme telematice/GPS care pot reduce prima de asigurare cu până la 20%.",
    ],
    prefillAction: {
      category: "rca-casco-flote",
      message: "Bună ziua. Operăm o flotă auto comercială și dorim o ofertă unificată de RCA și CASCO flotă cu asistență rutieră.",
    },
  },

  // 6. Semnarea unui contract de construcții / antrepriză
  {
    id: "checklist-contract-constructii",
    slug: "semnare-contract-constructii-antrepriza-santier",
    title: "Checklist de Asigurare la Semnarea unui Contract de Antrepriză în Construcții",
    targetEvent: "Câștigarea și demararea unui contract de execuție lucrări de construcții",
    summary: "Îndeplinirea cerințelor beneficiarului, polițe CAR la valoare totală și garanții de bună execuție.",
    steps: [
      {
        phase: "Polița CAR (Toate Riscurile pentru Construcții)",
        items: [
          {
            title: "Stabilirea valorii asigurate la 100% din valoarea contractului de execuție",
            details: "Asigurarea trebuie să includă materialele furnizate de beneficiar și devizul general de lucrări.",
            priority: "critic",
          },
          {
            title: "Includerea Beneficiarului ca 'Co-Asigurat' (Co-Insured)",
            details: "Clauză obligatorie în contractele FIDIC, însoțită de renunțarea la regres reciprocă.",
            priority: "critic",
          },
          {
            title: "Clauza de Rețele și Conducte Subterane",
            details: "Protecție esențială dacă pe șantier se execută săpături mecanizate în proximitatea utilităților.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Garanțiile contractuale (Surety)",
        items: [
          {
            title: "Garanția de bună execuție prin poliță de asigurare (Performance Bond)",
            details: "Înlocuiește scrisoarea de garanție bancară și păstrează liniile de credit bancar neblocate.",
            priority: "critic",
          },
          {
            title: "Garanția de returnare a avansului primit de la beneficiar",
            details: "Necesară pentru încasarea primelor tranșe financiare înainte de demararea lucrărilor.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Omiterea perioadei de mentenanță extinsă (uzual 12-24 luni de la recepția la terminarea lucrărilor).",
      "Permiterea accesului subcontractorilor pe șantier fără a le solicita propria poliță de răspundere civilă.",
    ],
    prefillAction: {
      category: "car-ear",
      message: "Bună ziua. Am semnat un nou contract de construcție și am nevoie de poliță CAR și Garanție de Bună Execuție.",
    },
  },

  // 7. Participarea la o licitație publică (SEAP)
  {
    id: "checklist-licitatie-seap",
    slug: "participare-licitatie-publica-seap-garantii",
    title: "Checklist de Asigurare pentru Participarea la o Licitație Publică (SEAP)",
    targetEvent: "Depunerea unei oferte pentru un contract de achiziție publică",
    summary: "Cum să emiți rapid garanția de participare și să pregătești garanția de bună execuție conform Legii 98/2016.",
    steps: [
      {
        phase: "Etapa de depunere a ofertei",
        items: [
          {
            title: "Emiterea Garanției de Participare la Licitație (Bid Bond)",
            details: "Polița de asigurare de garanție este 100% recunoscută legal pe SEAP conform art. 154 din Legea 98/2016.",
            priority: "critic",
            verifiedNote: "Acceptată fără rezerve de toate autoritățile contractante.",
          },
          {
            title: "Verificarea duratei de valabilitate a garanției",
            details: "Garanția trebuie să acopere perioada completă de evaluare a ofertelor prevăzută în caietul de sarcini (ex: 60, 90 sau 120 de zile).",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Etapa de atribuire a contractului",
        items: [
          {
            title: "Constituirea Garanției de Bună Execuție în termenul legal",
            details: "După semnarea contractului, ofertantul câștigător are la dispoziție uzual 5 zile lucrătoare pentru a depune garanția de 5-10%.",
            priority: "critic",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Așteptarea ultimelor 24 de ore înainte de termenul limită SEAP pentru solicitarea garanției (analiza financiară a asigurătorului durează de regulă 24-48h).",
      "Nerespectarea textului exact al garanției cerut de autoritatea contractantă în fișa de date a achiziției.",
    ],
    prefillAction: {
      category: "garantii-contractuale",
      message: "Bună ziua. Participăm la o licitație publică SEAP și avem nevoie urgentă de o Garanție de Participare (Bid Bond).",
    },
  },

  // 8. Dezvoltare imobiliară rezidențială
  {
    id: "checklist-dezvoltare-imobiliara",
    slug: "proiect-dezvoltare-imobiliara-ansamblu-rezidential",
    title: "Checklist de Risc pentru Dezvoltatorii de Ansambluri Rezidențiale",
    targetEvent: "Construcția și vânzarea de apartamente sau case către persoane fizice",
    summary: "Securizarea riscurilor structurale, garanțiile legale pentru vicii și asigurarea ansamblului până la predarea către asociația de proprietari.",
    steps: [
      {
        phase: "Faza de șantier",
        items: [
          {
            title: "CAR pe toată perioada până la recepție",
            details: "Asigură structura blocurilor, finisajele și utilajele de pe șantier.",
            priority: "critic",
          },
          {
            title: "Expertiza clădirilor învecinate înainte de începerea săpăturilor (Risc de tasare)",
            details: "Efectuează un raport foto-video notarial al stării clădirilor vecine pentru a preveni cererile de despăgubire nefondate.",
            priority: "important",
          },
        ],
      },
      {
        phase: "Faza post-recepție și predare chei",
        items: [
          {
            title: "Răspunderea Dezvoltatorului pentru Vicii Ascunse (Legea 10/1995)",
            details: "Dezvoltatorul răspunde timp de 10 ani pentru vicii ascunse și pe durata de existență a clădirii pentru defectele de structură.",
            priority: "critic",
          },
          {
            title: "Asigurarea blocurilor finalizate până la vânzarea integrală a unităților",
            details: "Apartamentele nevândute și spațiile comune rămân în patrimoniul dezvoltatorului și trebuie asigurate la incendiu și inundație.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Predarea apartamentelor către cumpărători fără ca asociația de proprietari să preia formal asigurarea părților comune ale imobilului.",
    ],
    prefillAction: {
      category: "cladiri-si-spatii-comerciale",
      message: "Bună ziua. Dezvoltăm un ansamblu rezidențial și solicităm o structurare de asigurări pentru șantier și garanții structurale.",
    },
  },

  // 9. Angajarea primilor salariați (SSM & Beneficii)
  {
    id: "checklist-angajare-salariati",
    slug: "angajarea-primilor-salariati-ssm-beneficii",
    title: "Checklist de Protecție la Angajarea Primilor Salariați",
    targetEvent: "Trecerea de la munca individuală/fondatori la o echipă de angajați",
    summary: "Obligațiile de securitate a muncii, răspunderea patronală și pachetele de asigurări de sănătate pentru retenție.",
    steps: [
      {
        phase: "Conformitate legală și SSM",
        items: [
          {
            title: "Implementarea normelor de Securitate și Sănătate în Muncă (Legea 319/2006)",
            details: "Evaluarea riscurilor de accidentare pe fiecare post de lucru și instruirea periodică la angajare.",
            priority: "critic",
          },
          {
            title: "Poliță de Răspundere Civilă a Angajatorului (Employers' Liability)",
            details: "Te protejează împotriva regresului Casei de Sănătate și cererilor de daune morale în caz de accident de muncă grav.",
            priority: "important",
          },
        ],
      },
      {
        phase: "Beneficii extrasalariale și retenție",
        items: [
          {
            title: "Asigurare Privată de Sănătate de Grup",
            details: "Deductibilă fiscal până la 400 EUR/an per salariat conform Codului Fiscal, oferă acces la spitale private și investigații.",
            priority: "recomandat",
          },
          {
            title: "Asigurare de Accidente și Viață de Grup",
            details: "Cost redus per angajat, oferă sprijin financiar familiei în caz de evenimente grave.",
            priority: "recomandat",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Permiterea începerii muncii fără efectuarea controlului medical de medicina muncii (fișă de aptitudine).",
      "Confundarea abonamentului medical simplu la o clinică cu o poliță reală de asigurare de sănătate care acoperă spitalizarea.",
    ],
    prefillAction: {
      category: "asigurari-angajati",
      message: "Bună ziua. Mărim echipa de angajați și dorim o ofertă de asigurări de sănătate de grup și răspunderea angajatorului.",
    },
  },

  // 10. Lansarea unui magazin online (E-commerce)
  {
    id: "checklist-lansare-ecommerce",
    slug: "lansare-magazin-online-ecommerce-securitate",
    title: "Checklist de Asigurare pentru Magazine Online și E-commerce",
    targetEvent: "Pornirea operațiunilor de vânzare digitală de bunuri sau servicii",
    summary: "Protecția cibernetică, atacurile pe gateway-urile de plăți, stocurile din depozit și răspunderea pentru produse livrate.",
    steps: [
      {
        phase: "Securitatea platformei și a datelor clienților",
        items: [
          {
            title: "Asigurare Cyber Risk & Data Breach",
            details: "Acoperă investigațiile criminalistice, asistența juridică de criză, notificarea clienților și restaurarea bazelor de date dacă platforma este spartă (amenzile contravenționale aplicate de ANSPDCP fiind ne-asigurabile conform legii române).",
            priority: "critic",
          },
          {
            title: "Acoperire pentru indisponibilitatea magazinului (Cyber BI)",
            details: "Compensează vânzările pierdute dacă un atac DDoS blochează site-ul în timpul campaniilor majore (ex: Black Friday).",
            priority: "important",
          },
        ],
      },
      {
        phase: "Mărfurile și distribuția",
        items: [
          {
            title: "Asigurarea stocurilor din depozitul de fulfillment",
            details: "Chiar dacă depozitul este subcontractat, asigură-te că marfa ta este acoperită la valoare de factură împotriva incendiului și furtului.",
            priority: "critic",
          },
          {
            title: "Răspunderea pentru Produse (Product Liability) dacă vinzi produse importate",
            details: "Dacă aduci marfă din afara UE, ești considerat legal producător conform Legii 240/2004.",
            priority: "critic",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Stocarea datelor de card pe servere proprii fără conformitate PCI-DSS.",
      "Presupunerea că firma de curierat despăgubește automat produsele deteriorate în tranzit la valoarea lor completă de vânzare.",
    ],
    prefillAction: {
      category: "cyber-risk",
      message: "Bună ziua. Dețin un magazin online / afacere e-commerce și am nevoie de o asigurare Cyber Risk și de stocuri.",
    },
  },

  // 11. Expansiunea internațională a afacerii (Export)
  {
    id: "checklist-expansiune-internationala",
    slug: "expansiune-internationala-export-piete-externe",
    title: "Checklist la Extinderea Afacerii pe Piețe Externe și Export",
    targetEvent: "Începerea livrărilor sau deschiderea de filiale în Uniunea Europeană, SUA sau alte țări",
    summary: "Validarea teritorialității polițelor, asigurarea creditului comercial extern și conformarea la jurisdicțiile străine.",
    steps: [
      {
        phase: "Extinderea acoperirii teritorialității",
        items: [
          {
            title: "Extinderea Răspunderii Profesionale și a Produsului la nivel Worldwide",
            details: "Verifică dacă polițele tale locale acoperă reclamațiile formulate în țările de destinație a mărfurilor sau serviciilor.",
            priority: "critic",
          },
          {
            title: "Atenție specială la jurisdicția SUA / Canada",
            details: "Asigurătorii europeni exclud uzual SUA/Canada din cauza litigiilor agresive; ai nevoie de o clauză expresă aprobată.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Securizarea încasărilor internaționale",
        items: [
          {
            title: "Asigurarea Creditului Comercial la Export (Export Credit Insurance)",
            details: "Protejează facturile emise clienților străini împotriva falimentului sau refuzului de plată.",
            priority: "critic",
          },
          {
            title: "Polițe de transport internațional CARGO (Incoterms)",
            details: "Clarifică momentul exact al transferului de risc conform regulilor Incoterms convenite în contract.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Semnarea unor contracte guvernate de legi străine care impun clauze de indemnizare nelimitată (Unlimited Indemnity).",
    ],
    prefillAction: {
      category: "asigurari-credit-comercial",
      message: "Bună ziua. Ne extindem afacerea la export și dorim să revizuim teritorialitatea polițelor și asigurarea creditului comercial.",
    },
  },

  // 12. Instalarea unui sistem fotovoltaic industrial pe acoperiș
  {
    id: "checklist-instalare-panouri-acoperis",
    slug: "instalare-panouri-fotovoltaice-acoperis-hala",
    title: "Checklist la Instalarea Panourilor Fotovoltaice pe Acoperișul Halei",
    targetEvent: "Devenirea de prosumator industrial prin montarea unei centrale solare pe acoperiș",
    summary: "Expertiza de rezistență a acoperișului, riscul de incendiu provocat de arcuri electrice și actualizarea poliței clădirii.",
    steps: [
      {
        phase: "Înainte de începerea montajului",
        items: [
          {
            title: "Expertiza tehnică de rezistență a acoperișului la sarcina suplimentară",
            details: "Asigurătorul clădirii va solicita dovada că structura rezistă la greutatea panourilor și a stratului de zăpadă.",
            priority: "critic",
          },
          {
            title: "Polița EAR a instalatorului cu clauză de lucrări la foc deschis",
            details: "Dacă instalatorul perforează acoperișul și produce o inundație sau incendiu, dauna trebuie acoperită de asigurarea lui.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "După punerea în funcțiune",
        items: [
          {
            title: "Declararea Centralei Fotovoltaice ca bun asigurat distinct în polița de incendiu",
            details: "Panourile și invertoarele nu intră automat în asigurarea clădirii! Trebuie adăugate expres cu valoarea lor de investiție.",
            priority: "critic",
          },
          {
            title: "Protecție împotriva grindinei și trăsnetului (Solar PV All Risks)",
            details: "Asigură modulele la valoarea completă de înlocuire în caz de fenomene meteorologice violente.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Utilizarea de panouri termoizolante combustibile sub panouri fără măsuri speciale de protecție la incendiu cerute de ISU.",
    ],
    prefillAction: {
      category: "energie-si-instalatii-fotovoltaice",
      message: "Bună ziua. Instalăm panouri fotovoltaice pe acoperișul halei și dorim să includem centrala solară în asigurarea de bunuri.",
    },
  },

  // 13. Deschiderea unei clinici medicale sau cabinet stomatologic
  {
    id: "checklist-deschidere-clinica",
    slug: "deschidere-clinica-medicala-cabinet-stomatologic",
    title: "Checklist de Asigurare la Deschiderea unei Clinici sau Cabinet Medical",
    targetEvent: "Lansarea unei unități sanitare private",
    summary: "Malpraxisul unității sanitare, asigurarea aparaturii medicale scumpe și conformitatea cu Legea 95/2006.",
    steps: [
      {
        phase: "Conformitate legală obligatorie",
        items: [
          {
            title: "Poliță de Malpraxis Medical pentru Unitatea Sanitară (Persoană Juridică)",
            details: "Obligatorie conform Legii 95/2006 pentru obținerea autorizației sanitare de funcționare de la DSP.",
            priority: "critic",
            verifiedNote: "Legea nr. 95/2006 privind reforma în sănătate.",
          },
          {
            title: "Verificarea polițelor individuale de malpraxis ale medicilor colaboratori",
            details: "Fiecare medic și asistent medical trebuie să dețină poliță individuală valabilă depusă la dosarul de personal.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Echipamente și spațiu",
        items: [
          {
            title: "Asigurarea Echipamentelor Electronice și Medicale (EEI)",
            details: "Uniturile dentare, ecografele, laserele și aparatura de imagistică sunt protejate la variații electrice și scăpare accidentală.",
            priority: "critic",
          },
          {
            title: "Securitatea datelor medicale ale pacienților (Cyber Risk)",
            details: "Datele medicale sunt date cu regim special conform GDPR; o scurgere de date atrage cele mai mari sancțiuni.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Presupunerea că polițele individuale ale medicilor protejează și clinica în caz de proces comun.",
    ],
    prefillAction: {
      category: "raspundere-civila-profesionala",
      message: "Bună ziua. Deschidem o clinică medicală / cabinet stomatologic și dorim oferta pentru malpraxis unitate medicală și echipamente.",
    },
  },

  // 14. Darea în exploatare a unei hale de producție sau depozit
  {
    id: "checklist-dare-in-exploatare-hala",
    slug: "dare-in-exploatare-hala-productie-depozit",
    title: "Checklist de Siguranță la Darea în Exploatare a unei Hale Industriale",
    targetEvent: "Recepția finală a unei clădiri industriale și mutarea operațiunilor",
    summary: "Tranziția de la polița de șantier (CAR) la polița operațională de clădire (Property All Risks) și autorizarea ISU.",
    steps: [
      {
        phase: "Tranziția de asigurare",
        items: [
          {
            title: "Trecerea de la polița CAR de construcție la polița Property All Risks",
            details: "Polița de șantier încetează la data procesului-verbal de recepție; clădirea nu trebuie să rămână nicio zi neasigurată!",
            priority: "critic",
          },
          {
            title: "Asigurarea la Valoarea de Reconstrucție de Nouă (Replacement Cost)",
            details: "Include în suma asigurată costurile de proiectare, obținere avize și debarasare a molozului în caz de distrugere totală.",
            priority: "critic",
          },
        ],
      },
      {
        phase: "Măsuri de protecție la incendiu",
        items: [
          {
            title: "Verificarea finală a instalației de sprinklere și a bazinului de incendiu",
            details: "Obținerea autorizației ISU de securitate la incendiu este cerință esențială de validitate a asigurării.",
            priority: "critic",
          },
          {
            title: "Contractarea asigurării de Business Interruption (Pierdere de Profit)",
            details: "Protecție financiară indispensabilă în cazul opririi activității fabricii.",
            priority: "important",
          },
        ],
      },
    ],
    pitfallsToAvoid: [
      "Funcționarea halei fără obținerea autorizației ISU definitive (dacă termenul de conformare este depășit, asigurătorul poate respinge plata daunelor provocate de incendiu).",
    ],
    prefillAction: {
      category: "cladiri-si-spatii-comerciale",
      message: "Bună ziua. Am finalizat construcția unei hale industriale și solicităm trecerea pe o poliță operațională Property All Risks.",
    },
  },
];
