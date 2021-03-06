import { observable, action} from 'mobx';
import {createContext} from "react";
import requestReadAllPost, {readPost, search, requestAddPost, requestReadMyPost, requestReadLikePost, requestUpdatePost, requestDeleteMyPost, requestLikePost} from "../controllers/PostController"
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
  reset(){
    this.posts = [];
  }
  @action 
  readAll(){
    requestReadAllPost().then(result =>{ // 4-4
      this.posts = [...result]
      console.log(this.posts)
    })
  }
  @action
  readPost(post_id) {
    return readPost(post_id).then(result =>
      {
        return result
      })
  }
  @action
  search(code, query,pageNo) {

    const codeTable = {'전체':0,'차가움':1,'따뜻함':2,'뜨거움':3,'제목':4,'내용':30,'필명':14,'키워드':21,'태그':13}
    return search(codeTable[code], query, pageNo).then(result=>{
      this.posts = [...result]
    })
  }

  @action
  addPost(post_title, post_text, post_tags, post_keyword){
    console.log(post_keyword)
    return requestAddPost(post_title, post_text, post_tags, post_keyword).then(result=>{
      return result
    })
  }

  @action
  updatePost(post_id, post_title, post_text, post_tags, post_keyword){
    return requestUpdatePost(post_id,post_title, post_text, post_tags, post_keyword).then(result=>{
      return result
    })
  }

  @action
  readMyPost(){
    return requestReadMyPost().then(result =>{ // 4-4
      this.posts = [...result]
      return result
    })
  }

  @action
  readLikePost(){
    return requestReadLikePost().then(result =>{ // 4-4
      this.posts = [...result]
      return result
    })
  }

  @action 
  deleteMyPost(post_id){
    return requestDeleteMyPost(post_id).then(result=>{
      if(result==200)
        return true
      else
        return false
    })
  }

  @action 
  likePost(post_id){
    return requestLikePost(post_id).then(result=>{
      if(result==200)
        return true
      else
        return false
    })
  }
}
export default  PostStore = PostStore.getInstance() // 4-5

