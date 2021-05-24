import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
    baseURL: 'localhost:8080',
    timeout: 5000
})
// 响应拦截
service.interceptors.response.use((response) => {
    const res = response.data
    if (!res.success) {
        Message({
            type: 'error',
            message: res.message || '请求错误',
            duration: 2000
        })
        return Promise.reject(new Error(res.message || '请求错误'))
    } else {
        if (response.config.url === '/login') {
            Message({
                type: 'success',
                message: res.message || '请求成功',
                duration: 2000
            })
            return res
        } else {
            return res
        }
    }
}, (error) => {
    Message({
        type: 'error',
        message: error.message,
        duration: 2000
    })
    return Promise.reject(error)
})
export default service