import { FilmApi } from "../../api/FilmApi";
import { Film } from "../../models/Film";
import { IListFilms } from "./IListFilms";

export const listFilms: IListFilms = async (token) : Promise<Film[]> => {
    const filmApi = new FilmApi(token)

    return await filmApi.listAll()
}