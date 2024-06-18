import axios from 'axios'
// 创建axios实例
const request = axios.create({
    // baseURL: '',// 所有的请求地址前缀部分(没有后端请求不用写)

    //这时你要代理
    //填写后端统一的前缀，
    //如：123.xx.xx.xx:456/api/...
    //这个/api是每一个接口都有的，就写它
    //如果没有，也写，下面会讲区别
    baseURL: '/api',
    timeout: 80000, // 请求超时时间(毫秒)
    withCredentials: true,// 异步请求携带cookie
    // headers: {
    // 设置后端需要的传参类型
    // 'Content-Type': 'application/json',
    // 'token': x-auth-token',//一开始就要token
    // 'X-Requested-With': 'XMLHttpRequest',
    // },
})

// request拦截器
request.interceptors.request.use(
    config => {
        // 如果你要去localStor获取token
        let token = localStorage.getItem("x-auth-token");
        if (token) {
            //添加请求头
            config.headers["Authorization"] = "Bearer " + token
        }
        return config
    },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)

// response 拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default request
