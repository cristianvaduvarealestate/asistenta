import { ProductGuide } from "./types";

export const BUSINESS_PRODUCTS: ProductGuide[] = [
  // 1. Property All Risks
  {
    id: "property-all-risks",
    slug: "property-all-risks",
    name: "Asigurarea de Incendiu și Alte Pericole (Property All Risks)",
    acronym: "PAR / FLEXA+",
    category: "Proprietate și active fizice",
    shortDesc: "Protecția completă a patrimoniului imobil și mobil al companiei: clădiri, spații comerciale, hale, amenajări interioare, stocuri și echipamente.",
    overview: "Polița de Incendiu și Alte Pericole reprezintă piatra de temelie a oricărui program de asigurare corporativă. Poate fi structurată pe baza riscurilor numite (Named Perils — FLEXA: Fire, Lightning, Explosion, Aircraft + riscuri catastrofice și sociale) sau pe baza 'Toate Riscurile' (Property All Risks — acoperă orice eveniment accidental neprevăzut care nu este expres exclus). Asigură clădirile proprii sau spațiile închiriate (fit-out, îmbunătățiri locative), stocurile de mărfuri și materiile prime.",
    targetAudience: ["Proprietari de clădiri comerciale, industriale sau rezidențiale", "Chiriași în mall-uri, parcuri logistice sau spații stradale", "Companii de producție, retail, depozitare și servicii"],
    keyCoverages: [
      "Incendiu, trăsnet, explozie și căderea aparatelor de zbor (pachetul de bază FLEXA)",
      "Catastrofe naturale: cutremur de pământ, inundații din revărsări de râuri, alunecări și prăbușiri de teren",
      "Fenomene meteorologice violente: furtună, vijelie, grindină, greutatea stratului de zăpadă, căderi de corpuri",
      "Curgerea apei din conducte și instalații automate de stingere (sprinklere)",
      "Furt prin efracție, tâlhărie și actele de vandalism/huliganism",
      "Greve, revolte, tulburări civile (SRCC - Strike, Riot, Civil Commotion)",
      "Cheltuieli de demolare, curățare a resturilor și stingere a incendiului",
    ],
    limitsAndSublimits: [
      "Limita maximă de răspundere: Valoarea totală asigurată declarată (Sum Insured)",
      "Sublimită pentru debarasarea molozului: uzual 5% – 10% din suma asigurată",
      "Sublimită pentru autorități și onorarii arhitecți/ingineri: 5% – 10%",
      "Sublimită pentru riscul de furt prin efracție al mărfurilor sau sculelor",
    ],
    deductiblesExplanation: "Pentru incendiu și pericole standard, franșiza este de regulă fixă (de ex. 500 – 2.500 EUR per eveniment). Pentru riscurile catastrofice (cutremur, inundație, alunecare), asigurătorii români aplică de regulă o franșiză procentuală între 2% și 5% din suma asigurată a fiecărei locații afectate.",
    commonExclusions: [
      "Vicii ascunse de construcție cunoscute înainte de intrarea în vigoare a poliței",
      "Uzura fizică treptată, rugina, coroziunea, igrasia sau mucegaiul",
      "Incendii sau pagube cauzate de neglijența gravă a conducerii sau fapte intenționate",
      "Lipsa inexplicabilă la inventar și furtul fără efracție comis în timpul programului de lucru",
      "Război, terorism, confiscare de către autorități, riscuri nucleare",
    ],
    underwritingRequirements: [
      "Adresa exactă a locațiilor asigurate și dreptul juridic de folosință (proprietar vs. chiriaș)",
      "Anul construcției clădirii, tipul structurii (cadre beton, metalică, zidărie) și regimul de înălțime",
      "Autorizația de securitate la incendiu (ISU) și scenariul de securitate la incendiu la zi",
      "Sistemele de stingere: sprinklere, hidranți interiori/exteriori, bazin de apă propriu, stație de pompare",
      "Sistemul de securitate antiefracție: alarmă, contract cu firmă de intervenție rapidă, camere CCTV",
      "Valoarea contabilă de reevaluare a clădirii și valoarea maximă a stocurilor în vârf de sezon",
    ],
    claimsProcedure: [
      "1. Apelează serviciul de urgență 112 în caz de incendiu sau inundație majoră și ia măsuri de limitare a pagubei fără a-ți periclita viața.",
      "2. Păstrează starea locului neschimbată până la sosirea inspectorului de daune (nu arunca resturile arse sau bunurile deteriorate).",
      "3. Notifică asigurătorul în termenul stipulat în poliță (uzual 24 - 48 de ore).",
      "4. Obține procesul-verbal de intervenție de la ISU sau dovada reclamației de la Poliție în caz de furt.",
      "5. Pregătește documentele contabile care atestă existența și valoarea bunurilor distruse (facturi, balanță mijloace fixe, inventar).",
    ],
    questionsToAskInsurer: [
      "Polița este la 'Valoarea din Nou' (Replacement Value) sau se scade uzura contabilă/fizică a clădirii?",
      "Cum funcționează regula proporțională dacă valoarea declarată este sub valoarea reală de reconstrucție?",
      "Este inclusă clauza de renunțare la regres (Waiver of Subrogation) în favoarea proprietarului sau băncii creditoare?",
    ],
    officialLawReference: "Codul Civil Român (Art. 2199 - 2241) & Legea nr. 10/1995 privind calitatea în construcții",
    helpDeskPrefill: {
      category: "cladiri-si-spatii-comerciale",
      messageIntro: "Bună ziua. Doresc o consultanță / cotație pentru Asigurarea de Incendiu și Alte Pericole (Property All Risks) pentru activele companiei.",
    },
  },

  // 2. Business Interruption
  {
    id: "business-interruption",
    slug: "business-interruption",
    name: "Business Interruption (Întreruperea Activității / Pierderea de Profit)",
    acronym: "BI / FLOP / MLOP",
    category: "Riscuri financiare",
    shortDesc: "Asigură marja brută nerealizată și acoperă cheltuielile fixe (salarii, chirii, rate bancare) pe durata în care afacerea este oprită din cauza unei daune fizice.",
    overview: "Statisticile arată că peste 40% din companiile care suferă un incendiu major dau faliment în următorii doi ani, nu din lipsa banilor pentru cărămizi, ci din lipsa cash-flow-ului pe lunile în care fabrica sau restaurantul a fost închis. Polița de Business Interruption (BI) preia exact povara financiară a opririi activității, plătind salariile angajaților, chiriile contractuale și profitul net pe care l-ai fi realizat dacă nu se producea sinistrul.",
    targetAudience: ["Fabrici și unități de producție industrială", "Hoteluri, restaurante și lanțuri de retail", "Clinici medicale, parcuri logistice și companii cu operațiuni continue"],
    keyCoverages: [
      "Profitul net din exploatare pe care afacerea l-ar fi generat în absența incidentului",
      "Cheltuielile fixe recurente care continuă indiferent de oprirea activității: salarii, chirii, utilități de bază, rate de leasing",
      "Costurile suplimentare de operare (Increased Cost of Working - ICOW): închirierea de spații provizorii, subcontractarea temporară a producției pentru a păstra clienții",
      "Extinderea pentru dependența de furnizori sau clienți cheie (Contingent Business Interruption - CBI)",
      "Oprirea activității cauzată de blocarea accesului la locație (Prevention of Access)",
    ],
    limitsAndSublimits: [
      "Suma Asigurată: Marja brută anuală a companiei (Cifra de afaceri minus cheltuielile variabile/costul mărfurilor)",
      "Perioada Maximă de Indemnizare (Indemnity Period): de regulă 6, 12, 18 sau 24 de luni",
      "Sublimită pentru costuri de lucru accelerate (ICOW)",
    ],
    deductiblesExplanation: "Spre deosebire de daunele materiale, la Business Interruption franșiza se exprimă aproape exclusiv în zile calendaristice (Timp de așteptare / Time Excess): de regulă primele 3, 7 sau 14 zile de oprire a activității sunt suportate de companie, după care asigurătorul plătește zilnic pierderea calculată.",
    commonExclusions: [
      "Oprirea activității din motive economice generale (scăderea cererii în piață, recesiune)",
      "Oprirea dispusă de autorități din cauza nerespectării normelor legale sau a lipsei autorizațiilor",
      "Oprirea activității fără o daună materială fizică prealabilă la o proprietate asigurată",
      "Greve interne ale angajaților sau litigii de muncă",
    ],
    underwritingRequirements: [
      "Bilanțul contabil și contul de profit și pierdere (P&L) din ultimii 2 ani",
      "Bugetul de venituri și cheltuieli previzionat pentru următoarele 12 luni",
      "Calculul marjei brute (Gross Margin) conform definiției din poliță",
      "Planul de continuitate a afacerii (Business Continuity Plan - BCP) și timpul estimat de reconstrucție a clădirii/utilajelor",
    ],
    claimsProcedure: [
      "1. Demonstrează legătura de cauzalitate cu o daună fizică acoperită pe polița Property de incendiu.",
      "2. Calculează împreună cu contabilul autorizat și expertul în daune financiare cifra de afaceri pierdută comparativ cu aceeași perioadă a anului precedent.",
      "3. Furnizează dovezile plății cheltuielilor fixe (state de plată, facturi de chirie, extrase bancare).",
      "4. Justifică cheltuielile suplimentare efectuate pentru repunerea pe picioare a afacerii.",
    ],
    questionsToAskInsurer: [
      "Cât este Perioada Maximă de Indemnizare? (6 luni sunt suficiente dacă utilajele din Germania au termen de livrare de 9 luni?)",
      "Este inclusă extinderea pentru furnizori unici dacă fabrica lor arde și nu ne mai pot livra materie primă?",
    ],
    officialLawReference: "Codul Civil Român (Art. 2221 - Asigurarea de pierderi financiare)",
    helpDeskPrefill: {
      category: "business-interruption",
      messageIntro: "Bună ziua. Doresc o simulare pentru o poliță de Business Interruption (pierdere de profit din exploatare) pentru compania mea.",
    },
  },

  // 3. Machinery Breakdown
  {
    id: "machinery-breakdown",
    slug: "machinery-breakdown",
    name: "Avarii Accidentale ale Mașinilor și Utilajelor (Machinery Breakdown)",
    acronym: "MB / MBD",
    category: "Echipamente și utilaje",
    shortDesc: "Protejează motoarele electrice, compresoarele, presele industriale și liniile tehnologice la defecțiuni mecanice interne, explozii fizice și erori de manevrare.",
    overview: "Polița de Incendiu acoperă utilajele doar dacă sunt distruse de o flacără externă. Dacă o presă industrială se gripează, un rotor se rupe din cauza forței centrifuge sau un motor de 100 kW se arde din cauza unei suprasarcini electrice, dauna este acoperită EXCLUSIV de polița de Avarii Accidentale ale Mașinilor (Machinery Breakdown). Este polița vitală a oricărei companii de producție.",
    targetAudience: ["Fabrici de producție industrială, chimică, alimentară și prelucrare metale", "Companii de utilități, stații de pompare și epurare", "Imprimerii industriale, tipografii și ateliere mari"],
    keyCoverages: [
      "Defecțiuni mecanice interne: rupere de piese, forfecare arbori, dezechilibrare dinamică",
      "Avarii electrice: scurtcircuit, supratensiune, formare de arcuri electrice, defect de izolație",
      "Erori umane de manevrare, neîndemânare sau neglijență a operatorilor utilajelor",
      "Pătrunderea accidentală a corpurilor străine în mecanismele utilajului",
      "Explozie fizică (ruperea recipientelor sub presiune, cazane de abur) sau implozie",
      "Defecte de material sau erori de montaj nedetectate la recepție (după expirarea garanției fabricantului)",
    ],
    limitsAndSublimits: [
      "Suma asigurată per utilaj: Valoarea de înlocuire de nou a utilajului (New Replacement Value)",
      "Costuri de transport rapid (aerian) pentru piese de schimb din străinătate: uzual 10% – 20%",
      "Manoperă pentru lucrul în schimburi de noapte și sărbători legale",
    ],
    deductiblesExplanation: "Franșizele se stabilesc fix sau procentual din dauna aprobată (ex: 5% - 10% din daună, minim 1.000 – 5.000 EUR per incident).",
    commonExclusions: [
      "Piese supuse uzurii rapide naturale și consumabile (curele de transmisie, lanțuri, filtre, garnituri, cuțite amovibile)",
      "Avarii apărute în perioada de garanție legală a producătorului echipamentului",
      "Defecțiuni cauzate de nerespectarea conștientă a instrucțiunilor de exploatare sau a reviziilor tehnice",
      "Uzura treptată, cavitația, coroziunea și depunerile de calcar",
    ],
    underwritingRequirements: [
      "Lista completă a mașinilor și utilajelor: descriere, producător, model, an punere în funcțiune, serie",
      "Valoarea de nou a fiecărui utilaj (preț de catalog actual)",
      "Registrul de revizii periodice și contractele de mentenanță preventivă autorizată",
      "Pregătirea și calificarea personalului de deservire a echipamentelor",
    ],
    claimsProcedure: [
      "1. Oprește imediat utilajul pentru a preveni extinderea defecțiunii.",
      "2. Solicită prezența tehnicianului de service autorizat pentru desfacere și constatare a cauzei defectului.",
      "3. Notifică asigurătorul înainte de începerea reparațiilor definitive.",
      "4. Întocmește raportul tehnic de cauză (defect mecanic vs. eroare de operare).",
      "5. Pune la dispoziție piesele rupte/avariate pentru expertiza inspectorului de daune.",
    ],
    questionsToAskInsurer: [
      "Sunt asigurate utilajele la valoarea din nou sau la valoarea rămasă amortizată?",
      "Este inclus riscul de scurtcircuit sau supratensiune tranzitorie din rețeaua publică?",
    ],
    officialLawReference: "Codul Civil Român & Condițiile internaționale de inginerie Munich Re (Machinery Breakdown)",
    helpDeskPrefill: {
      category: "echipamente-utilaje-instalatii",
      messageIntro: "Bună ziua. Doresc o ofertă pentru Asigurarea de Avarii Accidentale ale Mașinilor și Utilajelor (Machinery Breakdown) pentru parcul de utilaje industriale.",
    },
  },

  // 4. Electronic Equipment Insurance
  {
    id: "eei",
    slug: "eei-echipamente-electronice",
    name: "Asigurarea Echipamentelor Electronice (EEI)",
    acronym: "EEI",
    category: "Echipamente și utilaje",
    shortDesc: "Protecție specializată pentru servere, calculatoare, echipamente medicale, echipamente broadcast și sisteme de telecomunicații.",
    overview: "Echipamentele electronice sunt extrem de sensibile la fluctuații de tensiune, praf, căldură excesivă și erori umane. Spre deosebire de asigurarea clasică de bunuri, polița EEI este o asigurare de tip 'Toate Riscurile' care include nu doar riscurile fizice exterioare (foc, apă), ci și supratensiunea, erorile de operare și căderea accidentală a aparatelor.",
    targetAudience: ["Centre medicale, clinici și laboratoare de analize (RMN, ecografe, lasere)", "Data centere, companii IT și server rooms", "Studiouri TV, case de producție video, agenții media"],
    keyCoverages: [
      "Supratensiuni electrice, căderi de tensiune, curenți de inducție generați de trăsnet",
      "Erori de manevrare și neîndemânare a personalului operator",
      "Scăparea din mână, căderea accidentală a echipamentelor portabile sau fixe",
      "Curgerea apei din instalații de climatizare sau conducte sanitare",
      "Furt prin efracție sau tâlhărie",
      "Cheltuieli suplimentare pentru refacerea suporturilor externe de date (Data Media Coverage)",
    ],
    limitsAndSublimits: [
      "Suma asigurată: Valoarea de nou a echipamentelor electronice",
      "Sublimită pentru refacerea bazelor de date și a software-ului de operare: 10.000 – 100.000 EUR",
      "Costuri de închiriere a echipamentelor electronice de substituție",
    ],
    deductiblesExplanation: "Franșize fixe accesibile (ex: 250 – 1.000 EUR per eveniment, în funcție de valoarea echipamentului).",
    commonExclusions: [
      "Defecte estetice, zgârieturi care nu împiedică funcționarea normală a aparatului",
      "Costul remedierii virușilor informatici (necesită poliță Cyber separată)",
      "Piese consumabile cu durată scurtă de viață (lămpi, becuri, acumulatori, siguranțe)",
      "Pierzania datelor dacă nu existau copii de siguranță periodice (backup) conform cerințelor",
    ],
    underwritingRequirements: [
      "Inventarul detaliat al echipamentelor electronice: marcă, model, serie, an achiziție, preț factură",
      "Amplasamentul echipamentelor și condițiile de climatizare/alimentare electrică (UPS, generator)",
      "Procedurile de backup ale bazelor de date (frecvență, stocare cloud sau offsite)",
    ],
    claimsProcedure: [
      "1. Decuplează aparatul de la rețea în cazul unui scurtcircuit sau contact cu apă.",
      "2. Solicită un raport tehnic de la service-ul autorizat al mărcii care să ateste cauza arderii plăcilor.",
      "3. Păstrează componentele arse pentru inspecție.",
      "4. Transmite factura de reparație sau oferta de înlocuire asigurătorului.",
    ],
    questionsToAskInsurer: [
      "Sunt acoperite echipamentele electronice portabile (laptopuri, camere video) și în afara sediului companiei?",
      "Este inclusă compensarea pentru rescrierea datelor pierdute de pe hard disk-urile avariate?",
    ],
    officialLawReference: "Condițiile standard internaționale EEI (Munich Re Standard Form)",
    helpDeskPrefill: {
      category: "echipamente-electronice",
      messageIntro: "Bună ziua. Doresc o cotație pentru Asigurarea Echipamentelor Electronice (EEI) pentru aparatura medicală / servere / calculatoare.",
    },
  },

  // 5. Public & General Liability
  {
    id: "general-liability",
    slug: "raspundere-civila-generala",
    name: "Răspundere Civilă Generală față de Terți (General Liability)",
    acronym: "RCG / CGL",
    category: "Răspunderi civile",
    shortDesc: "Protejează compania împotriva cererilor de despăgubire pentru vătămări corporale sau pagube materiale aduse vizitatorilor, clienților sau vecinilor.",
    overview: "Orice companie interacționează cu lumea exterioară: clienți care intră în magazin, vecini de clădire, curieri sau parteneri. Dacă un client alunecă pe o podea udă și își rupe piciorul, dacă o conductă spartă la etajul tău inundă magazinul de lux de dedesubt sau dacă un panou publicitar se desprinde peste o mașină, compania ta răspunde patrimonial conform Codului Civil. Polița RCG preia plata acestor daune și a cheltuielilor de judecată.",
    targetAudience: ["Toate firmele care dețin sau închiriază spații comerciale, birouri, depozite sau magazine", "Companii de evenimente, facilități sportive, restaurante și hoteluri", "Antreprenori care desfășoară activități la sediul clienților"],
    keyCoverages: [
      "Vătămări corporale suferite de terți (spitalizare, intervenții chirurgicale, compensații de deces, daune morale)",
      "Pagube materiale produse bunurilor aparținând terților",
      "Răspunderea chiriașului față de proprietarul spațiului (Tenant's Liability / Răspunderea locativă)",
      "Răspunderea față de proprietățile vecine (infiltrații, extindere incendiu)",
      "Costurile de apărare juridică, expertize tehnice și onorarii avocați în instanță",
    ],
    limitsAndSublimits: [
      "Limita de răspundere pe eveniment și în agregat anual: uzual 100.000 – 2.000.000 EUR",
      "Sublimită pentru răspunderea chiriașului (frecvent egală cu valoarea clădirii închiriate)",
      "Sublimită pentru daune morale acordate victimelor",
    ],
    deductiblesExplanation: "Pentru daune materiale se aplică franșize mici (ex: 200 – 1.000 EUR). Pentru vătămări corporale, franșiza este de regulă zero (0).",
    commonExclusions: [
      "Daune aduse propriilor angajați (acoperite pe răspunderea angajatorului, nu pe RCG)",
      "Daune provocate cu intenție sau cu știință de către reprezentanții asiguratului",
      "Daune produse de autovehicule pe drumurile publice (acoperite de RCA)",
      "Răspunderea profesională pentru consultanță greșită (necesită PI/E&O)",
      "Amenzi penale, administrative sau sancțiuni contravenționale aplicate de autorități",
    ],
    underwritingRequirements: [
      "Profilul de activitate și codurile CAEN practicate",
      "Suprafața locațiilor operate și numărul estimat de vizitatori/clienți zilnici",
      "Cifra de afaceri anuală a companiei",
      "Cerințele specifice de limită impuse de contractele de închiriere sau clienți",
    ],
    claimsProcedure: [
      "1. Acordă primul ajutor persoanei accidentate și cheamă ambulanța dacă este necesar.",
      "2. Fotografiază locul incidentului, pardoseala, panourile de avertizare existente.",
      "3. Identifică martori și notează datele lor de contact.",
      "4. Nu recunoaște vinovăția pe loc și nu semna angajamente de plată în avans.",
      "5. Deschide dosarul de daună la asigurător transmițând cererea de despăgubire primită de la terț.",
    ],
    questionsToAskInsurer: [
      "Include polița și clauza de răspundere a chiriașului față de proprietar cerută în contractul de mall?",
      "Sunt acoperite cheltuielile de judecată chiar dacă instanța ne găsește nevinovați?",
    ],
    officialLawReference: "Codul Civil Român (Art. 1357 - 1380 Răspunderea delictuală)",
    helpDeskPrefill: {
      category: "raspundere-civila-generala",
      messageIntro: "Bună ziua. Am nevoie de o poliță de Răspundere Civilă Generală (RCG) conform cerințelor din contractul de închiriere / activitate comercială.",
    },
  },

  // 6. Product Liability
  {
    id: "product-liability",
    slug: "raspunderea-producatorului",
    name: "Răspunderea Producătorului și a Produsului Finit (Product Liability)",
    acronym: "RCLP",
    category: "Răspunderi civile",
    shortDesc: "Acoperă despăgubirile financiare și costurile judiciare dacă produsele fabricate, ambalate sau importate produc vătămări corporale sau daune materiale utilizatorilor.",
    overview: "Conform Legii nr. 240/2004, producătorul răspunde obiectiv (fără a fi necesară dovedirea culpei) pentru pagubele produse de bunurile cu defecte puse în circulație. Dacă o baterie explodează, o piesă auto cedează la viteze mari provocând accident, sau o băutură îmbuteliată provoacă intoxicație, compania ta răspunde pentru toate daunele cauzate. De asemenea, firmele care importă bunuri din afara Uniunii Europene sunt asimilate legal producătorului direct.",
    targetAudience: ["Producători din industria alimentară, chimică, electrocasnice și auto", "Importatori de bunuri de larg consum din afara UE (China, Turcia)", "Fabrici de mase plastice, jucării, materiale de construcții"],
    keyCoverages: [
      "Vătămări corporale sau deces suferite de consumatori din cauza produsului defect",
      "Distrugerea bunurilor aparținând consumatorilor provocate de funcționarea defectuoasă a produsului",
      "Costurile de apărare juridică în instanțele civile din România sau la export",
      "Clauza de costuri de montare/demontare a pieselor defecte (Rip & Tear Clause)",
      "Clauza de rechemare de pe piață a produselor periculoase (Product Recall) — adesea extensie separată",
    ],
    limitsAndSublimits: [
      "Limita de răspundere anuală: 250.000 – 5.000.000 EUR",
      "Teritorialitate: România, Uniunea Europeană sau Worldwide (inclusiv/exclusiv SUA/Canada)",
    ],
    deductiblesExplanation: "Franșize per eveniment stabilite între 1.000 și 10.000 EUR în funcție de profilul de risc al produsului.",
    commonExclusions: [
      "Costul înlocuirii sau reparării produsului defect însuși (garanția comercială nu este acoperită)",
      "Defecte cunoscute înainte de livrarea mărfii sau erori cauzate de nerespectarea conștientă a standardelor tehnice",
      "Daune produse în jurisdicțiile SUA/Canada dacă nu a fost contractată extinderea teritorială specifică",
    ],
    underwritingRequirements: [
      "Gama detaliată de produse fabricate/distribuite și manualele de utilizare/avertismentele",
      "Cifra de afaceri pe categorii de produse și defalcare pe piețe de destinație (România, UE, non-UE)",
      "Certificatele de conformitate (marcaj CE, ISO 9001, standarde alimentare IFS/BRC)",
      "Procedura internă de trasabilitate pe loturi și planul de retragere de pe piață",
    ],
    claimsProcedure: [
      "1. Izolează imediat lotul de producție reclamat.",
      "2. Solicită produsul defect de la reclamant pentru expertiză tehnică neutră de laborator.",
      "3. Notifică asigurătorul înainte de a formula orice răspuns scris clientului.",
      "4. Furnizează documentele de trasabilitate și certificatele de calitate ale materiei prime folosite.",
    ],
    questionsToAskInsurer: [
      "Acoperă polița și costurile de retragere a produselor din magazine dacă ANPC sau ANSVSA dispune un recall?",
      "Suntem acoperiți pentru exporturile către lanțurile de hipermarketuri din Germania sau Franța?",
    ],
    officialLawReference: "Legea nr. 240/2004 privind răspunderea producătorilor pentru pagubele generate de produsele cu defecte",
    helpDeskPrefill: {
      category: "raspunderea-producatorului",
      messageIntro: "Bună ziua. Doresc o cotație pentru Asigurarea de Răspundere a Producătorului (Product Liability) pentru produsele fabricate / importate de compania noastră.",
    },
  },

  // 7. Professional Indemnity
  {
    id: "professional-indemnity",
    slug: "raspundere-civila-profesionala",
    name: "Răspundere Civilă Profesională (Professional Indemnity / E&O)",
    acronym: "PI / E&O",
    category: "Răspunderi civile",
    shortDesc: "Protejează prestatorii de servicii intelectuale, IT, contabili, arhitecți, medici și consultanți împotriva daunelor financiare cauzate clienților prin erori sau omisiuni.",
    overview: "Spre deosebire de răspunderea generală (care acoperă daune fizice), Răspunderea Profesională (Professional Indemnity sau Errors & Omissions) acoperă 'Prejudiciile financiare pure' (Pure Financial Loss): situația în care clientul nu a fost rănit fizic, dar a pierdut o sumă masivă de bani din cauza sfatului tău eronat, a unui calcul greșit, a unui bug de programare sau a unui proiect tehnic defectuos.",
    targetAudience: ["Companii de software și IT (Tech E&O)", "Birouri de contabilitate, consultanță fiscală și audit", "Birouri de arhitectură, proiectare și inginerie structurală", "Clinici medicale și medici (Malpraxis medical)", "Avocați, notari, executori judecătorești și evaluatori"],
    keyCoverages: [
      "Prejudicii financiare pure cauzate clienților ca urmare a erorilor, neglijențelor sau omisiunilor profesionale",
      "Cheltuieli de judecată și onorarii ale avocaților specializați pentru apărarea reputației asiguratului",
      "Pierderea sau distrugerea accidentală a documentelor clienților",
      "Clauza de acoperire retroactivă (Retroactive Date) pentru fapte comise în anii anteriori și descoperite azi",
    ],
    limitsAndSublimits: [
      "Limita anuală: de la 50.000 EUR pentru mici birouri până la 5.000.000+ EUR pentru corporații IT",
      "Costurile de apărare sunt de regulă incluse în limita agregată sau oferite suplimentar",
    ],
    deductiblesExplanation: "Franșize fixe negociate între 1.000 EUR și 25.000 EUR în funcție de mărimea firmei.",
    commonExclusions: [
      "Fapte săvârșite cu intenție dovedită, fraudă sau înșelăciune",
      "Obligații comerciale de rezultat garantat expres peste nivelul uzual al diligenței profesionale",
      "Falimentul sau insolvența prestatorului de servicii",
    ],
    underwritingRequirements: [
      "Domeniul specific de activitate și structura serviciilor prestate",
      "Cifra de afaceri anuală și valoarea celor mai mari 3 contracte active",
      "Template-ul standard de contract cu clienții (clauzele de limitare a răspunderii)",
      "Calificarea echipei cheie și istoricul litigiilor",
    ],
    claimsProcedure: [
      "1. Anunță asigurătorul imediat ce primești o notificare de pretinsă culpă de la un client (chiar înainte de intentarea procesului).",
      "2. Nu recunoaște răspunderea și nu propune reduceri comerciale fără consultarea asigurătorului.",
      "3. Furnizează contractul de prestări servicii, corespondența pe email și livrabilele efectuate.",
    ],
    questionsToAskInsurer: [
      "Care este data retroactivă aplicabilă poliței?",
      "Acoperă polița contracte guvernate de lege străină (ex: lege engleză sau legislație americană)?",
    ],
    officialLawReference: "Legea nr. 236/2018 privind distribuția de asigurări & legile speciale de organizare a fiecărei profesii reglementate",
    helpDeskPrefill: {
      category: "raspundere-civila-profesionala",
      messageIntro: "Bună ziua. Doresc o consultanță / ofertă pentru o poliță de Răspundere Profesională (PI / Tech E&O) pentru domeniul nostru de activitate.",
    },
  },

  // 8. D&O Liability
  {
    id: "do-liability",
    slug: "do-raspunderea-administratorilor",
    name: "D&O — Răspunderea Administratorilor și Directorilor (Directors & Officers)",
    acronym: "D&O",
    category: "Răspunderi civile",
    shortDesc: "Protejează patrimoniul personal (case, conturi bancare) al administratorilor și managerilor împotriva acțiunilor în răspundere deschise de asociați, lichidatori sau autorități.",
    overview: "Conform Legii societăților nr. 31/1990, administratorii răspund cu întregul lor patrimoniu personal pentru daunele cauzate societății prin decizii greșite de management, nerespectarea legii sau a actului constitutiv. În caz de insolvență, lichidatorul sau creditorii pot cere atragerea răspunderii patrimoniale personale a administratorului. O poliță D&O protejează exact casa, mașina și economiile personale ale directorului.",
    targetAudience: ["Administratori de SRL și membri în Consiliul de Administrație la SA", "Directori generali, CFO, directori executivi (C-Level)", "Fondatori de startup-uri care primesc runde de finanțare de la fonduri de investiții"],
    keyCoverages: [
      "Costurile de apărare juridică penală și civilă pentru investigații ale autorităților (ANAF, DIICOT, Consiliul Concurenței)",
      "Despăgubiri civile imputate administratorilor pentru decizii manageriale pretins greșite",
      "Costurile de reprezentare în acțiunile de atragere a răspunderii conform Legii insolvenței nr. 85/2014",
      "Costuri de PR și reabilitare a reputației personale a managerilor",
      "Protecție pentru foștii administratori (Run-off Cover / Extended Reporting Period)",
    ],
    limitsAndSublimits: [
      "Limita de răspundere: 250.000 – 10.000.000 EUR",
      "Franșiză 0 pentru administratorii persoane fizice (Side A Coverage)",
    ],
    deductiblesExplanation: "Pentru protecția directă a patrimoniului personal al directorilor (Side A), franșiza este de regulă 0 EUR. Pentru despăgubirea societății care a avansat cheltuielile managerilor (Side B), poate exista o franșiză corporativă.",
    commonExclusions: [
      "Fapte de corupție, luare/dare de mită sau fraudă penală deliberată consfințită printr-o hotărâre judecătorească definitivă",
      "Obținerea deliberată a unor beneficii financiare personale necuvenite",
      "Litigii între asociați deja existente sau cunoscute înainte de emiterea poliței",
    ],
    underwritingRequirements: [
      "Ultimele situații financiare anuale auditate ale societății",
      "Chestionar D&O completat cu indicarea structurii acționariatului și a consiliului de administrație",
      "Declarație privind lipsa litigiilor sau a investigațiilor fiscale/penale în curs împotriva conducerii",
    ],
    claimsProcedure: [
      "1. Transmite imediat asigurătorului orice somație, citație sau cerere de chemare în judecată adresată nominal unui director.",
      "2. Asigurătorul aprobă alegerea avocaților specializați pentru apărare.",
      "3. Facturile de onorarii avocațiale sunt decontate direct sau rambursate periodic pe durata procesului.",
    ],
    questionsToAskInsurer: [
      "Polița plătește avocații pe parcursul procesului sau doar la final dacă suntem găsiți nevinovați?",
      "Sunt acoperiți și directorii care au părăsit compania după luarea deciziilor contestate?",
    ],
    officialLawReference: "Legea nr. 31/1990 privind societățile comerciale & Legea nr. 85/2014 privind procedurile de prevenire a insolvenței și de insolvență",
    helpDeskPrefill: {
      category: "do-raspunderea-administratorilor",
      messageIntro: "Bună ziua. Doresc o discuție confidențială despre o poliță D&O pentru protecția administratorilor și a consiliului de administrație.",
    },
  },

  // 9. Cyber Risk
  {
    id: "cyber-risk",
    slug: "cyber-risk",
    name: "Cyber Risk & Data Breach (Asigurarea împotriva atacurilor cibernetice)",
    acronym: "CYBER",
    category: "Riscuri digitale",
    shortDesc: "Protecție completă împotriva atacurilor ransomware, breșelor de securitate, exfiltrării datelor GDPR și întreruperii activității cauzate de hackeri.",
    overview: "Amenințările cibernetice nu mai vizează doar băncile mari; IMM-urile românești sunt ținte preferate datorită măsurilor defensive mai vulnerabile. Un singur atac ransomware poate bloca întreaga bază de date a companiei și poate atrage investigații severe de la ANSPDCP, procese civile colective de la clienți și costuri masive de remediere IT. Polița de Cyber Risk oferă o echipă de intervenție de urgență (forensics IT, avocați, negociatori) disponibilă 24/7 și plătește pierderile financiare cauzate. Notă legală: în România, amenzile administrative aplicate direct de autorități (ANSPDCP) sunt ne-asigurabile conform legii; polița acoperă apărarea juridică, remedierea tehnică și daunele civile cerute de terți.",
    targetAudience: ["Magazine online (e-commerce) și retaileri", "Companii IT, furnizori cloud și SaaS", "Clinici medicale și laboratoare (date sensibile)", "Firme de contabilitate, avocatură și logistică"],
    keyCoverages: [
      "Echipă de intervenție de urgență la incident (Incident Response) 24/7 plătită de asigurător",
      "Investigații criminalistice IT (Digital Forensics) pentru identificarea breșei",
      "Costurile de restaurare și decriptare a sistemelor și a bazelor de date",
      "Pierderea de profit a companiei din cauza întreruperii sistemelor (Cyber Business Interruption)",
      "Costurile de notificare a clienților și a Autorității ANSPDCP conform cerințelor GDPR",
      "Apărare juridică, asistență de criză și despăgubiri civile cerute de terți conform Art. 82 GDPR (amenzile ANSPDCP sunt ne-asigurabile conform legii române)",
      "Frauda prin transfer de fonduri (Phishing / Social Engineering) — opțional",
    ],
    limitsAndSublimits: [
      "Limita de răspundere: 100.000 – 5.000.000 EUR",
      "Timp de așteptare pentru Cyber Business Interruption: uzual primele 8 – 12 ore de indisponibilitate a sistemelor",
    ],
    deductiblesExplanation: "Franșize per incident stabilite între 1.000 și 10.000 EUR.",
    commonExclusions: [
      "Atacuri cibernetice cauzate de sisteme de operare depășite (End of Life) fără suport de la producător",
      "Război cibernetic statal (Nation-state Cyber Warfare) definit conform clauzelor standard Lloyd's",
      "Sisteme fără autentificare multifactor (MFA) pe accesul de la distanță (cerință eliminatorie la subscriere)",
    ],
    underwritingRequirements: [
      "Autentificare cu doi factori (MFA) obligatorie pentru email, VPN și acces administrativ",
      "Backup-uri regulate stocate offline, izolate logic (air-gapped) sau imutabile",
      "Soluție de securitate Endpoint Detection and Response (EDR) instalată pe stații și servere",
      "Politici de instruire periodică a angajaților împotriva tentativelor de phishing",
    ],
    claimsProcedure: [
      "1. Apelează numărul verde de urgență Cyber Hotline comunicat în poliță (disponibil 24/7).",
      "2. Nu opri serverele din priză (pentru a păstra memoria RAM utilă investigatorilor forensics), ci izolează rețeaua fizic (deconectează cablul de net/Wi-Fi).",
      "3. Experții desemnați de asigurător preiau coordonarea răspunsului tehnic și legal.",
    ],
    questionsToAskInsurer: [
      "Include polița asistență de răspuns la atacuri în limba română sau este asigurată de o echipă internațională?",
      "Este acoperită plata răscumpărării (Ransomware Extortion) dacă este permisă de cadrul legal aplicabil?",
    ],
    officialLawReference: "Regulamentul (UE) 2016/679 (GDPR) & Directiva (UE) 2022/2555 (NIS 2)",
    helpDeskPrefill: {
      category: "cyber-risk",
      messageIntro: "Bună ziua. Doresc o evaluare pentru o poliță de Cyber Risk & Data Protection pentru compania noastră.",
    },
  },

  // 10. Employers' Liability
  {
    id: "employers-liability",
    slug: "raspunderea-angajatorului",
    name: "Răspunderea Civilă a Angajatorului (Employers' Liability)",
    acronym: "EL / RCAng",
    category: "Răspunderi civile",
    shortDesc: "Protejează compania împotriva acțiunilor în regres ale Casei de Sănătate sau proceselor intentate de angajați în urma unor accidente grave de muncă.",
    overview: "Deși angajații beneficiază de asigurarea de stat pentru accidente de muncă și boli profesionale, dacă accidentul a survenit din nerespectarea normelor de Securitate și Sănătate în Muncă (SSM), Casa de Asigurări de Sănătate și Casa de Pensii se vor îndrepta în regres împotriva angajatorului pentru recuperarea cheltuielilor de spitalizare. În plus, angajatul vătămat sau familia acestuia poate solicita despăgubiri și daune morale de sute de mii de lei. Polița Employers' Liability acoperă exact această expunere.",
    targetAudience: ["Companii din construcții, producție, depozitare și logistică", "Firme de curățenie industrială și lucru la înălțime", "Restaurante, agricultură și orice domeniu cu munci fizice"],
    keyCoverages: [
      "Acțiuni în regres ale Caselor de Asigurări de Sănătate pentru spitalizare și tratamente medicale",
      "Despăgubiri acordate de instanțe angajaților pentru vătămare corporală, invaliditate sau deces",
      "Daune morale cerute de angajați sau de familiile acestora",
      "Costurile de apărare juridică penală și civilă a directorilor de producție / responsabili SSM",
    ],
    limitsAndSublimits: [
      "Limita per angajat și per eveniment: 50.000 – 500.000 EUR",
      "Sublimită pentru acțiuni în regres ale instituțiilor publice de asigurări sociale",
    ],
    deductiblesExplanation: "Franșize reduse per angajat vătămat.",
    commonExclusions: [
      "Accidente produse din cauza consumului dovedit de alcool sau substanțe interzise al angajatului",
      "Muncă nedeclarată (lucrători la negru fără contract individual de muncă înregistrat în REVISAL)",
      "Încălcarea grosolană și deliberată a legislației SSM prin nepunerea la dispoziție a echipamentului de protecție de bază",
    ],
    underwritingRequirements: [
      "Numărul total de salariați defalcat pe categorii (personal TESA/birou vs. muncitori producție/șantier)",
      "Existența serviciului intern sau extern autorizat de SSM și medicina muncii",
      "Istoricul accidentelor de muncă raportate la ITM în ultimii 3 ani",
    ],
    claimsProcedure: [
      "1. Asigură transportul de urgență al salariatului la spital și anunță ITM-ul și Poliția conform Legii 319/2006.",
      "2. Convoacă comisia de cercetare a accidentului de muncă.",
      "3. Notifică asigurătorul în termen util și pune la dispoziție dosarul de cercetare aprobat de ITM.",
    ],
    questionsToAskInsurer: [
      "Acoperă polița și personalul angajat temporar prin agenții de muncă temporară sau doar salariații proprii?",
    ],
    officialLawReference: "Legea securității și sănătății în muncă nr. 319/2006 & Legea nr. 346/2002",
    helpDeskPrefill: {
      category: "asigurari-angajati",
      messageIntro: "Bună ziua. Doresc o cotație pentru Asigurarea de Răspundere Civilă a Angajatorului pentru personalul din companie.",
    },
  },

  // 11. Group Health Insurance
  {
    id: "group-health",
    slug: "asigurari-sanatate-grup",
    name: "Asigurări de Sănătate de Grup pentru Angajați (Group Health Insurance)",
    acronym: "GHI",
    category: "Beneficii angajați",
    shortDesc: "Beneficiu extrasalarial preferat de angajați: acces la rețele vaste de clinici private, spitalizare, intervenții chirurgicale și investigații avansate.",
    overview: "Asigurarea privată de sănătate de grup diferă fundamental de un simplu abonament la o clinică: o poliță de asigurare oferă acces la spitale private mari, acoperă intervenții chirurgicale costisitoare, tratamente oncologice și permite decontarea serviciilor la orice furnizor medical autorizat, în limita sumei asigurate. Conform Codului Fiscal, primele sunt deductibile fiscal până la 400 EUR/an per angajat.",
    targetAudience: ["Companii IT și servicii financiare", "Companii multinaționale și IMM-uri dinamice", "Orice angajator care dorește retenția specialiștilor și reducerea concediilor medicale"],
    keyCoverages: [
      "Spitalizare și intervenții chirurgicale în spitale private din România și Uniunea Europeană",
      "Consultații medicale de specialitate și investigații imagistice avansate (RMN, CT)",
      "Analize de laborator complexe și servicii de diagnosticare preventivă",
      "Medicamente prescrise asociate tratamentelor ambulatorii",
      "Tratamente pentru afecțiuni grave (cancer, boli cardiovasculare) și a doua opinie medicală internațională",
    ],
    limitsAndSublimits: [
      "Suma asigurată anuală per angajat: de la 10.000 lei până la 500.000 lei (sau pachete internaționale nelimitate)",
      "Sublimite anuale pentru medicamente sau servicii stomatologice",
    ],
    deductiblesExplanation: "Pentru pachetele de bază nu există franșiză; pentru intervenții complexe poate exista o coplată de 10-20% la spitale din afara rețelei agreate.",
    commonExclusions: [
      "Boli preexistente nedeclarate (în funcție de mărimea grupului; la grupuri peste 50 de persoane se pot elimina excluderile preexistente)",
      "Chirurgie pur estetică sau proceduri de fertilitate (dacă nu sunt contractate expres)",
    ],
    underwritingRequirements: [
      "Numărul total de angajați ce urmează a fi asigurați și distribuția pe grupe de vârstă",
      "Pachetul de acoperiri dorit (doar spitalizare vs. ambulatoriu complet)",
      "Opțiunea de extindere a beneficiilor pentru membrii de familie (copii, soț/soție)",
    ],
    claimsProcedure: [
      "1. Prin rețea agreată: angajatul sună la call-center-ul dedicat și beneficiază de decontare directă fără să scoată bani din buzunar.",
      "2. Prin rambursare: dacă merge la un medic din afara rețelei, achită factura și trimite cererea de rambursare online (plată în 5-7 zile).",
    ],
    questionsToAskInsurer: [
      "Care sunt facilitățile fiscale pentru companie și angajați? (Plafonul de 400 EUR/an conform art. 76 alin. 4 lit. t Cod Fiscal)",
    ],
    officialLawReference: "Codul Fiscal Român (Legea nr. 227/2015 cu modificările ulterioare)",
    helpDeskPrefill: {
      category: "asigurari-angajati",
      messageIntro: "Bună ziua. Doresc o ofertă comparativă pentru o Asigurare de Sănătate de Grup pentru angajații companiei mele.",
    },
  },

  // 12. Group Life & Personal Accident
  {
    id: "group-life-accident",
    slug: "asigurari-viata-accidente-grup",
    name: "Asigurări de Viață și Accidente de Grup (Group Life & Personal Accident)",
    acronym: "GL / GPA",
    category: "Beneficii angajați",
    shortDesc: "Protecție financiară pentru familiile angajaților în caz de deces sau invaliditate permanentă din accident sau boală.",
    overview: "Polița de grup de viață și accidente oferă un suport financiar esențial angajatului sau familiei acestuia dacă se produce o tragedie. Oferă indemnizații clare pentru deces, invaliditate permanentă, arsuri, fracturi sau incapacitate temporară de muncă, funcționând 24 de ore din 24, atât la serviciu, cât și în viața privată.",
    targetAudience: ["Companii din industrie, construcții, logistică, transporturi", "Corporative offices ca pachet standard de securitate socială", "Echipe de teren expuse riscurilor de deplasare"],
    keyCoverages: [
      "Deces din orice cauză (boală sau accident) sau deces din accident de muncă / rutier",
      "Invaliditate permanentă totală sau parțială (calculată pe baza baremului medical)",
      "Indemnizație pentru fracturi, arsuri și spitalizare ca urmare a unui accident",
      "Rambursarea cheltuielilor medicale post-accident",
    ],
    limitsAndSublimits: [
      "Suma asigurată per persoană: multiplu de salariu brut (ex: 2x – 3x salariul anual) sau sumă fixă (ex: 50.000 – 200.000 lei)",
    ],
    deductiblesExplanation: "Fără franșiză. Plata este forfetară, stabilită direct conform grilei medicale din contract.",
    commonExclusions: [
      "Accidente survenite în practicarea sporturilor extreme periculoase fără acoperire specială",
      "Suicidul în primul an de asigurare",
    ],
    underwritingRequirements: [
      "Lista de angajați cu data nașterii și ocupația",
      "Sumele asigurate propuse (fixe sau legate de grila salarială)",
    ],
    claimsProcedure: [
      "1. Se transmite certificatul medical constatator sau certificatul de deces către asigurător.",
      "2. Plata indemnizației se face către beneficiarii desemnați în termen de 14-30 de zile.",
    ],
    questionsToAskInsurer: [
      "Este valabilă acoperirea și în timpul concediului angajatului sau doar în timpul programului de lucru?",
    ],
    officialLawReference: "Codul Fiscal Român & Codul Civil Român (Art. 2227 - Asigurarea de persoane)",
    helpDeskPrefill: {
      category: "asigurari-angajati",
      messageIntro: "Bună ziua. Doresc o cotație pentru Asigurare de Viață și Accidente de Grup pentru personalul companiei.",
    },
  },

  // 13. Fleet RCA
  {
    id: "fleet-rca",
    slug: "rca-flote-auto",
    name: "Asigurarea Flotelor Auto — RCA (Motor Third Party Liability)",
    acronym: "RCA Flotă",
    category: "Flote și transport",
    shortDesc: "Asigurarea obligatorie de răspundere civilă auto structurată la nivel de flotă, cu management unificat al scadențelor și reduceri specifice parcurilor auto.",
    overview: "Polița RCA este obligatorie prin Legea 132/2017 pentru orice vehicul înmatriculat sau înregistrat în România. Pentru companiile care operează zeci sau sute de autoturisme, autoutilitare sau camioane, gestionarea individuală a polițelor este o povară operațională imensă. O poliță de flotă unificată permite alinierea scadențelor, decontare lunară sau trimestrială și negocierea unor tarife personalizate pe baza daunalității istorice a parcului.",
    targetAudience: ["Companii de curierat și distribuție", "Flote de mașini de vânzări și servicii corporate", "Companii de transport rutier de marfă și persoane"],
    keyCoverages: [
      "Pagube materiale produse terților în accidente rutiere pe teritoriul României și în spațiul Carte Verde",
      "Vătămări corporale și deces produse terților (inclusiv pasagerilor din mașina asiguratului)",
      "Cheltuieli de judecată suportate de persoana păgubită",
      "Decontare Directă (opțional, pentru decontarea daunelor de către propriul asigurător)",
    ],
    limitsAndSublimits: [
      "Limitele minime legale prevăzute de Legea 132/2017: 1.220.000 EUR pentru daune materiale per eveniment și 6.070.000 EUR pentru vătămări corporale per eveniment",
    ],
    deductiblesExplanation: "Polița RCA nu are franșiză legală pentru terții păgubiți.",
    commonExclusions: [
      "Avariile produse propriului vehicul asigurat (acestea se acoperă pe CASCO)",
      "Pagube produse când conducătorul a sustras vehiculul prin efracție",
    ],
    underwritingRequirements: [
      "Tabelul flotei: numere de înmatriculare, serii șasiu (VIN), mărci, modele, ani fabricație, putere/cilindree/masă",
      "Certificatele de înmatriculare (talon) și cărțile de identitate (CIV)",
      "Istoricul de daunalitate al flotei din baza de date AIDA (raport bonus-malus flotă)",
    ],
    claimsProcedure: [
      "1. Se completează formularul de Constatare Amiabilă de Accident sau se obține procesul-verbal de la Poliție.",
      "2. Se înmânează o copie a poliței RCA părții păgubite.",
      "3. Păgubitul deschide dosarul la asigurătorul RCA al vinovatului sau prin Decontare Directă.",
    ],
    questionsToAskInsurer: [
      "Putem unifica toate scadențele vehiculelor la o singură dată anuală cu regularizare?",
    ],
    officialLawReference: "Legea nr. 132/2017 privind asigurarea obligatorie de răspundere civilă auto (RCA)",
    helpDeskPrefill: {
      category: "rca-casco-flote",
      messageIntro: "Bună ziua. Solicit o ofertă de RCA Flotă pentru parcul de autovehicule al societății noastre.",
    },
  },

  // 14. Fleet CASCO
  {
    id: "fleet-casco",
    slug: "casco-flote-auto",
    name: "Asigurarea Flotelor Auto — CASCO (Motor Hull & Fleet)",
    acronym: "CASCO Flotă",
    category: "Flote și transport",
    shortDesc: "Protecție completă pentru parcul auto împotriva accidentelor din vina proprie, coliziunilor cu animale, vandalismului, fenomenelor meteo și furtului.",
    overview: "Flota auto reprezintă un activ mobil de mare valoare expus zilnic la pericole rutiere. O avarie gravă sau o daună totală a unui autotren sau a unei mașini premium poate dezechilibra bugetul firmei. O poliță CASCO Flotă oferă reparații rapide în rețele de service-uri partenere, tractare de urgență și mașină la schimb (Replacement Car) pentru a nu opri munca agenților de vânzări.",
    targetAudience: ["Proprietari și utilizatori în leasing de parcuri auto comerciale", "Companii de transport internațional (cap-tractor + semiremorci)", "Firme de închirieri auto (Rent-a-car) și ride-sharing"],
    keyCoverages: [
      "Coliziuni, răsturnări, căderi în prăpastie, ciocniri cu obstacole fixe sau alte vehicule",
      "Fenomene meteo: grindină, vijelie, inundații, căderi de zăpadă sau copaci peste mașină",
      "Furt total sau parțial al autovehiculului sau al pieselor componente (oglinzi, roți)",
      "Vandalism și zgârieturi comise de persoane necunoscute",
      "Tractare și asistență rutieră extinsă în România și pe teritoriul întregii Europe",
      "Vehicul de înlocuire (mașină la schimb pe durata reparațiilor)",
    ],
    limitsAndSublimits: [
      "Suma asigurată per vehicul: Valoarea de piață actualizată conform ghidurilor recunoscute (Schwacke / Eurotax) sau valoarea de factură de nou (clauză GAP)",
    ],
    deductiblesExplanation: "Franșize fixe per eveniment (ex: 100 – 500 EUR pentru autoturisme, 500 – 1.500 EUR pentru camioane) sau franșiză procentuală la daune totale (uzual 10%).",
    commonExclusions: [
      "Conducerea autovehiculului fără permis valabil sau sub influența alcoolului / substanțelor interzise",
      "Participarea la curse, raliuri sau competiții auto neautorizate",
      "Uzura normală a componentelor mecanice sau defecte tehnice pure fără coliziune externă",
    ],
    underwritingRequirements: [
      "Tabelul complet al flotei cu valori de piață propuse",
      "Rapoarte de daunalitate (Loss Runs) pe ultimii 3 ani de la asigurătorii anteriori",
      "Procedurile interne de selecție și monitorizare a șoferilor (sisteme telematice/GPS)",
    ],
    claimsProcedure: [
      "1. Fă fotografii la fața locului și completează amiabila sau mergi la secția de poliție în termen de 24h.",
      "2. Notifică asigurătorul CASCO online sau telefonic.",
      "3. Programează constatarea la service-ul agreat și obține comanda de reparație fără avans financiar.",
    ],
    questionsToAskInsurer: [
      "Avem decontare directă cu reprezentanțele oficiale ale mărcii?",
      "Este inclusă asistența rutieră și tractarea internațională pentru tiruri în caz de accident în Franța sau Germania?",
    ],
    officialLawReference: "Codul Civil Român & Condițiile generale CASCO de piață",
    helpDeskPrefill: {
      category: "rca-casco-flote",
      messageIntro: "Bună ziua. Doresc o cotație pentru CASCO Flotă pentru vehiculele companiei noastre.",
    },
  },

  // 15. CMR Liability
  {
    id: "cmr-liability",
    slug: "cmr-raspunderea-carausului",
    name: "Asigurarea de Răspundere a Cărăușului Rutier (CMR)",
    acronym: "CMR",
    category: "Flote și transport",
    shortDesc: "Protejează transportatorii rutieri împotriva răspunderii contractuale pentru avarierea, pierderea sau furtul mărfurilor transportate conform Convenției CMR.",
    overview: "Polița CMR este documentul esențial fără de care niciun transportator serios nu poate încărca marfă pe rute europene. Conform Convenției internaționale CMR de la Geneva (1956), cărăușul răspunde pentru marfă din momentul preluării până la descărcare. Răspunderea legală standard este plafonată la 8.33 DST (Drepturi Speciale de Tragere) per kilogram brut, însă transportatorul poate fi atras la plata integrală dacă se dovedește neglijență gravă.",
    targetAudience: ["Transportatori rutieri de marfă naționali și internaționali", "Operatorii de flote de camioane de mare tonaj", "Companii de transport frigorific sau cisterne chimice"],
    keyCoverages: [
      "Pierderea totală sau parțială a mărfii transportate ca urmare a accidentelor rutiere sau răsturnării",
      "Avarierea mărfii din cauza coliziunilor, frânărilor bruște sau intemperiilor",
      "Furtul mărfii prin violență sau efracție (în funcție de clauzele de parcare)",
      "Avaria frigorifică (Thermo-King Clause) pentru transporturile de alimente/medicamente",
      "Costurile de salvare, curățare carosabil și descărcare/reîncărcare de urgență a mărfii",
    ],
    limitsAndSublimits: [
      "Limita uzuală per eveniment: 50.000 – 1.200.000 EUR",
      "Sublimită pentru avarii frigorifice sau mărfuri speciale",
    ],
    deductiblesExplanation: "Franșize între 250 și 2.500 EUR per eveniment.",
    commonExclusions: [
      "Ambalarea defectuoasă efectuată de expeditor",
      "Viciul propriu al mărfii (degradare naturală fără accident)",
      "Furtul mărfii din camioane staționate în parcări nesigure, contrare clauzei Safe Parking",
      "Nerespectarea temperaturii din vina șoferului care a oprit intenționat agregatul frigorific",
    ],
    underwritingRequirements: [
      "Numărul de camioane și semiremorci asigurate",
      "Destinațiile rutiere principale (România, Comunitatea Europeană, Marea Britanie, Turcia)",
      "Tipurile specifice de mărfuri (industriale, frigorifice, electronice, ADR)",
      "Dotările de securitate: alarme de ușă, senzori GPS, proceduri de oprire doar în parcări clasificate ESPORG",
    ],
    claimsProcedure: [
      "1. Șoferul trebuie să formuleze rezerve clare pe scrisoarea de trăsură CMR la descărcare.",
      "2. Se notifică asigurătorul în termen de maximum 7 zile.",
      "3. Se transmite raportul poliției dacă a existat un accident sau furt.",
    ],
    questionsToAskInsurer: [
      "Polița acoperă și operațiunile de cabotaj în Germania sau Franța la nivelul limitelor locale obligatorii?",
    ],
    officialLawReference: "Convenția referitoare la contractul de transport internațional de mărfuri pe șosele (Convenția CMR, Geneva 1956)",
    helpDeskPrefill: {
      category: "cmr-cargo",
      messageIntro: "Bună ziua. Doresc o ofertă pentru poliță CMR internațională pentru camioanele din flota noastră de transport.",
    },
  },

  // 16. Marine & Transit Cargo
  {
    id: "cargo-transit",
    slug: "cargo-asigurarea-marfurilor",
    name: "Asigurarea Bunurilor în Tranzit (CARGO)",
    acronym: "CARGO / ICC",
    category: "Flote și transport",
    shortDesc: "Asigurare de tip Toate Riscurile încheiată de proprietarul mărfii, care despăgubește marfa la valoarea reală de factură (inclusiv 110% CIF), indiferent de vina cărăușului.",
    overview: "Spre deosebire de polița CMR (care este o asigurare de răspundere a cărăușului și plătește doar dacă transportatorul e vinovat, în limita a ~10-12 EUR/kg), polița CARGO este o asigurare directă a bunului deținut de comerciant. Despăgubește marfa la valoarea sa comercială integrală, acoperind transportul maritim, aerian, feroviar sau rutier conform clauzelor standard internaționale Institute Cargo Clauses (A, B sau C).",
    targetAudience: ["Importatori și exportatori de mărfuri industriale și bunuri de consum", "Retaileri și distribuitori care aduc containere din Asia sau Europa", "Companii care transportă utilaje grele sau tehnologie scumpă"],
    keyCoverages: [
      "Toate riscurile de pierdere sau avariere a mărfii (Institute Cargo Clauses A)",
      "Dauna totală a mărfii prin scufundarea navei, eșuare, incendiu, prăbușirea avionului",
      "Avaria comună (General Average) și cheltuielile de salvare maritimă",
      "Furtul total sau parțial, nelivrarea coletelor pe tot traseul depozit-la-depozit (Warehouse-to-Warehouse)",
      "Umezirea mărfii din cauza apei de mare sau a apei dulci intrate în cală/container",
    ],
    limitsAndSublimits: [
      "Suma asigurată: Valoarea de factură a mărfii + cheltuieli de transport + profit sperat (uzual 110% CIF)",
    ],
    deductiblesExplanation: "Franșize reduse procentual (ex: 1% din valoarea transportului) sau franșiză zero pe ICC A.",
    commonExclusions: [
      "Ambalarea insuficientă sau neadecvată specificului mărfii",
      "Întârzieri comerciale în livrare",
      "Insolvența financiară a proprietarilor navei",
    ],
    underwritingRequirements: [
      "Valoarea transporturilor anuale estimate și valoarea maximă per transport/container",
      "Tipurile de mărfuri și rutele geografice (țara de origine, tranzit, port de descărcare)",
      "Mijloacele de transport utilizate (maritim, rutier, aerian)",
    ],
    claimsProcedure: [
      "1. Se inspectează containerul înainte de desigilare; dacă sigiliul e rupt, se convoacă agentul Lloyd's / expertul de avarii.",
      "2. Se fac fotografii și se semnează documentul de recepție cu rezerve explicite.",
      "3. Se transmite setul complet de documente de transport: Bill of Lading (B/L), factură comercială, packing list.",
    ],
    questionsToAskInsurer: [
      "Este polița pe baza 'Open Cover' (abonament anual automat pentru toate importurile firmei)?",
    ],
    officialLawReference: "Institute Cargo Clauses (LMA / IUA) & Regulile Incoterms 2020",
    helpDeskPrefill: {
      category: "cmr-cargo",
      messageIntro: "Bună ziua. Doresc o cotație pentru o poliță de asigurare CARGO pentru importurile / exporturile noastre de mărfuri.",
    },
  },

  // 17. CAR (Contractor's All Risks)
  {
    id: "car-construction",
    slug: "car-asigurarea-lucrarilor-de-constructii",
    name: "CAR — Toate Riscurile pentru Construcții (Contractor's All Risks)",
    acronym: "CAR",
    category: "Construcții și proiecte",
    shortDesc: "Polița standard a industriei de construcții: acoperă lucrările de pe șantier, materialele, utilajele și răspunderea civilă față de vecini pe durata execuției.",
    overview: "Polița CAR este obligatorie în contractele FIDIC și în majoritatea licitațiilor publice sau investițiilor private mari. Este structurată pe două secțiuni: Secțiunea I acoperă daunele materiale aduse structurii în curs de execuție, clădirii existente și materialelor din șantier (foc, furtună, cutremur, erori de montaj), iar Secțiunea II preia răspunderea civilă față de terți pentru vătămări sau fisurarea clădirilor învecinate.",
    targetAudience: ["Antreprenori generali de construcții și subcontractori", "Dezvoltatori imobiliari rezidențiali, comerciali și industriali", "Beneficiari privați sau instituționali ai proiectelor de infrastructură"],
    keyCoverages: [
      "Secțiunea I: Prăbușirea structurii, incendiu pe șantier, inundații, alunecări de teren, furtul materialelor depozitate",
      "Secțiunea II: Răspundere civilă terți (vătămarea pietonilor, avarierea conductelor subterane de utilități, fisurarea clădirilor vecine)",
      "Perioada de mentenanță extinsă (Extended Maintenance) de 12-24 luni după recepția lucrărilor",
      "Cheltuieli de debarasare a molozului și onorarii de proiectare pentru refacere",
    ],
    limitsAndSublimits: [
      "Secțiunea I: 100% din valoarea contractului de construcție fără TVA",
      "Secțiunea II: Limită negociată între 200.000 EUR și 5.000.000 EUR",
    ],
    deductiblesExplanation: "Franșize diferențiate: 1.000 – 5.000 EUR pentru daune standard; franșiză procentuală (2-5%) pentru cutremur/inundație; franșiză dedicată pentru conducte subterane.",
    commonExclusions: [
      "Erori de proiectare (Design Defect) — acoperite doar parțial dacă se atașează clauzele DE3/DE4/DE5",
      "Penalități de întârziere contractuale pur financiare",
      "Uzura schelelor și a cofrajelor reutilizabile",
    ],
    underwritingRequirements: [
      "Contractul de antrepriză, devizul general de lucrări și graficul de execuție GANTT",
      "Studiul geotehnic și memoriul tehnic de arhitectură/structură",
      "Măsurile de pază ale șantierului și distanțele față de proprietățile vecine",
    ],
    claimsProcedure: [
      "1. Se iau măsuri de securizare a șantierului și se opresc lucrările în zona sinistrată.",
      "2. Se convoacă dirigintele de șantier, proiectantul și inspectorul de daune al asigurătorului.",
      "3. Se întocmește un deviz de lucrări de remediere.",
    ],
    questionsToAskInsurer: [
      "Sunt incluși toți subcontractorii ca asigurați adiționali cu renunțare la dreptul de regres?",
    ],
    officialLawReference: "Condițiile FIDIC (Cartea Roșie/Galbenă) & Legea nr. 10/1995 privind calitatea în construcții",
    helpDeskPrefill: {
      category: "car-ear",
      messageIntro: "Bună ziua. Avem un nou șantier de construcții și solicităm o propunere pentru o poliță CAR (Contractor's All Risks).",
    },
  },

  // 18. EAR (Erection All Risks)
  {
    id: "ear-erection",
    slug: "ear-toate-riscurile-de-montaj",
    name: "EAR — Toate Riscurile de Montaj (Erection All Risks)",
    acronym: "EAR",
    category: "Construcții și proiecte",
    shortDesc: "Poliță dedicată instalării și montajului de utilaje grele, linii tehnologice, turbine, parcuri fotovoltaice și echipamente industriale, inclusiv perioada de probe.",
    overview: "Similară cu polița CAR, asigurarea EAR este adaptată specific proiectelor de inginerie mecanică și electrică: montarea unei linii de producție într-o fabrică, construirea unui parc solar sau montarea unei turbine de cogenerare. Riscul critic acoperit de EAR îl constituie perioada de probe tehnologice la rece și la cald (Testing & Commissioning Period), momentul în care riscul de avarie sau explozie este maxim.",
    targetAudience: ["Instalatori industriali, contractori EPC, firme de montaj echipamente energetice", "Fabrici care își extind capacitățile de producție", "Dezvoltatori de parcuri fotovoltaice și eoliene"],
    keyCoverages: [
      "Daune fizice accidentale produse utilajelor în timpul montajului, ancorării și ridicării cu macaraua",
      "Perioada de probe tehnologice (Testing & Commissioning) — defecte electrice, explozii fizice, scăpări de fluide",
      "Răspundere civilă față de terți pe perioada montajului",
      "Daune produse clădirii gazdă în timpul montării echipamentelor grele",
    ],
    limitsAndSublimits: [
      "Suma asigurată: Valoarea totală a echipamentelor instalate plus costurile de manoperă și transport",
    ],
    deductiblesExplanation: "Franșize mai mari pe durata perioadei de probe tehnologice (ex: 2.500 – 10.000 EUR).",
    commonExclusions: [
      "Defecte preexistente de fabricație ale utilajului furnizat de producător",
      "Corectarea montajului defectuos care nu a produs o avarie fizică",
    ],
    underwritingRequirements: [
      "Descrierea echipamentelor montate și fisele tehnice ale utilajelor",
      "Programul de montaj și durata exactă a probelor tehnologice (uzual între 2 și 6 săptămâni)",
      "Experiența inginerilor și a echipei tehnice de montaj",
    ],
    claimsProcedure: [
      "1. În caz de avarie la probe, se decuplează alimentarea și se conservă parametrii din logurile computerizate.",
      "2. Se convoacă echipa producătorului și asigurătorul pentru investigarea cauzei.",
    ],
    questionsToAskInsurer: [
      "Câte săptămâni de probe tehnologice (Testing Period) sunt incluse în acoperirea standard?",
    ],
    officialLawReference: "Condițiile internaționale standard EAR (Munich Re / Swiss Re Forms)",
    helpDeskPrefill: {
      category: "car-ear",
      messageIntro: "Bună ziua. Urmează să montăm o linie tehnologică / echipamente energetice și avem nevoie de o poliță EAR (Erection All Risks).",
    },
  },

  // 19. Crop Insurance
  {
    id: "crop-insurance",
    slug: "asigurarea-culturilor-agricole",
    name: "Asigurarea Culturilor Agricole (Crop Insurance)",
    acronym: "AGRO-CROP",
    category: "Agricultură și mediu",
    shortDesc: "Protejează recolta de cereale, oleaginoase, livezi și viță-de-vie împotriva grindinei, înghețului târziu, furtunilor și incendiului de vegetație.",
    overview: "Sectorul agricol este supus unor fenomene meteo tot mai violente în România. O grindină de 15 minute poate anula complet munca și investiția unui an pe sute de hectare. Polița de culturi agricole protejează valoarea producției estimate și este subvenționabilă în proporție de până la 70% prin fonduri europene (Submăsura 17.1 AFIR), reducând substanțial efortul financiar al fermierului.",
    targetAudience: ["Ferme vegetale mari culturi (grâu, porumb, floare, rapiță)", "Producători de legume în sere și solarii", "Proprietari de livezi pomicole și plantații viticole"],
    keyCoverages: [
      "Grindină (acoperirea de bază cea mai frecventă)",
      "Incendiu în lan provocat de descărcări electrice sau utilaje",
      "Furtună, vijelie, ploi torențiale care provoacă culcarea la pământ a culturii",
      "Îngheț de iarnă (pentru culturile de toamnă) și îngheț târziu de primăvară (pentru livezi și vii)",
    ],
    limitsAndSublimits: [
      "Suma asigurată per hectar: Producția medie estimată (tone/ha) × Prețul unitar de valorificare agreat (lei/tonă)",
    ],
    deductiblesExplanation: "Franșize uzuale între 5% și 15% din valoarea daunată pe parcelă sau din suma asigurată a parcelei afectate.",
    commonExclusions: [
      "Seceta pedologică prelungită (cu excepția polițelor speciale indexate prin satelit)",
      "Boli, ciuperci și dăunători care trebuiau combătuți prin tratamente fitosanitare standard",
      "Nerespectarea agrotehnicii specifice recomandate",
    ],
    underwritingRequirements: [
      "Situația parcelelor APIA (identificatori fizici, blocuri, cultură, suprafață)",
      "Producțiile medii realizate în ultimii 3 ani",
      "Data însămânțării și stadiul de vegetație la momentul inspecției de risc",
    ],
    claimsProcedure: [
      "1. Se transmite avizarea de daună în termen de maximum 48-72 de ore de la căderea grindinei.",
      "2. Se efectuează o primă constatare provisională pe câmp.",
      "3. Evaluarea finală a gradului de dăunare se face înainte de recoltare de către o comisie mixtă.",
    ],
    questionsToAskInsurer: [
      "Este polița eligibilă pentru decontarea de 70% prin Submăsura 17.1 a AFIR?",
    ],
    officialLawReference: "Ghidul solicitantului AFIR — Submăsura 17.1 & Ordinul comun MADR/ASF",
    helpDeskPrefill: {
      category: "asigurari-agricole",
      messageIntro: "Bună ziua. Sunt fermier și solicit o cotație pentru Asigurarea Culturilor Agricole pentru sezonul curent.",
    },
  },

  // 20. Livestock Insurance
  {
    id: "livestock-insurance",
    slug: "asigurarea-animalelor-de-ferma",
    name: "Asigurarea Animalelor de Fermă (Livestock Insurance)",
    acronym: "AGRO-LIVESTOCK",
    category: "Agricultură și mediu",
    shortDesc: "Protejează fermele zootehnice împotriva mortalității animalelor cauzate de boli netratabile, accidente, fenomene meteorologice extreme și asfixiere.",
    overview: "Fermele zootehnice moderne operează cu efective mari concentrate în hale tehnologizate. Riscurile sanitare, oprirea ventilației forțate pe timp de caniculă sau accidentele mecanice pot decima efectivul într-un interval scurt. Polița asigură valoarea animalelor și permite continuarea activității fermei.",
    targetAudience: ["Ferme de vaci de lapte și tineret bovin", "Ferme de reproducție și îngrășare porcine", "Ferme avicole de pui de carne și găini ouătoare"],
    keyCoverages: [
      "Mortalitate din cauza bolilor interne netratabile și a complicațiilor la fătare",
      "Accidente traumatice, fracturi, meteorism acut, asfixiere accidentală",
      "Oprirea accidentală a instalației de ventilație forțată în halele închise (pana de curent)",
      "Incendiu, trăsnet, inundație la grajduri/adăposturi",
      "Sacrificare de necesitate dispusă de medicul veterinar",
    ],
    limitsAndSublimits: [
      "Valoarea per animal stabilită pe bază de greutate, rasă și valoare contabilă/de piață",
    ],
    deductiblesExplanation: "Franșize fixe per animal sau procentuale per eveniment (5% - 10%).",
    commonExclusions: [
      "Boli supuse măsurilor de carantină oficială și sacrificare sanitară unde statul plătește despăgubiri (Pestă Porcină, Gripă Aviară)",
      "Neglijență în hrănire sau adăpare și malnutriție",
    ],
    underwritingRequirements: [
      "Autorizația sanitară veterinară a fermei și registrul de efective la zi",
      "Sistemul de securitate biologică și contractul cu medicul veterinar autorizat",
      "Dotarea cu generatoare electrice de rezervă cu pornire automată",
    ],
    claimsProcedure: [
      "1. Se anunță medicul veterinar al fermei care întocmește actul de necropsie.",
      "2. Se notifică asigurătorul în termen de 24 de ore înainte de ecarisarea cadavrului.",
    ],
    questionsToAskInsurer: [
      "Este inclusă clauza de oprire a ventilației în caz de pană a generatorului de rezervă?",
    ],
    officialLawReference: "Normele sanitare veterinare ANSVSA & Submăsura 17.1 AFIR",
    helpDeskPrefill: {
      category: "asigurari-agricole",
      messageIntro: "Bună ziua. Doresc o cotație pentru Asigurarea Animalelor de Fermă (bovine / porcine / păsări).",
    },
  },

  // 21. Solar PV All Risks
  {
    id: "solar-pv",
    slug: "asigurarea-parcurilor-fotovoltaice",
    name: "Asigurarea Parcurilor Solare și Instalațiilor Fotovoltaice",
    acronym: "SOLAR PV ALL RISKS",
    category: "Energie și regenerabile",
    shortDesc: "Protecție tehnică specializată pentru parcuri solare la sol și pe acoperiș: panouri, invertoare, transformatoare, cabluri și pierdere de venit din energie.",
    overview: "Polița acoperă toate riscurile specifice activelor solare: de la grindina care sparge sticla panourilor sau generează microfisuri interne, până la furtul cablurilor de cupru, incendiile produse de arcuri electrice și defectarea invertoarelor. În plus, include componenta critică de Pierdere de Venit (Loss of Revenue) solicitată obligatoriu de bănci pentru rambursarea creditelor de investiții.",
    targetAudience: ["Dezvoltatori și investitori în parcuri solare de mari dimensiuni", "Prosumatori industriali și comerciali cu panouri pe acoperișul halelor", "Firme de operare și mentenanță (O&M)"],
    keyCoverages: [
      "Grindină, furtună, vijelie, presiunea zăpezii pe structuri",
      "Trăsnet direct și supratensiuni electrice induse în invertoare și transformatoare",
      "Furt prin efracție al cablurilor solare, al modulelor și echipamentelor de post trafo",
      "Pierderea de venit din vânzarea energiei electrice neproduse (Loss of Revenue)",
      "Testele de electroluminescență pentru detectarea celulelor degradate intern",
    ],
    limitsAndSublimits: [
      "100% din valoarea de reconstrucție a parcului fotovoltaic",
      "Pierderea de venit: marja calculată pe 6 – 12 luni de indemnizare",
    ],
    deductiblesExplanation: "Franșize fixe (1.000 – 5.000 EUR per incident meteo); franșiză în zile (3-7 zile) pentru pierderea de venit.",
    commonExclusions: [
      "Degradarea naturală a performanței siliciului în timp (PID/LID)",
      "Furtul fără efracție dacă parcul nu avea gard perimetral și camere de supraveghere",
    ],
    underwritingRequirements: [
      "Capacitatea instalată (MWp/kWp) și tipul echipamentelor (Tier 1)",
      "Planul parcului, tipul de împrejmuire și contractul de monitorizare/pază",
      "Studiul de producție PVsyst și contractul de vânzare a energiei (PPA/piață liberă)",
    ],
    claimsProcedure: [
      "1. Se izolează secțiunea avariată din dispeceratul SCADA.",
      "2. Se face inspecția tehnică la fața locului și se transmit datele de telemetrie către asigurător.",
      "3. Se efectuează testele de laborator/termoviziune pentru cuantificarea exactă a panourilor distruse.",
    ],
    questionsToAskInsurer: [
      "Este inclusă cesiunea de drepturi în favoarea băncii finanțatoare (Loss Payee Clause)?",
    ],
    officialLawReference: "Condițiile tehnice Transelectrica & Regulamentele ANRE",
    helpDeskPrefill: {
      category: "energie-si-instalatii-fotovoltaice",
      messageIntro: "Bună ziua. Deținem un parc fotovoltaic / centrală solară și solicităm o cotație completă de operare și pierdere de venit.",
    },
  },

  // 22. Environmental Impairment Liability
  {
    id: "environmental-liability",
    slug: "riscuri-de-mediu-si-poluare",
    name: "Asigurarea de Mediu și Poluare Accidentală (Environmental Impairment Liability)",
    acronym: "EIL",
    category: "Agricultură și mediu",
    shortDesc: "Acoperă costurile uriașe de decontaminare a solului, apelor subterane și refacerea biodiversității cerute de Garda de Mediu în caz de poluare accidentală.",
    overview: "Conform Directivei Europene privind Răspunderea pentru Mediu (transpusă prin OUG 195/2005 și OUG 68/2007), principiul 'Poluatorul plătește' impune companiilor obligația de a reface mediul natural la starea sa inițială, indiferent de costuri. O deversare accidentală de combustibil sau substanțe chimice într-un râu poate genera costuri de decontaminare de sute de mii sau milioane de euro. Polița EIL acoperă exact aceste costuri de curățare și remediere ecologică.",
    targetAudience: ["Depozite de carburanți, stații de distribuție carburanți", "Fabrici chimice, vopseluri, prelucrare metale, galvanizare", "Operatori de depozite de deșeuri, stații de epurare și ferme zootehnice mari"],
    keyCoverages: [
      "Costurile de decontaminare și curățare a solului și apelor de pe proprietatea asiguratului (On-site cleanup)",
      "Costurile de remediere a terenurilor și apelor terților afectate de poluare (Off-site cleanup)",
      "Despăgubiri pentru daune aduse biodiversității și resurselor naturale protejate",
      "Vătămări corporale și pagube materiale produse vecinilor de emisiile poluante",
      "Costuri de apărare juridică și reprezentare în fața autorităților de mediu",
    ],
    limitsAndSublimits: [
      "Limita de răspundere: 500.000 – 5.000.000 EUR pe an",
    ],
    deductiblesExplanation: "Franșize per eveniment între 5.000 și 25.000 EUR.",
    commonExclusions: [
      "Poluare istorică preexistentă cunoscută înainte de încheierea contractului",
      "Emisii continue deliberate care depășesc autorizația integrată de mediu",
      "Amenzi contravenționale aplicate direct de Garda de Mediu",
    ],
    underwritingRequirements: [
      "Autorizația de Mediu sau Autorizația Integrată de Mediu (AIM)",
      "Raportul de evaluare a riscurilor de mediu și substanțele periculoase stocate pe amplasament",
      "Sistemele de retenție: cuve etanșe, separatoare de hidrocarburi, senzori de scurgere",
    ],
    claimsProcedure: [
      "1. Se acționează de urgență pentru oprirea sursei deversării și aplicarea materialelor absorbante.",
      "2. Se anunță Garda de Mediu și ISU conform planului de intervenție.",
      "3. Se notifică asigurătorul în maximum 24h pentru trimiterea specialiștilor în remediere ecologică.",
    ],
    questionsToAskInsurer: [
      "Acoperă polița atât poluarea bruscă și accidentală (Sudden & Accidental), cât și poluarea treptată (Gradual Pollution)?",
    ],
    officialLawReference: "OUG nr. 195/2005 privind protecția mediului & OUG nr. 68/2007 privind răspunderea de mediu",
    helpDeskPrefill: {
      category: "riscuri-de-mediu-si-poluare",
      messageIntro: "Bună ziua. Reprezint o companie cu activitate industrială / depozitare chimicale și solicităm o ofertă de Asigurare de Răspundere de Mediu (EIL).",
    },
  },

  // 23. Trade Credit Insurance
  {
    id: "trade-credit",
    slug: "asigurarea-creditului-comercial",
    name: "Asigurarea Creditului Comercial (Trade Credit Insurance)",
    acronym: "TCI",
    category: "Riscuri financiare",
    shortDesc: "Protejează cifra de afaceri și cash-flow-ul împotriva riscului de neplată sau insolvență a clienților B2B cărora le livrezi marfă sau servicii cu termen de plată.",
    overview: "Vânzarea pe credit comercial (cu plată la 30, 60 sau 90 de zile) este o necesitate de business, dar expune firma la riscul ca un partener cheie să intre în insolvență sau să refuze plata. Asigurarea de credit comercial analizează solvabilitatea fiecărui client în parte, stabilește limite maxime sigure de creditare și despăgubește până la 90% din valoarea facturilor neîncasate dacă partenerul devine insolvabil.",
    targetAudience: ["Distribuitori angro și retaileri B2B", "Fabrici și producători industriali care vând pe credit comercial", "Exportatori către piețe din Uniunea Europeană"],
    keyCoverages: [
      "Insolvența dovedită a cumpărătorului (deschiderea procedurii de faliment)",
      "Neplata prelungită (Protracted Default — întârziere la plată peste termenul convenit, uzual 90 de zile)",
      "Risc politic la export (restricții valutare, război, măsuri guvernamentale ce împiedică transferul banilor)",
      "Monitorizarea preventivă a sănătății financiare a portofoliului de clienți de către asigurător",
    ],
    limitsAndSublimits: [
      "Până la 90% din valoarea facturii fără TVA (procent de despăgubire agreat)",
      "Limita de credit per debitor aprobată individual în portalul asigurătorului",
    ],
    deductiblesExplanation: "Compania își păstrează o coasigurare de 10% (reținere proprie), asigurătorul plătind 90%.",
    commonExclusions: [
      "Dispute comerciale privind calitatea mărfii livrate (litigiul comercial trebuie tranșat mai întâi)",
      "Vânzări către entități afiliate sau din același grup",
      "Vânzări către persoane fizice (B2C)",
    ],
    underwritingRequirements: [
      "Cifra de afaceri pe credit comercial și termenul mediu de încasare (DSO)",
      "Lista clienților principali (CUI, denumire, rulaj anual, limită de credit solicitată)",
      "Istoricul pierderilor din creanțe neîncasate pe ultimii 3 ani",
    ],
    claimsProcedure: [
      "1. Se declară depășirea scadenței în portalul asigurătorului la împlinirea numărului de zile de întârziere.",
      "2. Asigurătorul preia procedura de colectare amiabilă prin agenția proprie de colectare.",
      "3. Dacă datoria nu se recuperează, se achită dosarul de daună la procentul agreat.",
    ],
    questionsToAskInsurer: [
      "Cât durează aprobarea unei limite noi de credit pentru un client străin din Germania sau Italia?",
    ],
    officialLawReference: "Codul Civil Român & Legea insolvenței nr. 85/2014",
    helpDeskPrefill: {
      category: "asigurari-credit-comercial",
      messageIntro: "Bună ziua. Doresc o cotație pentru Asigurarea Creditului Comercial pentru portofoliul nostru de clienți B2B.",
    },
  },

  // 24. Surety Bonds
  {
    id: "surety-bonds",
    slug: "garantii-contractuale-de-asigurare",
    name: "Garanții Contractuale de Asigurare (Surety Bonds)",
    acronym: "SURETY",
    category: "Garanții și riscuri financiare",
    shortDesc: "Înlocuiesc scrisorile de garanție bancară (SGB) pentru participare la licitații publice (SEAP), returnare avans și bună execuție, fără a bloca lichiditățile firmei.",
    overview: "Pentru a participa la licitații publice sau proiecte private de anvergură, companiile sunt obligate să depună garanții substanțiale. Dacă apelezi la bancă, aceasta îți va bloca un colateral de 100% în cont (cash collateral) sau îți va reduce linia de credit. Garanțiile de asigurare (Surety Bonds) sunt acceptate legal conform Legii 98/2016 privind achizițiile publice și îți permit să emiți polițe de garanție plătind doar o primă anuală, păstrându-ți lichiditățile libere pentru operare.",
    targetAudience: ["Constructori și antreprenori de lucrări publice și civile", "Furnizori de echipamente tehnologice și servicii pentru autorități contractante", "Dezvoltatori de proiecte energetice și utilități"],
    keyCoverages: [
      "Garanția de participare la licitație (Bid Bond)",
      "Garanția de bună execuție a contractului (Performance Bond)",
      "Garanția de returnare a avansului (Advance Payment Bond)",
      "Garanția pentru perioada de mentenanță / remediere a defectelor (Maintenance Bond)",
      "Garanții pentru reținerea sumelor oprite din situațiile de lucrări (Retention Bond)",
    ],
    limitsAndSublimits: [
      "Bid Bond: uzual 1% – 2% din valoarea estimată a contractului",
      "Performance Bond: 5% – 10% din valoarea contractului atribuit",
      "Advance Payment: 100% din valoarea avansului încasat",
    ],
    deductiblesExplanation: "Fără franșiză. Dacă beneficiarul execută garanția justificat, asigurătorul plătește suma solicitată, având drept de regres împotriva asiguratului conform biletului la ordin avalizat.",
    commonExclusions: [
      "Executări abuzive ale beneficiarului dacă există o hotărâre judecătorească de suspendare a executării",
    ],
    underwritingRequirements: [
      "Bilanțurile contabile din ultimii 2 ani (cifră de afaceri, profitabilitate, grad de îndatorare)",
      "Fișa de date a achiziției (caietul de sarcini SEAP) sau draftul contractului de execuție",
      "Semnarea unui acord-cadru de emitere garanții și emiterea unui bilet la ordin avalizat de administrator",
    ],
    claimsProcedure: [
      "1. Beneficiarul transmite o cerere scrisă de executare a garanției indicând nerespectarea obligațiilor contractuale.",
      "2. Asigurătorul notifică executantul pentru a verifica dacă există obiecțiuni legale justificate.",
      "3. Dacă executarea este validă, plata se efectuează conform termenelor din poliță.",
    ],
    questionsToAskInsurer: [
      "Cât este plafonul anual de garanții pe care ni-l puteți aproba pentru participări recurente la licitații SEAP?",
    ],
    officialLawReference: "Legea nr. 98/2016 privind achizițiile publice (Art. 154) & HG nr. 395/2016",
    helpDeskPrefill: {
      category: "garantii-contractuale",
      messageIntro: "Bună ziua. Avem nevoie de emiterea unei Garanții de Asigurare (participare la licitație / bună execuție / returnare avans).",
    },
  },

  // 25. Event Cancellation Insurance
  {
    id: "event-cancellation",
    slug: "asigurarea-de-anulare-a-evenimentelor",
    name: "Asigurarea de Anulare a Evenimentelor (Event Cancellation)",
    acronym: "EVENT",
    category: "Evenimente și speciale",
    shortDesc: "Protejează organizatorii de festivaluri, conferințe, concerte și expoziții împotriva pierderii cheltuielilor irecuperabile în caz de anulare sau amânare forțată.",
    overview: "Organizarea unui festival mare sau a unei conferințe internaționale presupune cheltuieli majore angajate în avans: onorarii artiști, închirierea spațiului, scene, producție tehnică și promovare. Dacă o furtună extremă distruge scena, dacă artistul principal suferă un accident grav sau dacă spațiul devine inaccesibil, organizatorul pierde sume uriașe din biletele ce trebuie rambursate. Polița de anulare a evenimentului acoperă aceste costuri nete irecuperabile.",
    targetAudience: ["Organizatori de festivaluri de muzică și concerte", "Organizatori de conferințe de afaceri, congrese medicale și expoziții comerciale", "Promotori de evenimente sportive și gale"],
    keyCoverages: [
      "Anularea, amânarea sau relocarea forțată a evenimentului din motive independente de voința organizatorului",
      "Condiții meteorologice extreme care pun în pericol viața publicului sau împiedică desfășurarea în aer liber",
      "Neprezentarea artistului cheie sau a speakerului principal din cauza decesului, accidentului sau bolii subite",
      "Indisponibilitatea spațiului de desfășurare (incendiu, pană masivă de curent, avarie structurală)",
      "Doliu național declarat oficial de Guvern",
    ],
    limitsAndSublimits: [
      "Suma asigurată: Totalul cheltuielilor bugetate irecuperabile sau venitul brut estimat din vânzarea de bilete și sponsorizări",
    ],
    deductiblesExplanation: "Franșize fixe negociate între 2.500 și 20.000 EUR în funcție de mărimea evenimentului.",
    commonExclusions: [
      "Lipsa vânzărilor de bilete sau dezinteresul publicului (risc pur comercial)",
      "Retragerea voluntară a artistului fără motiv medical justificat documentat",
      "Retragerea sponsorilor principali",
    ],
    underwritingRequirements: [
      "Bugetul detaliat de venituri și cheltuieli al evenimentului",
      "Contractele semnate cu locația și artiștii principali (clauzele de forță majoră)",
      "Planul de urgență și măsurile pentru vreme nefavorabilă (corturi, acoperiș scenă certificat)",
    ],
    claimsProcedure: [
      "1. Se ia decizia formală de anulare/amânare doar după epuizarea opțiunilor rezonabile de salvare a evenimentului.",
      "2. Se prezintă certificatul medical al artistului sau raportul ANM privind fenomenele meteo extreme.",
      "3. Se depun dovezile plăților efectuate și facturile furnizorilor nerambursabile.",
    ],
    questionsToAskInsurer: [
      "Este inclusă acoperirea de 'Non-Appearance' pentru artistul principal cap de afiș?",
    ],
    officialLawReference: "Condițiile internaționale Lloyd's of London pentru Event Contingency",
    helpDeskPrefill: {
      category: "asigurari-pentru-evenimente",
      messageIntro: "Bună ziua. Organizăm un eveniment / festival / conferință și dorim o ofertă pentru Asigurarea de Anulare a Evenimentului.",
    },
  },

  // 26. Commercial Crime & Fidelity
  {
    id: "commercial-crime",
    slug: "asigurarea-de-frauda-si-fidelitate",
    name: "Asigurarea Valorilor, Banilor și a Fidelității Angajaților (Commercial Crime)",
    acronym: "CRIME / FIDELITY",
    category: "Riscuri financiare",
    shortDesc: "Protejează compania împotriva pierderilor financiare directe cauzate de furtul, frauda sau delapidarea comisă de propriii angajați sau hackeri.",
    overview: "Furturile din interiorul companiei (fraude contabile, sustragerea de stocuri, deturnarea de fonduri prin facturi fictive) sunt adesea depistate după luni sau ani de zile și nu sunt acoperite de nicio poliță standard de incendiu sau răspundere. Polița de Commercial Crime acoperă pierderile directe suferite de companie din cauza actelor necinstite ale angajaților sau a fraudelor externe sofisticate (inclusiv Social Engineering / Fake President Fraud).",
    targetAudience: ["Companii de retail cu fluxuri mari de numerar", "Companii cu depozite mari de mărfuri ușor vandabile (electronice, parfumuri, metale)", "Corporative businesses cu departamente financiare mari"],
    keyCoverages: [
      "Delapidare, furt de bani sau bunuri comis de angajații companiei (Fidelity Guarantee)",
      "Fraude comise prin modificarea fișierelor de plăți sau a transferurilor electronice",
      "Frauda 'Mesaj de la Președinte' (Social Engineering Fraud / CEO Fraud)",
      "Falsificarea de cecuri, bilete la ordin sau instrucțiuni bancare scrise",
      "Furtul banilor din casierie sau în timpul transportului de valori către bancă",
    ],
    limitsAndSublimits: [
      "Limita de răspundere: 100.000 – 2.000.000 EUR pe an",
      "Sublimită pentru fraudele de tip Social Engineering",
    ],
    deductiblesExplanation: "Franșize fixe între 2.500 și 10.000 EUR per incident.",
    commonExclusions: [
      "Lipsa inexplicabilă la inventar fără identificarea unui autor sau a unui mod de operare fraudulos",
      "Fraude comise de acționarii majoritari sau membrii consiliului de administrație",
    ],
    underwritingRequirements: [
      "Procedurile interne de control financiar (regula celor 4 ochi / dublă autorizare la orice plată bancară)",
      "Procedurile de verificare a noilor furnizori și confirmarea telefonică obligatorie a oricărei schimbări de IBAN",
      "Auditurile contabile anuale externe",
    ],
    claimsProcedure: [
      "1. Se depune plângere penală la Poliție / Parchet împotriva persoanei vinovate.",
      "2. Se efectuează o expertiză contabilă internă sau judiciară pentru stabilirea cuantumului exact delapidat.",
      "3. Asigurătorul despăgubește prejudiciul și se subrogă în drepturile companiei pentru recuperare.",
    ],
    questionsToAskInsurer: [
      "Acoperă polița și frauda prin phishing în care un angajat de la contabilitate a fost păcălit să trimită bani într-un cont fals?",
    ],
    officialLawReference: "Codul Penal Român (Art. 242 Înșelăciunea, Art. 295 Delapidarea) & Codul Civil Român",
    helpDeskPrefill: {
      category: "stocuri-marfa-materii-prime",
      messageIntro: "Bună ziua. Doresc o discuție despre o poliță de Commercial Crime / Asigurarea Fidelității Angajaților și protecția împotriva fraudelor financiare.",
    },
  },
];
