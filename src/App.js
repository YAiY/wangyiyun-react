import React, { Component } from 'react';
import {Login} from './api/index.js';
export class FileName extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    Login({phone:"手机号",password:"密码"}).then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err)})
  }
  render() {

    return <div>$2</div>

  }

}

export default FileName;