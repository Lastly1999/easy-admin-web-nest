import { ILoginForm } from "@/services/model/auth"
import httpRequest from "@/utils/axios/httpRequest"

export const loginAction = (data: ILoginForm) => {
    return httpRequest.post("/auth/login", data)
}

export const getGraphicCode = () => {
    return httpRequest.get("/auth/code")
}
