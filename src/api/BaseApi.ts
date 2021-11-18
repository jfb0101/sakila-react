export class BaseApi {
    baseUrl: string
    token:string

    constructor(token:string = "") {
        this.baseUrl = "https://c615-2804-2b04-266-1800-a5b8-e68e-b5cd-3f95.ngrok.io"
        this.token = token
    }
}