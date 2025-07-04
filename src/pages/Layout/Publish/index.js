import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select, message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {Link, useNavigate} from 'react-router-dom'
import './index.scss'
import ReactQuill  from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { useState} from "react";
import { PostArticleAPI} from "../../../apis/article";
import {useChannel} from "../../../hooks/useChannel";

const { Option } = Select

const Publish = () => {
    const {channelList} = useChannel()
    const onFinish = (formData)=>{
        if(imageList.length !== imageType) return message.warning('请上传正确数量的图片')
        const reqData = {
            title:formData.title,
            content:formData.content,
            cover:{
                type: imageType,
                images:imageList.map(item=>item.response.data.url)
            },
            channel_id:formData.channel_id
        }
        PostArticleAPI(reqData)
        navigate('/')
    }
    const [imageList,setImageList] = useState([])
    const onChange=(props)=>{
        console.log('上传图片')
        setImageList(props.fileList)
    }
    const [imageType,setImageType] = useState(0)
    const onTypeChange=(e)=>{
        setImageType(e.target.value)
    }
    const navigate = useNavigate()
    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '发布文章' },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 0 }}
                    onFinish={(formData)=>onFinish(formData)}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                            {/*<Option value={0}>推荐</Option>*/}
                            {channelList.map(item=><Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={(e)=>onTypeChange(e)}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {imageType > 0 && <Upload
                            listType="picture-card"
                            showUploadList
                            action='http://geek.itheima.net/v1_0/upload'
                            name="image"
                            onChange={(props)=>onChange(props)}
                            maxCount={imageType}
                        >
                            <div style={{ marginTop: 8 }}>
                                <PlusOutlined />
                            </div>
                        </Upload>}
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        {/*富文本编辑器*/}
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入文章内容"
                        >

                        </ReactQuill>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit" >
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish