import { observable, action } from 'mobx';
import {createContext} from "react";
import requestLogin, {requestRegister,requestEditMember, requestReadMember} from '../controllers/MemberController'
import Member from "../models/Member"
class MemberStore{
  @observable members = []
  static instance = null;

  static getInstance () {
    if (!MemberStore.instance) 
      this.instance = new MemberStore();
    return MemberStore.instance;
  }
  constructor(){
    this.context = createContext(this)
  }
  @action 
  createMember(id,pw,name,nickname,age,gender,authority,phonenumber,email){
      const newMember = new Member(id,pw,name,nickname,age,gender,authority,phonenumber,email)
      console.log(newMember)
      return requestEditMember(newMember).then( 
        result => {
          if(result==200)
            return true
          else
            return false
    })
  }
  @action 
  async login(id, pw){
    return requestLogin(id,pw)
  }

  @action 
  async register(member){
    return requestRegister(member)
  }

  @action
  async readMember(){
    return requestReadMember()
  }
}
export default  MemberStore = MemberStore.getInstance()