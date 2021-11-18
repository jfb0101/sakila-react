import { DoLoginInput, DoLoginOutput, IDoLogin } from "./IDoLogin"



export const doLoginFake: IDoLogin = async (input: DoLoginInput) : Promise<DoLoginOutput> => {
    return {
        status: "SUCCESS",
        token: "123"
    }
}
