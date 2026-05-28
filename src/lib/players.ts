export type Position = "GK" | "DEF" | "MID" | "FWD";

export interface Player {
  name: string;
  team: string;
  position: Position;
}

interface RosterEntry {
  GK?: string[];
  DEF?: string[];
  MID?: string[];
  FWD?: string[];
}

// Curated roster per national team. Not exhaustive — meant as a fantasy starting pool.
const ROSTERS: Record<string, RosterEntry> = {
  "España": {
    GK: ["Unai Simón", "David Raya", "Robert Sánchez"],
    DEF: ["Dani Carvajal", "Aymeric Laporte", "Robin Le Normand", "Marc Cucurella", "Pau Cubarsí", "Dean Huijsen"],
    MID: ["Rodri", "Pedri", "Martín Zubimendi", "Fabián Ruiz", "Mikel Merino"],
    FWD: ["Lamine Yamal", "Nico Williams", "Álvaro Morata", "Dani Olmo", "Ferran Torres", "Mikel Oyarzabal"],
  },
  "Francia": {
    GK: ["Mike Maignan", "Brice Samba", "Lucas Chevalier"],
    DEF: ["Jules Koundé", "William Saliba", "Dayot Upamecano", "Theo Hernández", "Ibrahima Konaté"],
    MID: ["Aurélien Tchouaméni", "Eduardo Camavinga", "Adrien Rabiot", "N'Golo Kanté", "Warren Zaïre-Emery"],
    FWD: ["Kylian Mbappé", "Ousmane Dembélé", "Bradley Barcola", "Marcus Thuram", "Kingsley Coman", "Randal Kolo Muani"],
  },
  "Inglaterra": {
    GK: ["Jordan Pickford", "Dean Henderson", "Nick Pope"],
    DEF: ["Kyle Walker", "John Stones", "Marc Guéhi", "Levi Colwill", "Trent Alexander-Arnold", "Luke Shaw"],
    MID: ["Jude Bellingham", "Declan Rice", "Phil Foden", "Cole Palmer", "Conor Gallagher"],
    FWD: ["Harry Kane", "Bukayo Saka", "Marcus Rashford", "Anthony Gordon", "Ollie Watkins"],
  },
  "Argentina": {
    GK: ["Emiliano Martínez", "Gerónimo Rulli", "Walter Benítez"],
    DEF: ["Cristian Romero", "Nicolás Otamendi", "Lisandro Martínez", "Nahuel Molina", "Marcos Acuña"],
    MID: ["Rodrigo De Paul", "Enzo Fernández", "Alexis Mac Allister", "Leandro Paredes", "Giovani Lo Celso"],
    FWD: ["Lionel Messi", "Lautaro Martínez", "Julián Álvarez", "Ángel Di María", "Nicolás González"],
  },
  "Brasil": {
    GK: ["Alisson", "Ederson", "Bento"],
    DEF: ["Marquinhos", "Éder Militão", "Gabriel Magalhães", "Danilo", "Alex Sandro"],
    MID: ["Casemiro", "Bruno Guimarães", "Lucas Paquetá", "André", "Joelinton"],
    FWD: ["Vinícius Júnior", "Rodrygo", "Raphinha", "Neymar", "Endrick", "Richarlison"],
  },
  "Portugal": {
    GK: ["Diogo Costa", "Rui Patrício", "José Sá"],
    DEF: ["Rúben Dias", "Pepe", "João Cancelo", "Nuno Mendes", "António Silva"],
    MID: ["Bruno Fernandes", "Bernardo Silva", "Vitinha", "Rúben Neves", "João Palhinha"],
    FWD: ["Cristiano Ronaldo", "Rafael Leão", "Bernardo Silva", "Diogo Jota", "João Félix", "Gonçalo Ramos"],
  },
  "Alemania": {
    GK: ["Manuel Neuer", "Marc-André ter Stegen", "Alexander Nübel"],
    DEF: ["Antonio Rüdiger", "Jonathan Tah", "Joshua Kimmich", "Maximilian Mittelstädt", "Nico Schlotterbeck"],
    MID: ["Toni Kroos", "İlkay Gündoğan", "Florian Wirtz", "Jamal Musiala", "Pascal Groß"],
    FWD: ["Kai Havertz", "Niclas Füllkrug", "Leroy Sané", "Serge Gnabry", "Deniz Undav"],
  },
  "Países Bajos": {
    GK: ["Bart Verbruggen", "Mark Flekken", "Justin Bijlow"],
    DEF: ["Virgil van Dijk", "Matthijs de Ligt", "Stefan de Vrij", "Denzel Dumfries", "Nathan Aké"],
    MID: ["Frenkie de Jong", "Tijjani Reijnders", "Xavi Simons", "Jerdy Schouten", "Joey Veerman"],
    FWD: ["Memphis Depay", "Cody Gakpo", "Donyell Malen", "Wout Weghorst", "Brian Brobbey"],
  },
  "Noruega": {
    GK: ["Ørjan Nyland", "Egil Selvik"],
    DEF: ["Kristoffer Ajer", "Stefan Strandberg", "Birger Meling"],
    MID: ["Martin Ødegaard", "Patrick Berg", "Sander Berge"],
    FWD: ["Erling Haaland", "Alexander Sørloth", "Jørgen Strand Larsen"],
  },
  "Bélgica": {
    GK: ["Koen Casteels", "Matz Sels", "Thibaut Courtois"],
    DEF: ["Jan Vertonghen", "Wout Faes", "Arthur Theate", "Timothy Castagne"],
    MID: ["Kevin De Bruyne", "Youri Tielemans", "Amadou Onana", "Leandro Trossard"],
    FWD: ["Romelu Lukaku", "Jérémy Doku", "Charles De Ketelaere", "Lois Openda"],
  },
  "Colombia": {
    GK: ["Camilo Vargas", "David Ospina", "Álvaro Montero"],
    DEF: ["Davinson Sánchez", "Yerry Mina", "Daniel Muñoz", "Johan Mojica"],
    MID: ["James Rodríguez", "Richard Ríos", "Mateus Uribe", "Jefferson Lerma"],
    FWD: ["Luis Díaz", "Jhon Durán", "Rafael Santos Borré", "Jhon Arias"],
  },
  "Japón": {
    GK: ["Zion Suzuki", "Daniel Schmidt"],
    DEF: ["Takehiro Tomiyasu", "Ko Itakura", "Hiroki Sakai"],
    MID: ["Wataru Endō", "Hidemasa Morita", "Takefusa Kubo", "Daichi Kamada"],
    FWD: ["Kaoru Mitoma", "Takumi Minamino", "Ayase Ueda"],
  },
  "Marruecos": {
    GK: ["Yassine Bounou", "Munir Mohamedi"],
    DEF: ["Achraf Hakimi", "Romain Saïss", "Nayef Aguerd", "Noussair Mazraoui"],
    MID: ["Sofyan Amrabat", "Azzedine Ounahi", "Bilal El Khannouss"],
    FWD: ["Hakim Ziyech", "Youssef En-Nesyri", "Brahim Díaz", "Soufiane Rahimi"],
  },
  "USA": {
    GK: ["Matt Turner", "Ethan Horvath"],
    DEF: ["Sergiño Dest", "Tim Ream", "Chris Richards", "Antonee Robinson"],
    MID: ["Tyler Adams", "Weston McKennie", "Yunus Musah"],
    FWD: ["Christian Pulisic", "Tim Weah", "Folarin Balogun", "Giovanni Reyna"],
  },
  "Uruguay": {
    GK: ["Sergio Rochet", "Santiago Mele"],
    DEF: ["José María Giménez", "Ronald Araújo", "Mathías Olivera", "Nahitan Nández"],
    MID: ["Federico Valverde", "Manuel Ugarte", "Rodrigo Bentancur"],
    FWD: ["Darwin Núñez", "Maxi Araújo", "Facundo Pellistri"],
  },
  "Suiza": {
    GK: ["Yann Sommer", "Gregor Kobel"],
    DEF: ["Manuel Akanji", "Ricardo Rodríguez", "Nico Elvedi"],
    MID: ["Granit Xhaka", "Remo Freuler", "Xherdan Shaqiri"],
    FWD: ["Breel Embolo", "Dan Ndoye", "Zeki Amdouni"],
  },
  "México": {
    GK: ["Guillermo Ochoa", "Luis Malagón", "Julio González"],
    DEF: ["César Montes", "Néstor Araújo", "Jesús Gallardo", "Jorge Sánchez"],
    MID: ["Edson Álvarez", "Luis Chávez", "Orbelín Pineda"],
    FWD: ["Hirving Lozano", "Santiago Giménez", "Raúl Jiménez", "Henry Martín"],
  },
  "Croacia": {
    GK: ["Dominik Livaković", "Ivica Ivušić"],
    DEF: ["Joško Gvardiol", "Joško Šutalo", "Borna Sosa"],
    MID: ["Luka Modrić", "Mateo Kovačić", "Marcelo Brozović"],
    FWD: ["Andrej Kramarić", "Bruno Petković", "Ante Budimir"],
  },
  "Turquía": {
    GK: ["Mert Günok", "Altay Bayındır"],
    DEF: ["Merih Demiral", "Çağlar Söyüncü", "Ferdi Kadıoğlu"],
    MID: ["Hakan Çalhanoğlu", "Arda Güler", "Orkun Kökçü"],
    FWD: ["Kenan Yıldız", "Cengiz Ünder", "Barış Alper Yılmaz"],
  },
  "Ecuador": {
    GK: ["Hernán Galíndez", "Alexander Domínguez"],
    DEF: ["Piero Hincapié", "Félix Torres", "Pervis Estupiñán"],
    MID: ["Moisés Caicedo", "Kendry Páez", "Alan Franco"],
    FWD: ["Enner Valencia", "Kevin Rodríguez", "Gonzalo Plata"],
  },
  "Senegal": {
    GK: ["Édouard Mendy", "Seny Dieng"],
    DEF: ["Kalidou Koulibaly", "Abdou Diallo", "Krépin Diatta"],
    MID: ["Idrissa Gueye", "Pape Matar Sarr", "Pathé Ciss"],
    FWD: ["Sadio Mané", "Nicolas Jackson", "Iliman Ndiaye", "Boulaye Dia"],
  },
  "Suecia": {
    GK: ["Robin Olsen", "Kristoffer Nordfeldt"],
    DEF: ["Victor Lindelöf", "Isak Hien", "Emil Krafth"],
    MID: ["Dejan Kulusevski", "Mattias Svanberg", "Jens Cajuste"],
    FWD: ["Alexander Isak", "Viktor Gyökeres", "Anthony Elanga"],
  },
  "Canadá": {
    GK: ["Maxime Crépeau", "Dayne St. Clair"],
    DEF: ["Alistair Johnston", "Moïse Bombito", "Derek Cornelius"],
    MID: ["Stephen Eustáquio", "Jonathan Osorio", "Ismaël Koné"],
    FWD: ["Alphonso Davies", "Jonathan David", "Cyle Larin"],
  },
  "Austria": {
    GK: ["Patrick Pentz", "Heinz Lindner"],
    DEF: ["David Alaba", "Kevin Danso", "Maximilian Wöber"],
    MID: ["Marcel Sabitzer", "Konrad Laimer", "Nicolas Seiwald"],
    FWD: ["Marko Arnautović", "Michael Gregoritsch", "Patrick Wimmer"],
  },
  "Australia": {
    GK: ["Mathew Ryan", "Joe Gauci"],
    DEF: ["Harry Souttar", "Kye Rowles", "Aziz Behich"],
    MID: ["Aaron Mooy", "Riley McGree", "Keanu Baccus"],
    FWD: ["Mitchell Duke", "Martin Boyle", "Kusini Yengi"],
  },
  "Corea del Sur": {
    GK: ["Jo Hyeon-woo", "Kim Seung-gyu"],
    DEF: ["Kim Min-jae", "Kim Young-gwon", "Kim Jin-su"],
    MID: ["Lee Kang-in", "Hwang In-beom", "Hong Hyun-seok"],
    FWD: ["Son Heung-min", "Hwang Hee-chan", "Cho Gue-sung"],
  },
  "Túnez": {
    GK: ["Aymen Dahmen", "Mouez Hassen"],
    DEF: ["Dylan Bronn", "Yassine Meriah", "Mohamed Dräger"],
    MID: ["Ellyes Skhiri", "Aïssa Laidouni", "Hannibal Mejbri"],
    FWD: ["Wahbi Khazri", "Youssef Msakni", "Naïm Sliti"],
  },
  "Paraguay": {
    GK: ["Roberto Fernández", "Antony Silva"],
    DEF: ["Gustavo Gómez", "Omar Alderete", "Junior Alonso"],
    MID: ["Andrés Cubas", "Damián Bobadilla", "Mathías Villasanti"],
    FWD: ["Miguel Almirón", "Antonio Sanabria", "Julio Enciso"],
  },
  "Bosnia": {
    GK: ["Ibrahim Šehić", "Nikola Vasilj"],
    DEF: ["Sead Kolašinac", "Adrian Leon Barišić", "Dennis Hadžikadunić"],
    MID: ["Miralem Pjanić", "Edin Višća", "Amar Dedić"],
    FWD: ["Edin Džeko", "Ermedin Demirović", "Smail Prevljak"],
  },
  "República Checa": {
    GK: ["Jindřich Staněk", "Vítězslav Jaroš"],
    DEF: ["Tomáš Holeš", "Robin Hranáč", "David Jurásek"],
    MID: ["Tomáš Souček", "Lukáš Provod", "Pavel Šulc"],
    FWD: ["Patrik Schick", "Adam Hložek", "Mojmír Chytil"],
  },
  "RD Congo": {
    GK: ["Lionel Mpasi", "Timothy Fayulu"],
    DEF: ["Chancel Mbemba", "Axel Tuanzebe", "Arthur Masuaku"],
    MID: ["Samuel Moutoussamy", "Gaël Kakuta", "Charles Pickel"],
    FWD: ["Cédric Bakambu", "Yoane Wissa", "Silas Katompa"],
  },
  "Escocia": {
    GK: ["Angus Gunn", "Craig Gordon"],
    DEF: ["Andrew Robertson", "Kieran Tierney", "Jack Hendry"],
    MID: ["Scott McTominay", "John McGinn", "Billy Gilmour"],
    FWD: ["Che Adams", "Lyndon Dykes", "Lawrence Shankland"],
  },
  "Sudáfrica": {
    GK: ["Ronwen Williams", "Ricardo Goss"],
    DEF: ["Siyanda Xulu", "Mothobi Mvala", "Khuliso Mudau"],
    MID: ["Teboho Mokoena", "Thapelo Maseko", "Sphephelo Sithole"],
    FWD: ["Percy Tau", "Lyle Foster", "Themba Zwane"],
  },
  "Arabia Saudí": {
    GK: ["Mohammed Al-Owais", "Nawaf Al-Aqidi"],
    DEF: ["Ali Al-Bulayhi", "Hassan Tambakti", "Sultan Al-Ghannam"],
    MID: ["Salem Al-Dawsari", "Mohamed Kanno", "Nasser Al-Dawsari"],
    FWD: ["Saleh Al-Shehri", "Firas Al-Buraikan", "Abdulrahman Ghareeb"],
  },
  "Catar": {
    GK: ["Meshaal Barsham", "Saad Al-Sheeb"],
    DEF: ["Bassam Al-Rawi", "Tarek Salman", "Homam Ahmed"],
    MID: ["Hassan Al-Haydos", "Akram Afif", "Karim Boudiaf"],
    FWD: ["Almoez Ali", "Mohammed Muntari", "Yusuf Abdurisag"],
  },
  "Egipto": {
    GK: ["Mohamed El-Shenawy", "Mohamed Abou Gabal"],
    DEF: ["Mohamed Hany", "Ahmed Hegazi", "Omar Kamal"],
    MID: ["Mohamed Elneny", "Mahmoud Hassan Trezeguet", "Mostafa Mohamed"],
    FWD: ["Mohamed Salah", "Omar Marmoush", "Mostafa Mohamed"],
  },
  "Ghana": {
    GK: ["Lawrence Ati-Zigi", "Joseph Wollacott"],
    DEF: ["Alexander Djiku", "Jonas Wendlin", "Mohammed Salisu"],
    MID: ["Thomas Partey", "Mohammed Kudus", "Elisha Owusu"],
    FWD: ["Jordan Ayew", "Iñaki Williams", "Antoine Semenyo"],
  },
  "Argelia": {
    GK: ["Raïs M'Bolhi", "Anthony Mandrea"],
    DEF: ["Aïssa Mandi", "Ramy Bensebaini", "Youcef Atal"],
    MID: ["Ismaël Bennacer", "Houssem Aouar", "Adam Ounas"],
    FWD: ["Riyad Mahrez", "Islam Slimani", "Saïd Benrahma"],
  },
  "Irán": {
    GK: ["Alireza Beiranvand", "Hossein Hosseini"],
    DEF: ["Sadegh Moharrami", "Morteza Pouraliganji", "Milad Mohammadi"],
    MID: ["Saeid Ezatolahi", "Ahmad Nourollahi", "Saman Ghoddos"],
    FWD: ["Mehdi Taremi", "Sardar Azmoun", "Alireza Jahanbakhsh"],
  },
  "Panamá": {
    GK: ["Orlando Mosquera", "Luis Mejía"],
    DEF: ["Michael Amir Murillo", "Andrés Andrade", "Eric Davis"],
    MID: ["Aníbal Godoy", "Adalberto Carrasquilla", "Édgar Bárcenas"],
    FWD: ["José Fajardo", "Ismael Díaz", "Cecilio Waterman"],
  },
  "Irak": {
    GK: ["Jalal Hassan", "Ahmed Basil"],
    DEF: ["Rebin Sulaka", "Merchas Doski", "Zaid Tahseen"],
    MID: ["Amir Al-Ammari", "Bashar Resan", "Ibrahim Bayesh"],
    FWD: ["Aymen Hussein", "Ali Al-Hamadi", "Mohanad Ali"],
  },
  "Nueva Zelanda": {
    GK: ["Oliver Sail", "Alex Paulsen"],
    DEF: ["Tyler Bindon", "Michael Boxall", "Liberato Cacace"],
    MID: ["Joe Bell", "Marko Stamenić", "Matt Garbett"],
    FWD: ["Chris Wood", "Kosta Barbarouses", "Ben Old"],
  },
  "Cabo Verde": {
    GK: ["Vozinha", "Márcio Rosa"],
    DEF: ["Roberto Lopes", "Stopira", "Diney"],
    MID: ["Jamiro Monteiro", "Laros Duarte", "Kévin Lenini"],
    FWD: ["Ryan Mendes", "Garry Rodrigues", "Bebé"],
  },
  "Uzbekistán": {
    GK: ["Utkir Yusupov", "Abduvohid Nematov"],
    DEF: ["Khojimat Erkinov", "Rustam Ashurmatov", "Abdukodir Khusanov"],
    MID: ["Jaloliddin Masharipov", "Abbosbek Fayzullaev", "Otabek Shukurov"],
    FWD: ["Eldor Shomurodov", "Igor Sergeev", "Bobir Abdixolikov"],
  },
  "Costa de Marfil": {
    GK: ["Yahia Fofana", "Mohamed Koné"],
    DEF: ["Serge Aurier", "Willy Boly", "Evan Ndicka", "Ghislain Konan"],
    MID: ["Franck Kessié", "Ibrahim Sangaré", "Seko Fofana"],
    FWD: ["Sébastien Haller", "Nicolas Pépé", "Simon Adingra"],
  },
  "Curazao": {
    GK: ["Eloy Room", "Pieter Bos"],
    DEF: ["Cuco Martina", "Juriën Gaari", "Roshon van Eijma"],
    MID: ["Leandro Bacuna", "Jürgen Locadia", "Tahith Chong"],
    FWD: ["Bryan Linssen", "Rangelo Janga", "Brandley Kuwas"],
  },
  "Jordania": {
    GK: ["Yazeed Abulaila", "Abdallah Al-Fakhouri"],
    DEF: ["Salem Al-Ajalin", "Yazan Al-Arab", "Ihsan Haddad"],
    MID: ["Noor Al-Rawabdeh", "Nizar Al-Rashdan", "Mahmoud Al-Mardi"],
    FWD: ["Musa Al-Taamari", "Yazan Al-Naimat", "Ali Olwan"],
  },
  "Haití": {
    GK: ["Josué Duverger", "Johny Placide"],
    DEF: ["Ricardo Adé", "Carlens Arcus", "Andrew Jean-Baptiste"],
    MID: ["Danley Jean Jacques", "Leverton Pierre", "Steeven Saba"],
    FWD: ["Duckens Nazon", "Frantzdy Pierrot", "Don Deedson Louicius"],
  },
};

export const ALL_PLAYERS: Player[] = Object.entries(ROSTERS).flatMap(([team, roster]) =>
  (["GK", "DEF", "MID", "FWD"] as Position[]).flatMap((pos) =>
    (roster[pos] ?? []).map((name) => ({ name, team, position: pos })),
  ),
);

export function playersByPosition(pos: Position, teams?: string[]): Player[] {
  if (!teams || teams.length === 0) return ALL_PLAYERS.filter((p) => p.position === pos);
  const set = new Set(teams);
  return ALL_PLAYERS.filter((p) => p.position === pos && set.has(p.team));
}

export function findPlayer(name: string): Player | undefined {
  return ALL_PLAYERS.find((p) => p.name === name);
}
