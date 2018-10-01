import axios from 'axios'
// 由于此文件没有Vue实例，所以需要引入
import { Message } from 'element-ui'
import { resolve } from 'path';

// 它的存在给你使用相对路径的机会
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
// 约定数据上传的格式，这可以是json格式的额，随你喜欢
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 允许跨域
axios.defaults.withCredentials = true

// 参数不传那就用默认的'GET'和{}，这是ES6的语法
export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type
        }
        // params、data是有特殊含义的，参考axios的npmjs.com,总之就是解析赋值
        if(type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }

        // 发送ajax请求
        // 这个catch用于请求是否出问题了
        axios(option).then(res => {
            console.log(res.data)
            if(res.data.status === 'ok') {
                Message.success(res.data.msg)
                resolve(res.data)
            } else {
                Message.error(res.data.msg)
                // 这个为你测试接口的catch埋下伏笔,我测试了下reject执行完
                // 才到Message执行，这很奇怪哈……这是为什么呢？**？：**
                // 想了想，这不就是下一个回调函数执行吗？
                reject(res.data)
            }
        }).catch(err => {
            Message.error('网络异常')
            reject({ msg: '网络异常' })
        })
    })
}
