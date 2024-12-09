// Words array with difficulty levels and categories
const words = [
    { word: "neutron", clue: "A subatomic particle with no charge.", difficulty: "hard" },
    { word: "algorithm", clue: "A step-by-step procedure for solving a problem.", difficulty: "hard" },
    { word: "neutron", clue: "A subatomic particle with no charge.", difficulty: "hard" },
    { word: "algorithm", clue: "A step-by-step procedure for solving a problem.", difficulty: "hard" },
    { word: "Olympics", clue: "An international multi-sport event.", difficulty: "hard" },
    { word: "WorldCup", clue: "A global football (soccer) tournament.", difficulty: "hard" },
    { word: "NewYear", clue: "The beginning of a new calendar year.", difficulty: "easy" },
    { word: "Carnival", clue: "A festive season with parades and public celebrations.", difficulty: "medium" },
    { word: "Oktoberfest", clue: "A famous beer festival in Germany.", difficulty: "medium" },
    { word: "SuperBowl", clue: "The annual championship game of the NFL.", difficulty: "hard" },
    { word: "Coachella", clue: "A popular music and arts festival.", difficulty: "medium" },
    { word: "Diwali", clue: "A major Hindu festival of lights.", difficulty: "medium" },
    { word: "ComicCon", clue: "A convention celebrating comics and pop culture.", difficulty: "medium" },
    { word: "BastilleDay", clue: "A French national holiday celebrating the storming of the Bastille.", difficulty: "medium" },
    { word: "Einstein", clue: "A famous physicist known for the theory of relativity.", difficulty: "medium" },
    { word: "Cleopatra", clue: "The last active ruler of the Ptolemaic Kingdom of Egypt.", difficulty: "medium" },
    { word: "Shakespeare", clue: "A renowned English playwright and poet.", difficulty: "hard" },
    { word: "Mandela", clue: "The first black president of South Africa and anti-apartheid revolutionary.", difficulty: "medium" },
    { word: "DaVinci", clue: "A Renaissance artist and inventor.", difficulty: "hard" },
    { word: "Oprah", clue: "A famous American talk show host and philanthropist.", difficulty: "easy" },
    { word: "Beethoven", clue: "A legendary composer and pianist.", difficulty: "hard" },
    { word: "Musk", clue: "The CEO of Tesla and SpaceX.", difficulty: "easy" },
    { word: "Tesla", clue: "An inventor known for his contributions to the development of AC electricity.", difficulty: "medium" },
    { word: "Rowling", clue: "The author of the Harry Potter series.", difficulty: "easy" },
    { word: "Shakespeare", clue: "A renowned English playwright and poet.", difficulty: "hard" },
    { word: "Mars", clue: "A red planet in the solar system.", difficulty: "medium" },
    { word: "Saturn", clue: "A gas giant in the solar system.", difficulty: "medium" },
    { word: "Jupiter", clue: "A gas giant in the solar system.", difficulty: "medium" },
    { word: "EiffelTower", clue: "A famous landmark in Paris.", difficulty: "easy" },
    { word: "GreatWall", clue: "A historic wall in China.", difficulty: "hard" },
    { word: "StatueOfLiberty", clue: "A gift from France to the USA, located in New York.", difficulty: "easy" },
    { word: "Colosseum", clue: "An ancient amphitheater in Rome.", difficulty: "medium" },
    { word: "TajMahal", clue: "A mausoleum in India built by Emperor Shah Jahan.", difficulty: "hard" },
    { word: "MachuPicchu", clue: "An Incan citadel in Peru.", difficulty: "hard" },
    { word: "BigBen", clue: "A famous clock tower in London.", difficulty: "easy" },
    { word: "Pyramids", clue: "Ancient structures in Egypt.", difficulty: "medium" },
    { word: "SydneyOperaHouse", clue: "An iconic performance venue in Australia.", difficulty: "medium" },
    { word: "MountRushmore", clue: "A monumental sculpture in the USA.", difficulty: "medium" },
    { word: "Pizza", clue: "A popular Italian dish with cheese and toppings.", difficulty: "easy" },
    { word: "Sushi", clue: "A Japanese dish with vinegared rice and seafood.", difficulty: "medium" },
    { word: "Tacos", clue: "A traditional Mexican dish with folded tortillas.", difficulty: "easy" },
    { word: "Curry", clue: "A spicy dish originating from India.", difficulty: "medium" },
    { word: "Cheeseburger", clue: "A sandwich with beef and cheese.", difficulty: "easy" },
    { word: "Paella", clue: "A Spanish rice dish with seafood.", difficulty: "medium" },
    { word: "Croissant", clue: "A flaky, buttery pastry from France.", difficulty: "easy" },
    { word: "Samosa", clue: "A fried or baked pastry with savory filling.", difficulty: "medium" },
    { word: "Gelato", clue: "An Italian-style ice cream.", difficulty: "easy" },
    { word: "Inception", clue: "A movie about dreams within dreams.", difficulty: "medium" },
    { word: "Titanic", clue: "A romance and disaster film about a famous shipwreck.", difficulty: "easy" },
    { word: "Avatar", clue: "A sci-fi movie about blue aliens on Pandora.", difficulty: "easy" },
    { word: "Avengers", clue: "A superhero team movie.", difficulty: "easy" },
    { word: "Casablanca", clue: "A classic romantic film set during World War II.", difficulty: "medium" },
    { word: "StarWars", clue: "A space opera film series.", difficulty: "easy" },
    { word: "HarryPotter", clue: "A film series about a young wizard.", difficulty: "easy" },
    { word: "Jaws", clue: "A thriller about a giant shark.", difficulty: "medium" },
    { word: "Gladiator", clue: "A historical drama about ancient Rome.", difficulty: "medium" },
    { word: "Microsoft", clue: "A major technology company known for Windows.", difficulty: "easy" },
    { word: "Apple", clue: "A tech company famous for its iPhones and MacBooks.", difficulty: "easy" },
    { word: "Google", clue: "A leading search engine and tech company.", difficulty: "easy" },
    { word: "Amazon", clue: "A global e-commerce and cloud computing company.", difficulty: "easy" },
    { word: "Tesla", clue: "A company known for electric vehicles and clean energy.", difficulty: "easy" },
    { word: "Netflix", clue: "A streaming service with original content.", difficulty: "easy" },
    { word: "Disney", clue: "A company known for its animated films and theme parks.", difficulty: "easy" },
    { word: "Nike", clue: "A global sportswear brand.", difficulty: "easy" },
    { word: "Samsung", clue: "A multinational conglomerate known for electronics.", difficulty: "easy" },
    { word: "CocaCola", clue: "A famous beverage company.", difficulty: "easy" },
    { word: "Pepsi", clue: "A popular soft drink company.", difficulty: "easy" },
    { word: "LaLaLand", clue: "A musical romance film.", difficulty: "medium" },
    { word: "Paris", clue: "The capital city of France.", difficulty: "easy" },
    { word: "Tokyo", clue: "The capital city of Japan.", difficulty: "easy" },
    { word: "NewYork", clue: "A major city in the USA.", difficulty: "easy" },
    { word: "London", clue: "The capital city of the United Kingdom.", difficulty: "easy" },
    { word: "Sydney", clue: "A major city in Australia.", difficulty: "easy" },
    { word: "Dubai", clue: "A city known for its skyscrapers and luxury.", difficulty: "easy" },
    { word: "Cairo", clue: "The capital city of Egypt.", difficulty: "medium" },
    { word: "RioDeJaneiro", clue: "A city in Brazil famous for its carnival.", difficulty: "medium" },
    { word: "Rome", clue: "The capital city of Italy.", difficulty: "easy" },
    { word: "HongKong", clue: "A major port and financial hub in China.", difficulty: "medium" },
    { word: "Inception", clue: "A movie about dreams within dreams.", difficulty: "medium" },
    { word: "Titanic", clue: "A romance and disaster film about a famous shipwreck.", difficulty: "easy" },
    { word: "Avatar", clue: "A sci-fi movie about blue aliens on Pandora.", difficulty: "easy" },
    { word: "Avengers", clue: "A superhero team movie.", difficulty: "easy" },
    { word: "Casablanca", clue: "A classic romantic film set during World War II.", difficulty: "medium" },
    { word: "StarWars", clue: "A space opera film series.", difficulty: "easy" },
    { word: "HarryPotter", clue: "A film series about a young wizard.", difficulty: "easy" },
    { word: "Jaws", clue: "A thriller about a giant shark.", difficulty: "medium" },
    { word: "Gladiator", clue: "A historical drama about ancient Rome.", difficulty: "medium" },
    { word: "LaLaLand", clue: "A musical romance film.", difficulty: "medium" },
    { word: "Ramen", clue: "A Japanese noodle soup.", difficulty: "medium" },
    { word: "Cappuccino", clue: "A coffee drink with foam and milk.", difficulty: "easy" },
    { word: "blockchain", clue: "A digital ledger technology.", difficulty: "hard" },
    { word: "renaissance", clue: "A cultural rebirth in Europe.", difficulty: "hard" },
    { word: "quantum", clue: "The smallest unit of many forms of energy.", difficulty: "hard" },
    { word: "monetization", clue: "Turning something into money.", difficulty: "hard" },
    { word: "debugging", clue: "The process of fixing code errors.", difficulty: "medium" },
    { word: "gravity", clue: "A force that attracts objects toward each other.", difficulty: "medium" },
    { word: "symmetry", clue: "Balanced proportions.", difficulty: "medium" },
    { word: "animation", clue: "The art of making images move.", difficulty: "medium" },
    { word: "artificial", clue: "Man-made, not natural.", difficulty: "medium" },
    { word: "painting", clue: "An artistic representation using colors.", difficulty: "medium" },
    { word: "fibonacci", clue: "A famous sequence in mathematics.", difficulty: "medium" },
    { word: "plagiarism", clue: "Copying someone else's work.", difficulty: "medium" },
    { word: "eclipse", clue: "When one celestial body blocks another.", difficulty: "easy" },
    { word: "keyboard", clue: "A device used to type text.", difficulty: "easy" },
    { word: "python", clue: "A popular programming language.", difficulty: "easy" },
    { word: "market", clue: "A place to buy and sell goods.", difficulty: "easy" },
    { word: "avatar", clue: "A graphical representation of a user.", difficulty: "easy" },
    { word: "spectrum", clue: "A range of colors or frequencies.", difficulty: "medium" },
    { word: "pixar", clue: "A famous animation studio.", difficulty: "easy" },
    { word: "osmosis", clue: "The diffusion of water molecules.", difficulty: "hard" },
    { word: "magnetism", clue: "A physical phenomenon related to magnets.", difficulty: "hard" },
    { word: "synchrony", clue: "Happening at the same time.", difficulty: "hard" },
    { word: "whitespace", clue: "Spaces, tabs, and newlines in code.", difficulty: "medium" },
    { word: "hedging", clue: "Risk management in finance.", difficulty: "hard" },
    { word: "lithography", clue: "A printing process using stones or metal.", difficulty: "hard" },
    { word: "hieroglyph", clue: "Ancient Egyptian writing.", difficulty: "hard" },
    { word: "mosaic", clue: "Art made from small colored pieces.", difficulty: "medium" },
    { word: "compiler", clue: "A program that translates code.", difficulty: "medium" },
    { word: "database", clue: "A structured collection of data.", difficulty: "medium" },
    { word: "voltage", clue: "Electric potential difference.", difficulty: "medium" },
    { word: "propaganda", clue: "Biased information for political aims.", difficulty: "hard" },
    { word: "cartesian", clue: "Relating to a coordinate system.", difficulty: "medium" },
    { word: "capital", clue: "Money for investment.", difficulty: "easy" },
    { word: "optics", clue: "The study of light.", difficulty: "medium" },
    { word: "zenith", clue: "The highest point in the sky.", difficulty: "hard" },
    { word: "entropy", clue: "A measure of disorder.", difficulty: "hard" },
    { word: "turing", clue: "A pioneer in computer science.", difficulty: "medium" },
    { word: "alchemy", clue: "The medieval pursuit of turning base metals into gold.", difficulty: "hard" },
    { word: "freelance", clue: "Working independently, not for a company.", difficulty: "easy" },
    { word: "mutation", clue: "A change in a genetic sequence.", difficulty: "medium" },
    { word: "cryptic", clue: "Having hidden meaning.", difficulty: "hard" },
    { word: "paradox", clue: "A seemingly contradictory statement.", difficulty: "medium" },
    { word: "schism", clue: "A division into factions.", difficulty: "hard" },
    { word: "syntax", clue: "Rules for structuring sentences or code.", difficulty: "medium" },
    { word: "inception", clue: "A movie about dreams within dreams.", difficulty: "medium" },
    { word: "mario", clue: "A famous plumber from a video game.", difficulty: "easy" },
    { word: "paris", clue: "The city of love.", difficulty: "easy" },
    { word: "einstein", clue: "A famous physicist known for relativity.", difficulty: "medium" },
    { word: "avatar", clue: "A movie about blue aliens on Pandora.", difficulty: "easy" },
    { word: "zelda", clue: "A princess from a popular game series.", difficulty: "medium" },
    { word: "hollywood", clue: "The hub of the American film industry.", difficulty: "easy" },
    { word: "beethoven", clue: "A famous classical composer.", difficulty: "medium" },
    { word: "tokyo", clue: "The capital city of Japan.", difficulty: "easy" },
    { word: "pacman", clue: "An arcade game about eating dots.", difficulty: "easy" },
    { word: "titanic", clue: "A famous ship that sank.", difficulty: "medium" },
    { word: "gotham", clue: "The city protected by Batman.", difficulty: "medium" },
    { word: "Beyonce", clue: "A global superstar known for hits like 'Single Ladies'.", difficulty: "easy" },
    { word: "Elvis", clue: "The King of Rock and Roll.", difficulty: "easy" },
    { word: "Adele", clue: "A British singer known for her powerful voice and hits like 'Hello'.", difficulty: "easy" },
    { word: "Rihanna", clue: "A pop icon and business mogul from Barbados.", difficulty: "easy" },
    { word: "FreddieMercury", clue: "The legendary frontman of Queen.", difficulty: "medium" },
    { word: "TaylorSwift", clue: "A singer-songwriter known for her storytelling lyrics.", difficulty: "easy" },
    { word: "MichaelJackson", clue: "The King of Pop.", difficulty: "easy" },
    { word: "EdSheeran", clue: "A singer-songwriter known for hits like 'Shape of You'.", difficulty: "easy" },
    { word: "WhitneyHouston", clue: "A legendary singer with a powerful voice, known for 'I Will Always Love You'.", difficulty: "medium" },
    { word: "EltonJohn", clue: "A British singer known for his flamboyant style and hits like 'Rocket Man'.", difficulty: "medium" },
    { word: "Mario", clue: "A plumber who saves Princess Peach.", difficulty: "easy" },
    { word: "Link", clue: "A hero of Hyrule who wields the Master Sword.", difficulty: "medium" },
    { word: "Pikachu", clue: "A yellow electric Pokémon.", difficulty: "easy" },
    { word: "Kratos", clue: "The Spartan warrior in God of War.", difficulty: "medium" },
    { word: "LaraCroft", clue: "A famous archaeologist and adventurer.", difficulty: "medium" },
    { word: "MasterChief", clue: "The protagonist of the Halo series.", difficulty: "medium" },
    { word: "Sonic", clue: "A blue hedgehog who runs at super speeds.", difficulty: "easy" },
    { word: "Geralt", clue: "A monster hunter from The Witcher series.", difficulty: "hard" },
    { word: "Samus", clue: "A bounty hunter in the Metroid series.", difficulty: "medium" },
    { word: "Cloud", clue: "A soldier from Final Fantasy VII.", difficulty: "medium" },
    { word: "Zelda", clue: "The princess from The Legend of Zelda series.", difficulty: "medium" },
    { word: "MarioKart", clue: "A racing game featuring characters from Super Mario Bros.", difficulty: "easy" },
    { word: "TheLegendOfZelda", clue: "A series of games about a young Link trying to save Hyrule.", difficulty: "medium" },
    { word: "FinalFantasy", clue: "A series of action role-playing games.", difficulty: "hard" },
    { word: "TheHungerGames", clue: "A series of mystery novels about a group of teenagers who fight crime.", difficulty: "medium" },
    { word: "StarWars", clue: "A series of space operas about a galaxy far, far away.", difficulty: "hard" },
    { word: "TheMatrix", clue: "A sci-fi movie about Neo and the machines.", difficulty: "hard" },
    { word: "TheLordOfTheRings", clue: "A series of fantasy novels about a hobbit and his quest for the One Ring.", difficulty: "medium" },
    { word: "The Office", clue: "A sitcom about a group of employees working in a small, cluttered office.", difficulty: "medium" },
    { word: "TheSimpsons", clue: "A sitcom about a small town living on the streets.", difficulty: "easy" },
    { word: "venice", clue: "A city known for canals.", difficulty: "easy" },
    { word: "Naruto", clue: "A ninja with a dream to become Hokage.", difficulty: "easy" },
    { word: "Goku", clue: "A Saiyan warrior who protects Earth.", difficulty: "easy" },
    { word: "Luffy", clue: "A pirate with a stretchy body and a dream to find the One Piece.", difficulty: "easy" },
    { word: "Sakura", clue: "A medical ninja and member of Team 7.", difficulty: "medium" },
    { word: "Tanjiro", clue: "A demon slayer seeking to cure his sister.", difficulty: "medium" },
    { word: "Levi", clue: "A skilled soldier from the Survey Corps.", difficulty: "medium" },
    { word: "Deku", clue: "A quirkless boy who becomes a hero.", difficulty: "easy" },
    { word: "Asuna", clue: "A player trapped in Sword Art Online.", difficulty: "medium" },
    { word: "Totoro", clue: "A friendly forest spirit from Studio Ghibli.", difficulty: "easy" },
    { word: "Saitama", clue: "A hero who can defeat any opponent with one punch.", difficulty: "medium" },
    { word: "Youssef", clue: "A renowned military leader.", difficulty: "medium" },
    { word: "EthanHawke", clue: "A British actor known for his role as Ethan Hawke in The Hunger Games.", difficulty: "easy" },
    { word: "Zeke", clue: "Ability to control other titans", difficulty: "hard"},
    { word: "Eren", clue: "Started the rumbling", difficulty: "easy"},
    { word: "Levi", clue: "feared swordman of the Survey Corps", difficulty: "medium"},
    { word: "Mikasa", clue: "killed Eren to stop the rumbling", difficulty: "easy"},
    { word: "Titan", clue: "Abnormal, huge people eating people", difficulty: "hard"},
    { word: "Reiner", clue: "Armoured Titan user", difficulty: "hard"},
    { word: "SherlockHolmes", clue: "A detective known for his brilliant mind.", difficulty: "medium" },
    { word: "HarryPotter", clue: "A young wizard who attends Hogwarts.", difficulty: "easy" },
    { word: "SpiderMan", clue: "A superhero with spider-like abilities.", difficulty: "easy" },
    { word: "Batman", clue: "A vigilante who protects Gotham City.", difficulty: "easy" },
    { word: "Frodo", clue: "A hobbit on a quest to destroy the One Ring.", difficulty: "medium" },
    { word: "Katniss", clue: "A skilled archer from The Hunger Games.", difficulty: "medium" },
    { word: "IronMan", clue: "A genius billionaire in a high-tech suit.", difficulty: "easy" },
    { word: "WonderWoman", clue: "An Amazonian princess and superhero.", difficulty: "easy" },
    { word: "Hermione", clue: "A brilliant witch and friend of Harry Potter.", difficulty: "easy" },
    { word: "DarthVader", clue: "A Sith Lord from Star Wars.", difficulty: "medium" },
    { word: "Thor", clue: "A powerful hero from Marvel Comics.", difficulty: "medium" },
    { word: "LukeSkywalker", clue: "A Jedi Knight from Star Wars.", difficulty: "medium" },
    { word: "Dumbledore", clue: "A wizard known for his teachings and wisdom.", difficulty: "medium" },
    { word: "ChronoTrigger", clue: "A time-traveling RPG from the '90s.", difficulty: "medium" },
    { word: "Bioshock", clue: "A game set in the underwater city of Rapture.", difficulty: "medium" },
    { word: "Overwatch", clue: "A team-based multiplayer first-person shooter.", difficulty: "medium" },
    { word: "Voldemort", clue: "A dark wizard from Harry Potter.", difficulty: "medium" },
    { word: "Tesla", clue: "The inventor of the alternating current.", difficulty: "hard" },
    { word: "Hypatia", clue: "An ancient mathematician and philosopher from Alexandria.", difficulty: "hard" },
    { word: "Socrates", clue: "A classical Greek philosopher known for his method of inquiry.", difficulty: "medium" },
    { word: "Plato", clue: "A philosopher known for his Academy of Fine Arts.", difficulty: "medium" },
    { word: "Renaissance", clue: "A period of artistic and intellectual growth.", difficulty: "medium" },
    { word: "Enlightenment", clue: "A period of intellectual and moral revolution.", difficulty: "medium" },
    { word: "Guernica", clue: "A powerful anti-war painting by Picasso.", difficulty: "medium" },
    { word: "PersistenceOfMemory", clue: "A surreal painting by Salvador Dalí featuring melting clocks.", difficulty: "hard" },
    { word: "SistineChapel", clue: "A chapel in the Vatican City with ceiling painted by Michelangelo.", difficulty: "hard" },
    { word: "MonaLisa", clue: "A painting by Leonardo da Vinci depicting a woman with a child.", difficulty: "hard" },
    { word: "Buckyball", clue: "A spherical fullerene molecule.", difficulty: "medium" },
    { word: "Osmium", clue: "The densest naturally occurring element.", difficulty: "medium" },
    { word: "Einsteinium", clue: "A synthetic element named after Albert Einstein.", difficulty: "hard" },
    { word: "Bhutan", clue: "A Himalayan kingdom known for its Gross National Happiness index.", difficulty: "medium" },
    { word: "AdventureTime", clue: "A post-apocalyptic cartoon featuring Finn and Jake.", difficulty: "easy" },
    { word: "Totoro", clue: "A friendly forest spirit from a Studio Ghibli film.", difficulty: "easy" },
    { word: "RickAndMorty", clue: "An animated series about a mad scientist and his grandson.", difficulty: "medium" },
    { word: "Itachi", clue: "Took part in the in the massacre of the Uchiha Clan.", difficulty: "easy" },
    { word: "Madara", clue: "Manipulated Tobi into forming Akatsuki.", difficulty: "medium" },
    { word: "Sasuke", clue: "Naruto first kiss", difficulty: "easy"},
    { word: "Shikamaru", clue: "Naruto's first friend", difficulty: "easy"},
    { word: "Iceland", clue: "A Nordic island nation with geothermal hot springs.", difficulty: "medium" },
    { word: "Ethiopia", clue: "A country in the Horn of Africa known for its ancient culture.", difficulty: "medium" },
    { word: "Nepal", clue: "A Himalayan country known for its high altitudes and natural beauty.", difficulty: "medium" },
    { word: "Sudan", clue: "A Southern African country known for its vast desert.", difficulty: "medium" },
    { word: "Ulysses", clue: "A complex novel by James Joyce.", difficulty: "hard" },
    { word: "Hogoromo", clue: "Founder of Ninjutsu", difficulty: "medium" },
    { word: "Beowulf", clue: "An Old English epic poem.", difficulty: "medium" },
    { word: "Frankenstein", clue: "A novel about a scientist and his creation by Mary Shelley.", difficulty: "medium" },
    { word: "WilliamShakespeare", clue: "A playwright known for his tragedies and comedies.", difficulty: "medium" },
    { word: "Dickens", clue: "A novelist known for his tragedies and adventures.", difficulty: "medium" },
    { word: "Gutenberg", clue: "Invented the printing press in the 15th century.", difficulty: "medium" },
    { word: "Kimchi", clue: "A traditional Korean fermented vegetable dish.", difficulty: "medium" },
    { word: "Pho", clue: "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat.", difficulty: "medium" },
    { word: "DeLorean", clue: "A car famous for its role in Back to the Future.", difficulty: "medium" },
    { word: "Bugatti", clue: "A French luxury car manufacturer.", difficulty: "medium" },
    { word: "Koenigsegg", clue: "A Swedish manufacturer of high-performance sports cars.", difficulty: "hard" },
    { word: "Lamborghini", clue: "A Italian luxury car manufacturer.", difficulty: "medium" },
    { word: "Rolls-Royce", clue: "A British luxury car manufacturer.", difficulty: "medium" },
    { word: "Mercedes", clue: "A German luxury car manufacturer.", difficulty: "medium" },
    { word: "Echo", clue: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind.", difficulty: "medium" },
    { word: "Cloud", clue: "I can fly without wings. I can cry without eyes. Whenever I go, darkness flies.", difficulty: "medium" },
    { word: "Footsteps", clue: "The more you take, the more you leave behind.", difficulty: "easy" },
    { word: "Fire", clue: "I am not alive, but I grow. I don't have lungs, but I need air.", difficulty: "medium" },
    { word: "Keyboard", clue: "I have keys but no locks. I have space but no room. You can enter, but you can't go outside.", difficulty: "medium" },
    { word: "Map", clue: "I have lakes with no water, mountains with no stone, and cities with no buildings.", difficulty: "medium" },
    { word: "R", clue: "What is seen in the middle of March and April but can’t be seen at the beginning or end of either month?", difficulty: "hard" },
    { word: "Fire", clue: "I am always hungry and will die if not fed, but whatever I touch will soon turn red.", difficulty: "medium" },
    { word: "Darkness", clue: "The more you have of it, the less you see.", difficulty: "easy" },
    { word: "Mirror", clue: "I make two people out of one.", difficulty: "easy" },
    { word: "Bank", clue: "I have branches, but no fruit, trunk, or leaves.", difficulty: "medium" },
    { word: "Sponge", clue: "I am full of holes but still hold water.", difficulty: "easy" },
    { word: "Deck of cards", clue: "What has many hearts but no other organs?", difficulty: "medium" },
    { word: "River", clue: "What runs but never walks, has a mouth but never talks, has a bed but never sleeps?", difficulty: "medium" },
    { word: "M", clue: "What comes once in a minute, twice in a moment, but never in a thousand years?", difficulty: "medium" },
    { word: "Ford", clue: "A U.S. luxury car manufacturer.", difficulty: "medium" },
    { word: "Tesla", clue: "An inventor known for his inventions like the Tesla coil and alternating current.", difficulty: "medium" },
    { word: "Axolotl", clue: "An aquatic salamander known for its regenerative abilities.", difficulty: "medium" },
    { word: "Paella", clue: "A traditional Spanish rice dish with seafood.", difficulty: "medium" },
    { word: "Suleiman", clue: "The magnificent Sultan of the Ottoman Empire.", difficulty: "medium" },
    { word: "Catherine", clue: "The great empress of Russia who expanded the empire.", difficulty: "medium" },
    { word: "Katherine", clue: "The great empress of Russia who expanded the empire.", difficulty: "medium" },
    { word: "Nobelium", clue: "A synthetic element named after Alfred Nobel.", difficulty: "hard" },
    { word: "Curium", clue: "A synthetic element named after Marie Curie.", difficulty: "hard" },
    { word: "Tesseract", clue: "The four-dimensional analogue of a cube.", difficulty: "hard" },
    { word: "Hyperbola", clue: "A type of smooth curve lying in a plane.", difficulty: "medium" },
    { word: "Fermat", clue: "A mathematician known for his Last Theorem.", difficulty: "hard" },
    { word: "Ramanujan", clue: "A mathematician known for his work on approximations of pi.", difficulty: "hard" },
    { word: "Newton", clue: "A scientist who formulated the laws of motion.", difficulty: "medium" },
    { word: "Einstein", clue: "A physicist who developed the theory of relativity.", difficulty: "medium" },
    { word: "Pulsar", clue: "A highly magnetized rotating neutron star.", difficulty: "hard" },
    { word: "Quasar", clue: "An extremely luminous active galactic nucleus.", difficulty: "hard" },
    { word: "Nebula", clue: "A cloud of gas and dust in space.", difficulty: "medium" },
    { word: "ProximaB", clue: "An exoplanet orbiting the closest star to the Sun.", difficulty: "hard" },
    { word: "Titan", clue: "Saturn's largest moon with lakes of methane.", difficulty: "medium" },
    { word: "Europa", clue: "One of Jupiter's moons with a subsurface ocean.", difficulty: "medium" },
    { word: "Triangulum", clue: "A spiral galaxy in the constellation Triangulum.", difficulty: "hard" },
    { word: "Messier87", clue: "A giant elliptical galaxy with a supermassive black hole.", difficulty: "hard" },
    { word: "Sombrero", clue: "A spiral galaxy with a large central bulge.", difficulty: "hard" },
    { word: "matrix", clue: "A movie about simulated reality.", difficulty: "hard" }
];

// Initialize variables
let shuffledWords = [...words];
let usedWords = [];
let timer = 0;
let timerInterval = null;
let currentLevel = 1;
let score = 0;
let currentWord = null;
let hintsUsed = 0;
let leaderboard = [];

// References to DOM elements
const clueText = document.getElementById("clue-text");
const wordInput = document.getElementById("word-input");
const feedback = document.getElementById("feedback");
const timerDisplay = document.getElementById("timer-display");
const scoreDisplay = document.getElementById("score-display");
const checkButton = document.getElementById("check-button");
const hintButton = document.getElementById("hint-button");
const pauseButton = document.getElementById("pause-button");
const pauseIcon = document.getElementById("pause-icon");
const leaderboardList = document.getElementById("leaderboard-list");

// Shuffle the words array
function shuffleWords() {
    if (shuffledWords.length === 0) {
        shuffledWords = [...words];
        usedWords = [];
    }
    const randomIndex = Math.floor(Math.random() * shuffledWords.length);
    const selectedWord = shuffledWords[randomIndex];
    shuffledWords.splice(randomIndex, 1);
    usedWords.push(selectedWord);
    return selectedWord;
}

// Load a new level
function loadLevel() {
    if (usedWords.length < words.length) {
        currentWord = shuffleWords();
        clueText.textContent = `Clue: ${currentWord.clue}`;
        wordInput.value = "";
        feedback.textContent = "";
        feedback.className = "";
        timer = currentWord.difficulty === "easy" ? 30 : currentWord.difficulty === "medium" ? 20 : 15;
        startTimer();
    } else {
        endGame();
    }
}

// Start the timer
function startTimer() {
    clearInterval(timerInterval);
    updateTimerColor();
    timerInterval = setInterval(() => {
        timer--;
        updateTimerColor();
        timerDisplay.textContent = `Time: ${timer}s`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            feedback.textContent = "Time's up! Moving to the next level.";
            feedback.className = "wrong";
            handleTimeout();
            currentLevel++;
            setTimeout(loadLevel, 2000);
        }
    }, 1000);
}

// Handle timeout when timer hits 0
function handleTimeout() {
    let pointDeduction = 0;
    if (currentWord.difficulty === "easy") {
        pointDeduction = 1;
    } else if (currentWord.difficulty === "medium") {
        pointDeduction = 2;
    } else if (currentWord.difficulty === "hard") {
        pointDeduction = 3;
    }

    score -= pointDeduction; // Deduct points based on difficulty
    feedback.textContent += ` No answer detected. The correct word was: ${currentWord.word}.`;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Update the color of the timer based on the remaining time
function updateTimerColor() {
    if (timer > 15) {
        timerDisplay.style.color = "green";
    } else if (timer > 5) {
        timerDisplay.style.color = "yellow";
    } else {
        timerDisplay.style.color = "red";
    }
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = wordInput.value.trim().toLowerCase().replace(/\s+/g, '');
    let pointDeduction = 0;

    if (currentWord.difficulty === "easy") {
        pointDeduction = 1;
    } else if (currentWord.difficulty === "medium") {
        pointDeduction = 2;
    } else if (currentWord.difficulty === "hard") {
        pointDeduction = 3;
    }

    if (userAnswer === currentWord.word.replace(/\s+/g, '').toLowerCase()) {
        score += currentWord.difficulty === "easy" ? 2 : currentWord.difficulty === "medium" ? 3 : currentWord.difficulty === "hard" ? 5 : 0;
        feedback.textContent = "Correct!";
        feedback.className = "correct";
        checkButton.classList.add('btn-success');
        setTimeout(() => checkButton.classList.remove('btn-success'), 500); // Flash green
    } else {
        score -= pointDeduction;
        feedback.textContent = `Wrong! The correct word was: ${currentWord.word}`;
        feedback.className = "wrong";
        checkButton.classList.add('btn-danger');
        setTimeout(() => checkButton.classList.remove('btn-danger'), 500); // Flash red
    }

    scoreDisplay.textContent = `Score: ${score}`;
    currentLevel++;
    setTimeout(loadLevel, 2000);
}

// Hint function
function provideHint() {
    if (currentWord) {
        if (score <= 0) {
            feedback.textContent = "Not enough points for a hint!";
            feedback.className = "warning";
            return;
        }

        const hintLetters = Math.max(1, Math.floor(currentWord.word.length / 2)); // Reveal at least 1 letter
        const hint = currentWord.word.substring(0, hintLetters) + '-'.repeat(currentWord.word.length - hintLetters);
        feedback.textContent = `Hint: ${hint}`;
        feedback.className = "hint";
        score -= 1; // Deduct score for using a hint
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

// Pause the game
function pauseGame() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        pauseButton.classList.add('paused');
        pauseIcon.classList.remove('d-none');
    } else {
        pauseButton.classList.remove('paused');
        pauseIcon.classList.add('d-none');
        startTimer();
    }
}

// Add to leaderboard
function AddToLeaderboard(name, score) {
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // Keep top 10 only
    saveLeaderboard();
    updateLeaderboard();
}

// Update leaderboard UI
function updateLeaderboard() {
    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
        leaderboardList.appendChild(listItem);
    });
}

// Save leaderboard to localStorage
function saveLeaderboard() {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Load leaderboard from localStorage
function loadLeaderboard() {
    const savedLeaderboard = localStorage.getItem('leaderboard');
    if (savedLeaderboard) {
        leaderboard = JSON.parse(savedLeaderboard);
        updateLeaderboard();
    }
}

// End the game
function endGame() {
    feedback.textContent = "Congratulations! You've completed the game.";
    feedback.className = "correct";
    clearInterval(timerInterval);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    checkButton.addEventListener("click", checkAnswer);
    hintButton.addEventListener("click", provideHint);
    pauseButton.addEventListener("click", pauseGame);
    loadLeaderboard();
    loadLevel();
});



