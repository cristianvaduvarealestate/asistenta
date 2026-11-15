import type { FlowId } from "./validation";

export type HelpCard = {
  id: FlowId;
  title: string;
  description: string;
  icon: "file" | "bell" | "book" | "search" | "scan" | "alert";
};

export const HELP_CARDS: HelpCard[] = [
  {
    id: "oferta",
    title: "Vreau o ofertă",
    description: "Spune-mi ce vrei să asiguri și discutăm despre variantele potrivite.",
    icon: "file",
  },
  {
    id: "aminteste",
    title: "Amintește-mi",
    description: "Nu uita de expirarea RCA-ului, CASCO, locuinței sau altor polițe.",
    icon: "bell",
  },
  {
    id: "explica",
    title: "Explică-mi polița",
    description: "Nu înțelegi o clauză, o excludere sau o condiție? Te ajut să o clarifici.",
    icon: "book",
  },
  {
    id: "acoperire",
    title: "Este asigurat?",
    description: "Descrie situația și află ce trebuie verificat în polița ta.",
    icon: "search",
  },
  {
    id: "nevoi",
    title: "Ce ar trebui să asigur?",
    description: "Identificăm împreună bunurile, activitățile și riscurile care merită protejate.",
    icon: "scan",
  },
  {
    id: "dauna",
    title: "Am o daună",
    description: "Spune-mi ce s-a întâmplat și ce trebuie să fac.",
    icon: "alert",
  },
];

export const OFFER_CATEGORIES = [
  "RCA",
  "CASCO",
  "Locuință",
  "Viață",
  "Sănătate",
  "Călătorie",
  "Bunuri",
  "Echipamente",
  "Răspundere civilă",
  "Asigurări pentru firmă",
  "Altceva",
];

export const REMINDER_POLICIES = [
  "RCA",
  "CASCO",
  "Locuință",
  "Viață",
  "Sănătate",
  "Călătorie",
  "Polițe PJ",
  "Alte polițe",
];

export const EXPLAIN_TOPICS = [
  { id: "acopera", label: "Ce acoperă polița?" },
  { id: "nu_acopera", label: "Ce nu acoperă?" },
  { id: "clauza", label: "Ce înseamnă o anumită clauză?" },
  { id: "fransiza", label: "Ce este franșiza?" },
  { id: "limite", label: "Ce limite există?" },
  { id: "obligatii", label: "Ce obligații am?" },
  { id: "altceva", label: "Altceva" },
];

export const COVERAGE_EXAMPLES = [
  "A căzut un copac peste mașină.",
  "Mi-a inundat vecinul apartamentul.",
  "A intrat apă prin terasă.",
  "Am pierdut bagajul în călătorie.",
  "S-a defectat un echipament la firmă.",
  "Am provocat o daună unei alte persoane.",
];

export const NEEDS_PF = [
  "Locuință",
  "Autoturism",
  "Bunuri personale",
  "Familie",
  "Călătorii",
  "Alte bunuri și responsabilități",
];

export const NEEDS_PJ = [
  "Activitate",
  "Clădiri",
  "Spații închiriate",
  "Vehicule",
  "Echipamente",
  "Utilaje",
  "Stocuri",
  "Angajați",
  "Răspundere civilă",
  "Răspundere profesională",
  "Riscuri operaționale",
];
