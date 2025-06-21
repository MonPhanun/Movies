export interface MovieDetailModel {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Array<Genres>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<languages>;
  title: string;
  video: boolean;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
}

export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Country {
  iso_3166_1: string;
  name: string;
}

export interface languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Genres {
  id: string;
  name: string;
}
