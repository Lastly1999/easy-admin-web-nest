import httpRequest from "@/utils/axios/httpRequest"

export const getSysRoles = () => {
    return httpRequest.get("/role/all")
}
