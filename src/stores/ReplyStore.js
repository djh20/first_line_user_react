import { observable, action } from "mobx";
import { createContext } from "react";
<<<<<<< HEAD
import requestReadReplies,{requestPostReply} from "../controllers/ReplyController";
import Reply from "../models/Reply";


class ReplyStore {
    @observable replies = []
    static instance = null;

    static getInstance() {
        if (!ReplyStore.instance) 
            this.instance = new ReplyStore();
        return ReplyStore.instance;
=======
import axios from "axios";

class ReplyStore {
    @observable reply = {};
    static instance = null;

    static getInstance() {
        if (!ReplyStore.instance) this.instance = new ReplyStore();
    return ReplyStore.instance;
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
    }
    constructor() {
        this.context = createContext(this);
    }
<<<<<<< HEAD
    @action
    postReply(post_id,text){
        return requestPostReply(post_id,text).then(result=>{
            if(result == 200)
                return true
            else
                return false
                
        })
    }

    @action
    readReples(post_id){
        requestReadReplies(post_id).then(result=>{
            this.replies = [...this.replies,...result]
            console.log(this.replies)
        })
    }
=======

>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
}

export default ReplyStore = ReplyStore.getInstance();