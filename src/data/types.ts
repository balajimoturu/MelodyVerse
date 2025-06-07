export interface Language {
  id: string;
  name: string;
}

export interface Movie {
  id: string;
  name: string;
  languageId: string;
  imageUrl?: string;
}

export interface Song {
  id: string;
  name: string;
  movieId: string;
  youtubeId: string;
  lyrics: string;
  imageUrl?: string;
}