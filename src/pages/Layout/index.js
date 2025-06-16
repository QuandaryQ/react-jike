import {Button,message} from "antd";

const Layout = ()=> {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    return (
        <div>
        {contextHolder}
        <Button onClick={() => success('测试提示')}>测试</Button>
        </div>
    )
}

export default Layout