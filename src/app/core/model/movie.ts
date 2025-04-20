export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  trailer: string;
  releaseDate: string;
  note: string;
  weLike: boolean;
  duration: string;
  createdAt: string;
  updatedAt: string;
  genreId: number;
  genre: {
    id: number;
    name: string;
    minimumAge: number;
  }
}
