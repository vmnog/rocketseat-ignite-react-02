import IGenreResponseDTO from "../dtos/IGenreResponseDTO";

interface HeaderProps {
    title: IGenreResponseDTO
}

export function Header({title}: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {title.title}</span></span>
        </header>
    )
}