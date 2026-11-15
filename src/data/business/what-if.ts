import { WhatIfScenario } from "./types";

export const WHAT_IF_SCENARIOS: WhatIfScenario[] = [
  // 1. Incendiu plecat din spațiul închiriat
  {
    id: "incendiu-spatiu-inchiriat-plecat-din-spatiul-meu",
    slug: "ce-se-intampla-daca-ia-foc-spatiul-inchiriat",
    question: "Ce se întâmplă dacă ia foc spațiul închiriat și focul pleacă din spațiul meu?",
    shortAnswer: "Răspunzi patrimonial pentru distrugerea spațiului proprietarului și a bunurilor vecinilor. O poliță de răspundere a chiriașului (Tenant's Liability) și asigurarea bunurilor proprii cu renunțare la regres sunt esențiale.",
    detailedAnalysis: "Conform art. 1822 din Codul Civil Român, chiriașul răspunde pentru pagubele produse imobilului prin incendiu, cu excepția cazului în care dovedește că focul s-a produs din forță majoră, dintr-un viciu de construcție sau a fost comunicat de o clădire vecină. Dacă scurtcircuitul s-a produs la o priză sau la un aparat lăsat în priză în magazinul sau biroul tău, sarcina probei apasă pe umerii tăi. Proprietarul clădirii și ceilalți chiriași afectați se vor îndrepta împotriva companiei tale pentru toate daunele suferite.",
    immediateImpact: [
      "Proprietarul clădirii va solicita despăgubiri pentru structura de rezistență, fațadă și acoperiș.",
      "Asigurătorul de clădire al proprietarului va plăti proprietarul, dar se va regresa în instanță împotriva ta pentru a-și recupera toți banii dacă nu ai o clauză de renunțare la regres!",
      "Vecinii de etaj îți vor imputa mărfurile și echipamentele distruse de foc, fum și de apa folosită de pompieri.",
      "Vei continua să fii obligat la plata chiriei sau a penalităților dacă ai semnat clauze contractuale rigide.",
    ],
    insuranceIntervention: "Polița de Răspundere Civilă a Chiriașului (Tenant's Liability) preia plata daunelor materiale cauzate clădirii proprietarului și spațiilor vecine, în limita sumei asigurate (uzual între 500.000 EUR și 2.000.000 EUR). De asemenea, asigurătorul suportă cheltuielile de apărare în instanță.",
    uninsurableAspects: "Incendiul provocat cu intenție sau nerespectarea grosolană a normelor ISU (cum ar fi blocarea conștientă a hidranților sau fumatul în depozite de solvenți) pot atrage refuzul despăgubirii pe motiv de culpă gravă.",
    mitigationSteps: [
      "Include întotdeauna clauza de 'Renunțare la dreptul de regres' (Waiver of Subrogation) reciprocă în contractul de închiriere.",
      "Contractează o poliță de Răspundere Civilă Generală care să specifice expres 'Răspunderea locativă / a chiriașului'.",
      "Efectuează reviziile PRAM ale instalației electrice anuale și păstrează buletinele de verificare.",
    ],
    legalBasis: "Codul Civil Român (Art. 1822 - Răspunderea locatarului pentru incendiu) & Legea nr. 307/2006 privind apărarea împotriva incendiilor.",
  },

  // 2. Accident grav de muncă
  {
    id: "accident-grav-de-munca-angajat",
    slug: "ce-se-intampla-daca-un-angajat-sufera-un-accident-grav-de-munca",
    question: "Ce se întâmplă dacă un angajat suferă un accident grav de muncă pe șantier sau în fabrică?",
    shortAnswer: "Cercetarea ITM este obligatorie, iar Casa de Sănătate se va regresa împotriva firmei pentru spitalizare dacă s-au încălcat normele SSM. Polița de Răspundere a Angajatorului preia despăgubirile financiare și daunele morale.",
    detailedAnalysis: "În cazul unui accident de muncă cu incapacitate temporară de muncă, invaliditate sau deces, angajatorul are obligația legală de a anunța de îndată ITM-ul și organele de poliție conform Legii 319/2006. Dacă cercetarea stabilește că angajatorul nu a asigurat echipamentul individual de protecție (EIP), nu a efectuat instructajul periodic sau utilajul nu avea protecții, firma răspunde delictual. Casa de Asigurări de Sănătate va emite titlu de creanță pentru toate cheltuielile de spitalizare, iar victima sau familia acesteia poate solicita în instanță daune morale și materiale substanțiale.",
    immediateImpact: [
      "Deschiderea unui dosar penal de către Parchet pentru vătămare corporală din culpă sau nerespectarea măsurilor legale de securitate și sănătate în muncă.",
      "Acțiuni în regres ale Caselor de Pensii și de Sănătate pentru pensia de invaliditate și costurile medicale.",
      "Amenzi contravenționale de la ITM între 5.000 și 10.000 lei per abatere constatată.",
      "Impact devastator asupra moralului echipei și riscul opririi activității pe linia de producție.",
    ],
    insuranceIntervention: "Polița de Răspundere Civilă a Angajatorului (Employers' Liability) despăgubește sumele cerute în regres de CNAS/CASS, preia daunele morale acordate de instanță salariatului și plătește onorariile avocaților desemnați pentru apărare penală și civilă.",
    uninsurableAspects: "Amenzile contravenționale aplicate direct de ITM și sancțiunile penale aplicate persoanelor fizice responsabile cu SSM nu pot fi asigurate legal.",
    mitigationSteps: [
      "Nu permite începerea lucrului fără fișa de instruire SSM semnată la zi și fișa de aptitudine de la medicina muncii.",
      "Asigură echipamente de protecție certificate CE și verifică utilizarea lor efectivă.",
      "Încheie o poliță de grup de asigurare de accidente pentru toți muncitorii din producție și teren.",
    ],
    legalBasis: "Legea securității și sănătății în muncă nr. 319/2006 & Legea nr. 346/2002 privind asigurarea pentru accidente de muncă.",
  },

  // 3. Client alunecat în magazin/restaurant
  {
    id: "client-alunecat-magazin-restaurant",
    slug: "ce-se-intampla-daca-un-client-aluneca-in-magazin-sau-restaurant",
    question: "Ce se întâmplă dacă un client alunecă în magazinul sau restaurantul meu și își rupe mâna?",
    shortAnswer: "Răspunzi civil delictual pentru vătămarea suferită pe proprietatea ta dacă nu ai semnalizat pericolul. Polița de Răspundere Civilă Generală acoperă spitalizarea, protezele și daunele morale.",
    detailedAnalysis: "În baza Art. 1357 din Codul Civil (răspunderea pentru fapta proprie) și a Art. 1376 (răspunderea pentru prejudiciile cauzate de lucruri), comerciantul are obligația de a menține spațiul comercial într-o stare sigură pentru consumatori. O podea proaspăt spălată fără panou galben de avertizare 'Atenție, podea umedă!', o treaptă ruptă sau zăpada necurățată de pe trotuarul din fața magazinului atrag vinovăția companiei.",
    immediateImpact: [
      "Clientul vătămat poate solicita rambursarea operațiilor, tratamentelor ortopedice și a concediului medical.",
      "Acțiune în instanță pentru daune morale (suferință fizică și psihică) de zeci de mii de lei.",
      "Risc de publicitate negativă pe rețelele sociale dacă incidentul este filmat.",
    ],
    insuranceIntervention: "Polița de Răspundere Civilă Generală (Public Liability) intervine imediat: acoperă cheltuielile medicale justificate cu documente, despăgubește daunele morale stabilite pe cale amiabilă sau judecătorească și plătește costurile apărării juridice.",
    uninsurableAspects: "Comportamentul vădit iresponsabil al clientului (de ex. alergat în stare de ebrietate) poate reduce sau elimina răspunderea ta dacă este dovedit prin camerele de supraveghere.",
    mitigationSteps: [
      "Montează panouri vizibile de avertizare pe timpul curățeniei și curăță zăpada/gheața prompt de la intrare.",
      "Păstrează imaginile de pe camerele CCTV timp de 30 de zile pentru a clarifica circumstanțele exacte ale căzăturii.",
      "Încheie o poliță RCG cu o limită minimă de 100.000 – 300.000 EUR.",
    ],
    legalBasis: "Codul Civil Român (Art. 1357, Art. 1376) & Ordonanța Guvernului nr. 21/1992 privind protecția consumatorilor.",
  },

  // 4. Client B2B care nu plătește marfa (credit comercial)
  {
    id: "neplata-facturi-credit-comercial",
    slug: "ce-se-intampla-daca-un-client-nu-plateste-marfa-pe-credit-comercial",
    question: "Ce se întâmplă dacă un client nu plătește marfa livrată pe credit comercial?",
    shortAnswer: "Cash-flow-ul firmei este grav afectat și riști pierderea definitivă a banilor dacă partenerul intră în insolvență. Asigurarea de credit comercial îți recuperează până la 90% din valoarea facturilor.",
    detailedAnalysis: "În România, termenul mediu de plată între companii depășește adesea 60-90 de zile. Dacă livrezi marfă sau prestezi servicii pe credit comercial, ești practic un bancher neplătit pentru clientul tău. Dacă partenerul intră în insolvență conform Legii 85/2014, creanțele chirografare (fără garanții) recuperează în medie sub 5% din masa credală după ani de procese.",
    immediateImpact: [
      "Blocarea capitalului de lucru și incapacitatea de a plăti propriii furnizori sau taxele la stat.",
      "Costuri mari de recuperare a creanțelor (avocați, executori judecătorești, taxe de timbru).",
      "Trecerea pe pierdere a sumei în contabilitate și plata TVA-ului aferent până la finalizarea falimentului.",
    ],
    insuranceIntervention: "Polița de Asigurare a Creditului Comercial (Trade Credit Insurance) analizează solvabilitatea fiecărui client înainte de livrare și acordă o limită de credit garantată. Dacă partenerul devine insolvabil sau nu plătește timp de 90-180 de zile, asigurătorul îți plătește 90% din valoarea facturii neîncasate și preia el procedura de executare silită.",
    uninsurableAspects: "Litigiile comerciale privind defectele calitative ale mărfii: dacă clientul refuză plata pentru că pretinde că marfa e neconformă, asigurarea de credit nu plătește până când litigiul comercial nu este tranșat.",
    mitigationSteps: [
      "Stabilește limite de credit doar pe baza rapoartelor financiare și verifică portalul instanțelor (portal.just.ro) pentru litigii de insolvență.",
      "Folosește bilete la ordin avalizate de administrator ca instrumente de garantare a plății.",
      "Asigură-ți întreg portofoliul de clienți B2B pe o poliță de credit comercial.",
    ],
    legalBasis: "Legea nr. 85/2014 privind procedurile de prevenire a insolvenței și de insolvență & Codul Civil Român.",
  },

  // 5. Camion răsturnat în străinătate (marfă distrusă)
  {
    id: "camion-rasturnat-marfa-distrusa-extern",
    slug: "ce-se-intampla-daca-un-camion-cu-marfa-se-rastoarna-in-strainatate",
    question: "Ce se întâmplă dacă un camion cu marfă se răstoarnă în străinătate și marfa este distrusă?",
    shortAnswer: "Răspunzi conform Convenției CMR în limita a ~10-12 EUR/kg brut dacă nu ai comis o culpă gravă. Cheltuielile de tractare și ecologizare pot depăși 30.000 EUR dacă nu ai CASCO complet.",
    detailedAnalysis: "În caz de accident rutier cu răsturnare pe o autostradă din Germania, Franța sau Austria, evenimentul declanșează trei categorii majore de costuri: 1) Paguba mărfii transportate; 2) Dauna suferită de capul-tractor și semiremorcă; 3) Factura serviciilor de urgență pentru repunerea pe roți a camionului, transbordarea mărfii și curățarea carosabilului/motorinei.",
    immediateImpact: [
      "Proprietarul mărfii emite cerere de despăgubire imediată către transportator.",
      "Autoritățile străine vor reține camionul până la achitarea costurilor de tractare și deblocare trafic.",
      "Camionul devine nefuncțional, generând pierderi de navlu zilnice pe rutele contractate.",
    ],
    insuranceIntervention: "Polița CMR a transportatorului preia răspunderea pentru marfa distrusă în limita a 8.33 DST/kg (sau conform clauzelor negociate). Polița CASCO Flotă plătește reparația sau dauna totală a camionului și a semiremorcii, iar clauza de asistență rutieră decontează cheltuielile de tractare și repatriere din străinătate.",
    uninsurableAspects: "Conducerea sub influența alcoolului de către șofer sau conducerea fără atestat profesional valabil atrage refuzul plății CASCO și regresul asigurătorului RCA.",
    mitigationSteps: [
      "Asigură-te că polița CASCO conține clauza de 'Tractare și Repatriere Camion din Străinătate' cu o limită de minimum 15.000 – 30.000 EUR.",
      "Instruiește șoferii privind ancorarea corectă a mărfii conform standardului EN 12195.",
      "Verifică dacă proprietarul mărfurilor scumpe (electronice, cafea) a contractat și o poliță CARGO proprie.",
    ],
    legalBasis: "Convenția referitoare la contractul de transport internațional de mărfuri pe șosele (Convenția CMR, Geneva 1956).",
  },

  // 6. Atac Ransomware baze de date criptate
  {
    id: "ransomware-baze-date-criptate",
    slug: "ce-se-intampla-daca-un-atac-ransomware-cripteaza-serverele-companiei",
    question: "Ce se întâmplă dacă un atac ransomware criptează toate datele și serverele companiei?",
    shortAnswer: "Activitatea se oprește complet, apar riscuri majore de litigii din partea clienților și investigații de la ANSPDCP. O poliță Cyber Risk trimite experți în forensics IT, avocați de criză, acoperă restaurarea datelor și despăgubirile civile cerute de terți.",
    detailedAnalysis: "Un atac ransomware modern nu doar că blochează accesul la fișiere prin criptare puternică, dar utilizează tehnica dublei extorcări (Double Extortion): atacatorii descarcă în prealabil bazele de date confidențiale (date clienți, contracte, date medicale, contabilitate) și amenință cu publicarea lor pe 'Dark Web' dacă nu se plătește o recompensă de sute de mii de euro. Conform GDPR, ai obligația legală strictă de a notifica ANSPDCP în maximum 72 de ore de la conștientizarea breșei.",
    immediateImpact: [
      "Imposibilitatea facturării, livrării și accesării emailului sau programelor ERP/contabile pe zile sau săptămâni întregi.",
      "Amenzi administrative aplicate de ANSPDCP de până la 20.000.000 EUR sau 4% din cifra de afaceri globală.",
      "Litigii intentate de clienți pentru scurgerea secretelor lor comerciale sau datelor personale.",
    ],
    insuranceIntervention: "Polița de Cyber Risk activează echipa de răspuns la incidente (Incident Response Team) disponibilă 24/7: experți în criminalistică digitală care identifică sursa breșei, negociatori certificați, avocați GDPR și specialiști în recuperarea datelor din backup-uri. De asemenea, polița compensează pierderea de profit a companiei pe durata opririi sistemelor.",
    uninsurableAspects: "Plata oricărei răscumpărări către entități aflate pe listele internaționale de sancțiuni antiteroriste este interzisă prin lege. De asemenea, conform ordinii publice române (Legea 236/2018), amenzile administrative aplicate de ANSPDCP nu pot fi asigurate legal (se asigură doar costurile de apărare, investigațiile IT și despăgubirile civile pretinse de terți).",
    mitigationSteps: [
      "Implementează autentificarea multifactor (MFA) obligatorie pe toate conturile și conexiunile VPN.",
      "Păstrează copii de siguranță offline (Cold Backup) sau imutabile (WORM) deconectate complet de la rețea.",
      "Instruiește angajații periodic împotriva tehnicilor de inginerie socială și phishing.",
    ],
    legalBasis: "Regulamentul (UE) 2016/679 (GDPR, Art. 33 Notificarea breșelor) & Directiva (UE) 2022/2555 (NIS 2).",
  },

  // 7. Produs fabricat care rănește un consumator
  {
    id: "produs-defect-ranire-consumator",
    slug: "ce-se-intampla-daca-un-produs-fabricat-sau-importat-raneste-un-consumator",
    question: "Ce se întâmplă dacă un produs fabricat sau importat de mine rănește un consumator final?",
    shortAnswer: "Răspunzi obiectiv conform Legii 240/2004 fără a fi nevoie ca victima să dovedească greșeala ta. Polița de Răspundere a Producătorului (Product Liability) acoperă despăgubirile și apărarea.",
    detailedAnalysis: "În legislația europeană și română, răspunderea pentru produse cu defecte este o răspundere obiectivă (strict liability): persoana vătămată trebuie să demonstreze doar paguba, defectul produsului și legătura de cauzalitate dintre acestea, fără a trebui să demonstreze o culpă sau neglijență din partea fabricii. Dacă ești importator din afara Uniunii Europene (de exemplu aduci produse din China), ești asimilat legal producătorului și răspunzi în mod egal.",
    immediateImpact: [
      "Obligația de a plăti spitalizarea, intervențiile chirurgicale, protezele și daunele morale stabilite de instanță.",
      "Decizia obligatorie a ANPC de retragere imediată de la comercializare a întregului lot de produse periculoase.",
      "Daune reputaționale majore care pot distruge brandul companiei pe piață.",
    ],
    insuranceIntervention: "Polița de Răspundere a Producătorului (Product Liability) preia plata tuturor despăgubirilor materiale și morale datorate consumatorului, suportă costurile expertizelor tehnice de laborator și onorariile avocaților de apărare în instanțele civile.",
    uninsurableAspects: "Costul de producție al bunului defect în sine nu este acoperit (polița acoperă daunele produse de bun, nu calitatea intrinsecă a bunului).",
    mitigationSteps: [
      "Păstrează evidența strictă a certificatelor de calitate și declarațiilor de conformitate ale materiilor prime.",
      "Tipărește instrucțiuni de utilizare clare și avertismente explicite privind utilizarea neconformă a produsului.",
      "Contractează o poliță Product Liability cu clauză de teritorialitate extinsă dacă vinzi la export.",
    ],
    legalBasis: "Legea nr. 240/2004 privind răspunderea producătorilor pentru pagubele generate de produsele cu defecte.",
  },

  // 8. Eroare de programare sau consultanță
  {
    id: "eroare-programare-it-pierdere-financiara",
    slug: "ce-se-intampla-daca-o-eroare-it-sau-de-consultanta-provoaca-pierderi-unui-client",
    question: "Ce se întâmplă dacă o eroare de programare sau de consultanță provoacă o pierdere financiară masivă unui client?",
    shortAnswer: "Clientul te va acționa în judecată pentru 'prejudiciu financiar pur' și încălcarea contractului. O poliță de Tech E&O sau Răspundere Profesională acoperă pierderile clientului.",
    detailedAnalysis: "În serviciile digitale și intelectuale, daunele nu sunt de natură fizică (nu se sparg geamuri și nu sunt răniți oameni). Dauna este pur financiară: din cauza unui bug într-o aplicație de e-commerce, comenzile au fost procesate la 10% din preț; sau o firmă de consultanță fiscală a omis un termen de depunere, generând pierderea unei facilități de milioane de lei. Polițele standard de incendiu sau răspundere terți NU acoperă prejudiciile financiare pure.",
    immediateImpact: [
      "Clientul reține facturile curente și emite somație de plată pentru întregul prejudiciu calculat.",
      "Litigiu arbitral sau judiciar în instanțe internaționale (dacă clientul este din SUA/UE conform contractului).",
      "Rezilierea contractului-cadru și pierderea drepturilor pe proiect.",
    ],
    insuranceIntervention: "Polița de Răspundere Profesională IT (Tech E&O) sau Professional Indemnity acoperă sumele imputate pentru eșecul software-ului, nerespectarea specificațiilor tehnice sau neglijența profesională, inclusiv cheltuielile cu avocați internaționali.",
    uninsurableAspects: "Garanțiile comerciale voluntare prin care ai promis în contract un rezultat imposibil sau o reducere a prețului fără legătură cu o culpă tehnică.",
    mitigationSteps: [
      "Include întotdeauna în contractul B2B o clauză de plafonare a răspunderii (Cap on Liability) egală cu valoarea contractului sau a poliței.",
      "Exclude în contract 'Daunele indirecte și pierderea de profit sperat' (Consequential / Indirect Damages).",
      "Încheie o poliță E&O cu limită adaptată contractelor semnate.",
    ],
    legalBasis: "Codul Civil Român (Art. 1530 - Prejudiciul previzibil în răspunderea contractuală).",
  },

  // 9. Grindină peste parc fotovoltaic
  {
    id: "grindina-panouri-parc-fotovoltaic",
    slug: "ce-se-intampla-daca-grindina-sparge-panourile-unui-parc-fotovoltaic",
    question: "Ce se întâmplă dacă grindina sparge panourile dintr-un parc fotovoltaic?",
    shortAnswer: "Parcul suferă distrugeri vizibile și microfisuri invizibile, iar producția de energie se oprește. Polița Solar PV All Risks despăgubește modulele noi și pierderea de venit din energie.",
    detailedAnalysis: "Panourile solare sunt testate standard pentru grindină de 25 mm, însă fenomenele extreme generate de schimbările climatice aduc boabe de 40-60 mm cu energie cinetică devastatoare. Chiar și panourile care nu au sticla spartă complet pot prezenta microfisuri în celulele de siliciu, care duc la scăderea dramatică a producției și puncte fierbinți (hotspots) ce riscă să ia foc.",
    immediateImpact: [
      "Oprirea parțială sau totală a parcului fotovoltaic din motive de securitate electrică.",
      "Pierderea contractului de furnizare energie sau penalități de dezechilibru către Transelectrica.",
      "Banca finanțatoare solicită măsuri urgente de conservare a valorii garanției ipotecare.",
    ],
    insuranceIntervention: "Polița tehnică Solar PV All Risks acoperă costul de achiziție al panourilor noi Tier 1, manopera de înlocuire, structura metalică deformată și costul expertizelor cu drone/electroluminescență. Secțiunea Loss of Revenue acoperă contravaloarea megawaților neproduși conform curbei PVsyst.",
    uninsurableAspects: "Degradarea naturală a performanței modulelor din cauza vechimii (Light-Induced Degradation).",
    mitigationSteps: [
      "Instalează senzori meteo și sisteme de trackere cu funcție automată de 'Hail Stow' (înclinare la 60-70° pentru a reduce unghiul de impact al grindinei).",
      "Alege panouri de calitate (sticlă-sticlă / double glass) mai rezistente mecanic.",
      "Asigură parcul pe o poliță dedicată All Risks care să includă clauza de Loss of Revenue.",
    ],
    legalBasis: "Normativele tehnice ANRE & Ghidul Asociației Române a Industriei Fotovoltaice (RPIA).",
  },

  // 10. Executare abuzivă garanție de bună execuție
  {
    id: "executare-abuziva-garantie-executie",
    slug: "ce-se-intampla-daca-un-partener-executa-abuziv-o-garantie-de-buna-executie",
    question: "Ce se întâmplă dacă un partener comercial execută abuziv o garanție de bună execuție?",
    shortAnswer: "Dacă ai emis garanția printr-o bancă, banca plătește necondiționat din contul tău. Dacă folosești o garanție de asigurare, asigurătorul analizează obiecțiunile și poate refuza plata dacă există o ordonanță președințială.",
    detailedAnalysis: "În contractele mari de construcții sau achiziții publice, beneficiarii încearcă uneori să execute garanția de bună execuție din motive pur financiare sau dispute de șantier care nu țin de culpa reală a constructorului. La o Scrisoare de Garanție Bancară clasică, banca plătește 'la prima cerere și necondiționat', retrăgând banii instantaneu din conturile tale sau din linia de credit.",
    immediateImpact: [
      "Pierderea imediată a lichidităților dacă garanția era bancară (cash collateral retras).",
      "Blocarea cash-flow-ului necesar finalizării celorlalte proiecte în derulare.",
      "Necesitatea inițierii unui proces de durată pentru recuperarea plății nedatorate.",
    ],
    insuranceIntervention: "În cazul unei Garanții de Asigurare (Surety Bond), deși este la prima cerere, asigurătorul analizează cu atenție motivele invocate de beneficiar și îți oferă un interval de timp pentru a obține o Ordonanță Președințială de la Tribunal prin care instanța suspendă temporar plata garanției în caz de abuz vădit.",
    uninsurableAspects: "Dacă beneficiarul execută garanția justificat (pentru că ai abandonat șantierul sau ai livrat lucrări inutilizabile), asigurătorul plătește și se îndreaptă în regres împotriva firmei tale prin biletul la ordin avalizat.",
    mitigationSteps: [
      "Înlocuiește garanțiile bancare cu Garanții Contractuale de Asigurare pentru a evita blocarea directă a banilor din cont.",
      "Documentează fiecare etapă de lucrări prin procese-verbale de recepție parțială semnate de dirigintele de șantier.",
      "Formulează contestații scrise imediate la orice notificare nejustificată a beneficiarului.",
    ],
    legalBasis: "Legea nr. 98/2016 privind achizițiile publice & Codul de Procedură Civilă (Ordonanța Președințială).",
  },

  // 11. Administrator dat în judecată (D&O)
  {
    id: "administrator-dat-in-judecata-do",
    slug: "ce-se-intampla-daca-administratorul-este-dat-in-judecata-de-asociati-sau-lichidator",
    question: "Ce se întâmplă dacă administratorul este dat în judecată de asociați sau de lichidatorul judiciar?",
    shortAnswer: "Răspunzi cu întreaga avere personală (casă, mașini, conturi private) dacă instanța dispune atragerea răspunderii. Polița D&O achită onorariile avocaților de apărare și eventualele despăgubiri civile.",
    detailedAnalysis: "Conform Legii societăților nr. 31/1990 și Legii insolvenței nr. 85/2014 (art. 169), dacă firma ajunge în incapacitate de plată sau dacă asociații consideră că managementul a comis greșeli grave, se poate cere atragerea răspunderii patrimoniale directe a administratorului. Separația dintre patrimoniul SRL-ului și patrimoniul persoanei fizice este înlăturată prin hotărâre judecătorească, executorul putând pune sechestru pe bunurile personale ale managerului.",
    immediateImpact: [
      "Blocarea conturilor bancare personale prin popriri asigurătorii dispuse de instanță.",
      "Onorarii avocațiale masive (deseori zeci de mii de euro) pentru procese complexe de insolvență ce durează 2-4 ani.",
      "Risc major de a-ți pierde economiile de o viață pentru decizii de management contestate ulterior.",
    ],
    insuranceIntervention: "Polița D&O (Directors and Officers Liability) protejează patrimoniul personal al managerului: plătește direct facturile avocaților specializați pe tot parcursul procesului și preia plata despăgubirilor civile stabilite de instanță în sarcina administratorului (cu excepția faptelor penale intenționate).",
    uninsurableAspects: "Faptele de delapidare, evaziune fiscală penală sau corupție consfințite prin hotărâri judecătorești penale definitive.",
    mitigationSteps: [
      "Documentează fiecare decizie strategică mare prin procese-verbale ale Adunării Generale a Asociaților (AGA).",
      "Solicită descărcarea anuală de gestiune la aprobarea situațiilor financiare.",
      "Încheie o poliță D&O la numirea în funcția de administrator sau director executiv.",
    ],
    legalBasis: "Legea nr. 31/1990 privind societățile comerciale & Legea nr. 85/2014 privind insolvența (Art. 169).",
  },

  // 12. Poluare accidentală curs de apă / teren
  {
    id: "poluare-accidentala-mediu",
    slug: "ce-se-intampla-daca-firma-polueaza-accidental-un-teren-sau-curs-de-apa",
    question: "Ce se întâmplă dacă firma mea poluează accidental un curs de apă sau un teren învecinat?",
    shortAnswer: "Principiul european 'Poluatorul plătește' te obligă să cureți și să refaci mediul natural, la costuri ce pot ajunge la sute de mii de euro. Asigurarea de mediu (EIL) decontează lucrările de decontaminare ecologică.",
    detailedAnalysis: "În baza OUG 195/2005 privind protecția mediului și OUG 68/2007 privind răspunderea de mediu, dacă o cuvă de stocare de combustibil se sparge sau o scurgere chimică ajunge în pânza freatică sau într-un râu, compania este obligată să suporte costul complet de neutralizare, forare de puțuri de monitorizare și reconstrucție a ecosistemului acvatic distrus.",
    immediateImpact: [
      "Garda Națională de Mediu și Apele Române aplică măsuri de urgență și amenzi de până la 100.000 lei.",
      "Obligația de a contracta de urgență companii autorizate de decontaminare a solului și apei.",
      "Procese civile deschise de proprietarii terenurilor vecine sau de fermele afectate de apa poluată.",
    ],
    insuranceIntervention: "Polița de Răspundere pentru Daune de Mediu (Environmental Impairment Liability - EIL) acoperă cheltuielile de curățare pe propriul amplasament (on-site) și pe proprietățile terților (off-site), costurile de refacere a biodiversității și apărarea juridică împotriva pretențiilor autorităților de mediu.",
    uninsurableAspects: "Poluarea treptată istorică cunoscută de dinaintea încheierii poliței sau depășirea asumată a limitelor din autorizația de mediu.",
    mitigationSteps: [
      "Instalează cuve de retenție etanșe cu capacitate de 110% sub toate rezervoarele de carburanți și chimicale.",
      "Menține stocuri de materiale absorbante (baraje plutitoare, pulberi absorbante) gata de intervenție rapidă.",
      "Încheie o poliță EIL adaptată profilului chimic sau industrial al activității tale.",
    ],
    legalBasis: "OUG nr. 195/2005 privind protecția mediului & OUG nr. 68/2007 privind răspunderea de mediu cu privire la prevenirea și repararea prejudiciului adus mediului.",
  },
];
