import { BaseApi } from "./BaseApi";

export class UserApi extends BaseApi {
    async login(input: UserApi_LoginInput): Promise<UserApi_LoginOutput> {
        const response = await fetch(this.baseUrl + `/api/Users/login`,{
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-type':'application/json'
            }
        })

        return (await response.json()) as UserApi_LoginOutput
    }

}
export type UserApi_LoginInput = {
    username:string,
    password: string
}

export type UserApi_LoginOutput = {
    id:string,
    userId: number
}