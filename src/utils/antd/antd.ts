import { notification, message } from "antd"
import { ArgsProps } from "antd/lib/message"

export type NotificationOption = {
    type: "success" | "error" | "info" | "warning" | "open"
    message: string
    description: string
}

export type MessageOptions = {} & ArgsProps

export const openNotification = (options: NotificationOption) => {
    return notification[options.type]({
        message: options.message,
        description: options.description
    })
}

export const openMessage = (options: MessageOptions) => {
    return message[options.type](options)
}
