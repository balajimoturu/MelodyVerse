import { Language, Movie, Song } from './types';

export const languages: Language[] = [
  { id: 'telugu', name: 'Telugu' },
  { id: 'tamil', name: 'Tamil' },
  { id: 'hindi', name: 'Hindi' },
  { id: 'bengali', name: 'Bengali' },
  { id: 'Kannada', name: 'Kannada' },
  { id: 'punjabi', name: 'Punjabi'},
  { id: 'malayalam', name: 'Malayalam' },
  { id: 'english', name: 'English' },
  { id: 'french', name: 'French' },
  {id: 'others', name: 'Others'}
];

export const movies: Movie[] = [
  {
    id: 'la-la-land',
    name: 'La La Land',
    languageId: 'english',
    imageUrl: 'https://images.pexels.com/photos/1790393/pexels-photo-1790393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'a-star-is-born',
    name: 'A Star Is Born',
    languageId: 'english',
    imageUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'greatest-showman',
    name: 'The Greatest Showman',
    languageId: 'english',
    imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'rockstar',
    name: 'Rockstar',
    languageId: 'hindi',
    imageUrl: 'https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'aashiqui-2',
    name: 'Aashiqui 2',
    languageId: 'hindi',
    imageUrl: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'gudumba-shankar',
    name: 'Gudumba Shankar',
    languageId: 'telugu',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00367786-namtpyxrsj-landscape.jpg',
  },
  {
    id: 'vijai-bulganin',
    name: 'Vijai Bulganin',
    languageId: 'telugu',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nHhvUO7RjYBvlwHr0pFajvlnuF4nAFzHJg&s',
  },
  {
    id: 'devotional-songs',
    name: 'Devotional Songs',
    languageId: 'others',
    imageUrl: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const songs: Song[] = [
  {
    id: 'city-of-stars',
    name: 'City of Stars',
    movieId: 'la-la-land',
    youtubeId: 'GTWqwSNQCcg',
    lyrics: `City of stars\nAre you shining just for me?\nCity of stars\nThere's so much that I can't see\nWho knows?\nI felt it from the first embrace I shared with you\nThat now our dreams\nThey've finally come true\n\nCity of stars\nJust one thing everybody wants\nThere in the bars\nAnd through the smokescreen of the crowded restaurants\nIt's love\nYes, all we're looking for is love from someone else\nA rush, a glance, a touch, a dance\n\nA look in somebody's eyes\nTo light up the skies\nTo open the world and send it reeling\nA voice that says, I'll be here\nAnd you'll be alright\n\nI don't care if I know\nJust where I will go\n'Cause all that I need is this crazy feeling\nA rat-tat-tat on my heart\n\nThink I want it to stay\n\nCity of stars\nAre you shining just for me?\nCity of stars\nYou never shined so brightly`,
    imageUrl: 'https://images.pexels.com/photos/3963018/pexels-photo-3963018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'another-day-of-sun',
    name: 'Another Day of Sun',
    movieId: 'la-la-land',
    youtubeId: 'xVVqlm8Fq3Y',
    lyrics: `I think about that day\nI left him at a Greyhound station\nWest of Santa Fé\nWe were seventeen, but he was sweet and it was true\nStill I did what I had to do\n'Cause I just knew\n\nSummer Sunday nights\nWe'd sink into our seats\nRight as they dimmed out all the lights\nA Technicolor world made out of music and machine\nIt called me to be on that screen\nAnd live inside each scene\n\nWithout a nickel to my name\nHopped a bus, here I came\nCould be brave or just insane\nWe'll have to see\n\n'Cause maybe in that sleepy town\nHe'll sit one day, the lights are down\nHe'll see my face and think of how he used to know me\n\nClimb these hills\nI'm reaching for the heights\nAnd chasing all the lights that shine\nAnd when they let you down\nYou'll get up off the ground\n'Cause morning rolls around\nAnd it's another day of sun\n\nI hear 'em ev'ry day\nThe rhythms in the canyons\nThat'll never fade away\nThe ballads in the barrooms\nLeft by those who came before\nThey say "you gotta want it more"\nSo I bang on ev'ry door\n\nAnd even when the answer's "no"\nOr when my money's running low\nThe dusty mic and neon glow\nAre all I need\n\nAnd someday as I sing my song\nA small-town kid'll come along\nThat'll be the thing to push him on and go go\n\nClimb these hills\nI'm reaching for the heights\nAnd chasing all the lights that shine\nAnd when they let you down\nYou'll get up off the ground\n'Cause morning rolls around\nAnd it's another day of sun\n\nAnd when they let you down\nThe morning rolls around\nIt's another day of sun\nIt's another day of sun\nIt's another day of sun\nJust another day of sun\nIt's another day of sun\nAnother day has just begun\nIt's another day of sun\nIt's another day of sun`,
    imageUrl: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'shallow',
    name: 'Shallow',
    movieId: 'a-star-is-born',
    youtubeId: 'bo_efYhYU2A',
    lyrics: `Tell me somethin', girl\nAre you happy in this modern world?\nOr do you need more?\nIs there somethin' else you're searchin' for?\n\nI'm falling\nIn all the good times I find myself\nLongin' for change\nAnd in the bad times I fear myself\n\nTell me something, boy\nAren't you tired tryin' to fill that void?\nOr do you need more?\nAin't it hard keeping it so hardcore?\n\nI'm falling\nIn all the good times I find myself\nLonging for change\nAnd in the bad times I fear myself\n\nI'm off the deep end, watch as I dive in\nI'll never meet the ground\nCrash through the surface, where they can't hurt us\nWe're far from the shallow now\n\nIn the shallow, shallow\nIn the shallow, shallow\nIn the shallow, shallow\nWe're far from the shallow now\n\nWooaaaah\nWooaaaaaaaaaaah\n\nI'm off the deep end, watch as I dive in\nI'll never meet the ground\nCrash through the surface, where they can't hurt us\nWe're far from the shallow now\n\nIn the shallow, shallow\nIn the shallow, shallow\nIn the shallow, shallow\nWe're far from the shallow now`,
    imageUrl: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'tum-ho',
    name: 'Tum Hooo',
    movieId: 'rockstar',
    youtubeId: 'HIWZ07pSme8',
    lyrics: `Oooh Ho…\nTum Ho\nTum Ho Paas Mere\nSaath Mere Ho\nTum Yun\nJitna Mehsoos Karoon Tumko\nUtna Hi Paa Bhi Loon\nTum Ho Mere Liye\nMere Liye Ho Tum Yun\nKhud Ko Main Haar Gaya\nTum Ko, Tumko Main Jeeta Hoon\nOooh Ho…\nTum Ho\nAhmmm…\nAaah Haa Aa…\nKahin Se.. Kahin Ko.. Bhi\nAao Bewajah Chale\nPoochhe Bina Kisi Se\nHum Mile\nBandishein Naa Rahi Koi Baaqi\nTum Ho\nTum Ho Paas Mere\nSaath Mere Ho Tum Yun\nJitna Mehsoos Karooon Tumko\nUtna Hi Paa Bhi Loon\nOoooh Ho Ho…\nKis Tarah Chheenega Aa\nMujh Se Ye Jahaan Tumhe\nTum Bhi Ho Main\nKya Fiqar Ab Humein\nTum Ho Mere Liye\nMere Liye Ho Tum Yun\nKhud Ko Main Haar Gaya\nTum Ko, Tumko Main Jeeta Hoon\nOoooh Hoo Ho…\nHoo Aa….`,
    imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'chiguraku-chatu',
    name: 'Chiguraku Chatu',
    movieId: 'gudumba-shankar',
    youtubeId: '1zjhZUJwO40', 
    lyrics: `Chiguraaku chaatu chilakaa...ee alajadi premegaa\nAlavaatu ledhu ganuka...madhi suluvuga nammadhugaa\nChiguraaku chaatu chilakaa...thanu nadavadha dheemagaa\nAnukoni daari ganuka...ee thikama thappadu gaa\nThanu kuudaa naalaagaa...anukontee melegaa\nAithe adhi theliyanidhe...adugu padadhugaa\nSarikothagaa naavanka...chuusthundee chitramgaa\nEmaindho spashtangaa...bayata padadhugaa\nCheppaku antu Cheppamantu...chachchi thelenaa\nThappanukuntu thappadantu...tharkamaagenaa\nSangathi chuustu jaali vestoo...kadhalalekunna\nThelani guttu thenepattu...kadhapalekunnaa\nVonikE naa pedavullo...thonikee thadipilupedho\nNaake sariggaa inka teliyakunnadhi\nAa vainam mounamlo munigi unnadhi\nChiguraaku chaatu chilakaa...ee alajadi premegaa\nAnukoni dhaari ganuka...ee thikama thappadhugaa\nEkkadinuncho madhura gaanam...madhini meetindhi\nIkkadi nunchee nee prayaanam...modalu antondhi\nGala gala veechE pilla gaali...endhukaagindhi\nKompaloo Munche.... Toofanochche... Soochenemoondee\nVere Edo Lokam... Chere Oohala Vegam\nEdho Theeyanee Maikam... Penchutunadee\nDhare Theliyanee Dooram.... Teere Telapanee Teeram\nThanalo Kalavaramedo.... Repthunadee\nChiguraku Chatu Cheelaka... Ee Alagadee Premega\nAlavatu Ledhu Ganuka.... Madee Suluvuga Namadhuga\nChiguraku Chatu Cheelaka.... Tanoo Nadavada Dheemaga\nAnukonoo Daree Ganooka.... Ee Teekama Tapadoo Ga\nThanu Kooda Nalaga.... Anukonte Melega\nAyite Adee Thelaneede.... Adugu Padadhuga\nSareekotthaga Navanka.... Choosthunde Chithramga\nEmayindo Spashtamga... Bayata Padadhuga...`, 
    imageUrl: 'https://pbs.twimg.com/media/E03q4ONVgAkszj9.jpg', 
  },
  {
    id: 'chilakamma',
    name: 'Chilakamma',
    movieId: 'gudumba-shankar',
    youtubeId: 'zGmaQqMK2Qw',
    lyrics: `Chilakamma Mukkuki Dhonda Panduki Enado Raasi Pettundhi\nKaakamma Moothiki Kaakarakaayaki Aanaade Raasi Pettundhi\nAase Unte Anto Into Andhenandi\nMari Raase Unte Antaa Sontham Ayyenandi\nAa Veera Brahmam Aanaadidhe Annaadandi\nMana Para Brahmam Malli Antu Unnaadhandi\nUndhoy Raasi Ledoy Raaji\nChilakamma Mukkuki Dhonda Panduki Enado Raasi Pettundhi\nKaakamma Moothiki Kaakarakaayaki Aanaade Raasi Pettundhi\nSannaye Viriginaa Aa Dole Pagilinaa Ayye Pellaagunaa Raasunte\nPandhille Koolinaa Bandhuvule Poyinaa Ayye Pellaaganaa Raase Unte\nChalle Akshinthalu Nippule Ayinaa Pellaagadhu Raase Unte\nMello Poomaalalu Paamule Ayinaa Pellaagadhu Raase Unte\nUndhoy Raasi Oddoy Pechi\nChilakamma Mukkuki Dhonda Panduki Enado Raasi Pettundhi\nKaakamma Moothiki Kaakarakaayaki Aanaade Raasi Pettundhi\nThikkanne Vachchinaa Yarranne Vachchinaa Jarige Kadha Maarunaa Raasunte\nGurude Bodhinchinaa Varude Paatinchinaa Jarige Kadha Maarunaa Raasunte\nSimham O Pakka Nakka O Pakka Kadha Maaradhu Raase Unte\nPellam O Pakka Pallem O Pakka Kadha Maaradhu Raase Unte\nUndhoy Raasi Brathukee Chiichi\nAase Unte Anto Into Andhenandi\nMari Raase Unte Antaa Sontham Ayyenandi\nAa Veera Brahmam Aanaadidhe Annaadandi\nMana Para Brahmam Malli Antu Unnaadhandi\nUndhoy Raasi Ledoy Raaji`,
    imageUrl: 'https://i.ytimg.com/vi/SZJOUmkCUco/maxresdefault.jpg',
  },
  {
    id: 'chitti-nadumune',
    name: 'Chitti Nadumune',
    movieId: 'gudumba-shankar',
    youtubeId: 'zK1BQk0L-5U',
    lyrics: `Chitti Nadumune Choosthunnaa… Chitrahimsalo Chasthunnaa\nKantapadadhu Ika Edhuremunnaa…\nChuttupakkalemavuthunnaa… Gurthupattane Lekunnaa\nChevina Padadhu Evaremantunnaa…\nNadume Udumai… Nanu Pattukunte Jaana\nAduge Padadhe… Ika Etupodhaamannaa\nAa Madathalo Mahimemito… Vethakaali Thongi Choosainaa\nAa Nunupulo Padhunemito… Thelchaali Thappu Cheshainaa\nCome On… Come On\nCome On… Come On\nCome On… Come On\nCome On… Come On\nOri Aa Devudaa..!\nI Think I Did It Again\nI Think I Seen It Again…\nYour Nadumuni Choosi Fruity Girl\nI Am Losing All My Concentration In This World\nI Am Unable To Suttay Malaitay Girl\nNow Look What I Am Running Away With You Pearl\nIf You Are My Yenki…\nI Am Your Nayudu Baava… Nayudu Baava\nCome On… Come On\nCome On… Come On\nCome On… Come On\nCome On… Come On\nNanganaachilaa Nadumoopi… Nalla Thaachulaa Jada Choopi\nThaaki Choosthe Kaatesthandhi…\nCheemalaaga Thega Kuduthundhi… Paamulaaga Pagabaduthundhi\nKallu Moosina Edhare Undhee…\nTheeraa Choosthe Nalakantha Nallapoosa…\nAaraa Theesthe Nannamilese Aasha…\nKannerragaa Kandhindhilaa… Nadumompullo Naligi\nEe Thikamaka Theledhelaa… Aa Sompullo Munigi\nOri Aa Devudaa..!\nI Think I Did It Again\nI Think I Seen It Again…\nEnni Thittinaa Vintaane… Kaala Thinnaninaa Padathaane\nNadumu Thadamani Nannokasaari…\nUrimi Choosinaa Okene… Ure Vesinaa Kaadhanane\nThodimi Chidhimi Chebuthaane Sorry…\nHaayire Haayire… Ye Praana Haani Raani\nHaayire Haayire… Ika Emainaa Kaanee\nNinu Nimaraka Naa Puttaka Poorthavadhu Kadhaa Aliveni\nAa Korika Kadatheeragaa… Marujanma Endhuke Rani\nCome On… Come On\nCome On… Come On\nCome On… Come On\nCome On… Come On\nI Think I Did It Again\nI Think I Seen It Again…\nCome On… Come On\nCome On… Come On\nCheck It Up…\nCome On… Come On`,
    imageUrl: 'https://telugureaders.com/wp-content/uploads/2023/10/chitti-nadumune-chusthunna-telugu-lyrical-song.jpg',
  },
  {
    id: 'emantaro',
    name: 'Emantaro',
    movieId: 'gudumba-shankar',
    youtubeId: 'D9kKAWZG4Gg',
    lyrics: `Emantaro naaku neekunna idinee\nEmantaro nuvu nenaina adinee\nEmantaro maaripothunna kadhani\nEmantaro jaaripothunna mathini\nChuse pedavini maatade kanulani\nNavve nadakani kanipinche swaasani\nIchi puchukunna manasuni\nIdaa adaa yadavidhaa\nMari emantaro naaku neekunna idinee\nEmantaro nuvu nenaina adinee\nEmantaro maaripothunna kadhani\nEmantaro jaaripothunna mathini\nEduruga veluguthunna needani\nBeduruga kaluguthunna haayini ho ho\nThanuvuna tonukuthunna churukuni\nManasuna musurukunna chematani\nIshta kashtalani emantaro\nIpudemantaro\nEe mohamaatalani emantaro\nMari emantaro\nSwalpa bharaalani emantaro\nIpudemantaro\nSameepa dooraalani emantaro\nAsalemantaro\nJaare ningini doralaanti ee dongani\nPaade konguni parimalinche ranguni\nPonguthunna sudhaa gangani\nIdaa adaa ade idaa\nMari emantaro maaripothunna kadhani\nEmantaro jaaripothunna mathini\nJaabilai talukumanna chukkani\nBaadhyatai dorukuthunna hakkuni\nDevudai eduguthunna bhaktuni\nSootramai bigiyanunna saakshini\nPaathalo kotthani ipudemantaro\nPotlaatalo santhini mari emantaro\nTappulo oppuni emantaro\nIpudemantaro\nGatha janmalo appuni emantaro\nAsalemantaro\nNaalo nuvvuni ika neelo nenu ni\nMaake memani manadaare manadani\nRaasukunna aathma charitani\nAdaa idaa ide adaa\nMari emantaro naaku neekunna idinee\nEmantaro nuvu nenaina adinee\nEmantaro maaripothunna kadhani\nEmantaro jaaripothunna mathini`,
    imageUrl: 'https://qqcdnpictest.mxplay.com/pic/5877c391d9ffe8a6ccb2491d6f1e92db/en/16x9/640x360/2a78cfed2e9ab8c7aedfa8380e63ad52_1080x608.png', // Romantic-themed
  },
  {
    id: 'killi-killi',
    name: 'Killi Killi',
    movieId: 'gudumba-shankar',
    youtubeId: 'TMqQMt9YljA',
    lyrics: `Nabo Nabo Nabarigajulu\nNabo Nabo Nabarigajulu\nEthugolusulu Mukkupudakalu Nadumusanna Nagaraalu Evalerugani Baagotham\nAbo Abo Abo Abo Pedaparaga Tikkuki Ye Malli\nAvu Toda Lagajorr Suit Boot Soore Rome Jayaala\nGotra Ganja Laagi Peeki Peeki Laagi Eyy Kot Eyyy\nKilli Killi Killi Killi Namilaaka Bagunnadhe Naagamalli\nDudlistaa Inkoti Isthaava Mallii\nKilli Killi Killi Killi Namilaaka Bagunnadhe Naagamalli\nDudlistaa Inkoti Isthaava Mallii\nmattu Gundi Gammattugundhi Korikegasi Kotlaatanandhi\nKottukocche Nee Vaalu Soopu Kandhireegai Katestha Vundhi\nO Pilla Nee Killi Baagunnadhe O Pilla Nee Killi Bagunnadhe\nKilli Killi Killi Killi Namilaaka Bagunnadhe Naagamalli\nDudlistaa Inkoti Isthaava Mallii\nKilli Killi Killi Killi Namilaaka Bagunnadhe Naagamalli\nDudlistaa Inkoti Isthaava Mallii\nNallagonda Narusu Podhaamu Paaya Burusu\nNee Koraku Chesthaa Yentaina Karusu\nNaa Jebuloni Parasu Paresukundhi Manasu\nNee Medakesthaa Bangaaru Golusu\nNallagonda Narusu Podhaamu Paaya Burusu\nNee Koraku Chesthaa Yentaina Karusu\nNaa Jebuloni Parasu Paresukundhi Manasu\nNee Medakesthaa Bangaaru Golusu\nHaddhu Daati Muddisthaava Vaddu Vaadu Vudiki Chasthaadu Aagu\nAddaraathiri Aa Aataku Anumatistha Ee Pootaku\nO Pilla Nee Chorava Bagunandhe\nAaku Paaku Chittala Paaku Daamu Dhoomu Daya\nUskalakila Laalu Chaata Dekh Nikal Gaya\nAadu Bidda Aadu Ayya Mungitaadu Dabbulisthadaadu\nAadu Aadu Adu Adu Adu Adu Aaduu\nAadu Paadu Chindhulaadu O Pilla Pothe Malli Raadu Eedu\nVasthe Evaduntade Neeku Thodu\nAadu Paadu Chindhulaadu O Pilla Pothe Malli Raadu Eedu\nVasthe Evaduntade Neeku Thodu\nAadu Aadu Aadu Aadu Chindhulaadu\nAadu Aadu Aadu Aadu Chindhulaadu\nAadu Chindhulaadu Aadu Chindhulaadu`, // Placeholder
    imageUrl: 'https://i.ytimg.com/vi/uEk7yEe0Ov0/maxresdefault.jpg',
  },
  {
    id: 'le-le-lele',
    name: 'Le Le Lele',
    movieId: 'gudumba-shankar',
    youtubeId: 'L_25duQqriU', 
    lyrics: `Le Le Le Le Ivvaale Le Le\nLe Le Le Le Ee Rojalle Le Le\nVeelunte Cheemalle Lekunte Chiruthalle\nRendante Rendunnaayi Baatale\nAvunante Aakalle Lekunte Baakalle\nUntene Pothuntaayi Baadhale\n\nLe Le Le Le Ivvaale Le Le\nLe Le Le Le Ee Rojalle Le Le\n\nChirugaalai Nuvvundaali Ninne Kavvisthunte\nSudigaalai Chutteyaali Le Le\nGodugalle Paricheyaali Ninne Kadhilisthunte\nPadagalle Panipattaali Le Le\nNeeralle Paaraalee Andhari Dhaaham Theerchaalee\nNeeralle Paaraalee Andhari Dhaaham Theerchaalee\nAnichesthe Muncheyaali Le\nNelalle Undaalee Andhari Bhaaram Moyaalee\nVisigisthe Bhuukampaale Choopaale\n\nLe Le Le Le Ivvaale Le Le\nLe Le Le Le Ee Rojalle Le Le\n\nChedu Undhee Manchee Undhee Artham Vere Undhee\nCheddollaki Chedu Cheyyadame Manchee\nChedhundhi Theepi Undhee Bhedham Vere Undhee\nChedhannadhi Unnapudegaa Theepia\nEdamundhee Kudi Undhee\nKudi Edamayye Godavundhee\nEdamundhee Kudi Undhee\nKudi Edamayye Godavundhee\nEtukaina Gamyam Okate Le\nBrathukundhee Chaavundhee\nChachchedhaakaa Brathukundhee\nChachchaaka Brathikelaagaa Brathakaale\n\nLe Le Le Le Ivvaale Le Le\nLe Le Le Le Ee Rojalle Le Le\nVeelunte Cheemalle Lekunte Chiruthalle\nRendante Rendunnaayi Baatale\nAvunante Aakalle Lekunte Baakalle\nUntene Pothuntaayi Baadhale`, // Placeholder
    imageUrl: 'https://i.ytimg.com/vi/RPJTielBnDA/maxresdefault.jpg',
  },
];