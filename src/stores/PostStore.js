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
        if (response.data["postInfo"] == null) return false;
        else {
          {
            /*데이터 저장 로직 */
          }
          return true;
        }
      })
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
}
export default PostStore = PostStore.getInstance();
