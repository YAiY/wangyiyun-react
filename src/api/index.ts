import api from './api';
import request from '../utils/request';

export function Login(params: any){
   return request.get({
      url:api.Login,
      params
   })
}

export function Topic(){
   console.log(api.Topic)
   return request.get({
      url:api.Topic,
      params:{limit:"30",offset:"30"}
   })
}