import axios from 'axios';
import  QS from 'qs';
//创建axios实例
const service = axios.create({
    timeout: 30000 //超时时间
})

//添加request拦截器
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
})

//添加response拦截器
service.interceptors.response.use(
    response => {
        let res = {};
        res.status = response.status;
        res.data = response.data;
        return res;
    },
    error => {
        if (error.response && error.response.status == 404) {
            //跳转到xx页面
            console.log("404错误")
        }
        return Promise.reject(error.response)
    }
)

const request={
    //封装请求方法
       get:(req)=>{
            return new Promise((resolve, reject) => {
                axios.get(req.url, {
                    params: req.params
                }).then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err.data)
                })
            });
        },
        post:(req)=>{
            return new Promise((resolve, reject) => {
                axios.post(req.url, req.data)
                    .then(res => {
                        resolve(res.data);
                    })
                    .catch(err => {
                        reject(err.data)
                })
            });
        }
}
    
export default request;