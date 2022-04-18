import httpRequest from "@/utils/axios/httpRequest"

// 获取系统图标
export const getSystemIcons = () => {
    return httpRequest.get<any, any>("/sys/icons")
}