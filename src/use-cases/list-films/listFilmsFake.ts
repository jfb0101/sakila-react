import { Film } from "../../models/Film";
import { IListFilms } from "./IListFilms";

export const listFilmsFake: IListFilms = async (_token) : Promise<Film[]> => {
    return [
        {
            filmId: 1,
            title: 'Film 1'
        },
        {
            filmId: 2,
            title: 'Film 2'
        },
        {
            filmId: 3,
            title: 'Film 3'
        }
    ]
}