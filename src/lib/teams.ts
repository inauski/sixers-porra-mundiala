export interface Team {
  name: string;
  flag: string; // emoji
  code: string;
}

export interface Bombo {
  number: number;
  teams: Team[];
}

export const BOMBOS: Bombo[] = [
  { number: 1, teams: [
    { name: "España", flag: "🇪🇸", code: "ESP" },
    { name: "Francia", flag: "🇫🇷", code: "FRA" },
    { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG" },
    { name: "Argentina", flag: "🇦🇷", code: "ARG" },
  ]},
  { number: 2, teams: [
    { name: "Brasil", flag: "🇧🇷", code: "BRA" },
    { name: "Portugal", flag: "🇵🇹", code: "POR" },
    { name: "Alemania", flag: "🇩🇪", code: "GER" },
    { name: "Países Bajos", flag: "🇳🇱", code: "NED" },
  ]},
  { number: 3, teams: [
    { name: "Noruega", flag: "🇳🇴", code: "NOR" },
    { name: "Bélgica", flag: "🇧🇪", code: "BEL" },
    { name: "Colombia", flag: "🇨🇴", code: "COL" },
    { name: "Japón", flag: "🇯🇵", code: "JPN" },
  ]},
  { number: 4, teams: [
    { name: "Marruecos", flag: "🇲🇦", code: "MAR" },
    { name: "USA", flag: "🇺🇸", code: "USA" },
    { name: "Uruguay", flag: "🇺🇾", code: "URU" },
    { name: "Suiza", flag: "🇨🇭", code: "SUI" },
  ]},
  { number: 5, teams: [
    { name: "México", flag: "🇲🇽", code: "MEX" },
    { name: "Croacia", flag: "🇭🇷", code: "CRO" },
    { name: "Turquía", flag: "🇹🇷", code: "TUR" },
    { name: "Ecuador", flag: "🇪🇨", code: "ECU" },
  ]},
  { number: 6, teams: [
    { name: "Senegal", flag: "🇸🇳", code: "SEN" },
    { name: "Suecia", flag: "🇸🇪", code: "SWE" },
    { name: "Canadá", flag: "🇨🇦", code: "CAN" },
    { name: "Austria", flag: "🇦🇹", code: "AUT" },
  ]},
  { number: 7, teams: [
    { name: "Australia", flag: "🇦🇺", code: "AUS" },
    { name: "Corea del Sur", flag: "🇰🇷", code: "KOR" },
    { name: "Túnez", flag: "🇹🇳", code: "TUN" },
    { name: "Paraguay", flag: "🇵🇾", code: "PAR" },
  ]},
  { number: 8, teams: [
    { name: "Bosnia", flag: "🇧🇦", code: "BIH" },
    { name: "República Checa", flag: "🇨🇿", code: "CZE" },
    { name: "RD Congo", flag: "🇨🇩", code: "COD" },
    { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO" },
  ]},
  { number: 9, teams: [
    { name: "Sudáfrica", flag: "🇿🇦", code: "RSA" },
    { name: "Arabia Saudí", flag: "🇸🇦", code: "KSA" },
    { name: "Catar", flag: "🇶🇦", code: "QAT" },
    { name: "Egipto", flag: "🇪🇬", code: "EGY" },
  ]},
  { number: 10, teams: [
    { name: "Ghana", flag: "🇬🇭", code: "GHA" },
    { name: "Argelia", flag: "🇩🇿", code: "ALG" },
    { name: "Irán", flag: "🇮🇷", code: "IRN" },
    { name: "Panamá", flag: "🇵🇦", code: "PAN" },
  ]},
  { number: 11, teams: [
    { name: "Irak", flag: "🇮🇶", code: "IRQ" },
    { name: "Nueva Zelanda", flag: "🇳🇿", code: "NZL" },
    { name: "Cabo Verde", flag: "🇨🇻", code: "CPV" },
    { name: "Uzbekistán", flag: "🇺🇿", code: "UZB" },
  ]},
  { number: 12, teams: [
    { name: "Costa de Marfil", flag: "🇨🇮", code: "CIV" },
    { name: "Curazao", flag: "🇨🇼", code: "CUW" },
    { name: "Jordania", flag: "🇯🇴", code: "JOR" },
    { name: "Haití", flag: "🇭🇹", code: "HAI" },
  ]},
];

export const ALL_TEAMS: Team[] = BOMBOS.flatMap((b) => b.teams);

export function findTeamByName(name: string): Team | undefined {
  return ALL_TEAMS.find((t) => t.name === name);
}
