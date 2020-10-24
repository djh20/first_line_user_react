<<<<<<< HEAD
import { observable, action} from 'mobx';
import {createContext} from "react";
import requestReadAllPost, {readPost} from "../controllers/PostController"
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
      console.log(this.posts)
    })
=======
import { observable, action } from "mobx";
import { createContext } from "react";
import axios from "axios";

class PostStore {
  @observable posts = {};
  static instance = null;

  static getInstance() {
    if (!PostStore.instance) this.instance = new PostStore();
    return PostStore.instance;
  }
  constructor() {
    this.context = createContext(this);
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
  }
  @action
  readPost(post_id) {
    return readPost(post_id)
  }
}
<<<<<<< HEAD
export default  PostStore = PostStore.getInstance() // 4-5
=======
export default PostStore = PostStore.getInstance();
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
