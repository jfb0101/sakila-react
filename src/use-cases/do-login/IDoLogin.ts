export interface IDoLogin {
    (input: DoLoginInput) : Promise<DoLoginOutput>
}

export type DoLoginInput = {
    username:string,
    password: string
}

export type DoLoginOutput = {
    status: LoginStatus,
    token: string
}

export type LoginStatus = "SUCCESS" | "FAIL"