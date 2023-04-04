import { message, Upload } from 'antd'

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        void message.error('You can only upload JPG/PNG file!')
        return Upload.LIST_IGNORE
    }
    const isLt2M = file.size / 1024 / 1024 < 4
    if (!isLt2M) {
        void message.error('Image must be smaller than 4MB!')
        return Upload.LIST_IGNORE
    }
    return isJpgOrPng && isLt2M
}

export default beforeUpload
