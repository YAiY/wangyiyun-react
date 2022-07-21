import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import {Login} from './api/index';
import  Layout  from './page/layout/index';
// console.log(typeof foo);
export class FileName extends Component {
  constructor(props: any) {
    super(props);
  }
  componentWillMount(){
    // Login({phone:"17600492702",password:"balabu01"}).then(res=>{
    // Login({phone:"17551900543",password:"xd990724"}).then(res=>{
    Login({phone:"15296767487",password:"xd990724"}).then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err)})
  }
  render() {

    return (
      <Routes>
        <Route path="/home" element={<Layout/>}/>
      </Routes>
    )

  }

}

export default FileName;