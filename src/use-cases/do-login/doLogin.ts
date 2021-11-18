import { UserApi } from "../../api/UserApi";
import { DoLoginOutput, IDoLogin } from "./IDoLogin";

export const doLogin : IDoLogin = async function (input) : Promise<DoLoginOutput> {
    const api = new UserApi()

    const loginResponse = await api.login({username: input.username, password: input.password})

    return {
        status: "SUCCESS",
        token: loginResponse.id
    }
}

