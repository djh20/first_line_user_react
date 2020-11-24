import { observable, action } from 'mobx';
import {createContext} from "react";
import axios from 'axios'
import requestGetTodayKeyword from '../controllers/KeywordController';

class KeywordStore{
  @observable keyword = [] 
  static instance = null; 

  static getInstance () {
    if (!KeywordStore.instance) 
      this.instance = new KeywordStore();
    return KeywordStore.instance;
  }
  constructor(){
    this.context = createContext(this)
  }
  @action 
  async getTodayKeyword(){
    return requestGetTodayKeyword().then(result => {
      return result
    })
  }

}
export default  KeywordStore = KeywordStore.getInstance()