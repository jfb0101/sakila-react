import { Film } from "../../models/Film";

export interface IListFilms {
    (token:string) : Promise<Film[]>    
}
