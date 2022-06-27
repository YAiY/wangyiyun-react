import api from './api.js';
import request from '../utils/request.js';

export function Login(params){
   console.log(api.login)
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