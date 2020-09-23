import { observable, action } from 'mobx';
import {createContext} from "react";
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
    localStorage.removeItem('memberInfo')
  }
  @action 
  async login(id, pw){
    await axios.post(
      '/api/member/login/', 
      {id : id ,pw : pw})
      .then(
        function (response) {
          if(response.data['memberInfo'] == null)
            return false
          else{
            localStorage.setItem('memberInfo',  response.data['memberInfo']) 
            return true
        }
    }).catch(error => {console.log('error : ',error.response)});
    return false
  }
}
export default  MemberStore = MemberStore.getInstance()