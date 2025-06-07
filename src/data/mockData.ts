import { Language, Movie, Song } from './types';

export const languages: Language[] = [
  { id: 'telugu', name: 'Telugu' },
  { id: 'tamil', name: 'Tamil' },
  { id: 'hindi', name: 'Hindi' },
  { id: 'bengali', name: 'Bengali' },
  { id: 'Kannada', name: 'Kannada' },
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
    youtubeId: 'KwiDJclWo44',
    lyrics: `Tum ho toh gaata hai dil\nTum ho toh hai sab haasil\nTum ho toh jeetay hum\nTum ho toh jeetay hum\n\nTum ho paas apne\nYun lamhon mein\nToh har ahat se bhi kehta hai yeh dil\nTum ho toh gaata hai dil\nTum ho toh hai sab haasil\nTum ho toh jeetay hum\nTum ho toh jeetay hum\n\nDil meharbaan hai\nIski aadat hai\nHar ahat se mohabbat hai\nAanchal jab jab uthta hai\nKya khoob lagti ho\nBanno tumhari kasam\nTum ho paas apne\nYun lamhon mein\nToh har ahat se bhi kehta hai yeh dil\n\nTum ho toh gaata hai dil\nTum ho toh hai sab haasil\nTum ho toh jeetay hum\nTum ho toh jeetay hum`,
    imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];