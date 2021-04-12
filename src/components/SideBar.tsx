import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import IGenreResponseDTO from '../dtos/IGenreResponseDTO';
import { Button } from './Button';

interface SideBarProps {
  genres: IGenreResponseDTO[];
  setSelectedGenreId: Function;
  selectedGenreId: number;
}

export function SideBar({genres, setSelectedGenreId, selectedGenreId}: SideBarProps) {

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}