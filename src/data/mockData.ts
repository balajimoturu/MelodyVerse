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
  {
  id: "diljit-dosanjh",
  name: "Diljit Dosanjh",
  languageId: "punjabi",
  imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIWgYU58WpvY/v2/-1x-1.webp"
  },
  {
  id: "yo-yo-honey-singh",
  name: "Yo Yo Honey Singh",
  languageId: "punjabi",
  imageUrl: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-tmkmflor1ivnldurponfmtv9m6-20171219104426.Medi.jpeg"
  },
  {
  id: "ayushmann-khurrana",
  name: "Ayushmann Khurrana",
  languageId: "punjabi",
  imageUrl: "https://images.indianexpress.com/2024/01/Bollywood-star-Ayushmann-Khurrana-1_1600.jpg"
  },
  {
  id: "daler-mehndi",
  name: "Daler Mehndi",
  languageId: "punjabi",
  imageUrl: "https://pearlentertainment.in/wp-content/uploads/classified-listing/2024/08/daler-mehndi.jpg"
  },
  {
  id: "badshah",
  name: "Badshah",
  languageId: "punjabi",
  imageUrl: "https://english.cdn.zeenews.com/sites/default/files/2020/08/06/877373-badshah.jpg?im=Resize=(1200,900)"
  },
  {
  id: "hardy-sandhu",
  name: "Hardy Sandhu",
  languageId: "punjabi",
  imageUrl: "https://static.iwmbuzz.com/wp-content/uploads/2022/09/from-harrdy-sandhu-to-guru-randhawa-punjabi-singers-look-handsome-hunks-in-suits-2.jpg"
  },
  {
  "id": "falguni-pathak",
  "name": "Falguni Pathak",
  "languageId": "hindi",
  "imageUrl": "https://lh3.googleusercontent.com/dMHNjJsORol8YL9JmixetWLcWdKjBh4_TQg7ZK9nFLrzlJ2yQZOh-mBwLFKAKWyxXe15R5ApnOP_pNQ-WxTRlrX781D4rHkVl3CM2t4VdQ=h450-rw"
  },
  {
  "id": "96",
  "name": "96",
  "languageId": "tamil",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/en/1/1b/96_film_poster.jpg"
  },
  {
  "id": "bojhena-shey-bojhena",
  "name": "Bojhena Shey Bojhena",
  "languageId": "bengali",
  "imageUrl": "https://th.bing.com/th/id/R.589cd76bb817286609ad1689e5f1cd04?rik=siQzOlqy9wB5Aw&pid=ImgRaw&r=0"
  },
  {
  "id": "gangster",
  "name": "Gangster",
  "languageId": "bengali",
  "imageUrl": "https://assets-in.bmscdn.com/discovery-catalog/events/et00046032-mantryruxr-landscape.jpg"
  },
  {
  "id": "kotigobba-2",
  "name": "Kotigobba 2",
  "languageId": "Kannada",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/e8/Kotigobba_2.jpg"
  },
  {
  "id": "natasaarvabhowma",
  "name": "Natasaarvabhowma",
  "languageId": "Kannada",
  "imageUrl": "https://i.pinimg.com/474x/f8/47/1f/f8471fb4b28931f78f68d79ff90e2f64.jpg"
  },
  {
  "id": "velipadinte-pusthakam",
  "name": "Velipadinte Pusthakam",
  "languageId": "malayalam",
  "imageUrl": "https://i.ytimg.com/vi/iwhyoW-kze4/maxresdefault.jpg"
  },
  {
  "id": "stromae",
  "name": "Stromae",
  "languageId": "french",
  "imageUrl": "https://shop.universalmusic.it/cdn/shop/files/2LP-01_4_b5ab7f9a-85a3-4dd5-b882-cf1d54ec6823.jpg?v=1741710478"
  }

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
  {
    "id": "proper-patola",
    "name": "Proper Patola",
    "movieId": "diljit-dosanjh",
    "youtubeId": "nCD2hj6zJEc",
    "lyrics": "Ho Proper Patola, Ni Tu Proper Patola\nSong about a stylish and confident girl.",
    "imageUrl": "https://i.ytimg.com/vi/nCD2hj6zJEc/maxresdefault.jpg"
  },
  {
    "id": "g-o-a-t",
    "name": "G.O.A.T",
    "movieId": "diljit-dosanjh",
    "youtubeId": "Qv6f7ZqZr9M",
    "lyrics": "Main taan G.O.A.T, G.O.A.T\nDiljit calls himself the 'Greatest Of All Time' in this self-anthem.",
    "imageUrl": "https://i.ytimg.com/vi/Qv6f7ZqZr9M/maxresdefault.jpg"
  },
  {
    "id": "5-taara",
    "name": "5 Taara",
    "movieId": "diljit-dosanjh",
    "youtubeId": "MsTW5cyWKj4",
    "lyrics": "5 Taara diyan kudiyaan, 5 Taara diyan\nA peppy romantic track about five-star girls.",
    "imageUrl": "https://i.ytimg.com/vi/a5G2b6sQfVw/maxresdefault.jpg"
  },
  {
    "id": "laembadgini",
    "name": "Laembadgini",
    "movieId": "diljit-dosanjh",
    "youtubeId": "15Sjjl_24x0",
    "lyrics": "Laembadgini chalayi jande o\nFun song about driving a fancy car.",
    "imageUrl": "https://i.ytimg.com/vi/0Xwz1J-9Uq8/maxresdefault.jpg"
  },
  {
    "id": "do-you-know",
    "name": "Do You Know",
    "movieId": "diljit-dosanjh",
    "youtubeId": "8Fbwzfjtz5g",
    "lyrics": "Do you know, main tainu kinna pyaar karda\nA romantic confession of love.",
    "imageUrl": "https://i.ytimg.com/vi/8Fbwzfjtz5g/maxresdefault.jpg"
  },
  {
    "id": "blue-eyes",
    "name": "Blue Eyes",
    "movieId": "yo-yo-honey-singh",
    "youtubeId": "nqye02H_H6I",
    "lyrics": "Blue eyes hypnotize teri kardi ai menu\nA club banger about a mesmerizing girl.",
    "imageUrl": "https://i.ytimg.com/vi/nqye02H_H6I/maxresdefault.jpg"
  },
  {
    "id": "love-dose",
    "name": "Love Dose",
    "movieId": "yo-yo-honey-singh",
    "youtubeId": "nJk6F3j6wXo",
    "lyrics": "Tenu black dress vich dekh ke\nA flirty, catchy track with signature Honey Singh beats.",
    "imageUrl": "https://i.ytimg.com/vi/nJk6F3j6wXo/maxresdefault.jpg"
  },
  {
    "id": "high-heels",
    "name": "High Heels",
    "movieId": "yo-yo-honey-singh",
    "youtubeId": "1wZVqGzK2rY",
    "lyrics": "High heels te nache\nA dance number featuring Jaz Dhami.",
    "imageUrl": "https://i.ytimg.com/vi/1wZVqGzK2rY/maxresdefault.jpg"
  },
  {
    "id": "brown-rang",
    "name": "Brown Rang",
    "movieId": "yo-yo-honey-singh",
    "youtubeId": "vX2cDW8LUWk",
    "lyrics": "Brown rang de munde, blue eyes wali\nA song appreciating brown-skinned girls.",
    "imageUrl": "https://i.ytimg.com/vi/vX2cDW8LUWk/maxresdefault.jpg"
  },
  {
    "id": "pani-da-rang",
    "name": "Pani Da Rang",
    "movieId": "ayushmann-khurrana",
    "youtubeId": "m2q2xJzQ4sY",
    "lyrics": "Pani da rang vekh ke, akhiyan jo hanju rul de\nA soulful romantic track from 'Vicky Donor'.",
    "imageUrl": "https://i.ytimg.com/vi/m2q2xJzQ4sY/maxresdefault.jpg"
  },
  {
    "id": "mitti-di-khushboo",
    "name": "Mitti Di Khushboo",
    "movieId": "ayushmann-khurrana",
    "youtubeId": "p1F6kK6XG2w",
    "lyrics": "Mitti di khushboo aayi, te mainu yaad teri aayi\nA nostalgic song about memories and love.",
    "imageUrl": "https://i.ytimg.com/vi/p1F6kK6XG2w/maxresdefault.jpg"
  },
  {
    "id": "nazm-nazm",
    "name": "Nazm Nazm",
    "movieId": "ayushmann-khurrana",
    "youtubeId": "p4qN9pONZcE",
    "lyrics": "Nazm nazm sa mere, honton pe thehar tu\nA poetic love ballad from 'Bareilly Ki Barfi'.",
    "imageUrl": "https://i.ytimg.com/vi/p4qN9pONZcE/maxresdefault.jpg"
  },
  {
    "id": "saadi-gali-aaja",
    "name": "Saadi Gali Aaja",
    "movieId": "ayushmann-khurrana",
    "youtubeId": "kGxUqj1k3dY",
    "lyrics": "Saadi gali aaja, nach ke dikha ja\nA fun and peppy song from 'Nautanki Saala!'.",
    "imageUrl": "https://i.ytimg.com/vi/kGxUqj1k3dY/maxresdefault.jpg"
  },
  {
    "id": "yahin-hoon-main",
    "name": "Yahin Hoon Main",
    "movieId": "ayushmann-khurrana",
    "youtubeId": "uT6TzBYDDiA",
    "lyrics": "Yahin hoon main, yahin hoon main\nA song about waiting and longing.",
    "imageUrl": "https://i.ytimg.com/vi/uT6TzBYDDiA/maxresdefault.jpg"
  },
  {
    "id": "tunak-tunak-tun",
    "name": "Tunak Tunak Tun",
    "movieId": "daler-mehndi",
    "youtubeId": "vTIIMJ9tUc8",
    "lyrics": "Tunak tunak tun, tunak tunak tun, tun da da da\nThe iconic, viral Bhangra song.",
    "imageUrl": "https://i.ytimg.com/vi/vTIIMJ9tUc8/maxresdefault.jpg"
  },
  {
    "id": "bolo-ta-ra-ra",
    "name": "Bolo Ta Ra Ra",
    "movieId": "daler-mehndi",
    "youtubeId": "yX2-4JZ9XzE",
    "lyrics": "Bolo ta ra ra ra, bolo ta ra ra ra\nA high-energy Bhangra classic.",
    "imageUrl": "https://i.ytimg.com/vi/yX2-4JZ9XzE/maxresdefault.jpg"
  },
  {
    "id": "ho-jayegi-balle-balle",
    "name": "Ho Jayegi Balle Balle",
    "movieId": "daler-mehndi",
    "youtubeId": "f9r4vUe9v8A",
    "lyrics": "Ho jayegi balle balle\nA festive song perfect for celebrations.",
    "imageUrl": "https://i.ytimg.com/vi/f9r4vUe9v8A/maxresdefault.jpg"
  },
  {
    "id": "na-na-na-na-na-re",
    "name": "Na Na Na Na Na Re",
    "movieId": "daler-mehndi",
    "youtubeId": "u1b8k4q4wqY",
    "lyrics": "Na na na na na re, na re na re\nA fun, rhythmic track.",
    "imageUrl": "https://i.ytimg.com/vi/u1b8k4q4wqY/maxresdefault.jpg"
  },
  {
    "id": "rang-de-basanti",
    "name": "Rang De Basanti",
    "movieId": "daler-mehndi",
    "youtubeId": "Qq5b0wFMhyI",
    "lyrics": "Rang de basanti, chola mera\nPatriotic anthem from the movie 'Rang De Basanti'.",
    "imageUrl": "https://i.ytimg.com/vi/Qq5b0wFMhyI/maxresdefault.jpg"
  },
  {
    "id": "genda-phool",
    "name": "Genda Phool",
    "movieId": "badshah",
    "youtubeId": "6vYnas6q3Sg",
    "lyrics": "Boron tolo lo lo, genda phool\nA fusion of Bengali folk and Punjabi rap.",
    "imageUrl": "https://i.ytimg.com/vi/6vYnas6q3Sg/maxresdefault.jpg"
  },
  {
    "id": "paagal",
    "name": "Paagal",
    "movieId": "badshah",
    "youtubeId": "pRDgH1bIiKs",
    "lyrics": "Main paagal ho gaya\nA party anthem with catchy beats.",
    "imageUrl": "https://i.ytimg.com/vi/pRDgH1bIiKs/maxresdefault.jpg"
  },
  {
    "id": "dj-wale-babu",
    "name": "DJ Wale Babu",
    "movieId": "badshah",
    "youtubeId": "d1tQFX_6K0A",
    "lyrics": "DJ wale babu mera gaana chala do\nA club favorite featuring Aastha Gill.",
    "imageUrl": "https://i.ytimg.com/vi/d1tQFX_6K0A/maxresdefault.jpg"
  },
  {
    "id": "kar-gayi-chull",
    "name": "Kar Gayi Chull",
    "movieId": "badshah",
    "youtubeId": "6p-lDYPR2P8",
    "lyrics": "Chull, chull, chull\nA Bollywood hit from 'Kapoor & Sons'.",
    "imageUrl": "https://i.ytimg.com/vi/6p-lDYPR2P8/maxresdefault.jpg"
  },
  {
    "id": "mercy",
    "name": "Mercy",
    "movieId": "badshah",
    "youtubeId": "Jyst8oIHOAY",
    "lyrics": "Girl you got me mercy, mercy, mercy\nA trendy dance track with international vibes.",
    "imageUrl": "https://i.ytimg.com/vi/Jyst8oIHOAY/maxresdefault.jpg"
  },
  {
    "id": "backbone",
    "name": "Backbone",
    "movieId": "hardy-sandhu",
    "youtubeId": "0h8R5p3qv0I",
    "lyrics": "Teri yaari meri backbone\nA romantic song about love and support.",
    "imageUrl": "https://i.ytimg.com/vi/0h8R5p3qv0I/maxresdefault.jpg"
  },
  {
    "id": "soch",
    "name": "Soch",
    "movieId": "hardy-sandhu",
    "youtubeId": "nKz9O8K2f1Q",
    "lyrics": "Soch na sake, tujhko kitna chahte hain hum\nA soulful ballad about deep love.",
    "imageUrl": "https://i.ytimg.com/vi/nKz9O8K2f1Q/maxresdefault.jpg"
  },
  {
    "id": "naah",
    "name": "Naah",
    "movieId": "hardy-sandhu",
    "youtubeId": "h1zZV3k2n1g",
    "lyrics": "Naah, main nahi karna pyar\nA catchy breakup song with dance beats.",
    "imageUrl": "https://i.ytimg.com/vi/h1zZV3k2n1g/maxresdefault.jpg"
  },
  {
    "id": "kya-baat-ay",
    "name": "Kya Baat Ay",
    "movieId": "hardy-sandhu",
    "youtubeId": "X9XK8Xx8Xx8",
    "lyrics": "Kya baat ay, kya baat ay\nA flirty, upbeat Punjabi hit.",
    "imageUrl": "https://i.ytimg.com/vi/X9XK8Xx8Xx8/maxresdefault.jpg"
  },
  {
    "id": "horn-blow",
    "name": "Horn Blow",
    "movieId": "hardy-sandhu",
    "youtubeId": "z1p8p3c7Qp8",
    "lyrics": "Jadon car horn blow kardi\nA fun song about a girl who turns heads.",
    "imageUrl": "https://i.ytimg.com/vi/z1p8p3c7Qp8/maxresdefault.jpg"
  },
  {
    "id": "maine-payal-hai-chhankai",
    "name": "Maine Payal Hai Chhankai",
    "movieId": "falguni-pathak",
    "youtubeId": "Qm2xX2Q9ZbY",
    "lyrics": "Maine payal hai chhankai, doli saja ke aayi re\nIconic Hindi pop song celebrating festive and romantic vibes.",
    "imageUrl": "https://m.timesofindia.com/photo/65035349/size-146576/65035349.jpg"
  },
  {
    "id": "yaad-piya-ki-aane-lagi",
    "name": "Yaad Piya Ki Aane Lagi",
    "movieId": "falguni-pathak",
    "youtubeId": "oG1R6ZzW9fU",
    "lyrics": "Yaad piya ki aane lagi, aise jaise bechaini ho\nRomantic Hindi pop hit that gained massive popularity in the late 90s.",
    "imageUrl": "https://st1.bollywoodlife.com/wp-content/uploads/2013/10/Yaad-piya-ki.jpg"
  },
  {
    "id": "meri-chunar-udd-udd-jaye",
    "name": "Meri Chunar Udd Udd Jaye",
    "movieId": "falguni-pathak",
    "youtubeId": "WmK0v7k2L0Y",
    "lyrics": "Meri chunar udd udd jaye, aaja re aaja re\nA soulful Hindi song with emotional depth.",
    "imageUrl": "https://i.ytimg.com/vi/p9r2GxMlRD4/maxresdefault.jpg"
  },
  {
    "id": "o-piya",
    "name": "O Piya",
    "movieId": "falguni-pathak",
    "youtubeId": "x6zQH0uYzRA",
    "lyrics": "O piya, o piya, o piya re\nA melodious Hindi pop track loved for its soothing rhythm.",
    "imageUrl": "https://i.ytimg.com/vi/GuXZxK-Y56I/maxresdefault.jpg"
  },
  {
    "id": "kaathalae-kaathalae",
    "name": "Kaathalae Kaathalae",
    "movieId": "96",
    "youtubeId": "8rIqcrSTnW8",
    "lyrics": "Kaathalae kaathalae kaadhaley kaadhaley\nEn nenjil adithidum ragangaley\nKaathalae kaathalae un kural ketkudhae\nUn mugam paarkudhae\nUn kai pidikkudhae\nUn kangal moodudhae\nUn kangal moodudhae\nUn kaadhal mattume vaazhndhadhae\nUn kaadhal mattume theendudhae\nUn thunai mattume thevaya\nInimel naanum naanum illaye",
    "imageUrl": "https://i.ytimg.com/vi/8rIqcrSTnW8/maxresdefault.jpg"
  },
  {
    "id": "the-life-of-ram",
    "name": "The Life of Ram",
    "movieId": "96",
    "youtubeId": "psi5C9WM3i0",
    "lyrics": "Ram endra peyar ketka\nEn nenju adhigam thudikkudhey\nVazhkaiyil naanum thedugirain\nUnarvugalil naanum theerkiren\nTheeratha kaadhal kaadhal illa\nThunai thunai naanum alla\nNee solla vaithadhu poi alla\nIthayam thirakkudhu poi illa\nVizhiyil vizhiyin silirpu\nVizhiyil vizhiyin nigazhvu\nIthu theerkadha kadhaigal pola\nIdhayathil thodangudhae",
    "imageUrl": "https://i.ytimg.com/vi/psi5C9WM3i0/maxresdefault.jpg"
  },
  {
    "id": "vasantha-kaalangal",
    "name": "Vasantha Kaalangal",
    "movieId": "96",
    "youtubeId": "KZZLqoRuuHw",
    "lyrics": "Vasantha kaalangal vandhaal\nMella mella enathu ulagil\nOru kaadhal ninaivugal thandhaal\nAdhai marakka mudiyumaa\nVizhigalil ezhudhiya kaadhal\nManadhil izhuthida yaarum\nPudhiya oru uruvam padaikkum\nAlaigal pol aval kaadhalum",
    "imageUrl": "https://i.ytimg.com/vi/KZZLqoRuuHw/maxresdefault.jpg"
  },
  {
    "id": "iravingu-theevai",
    "name": "Iravingu Theevai",
    "movieId": "96",
    "youtubeId": "iuSxkhHWk-M",
    "lyrics": "Iravingu theevai idhayathil unakku\nIravu irundhaalum un nilavaga\nIrudhi thunai naanum irundhaal\nInbamum koodave varumaa\nIthu oru kathai alla kadhal\nIthu oru nilai alla rasam\nNinaivadhae naanum irundhaal\nUn arugil naanum varuven",
    "imageUrl": "https://i.ytimg.com/vi/iuSxkhHWk-M/maxresdefault.jpg"
  },
  {
    "id": "anthaathi",
    "name": "Anthaathi",
    "movieId": "96",
    "youtubeId": "r0synl-lI4I",
    "lyrics": "Anthaathi anthaathi naan allavaa\nThodangina pinbum mudivillaiyaa\nAnbae en anbae naan thedi vandhaen\nNeeyum naanum serndha varai\nYaarum illai indha ulagil\nNaan solla ninaikkiren\nUn idhayam kettu paarkiren\nKadhalin oru moham\nKaviyaana kaatchigal",
    "imageUrl": "https://i.ytimg.com/vi/r0synl-lI4I/maxresdefault.jpg"
  },
  {
    "id": "bojhena-shey-bojhena",
    "name": "Bojhena Shey Bojhena",
    "movieId": "bojhena-shey-bojhena",
    "youtubeId": "azLiK9wdxl8",
    "lyrics": "Boro icche korche daakte tar gondhey mekhe thakte\nKeno sondhey sondhey naamle se palay\nTake aatke rakhar chesta aro bariye dicche teshta\nAmi dariye dekchi seshta janlaay\nBojhena se bojhena bojhena se bojhe na\nPaay shopno shopno logney tar onno onno daaknam",
    "imageUrl": "https://i.ytimg.com/vi/azLiK9wdxl8/maxresdefault.jpg"
  },
  {
    "id": "na-re-na",
    "name": "Na Re Na",
    "movieId": "bojhena-shey-bojhena",
    "youtubeId": "azLiK9wdxl8",
    "lyrics": "Na re na re na re re na na na re\nDheere dheere bole na na re na re na",
    "imageUrl": "https://i.ytimg.com/vi/azLiK9wdxl8/maxresdefault.jpg"
  },
  {
    "id": "bhogoban",
    "name": "Bhogoban",
    "movieId": "bojhena-shey-bojhena",
    "youtubeId": "HSxY0WYP9A4",
    "lyrics": "Hay bhogoban ei maya golaay keno bhese jai\nTumi kothay tumi kothay gelo sob shone jai",
    "imageUrl": "https://i.ytimg.com/vi/HSxY0WYP9A4/maxresdefault.jpg"
  },
  {
    "id": "saajna-female-version",
    "name": "Saajna (Female)",
    "movieId": "bojhena-shey-bojhena",
    "youtubeId": "??UNKNOWN??",
    "lyrics": "Saajna, saajna, tumi aasna roshnee jakhon chhai\nMon bhore jai tomay bhule ami bhaabi na",
    "imageUrl": "https://i.ytimg.com/vi/??UNKNOWN??/maxresdefault.jpg"
  },
  {
    "id": "thik-emon-ebhabe",
    "name": "Thik Emon Ebhabe",
    "movieId": "gangster",
    "youtubeId": "K_rE__FCz0I",
    "lyrics": "Thik emon ebhabe tumi amar hater hate\nChere diba na koto daka debo rate",
    "imageUrl": "https://i.ytimg.com/vi/K_rE__FCz0I/maxresdefault.jpg"
  },
  {
    "id": "tomake-chai",
    "name": "Tomake Chai",
    "movieId": "gangster",
    "youtubeId": "1f18irP--O8",
    "lyrics": "Tomar namer roddure ami dubechi somuddure\nJodi shotti jante chao tomake chai tomake chai",
    "imageUrl": "https://i.ytimg.com/vi/1f18irP--O8/maxresdefault.jpg"
  },
  {
  "id": "saaluthillave",
  "name": "Saaluthillave",
  "movieId": "kotigobba-2",
  "youtubeId": "rTrEPa66Hvo",
  "lyrics": "ಸಾಲುತಿಲ್ಲವೆ ಸಾಲುತಿಲ್ಲವೆ\nನಿನ್ನ ಹಾಗೆ ಮತ್ತು ಬೇರೆ ಇಲ್ಲವೇ\nಒಂದೇ ಸಮನೆ ನಿನ್ನ ನೋಡುತಿದ್ದ ಮೇಲೂ\nಉಸಿರು ಉಸಿರು ಬೆಸೆದ ಮೇಲೂ\nಮುಂಜಾನೆ ನನ್ನ ಪಾಲಿಗಂತೂ ಸಾಲೋಲ್ಲ\nನಿಘಂಟು ಪದಗಳೇ ಸಾಲೋದಿಲ್ಲ\nಏಳು ಸ್ವರವು ಮುಗಿದ ಮೇಲೂ ಕಾಡುವಂಥ\nನನ್ನ ನಿನ್ನ ಯುಗಗಳ ಗೀತೆ ಮುಗಿಯೋದಿಲ್ಲ\nಶ್ವಾಸದಲ್ಲಿ ನೀನು ವಾಸವಿದ್ದ ಮೇಲೂ\nಹಾಡು ಮುಗಿದು ಹೋದ ಮೇಲೂ ಮೌನ ತುಂಬಿ ಬಂದ ಮೇಲೂ",
  "imageUrl": "https://i.ytimg.com/vi/rTrEPa66Hvo/maxresdefault.jpg"
  },
  {
    "id": "yaaro-naanu",
    "name": "Yaaro Naanu",
    "movieId": "natasaarvabhowma",
    "youtubeId": "uvMAUAKivio",
    "lyrics": "Yaaro naanu yaaro naanu ninna olavalu beda\nEe manasina raagu yaaru kande yaaru beda\nKanneeru kaalu atta naale nodi oh\nNeeve nenape ninna kannu ninna haadu",
    "imageUrl": "https://i.ytimg.com/vi/uvMAUAKivio/maxresdefault.jpg"
  },
  {
    "id": "tajaa-samachara",
    "name": "Tajaa Samachara",
    "movieId": "natasaarvabhowma",
    "youtubeId": "oFUmyHA1hD4",
    "lyrics": "Tajaa samachara nanna hrudayadalli vibha\nTajaa samachara ninna hrudayadalli lava\nKanneeru maribeda ee gaali ninna hesaru\nEe gaali madari ninna kaige baribeku banda",
    "imageUrl": "https://i.ytimg.com/vi/oFUmyHA1hD4/maxresdefault.jpg"
  },
  {
  "id": "entammede-jimikki-kammal",
  "name": "Entammede Jimikki Kammal",
  "movieId": "velipadinte-pusthakam",
  "youtubeId": "FXiaIH49oAU",
  "lyrics": "എന്റമ്മേടെ ജിമിക്കി കമ്മൽ എന്റപ്പൻ കട്ടോണ്ടു പോയേ\nഎന്റപ്പന്റെ ബ്രാണ്ടിക്കുപ്പി എന്റമ്മ കുടിച്ചു തീർത്തേ\nഇവിടൊരു ചാക്കരയും വേലകളീം ഒത്തുവന്നപോൽ\nചിലരുടെ തോർത്തുകൊതിച്ച കാര്യം ഓർത്തുപോകവേ\nനിങ്ങളുടെ പ്രിയഗാനങ്ങളിലേയ്ക്ക് ചേർക്കൂ",
  "imageUrl": "https://i.ytimg.com/vi/FXiaIH49oAU/maxresdefault.jpg"
  },
  {
  "id": "papaoutai",
  "name": "Papaoutai",
  "movieId": "stromae",
  "youtubeId": "oiKj0Z_Xnjc",
  "lyrics": "",
  "imageUrl": "https://i.ytimg.com/vi/oiKj0Z_Xnjc/maxresdefault.jpg"
}



];