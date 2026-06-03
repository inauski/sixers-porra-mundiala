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

// Roster per national team for the tournament prediction.
const ROSTERS: Record<string, RosterEntry> = {
  "México": {
    GK: ["Raúl Rangel", "Carlos Acevedo", "Guillermo Ochoa"],
    DEF: ["Israel Reyes", "Jorge Sánchez", "César Montes", "Edson Álvarez", "Johan Vásquez", "Jesús Gallardo", "Mateo Chávez"],
    MID: ["Álvaro Fidalgo", "Brian Gutiérrez", "Orbelín Pineda", "Erik Lira", "Luis Romo", "Obed Vargas", "Gilberto Mora", "Luis Chávez"],
    FWD: ["Roberto Alvarado", "César Huerta", "Guillermo Martínez", "Armando González", "Santiago Giménez", "Raúl Jiménez", "Julián Quiñones", "Alexis Vega"],
  },
  "Sudáfrica": {
    GK: ["Ronwen Williams", "Ricardo Goss", "Sipho Chaine"],
    DEF: ["Khuliso Mudau", "Nkosinathi Sibisi", "Ime Okon", "Khulumani Ndamane", "Aubrey Modiba", "Samukelo Kabini", "Thabang Matuludi", "Olwethu Makhanya", "Kamogelo Sebelebele", "Bradley Cross", "Mbekezeli Mbokazi"],
    MID: ["Teboho Mokoena", "Thalente Mbatha", "Sphephelo Sithole", "Jayden Adams"],
    FWD: ["Oswin Appollis", "Iqraam Rayners", "Tshepang Moremi", "Relebohile Mofokeng", "Evidence Makgopa", "Themba Zwane", "Lyle Foster", "Thapelo Maseko"],
  },
  "Corea del Sur": {
    GK: ["Kim Seung-Gyu", "Song Bum Keun", "Jo Hyeon-Woo"],
    DEF: ["Kim Moon-Hwan", "Kim Min-Jae", "Kim Tae-Hwan", "Park Jin-Seob", "Seol Young-Woo", "Jens Castrop", "Lee Ki-Hyuk", "Lee Tae-Seok", "Lee Han-Beom", "Cho Yumin"],
    MID: ["Kim Jin-Gyu", "Bae Jun-Ho", "Paik Seung-Ho", "Yang Hyun-Jun", "Eom Ji-Sung", "Lee Kang-In", "Lee Dong-Gyeong", "Lee Jae-Sung", "Hwang In-Beom", "Hwang Hee-Chan"],
    FWD: ["Son Heung-Min", "Oh Hyeon-Gyu", "Cho Gue-Sung"],
  },
  "República Checa": {
    GK: ["Lukas Hornicek", "Matej Kovar", "Jindrich Stanek"],
    DEF: ["Ladislav Krejci", "Robin Hranac", "Stepan Chaloupek", "David Zima", "Tomas Holes", "Jaroslav Zeleny", "David Jurasek", "Vladimir Coufal"],
    MID: ["Tomas Soucek", "Michal Sadilek", "Lukas Cerv", "Hugo Sochurek", "Alexander Sojka", "Vladimir Darida", "David Doudera", "Pavel Sulc", "Denis Visinsky"],
    FWD: ["Patrick Schick", "Lukas Provod", "Adam Hlozek", "Mojmir Chytil", "Jan Kuchta", "Tomas Chory"],
  },
  "Canadá": {
    GK: ["Maxime Crépeau", "Owen Goodman", "Dayne St. Clair"],
    DEF: ["Moïse Bombito", "Derek Cornelius", "Alphonso Davies", "Luc de Fougerolles", "Alistair Johnston", "Alfie Jones", "Richie Laryea", "Niko Sigur", "Joel Waterman"],
    MID: ["Ali Ahmed", "Tajon Buchanan", "Mathieu Choinière", "Stephen Eustáquio", "Marcelo Flores", "Ismaël Koné", "Liam Millar", "Jonathan Osorio", "Nathan Saliba", "Jacob Shaffelburg"],
    FWD: ["Jonathan David", "Promise David", "Cyle Larin", "Tani Oluwaseyi"],
  },
  "Bosnia": {
    GK: ["Nikola Vasilj", "Martin Zlomislic", "Osman Hadzikic"],
    DEF: ["Sead Kolasinac", "Amar Dedic", "Nihad Mujakic", "Nikola Katic", "Tarik Muharemovic", "Stjepan Radeljic", "Dennis Hadzikadunic", "Nidal Celik"],
    MID: ["Amir Hadziahmetovic", "Ivan Sunjic", "Ivan Basic", "Dzenis Burnic", "Ermin Mahmic", "Benjamin Tahirovic", "Amar Memic", "Armin Gigovic", "Kerim Alajbegovic", "Esmir Bajraktarevic"],
    FWD: ["Ermedin Demirovic", "Jovo Lukic", "Samed Bazdar", "Haris Tabakovic", "Edin Dzeko"],
  },
  "Catar": {
    GK: ["Mahmoud Abunada", "Meshaal Barsham", "Salah Zakaria"],
    DEF: ["Ayoub Al Alawi", "Boualem Khoukhi", "Homam Al Amin", "Lucas Mendes", "Issa Laye", "Pedro Miguel", "Alhashmi Alhussain", "Sultan Al Brake"],
    MID: ["Assim Madibo", "Abdulaziz Hatem", "Ahmed Fathy", "Karim Boudiaf", "Jassim Gaber", "Mohamed Manai"],
    FWD: ["Ahmed Al Janhi", "Ahmed Alaa", "Akram Afif", "Almoez Ali", "Edmilson Junior", "Hassan Al Haydos", "Mohammed Muntari", "Tahsin Mohammed", "Yusuf Abdurisag"],
  },
  "Suiza": {
    GK: ["Marvin Keller", "Gregor Kobel", "Yvon Mvogo"],
    DEF: ["Manuel Akanji", "Aurèle Amenda", "Eray Cömert", "Nico Elvedi", "Luca Jaquez", "Miro Muheim", "Ricardo Rodríguez", "Silvan Widmer"],
    MID: ["Granit Xhaka", "Denis Zakaria", "Michel Aebischer", "Christian Fassnacht", "Remo Freuler", "Ardon Jashari", "Johan Manzambi", "Fabian Rieder", "Djibril Sow"],
    FWD: ["Zeki Amdouni", "Breel Embolo", "Cedric Itten", "Dan Ndoye", "Noah Okafor", "Ruben Vargas"],
  },
  "Brasil": {
    GK: ["Alisson", "Ederson", "Weverton"],
    DEF: ["Marquinhos", "Gabriel Magalhães", "Bremer", "Ibáñez", "Léo Pereira", "Wesley", "Danilo", "Alex Sandro", "Douglas Santos"],
    MID: ["Casemiro", "Bruno Guimarães", "Fabinho", "Danilo (Botafogo)", "Lucas Paquetá"],
    FWD: ["Vinicius Jr.", "Raphinha", "Matheus Cunha", "Luiz Henrique", "Igor Thiago", "Endrick", "Martinelli", "Rayan", "Neymar"],
  },
  "Marruecos": {
    GK: ["Yassine Bounou", "Munir El Kajoui", "Ahmed Reda Tagnaouti"],
    DEF: ["Achraf Hakimi", "Nayef Aguerd", "Noussair Mazraoui", "Anass Salah-Eddine", "Chadi Riad", "Youssef Belammari", "Issa Diop", "Redouane Hahlal", "Zakaria El Ouahdi"],
    MID: ["Sofyan Amrabat", "Ismael Saibari", "Neil El Aynaoui", "Bilal El Khannouss", "Azzedine Ounahi", "Bouaddi", "Samir El Mourabet"],
    FWD: ["Brahim Díaz", "Chemsdine Talbi", "Ayoub El Kaabi", "Soufiane Rahimi", "Abde Ezzalzouli", "Ayoube Amaimouni", "Yassine Gessime"],
  },
  "Haití": {
    GK: ["Johnny Placide", "Alexandre Pierre", "Josué Duverger"],
    DEF: ["Carlens Arcus", "Wilguens Paugain", "Duke Lacroix", "Martin Experience", "JK Duverne", "Ricardo Adé", "Hannes Delcroix", "Keeto Thermoncy"],
    MID: ["Leverton Pierre", "Carl-Fred Sainthe", "Jean-Jacques Danley", "Jeanricner Bellegarde", "Pierre Woodenski", "Dominique Simon"],
    FWD: ["Louicius Deedson", "Ruben Providence", "Josué Casimir", "Derrick Etienne", "Wilson Isidor", "Duckens Nazon", "Frantzdy Pierrot", "Yassin Fortune", "Lenny Joseph"],
  },
  "Escocia": {
    GK: ["Craig Gordon", "Angus Gunn", "Liam Kelly"],
    DEF: ["Grant Hanley", "Jack Hendry", "Aaron Hickey", "Dom Hyam", "Scott McKenna", "Nathan Patterson", "Anthony Ralston", "Andy Robertson", "John Souttar", "Kieran Tierney"],
    MID: ["Ryan Christie", "Findlay Curtis", "Lewis Ferguson", "Ben Gannon-Doak", "Tyler Fletcher", "John McGinn", "Kenny McLean", "Scott McTominay"],
    FWD: ["Ché Adams", "Lyndon Dykes", "George Hirst", "Lawrence Shankland", "Ross Stewart"],
  },
  "USA": {
    GK: ["Matt Freese", "Matt Turner", "Chris Brady"],
    DEF: ["Max Arfsten", "Sergiño Dest", "Alex Freeman", "Mark McKenzie", "Tim Ream", "Chris Richards", "Antonee Robinson", "Miles Robinson", "Joe Scally", "Auston Trusty"],
    MID: ["Tyler Adams", "Sebastian Berhalter", "Weston McKennie", "Cristian Roldán", "Brenden Aaronson", "Christian Pulisic", "Gio Reyna", "Malik Tillman", "Tim Weah", "Alejandro Zendejas"],
    FWD: ["Folarin Balogun", "Ricardo Pepi", "Haji Wright"],
  },
  "Paraguay": {
    GK: ["Orlando Gill", "Roberto Fernández", "Gastón Olveira"],
    DEF: ["Juan Cáceres", "Gustavo Velázquez", "Gustavo Gómez", "Junior Alonso", "José Canale", "Omar Alderete", "Alessandro Maidana", "Fabián Balbuena", "Mauricio Magalhães"],
    MID: ["Damián Bobadilla", "Braian Ojeda", "Andrés Cubas", "Matías Galarza", "Alejandro Romero Gamarra", "Gustavo Caballero", "Ramón Sosa", "Diego Gómez"],
    FWD: ["Alex Arce", "Gabriel Ávalos", "Isidro Pitta", "Miguel Almirón", "Julio Enciso", "Antonio Sanabria"],
  },
  "Australia": {
    GK: ["Matthew Ryan", "Patrick Beach", "Paul Izzo"],
    DEF: ["Harry Souttar", "Alessandro Circati", "Jordan Bos", "Cameron Burgess", "Milos Degenek", "Aziz Behich", "Jason Geria", "Lucas Herrington", "Kai Trewin", "Jacob Italiano"],
    MID: ["Jackson Irvine", "Paul Okon-Engstler", "Cameron Devlin", "Ajdin Hrustic", "Connor Metcalfe", "Aiden O'Neill"],
    FWD: ["Mathew Leckie", "Nishan Velupillay", "Nestoy Irakunda", "Awer Mabil", "Mohamed Touré", "Cristian Volpato", "Tete Yengi"],
  },
  "Turquía": {
    GK: ["Altay Bayindir", "Uğurcan Çakır", "Mert Günok"],
    DEF: ["Ferdi Kadıoğlu", "Merih Demiral", "Mert Çelik", "Ozan Kabak", "Mert Müldür", "Abdülkerim Bardakcı", "Eren Elmalı", "Çağlar Söyüncü", "Samet Akaydin"],
    MID: ["Arda Güler", "Can Uzun", "Orkun Kökçü", "Hakan Çalhanoğlu", "İsmail Yüksek", "Kaan Ayhan", "Salih Özcan"],
    FWD: ["Kenan Yıldız", "Barış Alper Yılmaz", "Kerem Aktürkoğlu", "Yunus Akgün", "Oğuz Aydın", "Deniz Gül", "İrfan Can Kahveci"],
  },
  "Alemania": {
    GK: ["Manuel Neuer", "Oliver Baumann", "Alexander Nübel"],
    DEF: ["Waldemar Anton", "Nathaniel Brown", "Pascal Groß", "Joshua Kimmich", "David Raum", "Antonio Rüdiger", "Nico Schlotterbeck", "Jonathan Tah", "Malick Thiaw"],
    MID: ["Aleksandar Pavlovic", "Jamal Musiala", "Nadiem Amiri", "Jamie Leweling", "Felix Nmecha", "Angelo Stiller", "Leon Goretzka", "Lennart Karl", "Florian Wirtz"],
    FWD: ["Deniz Undav", "Kai Havertz", "Maximilian Beier", "Leroy Sané", "Nick Woltemade"],
  },
  "Curazao": {
    GK: ["Tyrick Bodak", "Trevor Doornbusch", "Eloy Room"],
    DEF: ["Riechedly Bazoer", "Joshua Brenet", "Roshon Van Eijma", "Sherel Floranus", "Deveron Fonville", "Juriën Gaari", "Armando Obispo", "Shurandy Sambo"],
    MID: ["Juninho Bacuna", "Leandro Bacuna", "Livano Comenencia", "Kevin Felida", "Arjany Martha", "Tyrese Noslin", "Godfried Roemeratoe"],
    FWD: ["Jeremy Antonisse", "Tahith Chong", "Kenji Gorré", "Sontje Hansen", "Gervane Kastaneer", "Brandley Kuwas", "Jürgen Locadia", "Jearl Margaritha"],
  },
  "Costa de Marfil": {
    GK: ["Yahia Fofana", "Mohamed Kone", "Alban Lafont"],
    DEF: ["Emmanuel Agbadou", "Clément Akpa", "Ousmane Diomande", "Guéla Doué", "Ghislain Konan", "Odilon Kossounou", "Evan N'Dicka", "Wilfried Singo"],
    MID: ["Seko Fofana", "Parfait Guiagon", "Christ Inao Oulai", "Franck Kessié", "Ibrahim Sangaré", "Jean Michaël Seri"],
    FWD: ["Simón Adingra", "Ange-Yoan Bonny", "Amad Diallo", "Oumar Diakite", "Yan Diomande", "Evann Guessand", "Nicolas Pepe", "Bazoumana Toure", "Elye Wahi"],
  },
  "Ecuador": {
    GK: ["Hernán Galíndez", "Moisés Ramírez", "Gonzalo Valle"],
    DEF: ["Willian Pacho", "Piero Hincapié", "Joel Ordóñez", "Jackson Porozo", "Félix Torres", "Pervis Estupiñán", "Yaimar Medina", "Ángelo Preciado"],
    MID: ["Moisés Caicedo", "Jordi Alcívar", "Denil Castillo", "Alan Franco", "Kendry Páez", "Nilson Angulo"],
    FWD: ["Gonzalo Plata", "John Yeboah", "Enner Valencia", "Jordy Caicedo", "Jeremy Arévalo", "Anthony Valencia", "Kevin Rodríguez"],
  },
  "Países Bajos": {
    GK: ["Bart Verbruggen", "Robin Roefs", "Mark Flekken"],
    DEF: ["Nathan Aké", "Virgil van Dijk", "Jorrel Hato", "Jan Paul van Hecke", "Denzel Dumfries", "Jurriën Timber", "Micky van de Ven"],
    MID: ["Ryan Gravenberch", "Frenkie de Jong", "Marten de Roon", "Tijjani Reijnders", "Teun Koopmeiners", "Noa Lang", "Mats Wieffer", "Quinten Timber", "Crysencio Summerville", "Guus Til"],
    FWD: ["Brian Brobbey", "Memphis Depay", "Cody Gakpo", "Justin Kluivert", "Donyell Malen", "Wout Weghorst"],
  },
  "Japón": {
    GK: ["Zion Suzuki", "Keisuke Osako", "Tomoki Hayakawa"],
    DEF: ["Yuto Nagatomo", "Shogo Taniguchi", "Ko Itakura", "Takehiro Tomiyasu", "Ayumu Seko", "Yukinari Sugawara", "Hiroki Ito", "Junnosuke Suzuki", "Tsuyoshi Watanabe"],
    MID: ["Kaishu Sano", "Wataru Endo", "Ao Tanaka", "Daichi Kamada", "Junya Ito"],
    FWD: ["Kaito Nakamura", "Daizen Maeda", "Koki Ogawa", "Takefusa Kubo", "Yuito Suzuki", "Kento Shiogai", "Keisuke Goto", "Ritsu Doan", "Ayase Ueda"],
  },
  "Suecia": {
    GK: ["Jacob Zetterström", "Viktor Johansson", "Kristoffer Nordfeldt"],
    DEF: ["Gustav Lagerbielke", "Victor Lindelöf", "Isak Hien", "Gabriel Gudmundsson", "Herman Johansson", "Daniel Svensson", "Hjalmar Ekdal", "Carl Starfelt", "Eric Smith", "Elliot Stroud"],
    MID: ["Lucas Bergvall", "Ken Sema", "Jesper Karlström", "Yasin Ayari", "Mattias Svanberg", "Besfort Zeneli"],
    FWD: ["Alexander Isak", "Viktor Gyökeres", "Benjamin Nygren", "Anthony Elanga", "Alexander Bernhardsson", "Gustaf Nilsson", "Taha Ali"],
  },
  "Túnez": {
    GK: ["Aymen Dahmen", "A. Chamakh", "Sabri Ben Hassen"],
    DEF: ["Van Valery", "Moutaz Neffati", "Dylan Bronn", "Montassar Talbi", "Omar Rekik", "Adem Arous", "Raed Chikhaoui", "Ali Abdi", "M.A Ben Hmida"],
    MID: ["Ellyes Skhiri", "M. Hadj Mahmoud", "Rani Khedira", "Anis Ben Slimane", "Mortadha Ben Ouanes", "Ismaël Gharbi", "Hannibal Mejbri"],
    FWD: ["Khalil Ayari", "Elias Achouri", "Elias Saad", "Firas Chaouat", "Hazem Mastouri", "Rayan Elloumi", "Sebastian Tounekti"],
  },
  "Bélgica": {
    GK: ["Thibaut Courtois", "Senne Lammens", "Mike Penders"],
    DEF: ["Zeno Debast", "Arthur Theate", "Koni de Winter", "Brandon Mechele", "Nathan Ngoy", "Thomas Meunier", "Timothy Castagne", "Maxim de Cuyper", "Joaquin Seys"],
    MID: ["Kevin de Bruyne", "Amadou Onana", "Youri Tielemans", "Hans Vanaken", "Nicolas Raskin", "Axel Witsel"],
    FWD: ["Jérémy Doku", "Leandro Trossard", "Alexis Saelemaekers", "Dodi Lukebakio", "Romelu Lukaku", "Charles de Ketelaere", "Matias Fernández-Pardo", "Diego Moreira"],
  },
  "Egipto": {
    GK: ["Mohamed El Shenawy", "Mostafa Shobeir", "Al-Mahdy Soliman", "Mohamed Alaa"],
    DEF: ["Mohamed Hany", "Tarek El Ala", "Hamdi Fathy", "Ramy Rabia", "Yasser Ibrahim", "Hossam Abdel-Maguid", "Mohamed Abdelmonem", "Ahmed Fotouh", "Karim Hafez"],
    MID: ["Marwan Attia", "Mohand Lashin", "Nabil Emad Dunga", "Mahmoud Saber", "Ahmed Sayed Zizo", "Imam Ashour", "Mostafa Abdel-Raouf Ziko", "Mahmoud Trezeguet", "Ibrahim Adel", "Haithem Hassan"],
    FWD: ["Mohamed Salah", "Omar Marmoush", "Aktai Abdullah", "Hamza Abdelkarim"],
  },
  "Irán": {
    GK: ["Alireza Beyranvand", "Hosein Hoseini", "Payam Niazmand"],
    DEF: ["Shoja Khalilzadeh", "Hosein Kanaani", "Ali Nemati", "Danial Eiri", "Ehsan Hajisafi", "Milad Mohammadi", "Saleh Hardani", "Ramin Rezaeiyan"],
    MID: ["Saman Ghoddos", "Saeid Ezatolahi", "Rouzbeh Cheshmi", "Amir Mohammad Razagh Niya", "Mohammad Ghorbani", "Mehdi Ghayedi", "Ariya Yousefi", "Alireza Jahanbakhsh", "Mehdi Torabi", "Mohammad Mohebbi"],
    FWD: ["Mehdi Taremi", "Amirhossein Hosseinzadeh", "Denis Dargahi", "Ali Alipour", "Shahriyar Moghanloo"],
  },
  "Nueva Zelanda": {
    GK: ["Max Crocombe", "Alex Paulsen", "Michael Woud"],
    DEF: ["Tyler Bindon", "Michael Boxall", "Liberato Cacace", "Francis De Vries", "Callan Elliot", "Tim Payne", "Nando Pijnaker", "Tommy Smith", "Finn Surman"],
    MID: ["Lachlan Bayliss", "Joe Bell", "Alex Rufer", "Marko Stamenić", "Ryan Thomas"],
    FWD: ["Kosta Barbarouses", "Matt Garbett", "Eli Just", "Callum McCowatt", "Ben Old", "Jesse Randall", "Sarpreet Singh", "Ben Waine", "Chris Wood"],
  },
  "España": {
    GK: ["Unai Simón", "David Raya", "Joan García"],
    DEF: ["Pedro Porro", "Marcos Llorente", "Marc Cucurella", "Alex Grimaldo", "Aymeric Laporte", "Pau Cubarsí", "Marc Pubill", "Eric García"],
    MID: ["Rodri", "Martín Zubimendi", "Fabián Ruiz", "Pedri", "Dani Olmo", "Gavi", "Alex Baena", "Mikel Merino"],
    FWD: ["Lamine Yamal", "Nico Williams", "Mikel Oyarzabal", "Ferran Torres", "Yeremi Pino", "Victor Muñoz", "Borja Iglesias"],
  },
  "Cabo Verde": {
    GK: ["Josimar Dias", "Márcio da Rosa", "Carlos Santos"],
    DEF: ["Steven Moreira", "Wagner Pina", "João Paulo Fernandes", "Sidny Lopes Cabral", "Logan Costa", "Roberto Lopes", "Kelvin Pires", "Ianique Tavares", "Edilson Borges"],
    MID: ["Jamiro Monteiro", "Telmo Arcanjo", "Yannick Semedo", "Laros Duarte", "Deroy Duarte", "Kevin Pina"],
    FWD: ["Ryan Mendes", "Willy Semedo", "Garry Rodrigues", "Jovane Cabral", "Nuno da Costa", "Dailon Livramento", "Gilson Benchimol", "Hélio Varela"],
  },
  "Arabia Saudí": {
    GK: ["Ahmed Alkassar", "Mohammed Alowais", "Nawaf Alaqidi"],
    DEF: ["Abdulelah Alamri", "Ali Lajami", "Ali Majrashi", "Hassan Kadish", "Hassan Altambakti", "Jehad Thikri", "Mohammed Abualshamat", "Moteb Alharbi", "Nawaf Buwashl", "Saud Abdulhamid"],
    MID: ["Abdullah Alkhaibari", "Aiman Yahya", "Khalid Alghannam", "Mohamed Kanno", "Musab Aljuwayr", "Nasser Aldawsari", "Salem Aldawsari", "Sultan Mandash", "Ziyad Aljohani", "Alaa Al-Hejji"],
    FWD: ["Abdullah Alhamddan", "Feras Albrikan", "Saleh Alshehri"],
  },
  "Uruguay": {
    GK: ["Sergio Rochet", "Fernando Muslera", "Santiago Mele"],
    DEF: ["Guillermo Varela", "Ronald Araújo", "José María Giménez", "Santiago Bueno", "Sebastián Cáceres", "Mathías Olivera", "Joaquín Piquerez", "Matías Viña"],
    MID: ["Manuel Ugarte", "Emiliano Martínez", "Rodrigo Bentancur", "Federico Valverde", "Agustín Canobbio", "Juan Manuel Sanabria", "Giorgian De Arrascaeta", "Nicolás de la Cruz", "Rodrigo Zalazar", "Facundo Pellistri", "Maximiliano Araújo", "Brian Rodríguez"],
    FWD: ["Rodrigo Aguirre", "Federico Viñas", "Darwin Núñez"],
  },
  "Francia": {
    GK: ["Mike Maignan", "Brice Samba", "Robin Risser"],
    DEF: ["Jules Koundé", "Malo Gusto", "William Saliba", "Dayot Upamecano", "Ibrahima Konaté", "Lucas Hernández", "Theo Hernández", "Lucas Digne", "Maxence Lacroix"],
    MID: ["Aurélien Tchouaméni", "Adrien Rabiot", "N'Golo Kanté", "Warren Zaïre-Emery", "Manu Koné"],
    FWD: ["Kylian Mbappé", "Michael Olise", "Ousmane Dembélé", "Désiré Doué", "Bradley Barcola", "Marcus Thuram", "Maghnes Akliouche", "Jean-Philippe Mateta", "Rayan Cherki"],
  },
  "Senegal": {
    GK: ["Edouard Mendy", "Mory Diaw", "Yehvann Diouf"],
    DEF: ["Krépin Diatta", "Antoine Mendy", "Kalidou Koulibaly", "El Hadji Malick Diouf", "Mamadou Sarr", "Moussa Niakhaté", "Moustapha Mbow", "Abdoulaye Seck", "Ismaïl Jakobs", "Ilay Camara"],
    MID: ["Idrissa Gana Gueye", "Pape Gueye", "Lamine Camara", "Habib Diarra", "Pathé Ciss", "Pape Matar Sarr", "Bara Sapoko Ndiaye"],
    FWD: ["Sadio Mané", "Ismaïla Sarr", "Iliman Ndiaye", "Assane Diao", "Ibrahim Mbaye", "Nicolas Jackson", "Bamba Dieng", "Cherif Ndiaye"],
  },
  "Irak": {
    GK: ["Jalal Hassan", "Ahmed Basil", "Fahad Talib"],
    DEF: ["Hussein Ali", "Manaf Younis", "Zaid Tahseen", "Rebin Sulaka", "Akam Hashem", "Merchas Doski", "Ahmed Yahya", "Frans Putros", "Mustafa Saadoon"],
    MID: ["Zaid Ismail", "Amir Al Ammari", "Kevin Yakob", "Zidane Iqbal", "Aimar Sher", "Youssef Amyn", "Ibrahim Bayesh"],
    FWD: ["Ahmed Qasem", "Marko Farji", "Ali Jasim", "Ali Al Hamadi", "Ali Yousif", "Aymen Hussein", "Mohanad Ali"],
  },
  "Noruega": {
    GK: ["Ørjan Haskjold Nyland", "Sander Tangvik", "Egil Selvik"],
    DEF: ["Kristoffer Ajer", "David Moller Wolfe", "Leo Ostigard", "Fredrik Bjorkan", "Marcus Pedersen", "Torbjorn Heggem", "Sondre Langas", "Henrik Falchener", "Julian Ryerson"],
    MID: ["Morten Thorsby", "Patrick Berg", "Sander Berge", "Martin Ødegaard", "Fredrik Aursnes", "Kristian Thorstvedt", "Thelonious Aasgaard", "Antonio Nusa", "Andreas Schjelderup", "Oscar Bobb", "Jens Petter Hauge"],
    FWD: ["Alexander Sørloth", "Erling Haaland", "Jørgen Strand Larsen"],
  },
  "Argentina": {
    GK: ["Emiliano Martínez", "Gerónimo Rulli", "Juan Musso"],
    DEF: ["Cristian Romero", "Nicolás Otamendi", "Nahuel Molina", "Nicolás Tagliafico", "Gonzalo Montiel", "Leonardo Balerdi", "Lisandro Martínez", "Facundo Medina"],
    MID: ["Enzo Fernández", "Rodrigo De Paul", "Alexis Mac Allister", "Leandro Paredes", "Exequiel Palacios", "Valentín Barco", "Giovani Lo Celso"],
    FWD: ["Lionel Messi", "Julián Álvarez", "Lautaro Martínez", "José Manuel López", "Nicolás González", "Thiago Almada", "Giuliano Simeone", "Nico Paz"],
  },
  "Argelia": {
    GK: ["Luca Zidane", "Oussama Benbot", "Melvin Mastil", "Abdelatif Ramdane"],
    DEF: ["Rafik Belghali", "Samir Chergui", "Rayan Aït-Nouri", "Jaouen Hadjam", "Aïssa Mandi", "Ramy Bensebaïni", "Zineddine Belaïd", "Achref Abada", "Mohamed Amine Tougaï"],
    MID: ["Nabil Bentaleb", "Hicham Boudaoui", "Houssem Aouar", "Farès Chaïbi", "Ibrahim Maza", "Yacine Titraoui", "Ramiz Zerrouki"],
    FWD: ["Mohamed Amine Amoura", "Nadhir Benbouali", "Adil Boulbina", "Farès Ghedjemis", "Amine Gouiri", "Anis Hadj Moussa", "Riyad Mahrez"],
  },
  "Austria": {
    GK: ["Patrick Pentz", "Alexander Schlager", "Florian Wiegele"],
    DEF: ["David Affengruber", "David Alaba", "Kevin Danso", "Marco Friedl", "Philipp Lienhart", "Phillipp Mwene", "Stefan Posch", "Alexander Prass", "Michael Svoboda"],
    MID: ["Christoph Baumgartner", "Carney Chukwuemeka", "Florian Grillitsch", "Konrad Laimer", "Marcel Sabitzer", "Xaver Schlager", "Romano Schmid", "Alessandro Schöpf", "Nicolas Seiwald", "Paul Wanner", "Patrick Wimmer"],
    FWD: ["Marko Arnautović", "Michael Gregoritsch", "Sasa Kalajdzic"],
  },
  "Jordania": {
    GK: ["Nour Bani Attia", "Yazeed Abu Laila", "Abdullah Al-Fakhoury"],
    DEF: ["Abdullah Naseeb", "Saad Al-Rousan", "Yazan Al-Arab", "Saleem Obeid", "Mohammad Abu Al-Nadi", "Hussam Abu Dahab", "Ihsan Haddad", "Anas Badawi", "Mohammad Abu Hashish"],
    MID: ["Nour Al-Rawabdeh", "Nizar Al-Rashdan", "Ibrahim Saadeh", "Rajai Ayed", "Amer Jamous", "Muhannad Abu Taha"],
    FWD: ["Mohammad Al-Dawood", "Mahmoud Mardi", "Awda Al-Fakhoury", "Mousa Al-Taamari", "Mohammad Abu Zureiq", "Ali Azayza", "Ibrahim Sabra", "Ali Alwan"],
  },
  "Portugal": {
    GK: ["Diogo Costa", "José Sá", "Rui Silva", "Ricardo Velho"],
    DEF: ["Diogo Dalot", "Matheus Nunes", "Nélson Semedo", "João Cancelo", "Nuno Mendes", "Gonçalo Inácio", "Renato Veiga", "Rúben Dias", "Tomás Araújo"],
    MID: ["Rúben Neves", "Samu Costa", "João Neves", "Vitinha", "Bruno Fernandes", "Bernardo Silva"],
    FWD: ["João Félix", "Francisco Trincão", "Francisco Conceição", "Pedro Neto", "Rafael Leão", "Gonçalo Guedes", "Gonçalo Ramos", "Cristiano Ronaldo"],
  },
  "RD Congo": {
    GK: ["Timothy Fayulu", "Lionel Mpasi", "Mattieu Epolo"],
    DEF: ["Aaron Wan-Bissaka", "Gedeon Kalulu", "Chancel Mbemba", "Steve Kapuadi", "Axel Tuanzebe", "Dylan Batubinsika", "Rocky Bushiri", "Arthur Masuaku", "Joris Kayembe"],
    MID: ["Samuel Moutoussamy", "Ngal'Ayel Mukau", "Gael Kakuta", "Charles Pickel", "Noah Sadiki", "Edo Kayembe"],
    FWD: ["Théo Bongonda", "Nathanael Mbuku", "Cédric Bakambu", "Simon Banza", "Fiston Mayele", "Brian Cipenga", "Yoane Wissa", "Meschack Elia"],
  },
  "Uzbekistán": {
    GK: ["O'tkir Yusupov", "Botirali Ergashev", "Abduvohid Ne'matov"],
    DEF: ["Abdukodir Khusanov", "Farrukh Sayfiev", "Rustam Ashurmatov", "Sherzod Nasrullaev", "Umar Eshmurodov", "Avazbek O'Imasaliev", "Jahongir Orozov", "Behruzjon Karimoov", "Abdulla Abdullaev"],
    MID: ["Akmal Mozgovoy", "Otabek Shukurov", "Jamshid Iskanderov", "Odil Hamrobekov", "Jaloliddin Masharipov", "Aziz Ganiev", "Sherzod Esanov", "Abbosbek Fayzullaev"],
    FWD: ["Eldor Shomurodov", "Igor Sergeev", "Azizbek Amonov", "Oston Urunov", "Doston Khamdamov"],
  },
  "Colombia": {
    GK: ["Álvaro Montero", "Camilo Vargas", "David Ospina"],
    DEF: ["Daniel Muñoz", "Santiago Arias", "Dávinson Sánchez", "Jhon Lucumí", "Yerry Mina", "Willer Ditta", "Déiver Machado", "Johan Mojica"],
    MID: ["Gustavo Puerta", "James Rodríguez", "Jefferson Lerma", "Jhon Arias", "Jorge Carrascal", "Juan Fernando Quintero", "Richard Ríos", "Kevin Castaño", "Jaminton Campaz", "Juan Portilla"],
    FWD: ["Luis Díaz", "Luis Suárez", "Jhon Córdoba", "Carlos Gómez", "Juan Camilo Hernández"],
  },
  "Inglaterra": {
    GK: ["Jordan Pickford", "Dean Henderson", "James Trafford"],
    DEF: ["Reece James", "Tino Livramento", "John Stones", "Marc Guéhi", "Ezri Konsa", "Dan Burn", "Jarell Quansah", "Nico O'Reilly", "Djed Spence"],
    MID: ["Jordan Henderson", "Elliot Anderson", "Declan Rice", "Kobbie Mainoo", "Eberechi Eze", "Jude Bellingham", "Morgan Rogers"],
    FWD: ["Bukayo Saka", "Noni Madueke", "Marcus Rashford", "Anthony Gordon", "Harry Kane", "Ollie Watkins", "Ivan Toney"],
  },
  "Croacia": {
    GK: ["Dominik Livaković", "Dominik Kotarski", "Ivor Pandur"],
    DEF: ["Joško Gvardiol", "Duje Ćaleta-Car", "Joško Šutalo", "Josip Stanišić", "Marin Pongračić", "Martin Erlić", "Luka Vušković"],
    MID: ["Luka Modrić", "Mateo Kovačić", "Mario Pašalić", "Nikola Vlašić", "Luka Sučić", "Martin Baturina", "Kristijan Jakić", "Petar Sučić", "Nikola Moro", "Toni Fruk"],
    FWD: ["Ivan Perišić", "Andrej Kramarić", "Ante Budimir", "Marco Pašalić", "Petar Musa", "Igor Matanović"],
  },
  "Ghana": {
    GK: ["Benjamin Asare", "Lawrence Ati-Zigi", "Joseph Anang"],
    DEF: ["Baba Abdul Rahman", "Gideon Mensah", "Marvin Senaya", "Alidu Seidu", "Abdul Mumin", "Jerome Opoku", "Jonas Adjetey", "Kojo Oppong Peprah", "Derrick Luckassen"],
    MID: ["Elisha Owusu", "Thomas Partey", "Kwasi Sibo", "Augustine Boakye", "Caleb Yirenky", "Abdul Fatawu Issahaku", "Kamal Deen Sulemana"],
    FWD: ["Cristopher Bonsu Baah", "Ernest Nuamah", "Antoine Semenyo", "Brandon Thomas-Asante", "Prince Kwabena Adu", "Iñaki Williams", "Jordan Ayew"],
  },
  "Panamá": {
    GK: ["Orlando Mosquera", "Luis Mejía", "César Samudio"],
    DEF: ["César Blackman", "Jorge Gutiérrez", "Amir Murillo", "Fidel Escobar", "Andrés Andrade", "Edgardo Fariña", "José Córdoba", "Eric Davis", "Jiovany Ramos", "Roderick Miller"],
    MID: ["Aníbal Godoy", "Adalberto Carrasquilla", "Carlos Harvey", "Cristian Martínez", "José Luis Rodríguez", "César Yanis", "Yoel Bárcenas", "Alberto Quintero", "Azarías Londoño"],
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
