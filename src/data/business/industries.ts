import { IndustryDomain } from "./types";

export const BUSINESS_INDUSTRIES: IndustryDomain[] = [
  // ==============================================================================
  // DOMENIUL A: CONSTRUCȚII ȘI DEZVOLTĂRI IMOBILIARE
  // ==============================================================================
  {
    id: "constructii",
    letter: "A",
    slug: "constructii-si-dezvoltari-imobiliare",
    name: "Construcții și dezvoltări imobiliare",
    subtitle: "Protecție pentru șantiere, structuri, echipamente, subcontractori și garanții de bună execuție",
    targetBusinesses: [
      "Constructori generali și antreprenori de clădiri rezidențiale și industriale",
      "Dezvoltatori imobiliari",
      "Subcontractori de finisaje și structuri",
      "Firme de instalații electrice, sanitare și HVAC",
      "Firme de acoperișuri și hidroizolații",
      "Companii de demolări și pregătire teren",
      "Firme de închiriere utilaje și echipamente de șantier",
    ],
    caenExamples: ["4120 - Lucrări de construcții clădiri rezidențiale și nerezidențiale", "4321 - Lucrări de instalații electrice", "4322 - Instalații sanitare, încălzire și aer condiționat", "4391 - Lucrări de acoperișuri", "4312 - Lucrări de pregătire a terenului"],
    operatingModel: "Companiile din construcții operează cu șantiere dispersate teritorial, un mix de forță de muncă proprie și subcontractori independenți, utilaje grele cu valoare mare de înlocuire și termene contractuale stricte legate de penalități zilnice de întârziere. Fluxul de lucru este supus intemperiilor, erorilor umane de montaj și riscului constant de vătămări corporale.",
    whatCanBeLost: [
      "Lucrarea în curs de execuție până la recepția finală (distrugere prin furtună, incendiu sau inundație)",
      "Utilajele scumpe de șantier (buldoexcavatoare, macarale, nacele, unelte de mână profesionale)",
      "Garanțiile de participare sau bună execuție reținute de beneficiar în caz de neîndeplinire a obligațiilor",
      "Stabilitatea financiară prin daune cauzate clădirilor sau rețelelor de utilități învecinate",
      "Libertatea de decizie sau activele administratorului în urma accidentelor grave de muncă",
    ],
    operationalRisks: [
      "Colapsul schelelor, al elementelor de cofraj sau al fundațiilor înainte de uscare completă",
      "Avarierea cablurilor subterane de fibră optică sau a conductelor de gaz în timpul săpăturilor",
      "Furtul materialelor depozitate pe șantier pe timpul nopții sau în weekend",
      "Greșeli ale subcontractorilor fără asigurare proprie, cu răspundere transferată către antreprenorul general",
    ],
    physicalRisks: [
      "Incendiu declanșat de lucrări la cald (sudură, lipire membrane bituminoase la acoperișuri)",
      "Infiltrații masive de apă sau inundații produse de ploi torențiale înainte de finalizarea anvelopei clădirii",
      "Surpări de teren sau tasări neuniforme care afectează stabilitatea construcției",
      "Avarierea utilajelor grele prin răsturnare pe teren instabil sau cădere de la înălțime",
    ],
    financialRisks: [
      "Penalități de întârziere stipulate în contractul de antrepriză cauzate de o avarie tehnică",
      "Blocarea cash-flow-ului dacă o bancă finanțatoare oprește tranșele de credit din cauza lipsei asigurării lucrării",
      "Costul uriaș de demolare, debarasare a molozului și refacere a etajelor compromise de foc",
    ],
    legalContractualRisks: [
      "Obligația legală conform Legii 10/1995 privind calitatea în construcții pentru vicii ascunse de structură",
      "Prevederile contractelor FIDIC (Roșu/Galben) care impun obligatoriu poliță CAR pe numele ambelor părți",
      "Litigii cu vecinii pentru fisurarea caselor adiacente produse de vibrațiile generate de baterea piloților",
    ],
    employeeRisks: [
      "Căderi de la înălțime de pe schele sau acoperișuri — riscuri majore de vătămare sau deces",
      "Electrocutare la tablourile electrice provizorii de șantier",
      "Lovituri cauzate de căderi de obiecte sau manevre greșite ale utilajelor de ridicat",
      "Amenzi de la ITM și acțiuni în regres din partea Casei de Asigurări de Sănătate pentru spitalizare",
    ],
    thirdPartyRisks: [
      "Trecători sau mașini parcate lovite de materiale căzute de pe fațadă",
      "Infiltrații în subsolurile proprietăților vecine ca urmare a pompării defectuoase a apei freatice",
      "Praful, zgomotul excesiv și fisurile structurale sesizate de proprietarii din vecinătatea șantierului",
    ],
    digitalRisks: [
      "Criptarea sau pierderea planurilor BIM (Building Information Modeling) și a proiectelor tehnice în urma unui atac ransomware",
      "Fraude de tip 'Invoice Scam' — modificarea prin phishing a IBAN-ului unui furnizor de fier sau beton",
    ],
    caseScenarios: [
      {
        title: "Incendiu la montarea membranei hidroizolante pe acoperișul unei hale industriale",
        trigger: "O scânteie provenită de la arzătorul cu gaz pentru membrana bituminoasă a aprins izolația de polistiren a halei.",
        consequences: "Acoperișul parțial montat și o parte din structura metalică au fost compromise. Pagube directe de 320.000 EUR plus oprirea șantierului timp de două luni.",
        lesson: "Polița CAR (Toate Riscurile de Construcție) include secțiunea de lucrări contractuale și răspundere civilă, dar este esențial să existe clauza de 'lucrări cu foc deschis' și respectarea permisului de lucru cu foc.",
      },
      {
        title: "Avarierea cablului principal de telecomunicații în timpul forajului orizontal",
        trigger: "Utilajul subcontractorului a secționat o magistrală de fibră optică nesemnalizată clar pe planul cadastral vechi.",
        consequences: "Operatorul de telecomunicații a facturat reparația de urgență (45.000 EUR) și a solicitat daune de întrerupere a serviciului pentru parcul tehnologic adiacent.",
        lesson: "Polița de Răspundere Civilă a Constructorului trebuie să conțină clauza specială pentru rețele și conducte subterane (Underground Cables and Pipes Clause).",
      },
    ],
    relevantPolicies: [
      { name: "CAR (Contractor's All Risks — Asigurarea Toate Riscurile pentru Construcții)", slug: "car-ear", importance: "esențială", role: "Acoperă daunele fizice la lucrare, materiale, utilaje pe șantier și răspunderea civilă față de terți pe perioada execuției." },
      { name: "Asigurarea utilajelor și echipamentelor de șantier (CPM)", slug: "echipamente-electronice", importance: "esențială", role: "Protejează excavatoarele, buldozerele, macaralele împotriva răsturnării, coliziunii, furtului și vandalismului." },
      { name: "Garanții contractuale de asigurare (Surety Bonds)", slug: "garantii-contractuale", importance: "esențială", role: "Înlocuiește scrisorile de garanție bancară pentru participare la licitații, bună execuție și returnare avans." },
      { name: "Răspundere profesională pentru proiectanți și diriginți de șantier", slug: "raspundere-civila-profesionala", importance: "recomandată", role: "Protejează împotriva erorilor de calcul structural sau deficiențelor de proiectare." },
      { name: "Asigurare de accidente pentru muncitorii din șantier", slug: "asigurari-angajati", importance: "recomandată", role: "Oferă compensații rapide pentru invaliditate sau deces în caz de accident de muncă." },
    ],
    policyCoverageDetails: [
      { policy: "CAR — Secțiunea I (Lucrări)", coverage: "Distrugerea lucrărilor executate, a materialelor din șantier din cauza furtunii, incendiului, prăbușirii, erorilor de montaj.", typicalLimit: "100% din valoarea contractului de construcție" },
      { policy: "CAR — Secțiunea II (Răspundere)", coverage: "Vătămări corporale sau daune materiale cauzate terților din vecinătatea șantierului pe durata lucrărilor.", typicalLimit: "100.000 EUR – 2.000.000 EUR pe eveniment" },
      { policy: "Garanție de bună execuție", coverage: "Despăgubirea beneficiarului în cazul nefinalizării sau nerespectării calității asumate conform contractului.", typicalLimit: "5% – 10% din valoarea contractului fără TVA" },
    ],
    exclusionsAndLimits: [
      "Vicii ascunse cunoscute înainte de emiterea poliței sau defecte deliberate de proiectare fără clauză DE4/DE5",
      "Penalități de întârziere pur financiare care nu decurg dintr-o daună fizică acoperită",
      "Uzura normală, coroziunea și deteriorarea treptată a uneltelor și cofrajelor",
      "Lucrări la foc deschis executate fără permis de lucru cu foc și fără stingătoare omologate pe poziție",
    ],
    underwritingInfoNeeded: [
      "Valoarea totală a contractului de execuție (deviz general defalcat: structură, instalații, finisaje)",
      "Graficul de execuție pe etape și data estimată a recepției la terminarea lucrărilor",
      "Studiul geotehnic (geodezic) și descrierea clădirilor sau rețelelor din imediata vecinătate (distanțe în metri)",
      "Măsurile de securitate pe șantier: pază fizică umană 24/7, împrejmuire, sistem CCTV",
      "Lista utilajelor grele: tip, model, an de fabricație, valoare de piață sau serie de șasiu",
    ],
    faqs: [
      {
        question: "Cine ar trebui să încheie polița CAR: beneficiarul sau antreprenorul general?",
        answer: "În practică se poate încheia de oricare dintre părți, dar cel mai frecvent este încheiată de antreprenorul general, beneficiarul fiind inclus ca co-asigurat (co-insured) cu clauză de renunțare la dreptul de regres (waiver of subrogation).",
      },
      {
        question: "Perioada de mentenanță / garanție după recepție este inclusă în CAR?",
        answer: "Da, dacă este solicitată expres clauza de mentenanță (Extended Maintenance Coverage). Aceasta acoperă daunele apărute în perioada de remediere a defectelor (uzual 12 - 24 luni) provocate de antreprenor în cursul remedierilor.",
      },
    ],
    entrepreneurChecklist: [
      "Verifică dacă contractul cu beneficiarul impune clauze specifice FIDIC și limite minime de răspundere",
      "Solicită polițe de răspundere civilă de la toți subcontractanții care intră pe șantier",
      "Stabilește proceduri stricte pentru lucrările cu foc deschis și păstrează registrul de permise",
      "Efectuează expertiza tehnică a clădirilor învecinate înainte de începerea săpăturilor adânci (fotodocumentare)",
      "Încheie o garanție de bună execuție de asigurare pentru a nu bloca lichidități în cont de garanție bancară",
    ],
    nextStepCta: {
      title: "Soluționează protecția șantierului sau garanțiile de execuție",
      description: "Trimite detaliile contractului tău de construcție pentru a structura oferta corectă de CAR sau garanție de bună execuție.",
      prefillHelpDesk: {
        category: "car-ear",
        industry: "constructii",
        message: "Bună ziua. Reprezint o companie de construcții și doresc o analiză pentru o poliță CAR / garanție contractuală pentru un nou șantier.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL B: HORECA ȘI OSPITALITATE
  // ==============================================================================
  {
    id: "horeca",
    letter: "B",
    slug: "horeca-si-ospitalitate",
    name: "HoReCa și ospitalitate",
    subtitle: "Soluții de protecție pentru restaurante, hoteluri, cafenele, catering și evenimente",
    targetBusinesses: [
      "Restaurante a la carte, bistro-uri și braserii",
      "Hoteluri, aparthoteluri, pensiuni și cabane turistice",
      "Cafenele, baruri și cluburi de noapte",
      "Companii de catering și livrare mâncare preparată",
      "Săli de evenimente și organizatori de nunți/conferințe",
      "Lanțuri de street food și fast-food",
    ],
    caenExamples: ["5610 - Restaurante", "5510 - Hoteluri și alte facilități de cazare similare", "5621 - Activități de alimentație (catering) pentru evenimente", "5630 - Baruri și alte activități de servire a băuturilor"],
    operatingModel: "Sectorul HoReCa depinde de flux continuu de oaspeți, utilaje profesionale de gătit (cuptoare, aragaze pe gaz, friteuze cu ulei încins), camere frigorifice pentru perisabile și reputație fragilă pe platformele de recenzii. Întreruperea activității chiar și pentru două săptămâni în plin sezon poate duce la faliment.",
    whatCanBeLost: [
      "Locația și investițiile în amenajare (mobilier personalizat, decorațiuni, instalații de ventilație și exhaustare)",
      "Echipamentele de bucătărie profesională (linii de gătit, cuptoare cu convecție, frigidere industriale)",
      "Stocurile de alimente și băuturi fine perisabile în caz de pană electrică",
      "Veniturile pe lunile următoare prin imposibilitatea găzduirii evenimentelor deja contractate",
      "Autorizația sanitară sau ISU în urma unui incident minor neasigurat",
    ],
    operationalRisks: [
      "Incendiu izbucnit în hota de exhaustare din cauza depunerilor de grăsime aprinse de flacăra deschisă",
      "Întoxicații alimentare colective ale clienților din cauza unui lot contaminat de carne sau pește",
      "Accidente ale oaspeților prin alunecare pe pardoseala umedă sau scări nesemnalizate",
      "Defectarea agregatului frigorific în timpul unui weekend prelungit, ducând la alterarea stocului",
    ],
    physicalRisks: [
      "Foc pornit de la instalația electrică suprasolicitată de echipamentele din bucătărie",
      "Inundație produsă de o conductă spartă de apă care distruge parchetul din restaurant sau camerele de hotel",
      "Vandalism sau geamuri sparte în urma unor altercații între clienți pe timp de noapte",
      "Furt de bunuri aparținând oaspeților cazați în hotel din camere sau seifuri",
    ],
    financialRisks: [
      "Pierderea marjelor de profit și a veniturilor fixe (salarii, chirii, rate leasing) pe durata reparațiilor după incendiu",
      "Daune financiare masive cerute de mireasă sau organizatorul unei conferințe dacă sala devine neutilizabilă",
    ],
    legalContractualRisks: [
      "Răspunderea civilă a hotelierului conform Art. 2195-2202 Cod Civil privind bunurile aduse de clienți în hotel",
      "Amenzi și răspundere conform legislației ANSVSA privind trasabilitatea alimentelor și siguranța consumatorului",
      "Obligații legate de securitatea la incendiu conform normativelor ISU",
    ],
    employeeRisks: [
      "Arsuri grave cauzate de ulei încins sau abur sub presiune în bucătărie",
      "Tăieturi profunde la feliatoare sau cuțite profesionale",
      "Accidente ale curierilor de livrare mâncare pe scutere sau biciclete în trafic",
    ],
    thirdPartyRisks: [
      "Reacții alergice severe ale clienților din cauza nedeclarării corecte a alergenilor în meniu",
      "Pătarea hainelor scumpe ale oaspeților de către ospătari neatenți",
      "Vătămarea corporală a copiilor pe locurile de joacă interioare sau exterioare ale localului",
    ],
    digitalRisks: [
      "Compromiterea sistemului POS sau a bazei de date cu cardurile de credit ale oaspeților hotelului",
      "Atac cibernetic pe platforma de rezervări online ducând la suprarezervare (overbooking) și pierderi financiare",
    ],
    caseScenarios: [
      {
        title: "Incendiu la hota bucătăriei unui restaurant din centrul istoric",
        trigger: "O flacără de la tigaia de wok a aprins depunerile de grăsime din conducta de evacuare necurățată la termen.",
        consequences: "Restaurantul a fost inundat de fum și apă de la sprinklere. Mobilierul a fost distrus complet, iar activitatea a fost suspendată 4 luni. Paguba totală: 180.000 EUR.",
        lesson: "Polița de Incendiu și Business Interruption (Întreruperea Afacerii) este vitală, dar asigurătorul cere dovada curățării periodice autorizate a tubulaturii de exhaustare.",
      },
      {
        title: "Îmbolnăvire bacteriană la o nuntă cu 150 de invitați",
        trigger: "O cremă de ouă preparată la cald a fost păstrată la temperatură neconformă de firma de catering.",
        consequences: "45 de invitați au necesitat spitalizare de urgență. Mirii au dat în judecată firma cerând restituirea sumelor plătite și daune morale de 60.000 EUR.",
        lesson: "Polița de Răspundere a Producătorului și Furnizorului de Produse Alimentare (Product Liability) acoperă cheltuielile medicale și despăgubirile acordate consumatorilor vătămați.",
      },
    ],
    relevantPolicies: [
      { name: "Asigurarea de incendiu și daune materiale (Property All Risks)", slug: "cladiri-si-spatii-comerciale", importance: "esențială", role: "Protejează clădirea, finisajele interioare, mobilierul și echipamentele de gătit." },
      { name: "Răspundere civilă generală și față de terți", slug: "raspundere-civila-generala", importance: "esențială", role: "Acoperă alunecările, rănirile clienților în incintă și daunele aduse bunurilor acestora." },
      { name: "Business Interruption (Pierderea de profit din exploatare)", slug: "business-interruption", importance: "esențială", role: "Plătește salariile, chiria și profitul net nerealizat pe perioada opririi restaurantului/hotelului." },
      { name: "Răspunderea pentru produse alimentare (Food Poisoning)", slug: "raspunderea-producatorului", importance: "esențială", role: "Acoperă toxiinfecțiile alimentare și reacțiile alergice cauzate de alimente servite." },
      { name: "Alte riscuri: Avaria utilajelor frigorifice și alterarea stocurilor", slug: "echipamente-utilaje-instalatii", importance: "recomandată", role: "Plătește marfa stricată în frigidere ca urmare a unei pene accidentale." },
    ],
    policyCoverageDetails: [
      { policy: "Property All Risks", coverage: "Incendiu, trăsnet, explozie, cădere corpuri, cutremur, inundație, furt prin efracție al aparatelor.", typicalLimit: "Valoarea contabilă de reînnoire a spațiului și a dotărilor (200.000 – 3.000.000 EUR)" },
      { policy: "Răspundere civilă terți + alimentară", coverage: "Vătămări clienți în restaurant/hotel și toxiinfecție alimentară dovedită medical.", typicalLimit: "50.000 – 500.000 EUR pe an" },
      { policy: "Alterarea stocurilor în frigidere (Deterioration of Stock)", coverage: "Pierderea stocurilor de alimente din cauza scăderii temperaturii produse de defect mecanic.", typicalLimit: "10.000 – 50.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Lipsa autorizației de securitate la incendiu (ISU) dacă legea o impunea și incendiul a fost favorizat de nereguli",
      "Toxiinfecții survenite dacă nu se păstrează probele alimentare martor timp de 48 de ore conform normelor sanitare",
      "Furtul de bani din casa de marcat comis fără efracție sau de către propriii angajați (fără clauză de fidelitate)",
      "Oprirea activității dispusă de autorități pentru încălcarea normelor de igienă (nu este acoperită de BI)",
    ],
    underwritingInfoNeeded: [
      "Suprafața utilă, tipul construcției (beton, cărămidă, lemn) și numărul de locuri la mese / camere",
      "Existența autorizației ISU sau a scenariului de securitate la incendiu la zi",
      "Dotările de prevenire: hidranți interiori, sprinklere, senzori fum, hotele automate cu stingere chimică (ANSUL)",
      "Cifra de afaceri anuală și valoarea estimată a stocurilor medii de alimente și băuturi",
      "Contractele de mentenanță pentru instalațiile de gaz, electrice și hotele de bucătărie",
    ],
    faqs: [
      {
        question: "Dacă un client își uită laptopul pe masă și dispare, plătește asigurarea de răspundere a restaurantului?",
        answer: "Nu automat. Răspunderea intervine doar dacă localul avea o obligație expresă de pază (ex: garderobă cu bilet, cameră de hotel cu seif) sau dacă s-a produs din culpa dovedită a personalului. Neglijența clientului este exclusă.",
      },
      {
        question: "Este acoperită livrarea mâncării la domiciliu prin curieri independenți (Glovo, Tazz)?",
        answer: "Polița ta de restaurant acoperă calitatea mâncării preparate, însă accidentele rutiere sau întârzierile cauzate de curierii platformelor terțe cad în răspunderea exclusivă a acelor operatori.",
      },
    ],
    entrepreneurChecklist: [
      "Asigură-te că sistemul automat de stingere pentru hote (de tip Ansul) este verificat semestrial",
      "Păstrează registrele de mentenanță pentru curățarea canalelor de evacuare a grăsimilor",
      "Implementează procedurile HACCP și păstrarea probelor martor de mâncare timp de 48 ore",
      "Nu lăsa spațiul neasigurat pentru Pierdere de Profit (Business Interruption) — cheltuielile fixe continuă și dacă restaurantul este închis",
    ],
    nextStepCta: {
      title: "Protejează restaurantul, hotelul sau afacerea ta HoReCa",
      description: "Obține un pachet complet adaptat profilului tău gastronomic sau hotelier, cu acoperire pentru incendiu, stocuri și intoxicații alimentare.",
      prefillHelpDesk: {
        category: "cladiri-si-spatii-comerciale",
        industry: "horeca",
        message: "Bună ziua. Administrez o afacere în domeniul HoReCa și doresc o propunere de asigurare pentru spațiu, echipamente și răspundere civilă.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL C: RETAIL ȘI COMERȚ
  // ==============================================================================
  {
    id: "retail",
    letter: "C",
    slug: "retail-si-comert",
    name: "Retail și comerț",
    subtitle: "Soluții pentru magazine fizice, depozite comerciale, distribuție și magazine online (e-commerce)",
    targetBusinesses: [
      "Magazine fizice independente și rețele de retail",
      "Magazine online (e-commerce) și retaileri multichannel",
      "Supermarketuri și magazine alimentare de proximitate",
      "Distribuitori angro și operatori de depozite comerciale",
      "Showroom-uri auto, electrocasnice sau design interior",
    ],
    caenExamples: ["4711 - Comerț cu amănuntul în magazine nespecializate", "4791 - Comerț cu amănuntul prin intermediul caselor de comenzi sau prin internet", "4690 - Comerț cu ridicata nespecializat"],
    operatingModel: "Comerțul modern presupune marje reduse și volume mari, cu capital blocat în stocuri de marfă cu fluctuații sezoniere. Vulnerabilitatea majoră constă în distrugerea stocurilor din depozite sau din magazine fizice, retururile de produse defecte și atacurile cibernetice asupra magazinelor online.",
    whatCanBeLost: [
      "Stocurile de marfă (pierdere totală prin incendiu, inundație din conducte sau furt prin spargere)",
      "Lichiditățile din casierii sau seifuri înainte de predarea către firma de transport valori",
      "Funcționarea platformei online de vânzare în perioade de vârf (Black Friday, sărbători)",
      "Spațiile comerciale închiriate și amenajările specifice (rafturi, sisteme antifurt, corpuri de iluminat)",
    ],
    operationalRisks: [
      "Furt mărunt de pe rafturi (shoplifting) sau furt intern comis de angajați",
      "Ruperea conductelor de sprinklere din cauza înghețului sau manevrelor greșite cu stivuitorul",
      "Deteriorarea mărfurilor în timpul manipulării și descărcării din camioane",
      "Întârzierea aprovizionării cu produse sezoniere din cauza pierderii transportului",
    ],
    physicalRisks: [
      "Incendiu declanșat de un scurtcircuit la panourile publicitare luminoase sau la vitrinele frigorifice",
      "Infiltrații prin acoperișul halei de depozitare la ploi torențiale",
      "Distrugerea vitrinelor magazinului în timpul demonstrațiilor de stradă sau actelor de huliganism",
    ],
    financialRisks: [
      "Pierderea cifrei de afaceri pe durata reparațiilor magazinului după o inundație",
      "Costul rechemării de pe piață (Product Recall) a unui lot de produse periculoase vândute consumatorilor",
      "Creanțe neîncasate de la clienții B2B la care s-a livrat marfă cu termen de plată la 60-90 de zile",
    ],
    legalContractualRisks: [
      "Obligația contractuală impusă frecvent de marile centre comerciale de a deține asigurare de răspundere civilă terți (cu limite stabilite contractual conform grilei de suprafață a mall-ului)",
      "Răspunderea solidară pentru produse defecte importate din afara Uniunii Europene",
      "Sancțiuni ANPC pentru nerespectarea termenelor de garanție sau a conformității produselor",
    ],
    employeeRisks: [
      "Accidentarea lucrătorilor comerciali la căderea cutiilor de pe rafturile înalte",
      "Lovituri produse de transpalete electrice sau stivuitoare în depozitul magazinului",
      "Afecțiuni musculo-scheletice din cauza manipulării greutăților fără echipament adecvat",
    ],
    thirdPartyRisks: [
      "Clienți care alunecă pe podeaua proaspăt spălată a magazinului",
      "Căderea unui raft sau a unui panou publicitar peste un cumpărător",
      "Produse expirate sau viciate vândute din greșeală",
    ],
    digitalRisks: [
      "Atac DDoS pe site-ul de e-commerce care blochează tranzacțiile în cele mai profitabile zile din an",
      "Compromiterea conturilor clienților și a bazei de date cu adrese și telefoane (amenzi GDPR)",
    ],
    caseScenarios: [
      {
        title: "Inundație în depozitul central de electronice dintr-o țeavă de sprinkler fisurată",
        trigger: "O lovitură accidentală cu catargul motostivuitorului a rupt capul unui sprinkler de tavan la o înălțime de 8 metri.",
        consequences: "Apa a curs timp de 35 de minute până la oprirea vanei principale. Sute de cutii de televizoare și telefoane au fost compromise ireversibil. Pagubă: 210.000 EUR.",
        lesson: "Polița de Asigurare a Bunurilor trebuie să includă expres clauza de 'Curgerii apei din conducte și instalații automate de stingere (Accidental Discharge of Water)'.",
      },
      {
        title: "Răspunderea retailerului pentru o baterie externă care a luat foc",
        trigger: "Un powerbank importat din China și vândut într-un magazin local a explodat în locuința cumpărătorului, provocând incendiu.",
        consequences: "Cumpărătorul a dat în judecată retailerul conform Legii 240/2004 (importatorul din afara UE este asimilat producătorului).",
        lesson: "Comercianții care importă mărfuri non-UE trebuie să dețină neapărat Răspunderea Producătorului (Product Liability) extinsă pentru calitatea de importator.",
      },
    ],
    relevantPolicies: [
      { name: "Asigurarea stocurilor și spațiului comercial", slug: "stocuri-marfa-materii-prime", importance: "esențială", role: "Acoperă stocurile din magazine și depozite la preț de achiziție/cost de producție." },
      { name: "Răspundere civilă generală și a chiriașului", slug: "raspundere-civila-generala", importance: "esențială", role: "Obligatorie în toate contractele de închiriere din centre comerciale și parcuri de retail." },
      { name: "Asigurarea creditului comercial", slug: "asigurari-credit-comercial", importance: "recomandată", role: "Protejează companiile de distribuție împotriva insolvenței sau neplății clienților B2B." },
      { name: "Cyber Risk pentru E-commerce", slug: "cyber-risk", importance: "esențială", role: "Acoperă atacurile cibernetice, întreruperea magazinului online și recuperarea datelor." },
      { name: "Business Interruption (Întreruperea activității comerciale)", slug: "business-interruption", importance: "recomandată", role: "Asigură marja brută pierdută în perioada de reabilitare a magazinului afectat de incendiu." },
    ],
    policyCoverageDetails: [
      { policy: "Asigurarea stocurilor pe sistem 'Declarație lunară' (Declaration Policy)", coverage: "Permite plata primei în funcție de fluctuația reală a stocului (vârfuri de sezon de Crăciun/Paște).", typicalLimit: "Limita maximă declarată a stocului din depozit" },
      { policy: "Răspundere civilă terți (locație)", coverage: "Vătămări corporale și pagube materiale provocate cumpărătorilor în interiorul magazinului.", typicalLimit: "200.000 – 1.000.000 EUR" },
      { policy: "Asigurare numerar în tranzit și casierie", coverage: "Furt prin violență/tâlhărie al banilor din casierie sau în timpul drumului spre bancă.", typicalLimit: "5.000 – 50.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Lipsa inexplicabilă la inventar (furtul mărunt neidentificat nu este acoperit pe polițele standard de furt prin efracție)",
      "Mărfurile perisabile degradate din cauze exclusiv comerciale (lipsă de cerere sau expirare naturală)",
      "Daune cauzate de depozitarea direct pe podea fără paleți în zone inundabile (regula celor 10-15 cm înălțime)",
    ],
    underwritingInfoNeeded: [
      "Lista locațiilor comerciale (adrese exacte, suprafețe, etaj, proprietar vs. chiriaș)",
      "Valoarea maximă estimată a stocurilor în fiecare locație și valoarea medie anuală",
      "Sistemele de securitate antiefracție (firmă de intervenție rapidă, senzori PIR, grilaje, camere video)",
      "Sistemele de prevenire incendiu (detecție fum, hidranți, stingătoare, sprinklere)",
      "Cifra de afaceri defalcată pe retail fizic, vânzări online și distribuție B2B",
    ],
    faqs: [
      {
        question: "Cum pot evita să plătesc primă de asigurare pentru stocuri pe care le am doar o lună pe an?",
        answer: "Se folosește o poliță pe bază de declarație periodică (Declaration Basis) sau se contractează un vârf sezonier (Seasonal Peak Increase) pentru lunile aglomerate, plătind primă doar pentru perioada respectivă.",
      },
      {
        question: "Dacă sunt chiriaș într-un mall, ce asigurări îmi cere conducerea centrului comercial?",
        answer: "Mall-ul solicită invariabil două polițe: 1) Asigurarea bunurilor proprii și amenajărilor cu renunțare la regres în favoarea proprietarului; 2) Poliță de Răspundere Civilă Față de Terți (inclusiv răspunderea chiriașului față de proprietar) cu limită între 500.000 și 2.000.000 EUR.",
      },
    ],
    entrepreneurChecklist: [
      "Nu depozita marfă direct pe pardoseală; folosește paleți sau rafturi la minimum 10-15 cm de sol",
      "Păstrează evidența stocurilor pe servere cloud, astfel încât registrul să fie accesibil dacă magazinul arde",
      "Revizuiește cerințele din contractul de închiriere al spațiului pentru a nu risca penalități de la mall",
      "Pentru comerț B2B pe credit, evaluează o poliță de asigurare de credit comercial pentru protecția cash-flow-ului",
    ],
    nextStepCta: {
      title: "Asigură-ți magazinul fizic, stocurile sau operațiunea de retail",
      description: "Trimite suprafața și valoarea stocurilor tale pentru o simulare completă de protecție împotriva incendiului, furtului și cerințelor de la proprietari.",
      prefillHelpDesk: {
        category: "stocuri-marfa-materii-prime",
        industry: "retail",
        message: "Bună ziua. Dețin un business în retail / comerț și am nevoie de o asigurare pentru stocuri și răspundere civilă a spațiului comercial.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL D: PRODUCȚIE ȘI INDUSTRIE
  // ==============================================================================
  {
    id: "productie",
    letter: "D",
    slug: "productie-si-industrie",
    name: "Producție și industrie",
    subtitle: "Soluții industriale complete pentru fabrici, ateliere de prelucrare, linii automate și răspunderea produsului finit",
    targetBusinesses: [
      "Fabrici de prelucrare a lemnului și mobilier",
      "Industria prelucrărilor mecanice și structuri metalice",
      "Fabrici din industria alimentară și băuturi",
      "Producție de mase plastice, ambalaje și polimeri",
      "Fabrici textile, confecții și încălțăminte",
      "Industria chimică, vopseluri și materiale de construcții",
    ],
    caenExamples: ["1039 - Prelucrarea și conservarea fructelor și legumelor", "1610 - Tăierea și rindeluirea lemnului", "2511 - Fabricarea de construcții metalice", "2229 - Fabricarea altor produse din material plastic"],
    operatingModel: "Producția industrială presupune investiții masive de capital în utilaje specializate, consum ridicat de energie electrică și gaz, materii prime cu risc ridicat de combustie și lanțuri de asamblare interconectate: avarierea unui singur echipament cheie poate bloca întreaga fabrică.",
    whatCanBeLost: [
      "Hala industrială de producție și depozitele conexe",
      "Liniile tehnologice automatizate, roboții industriali și matrițele unicat greu de refăcut",
      "Stocurile de materii prime, producție în curs de execuție și produse finite",
      "Contractele internaționale pe termen lung dacă livrările sunt întrerupte",
      "Capitalul de lucru absorbit de plata salariilor și ratelor bancare pe perioada de oprire a uzinei",
    ],
    operationalRisks: [
      "Defectarea accidentală a unui motor principal sau a unui compresor hidraulic industrial (Machinery Breakdown)",
      "Oprirea producției din cauza întreruperii accidentale a alimentării cu energie sau gaz din rețeaua publică",
      "Producerea unui lot neconform de piese care ajunge în asamblarea finală a clientului (ex: automotive)",
      "Explozie de praf în instalațiile de exhaustare sau silozuri de rumeguș/făină",
    ],
    physicalRisks: [
      "Incendiu devastator alimentat de solvenți, vopsele, uleiuri industriale sau rumeguș",
      "Avarii produse utilajelor de către supratensiuni electrice tranzitorii sau trăsnet direct",
      "Deformarea structurii halei din cauza greutății zăpezii acumulate pe acoperiș pe timpul iernii",
    ],
    financialRisks: [
      "Pierderea marjei de profit operațional pe o perioadă de 6 până la 18 luni de reconstrucție",
      "Costul uriaș de refacere sau importare a matrițelor din Germania/Italia/Japonia (termen de livrare 6-12 luni)",
      "Penalități de 'linie oprită' aplicate de marii clienți industriali conform contractelor B2B",
    ],
    legalContractualRisks: [
      "Răspunderea obiectivă conform Legii 240/2004 pentru pagube produse utilizatorilor finali de produsele defecte",
      "Obligații privind protecția mediului și răspunderea pentru poluare accidentală conform OUG 195/2005",
      "Clauze stricte de audit și asigurare cerute de partenerii internaționali (clauze Hold Harmless)",
    ],
    employeeRisks: [
      "Accidente grave la prese hidraulice, ghilotine sau mașini de ștanțat",
      "Expunere la substanțe toxice, pulberi sau fum industrial ducând la boli profesionale",
      "Risc de explozie sau arsuri termice în zona cuptoarelor industriale",
    ],
    thirdPartyRisks: [
      "Poluarea solului sau a cursului de apă adiacent cu uleiuri sau chimicale în urma stingerii unui incendiu",
      "Avarierea mașinilor sau clădirilor din jur de către fumul gros sau suflul unei explozii",
    ],
    digitalRisks: [
      "Infiltrarea unui malware în sistemul de control SCADA sau PLC-urile fabricii, ducând la oprirea forțată sau sabotarea parametrilor de producție",
      "Furtul de proprietate intelectuală: desene tehnice, patente și rețete de producție",
    ],
    caseScenarios: [
      {
        title: "Avarie mecanică la presa hidraulică principală de 1.000 de tone a unei fabrici auto",
        trigger: "O oboseală a materialului nedetectată a dus la fisurarea cilindrului principal al presei hidraulice.",
        consequences: "Linia de ștanțare a fost blocată complet. Costul piesei de schimb: 95.000 EUR. Timpul de oprire a fabricii: 7 săptămâni, cu pierderi de marjă operațională de 380.000 EUR.",
        lesson: "Polița standard de incendiu NU acoperă avariile mecanice interne. A fost necesară polița specifică de Avarii Accidentale ale Mașinilor și Utilajelor (Machinery Breakdown / MB) combinată cu MLOP (Machinery Loss of Profits).",
      },
      {
        title: "Retragerea de pe piață a unui lot de componente auto cu toleranță greșită",
        trigger: "O dereglare a senzorului laser de calibrare a generat 20.000 de piese cu o abatere de 0.2 mm.",
        consequences: "Clientul final (producător de autovehicule) a oprit montajul și a solicitat rechemarea pieselor, demontarea celor deja montate și despăgubirea costurilor de manoperă (450.000 EUR).",
        lesson: "Polița de Răspundere a Producătorului trebuie extinsă cu clauzele specifice de 'Costuri de montare/demontare' (Rip & Tear Clause) și 'Rechemare de produse' (Product Recall).",
      },
    ],
    relevantPolicies: [
      { name: "Property All Risks (Incendiu și Daune Materiale)", slug: "cladiri-si-spatii-comerciale", importance: "esențială", role: "Acoperă halele industriale, stocurile și birourile împotriva riscurilor catastrofice și incendiului." },
      { name: "Avarii Accidentale ale Mașinilor și Utilajelor (Machinery Breakdown)", slug: "echipamente-utilaje-instalatii", importance: "esențială", role: "Protejează motoarele, presele, liniile automate la erori umane de operare, scurtcircuit și rupere mecanică." },
      { name: "Business Interruption (Întreruperea Activității Industriale)", slug: "business-interruption", importance: "esențială", role: "Preia costurile fixe și profitul operațional pierdut pe durata opririi producției." },
      { name: "Răspunderea Producătorului (Product Liability)", slug: "raspunderea-producatorului", importance: "esențială", role: "Acoperă vătămările sau daunele suferite de terți din cauza defectelor produselor fabricate." },
      { name: "Răspundere civilă de mediu și poluare accidentală", slug: "riscuri-de-mediu-si-poluare", importance: "recomandată", role: "Plătește costurile de decontaminare cerute de Garda de Mediu în caz de accident ecologic." },
    ],
    policyCoverageDetails: [
      { policy: "Machinery Breakdown (MB)", coverage: "Defecțiuni mecanice interne, explozie fizică, supratensiune electrică, forfecare, erori de manevrare.", typicalLimit: "Valoarea de înlocuire de nouă a utilajelor asigurate" },
      { policy: "MLOP (Machinery Loss of Profits)", coverage: "Pierderea de cifră de afaceri cauzată strict de avaria unui utilaj esențial acoperit pe MB.", typicalLimit: "Profitul brut pe o perioadă de indemnizare de 6 – 12 luni" },
      { policy: "Product Liability cu clauză de export UE/USA", coverage: "Despăgubiri și cheltuieli de judecată pentru daune produse de bunurile livrate la export.", typicalLimit: "500.000 – 5.000.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Piese supuse uzurii rapide și consumabile (curele, filtre, uleiuri, garnituri, cuțite amovibile)",
      "Avarii produse ca urmare a depășirii conștiente a sarcinilor tehnice maxime admise de producător",
      "Costul remedierii defectului produsului însuși (este acoperită doar paguba externă provocată de acel defect)",
      "Poluarea treptată, istorică sau neraportată în termenele stipulate de poliță (uzual 72 ore de la incident)",
    ],
    underwritingInfoNeeded: [
      "Inventarul complet al utilajelor: producător, model, an, valoare nouă de înlocuire",
      "Planul fabricii cu indicarea compartimentărilor antifoc și a distanțelor dintre clădiri",
      "Raportul de expertiză tehnică privind instalația de stingere incendii (bazin propriu de apă, pompe diesel, sprinklere)",
      "Cifra de afaceri defalcată pe piețe geografice: România, Uniunea Europeană, SUA/Canada, restul lumii",
      "Istoricul daunelor din ultimii 5 ani pentru avarii de utilaje și incendiu",
    ],
    faqs: [
      {
        question: "De ce polița de incendiu a fabricii nu acoperă și motorul electric ars al unui utilaj?",
        answer: "Polițele de incendiu acoperă doar daune produse de flacără externă. Dacă un motor se arde din cauza unei suprasolicitări sau a unui scurtcircuit intern fără să genereze un incendiu în toată hala, dauna poate fi acoperită exclusiv de polița de Avarii Accidentale ale Mașinilor (Machinery Breakdown).",
      },
      {
        question: "Dacă export în SUA, de ce îmi cere clientul american o poliță de răspundere cu totul separată?",
        answer: "Sistemul juridic american presupune daune punitive și cheltuieli juridice astronomice. Asigurătorii europeni exclud uzual jurisdicția SUA/Canada, cu excepția cazului în care se negociază o extindere teritorială explicită cu limite ridicate (minimum 2.000.000 - 5.000.000 USD).",
      },
    ],
    entrepreneurChecklist: [
      "Identifică utilajele 'gât de pâlnie' (bottlenecks) a căror oprire blochează întreaga fabrică și asigură-le pe MB+MLOP",
      "Verifică dacă asigurarea ta de răspundere a produsului acoperă țările unde ajunge efectiv marfa ta",
      "Respectă cu strictețe graficele de mentenanță preventivă cerute de producătorii utilajelor",
      "Efectuează anual termoviziunea tablourilor electrice principale pentru a preveni incendiile de natură electrică",
    ],
    nextStepCta: {
      title: "Protejează linia de producție și activele fabricii tale",
      description: "Discută cu un specialist în riscuri industriale pentru a audita capacitățile de protecție ale fabricii, utilajelor și răspunderii produsului.",
      prefillHelpDesk: {
        category: "echipamente-utilaje-instalatii",
        industry: "productie",
        message: "Bună ziua. Reprezint o companie de producție industrială și solicit o analiză de risc pentru utilaje, fabrică și răspunderea produsului.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL E: TRANSPORT, LOGISTICĂ ȘI DEPOZITARE
  // ==============================================================================
  {
    id: "transport",
    letter: "E",
    slug: "transport-logistica-si-depozitare",
    name: "Transport, logistică și depozitare",
    subtitle: "Soluții specializate pentru transport rutier intern și internațional de marfă, flote, depozite logistice și case de expediții",
    targetBusinesses: [
      "Transportatori rutieri de marfă internaționali și naționali",
      "Companii de curierat rapid și livrare 'last-mile'",
      "Operatori de depozite logistice și centre de cross-docking",
      "Case de expediții (Freight Forwarders)",
      "Companii de transport persoane (autocare, transferuri)",
      "Transportatori de mărfuri periculoase (ADR) și agabaritice",
    ],
    caenExamples: ["4941 - Transporturi rutiere de mărfuri", "5210 - Depozitări", "5229 - Alte activități anexe transporturilor (case de expediții)", "4939 - Alte transporturi terestre de călători"],
    operatingModel: "Companiile de transport operează active mobile de valoare ridicată (ansambluri cap-tractor + semiremorcă) expuse constant riscurilor rutiere din Europa, furtului organizat de marfă și reglementărilor stricte de timp de conducere și odihnă. Casele de expediții și depozitele răspund direct pentru integritatea bunurilor încredințate de clienți.",
    whatCanBeLost: [
      "Camioanele și semiremorcile flotei (daună totală prin accident, incendiu sau răsturnare)",
      "Mărfurile transportate de valoare ridicată (electronice, cafea, metale, bunuri de larg consum)",
      "Licența de transport sau capacitatea financiară ARR dacă daunele nu sunt despăgubite prompt",
      "Reputația și contractele cu marii clienți industriali sau case de expediție internaționale",
      "Depozitele logistice și mărfurile terților păstrate în regim de custodie",
    ],
    operationalRisks: [
      "Accidente rutiere grave pe autostrăzile din România sau Europa (Franța, Germania, Italia)",
      "Tăierea prelatelor și furtul mărfurilor în parcări nesecurizate pe timpul nopții",
      "Răsturnarea mărfurilor în semiremorcă din cauza frânării bruște sau a ancorării incorecte",
      "Nerespectarea temperaturii controlate la transportul frigorific (medicamente sau carne)",
    ],
    physicalRisks: [
      "Incendiu la roțile semiremorcii generat de blocarea etrierilor de frână",
      "Infiltrații de apă prin prelată sau acoperișul remorcii la ploaie torențială",
      "Incendiu masiv în depozitul logistic unde sunt depozitate sute de paleți pe rafturi înalte",
    ],
    financialRisks: [
      "Compensații cerute de proprietarul mărfii care depășesc limita standard CMR de 8.33 DST/kg",
      "Cheltuieli uriașe de tractare, repunere pe roți și curățare carosabil în caz de accident pe autostrăzi externe (pot depăși 30.000 EUR)",
      "Blocarea camioanelor în service săptămâni întregi în așteptarea pieselor sau a acordului de despăgubire CASCO",
    ],
    legalContractualRisks: [
      "Răspunderea transportatorului conform Convenției internaționale CMR (Geneva 1956)",
      "Obligația de a despăgubi marfa la valoare reală dacă se demonstrează 'culpa gravă' (dol/gross negligence conform Art. 29 CMR)",
      "Răspunderea casei de expediție în calitate de comisionar sau cărăuș contractual",
      "Obligativitatea poliței RCA valabile în tot spațiul Carte Verde",
    ],
    employeeRisks: [
      "Vătămarea gravă sau decesul șoferilor de tir în coliziuni pe șosea",
      "Accidente la încărcare/descărcare: căderea șoferului din remorcă sau lovirea de către stivuitor",
      "Agresiuni fizice sau jafuri asupra șoferilor în zone de tranzit cu risc ridicat",
    ],
    thirdPartyRisks: [
      "Daune materiale uriașe produse de un camion neasigurat corespunzător care lovește o pasarelă sau intră într-o clădire",
      "Poluarea solului sau apelor cu carburant scurs din rezervoarele deteriorate în urma coliziunii",
    ],
    digitalRisks: [
      "Compromiterea conturilor pe bursele de transport (ex: Timocom, Trans.eu) ducând la încărcarea frauduloasă a mărfii de către falși transportatori (Identity Theft)",
      "Atacuri ransomware asupra sistemelor WMS (Warehouse Management System) sau TMS din depozite",
    ],
    caseScenarios: [
      {
        title: "Furt de marfă prin tăierea prelatei într-o parcare de pe autostrada A1 din Franța",
        trigger: "Șoferul efectua pauza obligatorie de 9 ore într-o parcare neiluminată. Hoții au tăiat prelata și au sustras 14 paleți de telefoane mobile.",
        consequences: "Valoarea mărfii furate: 180.000 EUR. Greutatea brută a mărfii furate: doar 1.200 kg. Limita legală CMR (8.33 DST/kg) acoperea doar circa 12.000 EUR, generând un litigiu uriaș cu proprietarul mărfii.",
        lesson: "Pentru mărfuri scumpe și ușoare este obligatorie polița de CARGO (Asigurarea bunurilor în tranzit) încheiată de proprietar sau o poliță CMR cu clauză de renunțare la limita de 8.33 DST/kg, cu respectarea cerințelor de parcări sigure.",
      },
      {
        title: "Răsturnarea unui camion frigorific cu medicamente din cauza poleiului",
        trigger: "Autotrenul a derapat și s-a răsturnat pe acostament. Agregatul de frig s-a oprit, iar temperatura a crescut peste pragul critic de +8°C.",
        consequences: "Întregul lot de vaccinuri și produse biologice a fost declarat compromis de către producătorul farmaceutic. Pagubă: 420.000 EUR.",
        lesson: "Polița CMR trebuie să conțină clauza expresă de 'Avarie Frigorifică' (Thermo-King Clause) și dovada funcționării termodiagramei cu descărcare de date.",
      },
    ],
    relevantPolicies: [
      { name: "Asigurarea de Răspundere a Cărăușului Rutier (CMR)", slug: "cmr-cargo", importance: "esențială", role: "Acoperă răspunderea legală a transportatorului pentru pierderea sau avarierea mărfii conform Convenției CMR." },
      { name: "CASCO Flotă camioane și semiremorci", slug: "rca-casco-flote", importance: "esențială", role: "Protejează capetele-tractor și remorcile împotriva accidentelor, răsturnărilor, incendiului și furtului." },
      { name: "CARGO — Asigurarea bunurilor în tranzit", slug: "cmr-cargo", importance: "recomandată", role: "Acoperă marfa la valoarea sa reală comercială de factură (Toate Riscurile), indiferent de vina transportatorului." },
      { name: "Răspunderea Casei de Expediții (Freight Forwarder's Liability)", slug: "raspundere-civila-profesionala", importance: "esențială", role: "Protejează casele de expediție împotriva greșelilor profesionale, alegerii cărăușilor sau rătăcirii mărfii." },
      { name: "Răspunderea depozitarului și operatorului logistic", slug: "raspundere-civila-generala", importance: "esențială", role: "Acoperă avarierea mărfurilor depozitate ale clienților pe timpul manipulării sau stocării în depozit." },
    ],
    policyCoverageDetails: [
      { policy: "Asigurare CMR cu limită standard", coverage: "Răspunderea conform Convenției CMR (8.33 DST per kg lipsă sau avariat) pentru rute internaționale.", typicalLimit: "50.000 – 1.200.000 EUR pe eveniment" },
      { policy: "Poliță CARGO (Institut Cargo Clauses A)", coverage: "Despăgubire la 100% sau 110% din valoarea CIF a mărfii împotriva tuturor riscurilor de transport maritim/terestru/aerian.", typicalLimit: "Valoarea completă a facturii comerciale de marfă" },
      { policy: "Clauza de tractare și repatriere camion avariat", coverage: "Rambursarea cheltuielilor de ridicare, debarasare și transport al camionului avariat din străinătate în România.", typicalLimit: "10.000 – 30.000 EUR per eveniment" },
    ],
    exclusionsAndLimits: [
      "Furtul din camioane oprite în parcări neautorizate dacă polița stipula clauza de parcări păzite (Safe Parking Clause)",
      "Viciul propriu al mărfii sau ambalarea necorespunzătoare efectuată de către expeditor",
      "Pagube produse mărfii transportate dacă șoferul se afla sub influența alcoolului sau fără atestat valabil",
      "Daune indirecte cauzate de depășirea termenului de livrare (acoperite doar dacă există clauză specială și în limita navlului)",
    ],
    underwritingInfoNeeded: [
      "Componența flotei: număr capete-tractor, semiremorci (prelată, frigorifice, cisterne, basculante), ani de fabricație",
      "Rutele principale parcurse: intern România vs. Comunitate (Germania, Benelux, Franța, Italia, UK)",
      "Tipurile uzuale de mărfuri transportate: industriale, alimentare, farmaceutice, ADR, electronice",
      "Sistemele de monitorizare GPS, senzori de deschidere uși semiremorcă și procedurile de securitate în parcări",
      "Daunalitatea flotei din ultimii 3 ani (raport Loss Runs de la asigurătorii anteriori)",
    ],
    faqs: [
      {
        question: "Dacă am CMR, de ce îmi cere clientul să încheie el și poliță CARGO?",
        answer: "Polița CMR este o asigurare de răspundere: plătește doar dacă transportatorul este vinovat și este limitată legal la ~10-12 EUR/kg (8.33 DST). Dacă se transportă marfă de mare valoare (laptopuri, haine scumpe) sau intervine o forță majoră, polița CMR nu acoperă întreaga pagubă. Polița CARGO acoperă marfa la valoarea completă fără a depinde de culpa șoferului.",
      },
      {
        question: "Ce riscă o Casă de Expediții dacă subcontractează o cursă unui cărăuș fantomă?",
        answer: "Dacă marfa este furată de cărăușul fraudulos, clientul se va îndrepta împotriva Casei de Expediții. Dacă aceasta nu deține o poliță specifică de Răspundere a Casei de Expediții (Freight Forwarder's Liability) cu verificare de identitate, va suporta integral valoarea mărfii din propriul buzunar.",
      },
    ],
    entrepreneurChecklist: [
      "Instruiește șoferii să parcheze exclusiv în parcări securizate (clasificate ESPORG sau omologate) pe timp de noapte",
      "Verifică dacă polițele tale CMR acoperă 'Cabotajul' dacă efectuezi transporturi interne în interiorul altor state UE (ex: Germania, Franța)",
      "Asigură-te că valoarea asigurată CASCO a capetelor-tractor este aliniată cu valorile reale de piață",
      "Pentru mărfuri frigorifice, verifică setarea corectă a termodiagramei și calibrarea metrologică a senzorilor",
    ],
    nextStepCta: {
      title: "Structurează asigurarea flotei și mărfurilor transportate",
      description: "Obține cotații competitive pentru CASCO Flotă, polițe CMR internaționale și răspunderea caselor de expediție.",
      prefillHelpDesk: {
        category: "cmr-cargo",
        industry: "transport",
        message: "Bună ziua. Dețin o companie de transport rutier de marfă / logistică și doresc o ofertă pentru polițe CMR și CASCO flotă camioane.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL F: IT, SOFTWARE ȘI SERVICII DIGITALE
  // ==============================================================================
  {
    id: "it-software",
    letter: "F",
    slug: "it-software-si-servicii-digitale",
    name: "IT, software și servicii digitale",
    subtitle: "Protecție completă pentru companii de dezvoltare software, SaaS, agenții digitale, securitate cibernetică și infrastructură cloud",
    targetBusinesses: [
      "Companii de dezvoltare software la comandă (custom development) și outsourcing",
      "Furnizori de soluții software ca serviciu (SaaS) și aplicații cloud",
      "Agenții de web design, dezvoltare e-commerce și marketing digital",
      "Companii de consultanță IT, integratori de sisteme și suport infrastructură",
      "Firme de securitate cibernetică, audit IT și servicii SOC/MDR",
      "Centre de date (data centers) și furnizori de servicii gestionate (MSP)",
    ],
    caenExamples: ["6201 - Activități de realizare a softului la comandă", "6202 - Activități de consultanță în tehnologia informației", "6203 - Activități de management al mijloacelor de calcul", "6311 - Prelucrarea datelor, administrarea paginilor web"],
    operatingModel: "Companiile IT au active fizice reduse (laptopuri, birouri), dar dețin o expunere financiară și contractuală imensă: codul livrat rulează în procese de afaceri critice ale clienților globali. O eroare de programare, o breșă de securitate sau indisponibilitatea unui serviciu cloud poate atrage daune de milioane de euro din partea clienților din UE sau SUA.",
    whatCanBeLost: [
      "Stabilitatea financiară a companiei prin procese de despăgubire deschise de clienți internaționali",
      "Reputația pe piață în urma unei breșe de date în care sunt expuse datele confidențiale ale partenerilor",
      "Proprietatea intelectuală și codul sursă stocat pe repositorii cloud (GitHub/GitLab)",
      "Lichiditățile companiei prin atacuri de tip Business Email Compromise (BEC)",
      "Activele personale ale fondatorilor și directorilor (D&O) în caz de litigii societare",
    ],
    operationalRisks: [
      "Deploy-ul unui bug critic într-o aplicație de plăți sau ERP a clientului care generează erori de tranzacționare",
      "Ștergerea accidentală a unei baze de date de producție în timpul unei migrări cloud",
      "Depășirea gravă a termenelor limită de livrare stabilite prin SLA (Service Level Agreement)",
      "Încălcarea neintenționată a drepturilor de autor sau utilizarea neconformă a unei licențe open-source",
    ],
    physicalRisks: [
      "Furtul sau pierderea laptopurilor de serviciu care conțin chei API sau date confidențiale",
      "Avarierea echipamentelor de rețea din birou prin fluctuații electrice",
    ],
    financialRisks: [
      "Penalități financiare contractuale pentru neîndeplinirea standardelor SLA",
      "Costuri legale uriașe de reprezentare în litigii transfrontaliere în instanțe din Marea Britanie sau SUA",
      "Răscumpărări cerute de grupările de ransomware pentru decriptarea fișierelor și nepublicarea lor",
    ],
    legalContractualRisks: [
      "Cerința obligatorie a clienților din contractele internaționale de a deține 'Errors & Omissions (E&O)' de 1M – 5M EUR",
      "Amenzi administrative conform Regulamentului GDPR (până la 20.000.000 EUR sau 4% din cifra globală)",
      "Noile obligații impuse de Directiva NIS 2 și Regulamentul DORA pentru furnizorii de servicii digitale critice",
    ],
    employeeRisks: [
      "Angajați care cad pradă atacurilor de phishing și oferă acces atacatorilor în rețea",
      "Plecarea unor dezvoltatori cheie cu cod sursă sau baze de date către concurență",
      "Burnout și afecțiuni de sănătate ale angajaților care lucrează ore suplimentare la lansări de proiecte",
    ],
    thirdPartyRisks: [
      "Compromiterea clienților finali prin atacuri pe lanțul de aprovizionare software (Supply Chain Attacks)",
      "Indisponibilitatea serviciilor digitale ale clienților din cauza căderii serverelor administrate de tine",
    ],
    digitalRisks: [
      "Atacuri ransomware cu dublă extorcare (criptare date + exfiltrare)",
      "Injecții de malware în bibliotecile de cod publicate în ecosisteme open-source (npm, PyPI)",
      "Furt de credențiale de acces la panourile de administrare AWS, Azure sau Google Cloud",
    ],
    caseScenarios: [
      {
        title: "Bug de producție la un modul de checkout dezvoltat pentru un retailer internațional",
        trigger: "O eroare de logică într-un update de API a determinat eșuarea a 40% din tranzacțiile de card ale clientului în weekendul de Black Friday.",
        consequences: "Clientul a calculat o pierdere directă de vânzări de 280.000 EUR și a reținut plățile către firma de software, solicitând plata diferenței pe calea unei notificări prealabile de judecată.",
        lesson: "Polița de Răspundere Profesională IT (Tech E&O — Technology Errors and Omissions) acoperă exact pierderile financiare pure suferite de clienți ca urmare a erorilor de cod sau neîndeplinirii funcțiilor software.",
      },
      {
        title: "Atac ransomware care a exfiltrat datele medicale ale clienților unei platforme SaaS",
        trigger: "Un atacator a folosit credențiale VPN compromise ale unui colaborator extern pentru a accesa serverele bazei de date.",
        consequences: "Serverele au fost criptate, iar atacatorii au cerut 150.000 USD pentru cheie și netrimiterea datelor către presă. Compania a trebuit să angajeze o firmă de forensics cibernetic, avocați specializați pe GDPR și să notifice 25.000 de pacienți.",
        lesson: "Polița de Cyber Risk & Data Privacy acoperă cheltuielile cu experții de răspuns la incidente (Incident Response), forensics IT, asistența juridică de criză, notificarea victimelor și despăgubirile civile cerute de terți (amenzile administrative aplicate de ANSPDCP fiind ne-asigurabile conform ordinii publice române).",
      },
    ],
    relevantPolicies: [
      { name: "Răspundere Profesională IT (Tech E&O)", slug: "raspundere-civila-profesionala", importance: "esențială", role: "Protejează împotriva proceselor inițiate de clienți pentru bug-uri, întârzieri, breșe contractuale și eșecul livrabilelor." },
      { name: "Asigurare Cyber Risk & Data Breach", slug: "cyber-risk", importance: "esențială", role: "Acoperă costurile tehnice, juridice și de relații publice generate de un atac cibernetic sau scurgere de date." },
      { name: "D&O (Răspunderea Administratorilor și Directorilor)", slug: "do-raspunderea-administratorilor", importance: "recomandată", role: "Protejează patrimoniul personal al fondatorilor și C-level împotriva proceselor intentate de acționari sau terți." },
      { name: "Răspundere civilă generală pentru sediu și terți", slug: "raspundere-civila-generala", importance: "opțională", role: "Acoperă spațiul de birouri închiriat și evenimentele fizice organizate." },
      { name: "Asigurare medicală privată pentru echipă", slug: "asigurari-angajati", importance: "recomandată", role: "Beneficiu esențial de retenție și sănătate pentru programatori și specialiști IT." },
    ],
    policyCoverageDetails: [
      { policy: "Tech E&O (Errors & Omissions)", coverage: "Pierderi financiare pure ale clienților rezultate din produse software defecte sau servicii IT eronate.", typicalLimit: "1.000.000 – 5.000.000 EUR pe an" },
      { policy: "Cyber Risk — Secțiunea First Party", coverage: "Restaurare baze de date, costuri experți investigații criminalistice IT (forensics), pierderea de profit din oprirea sistemelor.", typicalLimit: "250.000 – 2.000.000 EUR" },
      { policy: "Cyber Risk — Secțiunea Third Party", coverage: "Răspunderea față de clienți pentru scurgerea datelor lor confidențiale și cheltuieli de apărare juridică.", typicalLimit: "500.000 – 2.000.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Garanții comerciale exprese asumate voluntar în contract peste nivelul obișnuit al diligenței profesionale",
      "Încălcarea intenționată a drepturilor de autor sau furtul conștient de secrete comerciale",
      "Penalități contractuale nesusținute de o pagubă reală documentată a clientului",
      "Breșe cibernetice produse prin sisteme software depășite (End of Life) nesuportate de producători",
    ],
    underwritingInfoNeeded: [
      "Cifra de afaceri defalcată pe țări: România, UE, Marea Britanie, SUA/Canada",
      "Descrierea serviciilor oferite: dezvoltare software la comandă, produse proprii SaaS, consultanță, integrare",
      "Procedurile de Quality Assurance (QA): teste automate, code review, medii de staging separate de producție",
      "Măsurile de securitate cibernetică: autentificare multifactor (MFA) obligatorie, backup-uri izolate (offline/immutable), EDR/antivirus centralizat",
      "Standarde și certificări deținute: ISO 27001, SOC 2, ISO 9001",
    ],
    faqs: [
      {
        question: "Clientul din SUA îmi cere în contract o poliță de 'Errors and Omissions' de 2 milioane USD. Pot încheia așa ceva din România?",
        answer: "Da, prin brokeri specializați pe piața locală sau sindicate Lloyd's se pot plasa polițe Tech E&O cu jurisdicție SUA/Canada, adaptate exact clauzelor contractuale solicitate de marii clienți nord-americani.",
      },
      {
        question: "Dacă suntem o firmă 100% remote, fără birou fizic, mai avem nevoie de asigurare?",
        answer: "Categoric da. Riscurile unei companii IT nu sunt fizice, ci contractuale și cibernetice. Dacă un atacator compromite contul unui angajat remote și injectează cod malițios în aplicația unui client, sediul fizic nu are nicio relevanță.",
      },
    ],
    entrepreneurChecklist: [
      "Impune autentificarea cu doi factori (MFA) pe toate conturile de GitHub, AWS, Google Workspace și VPN",
      "Verifică dacă limitele de răspundere din contractele cu clienții (Cap on Liability) sunt corelate cu limita poliței E&O",
      "Nu semna clauze de despăgubire nelimitată (Unlimited Indemnity) cerute de corporații fără acordul asigurătorului",
      "Creează copii de siguranță offline sau cu imutabilitate (WORM) pentru a supraviețui unui atac ransomware",
    ],
    nextStepCta: {
      title: "Asigură-ți contractele software și riscul cibernetic",
      description: "Completează cerințele contractuale solicitate de clienții tăi internaționali cu o poliță Tech E&O și Cyber Risk validată global.",
      prefillHelpDesk: {
        category: "cyber-risk",
        industry: "it-software",
        message: "Bună ziua. Conduc o companie IT / software și am nevoie de o cotație pentru poliță Tech E&O (răspundere profesională) și Cyber Risk.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL G: SĂNĂTATE, FARMACIE ȘI SERVICII CONEXE
  // ==============================================================================
  {
    id: "sanatate",
    letter: "G",
    slug: "sanatate-farmacie-si-servicii-conexe",
    name: "Sănătate, farmacie și servicii conexe",
    subtitle: "Protecție medicală completă pentru clinici private, cabinete stomatologice, farmacii, laboratoare și centre de recuperare",
    targetBusinesses: [
      "Clinici medicale private multidisciplinare și spitale private",
      "Cabinete de medicină dentară și clinici de implantologie/stomatologie",
      "Rețele de farmacii și drogherii",
      "Laboratoare de analize medicale și imagistică (RMN, CT, radiologie)",
      "Centre de fizioterapie, kinetoterapie și recuperare medicală",
      "Servicii private de ambulanță și asistență medicală la domiciliu",
    ],
    caenExamples: ["8621 - Activități de asistență medicală generală", "8622 - Activități de asistență medicală specializată", "8623 - Activități de asistență stomatologică", "4773 - Comerț cu amănuntul al produselor farmaceutice", "8690 - Alte activități referitoare la sănătatea umană"],
    operatingModel: "Sectorul medical privat operează sub un regim strict de reglementare (Colegiul Medicilor, DSP, Ministerul Sănătății). Echipamentele de diagnostic sunt extrem de sensibile și costisitoare, iar deciziile cadrelor medicale au impact direct asupra vieții și integrității pacienților. Răspunderea civilă profesională (malpraxis) este cerință legală obligatorie.",
    whatCanBeLost: [
      "Echipamentele medicale de înaltă performanță (aparate RMN, tomografe computerizate, ecografe 4D, unituri dentare)",
      "Autorizația sanitară de funcționare a clinicii în cazul unui incident sanitar grav",
      "Stocurile de medicamente speciale, vaccinuri sau reactivi de laborator la temperatură controlată",
      "Reputația medicilor și a brandului clinicii în urma acuzațiilor publice de malpraxis",
      "Patrimoniul clinicii ca urmare a sentințelor judecătorești ce acordă daune morale mari pacienților",
    ],
    operationalRisks: [
      "Complicații medicale neprevăzute sau erori de diagnostic ale medicilor angajați sau colaboratori",
      "Infecții nosocomiale contractate de pacienți în timpul intervențiilor chirurgicale sau manoperelor invazive",
      "Erori de laborator în eliberarea rezultatelor testelor sau confuzia probelor biologice",
      "Defectarea accidentală a tubului de raze X sau a magnetului unui aparat RMN",
    ],
    physicalRisks: [
      "Incendiu cauzat de instalațiile de oxigen medicinal sau scurtcircuit la panourile de alimentare",
      "Variații bruște de tensiune care ard plăcile electronice ale ecografelor sau laserelor chirurgicale",
      "Inundații provenite de la sterilizatoare sau conductele sanitare din clădire",
    ],
    financialRisks: [
      "Costul reparațiilor de sute de mii de euro pentru echipamentele medicale în leasing",
      "Pierderea contractului cu Casa Națională de Asigurări de Sănătate (CNAS) pe perioada suspendării activității",
      "Despăgubiri de sute de mii de euro stabilite de instanțe pentru vătămarea permanentă a sănătății unui pacient",
    ],
    legalContractualRisks: [
      "Obligația legală conform Legii 95/2006 privind deținerea polițelor de malpraxis atât pentru personalul medical, cât și pentru unitatea sanitară (clinică/spital)",
      "Reglementările GDPR extrem de stricte privind datele cu caracter sensibil (date medicale ale pacienților)",
      "Răspunderea civilă delictuală a unității medicale în calitate de comitent pentru faptele prepușilor (medici)",
    ],
    employeeRisks: [
      "Înțepături accidentale cu ace contaminate sau expunere la agenți patogeni biologici (HIV, Hepatite)",
      "Iradiere accidentală a personalului la aparatele de radiologie prin defectarea ecranării",
      "Agresiuni fizice sau verbale din partea pacienților agitați sau a aparținătorilor acestora",
    ],
    thirdPartyRisks: [
      "Căderea pacienților vârstnici de pe masa de examinare sau pe treptele clinicii",
      "Reacții anafilactice severe la substanțe de contrast sau anestezice locale",
    ],
    digitalRisks: [
      "Criptarea fișierelor medicale electronice (EMR) ale pacienților prin atac ransomware",
      "Breșe de securitate în portalul online de eliberare a rezultatelor analizelor de laborator",
    ],
    caseScenarios: [
      {
        title: "Defecțiune a sistemului de răcire cu heliu la un aparat RMN de 1.5 Tesla",
        trigger: "O pană prelungită de curent a oprit compresorul chiller-ului, declanșând procedura de urgență (quench) și pierderea heliului lichid.",
        consequences: "Costul de reîncărcare cu heliu și repornire a echipamentului: 42.000 EUR, plus 3 săptămâni de investigații anulate (pierderi de 35.000 EUR).",
        lesson: "Polița de Asigurare a Echipamentelor Electronice și Medicale (EEI) trebuie să includă daunele produse echipamentelor de imagistică și pierderea accidentală a fluidelor de răcire.",
      },
      {
        title: "Acuzație de malpraxis pentru o procedură de implantologie dentară",
        trigger: "O leziune a nervului alveolar inferior produsă în timpul inserării unui implant dentar a cauzat parestezie permanentă a buzei pacientului.",
        consequences: "Pacientul a dat în judecată atât medicul stomatolog, cât și clinica, solicitând 80.000 EUR daune morale și materiale.",
        lesson: "Este obligatorie existența poliței de Malpraxis Medical pentru clinică (persoană juridică) cu limite adecvate, peste polițele individuale minime ale medicilor.",
      },
    ],
    relevantPolicies: [
      { name: "Asigurarea de Malpraxis pentru Unități Sanitare și Farmacii", slug: "raspundere-civila-profesionala", importance: "esențială", role: "Obligatorie prin Legea 95/2006; acoperă răspunderea clinicii pentru faptele personalului medical." },
      { name: "Asigurarea echipamentelor medicale electronice (EEI)", slug: "echipamente-electronice", importance: "esențială", role: "Protejează aparatele de imagistică, laserele și uniturile stomatologice la avarii electrice și mecanice." },
      { name: "Asigurarea spațiului clinicii și a mobilierului medical", slug: "cladiri-si-spatii-comerciale", importance: "esențială", role: "Acoperă clădirea, finisajele speciale și amenajările medicale la incendiu și inundație." },
      { name: "Cyber Risk pentru protecția datelor medicale (HIPAA/GDPR)", slug: "cyber-risk", importance: "recomandată", role: "Protejează împotriva breșelor de securitate pe sistemele informatice medicale." },
      { name: "Asigurarea stocurilor farmaceutice și a alterării vaccinurilor", slug: "stocuri-marfa-materii-prime", importance: "recomandată", role: "Acoperă pierderea medicamentelor din cauza întreruperii lanțului de frig." },
    ],
    policyCoverageDetails: [
      { policy: "Malpraxis Unitate Medicală", coverage: "Despăgubiri pentru vătămări corporale, cheltuieli de judecată și daune morale acordate pacienților.", typicalLimit: "100.000 – 1.000.000 EUR pe an" },
      { policy: "EEI Medical (Electronic Equipment Insurance)", coverage: "Toate riscurile de avariere accidentală a aparatelor medicale (supratensiune, erori de manevrare, cădere corpuri).", typicalLimit: "Valoarea de înlocuire de nou a fiecărui aparat" },
      { policy: "Răspundere civilă terți (locație clinică)", coverage: "Alunecări, căderi ale vizitatorilor în sălile de așteptare sau pe holurile clinicii.", typicalLimit: "50.000 – 200.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Proceduri medicale efectuate fără acordul informat scris semnat de pacient anterior intervenției",
      "Intervenții efectuate de personal medical fără aviz de liberă practică valabil emis de Colegiul Medicilor",
      "Medicamente sau substanțe experimentale neomologate de Agenția Națională a Medicamentului (ANMDMR)",
      "Revendicări generate de operații estetice cu scop pur cosmetic, fără clauză expresă aprobată",
    ],
    underwritingInfoNeeded: [
      "Specialitățile medicale practicate în clinică și numărul de medici/asistenți angajați sau colaboratori",
      "Lista echipamentelor medicale de valoare mare: producător, model, an punere în funcțiune, valoare de factură",
      "Existența contractelor de service și mentenanță preventivă autorizate pentru aparatura medicală",
      "Cifra de afaceri anuală și numărul estimat de consultații / intervenții pe an",
      "Istoricul reclamațiilor medicale și al litigiilor din ultimii 5 ani",
    ],
    faqs: [
      {
        question: "Dacă toți medicii din clinică au deja poliță individuală de malpraxis, mai trebuie asigurare și pentru clinică?",
        answer: "Da! Pacientul nemulțumit dă aproape întotdeauna în judecată clinica (persoana juridică) ca furnizor de servicii. Polița individuală a medicului îl apără doar pe medic, nu și patrimoniul clinicii. În plus, Legea 95/2006 impune expres obligativitatea asigurării de malpraxis pentru unitățile sanitare.",
      },
      {
        question: "Sunt acoperite defecțiunile tuburilor de raze X sau componentelor consumabile ale aparatelor medicale?",
        answer: "Nu pe uzură normală. Totuși, dacă tubul se arde ca urmare a unui șoc electric provenit din rețea sau a unei avarii bruște a generatorului de înaltă tensiune, dauna este acoperită prin polița de echipamente electronice (EEI).",
      },
    ],
    entrepreneurChecklist: [
      "Verifică anual valabilitatea avizelor de liberă practică și a polițelor de malpraxis ale tuturor medicilor colaboratori",
      "Implementează formulare riguroase de consimțământ informat pentru fiecare procedură medicală în parte",
      "Montează surse neîntrerupte de tensiune (UPS industrial) și generator automat pentru echipamentele medicale scumpe",
      "Asigură-te că frigiderele de vaccinuri și medicamente au sisteme de alertă SMS în caz de creștere a temperaturii",
    ],
    nextStepCta: {
      title: "Asigură-ți clinica medicală, cabinetul stomatologic sau farmacia",
      description: "Obține pachetul complet de protecție pentru malpraxis medical juridic, echipamente electronice scumpe și spațiul clinicii.",
      prefillHelpDesk: {
        category: "raspundere-civila-profesionala",
        industry: "sanatate",
        message: "Bună ziua. Administrez o clinică medicală / cabinet stomatologic și am nevoie de o propunere pentru malpraxis unitate medicală și asigurare echipamente.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL H: SERVICII PROFESIONALE
  // ==============================================================================
  {
    id: "servicii-profesionale",
    letter: "H",
    slug: "servicii-profesionale",
    name: "Servicii profesionale",
    subtitle: "Protecție pentru contabili, auditori, avocați, notari, arhitecți, evaluatori și consultanți de business",
    targetBusinesses: [
      "Cabinete și societăți de contabilitate, expertiză contabilă și audit financiar",
      "Consultanți fiscali și specialiști în prețuri de transfer",
      "Birouri de arhitectură, urbanism și proiectare structurală/instalații",
      "Societăți civile de avocați și birouri notariale",
      "Evaluatori autorizați ANEVAR și experți tehnici judiciari",
      "Companii de consultanță în management, HR și recrutare",
    ],
    caenExamples: ["6920 - Activități de contabilitate și audit financiar; consultanță în domeniul fiscal", "7111 - Activități de arhitectură", "7112 - Activități de inginerie și consultanță tehnică", "6910 - Activități juridice", "7022 - Activități de consultanță pentru afaceri și management"],
    operatingModel: "Companiile din servicii profesionale vând expertiză intelectuală, opinii tehnice sau juridice și întocmesc documente critice pentru clienți. O singură eroare de calcul, o omisiune într-un contract sau depășirea unui termen procedural poate atrage răspunderea patrimonială directă a biroului.",
    whatCanBeLost: [
      "Stabilitatea financiară a societății de consultanță în urma unei cereri de daune egale cu prejudiciul clientului",
      "Calitatea de membru în corpul profesional (CECCAR, CAFR, CCF, OAR, UNBR, ANEVAR) în caz de nerespectare a normelor",
      "Încrederea clienților strategici și contractele recurente de consultanță",
      "Activele personale ale asociaților în formele de organizare cu răspundere solidară",
    ],
    operationalRisks: [
      "Depunerea întârziată a declarațiilor fiscale ale clienților sau calculul eronat al TVA/impozitului pe profit, atrăgând decizii de impunere cu dobânzi și penalități de la ANAF",
      "Erori de cotare sau calcul în planșele de arhitectură care impun demolarea sau modificarea costisitoare a structurii",
      "Evaluarea greșită a unui imobil gajat la o bancă, banca imputând evaluatorului diferența de credit neacoperită",
      "Pierderea unui termen de decădere într-un litigiu comercial de milioane de euro",
    ],
    physicalRisks: [
      "Distrugerea documentelor contabile sau a contractelor originale ale clienților într-un incendiu sau inundație la sediu",
      "Furtul calculatoarelor din birou care conțin baze de date cu date confidențiale",
    ],
    financialRisks: [
      "Cheltuieli substanțiale de apărare juridică și onorarii de avocați pentru combaterea acuzațiilor nefondate",
      "Refuzul clienților de a plăti facturile restante de consultanță pe motivul unei pretinse culpe profesionale",
    ],
    legalContractualRisks: [
      "Obligația legală impusă de legislația profesională specifică de a deține poliță de răspundere profesională (Malpraxis profesional)",
      "Prevederile stricte privind confidențialitatea și clauzele de penalitate din acordurile NDA",
      "Răspunderea contractuală pentru neatingerea obiectivelor asumate în contractele de consultanță",
    ],
    employeeRisks: [
      "Greșeli ale asistenților stagiari sau juniorilor nesupravegheați corespunzător de către parteneri",
      "Scurgerea de informații privilegiate (insider trading) sau secrete comerciale către concurenții clientului",
    ],
    thirdPartyRisks: [
      "Accidentarea vizitatorilor sau clienților veniți la întâlniri la sediul biroului",
    ],
    digitalRisks: [
      "Atac de tip 'Man-in-the-Middle' în care se interceptează emailurile dintre contabil și client, schimbând contul bancar de plată a taxelor",
      "Criptarea arhivei de documente contabile (fișiere Saga, WinMentor, SAP) de către un ransomware",
    ],
    caseScenarios: [
      {
        title: "Calcul eronat al facilităților fiscale de către o firmă de contabilitate",
        trigger: "Contabilul a aplicat eronat facilitățile din sectorul construcțiilor pentru o companie care nu îndeplinea ponderea cifrei de afaceri cerută de Codul Fiscal.",
        consequences: "În urma inspecției ANAF, clientul a fost obligat la plata din urmă a 140.000 lei diferențe de taxe plus 38.000 lei dobânzi și penalități, sumă pe care a imputat-o firmei de contabilitate.",
        lesson: "Polița de Răspundere Profesională a Contabililor și Experților Fiscali acoperă dobânzile și penalitățile imputate clientului din culpa dovedită a consultantului.",
      },
      {
        title: "Omisiune în proiectul de arhitectură al unei clădiri de birouri",
        trigger: "Arhitectul a omis prevederea traseului pentru tubulatura de desfumare conform noului scenariu de securitate la incendiu.",
        consequences: "Dezvoltatorul a trebuit să execute carotări suplimentare în planșee de beton armat deja turnate, cu un cost neprevăzut de 65.000 EUR.",
        lesson: "Polița de Răspundere Profesională a Arhitecților și Inginerilor Proiectanți acoperă costurile suplimentare de remediere generate de erorile sau omisiunile de proiectare.",
      },
    ],
    relevantPolicies: [
      { name: "Răspundere Civilă Profesională (PI — Professional Indemnity)", slug: "raspundere-civila-profesionala", importance: "esențială", role: "Acoperă daunele financiare suferite de clienți ca urmare a erorilor profesionale, calcul greșit sau omisiuni." },
      { name: "Asigurarea sediului de birou și a echipamentelor IT", slug: "cladiri-si-spatii-comerciale", importance: "recomandată", role: "Protejează calculatoarele, mobilierul și sediul împotriva incendiilor, apei din conducte și furtului." },
      { name: "Cyber Risk pentru birouri profesionale", slug: "cyber-risk", importance: "recomandată", role: "Acoperă investigațiile criminalistice, asistența juridică și despăgubirile civile în caz de compromitere a datelor confidențiale ale clienților." },
      { name: "D&O pentru parteneri și administratori", slug: "do-raspunderea-administratorilor", importance: "opțională", role: "Protejează conducerea societății împotriva deciziilor de management contestate de asociați." },
    ],
    policyCoverageDetails: [
      { policy: "Răspundere Profesională Contabil/Auditor", coverage: "Prejudicii financiare cauzate clienților, penalități fiscale, costuri de apărare în instanță.", typicalLimit: "50.000 – 1.000.000 EUR pe an" },
      { policy: "Răspundere Profesională Arhitect/Proiectant", coverage: "Erori în planșe, calcule structurale greșite, nerespectare normative de proiectare.", typicalLimit: "100.000 – 2.000.000 EUR pe proiect/an" },
      { policy: "Cheltuieli de refacere a documentelor", coverage: "Costul reconstiturii actelor și arhivelor contabile distruse accidental la sediu.", typicalLimit: "10.000 – 50.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Fapte săvârșite cu intenție sau fraudă deliberată a practicianului",
      "Obligații asumate expres prin contract care depășesc standardul legal de răspundere profesională",
      "Pierderi financiare ale clienților rezultate din fluctuații de piață sau decizii comerciale eronate ale acestora",
      "Amenzi penale sau amenzi aplicate direct consultantului de către autoritățile de reglementare",
    ],
    underwritingInfoNeeded: [
      "Domeniul exact de activitate și apartenența la asociația profesională de profil",
      "Cifra de afaceri anuală din servicii profesionale",
      "Numărul de angajați calificați și colaboratori cu drept de semnătură",
      "Valoarea maximă a contractelor de consultanță derulate și specificul clienților (companii locale vs. multinaționale)",
      "Istoricul cererilor de despăgubire din ultimii 5 ani",
    ],
    faqs: [
      {
        question: "Polița obligatorie CECCAR sau OAR este suficientă pentru proiectele mari?",
        answer: "Nu. Limitele minime impuse de corpurile profesionale (adesea între 10.000 și 20.000 EUR) sunt suficiente doar pentru menținerea vizei profesionale. În practică, stabilirea limitei optime nu se face după sume arbitrare, ci prin aplicarea a 5 factori metodologici: (1) cifra de afaceri anuală a biroului; (2) expunerea maximă per client sau contract consiliat; (3) cerințele contractuale exprese ale partenerilor; (4) riscul maxim probabil (PML - Probable Maximum Loss); și (5) lichiditatea disponibilă pentru retenție proprie (franșiza asumată).",
      },
      {
        question: "Ce înseamnă acoperirea pe bază de 'Claims Made' în asigurarea profesională?",
        answer: "Majoritatea polițelor de răspundere profesională funcționează pe principiul 'cereri de despăgubire notificate' (Claims Made): polița acoperă faptele dacă reclamația este primită de tine și notificată asigurătorului în perioada de valabilitate a poliței, chiar dacă greșeala a fost comisă în trecut (în cadrul datei retroactive stabilite).",
      },
    ],
    entrepreneurChecklist: [
      "Stabilește o dată retroactivă cât mai veche (preferabil 'nelimitată' sau de la înființarea biroului) la reînnoirea poliței",
      "Include în contractele cu clienții o clauză de limitare a răspunderii corelată cu valoarea poliței de asigurare",
      "Nu recunoaște nicio culpă și nu face nicio promisiune de despăgubire clientului înainte de a notifica asigurătorul",
      "Efectuează back-up zilnic criptat în cloud pentru toate documentele și bazele de date financiare",
    ],
    nextStepCta: {
      title: "Protejează-ți biroul de consultanță și expertiză",
      description: "Alege o poliță de răspundere profesională adaptată exact profesiei tale: contabilitate, fiscalitate, arhitectură sau avocatură.",
      prefillHelpDesk: {
        category: "raspundere-civila-profesionala",
        industry: "servicii-profesionale",
        message: "Bună ziua. Conduc o firmă de contabilitate / arhitectură / consultanță și doresc o ofertă pentru asigurare de răspundere civilă profesională.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL I: AGRICULTURĂ, ZOOTEHNIE ȘI SILVICULTURĂ
  // ==============================================================================
  {
    id: "agricultura",
    letter: "I",
    slug: "agricultura-zootehnie-si-silvicultura",
    name: "Agricultură, zootehnie și silvicultură",
    subtitle: "Protecție pentru culturi vegetale de câmp, livezi, sere, ferme zootehnice, silozuri și utilaje agricole",
    targetBusinesses: [
      "Ferme vegetale de mari culturi (grâu, porumb, floarea-soarelui, rapiță, soia)",
      "Exploatații pomicole (livezi) și viticole (viță de vie)",
      "Sere și solarii de legume și flori",
      "Ferme zootehnice de bovine, porcine, ovine și păsări",
      "Operatori de silozuri, baze de recepție cereale și morărit",
      "Companii de exploatare forestieră și prelucrare primară a lemnului",
    ],
    caenExamples: ["0111 - Cultivarea cerealelor, plantelor leguminoase și a plantelor producătoare de semințe oleaginoase", "0121 - Cultivarea strugurilor", "0141 - Creșterea bovinelor de lapte", "0146 - Creșterea porcinelor", "0220 - Exploatarea forestieră"],
    operatingModel: "Agricultura este singurul sector industrial a cărui fabrică funcționează complet sub cerul liber. Riscurile climatice extreme (grindină, îngheț târziu, secetă, furtuni violente), bolile sanitare veterinare la animale și volatilitatea prețului cerealelor pot anula complet profitul unui an întreg într-o singură după-amiază.",
    whatCanBeLost: [
      "Recolta de pe mii de hectare de teren chiar înainte de recoltare",
      "Tractoarele și combinele moderne de mare putere cu ghidaj GPS (valori de 150.000 – 500.000 EUR per unitate)",
      "Efectivul de animale din ferme ca urmare a unor epizootii (pestă porcină africană, gripă aviară)",
      "Stocurile de cereale depozitate în silozuri prin incendiu, explozie de praf sau autoaprindere",
      "Plantațiile perene de viță-de-vie sau pomi fructiferi în caz de îngheț la sol sever",
    ],
    operationalRisks: [
      "Căderea grindinei de dimensiuni mari care ciuruiește frunzele și rupe tulpinile culturilor",
      "Incendiu izbucnit în lanul de grâu în timpul recoltării din cauza unei scântei la toba combinei",
      "Avarierea motorului tractorului prin aspirarea de corpuri străine sau defectare hidraulică",
      "Pana de ventilație într-o hală modernă de pui la îngrășat, ducând la asfixierea a zeci de mii de păsări",
    ],
    physicalRisks: [
      "Furtună violentă cu vijelie care culcă la pământ cultura de porumb sau floarea-soarelui",
      "Prăbușirea serelor sub greutatea zăpezii sau spargerea sticlei de către grindină",
      "Incendiu la fânare și depozitele de baloți de paie",
    ],
    financialRisks: [
      "Incapacitatea de a rambursa creditele agricole sezoniere pentru semințe, îngrășăminte și motorină",
      "Executarea garanțiilor funciare de către bănci sau bănci partenere dacă recolta este compromisă",
      "Penalități contractuale mari dacă nu se pot onora contractele 'Forward' de livrare cereale către traderi",
    ],
    legalContractualRisks: [
      "Cerințele băncilor și ale companiilor de leasing de a asigura toate culturile și utilajele finanțate",
      "Normele sanitar-veterinare stricte privind biosecuritatea impuse de ANSVSA",
      "Cerințele de eligibilitate pentru subvențiile APIA (Submăsura 17.1 — Asigurarea culturilor, a animalelor și a plantelor)",
    ],
    employeeRisks: [
      "Răsturnarea tractoarelor pe terenuri în pantă sau în șanțuri de irigații",
      "Accidente la priza de putere (cardanul) a mașinilor agricole",
      "Intoxicații cu pesticide în timpul stropirilor fitosanitare",
    ],
    thirdPartyRisks: [
      "Ieșirea utilajelor agabaritice pe drumurile publice și coliziuni cu autovehicule",
      "Animale scăpate de pe pășuni care pătrund pe carosabil sau distrug culturile vecinilor",
      "Deriva pesticidelor pe terenurile învecinate cultivate ecologic",
    ],
    digitalRisks: [
      "Defectarea sistemelor de telemetrie și ghidare prin satelit a utilajelor agricole",
      "Vulnerabilități în sistemele computerizate de alimentare automată și microclimat din fermele zootehnice",
    ],
    caseScenarios: [
      {
        title: "Grindină devastatoare peste 400 de hectare de rapiță înainte de recoltare",
        trigger: "O furtună violentă cu boabe de grindină de mărimea nucilor a lovit ferma timp de 15 minute.",
        consequences: "Silicvele de rapiță s-au spart în proporție de 85%, semințele fiind scuturate pe sol. Paguba evaluată la recoltă: 310.000 EUR.",
        lesson: "Polița de Asigurare a Culturilor Agricole preia costul pagubei în funcție de gradul de dăunare stabilit de comisia comună de evaluare (expert fermier + inspector asigurător).",
      },
      {
        title: "Incendiu la o combină agricolă nouă de 350.000 EUR în lanul de porumb",
        trigger: "Frecarea unei curele de transmisie blocate a generat căldură intensă, aprinzând praful vegetal și resturile uscate din compartimentul motor.",
        consequences: "Combina a ars complet în 12 minute, iar flăcările au mistuit și 8 hectare de cultură.",
        lesson: "Polița CASCO Utilaje Agricole (Agro-CASCO) acoperă incendiul utilajului chiar și în timpul exploatării în câmp, inclusiv riscul de extindere a focului.",
      },
    ],
    relevantPolicies: [
      { name: "Asigurarea Culturilor Agricole (Câmp, Sere, Livezi)", slug: "asigurari-agricole", importance: "esențială", role: "Protejează recolta împotriva grindinei, înghețului târziu/timpuriu, incendiului și furtunii." },
      { name: "CASCO Utilaje și Echipamente Agricole (Agro-CASCO)", slug: "echipamente-utilaje-instalatii", importance: "esențială", role: "Acoperă tractoarele, combinele, semănătorile la accident, răsturnare, incendiu și furt." },
      { name: "Asigurarea Animalelor de Fermă (Bovine, Porcine, Păsări)", slug: "asigurari-agricole", importance: "esențială", role: "Acoperă mortalitatea cauzată de boli, accidente, asfixiere și fenomene meteorologice extreme." },
      { name: "Asigurarea Silozurilor și Stocurilor de Cereale", slug: "stocuri-marfa-materii-prime", importance: "recomandată", role: "Protejează cerealele depozitate împotriva incendiului, exploziilor și infiltrațiilor de apă." },
    ],
    policyCoverageDetails: [
      { policy: "Asigurarea culturilor (Grindină și Incendiu)", coverage: "Pierderea cantitativă de recoltă cauzată de lovirea directă de grindină și foc în lan.", typicalLimit: "Valoarea producției estimate (Producție medie kg/ha × Preț de valorificare asigurat)" },
      { policy: "Subvenție primă prin Submăsura 17.1 AFIR", coverage: "Rambursarea a până la 70% din valoarea primei de asigurare eligibile din fonduri europene.", typicalLimit: "Conform ghidului de finanțare AFIR" },
      { policy: "Agro-CASCO", coverage: "Răsturnare, cădere în prăpastie, coliziune cu obstacole în câmp, incendiu în mers, furt.", typicalLimit: "Valoarea reală de piață a utilajului" },
    ],
    exclusionsAndLimits: [
      "Seceta pedologică prelungită dacă nu s-a contractat clauza specifică de secetă (produs foarte restrictiv în piață)",
      "Boli și dăunători fitosanitari care puteau fi preveniți prin tratamente standard conform tehnologiei agricole",
      "Pagube produse înainte de intrarea în vigoare a asigurării (termen de așteptare uzual de 48 ore de la emitere)",
      "Nerespectarea densității minime de răsărire a plantelor la stadiul inițial de vegetație",
    ],
    underwritingInfoNeeded: [
      "Tabelul parcelelor agricole: bloc fizic, localitate, județ, cultură, suprafață în hectare",
      "Producția medie estimată pe hectar și prețul agreat per tonă pentru fiecare cultură",
      "Lista utilajelor: serie șasiu, an fabricație, număr de ore de funcționare, valoare contabilă/de piață",
      "Pentru animale: sistemul de adăpostire, certificat sanitar-veterinar, registrul efectivelor la zi",
    ],
    faqs: [
      {
        question: "Cum pot recupera 70% din prima de asigurare agricolă prin fonduri europene?",
        answer: "Fermierii eligibili pot depune dosarul la AFIR în cadrul Submăsurii 17.1. Condiția este ca polița de asigurare să acopere riscurile climatice eligibile și să fie încheiată cu un asigurător partener agreat, iar plata primei să fie efectuată integral de fermier.",
      },
      {
        question: "Când este momentul optim pentru a încheia asigurarea culturilor de toamnă?",
        answer: "Asigurarea culturilor de toamnă (rapiță, grâu, orz) trebuie încheiată toamna până la stadiul de înfrățire/rozetă, pentru a acoperi riscul de îngheț la sol din timpul iernii, sau primăvara devreme pentru grindină și incendiu.",
      },
    ],
    entrepreneurChecklist: [
      "Pregătește documentele APIA și adeverințele de rol agricol înainte de semnarea poliței",
      "Verifică dacă utilajele din câmp au stingătoare omologate și revizuite anual montate pe cabină",
      "În caz de cădere de grindină, anunță asigurătorul în maximum 48-72 de ore înainte ca urmele loviturilor să se cicatrizeze",
      "Păstrează un lot martor neatins dacă dorești să recoltezi înainte de venirea inspectorului de daune",
    ],
    nextStepCta: {
      title: "Asigură-ți recolta, animalele sau utilajele agricole",
      description: "Pregătește din timp protecția culturilor pentru sezonul viitor și profită de oportunitatea subvenționării primei de asigurare.",
      prefillHelpDesk: {
        category: "asigurari-agricole",
        industry: "agricultura",
        message: "Bună ziua. Sunt fermier / administrator de societate agricolă și doresc o cotație pentru asigurarea culturilor vegetale și a utilajelor.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL J: ENERGIE, UTILITĂȚI ȘI INSTALAȚII FOTOVOLTAICE
  // ==============================================================================
  {
    id: "energie",
    letter: "J",
    slug: "energie-utilitati-si-instalatii-fotovoltaice",
    name: "Energie, utilități și instalații fotovoltaice",
    subtitle: "Protecție completă pentru parcuri fotovoltaice sol/acoperiș, instalatori de sisteme regenerabile, prosumatori industriali și mentenanță",
    targetBusinesses: [
      "Dezvoltatori și proprietari de parcuri fotovoltaice la sol (Utility-Scale Solar Parks)",
      "Companii de instalare panouri solare și sisteme de energie regenerabilă (EPC Contractors)",
      "Prosumatori comerciali și industriali cu centrale solare pe acoperișurile halelor",
      "Producători de energie eoliană, microhidrocentrale și biogaz",
      "Firme de operare și mentenanță a parcurilor solare (O&M Providers)",
      "Distribuitori și integratori de baterii industriale și sisteme BESS (Battery Energy Storage Systems)",
    ],
    caenExamples: ["3511 - Producția de energie electrică", "4321 - Lucrări de instalații electrice", "4222 - Lucrări de construcții a proiectelor utilitare pentru electricitate", "3514 - Comercializarea energiei electrice"],
    operatingModel: "Sectorul energiei fotovoltaice cunoaște o expansiune masivă în România, susținut de fonduri europene și PNRR. Parcurile solare ocupă zeci de hectare și presupun mii de panouri expuse intemperiilor, invertoare electronice complexe, transformatoare de medie/înaltă tensiune și cablaje de cupru atractive pentru hoți.",
    whatCanBeLost: [
      "Mii de panouri fotovoltaice distruse de o singură furtună de grindină de mare intensitate",
      "Invertoarele centrale sau de șir arse de supratensiuni sau lovituri directe de trăsnet",
      "Veniturile garantate din vânzarea energiei electrice în SEN (Sistemul Energetic Național) pe săptămâni întregi",
      "Finanțarea bancară sau granturile PNRR dacă parcul nu este asigurat conform cerințelor băncii creditoare",
      "Hala industrială dacă panourile de pe acoperiș iau foc și aprind termoizolația clădirii",
    ],
    operationalRisks: [
      "Furtul cablurilor solare de cupru și al panourilor din parcuri izolate nesupravegheate eficient",
      "Defectarea prematură a invertoarelor din cauza supraîncălzirii în zilele caniculare de vară",
      "Degradarea structurală a sistemului de prindere (trackere solare) din cauza vântului puternic",
      "Incendiu declanșat de arcuri electrice (DC Arc Fault) la conectorii MC4 montați defectuos",
    ],
    physicalRisks: [
      "Grindină masivă care sparge sticla călită a panourilor sau creează microfisuri invizibile la ochiul liber",
      "Trăsnet direct care distruge transformatoarele de putere din postul de transformare",
      "Incendii de vegetație uscată în jurul parcului care se propagă la mesele de panouri",
    ],
    financialRisks: [
      "Pierderea de venit din nerealizarea producției estimate de MWh (Loss of Revenue)",
      "Penalități de dezechilibru energetic pe piața de energie dacă parcul nu livrează prognoza asumată",
    ],
    legalContractualRisks: [
      "Cerința băncilor finanțatoare de cesionare a poliței de asigurare în favoarea băncii creditoare",
      "Răspunderea instalatorului EPC pentru incendii provocate pe acoperișurile clienților comerciali",
      "Obligațiile de mediu la dezafectarea și reciclarea panourilor la finalul ciclului de viață",
    ],
    employeeRisks: [
      "Electrocutare la tensiuni continue periculoase (până la 1.500 V DC) în timpul montajului sau mentenanței",
      "Căderi de pe acoperișurile halelor industriale în timpul instalării panourilor solare",
      "Arsuri solare și insolație pe timpul verii la lucrările de montaj pe câmp deschis",
    ],
    thirdPartyRisks: [
      "Incendiu extins de la parcul fotovoltaic la pădurile sau terenurile agricole vecine",
      "Reflexia luminii solare (orbire) către drumurile naționale sau culoare de zbor din apropiere",
    ],
    digitalRisks: [
      "Hacking pe sistemele SCADA de monitorizare a parcului și oprirea de la distanță a invertoarelor",
      "Manipularea datelor de producție raportate către OPCOM sau Transelectrica",
    ],
    caseScenarios: [
      {
        title: "Furtună cu grindină gigant peste un parc fotovoltaic de 5 MW din sudul țării",
        trigger: "O celulă de furtună supercelulară a generat boabe de grindină de 5-6 cm diametru.",
        consequences: "3.200 de panouri au avut sticla spartă, iar alte 1.800 au prezentat 'hot spots' și microfisuri la testul de electroluminescență. Paguba: 480.000 EUR.",
        lesson: "Polița de Asigurare a Parcurilor Fotovoltaice (Solar PV All Risks) acoperă daunele produse de grindină, inclusiv testele speciale de electroluminescență pentru identificarea celulelor distruse intern.",
      },
      {
        title: "Incendiu la un sistem fotovoltaic de 200 kW instalat pe acoperișul unei hale de producție",
        trigger: "Un conector MC4 montat fără scule dedicate de sertizare a creat un arc electric care a aprins membrana acoperișului.",
        consequences: "Focul a pătruns în hală. Producția a fost oprită o lună, paguba totală fiind de 550.000 EUR. Proprietarul a acționat în judecată firma instalatoare.",
        lesson: "Instalatorii de panouri solare (EPC) trebuie să dețină neapărat o poliță de Răspundere Civilă Profesională și Contractuală cu clauză expresă de montaj pe acoperiș și lucrări electrice.",
      },
    ],
    relevantPolicies: [
      { name: "Solar PV All Risks (Asigurarea Toate Riscurile a Parcurilor Solare)", slug: "energie-si-instalatii-fotovoltaice", importance: "esențială", role: "Acoperă panourile, invertoarele, substația, cablurile împotriva fenomenelor meteo, incendiului și furtului." },
      { name: "EAR (Erection All Risks — Toate Riscurile de Montaj)", slug: "car-ear", importance: "esențială", role: "Protejează parcul în perioada de construcție și punere în funcțiune până la probele tehnologice." },
      { name: "Pierderea de Venit din Energie (Business Interruption / DSU)", slug: "business-interruption", importance: "esențială", role: "Compensează contravaloarea megawaților neproduși pe durata reparațiilor după o avarie asigurată." },
      { name: "Răspunderea Civilă a Instalatorului (EPC Contractor Liability)", slug: "raspundere-civila-generala", importance: "esențială", role: "Protejează firmele de montaj împotriva daunelor produse clădirilor clienților în timpul instalării." },
    ],
    policyCoverageDetails: [
      { policy: "Solar PV Operational All Risks", coverage: "Grindină, furtună, incendiu, furt prin efracție de componente, trăsnet, avarii electrice la invertoare.", typicalLimit: "100% din valoarea de reconstrucție a parcului fotovoltaic" },
      { policy: "Pierdere de Venit (Loss of Revenue)", coverage: "Plata venitului pierdut calculat pe baza iradianței solare istorice și a prețului energiei contractate.", typicalLimit: "Venitul estimat pe o perioadă de 6 – 12 luni de indemnizare" },
      { policy: "Garanție de performanță / bună execuție", coverage: "Garanții de asigurare pentru racordare la rețea (ATR) sau contracte de furnizare.", typicalLimit: "Conform cerințelor Transelectrica sau distribuitorului local" },
    ],
    exclusionsAndLimits: [
      "Scăderea producției cauzată strict de lipsa soarelui (condiții meteorologice normale fără daună fizică)",
      "Degradarea naturală în timp a eficienței celulelor fotovoltaice (PID / Light-Induced Degradation)",
      "Furtul cablurilor sau panourilor dacă parcul nu avea gard perimetral și sistem CCTV funcțional conectat la dispecerat",
      "Defecte de fabricație acoperite exclusiv de garanția producătorului de panouri",
    ],
    underwritingInfoNeeded: [
      "Capacitatea instalată a parcului (kWp / MWp) și tipul de montaj: la sol sau pe acoperiș",
      "Fisa tehnică a panourilor (producător Tier 1, tehnologie sticlă-sticlă vs. sticlă-folie) și a invertoarelor",
      "Măsurile de securitate fizică: împrejmuire, barieră infraroșu, camere termoviziune, contract pază/intervenție rapidă",
      "Studiul de randament energetic (raport PVsyst) și prețul mediu estimat de vânzare a energiei electrice",
      "Pentru acoperișuri: expertiza de rezistență a structurii halei și tipul de termoizolație al acoperișului (PIR, vată minerală, EPS)",
    ],
    faqs: [
      {
        question: "Banca îmi cere asigurare pentru parcul fotovoltaic înainte de tragerea creditului. Ce poliță trebuie?",
        answer: "Băncile finanțatoare solicită două etape: 1) În faza de șantier — poliță EAR (Erection All Risks) cu includerea băncii ca asigurat adițional; 2) La punerea în funcțiune — poliță operațională All Risks + Pierdere de Venit (Loss of Revenue) pe întreaga durată a creditului, cu cesiune de drepturi în favoarea băncii.",
      },
      {
        question: "Dacă sunt prosumator pe firmă și am panouri pe hala proprie, intră automat în asigurarea clădirii?",
        answer: "NU automat! Panourile fotovoltaice trebuie declarate explicit ca bun asigurat distinct, cu valoarea lor separată de investiție. Altfel, în caz de incendiu sau grindină, asigurătorul poate refuza plata panourilor considerându-le nedeclarate în sumă asigurată.",
      },
    ],
    entrepreneurChecklist: [
      "Declară panourile fotovoltaice în polița de incendiu a halei ca element de sine stătător",
      "Instalează senzori de arc electric și protecții la supratensiune (SPD clasa I+II) la toate tablourile de curent continuu",
      "Asigură-te că parcul fotovoltaic la sol are o distanță defrișată de minimum 5 metri de la gard pentru protecție la incendii de vegetație",
      "Solicită o inspecție termografică anuală cu dronă pentru a depista panourile defecte înainte de declanșarea unui incendiu",
    ],
    nextStepCta: {
      title: "Protejează parcul solar sau investiția ta fotovoltaică",
      description: "Obține o structurare completă de asigurare cerută de bănci și investitori pentru parcuri solare la sol sau instalații industriale pe acoperiș.",
      prefillHelpDesk: {
        category: "energie-si-instalatii-fotovoltaice",
        industry: "energie",
        message: "Bună ziua. Dezvolt / dețin o capacitate de energie fotovoltaică și am nevoie de o asigurare tehnică completă (All Risks + Pierdere de venit).",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL K: DEZVOLTARE IMOBILIARĂ, PROPRIETARI ȘI ADMINISTRATORI
  // ==============================================================================
  {
    id: "imobiliare",
    letter: "K",
    slug: "imobiliare-si-administrare-proprietati",
    name: "Dezvoltare imobiliară, proprietari și administratori de proprietăți",
    subtitle: "Protecție patrimonială pentru dezvoltatori rezidențiali, proprietari de clădiri de birouri, parcuri logistice și companii de property management",
    targetBusinesses: [
      "Dezvoltatori imobiliari de ansambluri rezidențiale și mixte",
      "Proprietari și fonduri de investiții imobiliare (clădiri de birouri clasa A, centre comerciale)",
      "Proprietari de parcuri industriale și spații logistice închiriate",
      "Companii de administrare a proprietăților (Property & Facility Management)",
      "Proprietari de clădiri istorice sau spații comerciale stradale",
    ],
    caenExamples: ["6810 - Cumpărarea și vânzarea de bunuri imobiliare proprii", "6820 - Închirierea și subînchirierea bunurilor imobiliare proprii sau închiriate", "6832 - Administrarea imobilelor pe bază de comision sau contract"],
    operatingModel: "Companiile imobiliare dețin active fixe cu valori uriașe (milioane sau zeci de milioane de euro) finanțate frecvent prin credite de investiții sindicate. Modelul lor depinde de menținerea valorii de piață a activului, încasarea neîntreruptă a chiriilor și conformarea riguroasă la cerințele de securitate la incendiu și normativele în construcții.",
    whatCanBeLost: [
      "Integritatea fizică a clădirii de birouri sau a depozitului logistic (valoare totală de reconstrucție)",
      "Fluxul continuu de chirii (Rental Income) pe durata reconstrucției după o catastrofă",
      "Relația cu chiriașii cheie dacă spațiile devin neutilizabile sau nu respectă standardele promise",
      "Răspunderea față de proprietarii apartamentelor vândute pentru defecte de structură în primii 10 ani",
      "Valoarea de lichidare a activului dacă o daună nu este remediată la standarde superioare",
    ],
    operationalRisks: [
      "Infiltrații masive de apă din terase sau fațade cortină care distrug finisajele interioare ale chiriașilor",
      "Defectarea centralelor termice sau a agregatelor de răcire (chillers) în plină iarnă sau vară",
      "Blocarea ascensoarelor sau defecțiuni la sistemele de evacuare fum și gaze fierbinți",
      "Accidente ale vizitatorilor în parcările subterane sau în zonele comune ale imobilului",
    ],
    physicalRisks: [
      "Cutremur major care afectează structura de rezistență a clădirii",
      "Incendiu devastator propagat prin fațada ventilată a clădirii de birouri",
      "Inundație la subsolurile tehnice (posturi trafo, pompe) din cauza revărsării rețelei municipale de canalizare",
    ],
    financialRisks: [
      "Pierderea chiriilor pe o perioadă de până la 24 de luni de proiectare și reconstrucție (Loss of Rent)",
      "Creșterea dobânzilor la creditele bancare dacă veniturile din chirii sunt sistate de un incident fizic",
    ],
    legalContractualRisks: [
      "Răspunderea dezvoltatorului conform Legii 10/1995 pentru viciile ascunse ale construcției (pe durata de 10 ani sau pe durata de existență a construcției pentru rezistență)",
      "Conflicte juridice cu chiriașii corporate legate de clauzele de 'Quiet Enjoyment' și chirii suspendate",
      "Obligația contractuală impusă de băncile finanțatoare de menținere a clauzei de 'Loss Payee' în favoarea băncii",
    ],
    employeeRisks: [
      "Accidentarea tehnicienilor de mentenanță la intervențiile pe acoperiș sau în puțurile de lift",
      "Accidente la deszăpezirea manuală a teraselor sau curățarea fațadelor din sticlă la înălțime",
    ],
    thirdPartyRisks: [
      "Căderea unor bucăți de fațadă, tencuială sau țurțuri de gheață peste mașinile parcate sau trecători",
      "Alunecări pe gresia udă din holurile principale ale clădirii de birouri",
    ],
    digitalRisks: [
      "Atac cibernetic asupra sistemului BMS (Building Management System) care controlează accesul în clădire, barierele și climatizarea",
    ],
    caseScenarios: [
      {
        title: "Incendiu la o clădire de birouri propagat prin fațada termoizolantă",
        trigger: "O țigară aruncată de la etaj pe o terasă tehnică a aprins deșeurile de ambalaje, focul urcând rapid pe panourile compozite ale fațadei.",
        consequences: "Trei etaje au fost distruse, iar clădirea a fost evacuată timp de 9 luni pentru consolidare și refacere fațadă. Chiriașii au fost relocați. Cost total daună: 1.800.000 EUR.",
        lesson: "Polița Property All Risks a proprietarului preia daunele fizice ale clădirii, iar secțiunea 'Loss of Rent' acoperă chiriile neîncasate de la chiriași pe perioada lucrărilor.",
      },
      {
        title: "Inundație în subsolul tehnic al unui bloc nou de locuințe",
        trigger: "O clapetă de sens a rețelei pluviale a cedat în timpul unei furtuni, refulând apa în camera postului trafo și a stației de hidrofor.",
        consequences: "Echipamentele electrice ale întregului complex au fost scurtcircuitate. Locatarii au rămas fără curent și apă 10 zile, dând în judecată dezvoltatorul.",
        lesson: "Este esențială polița de Răspundere Civilă a Dezvoltatorului Imobiliar (pentru vicii și deficiențe de execuție) combinată cu asigurarea utilajelor tehnice ale clădirii.",
      },
    ],
    relevantPolicies: [
      { name: "Property All Risks pentru Clădiri Comerciale și Rezidențiale", slug: "cladiri-si-spatii-comerciale", importance: "esențială", role: "Protejează clădirea, finisajele, fațada și echipamentele tehnice fixe ale imobilului." },
      { name: "Loss of Rent (Asigurarea Pierderii de Chirii)", slug: "business-interruption", importance: "esențială", role: "Garantează încasarea chiriilor pierdute dacă spațiul devine nelocuibil în urma unui incendiu/cutremur." },
      { name: "Răspunderea Civilă a Proprietarului Imobiliar (Property Owner's Liability)", slug: "raspundere-civila-generala", importance: "esențială", role: "Acoperă vătămările sau pagubele suferite de chiriași, vizitatori sau vecini generate de imobil." },
      { name: "Răspunderea Profesională pentru Property & Facility Management", slug: "raspundere-civila-profesionala", importance: "recomandată", role: "Protejează administratorii de clădiri împotriva greșelilor operaționale de administrare a proprietății." },
    ],
    policyCoverageDetails: [
      { policy: "Property All Risks (Clădire)", coverage: "Valoarea completă de reconstrucție (inclusiv costuri de demolare, debarasare moloz și onorarii arhitecți).", typicalLimit: "1.000.000 – 50.000.000+ EUR" },
      { policy: "Loss of Rent", coverage: "Rambursarea chiriilor contractuale care ar fi fost plătite de chiriași pe durata reparațiilor.", typicalLimit: "Veniturile din chirii pe o perioadă de 12 – 24 luni" },
      { policy: "Răspunderea Proprietarului față de terți și chiriași", coverage: "Căderi de zăpadă/țurțuri, defecțiuni ascensor, inundații provocate chiriașilor de la etajele superioare.", typicalLimit: "500.000 – 2.000.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Bunurile mobile aparținând chiriașilor (acestea trebuie asigurate separat de chiriași prin propriile polițe)",
      "Deteriorarea lentă cauzată de infiltrații pluviale repetate neînlăturate la timp (lipsă de mentenanță)",
      "Tasări sau mișcări de teren cunoscute la proiectare fără soluții tehnice adecvate",
      "Clădiri fără autorizație de construire sau care nu respectă normele urbanistice legale",
    ],
    underwritingInfoNeeded: [
      "Cartea tehnică a construcției: an finalizare, structură (cadre beton, oțel, zidărie), regim de înălțime",
      "Suprafața totală desfășurată (Aria Construită Desfășurată) și valoarea contabilă de reevaluare a clădirii",
      "Lista chiriașilor, profilul de activitate al acestora și valoarea cumulată anuală a chiriilor încasate",
      "Măsurile de securitate la incendiu: autorizație ISU valabilă, instalație de sprinklere, hidranți, stingere cu gaz",
      "Existența contractelor autorizate de mentenanță pentru lifturi, trape de fum și generatoare",
    ],
    faqs: [
      {
        question: "Cine plătește asigurarea dacă într-o clădire sunt 20 de firme chiriașe?",
        answer: "Proprietarul încheie o poliță de clădire (Property All Risks) pentru întregul imobil și include costul în cota de cheltuieli comune (Service Charge) refacturată chiriașilor. În paralel, fiecare chiriaș este obligat prin contract să dețină o poliță proprie pentru bunurile sale interioare, amenajări (fit-out) și răspundere civilă terți.",
      },
      {
        question: "Ce reprezintă 'Clauza de renunțare la dreptul de regres' (Waiver of Subrogation)?",
        answer: "Este o clauză standard în contractele de închiriere comerciale: dacă asigurătorul proprietarului despăgubește un incendiu pornit din greșeala unui chiriaș, asigurătorul renunță la dreptul legal de a se îndrepta împotriva chiriașului pentru recuperarea banilor (sub condiția reciprocității).",
      },
    ],
    entrepreneurChecklist: [
      "Asigură clădirea la 'valoarea de reconstrucție de nouă' (fără a scădea uzura), altfel riști regula proporțională în caz de daună parțială",
      "Solicită tuturor chiriașilor copii după polițele lor de asigurare și dovada achitării primelor la fiecare reînnoire",
      "Montează parazăpezi pe acoperiș și menține contracte de deszăpezire rapidă pentru a evita accidentele cu țurțuri",
      "Efectuează verificările periodice ISU și verifică funcționarea ușilor rezistente la foc",
    ],
    nextStepCta: {
      title: "Asigură clădirea comercială sau portofoliul tău imobiliar",
      description: "Structurează un program de protecție imobiliară All Risks cu acoperire pentru pierdere de chirii și răspunderea proprietarului.",
      prefillHelpDesk: {
        category: "cladiri-si-spatii-comerciale",
        industry: "imobiliare",
        message: "Bună ziua. Sunt proprietar / dezvoltator / administrator de imobil comercial și solicit o ofertă completă de asigurare de clădire și răspundere.",
      },
    },
  },

  // ==============================================================================
  // DOMENIUL L: ALTE DOMENII DE ACTIVITATE
  // ==============================================================================
  {
    id: "alte-domenii",
    letter: "L",
    slug: "alte-domenii-de-activitate",
    name: "Alte domenii de activitate",
    subtitle: "Protecție pentru educație privată, săli de sport, service-uri auto, saloane de înfrumusețare și companii de securitate",
    targetBusinesses: [
      "Școli, grădinițe private, afterschool-uri și centre educaționale",
      "Săli de fitness, centre sportive și școli de dans",
      "Service-uri auto, ateliere de mecanică/tinichigerie și spălătorii auto",
      "Saloane de înfrumusețare, cosmetică, frizerii și clinici estetice non-invazive",
      "Companii de securitate, pază umană și instalare sisteme de alarmă",
      "Curățătorii chimice și spălătorii textile industriale",
    ],
    caenExamples: ["8510 - Învățământ preșcolar", "8520 - Învățământ primar", "9313 - Activități ale centrelor de fitness", "4520 - Întreținerea și repararea autovehiculelor", "9602 - Coafură și alte activități de înfrumusețare", "8010 - Activități de protecție și gardă"],
    operatingModel: "Aceste afaceri presupun interacțiune umană directă și continuă cu publicul, manipularea bunurilor de valoare ale clienților (autoturisme lăsate în reparație, haine încredințate) sau răspunderea critică pentru siguranța fizică a copiilor și adulților în incintă.",
    whatCanBeLost: [
      "Mașinile clienților aflate în curtea sau atelierele service-ului auto (incendiu sau furt)",
      "Încrederea părinților și reputația școlii sau grădiniței în caz de accident grav al unui copil",
      "Echipamentele specializate scumpe (aparate de fitness profesionale, cabine de vopsitorie auto, elevatoare, lasere cosmetice)",
      "Autorizațiile de funcționare din partea Poliției Române (pentru firmele de securitate) sau Ministerului Educației",
    ],
    operationalRisks: [
      "Accidentarea copiilor la locurile de joacă ale grădiniței sau în timpul orelor de sport",
      "Căderea unui autoturism de pe elevatorul service-ului auto în timpul lucrărilor de mecanică",
      "Arsuri chimice sau alergii severe produse clientelor de către tratamente cosmetice la salon",
      "Vătămarea clienților în sălile de fitness la utilizarea greutăților libere sau benzilor de alergat",
      "Eșecul intervenției agenților de securitate la un jaf armat la obiectivul păzit",
    ],
    physicalRisks: [
      "Incendiu violent în cabina de vopsitorie a service-ului auto generat de vapori de vopsea și diluanți",
      "Inundație la curățătorie provocată de spargerea conductelor de abur sau apă industrială",
    ],
    financialRisks: [
      "Despăgubiri cerute de clienții ale căror mașini de lux au fost distruse într-un incendiu la service",
      "Prejudicii morale majore stabilite de instanțe pentru traume suferite de minori în instituții educaționale",
    ],
    legalContractualRisks: [
      "Răspunderea legală a depozitarului (Art. 2103 Cod Civil) pentru mașinile lăsate în service pentru reparații",
      "Obligația legală conform Legii 333/2003 privind paza obiectivelor și asigurarea de răspundere a firmelor de pază",
      "Normele stricte ale Ministerului Sănătății privind sterilizarea ustensilelor în saloanele de cosmetică",
    ],
    employeeRisks: [
      "Accidentarea mecanicilor auto la contactul cu piese fierbinți sau organe de mașini în mișcare",
      "Agresarea fizică a agenților de pază în timpul exercitării atribuțiilor la obiective",
      "Afecțiuni ale pielii sau ale căilor respiratorii din cauza contactului cu vopsele și solvenți",
    ],
    thirdPartyRisks: [
      "Copii care se rătăcesc sau părăsesc nesupravegheați perimetrul grădiniței",
      "Avarierea mașinii clientului în timpul probelor de drum efectuate de mecanicul service-ului",
    ],
    digitalRisks: [
      "Expunerea imaginilor înregistrate de camerele de supraveghere ale grădiniței sau sălii de fitness",
    ],
    caseScenarios: [
      {
        title: "Incendiu izbucnit noaptea într-un service auto cu 8 autovehicule în atelier",
        trigger: "Un scurtcircuit la un redresor de încărcare a bateriilor a aprins materialele inflamabile din jur.",
        consequences: "Atelierul și toate cele 8 mașini ale clienților (în valoare totală de 240.000 EUR) au fost distruse complet.",
        lesson: "Polița de Răspundere a Service-urilor Auto trebuie să conțină clauza specială de 'Bunuri primite în custodie / lucru (Vehicles in Custody)' pentru a despăgubi mașinile clienților.",
      },
      {
        title: "Accident grav la locul de joacă al unei grădinițe private",
        trigger: "Un leagăn s-a desprins din șuruburile de ancorare în timp ce un copil de 5 ani se balansa, provocându-i o fractură de antebraț.",
        consequences: "Părinții au dat în judecată grădinița cerând rambursarea tuturor costurilor medicale de chirurgie privată și 25.000 EUR daune morale.",
        lesson: "Polița de Răspundere Civilă Generală a Unităților de Învățământ preia cheltuielile de spitalizare și daunele materiale/morale imputate conducerii.",
      },
    ],
    relevantPolicies: [
      { name: "Răspundere Civilă Profesională și Generală adaptată domeniului", slug: "raspundere-civila-generala", importance: "esențială", role: "Protejează împotriva vătămărilor clienților, copiilor sau avarierii bunurilor încredințate." },
      { name: "Asigurarea de Incendiu pentru Spațiu și Echipamente", slug: "cladiri-si-spatii-comerciale", importance: "esențială", role: "Acoperă elevatoarele, cabinele de vopsit, aparatele de fitness și sediul de activitate." },
      { name: "Asigurarea mașinilor primite în lucru (pentru service auto)", slug: "echipamente-utilaje-instalatii", importance: "esențială", role: "Despăgubește autoturismele clienților avariate pe timpul reparațiilor sau probelor de drum." },
      { name: "Asigurare de accidente pentru cursanți/sportivi/copii", slug: "asigurari-angajati", importance: "recomandată", role: "Oferă despăgubiri forfetare rapide părinților în caz de accident la școală sau sală." },
    ],
    policyCoverageDetails: [
      { policy: "Răspunderea Service-urilor Auto (Garage Policy)", coverage: "Daune la mașinile clienților în atelier, cădere de pe elevator, incendiu, probe de drum pe șosea.", typicalLimit: "100.000 – 500.000 EUR pe an" },
      { policy: "Răspunderea Instituțiilor de Învățământ", coverage: "Vătămări corporale suferite de elevi/copii în timpul activităților didactice și extracurriculare.", typicalLimit: "50.000 – 300.000 EUR pe an" },
      { policy: "Răspunderea Firmelor de Pază (Legea 333/2003)", coverage: "Pagube produse beneficiarului din culpa agenților de securitate sau nedepistarea efracției.", typicalLimit: "100.000 – 500.000 EUR" },
    ],
    exclusionsAndLimits: [
      "Piese auto montate incorect care nu funcționează (este acoperit doar accidentul rutier cauzat de greșeală)",
      "Accidente sportive normale inerente competițiilor dacă s-a semnat regulamentul de joc fără culpă a sălii",
      "Proceduri cosmetice invazive de competență pur medicală dacă salonul nu are licență medicală",
      "Furturi săvârșite cu participarea dovedită a agenților de pază proprii",
    ],
    underwritingInfoNeeded: [
      "Domeniul specific de activitate și numărul de clienți/cursanți/mașini deserviți lunar",
      "Capacitatea maximă de mașini ce pot fi găzduite simultan în service auto și în curte",
      "Lista echipamentelor profesionale de lucru: an, valoare de achiziție, marcaje CE",
      "Măsurile de securitate, protecție la incendiu și regulamentele interne semnate de clienți",
    ],
    faqs: [
      {
        question: "Dacă un mecanic lovește mașina clientului în timpul probei de drum, acoperă RCA-ul sau CASCO-ul clientului?",
        answer: "Niciuna! Clientul nu trebuie să își folosească propriul CASCO. Dauna trebuie suportată de service-ul auto prin polița sa de Răspundere a Service-urilor Auto (clauza de probe pe drumurile publice).",
      },
      {
        question: "La o grădiniță privată, este obligatorie asigurarea de accidente a copiilor?",
        answer: "Deși legea educației nu o impune strict ca obligatorie pentru funcționare, părinții o solicită frecvent. O poliță de grup de accidente este foarte accesibilă și acoperă cheltuielile medicale de urgență pentru mici accidentări.",
      },
    ],
    entrepreneurChecklist: [
      "Semnează procese-verbale clare de predare-primire cu clienții la preluarea mașinilor sau hainelor",
      "Afișează la loc vizibil regulamentul de ordine interioară și de utilizare a aparatelor în sălile de sport",
      "Verifică periodic ancorarea porților de fotbal, a coșurilor de baschet și a mobilierului la locurile de joacă",
      "Păstrează registrele de evidență a verificărilor metrologice pentru elevatoare și compresoare",
    ],
    nextStepCta: {
      title: "Asigură-ți afacerea de servicii, educație sau auto",
      description: "Descoperă pachetele specifice pentru service-uri auto, săli de sport, grădinițe private sau saloane cosmetice.",
      prefillHelpDesk: {
        category: "raspundere-civila-generala",
        industry: "alte-domenii",
        message: "Bună ziua. Conduc o afacere în domeniul serviciilor (service auto / educație / sport / frumusețe) și doresc o propunere de asigurare adaptată.",
      },
    },
  },
];
