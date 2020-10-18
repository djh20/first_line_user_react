import { observable, action} from 'mobx';
import {createContext} from "react";
import requestReadAllPost from "../controllers/PostController"
class PostStore{
  @observable posts = [] // 4-3
  static instance = null; // 4-1
  
  static getInstance () { // 4-1
    if (!PostStore.instance) 
      this.instance = new PostStore();
    return PostStore.instance;
  }
  constructor(){
    this.context = createContext(this) // 4-2 
  }
  @action 
  readAll(){
    requestReadAllPost().then(result =>{ // 4-4
      this.posts = [...this.posts, ...result]
    })
  }
}
export default  PostStore = PostStore.getInstance() // 4-5