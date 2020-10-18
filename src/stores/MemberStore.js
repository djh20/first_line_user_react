import { observable, action } from 'mobx';
import {createContext} from "react";
import cookie from 'react-cookies'
import axios from 'axios'
class MemberStore{
  @observable count = 0;
  static instance = null;

  static getInstance () {
    if (!MemberStore.instance) 
      this.instance = new MemberStore();
    return MemberStore.instance;
  }
  constructor(){
    this.context = createContext(this)
  }
  @action increase = () => {
    this.count++;
  }
  @action logout = () => {
    cookie.remove("jwt")
  }
  @action 
  async login(id, pw){
    return await axios.post(
      '/api/member/login/', 
      {id : id ,pw : pw})
      .then(
        function (response) {
          console.log(response.status)
          if(response.status == 410)
            return false;
          else{
            cookie.save("jwt",response.data['jwt'])
            console.log("true")
            return true
          }
    }).catch(error => {console.log('error : ',error.response)});
  }
}
export default  MemberStore = MemberStore.getInstance()