import { Form, Input, Button, Checkbox } from "antd"
import { useNavigate } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"
import { openNotification } from "@/utils/antd"
import "./login.less"

const Login = () => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        navigate("/app")
        openNotification({ type: "success", message: "登录成功", description: "可以开始为所欲为啦！" })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
                        <Input prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                        <Input.Password prefix={<UserOutlined />} />
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
