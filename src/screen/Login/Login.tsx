import React, { useEffect, useState } from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { useNavigate } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"
import { openNotification } from "@/utils/antd/antd"
import { loginAction, getGraphicCode } from "@/services/api/auth"
import { ILoginForm } from "@/services/model/auth"
import { useDispatch } from "react-redux"
import "./login.less"

export type IFormOptions = {
    userName: string
    passWord: string
    code: string
}

export type ILoginFormOptions = {
    codeAuth: string
} & IFormOptions

export type ILoginFormState = {
    codeBase: string
} & ILoginForm

const Login: React.FC = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState<ILoginFormState>({
        userName: "",
        passWord: "",
        codeAuth: "",
        code: "",
        codeBase: ""
    })

    useEffect(() => {
        getGraphic()
    }, [])

    // 获取图形验证码
    const getGraphic = async () => {
        const { data } = await getGraphicCode()
        setLoginForm({ ...loginForm, codeBase: data.cap, codeAuth: data.captchaId })
    }

    // 登录提交
    const onFinish = async (values: IFormOptions) => {
        if (values) {
            const params: ILoginFormOptions = { ...values, codeAuth: loginForm.codeAuth }
            const { code } = await loginAction(params)
            if (code === 200) {
                navigate("/app/dashboard")
                openNotification({ type: "success", message: "登录成功", description: "可以开始为所欲为啦！" })
            } else {
                getGraphic()
            }
        }
    }

    // 登录表单验证错误回调
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <Form name="basic" initialValues={{ ...loginForm }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Form.Item name="userName" rules={[{ required: true, message: "请输入用户名!" }]}>
                        <Input prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="passWord" rules={[{ required: true, message: "请输入密码!" }]}>
                        <Input.Password prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="code" rules={[{ required: true, message: "请输入图形验证码!" }]}>
                        <Input prefix={<UserOutlined />} suffix={<div className="cap-code" dangerouslySetInnerHTML={{ __html: loginForm.codeBase }}></div>} />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox style={{ color: "#fff" }}>记住我</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            马上开始！
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
