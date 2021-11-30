export class BaseApi {
    baseUrl: string
    token:string

    constructor(token:string = "") {
        this.baseUrl = "https://ddbf-143-208-221-50.ngrok.io"
        this.token = token
    }
}