export interface MovieModel {
  page: number;
  results: Array<Results>;
  total_pages: number;
  total_results: number;
}

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<string>;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
