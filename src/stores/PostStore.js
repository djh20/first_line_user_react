<<<<<<< HEAD
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
  }
  @action
  async addPost(title, text) {
    await axios
      .post("/api/post/write", { title: title, text: text })
      .then(function (response) {
        if (response.data["postInfo"] != null) 
          {
            /*데이터 저장 로직 */
            return true;
          }
          else 
            return false;
        }
      )
      .catch((error) => {
        console.log("error : ", error.response);
      });
    return false;
  }
  @action
  async readAll() {
    const result = await axios.get(`/api/post/all`).catch((error) => {
      return null;
    });
    return result === null ? null : result.data;
  }

  @action
  async readPost(post_id) {
    const result = await axios.get(`/api/post/${postId}`).catch((error) => {
      return null;
    });
    return result === null ? null : result.data;
  }
}
export default PostStore = PostStore.getInstance();
>>>>>>> 5b334007224f5e8493c6572dc8edc28cebc959f4
