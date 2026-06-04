// Lista de convocados para el Mundial 2026
export type SquadGroup = {
  porteros?: string;
  defensas?: string;
  centrocampistas?: string;
  delanteros?: string;
};

export type TeamSquad = {
  team: string;
  squad: SquadGroup;
};

export type GroupSquads = {
  group: string;
  teams: TeamSquad[];
};

export const CONVOCATORIAS: GroupSquads[] = [
  {
    group: "Grupo A",
    teams: [
      {
        team: "México",
        squad: {
          porteros: "Raúl Rangel (Chivas), Carlos Acevedo (Santos Laguna), Guillermo Ochoa (AEL Limassol)",
          defensas: "Israel Reyes (América), Jorge Sánchez (Cruz Azul), César Montes (Lokomotiv Moscú), Edsol Álvarez (West Ham), Johan Vásquez (Genoa), Jesús Gallardo (Toluca), Mateo Chávez (AZ Alkmaar)",
          centrocampistas: "Álvaro Fidalgo (Betis), Brian Gutiérrez (Chivas), Orbelín Pineda (AEK Atenas), Erik Lira (Cruz Azul), Luis Romo (Chivas), Obed Vargas (Atlético de Madrid), Gilberto Mora (Tijuana), Luis Chávez (Dinamo Moscú)",
          delanteros: "Roberto Alvarado (Chivas), César Huerta (Anderlecht), Guillermo Martínez (Pumas), Armando González (Chivas), Santiago Giménez (Milan), Raúl Jiménez (Fulham), Julián Quiñones (Al Qadsiah), Alexis Vega (Toluca)",
        },
      },
      {
        team: "Sudáfrica",
        squad: {
          porteros: "Ronwen Williams (Mamelodi Sundowns), Ricardo Goss (Siwelele FC), Sipho Chaine (Orlando Pirates)",
          defensas: "Khuliso Mudau (Mamelodi Sundowns), Nkosinathi Sibisi (Orlando Pirates), Ime Okon (Hannover 96), Khulumani Ndamane (Mamelodi Sundowns), Aubrey Modiba (Mamelodi Sundowns), Samukelo Kabini (Molde FK), Thabang Matuludi (Polokwane City), Olwethu Makhanya (Philadelphia Union), Kamogelo Sebelebele (Orlando Pirates), Bradley Cross (Kaizer Chiefs), Mbekezeli Mbokazi (Chicago Fire)",
          centrocampistas: "Teboho Mokoena (Mamelodi Sundowns), Thalente Mbatha (Orlando Pirates), Sphephelo Sithole (CD Tondela), Jayden Adams (Mamelodi Sundowns)",
          delanteros: "Oswin Appollis (Orlando Pirates), Iqraam Rayners (Mamelodi Sundowns), Tshepang Moremi (Orlando Pirates), Relebohile Mofokeng (Orlando Pirates), Evidence Makgopa (Orlando Pirates), Themba Zwane (Mamelodi Sundowns), Lyle Foster (Burnley), Thapelo Maseko (AEL Limassol)",
        },
      },
      {
        team: "Corea del Sur",
        squad: {
          porteros: "Kim Seung-Gyu (FC Tokyo), Song Bum Keun (Jeonbuk Hyundai), Jo Hyeon-Woo (Ulsan HD)",
          defensas: "Kim Moon-Hwan (Daejon Hana), Kim Min-Jae (Bayern de Múnich), Kim Tae-Hwan (Kashima Antlers), Park Jin-Seob (Jeonbuk Hyundai), Seol Young-Woo (Estrella Roja), Jens Castrop (Borussia Mönchengladbach), Lee Ki-Hyuk (Gangwon FC), Lee Tae-Seok (Austria de Viena), Lee Han-Beom (Midtjylland), Cho Yumin (Sharjah FC)",
          centrocampistas: "Kim Jin-Gyu (Jeonbuk Hyundai), Bae Jun-Ho (Stoke City), Paik Seung-Ho (Birmingham City), Yang Hyun-Jun (Celtic), Eom Ji-Sung (Swansea City), Lee Kang-In (PSG), Lee Dong-Gyeong (Ulsan HD), Lee Jae-Sung (Mainz 05), Hwang In-Beom (Feyenoord), Hwang Hee-Chan (Wolverhampton)",
          delanteros: "Son Heung-Min (LA FC), Oh Hyeon-Gyu (Besiktas), Cho Gue-Sung (Midtjylland)",
        },
      },
      {
        team: "República Checa",
        squad: {
          porteros: "Lukas Hornicek (SC Braga), Matej Kovar (PSV), Jindrich Stanek (Slavia Praga)",
          defensas: "Ladislav Krejci (Wolverhampton), Robin Hranac (Hoffenheim), Stepan Chaloupek (Slavia Praga), David Zima (Slavia Praga), Tomas Holes (Slavia Praga), Jaroslav Zeleny (Sparta Praga), David Jurasek (Slavia Praga), Vladimir Coufal (Hoffenheim)",
          centrocampistas: "Tomas Soucek (West Ham), Michal Sadilek (Slavia Praga), Lukas Cerv (Viktoria Plzen), Hugo Sochurek (Sparta Praga), Alexander Sojka (Viktoria Plzen), Vladimir Darida (Hradec Kralove), David Doudera (Slavia Praga), Pavel Sulc (Olympique Lyon), Denis Visinsky (Viktoria Plzen)",
          delanteros: "Patrick Schick (Bayer Leverkusen), Lukas Provod (Slavia Praga), Adam Hlozek (Hoffenheim), Mojmir Chytil (Slavia Praga), Jan Kuchta (Sparta Praga), Tomas Chory (Slavia Praga)",
        },
      },
    ],
  },
  {
    group: "Grupo B",
    teams: [
      {
        team: "Canadá",
        squad: {
          porteros: "Maxime Crépau (Orlando City), Owen Goodman (Barnsley), Dayne St. Clair (Inter Miami)",
          defensas: "Moïse Bombito (Nice), Derek Cornelius (Olympique Marsella), Alphonso Davies (Bayern de Múnich), Luc de Fougerolles (Fulham), Alistair Johnston (Celtic), Alfie Jones (Middlesbrough), Richie Laryea (Toronto), Niko Sigur (Hajduk Split), Joel Waterman (Chicago Fire)",
          centrocampistas: "Ali Ahmed (Norwich), Tajon Buchanan (Villarreal), Mathieu Chounière (LAFC), Stephen Eustáquio (Oporto), Marcelo Flores (lesionado/Tigres), Ismaël Koné (Sassuolo), Liam Millar (Hull City), Jonathan Osorio (Toronto), Nathan Saliba (Anderlecht), Jacob Shaffelburg (LAFC)",
          delanteros: "Jonathan David (Juventus), Promise David (Unión Saint-Gilloise), Cyle Larin (Southampton), Tani Oluwaseyi (Villarreal)",
        },
      },
      {
        team: "Bosnia",
        squad: {
          porteros: "Nikola Vasilj (St Pauli), Martin Zlomislic (Rijeka), Osman Hadzikic (Slaven Belupo)",
          defensas: "Sead Kolasinac (Atalanta), Amar Dedic (Benfica), Nihad Mujakic (Gaziantep), Nikola Katic (Schalke 04), Tarik Muharemovic (Sassuolo), Stjepan Radeljic (Rijeka), Dennis Hadzikadunic (Sampdoria), Nidal Celik (Lens)",
          centrocampistas: "Amir Hadziahmetovic (Hull City), Ivan Sunjic (Pafos), Ivan Basic (Astana), Dzenis Burnic (Karlsruher SC), Ermin Mahmic (Slovan Liberec), Benjamin Tahirovic (Brondby), Amar Memic (Viktoria Plzen), Armin Gigovic (Young Boys), Kerim Alajbegovic (RB Salzburg), Esmir Bajraktarevic (PSV Eindhoven)",
          delanteros: "Ermedin Demirovic (VfB Stuttgart), Jovo Lukic (Universitatea Cluj), Samed Bazdar (Jagiellonia Bialystok), Haris Tabakovic (Borussia Mönchengladbach), Edin Dzeko (Schalke 04)",
        },
      },
      {
        team: "Catar",
        squad: {
          porteros: "Mahmoud Abunada (Al-Rayyan), Meshaal Barsham (Al-Sadd), Salah Zakaria (Al-Duhail)",
          defensas: "Ayoub Al Alawi (Al-Gharafa), Boualem Khoukhi (Al-Sadd), Homam Al Amin (Cultural Leonesa), Lucas Mendes (Al-Wakrah), Issa Laye (Al-Arabi), Pedro Miguel (Al-Sadd), Alhashmi Alhussain (Al-Arabi), Sultan Al Brake (Al-Duhail)",
          centrocampistas: "Assim Madibo (Al-Wakrah), Abdulaziz Hatem (Al-Rayyan), Ahmed Fathy (Al-Arabi), Karim Boudiaf (Al-Duhail), Jassim Gaber (Al-Arabi), Mohamed Manai (Al-Shamal)",
          delanteros: "Ahmed Al Janhi (Al-Gharafa), Ahmed Alaa (Al-Rayyan), Akram Afif (Al-Sadd), Almoez Ali (Al-Duhail), Edmilson Junior (Al-Duhail), Hassan Al Haydos (Al-Sadd), Mohammed Muntari (Al-Gharafa), Tahsin Mohammed (Al-Duhail), Yusuf Abdurisag (Al-Wakrah)",
        },
      },
      {
        team: "Suiza",
        squad: {
          porteros: "Marvin Keller (Young Boys), Gregor Kobel (Borussia Dortmund), Yvon Mvogo (Lorient)",
          defensas: "Manuel Akanji (Inter), Aurèle Amenda (Eintracht), Eray Cömert (Valencia), Nico Elvedi (Borussia Mönchengladbach), Luca Jaquez (Stuttgart), Miro Muheim (Hamburgo), Ricardo Rodriguez (Betis), Silvan Widmer (Mainz 05)",
          centrocampistas: "Granit Xhaka (Sunderland), Denis Zakaria (Mónaco), Michel Aebischer (Pisa), Christian Fassnacht (Young Boys), Remo Freuler (Bologna), Ardon Jashari (Milan), Johan Manzambi (Friburgo), Fabian Rieder (Augsburgo), Djibril Sow (Sevilla)",
          delanteros: "Zeki Amdouni (Burnley), Breel Embolo (Stade Rennes), Cedric Itten (Fortuna Düsseldorf), Dan Ndoye (Nottingham Forest), Noah Okafor (Leeds), Ruben Vargas (Sevilla)",
        },
      },
    ],
  },
  {
    group: "Grupo C",
    teams: [
      {
        team: "Brasil",
        squad: {
          porteros: "Alisson (Liverpool), Ederson (Fenerbahce), Weverton (Grêmio)",
          defensas: "Marquinhos (PSG), Gabriel Magalhães (Arsenal), Bremer (Juventus), Ibáñez (Al Ahli), Léo Pereira (Flamengo), Wesley (Roma), Danilo (Flamengo), Alex Sandro (Flamengo), Douglas Santos (Zenit)",
          centrocampistas: "Casemiro (Manchester United), Bruno Guimarães (Newcastle), Fabinho (Al Ittihad), Danilo (Botafogo), Lucas Paquetá (Flamengo)",
          delanteros: "Vinicius Jr. (Real Madrid), Raphinha (Barcelona), Matheus Cunha (Manchester United), Luiz Henrique (Zenit), Igor Thiago (Brentford), Endrick (Lyon/Real Madrid), Martinelli (Arsenal), Rayan (Bournemouth), Neymar (Santos)",
        },
      },
      {
        team: "Marruecos",
        squad: {
          porteros: "Yassine Bounou (Al Hilal SFC), Munir El Kajoui (RS Berkane), Ahmed Reda Tagnaouti (Raja Casablanca)",
          defensas: "Achraf Hakimi (Paris Saint-Germain), Nayef Aguerd (West Ham United/Marsella), Noussair Mazraoui (Manchester United), Anass Salah-Eddine (FC Twente), Chadi Riad (Crystal Palace), Youssef Belammari (Al Ahly), Issa Diop (Fulham), Redouane Hahlal (Mechelen), Zakaria El Ouahdi (Genk)",
          centrocampistas: "Sofyan Amrabat (Fenerbahçe SK/Betis), Ismael Saibari (PSV Eindhoven), Neil El Aynaoui (Roma), Bilal El Khannouss (Stuttgart), Azzedine Ounahi (Girona), Bouaddi (Lille), Samir El Mourabet (Estrasburgo)",
          delanteros: "Brahim Díaz (Real Madrid), Chemsdine Talbi (Sunderland), Ayoub El Kaabi (Olympiacos FC), Soufiane Rahimi (Al-Ain FC), Abde Ezzalzouli (Real Betis), Ayoube Amaimouni (Eintracht Frankfurt), Yassine Gessime (Estrasburgo)",
        },
      },
      {
        team: "Haití",
        squad: {
          porteros: "Johnny Placide (SC Bastia), Alexandre Pierre (FC Sochaux), Josué Duverger (FC Cosmos Koblenz)",
          defensas: "Carlens Arcus (Angers SCO), Wilguens Paugain (SV Zulte Waregem), Duke Lacroix (Colorado Springs), Martin Experience (AS Nancy-Lorraine), JK Duverne (KAA Gent), Ricardo Adé (LDU Quito), Hannes Delcroix (FC Lugano), Keeto Thermoncy (BSC Young Boys II)",
          centrocampistas: "Leverton Pierre (FC Vizela), Carl-Fred Sainthe (El Paso Locomotive FC), Jean-Jacques Danley (Philadelphia Union), Jeanricner Bellegarde (Wolverhampton), Pierre Woodenski (Violette AC), Dominique Simon (FC Tatran Prešov)",
          delanteros: "Louicius Deedson (FC Dallas), Ruben Providence (Almere City FC), Josué Casimir (AJ Auxerre), Derrick Etienne (Toronto FC), Wilson Isidor (Sunderland AFC), Duckens Nazon (Esteghlal FC), Frantzdy Pierrot (Çaykur Rizespor), Yassin Fortune (FC Vizela), Lenny Joseph (Ferencváros TC)",
        },
      },
      {
        team: "Escocia",
        squad: {
          porteros: "Craig Gordon (Hearts), Angus Gunn (Nottingham Forest), Liam Kelly (Rangers)",
          defensas: "Grant Hanley (Hibernian), Jack Hendry (Al Ettifaq), Aaron Hickey (Brentford), Dom Hyam (Wrexham), Scott McKenna (Dinamo Zagreb), Nathan Patterson (Everton), Anthony Ralston (Celtic), Andy Robertson (Liverpool), John Souttar (Hearts), Kieran Tierney (Celtic)",
          centrocampistas: "Ryan Christie (Bournemouth), Findlay Curtis (Rangers), Lewis Ferguson (Bologna), Ben Gannon-Doak (Bournemouth), Tyler Fletcher (Manchester United), John McGinn (Aston Villa), Kenny McLean (Norwich City), Scott McTominay (Nápoles)",
          delanteros: "Ché Adams (Torino), Lyndon Dykes (Charlton), George Hirst (Ipswich Town), Lawrence Shankland (Hearts), Ross Stewart (Southampton)",
        },
      },
    ],
  },
  {
    group: "Grupo D",
    teams: [
      {
        team: "EE.UU.",
        squad: {
          porteros: "Matt Freese (New York City), Matt Turner (New England Revolution), Chris Brady (Chicago Fire)",
          defensas: "Max Arfsten (Columbus Crew), Sergiño Dest (PSV), Alex Freeman (Villarreal), Mark McKenzie (Toulouse), Tim Ream (Charlotte FC), Chris Richards (Crystal Palace), Antonee Robinson (Fulham), Miles Robinson (FC Cincinnati), Joe Scally (Borussia Mönchengladbach), Auston Trusty (Celtic)",
          centrocampistas: "Tyler Adams (AFC Bournemouth), Sebastian Berhalter (Vancouver Whitecaps), Weston McKennie (Vancouver Whitecaps), Cristian Roldán (Seattle Sounders), Brenden Aaronson (Leeds United), Christian Pulisic (Milan), Gio Reyna (Borussia Mönchengladbach), Malik Tillman (Bayer Leverkusen), Tim Weah (Olympique Marseille), Alejandro Zendejas (Club América)",
          delanteros: "Folarin Balogun (Monaco), Ricardo Pepi (PSV), Haji Wright (Coventry City)",
        },
      },
      {
        team: "Paraguay",
        squad: {
          porteros: "Orlando Gill (San Lorenzo), Roberto Fernández (Cerro Porteño), Gastón Olveira (Olimpia)",
          defensas: "Juan Cáceres (Dynamo Moscú), Gustavo Velázquez (Cerro Porteño), Gustavo Gómez (Palmeiras), Junior Alonso (Atlético Mineiro), José Canale (Lanús), Omar Alderete (Getafe), Alessandro Maidana (Olimpia), Fabián Balbuena (Dinamo Moscú), Mauricio Magalhães (Libertad)",
          centrocampistas: "Damián Bobadilla (São Paulo), Braian Ojeda (Real Salt Lake), Andrés Cubas (Vancouver Whitecaps), Matías Galarza (Talleres de Córdoba), Alejandro Romero Gamarra (Al-Ain), Gustavo Caballero (Nacional), Ramón Sosa (Palmeiras), Diego Gómez (Brighton)",
          delanteros: "Alex Arce (Liga de Quito), Gabriel Ávalos (Independiente), Isidro Pitta (Red Bull Bragantino), Miguel Almirón (Atlanta United), Julio Enciso (Estrasburgo), Antonio Sanabria (Torino)",
        },
      },
      {
        team: "Australia",
        squad: {
          porteros: "Matthew Ryan (Levante), Patrick Beach (Melbourne City), Paul Izzo (Randers)",
          defensas: "Harry Souttar (Leicester), Alessandro Circati (Parma), Jordan Bos (Feyenoord), Cameron Burgess (Swansea), Milos Degenek (APOEL), Aziz Behich (Melbourne City), Jason Geria (Albirex Niigata), Lucas Herrington (Colorado Rapids), Kai Trewin (New York City), Jacob Italiano (Grazer AK 1902)",
          centrocampistas: "Jackson Irvine (St. Pauli), Paul Okon-Engstler (Sydney FC), Cameron Devlin (Hearts), Ajdin Hrustic (Heracles), Connor Metcalfe (St. Pauli), Aiden O'Neill (New York City)",
          delanteros: "Mathew Leckie (Melbourne City), Nishan Velupillay (Melbourne City), Nestoy Irakunda (Watford), Awer Mabil (Castellón), Mohamed Touré (Norwich), Cristian Volpato (Sassuolo), Tete Yengi (Machida Zelvia)",
        },
      },
      {
        team: "Turquía",
        squad: {
          porteros: "Bayindir (Manchester United), Cakir (Galatasaray), Gunok (Besiktas)",
          defensas: "Kadioglu (Brighton), Demiral (Al Ahli), Celik (Roma), Ozan Kabak (Hoffenheim), Mert Muldur (Fenerbahce), Abdulkerim Bardakci (Galatasaray), Eren Elmali (Galatasaray), Caglar Soyuncu (Fenerbahce), Samet Akaydin (Rizespor)",
          centrocampistas: "Arda Guler (Real Madrid), Can Uzun (Eintracht Frankfurt), Orkun Kokcu (Besiktas), Hakan Calhanoglu (Inter de Milán), Ismail Yuksek (Fenerbahce), Kaan Ayhan (Galatasaray), Salih Ozcan (Borussia Dortmund)",
          delanteros: "Kenan Yildiz (Juventus), Baris Yilmaz (Galatasaray), Kerem Akturkoglu (Fenerbahce), Yunus Akgun (Galatasaray), Oguz Aydin (Fenerbahce), Deniz Gul (Porto), Irfan Can Kahveci (Fenerbahce)",
        },
      },
    ],
  },
  {
    group: "Grupo E",
    teams: [
      {
        team: "Alemania",
        squad: {
          porteros: "Manuel Neuer (Bayern), Oliver Baumann (Hoffenheim), Alexander Nübel (Stuttgart)",
          defensas: "Waldemar Anton (Dortmund), Nathaniel Brown (Frankfurt), Pascal Groß (Brighton & Hove Albion), Joshua Kimmich (Bayern), David Raum (Leipzig), Antonio Rüdiger (Real Madrid), Nico Schlotterbeck (Dortmund), Jonathan Tah (Bayern), Malick Thiaw (Newcastle)",
          centrocampistas: "Aleksandar Pavlovic (Bayern), Jamal Musiala (Bayern), Nadiem Amiri (Mainz), Jamie Leweling (Stuttgart), Felix Nmecha (Dortmund), Angelo Stiller (Stuttgart), Leon Goretzka (Bayern), Lennart Karl (Bayern), Florian Wirtz (Liverpool)",
          delanteros: "Deniz Undav (Stuttgart), Kai Havertz (Arsenal), Maximilian Beier (Dortmund), Leroy Sané (Istanbul), Nick Woltemade (Newcastle)",
        },
      },
      {
        team: "Curazao",
        squad: {
          porteros: "Tyrick Bodak (Telsar), Trevor Doornbusch (VVV Venlo), Eloy Room (Miami FC)",
          defensas: "Riechedly Bazoer (Konyaspor), Joshua Brenet (Kayserispor), Roshon Van Eijma (Waalwijk), Sherel Floranus (PEC Zwolle), Deveron Fonville (Nijmegen), Jurïen Gaari (Abha), Armando Obispo (PSV), Shurandy Sambo (Sparta Rotterdam)",
          centrocampistas: "Juninho Bacuna (FC Volendam), Leandro Bacuna (Igdir FK), Livano Comenencia (Zurich), Kevin Felida (Den Bosch), Arjany Martha (Rotherham), Tyrese Noslin (Telsar), Godfried Roemeratoe (Waalwijk)",
          delanteros: "Jeremy Antonisse (Kifisia), Tahith Chong (Sheffield United), Kenji Gorré (Maccabi Haifa), Sontje Hansen (Middlesbrough), Gervane Kastaneer (Terengganu), Brandley Kuwas (FC Volendam), Jürgen Locadia (Miami FC), Jearl Margaritha (SK Beveren)",
        },
      },
      {
        team: "Costa de Marfil",
        squad: {
          porteros: "Yahia Fofana (Çaykur Rizespor), Mohamed Kone (Charleroi), Alban Lafont (Panathinaikos)",
          defensas: "Emmanuel Agbadou (Besiktas), Clément Akpa (Auxerre), Ousmane Diomande (Sporting), Guéla Doué (Estrasburgo), Ghislain Konan (Gil Vicente), Odilon Kossounou (Atalanta), Evan N'Dicka (Roma), Wilfried Singo (Mónaco)",
          centrocampistas: "Seko Fofana (Oporto), Parfait Guiagon (Charleroi), Christ Inao Oulai (Trabzonspor), Franck Kessié (Al Ahli), Ibrahim Sangaré (Notts. Forest), Jean Michaël Seri (Maribor)",
          delanteros: "Simón Adingra (Mónaco), Ange-Yoan Bonny (Inter), Amad Diallo (Manchester United), Oumar Diakite (Círculo Brujas), Yan Diomande (Leipzig), Evann Guessand (Crystal Palace), Nicolas Pepe (Villarreal), Bazoumana Toure (Hoffenheim), Elye Wahi (Niza)",
        },
      },
      {
        team: "Ecuador",
        squad: {
          porteros: "Hernán Galíndez (Huracán), Moisés Ramírez (AE Kifisias), Gonzalo Valle (Liga de Quito)",
          defensas: "Willian Pacho (PSG), Piero Hincapié (Arsenal), Joel Ordóñez (Brujas), Jackson Porozo (Club Tijuana), Félix Torres (Internacional), Pervis Estupiñán (Milan), Yaimar Medina (KRC Genk), Ángelo Preciado (Atlético Mineiro)",
          centrocampistas: "Moisés Caicedo (Chelsea), Jordi Alcívar (Independiente del Valle), Denil Castillo (Midtjylland), Alan Franco (Atlético Mineiro), Kendry Páez (River Plate), Nilson Angulo (Sunderland)",
          delanteros: "Gonzalo Plata (Flamengo), John Yeboah (Venezia), Enner Valencia (Pachuca), Jordy Caicedo (Huracán), Jeremy Arévalo (Stuttgart), Anthony Valencia (Royal Antwerp), Kevin Rodríguez (Unión Saint-Gilloise)",
        },
      },
    ],
  },
  {
    group: "Grupo F",
    teams: [
      {
        team: "Países Bajos",
        squad: {
          porteros: "Bart Verbruggen (Brighton & Hove Albion), Robin Roefs (Sunderland), Mark Flekken (Bayer 04 Leverkusen)",
          defensas: "Nathan Aké (Manchester City), Virgil van Dijk (Liverpool), Jorrel Hato (Chelsea), Jan Paul van Hecke (Brighton & Hove Albion), Denzel Dumfries (Inter), Jurriën Timber (Arsenal), Micky van de Ven (Tottenham Hotspur)",
          centrocampistas: "Ryan Gravenberch (Liverpool), Frenkie de Jong (Barcelona), Marten de Roon (Atalanta), Tijjani Reijnders (Manchester City), Teun Koopmeiners (Juventus), Noa Lang (Galatasaray), Mats Wieffer (Brighton & Hove Albion), Quinten Timber (Olympique de Marseille), Crysencio Summerville (West Ham United), Guus Til (PSV)",
          delanteros: "Brian Brobbey (Sunderland), Memphis Depay (Corinthians), Cody Gakpo (Liverpool), Justin Kluivert (Bournemouth), Donyell Malen (AS Roma), Wout Weghorst (Ajax)",
        },
      },
      {
        team: "Japón",
        squad: {
          porteros: "Zion Suzuki (Parma), Keisuke Osako (Sanfrecce Hiroshima), Tomoki Hayakawa (Kashima)",
          defensas: "Yuto Nagamoto (FC Tokyo), Shogo Taniguchi (Sint-Truiden), Ko Itakura (Ajax), Takehiro Tomisayu (Ajax), Ayumu Seko (Le Havre), Yukinari Sugawara (Werder Bremen), Hiroki Ito (Bayern de Múnich), Junnosuke Suzuki (Copenhague), Tsuyoshi Watanabe (Feyenoord)",
          centrocampistas: "Kaishu Sano (Mainz), Wataru Endo (Liverpool), Ao Tanaka (Leeds), Daichi Kamada (Crystal Palace), Junya Ito (Genk)",
          delanteros: "Kaito Nakamura (Stade Reims), Daizen Maeda (Celtic), Koki Ogawa (NEC), Takefusa Kubo (Real Sociedad), Yuito Suzuki (Friburgo), Kento Shiogai (Wolfsburgo), Keisuke Goto (Sint-Truiden), Ritsu Doan (Eintracht), Ayase Ueda (Feyenoord)",
        },
      },
      {
        team: "Suecia",
        squad: {
          porteros: "Jacob Zetterström (Derby County), Viktor Johansson (Stoke City), Kristoffer Nordfeldt (AIK)",
          defensas: "Gustav Lagerbielke (SC Braga), Viktor Lindelöf (Aston Villa), Isak Hien (Atalanta), Gabriel Gudmundsson (Leeds), Herman Johansson (FC Dallas), Daniel Svensson (Borussia Dortmund), Hjalmar Ekdal (Burnley), Carl Starfelt (Celta), Eric Smith (St. Pauli), Elliot Stroud (Mjällby)",
          centrocampistas: "Lucas Bergvall (Tottenham), Ken Sema (Pafos), Jesper Karlström (Udinese), Yasin Ayari (Brighton), Mattias Svanberg (Wolfsburgo), Besfort Zeneli (Unión Saint-Gilloise)",
          delanteros: "Alexander Isak (Liverpool), Viktor Gyökeres (Arsenal), Benjamin Nygren (Celtic), Anthony Elanga (Newcastle), Alexander Bernhardsson (Holstein Kiel), Gustaf Nilsson (Brujas), Taha Ali (Malmö)",
        },
      },
      {
        team: "Túnez",
        squad: {
          porteros: "Aymen Dahmen (CS Sfaxien), A. Chamakh (Club Africain), Sabri Ben Hassen (Etoile du Sahel)",
          defensas: "Van Valery (Young Boys), Moutaz Neffati (Norrköping), Dylan Bronn (Servette), Montassar Talbi (Lorient), Omar Rekik (Maribor), Adem Arous (Kasimpasa), Raed Chikhaoui (Monastir), Ali Abdi (Niza), M.A Ben Hmida (Espérance de Tunis)",
          centrocampistas: "Ellyes Skhiri (Eintracht de Frankfurt), M. Hadj Mahmoud (Lugano), Rani Khedira (Union Berlin), Anis Ben Slimane (Norwich), Mortadha Ben Ouanes (Kasimpasa), Ismaël Gharbi (Augsburgo), Hannibal Mejbri (Burnley)",
          delanteros: "Khalil Ayari (PSG), Elias Achouri (Copenhague), Elias Saad (Hannover 96), Firas Chaouat (Club Africain), Hazem Mastouri (Dynamo Makhachkala), Rayan Elloumi (Vancouver Whitecaps), Sebastian Tounekti (Celtic)",
        },
      },
    ],
  },
  {
    group: "Grupo G",
    teams: [
      {
        team: "Bélgica",
        squad: {
          porteros: "Thibaut Courtois (Real Madrid), Senne Lammens (Manchester United), Mike Penders (Estrasburgo)",
          defensas: "Zeno Debast (Sporting), Arthur Theate (Eintracht), Koni de Winter (Milan), Brandon Mechele (Brujas), Nathan Ngoy (Lille), Thomas Meunier (Lille), Timothy Castagne (Fulham), Maxim de Cuyper (Brighton), Joaquin Seys (Brujas)",
          centrocampistas: "Kevin de Bruyne (Nápoles), Amadou Onana (Aston Villa), Youri Tielemans (Aston Villa), Hans Vanaken (Brujas), Nicolas Raskin (Rangers), Axel Witsel (Girona)",
          delanteros: "Jérémy Doku (Manchester City), Leandro Trossard (Arsenal), Alexis Saelemaekers (Milan), Dodi Lukebakio (Benfica), Romelu Lukaku (Nápoles), Charles de Ketelaere (Atalanta), Matias Fernández-Pardo (Lille), Diego Moreira (Estrasburgo)",
        },
      },
      {
        team: "Egipto",
        squad: {
          porteros: "Mohamed El Shenawy (Al-Ahly SC), Mostafa Shobeir (Al-Ahly SC), Al-Mahdy Soliman (Al-Ittihad Alexandria), Mohamed Alaa (ZED FC)",
          defensas: "Mohamed Hany (Al-Ahly SC), Tarek El Ala (Al-Nasr), Hamdi Fathy (Al-Wakrah SC), Ramy Rabia (Al-Ahly SC), Yasser Ibrahim (Al-Ahly SC), Hossam Abdel-Maguid (Zamalek SC), Mohamed Abdelmonem (OGC Niza), Ahmed Fotouh (Zamalek SC), Karim Hafez (Pyramids FC)",
          centrocampistas: "Marwan Attia (Al-Ahly SC), Mohand Lashin (Pyramids FC), Nabil Emad Dunga (Zamalek SC), Mahmoud Saber (Pyramids FC / Smouha SC), Ahmed Sayed Zizo (Zamalek SC), Imam Ashour (Al-Ahly SC), Mostafa Abdel-Raouf Ziko (ZED FC), Mahmoud Trezeguet (Al-Rayyan SC), Ibrahim Adel (Pyramids FC), Haithem Hassan (Real Oviedo)",
          delanteros: "Mohamed Salah (Liverpool FC), Omar Marmoush (Manchester City), Aktai Abdullah (ZED FC), Hamza Abdelkarim (FC Barcelona Atlètic/Al Ahly)",
        },
      },
      {
        team: "Irán",
        squad: {
          porteros: "Alireza Beyranvand (Tractor FC), Hosein Hoseini (Sepahan), Payam Niazmand (Persepolis)",
          defensas: "Shoja Khalilzadeh (Tractor FC), Hosein Kanaani (Persepolis), Ali Nemati (Foolad FC), Danial Eiri (Malavan Bandar Anzali), Ehsan Hajisafi (Sepahan), Milad Mohammadi (Persepolis), Saleh Hardani (Esteghlal), Ramin Rezaeiyan (Foolad)",
          centrocampistas: "Saman Ghodoos (Kalba), Saeid Ezatollahi (Shabab Al-Ahli Club), Rouzbeh Cheshmi (Esteghlal), Amir Mohammad Razagh Niya (Esteghlal), Mohammad Ghorbani (Al-Wahda), Mehdi Ghayedi (Al-Nasr), Ariya Yousefi (Sepahan), Alireza Jahanbakhsh (FCV Dender EH), Mehdi Torabi (Tractor FC), Mohammad Mohebbi (FK Rostov)",
          delanteros: "Mehdi Taremi (Olympiacos), Amirhossein Hosseinzadeh (Tractor FC), Denis Dargahi (Standard de Lieja), Ali Alipour (Persepolis), Shahriyar Moghanloo (Kalba)",
        },
      },
      {
        team: "Nueva Zelanda",
        squad: {
          porteros: "Max Crocombe (Millwall), Alex Paulsen (Lechia), Michael Woud (Auckland FC)",
          defensas: "Tyler Bindon (Sheffield United), Michael Boxall (Minnesota United), Liberato Cacace (Wrexham), Francis De Vries (Auckland FC), Callan Elliot (Auckland FC), Tim Payne (Wellington), Nando Pijnaker (Auckland FC), Tommy Smith (Braintree), Finn Surman (Portland Timbers)",
          centrocampistas: "Lachlan Bayliss (Newcastle), Joe Bell (Viking), Alex Rufer (Wellington), Marko Stamenić (Swansea), Ryan Thomas (PEC Zwolle)",
          delanteros: "Kosta Barbarouses (Western Sydney Wanderers), Matt Garbett (Peterborough), Eli Just (Motherwell), Callum McCowatt (Silkeborg), Ben Old (Saint-Étienne), Jesse Randall (Auckland FC), Sarpreet Singh (Wellington), Ben Waine (Port Vale), Chris Wood (Nottingham Forest)",
        },
      },
    ],
  },
  {
    group: "Grupo H",
    teams: [
      {
        team: "España",
        squad: {
          porteros: "Unai Simón (Athletic Club), David Raya (Arsenal), Joan García (FC Barcelona)",
          defensas: "Pedro Porro (Tottenham), Marcos Llorente (Atlético de Madrid), Marc Cucurella (Chelsea), Alex Grimaldo (Bayer Leverkusen), Aymeric Laporte (Athletic Club), Pau Cubarsí (FC Barcelona), Marc Pubill (Atlético de Madrid), Eric García (FC Barcelona)",
          centrocampistas: "Rodri (Manchester City), Martín Zubimendi (Arsenal), Fabián Ruiz (PSG), Pedri (FC Barcelona), Dani Olmo (FC Barcelona), Gavi (FC Barcelona), Alex Baena (Atlético de Madrid), Mikel Merino (Arsenal)",
          delanteros: "Lamine Yamal (FC Barcelona), Nico Williams (Athletic Club), Mikel Oyarzabal (Real Sociedad), Ferran Torres (FC Barcelona), Yeremi Pino (Crystal Palace), Victor Muñoz (Osasuna), Borja Iglesias (Celta)",
        },
      },
      {
        team: "Cabo Verde",
        squad: {
          porteros: "Josimar Dias (Chaves), Márcio da Rosa (Montana), Carlos Santos (San Diego)",
          defensas: "Steven Moreira (Columbus Crew), Wagner Pina (Trabzonspor), João Paulo Fernandes (FCSB), Sidny Lopes Cabral (Benfica), Logan Costa (Villarreal), Roberto Lopes (Shamrock Rovers), Kelvin Pires (SJK Seinäjoki), Ianique Tavares (Torreense), Edilson Borges (Al-Bataeh CSC)",
          centrocampistas: "Jamiro Monteiro (Zwolle), Telmo Arcanjo (Vitoria Guimarães), Yannick Semedo (Farense), Laros Duarte (Puskas AFC), Deroy Duarte (Ludogorets), Kevin Pina (Krasnodar)",
          delanteros: "Ryan Mendes (Igdir FK), Willy Semedo (Omonia Nicosia), Garry Rodrigues (Apollon Limassol), Jovane Cabral (Estrela Amadora), Nuno da Costa (Basaksehir FK), Dailon Livramento (Casa Pia), Gilson Benchimol (Akron Togliatti), Hélio Varela (Maccabi Tel Aviv)",
        },
      },
      {
        team: "Arabia Saudí",
        squad: {
          porteros: "Ahmed Alkassar (Al Qadsiah), Mohammed Alowais (Al Ula), Nawaf Alaqidi (Al Nassr)",
          defensas: "Abdulelah Alamri (Al Nassr), Ali Lajami (Al Hilal), Ali Majrashi (Al Ahli), Hassan Kadish (Al Ittihad), Hassan Altambakti (Al Hilal), Jehad Thikri (Al Qadsiah), Mohammed Abualshamat (Al Qadsiah), Moteb Alharbi (Al Hilal), Nawaf Buwashl (Al Nassr), Saud Abdulhamid (Lens)",
          centrocampistas: "Abdullah Alkhaibari (Al Nassr), Aiman Yahya (Al Nassr), Khalid Alghannam (Al Ettifaq), Mohamed Kanno (Al Hilal), Musab Aljuwayr (Al Qadsiah), Nasser Aldawsari (Al Hilal), Salem Aldawsari (Al Hilal), Sultan Mandash (Al Hilal), Ziyad Aljohani (Al Ahli), Alaa Al-Hejji (Neom)",
          delanteros: "Abdullah Alhamddan (Al Nassr), Feras Albrikan (Al Ahli), Saleh Alshehri (Al Ittihad)",
        },
      },
      {
        team: "Uruguay",
        squad: {
          porteros: "Sergio Rochet (Internacional), Fernando Muslera (Estudiantes de La Plata), Santiago Mele (Monterrey)",
          defensas: "Guillermo Varela (Flamengo), Ronald Araújo (FC Barcelona), José María Giménez (Atlético de Madrid), Santiago Bueno (Wolverhampton Wanderers), Sebastián Cáceres (Club América), Mathías Olivera (Napoli), Joaquín Piquerez (Palmeiras), Matías Viña (Flamengo)",
          centrocampistas: "Manuel Ugarte (Manchester United), Emiliano Martínez (Palmeiras), Rodrigo Bentancur (Tottenham Hotspur), Federico Valverde (Real Madrid), Agustín Canobbio (Fluminense), Juan Manuel Sanabria (Atlético de San Luis), Giorgian De Arrascaeta (Flamengo), Nicolás de la Cruz (Flamengo), Rodrigo Zalazar (SC Braga), Facundo Pellistri (Panathinaikos), Maximiliano Araújo (Sporting CP), Brian Rodríguez (Club América)",
          delanteros: "Rodrigo Aguirre (Club América), Federico Viñas (Real Oviedo), Darwin Núñez (Al-Hilal)",
        },
      },
    ],
  },
  {
    group: "Grupo I",
    teams: [
      {
        team: "Francia",
        squad: {
          porteros: "Mike Maignan (AC Milan), Brice Samba (Rennes), Robin Risser (Lens)",
          defensas: "Jules Kounde (FC Barcelona), Malo Gusto (Chelsea), William Saliba (Arsenal), Dayot Upamecano (FC Bayern), Ibrahima Konaté (Liverpool), Lucas Hernández (PSG), Theo Hernández (Al Hilal), Lucas Digne (Aston Villa), Maxence Lacroix (Crystal Palace)",
          centrocampistas: "Aurélien Tchouaméni (Real Madrid), Adrien Rabiot (AC Milan), N'Golo Kanté (Fenerbache), Warren Zaïre-Emery (PSG), Manu Koné (AS Roma)",
          delanteros: "Kylian Mbappé (Real Madrid), Michael Olise (FC Bayern), Ousmane Dembélé (PSG), Désiré Doué (PSG), Bradley Barcola (PSG), Marcus Thuram (Inter), Maghnes Akliouche (Mónaco), Jean-Philippe Mateta (Crystal Palace), Rayan Cherki (Manchester City)",
        },
      },
      {
        team: "Senegal",
        squad: {
          porteros: "Edouard Mendy (Al Ahli), Mory Diaw (Le Havre), Yehvann Diouf (Niza)",
          defensas: "Krépin Diatta (Mónaco), Antoine Mendy (Niza), Kalidou Koulibaly (Al Ahli), El Hadji Malick Diouf (West Ham), Mamadou Sarr (Estrasburgo), Moussa Niakhaté (O. Lyon), Moustapha Mbow (Paris), Abdoulaye Seck (Maccabi Haifa), Ismaïl Jakobs (Galatasaray), Ilay Camara (Anderlecht)",
          centrocampistas: "Idrissa Gana Gueye (Everton), Pape Gueye (Villarreal), Lamine Camara (Mónaco), Habib Diarra (Sunderland), Pathé Ciss (Rayo Vallecano), Pape Matar Sarr (Tottenham), Bara Sapoko Ndiaye (Bayern)",
          delanteros: "Sadio Mané (Al Nassr), Ismaïla Sarr (Crystal Palace), Iliman Ndiaye (Everton), Assane Diao (Como), Ibrahim Mbaye (PSG), Nicolas Jackson (Bayern), Bamba Dieng (Lorient), Cherif Ndiaye (Samsunspor)",
        },
      },
      {
        team: "Irak",
        squad: {
          porteros: "Jalal Hassan (Al-Zawraa), Ahmed Basil (Al-Shorta), Fahad Talib (Al-Talaba)",
          defensas: "Hussein Ali (Pogon Szczecin), Manaf Younis (Al-Shorta), Zaid Tahseen (Pakhtakor Tashkent), Rebin Sulaka (Port FC), Akam Hashem (Al-Zawraa), Merchas Doski (Viktoria Plzen), Ahmed Yahya (Al-Shorta), Frans Putros (PERSIB Bandung), Mustafa Saadoon (Al-Shorta)",
          centrocampistas: "Zaid Ismail (Al-Talaba), Amir Al Ammari (Cracovia), Kevin Yakob (Aarhus GF), Zidane Iqbal (Utrecht), Aimar Sher (Sarpsborg 08 FF), Youssef Amyn (AEK Larnaca), Ibrahim Bayesh (Al-Dhafra)",
          delanteros: "Ahmed Qasem (Nashville SC), Marko Farji (Venezia), Ali Jasim (Al-Najma), Ali Al Hamadi (Luton Town), Ali Yousif (Al-Talaba), Aymen Hussein (Al-Karma), Mohanad Ali (Dibba SCC)",
        },
      },
      {
        team: "Noruega",
        squad: {
          porteros: "Orjan Haskjold Nyland (Sevilla), Sander Tangvik (Hamburgo), Egil Selvik (Watford)",
          defensas: "Kristoffer Ajer (Brentford), David Moller Wolfe (Wolverhampton), Leo Ostigard (Génova), Fredrik Bjorkan (Bodo-Glimt), Marcus Pedersen (Torino), Torbjorn Heggem (Bologna), Sondre Langas (Derby County), Henrik Falchener (Viking FK), Julian Ryerson (Borussia Dortmund)",
          centrocampistas: "Morten Thorsby (Cremonese), Patrick Berg (Bodo-Glimt), Sander Berge (Fulham), Martin Odegaard (Arsenal), Fredrik Aursnes (Benfica), Kristian Thorstvedt (Sassuolo), Thelonious Aasgaard (Rangers), Antonio Nusa (RB Leipzig), Andreas Schjelderup (Benfica), Oscar Bob (Fulham), Jens Petter Hauge (Bodo-Glimt)",
          delanteros: "Alexander Sorloth (Atlético de Madrid), Erling Haaland (Manchester City), Jorgen Strand Larsen (Crystal Palace)",
        },
      },
    ],
  },
  {
    group: "Grupo J",
    teams: [
      {
        team: "Argentina",
        squad: {
          porteros: "Dibu Martínez (Aston Villa), Gerónimo Rulli (Olympique Marsella), Juan Musso (Atlético Madrid)",
          defensas: "Cristian Romero (Tottenham), Otamendi (Benfica), Nahuel Molina (Atlético Madrid), Nicolás Tagliafico (Ajax), Gonzalo Montiel (River), Leonardo Balerdi (Olympique Marsella), Lisandro Martínez (Manchester United), Facundo Medina (Olympique Marsella)",
          centrocampistas: "Enzo Fernández (Chelsea), Rodrigo de Paul (Inter Miami), Alexis Mac Allister (Liverpool), Leandro Paredes (Boca), Exequiel Palacios (Bayer Leverkusen), Valentín Barco (Estrasburgo), Giovani Lo Celso (Real Betis)",
          delanteros: "Lionel Messi (Inter Miami), Julián Álvarez (Atlético Madrid), Lautaro Martínez (Inter), José Manuel López (Palmeiras), Nico González (Atlético Madrid), Thiago Almada (Atlético Madrid), Giuliano Simeone (Atlético Madrid), Nico Paz (Como)",
        },
      },
      {
        team: "Argelia",
        squad: {
          porteros: "Luca Zidane (Granada CF), Oussama Benbot (USM Alger), Melvin Mastil (KVC Westerlo), Abdelatif Ramdane (MC Alger)",
          defensas: "Rafik Belghali (KV Mechelen), Samir Chergui (USM Alger), Rayan Aït-Nouri (Manchester City), Jaouen Hadjam (BSC Young Boys), Aïssa Mandi (LOSC Lille), Ramy Bensebaïni (Borussia Dortmund), Zineddine Belaïd (Saint-Trond VV), Achref Abada (MC Alger), Mohamed Amine Tougaï (Espérance de Tunis)",
          centrocampistas: "Nabil Bentaleb (LOSC Lille), Hicham Boudaoui (OGC Nice), Houssem Aouar (Al-Ittihad), Farès Chaïbi (Eintracht Frankfurt), Ibrahim Maza (Bayer Leverkusen), Yacine Titraoui (Charleroi SC), Ramiz Zerrouki (Feyenoord)",
          delanteros: "Mohamed Amine Amoura (VfL Wolfsburg), Nadhir Benbouali (Charleroi SC), Adil Boulbina (Paradou AC), Farès Ghedjemis (FC Vizela), Amine Gouiri (Olympique de Marseille), Anis Hadj Moussa (Feyenoord), Riyad Mahrez (Al-Ahli)",
        },
      },
      {
        team: "Austria",
        squad: {
          porteros: "Patrick Pentz (Brondy IF), Alexander Schlager (Red Bull Salzburgo), Florian Wiegele (Viktoria Pilsen)",
          defensas: "David Affengruber (Elche), David Alaba (Real Madrid), Kevin Danso (Tottenham), Marco Friedl (Werder Bremen), Philipp Lienhart (Friburgo), Phillipp Mwene (Mainz 05), Stefan Posch (Mainz 05), Alexander Prass (Hoffenheim), Michael Svoboda (Venezia)",
          centrocampistas: "Christoph Baumgartner (Red Bull Leipzig), Carney Chukwuemeka (Borussia Dortmund), Florian Grillitsch (Sporting Braga), Konrad Laimer (Bayern de Múnich), Marcel Sabitzer (Borussia Dortmund), Xavier Schlager (Red Bull Leipzig), Romano Schmid (Werder Bremen), Alessandro Schöpf (RZ Pellets), Nicolas Seiwald (Red Bull Leipzig), Paul Wanner (PSV), Patrick Wimmer (Wolfsburgo)",
          delanteros: "Marko Arnautovic (Estrella Roja), Michael Gregoritsch (Augsburgo), Sasa Kalajdzic (LASK Linz)",
        },
      },
      {
        team: "Jordania",
        squad: {
          porteros: "Nour Bani Attia (Al-Faisaly), Yazeed Abu Laila (Al-Hussein), Abdullah Al-Fakhoury (Al-Wehdat)",
          defensas: "Abdullah Naseeb (Al-Zawraa), Saad Al-Rousan (Al-Hussein), Yazan Al-Arab (FC Seúl), Saleem Obeid (Al-Hussein), Mohammad Abu Al-Nadi (Selangor), Hussam Abu Dahab (Al-Faisaly), Ihsan Haddad (Al-Hussein), Anas Badawi (Al-Faisaly), Mohammad Abu Hashish (Al-Karma)",
          centrocampistas: "Nour Al-Rawabdeh (Selangor), Nizar Al-Rashdan (Qatar SC), Ibrahim Saadeh (Al-Karma), Rajai Ayed (Al-Hussein), Amer Jamous (Al-Zawraa), Muhannad Abu Taha (Al-Hussein)",
          delanteros: "Mohammad Al-Dawood (Al-Wehdat), Mahmoud Mardi (Al-Hussein), Awda Al-Fakhoury (Pyramids), Mousa Al-Taamari (Stade Rennais), Mohammad Abu Zureiq (Raja CA), Ali Azayza (Al-Shabab), Ibrahim Sabra (Lokomotiv Zagreb), Ali Alwan (Al-Sailiya)",
        },
      },
    ],
  },
  {
    group: "Grupo K",
    teams: [
      {
        team: "Portugal",
        squad: {
          porteros: "Diogo Costa (Oporto), José Sá (Wolverhampton), Rui Silva (Sporting CP), Ricardo Velho (Farense)",
          defensas: "Diogo Dalot (Manchester United), Matheus Nunes (Manchester City), Nélson Semedo (Fenerbahçe), João Cancelo (Barcelona), Nuno Mendes (PSG), Gonçalo Inácio (Sporting CP), Renato Veiga (Villarreal), Rúben Dias (Manchester City), Tomás Araújo (Benfica)",
          centrocampistas: "Rúben Neves (Al Hilal), Samu Costa (Mallorca), João Neves (PSG), Vitinha (PSG), Bruno Fernandes (Manchester United), Bernardo Silva (Manchester City)",
          delanteros: "João Félix (Al Nassr), Francisco Trincão (Sporting CP), Francisco Conceição (Juventus), Pedro Neto (Chelsea), Rafael Leão (Milan), Gonçalo Guedes (Real Sociedad), Gonçalo Ramos (PSG), Cristiano Ronaldo (Al Nassr)",
        },
      },
      {
        team: "RD Congo",
        squad: {
          porteros: "Timothy Fayulu (FC Noah), Lionel Mpasi (Le Havre), Mattieu Epolo (Standard Lieja)",
          defensas: "Aaron Wan-Bissaka (West Ham), Gedeon Kalulu (Aris), Chancel Mbemba (LOSC Lille), Steve Kapuadi (Widzeu Lodz), Axel Tuanzebe (Burnley), Dylan Batubinsika (Larissa), Rocky Bushiri (Hibernian), Arthur Masuku (Lens), Joris Kayembe (KRC Genk)",
          centrocampistas: "Samuel Moutoussamy (Atromitos), Ngal'Ayel Mukau (LOSC Lille), Gael Kakuta (Larissa), Charles Pickel (Espanyol), Noah Sadiki (Sunderland), Edo Kayembe (Watford)",
          delanteros: "Théo Bongonda (Spartak Moscú), Nathanael Mbuku (Montpellier), Cédric Bakambu (Betis), Simon Banza (Al-Jazira), Fiston Mayele (Pyramids), Brian Cipenga (Castellón), Yoane Wissa (Newcastle), Meschack Elia (Alanyaspor)",
        },
      },
      {
        team: "Uzbekistán",
        squad: {
          porteros: "O'tkir Yusupov (Navbahor), Botirali Ergashev (Neftchi Fergana), Abduvohid Ne'matov (Nasaf Qarshi)",
          defensas: "Abdukodir Khusanov (Manchester City), Alijonov, Farrukh Sayfiev (Neftchi Fergana), Rustam Ashurmatov (Esteghlal), Sherzod Nasrullaev (Pakhtakor Tashkent), Umar Eshmurodov (Nasaf Qarshi), Avazbek O'Imasaliev, Jahongir Orozov (Dinamo Samarqand), Behruzjon Karimoov (Surkhon Termiz), Abdulla Abdullaev (Dibba Al-Fujairah Club)",
          centrocampistas: "Akmal Mozgovoy (Pajtakor Tashkent), Otabek Shukurov (Baniyas Club), Jamshid Iskanderov (Neftchi Fergana), Odil Hamrobekov (Tractor S.C.), Jaloliddin Masharipov (Esteghlal Tehran), Aziz Ganiev (Nasaf Qarshi), Sherzod Esanov (Bukhara), Abbosbek Fayzullaev (Basaksehir)",
          delanteros: "Eldor Shomurodov (Basaksehir), Igor Sergeev (Persépolis), Azizbek Amonov (Dinamo Samarcanda), Oston Urunov (Persépolis), Doston Khamdamov (Pakhtakor Tashkent)",
        },
      },
      {
        team: "Colombia",
        squad: {
          porteros: "Álvaro Montero (Vélez Sarsfield), Camilo Vargas (Atlas), David Ospina (Atlético Nacional)",
          defensas: "Daniel Muñoz (Crystal Palace), Santiago Arias (Independiente), Dávinson Sánchez (Galatasaray), Jhon Lucumí (Bologna), Yerry Mina (Cagliari), Willer Ditta (Cruz Azul), Déiver Machado (FC Nantes), Johan Mojica (Mallorca)",
          centrocampistas: "Gustavo Puerta (Racing de Santander), James Rodríguez (Minnesota United), Jefferson Lerma (Crystal Palace), Jhon Arias (Palmeiras), Jorge Carrascal (Flamengo), Juan Fernando Quintero (River Plate), Richard Ríos (Benfica), Kevin Castaño (River Plate), Jaminton Campaz (Rosario Central), Juan Portilla (Paranaense)",
          delanteros: "Luis Diaz (Bayern Múnich), Luis Suárez (Sporting), Jhon Córdoba (Krasnodar), Carlos Gómez (Vasco da Gama), Juan Camilo Hernández (Real Betis)",
        },
      },
    ],
  },
  {
    group: "Grupo L",
    teams: [
      {
        team: "Inglaterra",
        squad: {
          porteros: "Jordan Pickford (Everton), Dean Henderson (Crystal Palace), James Trafford (Manchester City)",
          defensas: "Reece James (Chelsea), Tino Livramento (Newcastle), John Stones (Manchester City), Marc Guéhi (Manchester City), Ezri Konsa (Aston Villa), Dan Burn (Newcastle), Jarell Quansah (Bayer Leverkusen), Nico O'Reilly (Manchester City), Djed Spence (Tottenham)",
          centrocampistas: "Jordan Henderson (Brentford), Elliot Anderson (Nottingham Forest), Declan Rice (Arsenal), Kobbie Mainoo (Manchester United), Eberechi Eze (Arsenal), Jude Bellingham (Real Madrid), Morgan Rogers (Aston Villa)",
          delanteros: "Bukayo Saka (Arsenal), Noni Madueke (Arsenal), Marcus Rashford (Barcelona), Anthony Gordon (Newcastle), Harry Kane (Bayern Múnich), Ollie Watkins (Aston Villa), Ivan Toney (Al-Ahli)",
        },
      },
      {
        team: "Croacia",
        squad: {
          porteros: "Dominic Livakovic (Dinamo), Dominik Kotarski (København), Ivor Pandur (Hull City)",
          defensas: "Josko Gvardiol (Man. City), Duje Caleta-Car (Real Sociedad), Josip Sutalo (Ajax), Josip Stanisic (Bayern de Múnich), Marin Pongracic (Fiorentina), Martin Erlic (Midtjylland), Luka Vuskovic (HSV)",
          centrocampistas: "Luka Modric (Milan), Mateo Kovacic (Man. City), Mario Pasalic (Atalanta), Nikola Vlasic (Torino), Luka Sucic (Real Sociedad), Martin Baturina (Como), Kristijan Jakic (Augsburg), Petar Sucic (Inter), Nikola Moro (Bologna), Toni Fruk (Rijeka)",
          delanteros: "Ivan Perisic (PSV), Andrej Kramaric (Hoffenheim), Ante Budimir (Osasuna), Marco Pasalic (Orlando City), Petar Musa (Dallas), Igor Matanovic (Friburgo)",
        },
      },
      {
        team: "Ghana",
        squad: {
          porteros: "Benjamin Asare (Hearts of Oak), Lawrence Ati-Zigi (St. Gallen), Joseph Anang (St. Patrick Athletic)",
          defensas: "Baba Abdul Rahman (PAOK), Gideon Mensah (Auxerre), Marvin Senaya (Auxerre), Alidu Seidu (Stade Rennais), Abdul Mumin (Rayo Vallecano), Jerome Opoku (Estambul Basaksehir), Jonas Adjetey (Wolfsburgo), Kojo Oppong Peprah (Niza), Derrick Luckassen (Pafos)",
          centrocampistas: "Elisha Owusu (Auxerre), Thomas Partey (Villarreal), Kwasi Sibo (Oviedo), Augustine Boakye (Saint-Étienne), Caleb Yirenky (Nordsjaelland), Abdul Fatawu Issahaku (Leicester City), Kamal Deen Sulemana (Atalanta)",
          delanteros: "Cristopher Bonsu Baah (Al-Qadisiyah), Ernest Nuamah (Lyon), Antoine Semenyo (Manchester City), Brandon Thomas-Asante (Coventry City), Prince Kwabena Adu (Viktoria Plzen), Iñaki Williams (Athletic Club), Jordan Ayew (Leicester City)",
        },
      },
      {
        team: "Panamá",
        squad: {
          porteros: "Orlando Mosquera (Al Fayha FC), Luis Mejía (Club Nacional), César Samudio (CD Marathón)",
          defensas: "César Blackman (Slovan Bratislava), Jorge Gutiérrez (Deportivo La Guaira), Amir Murillo (Beşiktaş), Fidel Escobar (Deportivo Saprissa), Andrés Andrade (LASK), Edgardo Fariña (FC Pari Nizhniy Novgorod), José Córdoba (Norwich City), Eric Davis (Plaza Amador), Jiovany Ramos (Puerto Cabello), Roderick Miller (Turan Tovuz)",
          centrocampistas: "Aníbal Godoy (San Diego FC), Adalberto Carrasquilla (UNAM), Carlos Harvey (Minnesota United), Cristian Martínez (Ironi Kiryat Shmona), José Luis Rodríguez (Juárez), César Yanis (Cobresal), Yoel Bárcenas (Mazatlán FC), Alberto Quintero (CD Plaza Amador), Azarías Londoño (CD Universidad Católica)",
        },
      },
    ],
  },
];
