import { observable, action } from 'mobx';
import {createContext} from "react";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import requestLogin, {requestRegister, requestReadMember} from '../controllers/MemberController'
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