import { useEffect, useState } from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { useNavigate } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"
import { openNotification } from "@/utils/antd/antd"
import { loginAction, getGraphicCode } from "@/services/api/auth"
import { ILoginForm } from "@/services/model/auth"
import { useDispatch, useSelector } from "react-redux"
import "./login.less"

const Login = () => {
    const dispatch = useDispatch()

    const [loginForm, setLoginForm] = useState<ILoginForm>({
        userName: "",
        passWord: "",
        codeAuth: "",
        code: ""
    })

    const navigate = useNavigate()

    useEffect(() => {
        getGraphicCode().then(res => {
            console.log(res.data)
        })
    })

    const onFinish = async (values: any) => {
        if (values) {
            const { code } = await loginAction(loginForm)
            if (code === 200) {
                navigate("/app/dashboard")
                openNotification({ type: "success", message: "登录成功", description: "可以开始为所欲为啦！" })
            }
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Form.Item name="userName" rules={[{ required: true, message: "Please input your username!" }]}>
                        <Input prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="passWord" rules={[{ required: true, message: "Please input your password!" }]}>
                        <Input.Password prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="code" rules={[{ required: true, message: "请输入图形验证码!" }]}>
                        <Input
                            prefix={<UserOutlined />}
                            suffix={
                                <div>
                                    <img src={loginForm.code} />
                                </div>
                            }
                        />
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
