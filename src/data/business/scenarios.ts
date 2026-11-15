import { ClaimScenario } from "./types";

export const CLAIM_SCENARIOS: ClaimScenario[] = [
  // 1. Incendiu hală depozitare retail
  {
    id: "scenariu-incendiu-depozit-retail",
    slug: "incendiu-depozit-marfuri-retail",
    title: "Incendiu devastator într-un depozit regional de mărfuri retail",
    industry: "Retail și comerț",
    industrySlug: "retail-si-comert",
    shortSummary: "Scurtcircuit la tabloul de distribuție electrică urmat de distrugerea stocurilor și a structurii halei logistice.",
    triggerEvent: "În noaptea de duminică spre luni, un scurtcircuit produs la tabloul electric principal de iluminat al halei a aprins paleții de lemn stivuiți în apropiere. Focul s-a propagat rapid la cutiile de carton și materialele textile depozitate.",
    concreteDamages: [
      "Distrugerea a 1.200 mp de hală din panouri sandwich și deformarea structurii metalice (cost refacere: 650.000 EUR)",
      "Pierderea integrală a stocurilor de electrocasnice și haine depozitate pe rafturi (valoare de achiziție: 820.000 EUR)",
      "Cheltuieli de debarasare a molozului, decontaminare și neutralizare deșeuri (45.000 EUR)",
      "Oprirea activității de distribuție timp de 4 luni, cu pierderea marjei brute comerciale (280.000 EUR)",
    ],
    partiesInvolved: [
      "Compania proprietară a mărfii și operatoare a depozitului",
      "Proprietarul halei închiriate (fond de investiții imobiliare)",
      "Clienții B2B ale căror comenzi ferme nu au mai putut fi onorate",
      "Inspectoratul pentru Situații de Urgență (ISU) și asigurătorul",
    ],
    relevantPolicies: [
      "Property All Risks — Secțiunea Clădire & Amenajări",
      "Property All Risks — Secțiunea Stocuri de Marfă",
      "Răspunderea Civilă a Chiriașului (Tenant's Liability)",
      "Business Interruption (Pierderea de profit din exploatare)",
    ],
    claimsProcessSteps: [
      "1. Apel de urgență la 112 și intervenția pompierilor militari ISU pentru localizarea și stingerea incendiului.",
      "2. Notificarea asigurătorului în termenul contractual prevăzut în poliță (uzual 24 – 48 de ore) și deschiderea numărului de dosar de daună.",
      "3. Inspecția comună la fața locului a inspectorului de daune și a expertului tehnic judiciar desemnat.",
      "4. Obținerea Procesului-Verbal de Intervenție de la ISU cu menționarea cauzei probabile de incendiu (scurtcircuit electric).",
      "5. Prezentarea evidenței contabile a stocurilor din sistemul ERP (balanță analitică la data de vineri anterioară incendiului).",
      "6. Aprobarea devizelor de debarasare și emiterea unui avans de despăgubire pentru asigurarea continuității operațiunilor.",
    ],
    criticalChecks: [
      "Verificarea existenței autorizației de securitate la incendiu (ISU) valabile pentru destinația de depozit.",
      "Verificarea buletinelor de verificare PRAM (măsurarea rezistenței de dispersie a prizei de pământ și a continuității nulului de protecție) emise în ultimele 12 luni.",
      "Verificarea registrului de mentenanță a instalației de hidranți interiori și a pompelor de incendiu.",
      "Compararea valorilor stocurilor din declarațiile periodice către asigurător cu datele din contabilitate.",
    ],
    trapsAndExclusions: [
      "Regula proporțională (Sub-asigurare): Dacă stocul real din depozit valora 1.200.000 EUR, dar compania declarase o sumă asigurată de doar 600.000 EUR pentru a plăti o primă mai mică, despăgubirea se reduce automat cu 50% la toate daunele parțiale!",
      "Lipsa verificării PRAM valabile poate conduce la imputarea culpei grave și la refuzul sau diminuarea plății.",
      "Depozitarea mărfurilor combustibile la o distanță mai mică de 1 metru de tabloul electric (nerespectarea normativelor ISU).",
    ],
    requiredDocuments: [
      "Procesul-verbal de intervenție și raportul de cercetare întocmit de ISU.",
      "Cartea tehnică a halei și contractul de închiriere/proprietate.",
      "Balanța mijloacelor fixe și registrul inventar al stocurilor la zi, certificat de conducerea financiară.",
      "Buletinele PRAM pentru instalația electrică și contractul de mentenanță stingătoare/hidranți.",
      "Devizele ofertate de companiile de construcții pentru demolarea și reconstrucția halei.",
    ],
    educationalDisclaimer: "Acest scenariu este strict educativ și reflectă proceduri uzuale de instrumentare a daunelor comerciale pe piața din România. Fiecare dosar de daună este guvernat exclusiv de termenii, condițiile specifice și excluderile stipulate în contractul de asigurare încheiat.",
  },

  // 2. Incident toxic HoReCa (intoxicație alimentară)
  {
    id: "scenariu-toxiinfectie-restaurant",
    slug: "toxiinfectie-alimentara-restaurant-eveniment",
    title: "Toxiinfecție alimentară colectivă la un eveniment festiv de 200 de persoane",
    industry: "HoReCa și ospitalitate",
    industrySlug: "horeca-si-ospitalitate",
    shortSummary: "Contaminare bacteriană cu Salmonella la un desert pe bază de ouă servit la o gală corporativă găzduită de un restaurant.",
    triggerEvent: "În cadrul unui eveniment de gală cu 200 de invitați, o cremă de prăjituri preparată din ouă proaspete a fost păstrată timp de 4 ore la temperatura ambientală de 26°C. În următoarele 24-48 de ore, 65 de invitați au prezentat simptome severe de gastroenterită, iar 18 dintre ei au fost internați la spitalul de boli infecțioase.",
    concreteDamages: [
      "Facturi medicale, cheltuieli de transport cu ambulanța și costuri de spitalizare privată/publică (38.000 EUR)",
      "Venituri pierdute ale persoanelor internate pe durata incapacității temporare de muncă (22.000 EUR)",
      "Daune morale solicitate de invitați prin avocați aleși (85.000 EUR)",
      "Suspendarea activității restaurantului timp de 14 zile de către DSP/ANSVSA pentru igienizare completă și teste microbiologice",
    ],
    partiesInvolved: [
      "Restaurantul / operatorul de catering",
      "Compania client care a contractat evenimentul de gală",
      "Persoanele vătămate (participanții spitalizați)",
      "Direcția de Sănătate Publică (DSP) și ANSVSA",
      "Asigurătorul de Răspundere a Producătorului și Furnizorului de Alimente",
    ],
    relevantPolicies: [
      "Răspunderea pentru Produse Alimentare (Food Poisoning Extension la RCG)",
      "Răspundere Civilă Generală față de Terți",
      "Protecție Juridică și Asigurare de Apărare",
    ],
    claimsProcessSteps: [
      "1. Notificarea imediată a asigurătorului la primirea primei reclamații scrise sau vizite a autorităților sanitare.",
      "2. Punerea la dispoziția DSP a probelor martor de mâncare păstrate la frigider (obligatoriu conform normelor sanitare).",
      "3. Colectarea certificatelor medicale de externare și a dovezilor de spitalizare ale păgubiților.",
      "4. Negocierea amiabilă a tranzacțiilor extrajudiciare între asigurător și avocații victimelor.",
    ],
    criticalChecks: [
      "Păstrarea probelor de mâncare martor timp de 48 de ore la temperatura de +2...+4°C, etichetate conform normativelor.",
      "Verificarea fișelor de aptitudine medicală ale bucătarilor și a cursurilor de igienă valabile.",
      "Existența procedurilor HACCP (Hazard Analysis Critical Control Point) implementate și respectate.",
    ],
    trapsAndExclusions: [
      "Aruncarea mâncării sau lipsa probelor martor poate determina asigurătorul să considere culpa neprobată sau să invoce neglijența gravă a conducerii.",
      "Amenzile contravenționale aplicate de DSP sau ANSVSA nu sunt asigurabile conform legii române.",
    ],
    requiredDocuments: [
      "Procesul-verbal de control și sancționare emis de DSP / DSVSA.",
      "Biletele de ieșire din spital și scrisorile medicale ale consumatorilor vătămați.",
      "Manualul HACCP, fișele de temperatură ale camerelor frigorifice din ziua respectivă.",
      "Contractul de prestări servicii pentru eveniment și meniul semnat de beneficiar.",
    ],
    educationalDisclaimer: "Acest scenariu este strict educativ. Fiecare dosar de daună depinde de respectarea normelor sanitar-veterinare și de prevederile specifice din condițiile generale de asigurare.",
  },

  // 3. Avarie utilaj greu pe șantier
  {
    id: "scenariu-rasturnare-macara-santier",
    slug: "rasturnare-macara-mobila-santier",
    title: "Răsturnarea unei macarale mobile de 80 de tone pe un șantier rezidențial",
    industry: "Construcții și dezvoltări imobiliare",
    industrySlug: "constructii-si-dezvoltari-imobiliare",
    shortSummary: "Cedarea terenului de sub o cală de sprijin a macaralei mobile în timpul ridicării unui element prefabricat de beton.",
    triggerEvent: "Pe un șantier de blocuri noi, în timpul manevrei de poziționare a unei grinzi prefabricate de 14 tone, solul din jurul săpăturii adiacente a cedat din cauza ploilor recente. Macaraua mobilă s-a înclinat brusc și s-a răsturnat pe o parte, brațul telescopic prăbușindu-se peste un gard și pe acoperișul unei case vecine.",
    concreteDamages: [
      "Avarierea totală a brațului telescopic și a coroanei de rotire a macaralei (daună de 220.000 EUR)",
      "Distrugerea acoperișului și mansardei locuinței vecine (estimare reparații: 95.000 EUR)",
      "Avarierea a două autoturisme parcate pe strada alăturată (daune cumulate de 35.000 EUR)",
      "Costul operațiunii speciale de dezechipare și repunere pe roți cu două macarale grele de intervenție (28.000 EUR)",
    ],
    partiesInvolved: [
      "Compania proprietară a macaralei (subcontractor de utilaje)",
      "Antreprenorul general al șantierului de construcții",
      "Proprietarul locuinței vecine afectate și proprietarii autovehiculelor",
      "Inspectoratul Teritorial de Muncă (ITM) și ISCIR",
      "Asigurătorul CAR și asigurătorul de utilaje de șantier (CPM)",
    ],
    relevantPolicies: [
      "CPM (Contractor's Plant and Machinery) — Asigurarea Utilajelor de Șantier",
      "CAR (Contractor's All Risks) — Secțiunea II: Răspundere Civilă Față de Terți",
      "CASCO Utilaje Speciale",
    ],
    claimsProcessSteps: [
      "1. Verificarea stării operatorului de macara și securizarea perimetrului de către pompieri și poliție.",
      "2. Sesizarea ISCIR și ITM conform legii accidentelor tehnice pe șantiere.",
      "3. Notificarea asigurătorilor (CAR al antreprenorului și CPM al deținătorului utilajului).",
      "4. Întocmirea planului de ridicare de către o firmă autorizată de salvare utilaje grele.",
      "5. Deschiderea dosarului de daună terți pentru acoperișul casei vecine și mașinile avariate.",
    ],
    criticalChecks: [
      "Autorizația ISCIR valabilă a macaralei și carnetul de manevrant vizat la zi al macaragiului.",
      "Planul de ridicare a sarcinii (Lifting Plan) întocmit și aprobat de șeful de șantier.",
      "Respectarea capacității maxime admise conform diagramei de sarcină a macaralei la raza de acțiune respectivă.",
      "Utilizarea tălpilor de repartizare a presiunii (cale de lemn/oțel) sub picioarele hidraulice.",
    ],
    trapsAndExclusions: [
      "Depășirea sarcinii maxime admise (Overload) anulează automat despăgubirea pe majoritatea condițiilor de asigurare CPM!",
      "Operarea utilajului de către o persoană fără calificare autorizată ISCIR.",
      "Lucrul pe vânt puternic peste limitele admise de producătorul utilajului.",
    ],
    requiredDocuments: [
      "Cartea tehnică ISCIR a utilajului și raportul ultimei revizii tehnice oficiale.",
      "Autorizația de manevrant macara a operatorului.",
      "Procesul-verbal de cercetare întocmit de comisia tehnică / ITM / ISCIR.",
      "Devizul de reparație al casei vecine și devizul de piese de schimb pentru macara.",
    ],
    educationalDisclaimer: "Scenariul are scop exclusiv ilustrativ. Despăgubirile pentru utilaje de mare tonaj depind strict de respectarea cărții tehnice ISCIR și de clauzele speciale de terți din contract.",
  },

  // 4. Atac Ransomware companie IT / Servicii
  {
    id: "scenariu-ransomware-companie-servicii",
    slug: "atac-ransomware-baze-date-criptate",
    title: "Atac ransomware cu dublă extorcare asupra unei companii de servicii B2B",
    industry: "IT, software și servicii digitale",
    industrySlug: "it-software-si-servicii-digitale",
    shortSummary: "Infiltrare prin credențiale VPN compromise, criptarea serverelor ERP și amenințarea cu publicarea datelor confidențiale ale clienților.",
    triggerEvent: "Un atacator cibernetic a obținut parola VPN a unui colaborator extern prin phishing. După ce a petrecut 11 zile în rețeaua internă (dwell time), a dezactivat backup-urile online și a criptat 14 servere virtuale, lăsând o notă de răscumpărare prin care cerea 250.000 USD în Bitcoin pentru cheia de decriptare.",
    concreteDamages: [
      "Costul angajării unei echipe de răspuns la incidente cibernetice și criminalistică digitală (45.000 EUR)",
      "Onorariile avocaților specializați în legislația protecției datelor (GDPR) și asistență juridică (25.000 EUR)",
      "Oprirea totală a facturării și livrării de servicii timp de 6 zile (pierdere de venit operațional: 70.000 EUR)",
      "Costuri de reconstrucție a sistemelor din backup-urile offline vechi și reintroducere manuală a datelor (32.000 EUR)",
      "Investigație din partea Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)",
    ],
    partiesInvolved: [
      "Compania atacată (operator de date)",
      "Clienții B2B ale căror date financiare și contractuale au fost accesate de hackeri",
      "Autoritatea Națională de Supraveghere a Prelucrării Datelor (ANSPDCP) și DNSC",
      "Echipa de Incident Response și asigurătorul de Cyber Risk",
    ],
    relevantPolicies: [
      "Cyber Risk & Data Breach — Secțiunea Incident Response & Forensics",
      "Cyber Business Interruption (Întreruperea activității cauzată de atac cibernetic)",
      "Răspunderea față de terți pentru securitatea datelor (Third-Party Privacy Liability)",
    ],
    claimsProcessSteps: [
      "1. Apelarea liniei de urgență 24/7 a asigurătorului Cyber Risk în primele 2 ore de la depistare.",
      "2. Conectarea imediată a echipei globale de criminalistică digitală acreditată de asigurător.",
      "3. Notificarea autorității de reglementare (ANSPDCP) în termenul legal strict de 72 de ore conform art. 33 din GDPR.",
      "4. Negocierea tehnică și izolarea punctului inițial de acces (Patient Zero).",
      "5. Decontarea directă a costurilor de investigație și restaurare prin intermediul poliței de asigurare.",
    ],
    criticalChecks: [
      "Verificarea dacă compania avea activată autentificarea cu doi factori (MFA) pe toate conexiunile VPN la data atacului (condiție de validitate în polițele Cyber).",
      "Existența backup-urilor izolate (offline, imutabile sau cloud separat).",
      "Instalarea la timp a patch-urilor critice de securitate comunicate de furnizorii de software.",
    ],
    trapsAndExclusions: [
      "Lipsa MFA pe conexiunile de la distanță poate conduce la respingerea integrală a dosarului dacă era prevăzută ca cerință minimă de securitate la subscriere!",
      "Plata oricărei răscumpărări fără acordul expres al asigurătorului și fără verificarea conformității internaționale cu sancțiunile OFAC/UE.",
    ],
    requiredDocuments: [
      "Raportul complet de investigație criminalistică digitală (Forensic Report) întocmit de firma de securitate.",
      "Dovada notificării transmise către ANSPDCP și raportul final de remediere.",
      "Facturile detaliate de ore de consultanță IT externă și reparații echipamente.",
      "Documentele contabile care atestă cifra de afaceri pierdută pe zilele de oprire.",
    ],
    educationalDisclaimer: "Acest scenariu este strict educativ. Incidente cibernetice reale impun cooperare imediată cu autoritățile statului (DNSC, ANSPDCP) și specialiști certificați.",
  },

  // 5. Răspundere profesională contabil (penalități ANAF)
  {
    id: "scenariu-eroare-contabil-penalitati-anaf",
    slug: "eroare-declarare-tva-penalitati-anaf",
    title: "Eroare de deducere a TVA la o achiziție imobiliară cu decizie de impunere ANAF",
    industry: "Servicii profesionale",
    industrySlug: "servicii-profesionale",
    shortSummary: "Aplicarea greșită a taxării inverse la achiziția unei hale comerciale, ducând la stabilirea de diferențe de taxe, dobânzi și penalități de nedeclarare.",
    triggerEvent: "O societate de contabilitate a aplicat eronat regimul de taxare inversă pentru achiziția unei proprietăți de la o firmă aflată într-un regim special, fără a verifica dacă vânzătorul depusese opțiunea de taxare conform Codului Fiscal. În urma unei inspecții fiscale derulate doi ani mai târziu, ANAF a respins deducerea și a emis o decizie de impunere cu sume retroactive.",
    concreteDamages: [
      "Dobânzi și penalități de întârziere stabilite de ANAF imputate de client contabilului (48.000 lei)",
      "Penalitatea de nedeclarare de 0.08% pe zi conform Codului de Procedură Fiscală (26.000 lei)",
      "Onorariile avocatului fiscal angajat pentru formularea contestației administrative (15.000 lei)",
    ],
    partiesInvolved: [
      "Cabinetul / societatea de contabilitate și expertiză fiscală",
      "Clientul comercial (compania inspectată de Fisc)",
      "Agenția Națională de Administrare Fiscală (ANAF)",
      "Asigurătorul de Răspundere Profesională a Contabililor (CECCAR/CCF)",
    ],
    relevantPolicies: [
      "Răspundere Civilă Profesională pentru Contabili și Experți Fiscali",
      "Protecție Juridică Fiscală",
    ],
    claimsProcessSteps: [
      "1. Clientul transmite societății de contabilitate Raportul de Inspecție Fiscală (RIF) și Decizia de Impunere.",
      "2. Societatea de contabilitate notifică asigurătorul în termen de 3 zile lucrătoare.",
      "3. Asigurătorul analizează opinia fiscală emisă și contractul de prestări servicii contabile.",
      "4. Se redactează contestația administrativă către DGRFP cu sprijinul experților desemnați.",
      "5. Dacă decizia rămâne definitivă, asigurătorul achită penalitățile și dobânzile imputate clientului.",
    ],
    criticalChecks: [
      "Existența calității de membru activ CECCAR sau Camera Consultanților Fiscali (CCF) cu cotizațiile plătite.",
      "Respectarea Datei Retroactive din poliță (fapta profesională comisă în urmă cu doi ani trebuie să cadă în perioada acoperită).",
      "Contractul de prestări servicii contabile semnat și anexele cu atribuțiile exacte asumate.",
    ],
    trapsAndExclusions: [
      "Impozitul de bază propriu-zis (TVA-ul datorat) NU este despăgubit de asigurare, deoarece acesta era o obligație firească a clientului; polița despăgubește exclusiv DAUNA suplimentară (penalitățile, dobânzile și costurile de apărare)!",
      "Frauda conștientă sau evaziunea fiscală este exclusă categoric.",
    ],
    requiredDocuments: [
      "Decizia de impunere și Raportul de Inspecție Fiscală emis de ANAF.",
      "Contractul de prestări servicii de evidență contabilă dintre părți.",
      "Dovada plății penalităților sau somația de executare silită primită de client.",
      "Polița de răspundere profesională cu toate anexele de prelungire continuă.",
    ],
    educationalDisclaimer: "Scenariul este strict educațional. În asigurările profesionale, asigurătorul nu preia datoria fiscală principală a firmei, ci doar prejudiciul generat de culpă (majorări, dobânzi, penalități).",
  },

  // 6. Furt marfă din camion (CMR)
  {
    id: "scenariu-furt-marfa-cmr-parcare",
    slug: "furt-marfa-camion-parcare-franta",
    title: "Furt de produse electronice dintr-un autotren oprit într-o parcare de autostradă în Franța",
    industry: "Transport, logistică și depozitare",
    industrySlug: "transport-logistica-si-depozitare",
    shortSummary: "Tăierea prelatei și sustragerea a 18 paleți de laptopuri în timpul efectuării pauzei de odihnă a șoferului.",
    triggerEvent: "Un autotren românesc încărcat cu produse electronice pe ruta Olanda – Spania a oprit pe timp de noapte într-o parcare de pe autostrada A1 din Franța pentru efectuarea repausului zilnic obligatoriu de 9 ore. Hoții au tăiat prelata din spate și au descărcat 18 paleți de laptopuri și tablete fără ca șoferul să audă.",
    concreteDamages: [
      "Valoarea comercială de factură a mărfii furate: 320.000 EUR",
      "Greutatea brută a mărfii furate: doar 2.100 kg",
      "Limita legală de răspundere a cărăușului conform Convenției CMR (8.33 DST/kg): aproximativ 25.000 EUR",
      "Litigiu între proprietarul mărfii și transportator pentru diferența de 295.000 EUR",
    ],
    partiesInvolved: [
      "Compania de transport rutier de marfă din România",
      "Casa de expediții internațională",
      "Proprietarul mărfii (distribuitor multinațional de tehnologie)",
      "Poliția franceză (Jandarmeria Națională)",
      "Asigurătorul CMR și asigurătorul de CARGO",
    ],
    relevantPolicies: [
      "Asigurarea de Răspundere a Cărăușului Rutier (CMR)",
      "Polița CARGO a proprietarului mărfii (Toate Riscurile conform Institut Cargo Clauses A)",
    ],
    claimsProcessSteps: [
      "1. Șoferul constată furtul dimineața și apelează imediat serviciile de poliție franceze la numărul 112.",
      "2. Se obține procesul-verbal de plângere (Déclaration de vol) de la secția de jandarmerie locală.",
      "3. Șoferul formulează mențiunea de furt pe scrisoarea de trăsură CMR și fotografiază prelata tăiată.",
      "4. Compania de transport notifică asigurătorul CMR în maximum 48 de ore.",
      "5. Asigurătorul verifică respectarea 'Clauzei de Parcări Păzite' (Safe Parking Clause).",
    ],
    criticalChecks: [
      "Verificarea dacă parcarea unde s-a produs incidentul figura în lista parcărilor securizate agreate de asigurător (clasificare TAPA TSR sau ESPORG).",
      "Verificarea datelor din tahograful digital pentru a confirma că oprirea a fost generată de respectarea timpilor legali de conducere (Regulamentul CE 561/2006).",
      "Verificarea integrității sigiliului vamal / al expeditorului.",
    ],
    trapsAndExclusions: [
      "Clauza de Parcări Păzite: Dacă polița exclude furtul pe timpul nopții din parcări neiluminate sau nepăzite, asigurătorul CMR poate refuza integral plata!",
      "Dacă proprietarul mărfii dovedește că șoferul a lăsat camionul descuiat sau s-a abătut de la traseu fără justificare, se poate invoca culpa gravă (Art. 29 CMR), anulând limita de 8.33 DST/kg.",
    ],
    requiredDocuments: [
      "Scrisoarea de trăsură CMR originală cu rezervele consemnate.",
      "Dovada plângerii la poliția din țara unde s-a comis furtul (Proces-verbal oficial).",
      "Datele descărcate din tahograful digital și coordonatele GPS ale vehiculului.",
      "Factura comercială a mărfii și lista de ambalare (packing list).",
    ],
    educationalDisclaimer: "Scenariul ilustrează diferența critică dintre răspunderea limitată CMR (pe kilogram) și valoarea reală a mărfii. Proprietarii de bunuri scumpe trebuie să dețină asigurare CARGO proprie.",
  },

  // 7. Grindină parc fotovoltaic
  {
    id: "scenariu-grindina-parc-fotovoltaic",
    slug: "grindina-distrugere-panouri-parc-fotovoltaic",
    title: "Grindină gigant și furtună violentă peste un parc solar de 10 MW",
    industry: "Energie, utilități și instalații fotovoltaice",
    industrySlug: "energie-utilitati-si-instalatii-fotovoltaice",
    shortSummary: "Furtună supercelulară cu boabe de grindină de 5 cm care sparg sticla a peste 4.000 de module și produc microfisuri masive.",
    triggerEvent: "O furtună violentă de vară cu grindină de mărimea unei mingi de golf a lovit direct perimetrul unui parc fotovoltaic la sol de 10 MW din Câmpia Română. Viteza vântului a depășit 110 km/h, iar grindina a căzut cu intensitate extremă timp de 20 de minute.",
    concreteDamages: [
      "Spargerea completă a sticlei călite frontale pentru 4.200 de panouri fotovoltaice (daună directă: 390.000 EUR)",
      "Microfisuri interne la alte 2.500 de panouri nedetectabile vizual, dar care duc la pierdere de randament și pericol de arc electric (cost înlocuire: 230.000 EUR)",
      "Avarierea structurii de aluminiu a 12 mese solare din cauza rafalelor de vânt (45.000 EUR)",
      "Pierderea de venit din energia electrică injectată în rețea pe o perioadă de 6 săptămâni de reparații (85.000 EUR)",
    ],
    partiesInvolved: [
      "Dezvoltatorul / compania operatoare a parcului fotovoltaic",
      "Banca finanțatoare a parcului (beneficiar al cesiunii poliței de asigurare)",
      "Firma contractată de mentenanță și operare (O&M Provider)",
      "Distribuitorul regional de energie electrică (OD) și Transelectrica",
      "Asigurătorul Solar PV All Risks",
    ],
    relevantPolicies: [
      "Solar PV Operational All Risks (Secțiunea Bunuri Fizice)",
      "Business Interruption / Loss of Revenue (Pierderea de Venit din Energie)",
    ],
    claimsProcessSteps: [
      "1. Oprirea secțiunilor de panouri compromise din dispeceratul SCADA pentru a preveni incendiile generate de arcuri electrice.",
      "2. Notificarea asigurătorului și a băncii creditoare în termenul contractual prevăzut în contract (uzual 24 – 48 de ore).",
      "3. Inspecția fizică a inspectorului de daune și contractarea unui laborator independent pentru teste de electroluminescență.",
      "4. Comandarea lotului de panouri de schimb de la un producător Tier 1 compatibil tehnic cu invertoarele existente.",
      "5. Decontarea pierderii de venit pe baza datelor de iradiere solară din săptămânile respective comparate cu curba PVsyst.",
    ],
    criticalChecks: [
      "Certificarea panourilor conform standardului internațional IEC 61215 (rezistență la impactul cu grindină de 25 mm la viteza de 23 m/s).",
      "Executarea testelor de electroluminescență (EL testing) și termografie în infraroșu pentru panourile aparent intacte.",
      "Verificarea poziționării unghiului panourilor în timpul furtunii (dacă sistemul avea trackere cu funcție de 'Hail Stow').",
    ],
    trapsAndExclusions: [
      "Înlocuirea doar a panourilor cu sticla spartă vizibil și refuzul testelor pentru celulele microfisurate intern poate genera incendii ulterioare neasigurate!",
      "Nedeclararea prețului corect de vânzare al energiei din contractul bilateral (PPA) la stabilirea sumei asigurate pe pierdere de venit.",
    ],
    requiredDocuments: [
      "Buletinul meteorologic oficial eliberat de Administrația Națională de Meteorologie (ANM) pentru zona respectivă.",
      "Raportul de audit tehnic și imaginile de electroluminescență efectuate pe eșantioane reprezentative de panouri.",
      "Facturile de achiziție și devizul de manoperă pentru demontarea și remontarea noilor panouri.",
      "Datele telemetrice din sistemul SCADA privind producția orară pierdută.",
    ],
    educationalDisclaimer: "Acest scenariu este strict educativ. Parcurile fotovoltaice mari necesită expertize complexe de electroluminescență pentru evaluarea integrală a daunei.",
  },

  // 8. Efracție și furt stoc magazin bijuterii / lux
  {
    id: "scenariu-efractie-furt-bijuterii",
    slug: "efractie-spargere-magazin-bunuri-valoare",
    title: "Furt prin efracție pe timp de noapte într-un magazin de produse de lux",
    industry: "Retail și comerț",
    industrySlug: "retail-si-comert",
    shortSummary: "Pătrundere prin forțarea ruloului metalic, spargerea vitrinelor securizate și sustragerea mărfurilor din magazin în mai puțin de 3 minute.",
    triggerEvent: "La ora 03:15, o echipă de trei spărgători a tăiat încuietorile grilajului metalic exterior, a spart ușa de sticlă a magazinului cu un berbec manual și a sustras din vitrine 85 de ceasuri de lux și bijuterii din aur, părăsind locația înainte de sosirea echipajului firmei de intervenție rapidă.",
    concreteDamages: [
      "Valoarea de achiziție a ceasurilor și bijuteriilor sustrase: 165.000 EUR",
      "Distrugerea grilajului exterior, a ușii de acces și a vitrinelor interioare securizate (14.000 EUR)",
      "Înlocuirea sistemului de alarmă și a camerelor video vandalizate (4.500 EUR)",
    ],
    partiesInvolved: [
      "Compania proprietară a magazinului de bijuterii",
      "Firma privată de securitate și monitorizare/intervenție rapidă",
      "Poliția Română — Serviciul de Investigații Criminale",
      "Asigurătorul de Bunuri și Valori",
    ],
    relevantPolicies: [
      "Asigurarea de Bunuri împotriva Furtului prin Efracție și Tâlhărie",
      "Asigurarea Specializată a Valorilor (Jewellers' Block)",
    ],
    claimsProcessSteps: [
      "1. Declanșarea alarmei la dispecerat și sosirea echipajului de intervenție și a Poliției.",
      "2. Conservarea probelor criminalistice (amprente, înregistrări video) de către echipa de criminaliști.",
      "3. Notificarea asigurătorului în termenul stipulat contractual în poliță (uzual 24 de ore în caz de furt) și efectuarea inventarului stocului rămas.",
      "4. Punerea la dispoziție a certificatelor de garanție și seriilor unice ale ceasurilor furate pentru introducerea în baza de date a Poliției.",
    ],
    criticalChecks: [
      "Verificarea respectării 'Clauzei de Seif pe timp de Noapte' (Safe Clause): bunurile de valoare mare trebuiau depozitate în seiful certificat antiefracție după închiderea programului, conform poliței!",
      "Timpul de reacție al firmei de pază comparat cu termenul asumat prin contractul de intervenție (uzual max. 3-5 minute pe timp de noapte).",
      "Omologarea grilajelor metalice și a sticlei antiefracție conform claselor de rezistență EN 1627 / EN 356.",
    ],
    trapsAndExclusions: [
      "Nerespectarea clauzei de seif: Dacă asiguratul a lăsat ceasuri scumpe în vitrina exterioară peste noapte, deși polița impunea retragerea lor în seif blindat, dauna poate fi respinsă integral sau limitată la o sublimită derizorie!",
      "Lipsa conectării funcționale a sistemului de alarmă la dispecerat în momentul spargerii.",
    ],
    requiredDocuments: [
      "Dovada depunerii plângerii penale și confirmarea începerii urmăririi penale de la Poliție.",
      "Raportul de eveniment emis de dispeceratul firmei de monitorizare și intervenție.",
      "Registrul de gestiune a stocurilor și certificatele cu seriile unice ale bunurilor furate.",
      "Certificatele de conformitate ale sistemului de alarmă și ale seifului utilizat.",
    ],
    educationalDisclaimer: "Scenariul are caracter exclusiv informativ. Bunurile de mare valoare (bijuterii, metale prețioase) necesită condiții tehnice de securitate foarte stricte menționate expres în contract.",
  },

  // 9. Avarie compresor frigorific și alterare stocuri alimentare
  {
    id: "scenariu-avarie-frigider-alterare-stoc",
    slug: "defectare-agregat-frigorific-stocuri-alterate",
    title: "Defectarea agregatului frigorific al unui depozit de carne congelată",
    industry: "Producție și industrie",
    industrySlug: "productie-si-industrie",
    shortSummary: "Fisurarea conductei de freon a compresorului central urmată de creșterea temperaturii și degradarea a 40 de tone de carne.",
    triggerEvent: "În timpul unui weekend canicular, compresorul principal al unei camere frigorifice industriale a suferit o vibrație excesivă ce a dus la fisurarea conductei de agent frigorific și pierderea completă a gazului de răcire. Senzorul de alarmă GSM a eșuat din cauza unei pene de comunicație, iar temperatura din cameră a crescut de la -18°C la +12°C pe parcursul a 36 de ore.",
    concreteDamages: [
      "Alterarea ireversibilă a 42 de tone de carne congelată conform constatării medicului veterinar (valoare stoc: 135.000 EUR)",
      "Costul neutralizării și incinerării stocului compromis la o unitate autorizată Protan (18.000 EUR)",
      "Reparația compresorului și reîncărcarea instalației cu agent frigorific (8.500 EUR)",
    ],
    partiesInvolved: [
      "Producătorul / distribuitorul de carne și produse congelate",
      "Direcția Sanitară Veterinară și pentru Siguranța Alimentelor (DSVSA)",
      "Firma contractată de mentenanță a instalației frigorifice",
      "Asigurătorul de Bunuri și Avarii Utilaje",
    ],
    relevantPolicies: [
      "Deterioration of Stock in Cold Storage (Alterarea Mărfurilor în Spații Frigorifice)",
      "Machinery Breakdown (Avarii Accidentale ale Echipamentelor Frigorifice)",
    ],
    claimsProcessSteps: [
      "1. Convocarea de urgență a inspectorului DSVSA pentru prelevarea de probe și emiterea dispoziției de carantinare a stocului.",
      "2. Notificarea asigurătorului și descărcarea graficului de temperatură din înregistratorul automat (data-logger).",
      "3. Constatarea avariei mecanice a compresorului de către tehnicianul de frig autorizat.",
      "4. Întocmirea procesului-verbal de denaturare și predare la unitatea de incinerare.",
    ],
    criticalChecks: [
      "Dovada că alterarea a fost provocată DIRECT de o avarie mecanică sau electrică acoperită a instalației frigorifice (nu de deconectarea intenționată a curentului).",
      "Existența contractului de mentenanță preventivă periodică semnat cu o firmă specializată de frigotehnie.",
      "Înregistrările continue de temperatură (termodiagrame) din ultimele 30 de zile.",
    ],
    trapsAndExclusions: [
      "Alterarea mărfurilor cauzată de încărcarea lor în camera frigorifică la o temperatură inițială neconformă.",
      "Lipsa clauzei specifice de Alterare a Mărfurilor în Frigidere (Deterioration of Stock) — polița standard de incendiu nu acoperă acest risc!",
    ],
    requiredDocuments: [
      "Raportul tehnic de constatare a defecțiunii compresorului întocmit de firma de service frigotehnic.",
      "Termodiagramele descărcate din memoria sistemului de monitorizare a temperaturii.",
      "Actul sanitar-veterinar de declarare a mărfii ca improprie consumului uman emis de DSVSA.",
      "Documentele de predare-primire și facturile de neutralizare de la incinerator.",
    ],
    educationalDisclaimer: "Acest scenariu este strict educativ. Asigurarea alterării stocurilor perisabile este o clauză tehnică specială adițională poliței de bunuri.",
  },

  // 10. Malpraxis clinică medicală privată
  {
    id: "scenariu-malpraxis-clinica-privata",
    slug: "malpraxis-complicatie-chirurgicala-clinica",
    title: "Complicație chirurgicală post-operatorie și infecție nosocomială într-o clinică privată",
    industry: "Sănătate, farmacie și servicii conexe",
    industrySlug: "sanatate-farmacie-si-servicii-conexe",
    shortSummary: "Acuzație de culpă medicală combinată cu infecție contractată în blocul operator, urmată de acțiune în instanță împotriva clinicii.",
    triggerEvent: "O pacientă operată laparoscopic într-o clinică privată a dezvoltat la 48 de ore post-operator o peritonită acută cauzată de o leziune nesesizată intra-operator a peretelui intestinal, complicată ulterior cu o infecție nosocomială cu bacterie multirezistentă. Pacienta a necesitat două reintervenții de urgență și 25 de zile de terapie intensivă.",
    concreteDamages: [
      "Costurile tratamentelor medicale de urgență și spitalizării suplimentare (42.000 EUR)",
      "Compensații pentru prejudiciu estetic și invaliditate temporară (60.000 EUR)",
      "Daune morale solicitate de familie prin instanță (150.000 EUR)",
      "Onorarii de avocați și expertize medico-legale efectuate de INML (18.000 EUR)",
    ],
    partiesInvolved: [
      "Clinica medicală privată (furnizor de servicii sanitare)",
      "Medicul chirurg și medicul anestezist (persoane fizice)",
      "Pacienta vătămată și familia acesteia",
      "Colegiul Medicilor din România și Institutul Național de Medicină Legală (INML)",
      "Asigurătorul de Malpraxis Medical al Clinicii și al Medicului",
    ],
    relevantPolicies: [
      "Asigurarea de Răspundere Civilă Medicală pentru Unități Sanitare (Legea 95/2006)",
      "Asigurarea Individuală de Malpraxis a Medicului",
      "Protecție Juridică Medicală",
    ],
    claimsProcessSteps: [
      "1. Primirea notificării prealabile de la avocatul pacientei și deschiderea dosarului de daună la asigurător.",
      "2. Colectarea foii de observație clinice complete, a protocolului operator și a consimțământului informat.",
      "3. Sesizarea Comisiei de Malpraxis din cadrul Direcției de Sănătate Publică conform procedurii legale.",
      "4. Evaluarea raportului medico-legal de către comisia de experți a asigurătorului.",
      "5. Apărarea în instanță sau încheierea unei tranzacții amiabile omologate de judecător.",
    ],
    criticalChecks: [
      "Existența formularului complet de 'Consimțământ Informat' semnat olograf de pacient anterior intervenției chirurgicale, detaliind riscurile specifice.",
      "Verificarea conformității protocoalelor de sterilizare a aerului și instrumentarului din blocul operator.",
      "Valabilitatea avizelor anuale de liberă practică ale echipei chirurgicale.",
    ],
    trapsAndExclusions: [
      "Lipsa consimțământului informat explicit sau un formular generic nespecificat anulează apărarea în instanță în majoritatea cazurilor de culpă medicală!",
      "Efectuarea de manopere chirurgicale pentru care clinica nu deținea autorizație sanitară emisă de Ministerul Sănătății.",
    ],
    requiredDocuments: [
      "Foaia de observație clinică generală și fișa de anestezie.",
      "Formularul de consimțământ informat semnat de pacientă.",
      "Raportul de expertiză medico-legală emis de INML.",
      "Polițele de asigurare de malpraxis ale unității sanitare și ale medicilor implicați.",
    ],
    educationalDisclaimer: "Scenariul este strict educațional. Litigiile medicale în România sunt de competența instanțelor de judecată și a comisiilor de disciplină ale Colegiului Medicilor.",
  },

  // 11. Inundație magazin mall dintr-o conductă spartă
  {
    id: "scenariu-inundatie-magazin-mall",
    slug: "conducta-sparta-inundatie-magazin-mall",
    title: "Ruperea unei conducte de apă la etaj și inundarea magazinelor din mall",
    industry: "Retail și comerț",
    industrySlug: "retail-si-comert",
    shortSummary: "Fisurarea unei conducte principale de apă menajeră în timpul nopții, infiltrându-se în plafonul și mărfurile a trei magazine învecinate.",
    triggerEvent: "La etajul 1 al unui centru comercial, racordul flexibil al unui boiler dintr-o cafenea a cedat sub presiune la ora 02:00. Apa a curs necontrolată timp de 4 ore, infiltrându-se prin planșeu în tavanul fals al unui magazin de îmbrăcăminte situat la parter, distrugând hainele expuse pe rafturi și parchetul laminat.",
    concreteDamages: [
      "Stocuri de haine și încălțăminte pătate și degradate iremediabil (valoare stoc: 85.000 EUR)",
      "Distrugerea tavanului din gips-carton, a corpurilor de iluminat LED și a podelei (24.000 EUR)",
      "Oprirea activității magazinului inundat timp de 10 zile pentru curățenie și reamenajare (15.000 EUR)",
    ],
    partiesInvolved: [
      "Chiriașul de la parter (magazinul inundat)",
      "Chiriașul de la etaj (cafeneaua unde a cedat conducta)",
      "Administrația centrului comercial (Proprietarul clădirii)",
      "Asigurătorii de Răspundere Civilă și Bunuri ai celor două părți",
    ],
    relevantPolicies: [
      "Răspundere Civilă Generală a Cafenelei (clauza de daune aduse bunurilor terților)",
      "Property All Risks a Magazinului Inundat (clauza de curgere a apei din conducte)",
      "Renunțare la dreptul de regres (Waiver of Subrogation) din contractul de închiriere",
    ],
    claimsProcessSteps: [
      "1. Intervenția serviciului tehnic al mall-ului pentru oprirea robinetului de secționare.",
      "2. Întocmirea procesului-verbal de constatare de către administrația centrului comercial.",
      "3. Notificarea asigurătorului magazinului păgubit și a asigurătorului cafenelei vinovate.",
      "4. Inventarierea hainelor avariate și separarea celor ce pot fi salvate prin curățătorie chimică.",
      "5. Decontarea pagubei pe polița proprie de bunuri, urmată de regresul asigurătorului împotriva cafenelei.",
    ],
    criticalChecks: [
      "Verificarea clauzelor contractuale de închiriere: dacă există renunțare reciprocă la regres între chiriași.",
      "Constatarea exactă a piesei defecte (racord flexibil vs. coloană comună a mall-ului) pentru stabilirea vinovăției.",
      "Dovada valorii de achiziție a stocurilor prin facturi de la furnizori.",
    ],
    trapsAndExclusions: [
      "Dacă defectul aparținea coloanei generale a clădirii (nu a instalației interioare a cafenelei), răspunderea revine proprietarului mall-ului, nu chiriașului!",
      "Aruncarea mărfurilor ude înainte de vizionarea lor de către inspectorul de daune.",
    ],
    requiredDocuments: [
      "Procesul-verbal încheiat de administrația mall-ului cu fotografii.",
      "Factura de înlocuire a racordului spart și raportul instalatorului.",
      "Listele de inventar ale mărfurilor afectate cu prețuri de cost.",
    ],
    educationalDisclaimer: "Scenariul este strict educațional. În spațiile comerciale comune, delimitarea răspunderii între chiriaș și administrația clădirii depinde de contractul de închiriere.",
  },

  // 12. D&O: Litigiu între asociați și atragerea răspunderii administratorului
  {
    id: "scenariu-do-atragere-raspundere",
    slug: "litigiu-actionari-raspundere-administrator-do",
    title: "Atragerea răspunderii patrimoniale a directorului general de către acționarii minoritari",
    industry: "IT, software și servicii digitale",
    industrySlug: "it-software-si-servicii-dial-actionari",
    shortSummary: "Proces intentat de asociații minoritari împotriva CEO-ului pentru o tranzacție comercială considerată dezavantajoasă companiei.",
    triggerEvent: "Acționarii minoritari ai unei companii de software au deschis o acțiune în răspundere civilă împotriva Directorului General (CEO) conform Art. 155 din Legea 31/1990, susținând că semnarea unui contract de exclusivitate cu un distribuitor internațional a adus prejudicii societății prin vânzarea sub prețul pieței, solicitând obligarea acestuia la plata din patrimoniul personal a 400.000 EUR.",
    concreteDamages: [
      "Onorariile avocaților de litigii corporative pentru reprezentarea personală a CEO-ului pe parcursul a doi ani de proces (45.000 EUR)",
      "Costul expertizelor financiare și de evaluare economică a tranzacției dispuse de instanță (12.000 EUR)",
      "Riscul instituirii de sechestru asigurător pe conturile și proprietățile personale ale managerului",
    ],
    partiesInvolved: [
      "Directorul General (CEO) dat în judecată în nume personal",
      "Grupul de acționari reclamanți",
      "Societatea comercială",
      "Asigurătorul de D&O (Directors & Officers Liability)",
    ],
    relevantPolicies: [
      "D&O (Directors and Officers Liability Insurance) — Secțiunea Side A (Protecție Patrimoniu Personal)",
      "Costuri de apărare juridică pentru manageri",
    ],
    claimsProcessSteps: [
      "1. CEO-ul primește cererea de chemare în judecată comunicată de Tribunal și o înaintează în 48h asigurătorului D&O.",
      "2. Asigurătorul confirmă acoperirea cheltuielilor de apărare conform termenilor poliței.",
      "3. Se aprobă echipa de avocați specializați aleși de manager.",
      "4. Asigurătorul decontează eșalonat onorariile pe măsură ce dosarul parcurge etapele judiciare.",
    ],
    criticalChecks: [
      "Verificarea dacă decizia contestată a fost luată cu respectarea Regulii Judecății de Afaceri (Business Judgment Rule).",
      "Lipsa oricărei fraude penale sau a unui conflict de interese nedeclarat în procesul decizional.",
      "Valabilitatea datei retroactive din polița D&O.",
    ],
    trapsAndExclusions: [
      "Obținerea deliberată a unui folos material personal necuvenit exclude automat acoperirea.",
      "Litigiile inițiate între membrii consiliului sau de asociați majoritari dacă polița are clauza restrictivă 'Insured vs. Insured'.",
    ],
    requiredDocuments: [
      "Cererea de chemare în judecată și încheierile de ședință ale instanței.",
      "Hotărârea AGA de numire a administratorului și contractul de mandat.",
      "Procesele-verbale ale ședințelor Consiliului de Administrație unde s-a discutat tranzacția.",
      "Facturile de asistență juridică emise de casa de avocatură.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Protecția D&O intervine pentru apărările managerilor în decizii comerciale eronate de bună-credință, excluzând faptele penale.",
  },

  // 13. Lovire conductă de gaz subterană pe șantier
  {
    id: "scenariu-conducta-gaz-santier",
    slug: "secționare-magistrala-gaz-santier-car",
    title: "Secționarea unei magistrale de gaz subterane în timpul unor săpături de canalizare",
    industry: "Construcții și dezvoltări imobiliare",
    industrySlug: "constructii-si-dezvoltari-imobiliare",
    shortSummary: "Un excavator a lovit o conductă de gaz de medie presiune, generând evacuarea zonei și costuri uriașe de oprire și remediere.",
    triggerEvent: "În timpul săpăturilor pentru rețeaua de canalizare a unui nou ansamblu rezidențial, cupa excavatorului a agățat și rupt o conductă de gaz din polietilenă care nu figura pe planul de situație pus la dispoziție de primărie. Scurgerea masivă de gaz a impus intervenția de urgență a pompierilor, blocarea traficului pe un bulevard și evacuarea a 300 de locatari din blocurile din apropiere timp de 6 ore.",
    concreteDamages: [
      "Factura emisă de operatorul de distribuție a gazelor pentru remedierea conductei și pierderea de gaz metan (28.000 EUR)",
      "Costul intervenției forțelor de ordine și al serviciilor de urgență (6.000 EUR)",
      "Revendicări ale magazinelor din zonă pentru întreruperea activității comerciale pe durata alertei (12.000 EUR)",
    ],
    partiesInvolved: [
      "Antreprenorul de construcții / lucrări edilitare",
      "Operatorul rețelei de distribuție a gazelor naturale (ex: Delgaz Grid / Distrigaz)",
      "Autoritățile locale și Inspectoratul pentru Situații de Urgență",
      "Asigurătorul CAR (Secțiunea Răspundere Civilă)",
    ],
    relevantPolicies: [
      "CAR (Contractor's All Risks) — Secțiunea II (Răspundere Civilă Față de Terți)",
      "Clauza specială pentru Rețele și Conducte Subterane (Underground Cables and Pipes Clause)",
    ],
    claimsProcessSteps: [
      "1. Oprirea imediată a motorului utilajului pentru a evita aprinderea gazului și apel la 112.",
      "2. Izolarea perimetrului de către echipajele ISU și oprirea gazului de către echipa de intervenție a distribuitorului.",
      "3. Notificarea asigurătorului CAR și prezentarea autorizației de construire și a avizelor de utilități.",
      "4. Negocierea procesului-verbal de despăgubire cu compania de distribuție a gazelor.",
    ],
    criticalChecks: [
      "Existența Avizului de Amplasament emis de compania de gaz înainte de începerea săpăturilor.",
      "Efectuarea sondajelor manuale de verificare înaintea utilizării excavatorului mecanizat.",
      "Existența în polița CAR a clauzei exprese pentru cabluri și conducte subterane.",
    ],
    trapsAndExclusions: [
      "Săpătura mecanizată executată fără obținerea prealabilă a avizelor de utilități de la deținătorii de rețele constituie culpă gravă și atrage respingerea dosarului!",
      "Franșiza ridicată aplicată specific pentru avarierea rețelelor subterane (uzual 2.500 – 5.000 EUR).",
    ],
    requiredDocuments: [
      "Avizul tehnic de amplasament și planul de utilități vizat spre neschimbare.",
      "Procesul-verbal de constatare întocmit de operatorul de gaz.",
      "Procesul-verbal de cercetare al incidentului întocmit de ISU și Poliție.",
      "Factura detaliată a lucrărilor de reparație de urgență.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Lucrările în proximitatea utilităților subterane impun respectarea strictă a normelor tehnice și a avizelor de amplasament.",
  },

  // 14. Retragere produs din piață (Product Recall)
  {
    id: "scenariu-product-recall-alimentar",
    slug: "rechemare-lot-biscuiti-contaminare-corpuri-straine",
    title: "Rechemarea de pe piață a unui lot de produse de patiserie din cauza așchiilor metalice",
    industry: "Producție și industrie",
    industrySlug: "productie-si-industrie",
    shortSummary: "Ruperea unei site metalice la malaxorul de aluat a dus la contaminarea a 50.000 de pungi de biscuiți distribuite în lanțurile de hipermarketuri.",
    triggerEvent: "În cadrul unei fabrici de dulciuri, o sită din inox a malaxorului industrial s-a rupt, fragmente mici de sârmă ajungând în compoziția aluatului. Problema a fost descoperită după ce primele produse au fost livrate către patru lanțuri de retail naționale. Fabrica a fost obligată să declanșeze procedura de alertă rapidă prin SRAAF și retragerea de la raft a întregului lot.",
    concreteDamages: [
      "Costul colectării, transportului și distrugerii a 50.000 de pungi de biscuiți (35.000 EUR)",
      "Penalitățile contractuale facturate de hipermarketuri pentru gestionarea retragerii și spațiu blocat (40.000 EUR)",
      "Costurile campaniei de informare publică și anunțuri în presă cerute de ANSVSA (15.000 EUR)",
      "Valoarea de producție a mărfii distruse (28.000 EUR)",
    ],
    partiesInvolved: [
      "Fabrica producătoare de produse alimentare",
      "Rețelele de hipermarketuri și distribuitorii en-gros",
      "Autoritatea Națională Sanitară Veterinară și pentru Siguranța Alimentelor (ANSVSA)",
      "Asigurătorul de Răspundere a Producătorului cu clauză de Product Recall",
    ],
    relevantPolicies: [
      "Product Recall Insurance (Asigurarea Costurilor de Rechemare a Produselor)",
      "Product Liability (Răspunderea pentru Produse)",
    ],
    claimsProcessSteps: [
      "1. Inițierea retragerii voluntare și notificarea ANSVSA prin Sistemul Rapid de Alertă pentru Alimente și Furaje.",
      "2. Notificarea asigurătorului în termenul prevăzut contractual în poliță (uzual 24 – 48 de ore de la identificarea defectului).",
      "3. Transmiterea numerelor de lot și a listei magazinelor unde a ajuns marfa contaminată.",
      "4. Centralizarea mărfurilor returnate și întocmirea procesului-verbal de neutralizare.",
      "5. Rambursarea de către asigurător a cheltuielilor de transport, distrugere și publicitate.",
    ],
    criticalChecks: [
      "Existența clauzei dedicate de Product Recall (polița standard de răspundere a produsului NU acoperă cheltuielile de retragere, ci doar vătămările clienților!).",
      "Eficiența sistemului de trasabilitate pe loturi conform standardului IFS Food / ISO 22000.",
      "Decizia oficială a autorității sau recomandarea tehnică de retragere pentru evitarea riscului de rănire.",
    ],
    trapsAndExclusions: [
      "Retragerea de pe piață din motive pur comerciale (scăderea calității gustative fără pericol pentru sănătate) este exclusă.",
      "Valoarea comercială a profitului nerealizat din vânzarea biscuiților nu este de regulă acoperită.",
    ],
    requiredDocuments: [
      "Notificarea SRAAF și corespondența oficială cu inspectorii ANSVSA.",
      "Facturile firmelor de transport și ale centrelor de incinerare/distrugere ecologică.",
      "Dovezile publicării anunțurilor de rechemare pe site-urile de retail și în media.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Asigurarea de Product Recall este o poliță specializată esențială pentru companiile din industria alimentară și farmaceutică.",
  },

  // 15. Răspundere service auto: mașină căzută de pe elevator
  {
    id: "scenariu-cadere-masina-elevator-service",
    slug: "cadere-autoturism-elevator-service-auto",
    title: "Căderea unui SUV de lux de pe elevatorul hidraulic al unui service auto",
    industry: "Alte domenii de activitate",
    industrySlug: "alte-domenii-de-activitate",
    shortSummary: "Poziționarea incorectă a brațelor elevatorului a provocat alunecarea și căderea unui autovehicul de la 1.8 metri înălțime.",
    triggerEvent: "Un mecanic auto a poziționat brațele elevatorului asimetric sub un SUV de 2.5 tone lăsat pentru revizie. În timpul ridicării, la o înălțime de aproape 2 metri, mașina a alunecat de pe tampoanele de cauciuc și s-a prăbușit pe plafon, distrugând caroseria și avariind un banc de lucru din atelier.",
    concreteDamages: [
      "Dauna totală economică a SUV-ului clientului (valoare de piață: 65.000 EUR)",
      "Distrugerea bancului de scule și a unui aparat de diagnoză din atelier (8.500 EUR)",
    ],
    partiesInvolved: [
      "Proprietarul autoturismului lăsat în reparație",
      "Service-ul auto (persoana juridică operatoare)",
      "Inspectoratul Teritorial de Muncă (pentru verificarea siguranței muncii)",
      "Asigurătorul de Răspundere a Service-urilor Auto (Garage Liability)",
    ],
    relevantPolicies: [
      "Răspunderea Civilă a Service-urilor Auto (clauza Bunuri lăsate în lucru și custodie)",
      "Asigurarea de Bunuri a Service-ului (pentru sculele proprii avariate)",
    ],
    claimsProcessSteps: [
      "1. Asigurarea perimetrului și constatarea lipsei vătămărilor corporale ale mecanicilor.",
      "2. Notificarea proprietarului vehiculului și a asigurătorului de răspundere.",
      "3. Inspecția tehnică a elevatorului de către un expert tehnic ISCIR pentru excluderea unei defecțiuni a utilajului.",
      "4. Evaluarea epavei autoturismului și despăgubirea proprietarului cu valoarea de piață minus valoarea epavei.",
    ],
    criticalChecks: [
      "Existența autorizației RAR valabile pentru clasa de activitate respectivă a atelierului.",
      "Verificarea tehnică periodică ISCIR valabilă a elevatorului auto.",
      "Procesul-verbal de predare-primire a autoturismului semnat cu clientul la intrarea în service.",
    ],
    trapsAndExclusions: [
      "Efectuarea de reparații fără proces-verbal de primire în service sau fără comandă de lucru scrisă.",
      "Folosirea de elevatoare neautorizate sau cu revizia ISCIR expirată duce la refuzul despăgubirii.",
    ],
    requiredDocuments: [
      "Comanda de lucru și procesul-verbal de recepție a mașinii în service.",
      "Cartea tehnică a elevatorului cu viza ISCIR la zi.",
      "Certificatul de înmatriculare și cartea de identitate a vehiculului avariat.",
      "Raportul de evaluare a daunei totale întocmit de inspectorul asigurătorului.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Service-urile auto necesită clauze specifice pentru autovehiculele clienților aflate în incintă sau în probe de drum.",
  },

  // 16. Infiltrații apă și prăbușire tavan clădire istorică de birouri
  {
    id: "scenariu-infiltratii-tavan-cladire-istorica",
    slug: "infiltratii-pluviale-prabusire-tavan-istoric",
    title: "Prăbușirea tavanului din stucatură al unei clădiri istorice de birouri",
    industry: "Dezvoltare imobiliară, proprietari și administratori",
    industrySlug: "imobiliare-si-administrare-proprietati",
    shortSummary: "Infiltrarea apei pluviale prin jgheaburile înfundate a slăbit structura de lemn a planșeului, prăbușind stucatura decorativă peste birouri.",
    triggerEvent: "În urma unei ploi torențiale de toamnă, jgheaburile exterioare ale unui imobil istoric protejat de clasa B s-au revărsat. Apa a pătruns sub învelitoarea de tablă, umezind grinzile din lemn și stufitul planșeului. Două zile mai târziu, o porțiune de 30 mp de tavan decorativ din ipsos și stucatură s-a prăbușit peste birourile unei firme de consultanță chiriașe.",
    concreteDamages: [
      "Distrugerea a 12 laptopuri, monitoare și mobilier de birou de protocol (32.000 EUR)",
      "Costul restaurării tavanului istoric de către specialiști atestați de Ministerul Culturii (48.000 EUR)",
      "Chiria pierdută de proprietar pe durata lucrărilor de 3 luni de restaurare (18.000 EUR)",
    ],
    partiesInvolved: [
      "Proprietarul imobilului istoric",
      "Firma chiriașă de consultanță afectată",
      "Direcția pentru Cultură (pentru avizarea restaurării)",
      "Asigurătorul de Property All Risks și Răspundere a Proprietarului",
    ],
    relevantPolicies: [
      "Property All Risks pentru Clădiri de Patrimoniu / Istorice",
      "Răspunderea Civilă a Proprietarului Imobiliar față de Chiriași",
      "Loss of Rent (Pierderea Chiriilor)",
    ],
    claimsProcessSteps: [
      "1. Evacuarea birourilor și decuplarea circuitelor electrice din tavan.",
      "2. Convocarea unui expert atestat în restaurarea monumentelor istorice.",
      "3. Notificarea asigurătorului clădirii și a asigurătorului chiriașului.",
      "4. Întocmirea proiectului tehnic de restaurare aprobat de comisia de monumente.",
    ],
    criticalChecks: [
      "Dacă polița include clauza specifică de 'Monument Istoric / Materiale Tradiționale' (fără a impune înlocuirea cu gips-carton modern).",
      "Dovada curățării și întreținerii periodice a jgheaburilor și burlanelor de scurgere a apei.",
    ],
    trapsAndExclusions: [
      "Infiltrațiile lente repetate cauzate de lipsa cronică de întreținere a acoperișului sunt frecvent excluse dacă nu sunt legate de un eveniment meteorologic brusc.",
      "Sub-asigurarea: clădirile istorice au costuri de reconstrucție pe metru pătrat mult mai mari decât clădirile moderne din beton.",
    ],
    requiredDocuments: [
      "Cartea tehnică a imobilului și statutul de monument istoric.",
      "Devizul de restaurare întocmit de un restaurator acreditat de Ministerul Culturii.",
      "Facturile de achiziție ale calculatoarelor și mobilierului distrus aparținând chiriașului.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Asigurarea imobilelor istorice impune evaluări specializate ale costului de restaurare cu materiale de epocă.",
  },

  // 17. Incendiu combină agricolă în timpul recoltării
  {
    id: "scenariu-incendiu-combina-agricola",
    slug: "incendiu-combina-in-lanul-de-grau",
    title: "Incendiu total la o combină agricolă nouă de 350.000 EUR în timpul recoltării grâului",
    industry: "Agricultură, zootehnie și silvicultură",
    industrySlug: "agricultura-zootehnie-si-silvicultura",
    shortSummary: "Blocarea unui rulment la toba de batere a generat frecare și scântei, aprinzând praful vegetal și distrugând combina și 15 hectare de cultură.",
    triggerEvent: "În plină campanie de recoltare a grâului, la o temperatură de 38°C, un rulment al bătătorului combinei s-a gripat. Căldura generată a aprins paiele mărunțite din compartimentul motor. Flăcările au cuprins rapid întreaga combină și s-au extins la lanul de grâu uscat din jur, favorizate de vântul puternic.",
    concreteDamages: [
      "Distrugerea integrală a combinei agricole de mare capacitate (daună totală: 340.000 EUR)",
      "Mistuirea a 15 hectare de cultură de grâu nerecoltată (valoare recoltă: 18.000 EUR)",
    ],
    partiesInvolved: [
      "Societatea agricolă proprietară / utilizator în leasing",
      "Societatea de leasing finanțatoare (asigurat adițional)",
      "Pompierii voluntari (SVSU) și ISU județean",
      "Asigurătorul de Agro-CASCO și Asigurătorul de Culturi",
    ],
    relevantPolicies: [
      "Agro-CASCO (Asigurarea Mașinilor și Utilajelor Agricole)",
      "Asigurarea Culturilor Agricole (clauza de incendiu)",
    ],
    claimsProcessSteps: [
      "1. Utilizarea imediată a stingătoarelor de pe combină și apelul de urgență la 112.",
      "2. Realizarea unei brazde de protecție cu un tractor cu plug pentru a opri propagarea focului în lan.",
      "3. Obținerea procesului-verbal de la ISU cu menționarea focarului inițial.",
      "4. Notificarea asigurătorului CASCO Utilaje și transmiterea poziției GPS a utilajului ars.",
    ],
    criticalChecks: [
      "Dotarea combinei cu minimum două stingătoare omologate cu pulbere (tip P6/P9) cu verificarea anuală valabilă.",
      "Efectuarea curățării zilnice a compartimentului motor de praf vegetal și paie (suflare cu aer comprimat).",
      "Păstrarea epavei arse pentru inspectarea rulmenților și a instalației electrice de către expertul tehnic.",
    ],
    trapsAndExclusions: [
      "Lipsa stingătoarelor funcționale de pe utilaj atrage de regulă reducerea sau refuzul plății despăgubirii!",
      "Nerespectarea normelor de securitate la incendiu pe timpul campaniei de recoltare (lipsa tractorului cu plug pe marginea parcelei).",
    ],
    requiredDocuments: [
      "Procesul-verbal de intervenție și stingere a incendiului emis de ISU.",
      "Factura de achiziție sau contractul de leasing al utilajului.",
      "Dovada reviziei anuale a stingătoarelor de incendiu.",
      "Raportul de constatare întocmit de dealerul autorizat al mărcii de utilaje.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Asigurările de utilaje agricole impun respectarea normelor preventive obligatorii specifice campaniilor de recoltare.",
  },

  // 18. Colaps schelă de fațadă în timpul unei vijelii
  {
    id: "scenariu-colaps-schela-constructii",
    slug: "prabusire-schela-fatada-cladire-rezidentiala",
    title: "Prăbușirea unei schele metalice de 7 etaje peste mașinile parcate în timpul unei furtuni",
    industry: "Construcții și dezvoltări imobiliare",
    industrySlug: "constructii-si-dezvoltari-imobiliare",
    shortSummary: "Rafalele bruște de vânt au smuls ancorele de fațadă ale unei schele acoperite cu plasă de protecție, prăbușind-o pe carosabil.",
    triggerEvent: "Pe un șantier de anvelopare termică a unui bloc de locuințe, o schelă metalică modulară acoperită cu plasă de protecție împotriva prafului a fost smulsă din ancore de o vijelie cu rafale de 90 km/h. Schela s-a prăbușit pe carosabil, avariind grav 6 autoturisme parcate și distrugând rețeaua de iluminat public.",
    concreteDamages: [
      "Daune materiale la 6 autoturisme (valoare cumulată de reparații și daune totale: 78.000 EUR)",
      "Distrugerea elementelor de schelă și a termosistemului parțial montat (25.000 EUR)",
      "Refacerea stâlpilor și cablurilor de iluminat public (11.000 EUR)",
    ],
    partiesInvolved: [
      "Subcontractorul de fațade (montatorul schelei)",
      "Antreprenorul general al lucrărilor",
      "Proprietarii autovehiculelor avariate",
      "Primăria / Serviciul de iluminat public",
      "Asigurătorul CAR și asigurătorul de Răspundere Civilă a Constructorului",
    ],
    relevantPolicies: [
      "CAR (Contractor's All Risks) — Secțiunea II (Răspundere Civilă Față de Terți)",
      "Răspundere Civilă a Subcontractorului",
    ],
    claimsProcessSteps: [
      "1. Asigurarea zonei de către Poliția Rutieră și pompieri pentru deblocarea străzii.",
      "2. Notificarea asigurătorului CAR și deschiderea dosarelor de daună pentru fiecare proprietar de mașină.",
      "3. Inspecția tehnică a modului de ancorare a schelei și verificarea notei de calcul structural la vânt.",
      "4. Decontarea reparațiilor autoturismelor în service-uri partenere.",
    ],
    criticalChecks: [
      "Verificarea densității punctelor de ancorare a schelei în zidărie (conform cărții tehnice a schelei).",
      "Dacă plasa de protecție montată era de tip perforat pentru vânt sau dacă a creat efect de velă.",
      "Existența procesului-verbal de recepție a montajului schelei înainte de darea în exploatare.",
    ],
    trapsAndExclusions: [
      "Montarea unei plase impermeabile la vânt pe o schelă neancorată suplimentar constituie eroare tehnică de execuție.",
      "Dacă mașinile erau parcate în zona de protecție semnalizată cu 'Oprirea Interzisă - Pericol Șantier', instanța poate stabili culpă comună.",
    ],
    requiredDocuments: [
      "Cartea tehnică a schelei și procesul-verbal de montare/ancorare.",
      "Avertizarea meteorologică emisă de ANM pentru cod galben/portocaliu de vânt.",
      "Procesul-verbal de constatare întocmit de Poliția Rutieră cu datele mașinilor avariate.",
      "Devizele de reparație emise de service-urile auto ale păgubiților.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Montarea schelelor pe spațiul public impune autorizații și respectarea strictă a normelor de ancorare la vânt.",
  },

  // 19. Fraudă prin e-mail compromis (CEO Fraud / Invoice Scam)
  {
    id: "scenariu-ceo-fraud-transfer-fonduri",
    slug: "social-engineering-fraud-transfer-bancar",
    title: "Deturnarea a 120.000 EUR prin atac de tip Business Email Compromise (Invoice Scam)",
    industry: "IT, software și servicii digitale",
    industrySlug: "it-software-si-servicii-digitale",
    shortSummary: "Un atacator a interceptat comunicarea cu un furnizor extern de echipamente și a transmis o factură modificată cu un cont IBAN bancar fals.",
    triggerEvent: "Un departament financiar al unei companii de distribuție a primit pe email o factură proformă pentru un transport de echipamente din Germania. Atacatorii cibernetici obținuseră acces neautorizat la căsuța de email a furnizorului german, au interceptat lanțul de discuții și au trimis o factură identică grafic, modificând doar contul IBAN de încasare către o bancă din Marea Britanie. Contabila a efectuat plata de 120.000 EUR fără să verifice telefonic noul cont.",
    concreteDamages: [
      "Pierderea directă a sumei de 120.000 EUR transferate în contul fraudulos al atacatorilor",
      "Obligația de a plăti din nou factura reală către furnizorul german pentru a primi echipamentele",
    ],
    partiesInvolved: [
      "Compania păgubită din România",
      "Furnizorul extern din Germania a cărui mesagerie a fost compromisă",
      "Poliția Română — Serviciul de Combatere a Criminalității Informatice (DIICOT)",
      "Băncile comerciale implicate și asigurătorul de Commercial Crime",
    ],
    relevantPolicies: [
      "Commercial Crime / Fraudă Financiară (Secțiunea Social Engineering & Impersonation)",
      "Cyber Risk (clauza de Fraudă prin Transfer de Fonduri)",
    ],
    claimsProcessSteps: [
      "1. Alertarea de urgență a băncii plătitoare pentru blocarea fondurilor (cerere de recall bancar).",
      "2. Depunerea plângerii penale la DIICOT pentru acces neautorizat la un sistem informatic și înșelăciune.",
      "3. Notificarea asigurătorului de Commercial Crime în termenul prevăzut în poliță.",
      "4. Punerea la dispoziție a fișierelor originale de email (header-ele tehnice .eml) pentru analiza forensic.",
    ],
    criticalChecks: [
      "Verificarea respectării procedurii de 'Verificare la 4 Ochi' și 'Call-Back Protocol' (confirmarea telefonică independentă a schimbării IBAN-ului furnizorului la un număr cunoscut anterior).",
      "Existența clauzei specifice de 'Social Engineering / Fake Vendor Fraud' în polița de asigurare.",
    ],
    trapsAndExclusions: [
      "Majoritatea polițelor de Criminalitate Comercială exclud transferurile frauduloase dacă angajatul companiei NU a efectuat o confirmare telefonică (call-back) la numărul oficial al furnizorului înainte de efectuarea plății!",
      "Sublimitele pentru frauda de inginerie socială sunt adesea mult mai mici decât limita generală a poliței.",
    ],
    requiredDocuments: [
      "Mesajele de email integrale în format original (.eml) cu anteturile tehnice complete.",
      "Extrasul de cont bancar care atestă transferul și cererea oficială de recall transmisă băncii.",
      "Plângerea penală înregistrată la DIICOT / Poliție.",
      "Procedura internă scrisă de efectuare și aprobare a plăților bancare.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Prevenirea fraudelor de tip invoice scam depinde primordial de proceduri interne riguroase de verificare verbală a conturilor bancare.",
  },

  // 20. Alunecare de teren la o hală de producție nouă
  {
    id: "scenariu-alunecare-teren-hala-industriala",
    slug: "tasare-teren-alunecare-hala-industriala",
    title: "Fisurarea structurii unei hale industriale noi în urma unei alunecări de teren",
    industry: "Producție și industrie",
    industrySlug: "productie-si-industrie",
    shortSummary: "Ploile torențiale au reactivat o alunecare de versant în spatele unei hale nou construite, dislocând stâlpii de susținere și fisurând radierul.",
    triggerEvent: "În spatele unei platforme logistice nou amenajate pe un teren în pantă, ploile abundente au saturat solul argilos, provocând o alunecare de teren care a împins zidul de sprijin din beton. Forța pământului a dislocat trei stâlpi structurali ai halei de producție, ducând la fisurarea planșeului industrial și deformarea grinzilor de acoperiș.",
    concreteDamages: [
      "Lucrări geotehnice de consolidare a versantului cu piloți forați adânci (180.000 EUR)",
      "Demolarea parțială și refacerea stâlpilor și a radierului halei (140.000 EUR)",
      "Oprirea parțială a activității pe o perioadă de 3 luni pentru securizarea clădirii (75.000 EUR)",
    ],
    partiesInvolved: [
      "Proprietarul halei industriale",
      "Proiectantul structural și inginerul geotehnician",
      "Inspectoratul de Stat în Construcții (ISC)",
      "Asigurătorul de Bunuri (Property All Risks cu acoperire pentru catastrofe naturale)",
    ],
    relevantPolicies: [
      "Property All Risks (Secțiunea Alunecări și Prăbușiri de Teren)",
      "Răspunderea Profesională a Proiectantului Geotehnician",
      "Business Interruption",
    ],
    claimsProcessSteps: [
      "1. Evacuarea imediată a personalului din zona de risc și montarea martorilor de fisură.",
      "2. Convocarea comisiei de expertiză tehnică MLPAT și notificarea ISC.",
      "3. Deschiderea dosarului de daună catastrofică la asigurător.",
      "4. Elaborarea proiectului de consolidare de urgență a versantului.",
    ],
    criticalChecks: [
      "Verificarea studiului geotehnic inițial: dacă riscul de alunecare fusese identificat și dacă s-au respectat soluțiile de fundare recomandate.",
      "Existența autorizației de construire și a cărții tehnice complete a construcției.",
      "Aplicarea franșizei specifice pentru riscuri catastrofice (uzual 2% - 5% din suma asigurată).",
    ],
    trapsAndExclusions: [
      "Alunecările de teren cauzate de vicii de proiectare sau de săpături neautorizate efectuate fără aviz geotehnic pot fi excluse pe polița de clădire (îndreptându-se împotriva proiectantului).",
      "Terenurile aflate în zone declarate oficial cu interdicție de construire din motive geologice.",
    ],
    requiredDocuments: [
      "Studiul geotehnic și expertiza tehnică de rezistență întocmită de un expert atestat MLPAT.",
      "Procesul-verbal de constatare al ISC și autorizația de construire.",
      "Devizul complet de consolidare a terenului și refacere a halei.",
    ],
    educationalDisclaimer: "Scenariul este strict educativ. Asigurarea riscurilor geologice impune proiecte conforme normativelor seismice și geotehnice în vigoare.",
  },
];
