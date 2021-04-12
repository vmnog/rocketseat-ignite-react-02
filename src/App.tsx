import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { useEffect, useState } from 'react';

import IGenreResponseDTO from './dtos/IGenreResponseDTO';
import IMovieDTO from './dtos/IMovieDTO';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<IGenreResponseDTO[]>([]);

  const [movies, setMovies] = useState<IMovieDTO[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseDTO>({} as IGenreResponseDTO);

  useEffect(() => {
    api.get<IGenreResponseDTO[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<IMovieDTO[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<IGenreResponseDTO>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);



  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        genres={genres}
        selectedGenreId={selectedGenreId} 
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}