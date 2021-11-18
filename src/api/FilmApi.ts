import { BaseApi } from "./BaseApi";

export class FilmApi extends BaseApi {
    async listAll() : Promise<FilmApi_ListAllOutputItem[]> {
        const response = await fetch(this.baseUrl + `/api/Films`,{
            headers: {
                Authorization: this.token
            }
        })

        return (await response.json())
    }
}

export type FilmApi_ListAllOutputItem = {
    filmId: number,
    title: string
}