import axios, {
    // Method, AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosInterceptorManager,
    AxiosResponse} from 'axios';
// import { apiKeyType, apiKeyDataType } from '../api/api'
// import  QS from 'qs';

//创建axios实例
const service = axios.create({
    timeout: 30000 //超时时间
})

//添加request拦截器
service.interceptors.request.use((config: any) => {
    return config;
}, (error: any) => {
    Promise.reject(error);
})

//添加response拦截器
service.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        let res: any = {};
        res.status = response.status;
        res.data = response.data;
        return res;
    },
    (error: any) => {
        if (error.response && error.response.status == 404) {
            //跳转到xx页面
            console.log("404错误")
        }
        return Promise.reject(error.response)
    }
)

const request={
    //封装请求方法
       get:(req: any)=>{
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
        post:(req: any)=>{
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