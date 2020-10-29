import { observable, action } from 'mobx';
import {createContext} from "react";
import axios from 'axios'
class KeywordStore{
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
  async readTodayKeyword(){
    const result = await axios.get(
        `/api/keyword_/`
    ).catch(error => {return null });
    return result === null ? null : result.data
  }
}
export default  KeywordStore = KeywordStore.getInstance()