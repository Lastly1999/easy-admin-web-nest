import { notification } from "antd"

export type NotificationOption = {
    type: "success" | "error" | "info" | "warning" | "open"
    message: string
    description: string
}

export const openNotification = (options: NotificationOption) => {
    return notification[options.type]({
        message: options.message,
        description: options.description
    })
}
