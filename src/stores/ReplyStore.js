import { observable, action } from "mobx";
import { createContext } from "react";
import requestReadReplies,{requestPostReply, requestReadMyReplies, requestModifyReply, requestDeleteReply} from "../controllers/ReplyController";
import Reply from "../models/Reply";


class ReplyStore {
    @observable replies = []
    @observable cnt = 1
    @observable cnt2 = [1]
    static instance = null;

    static getInstance() {
        if (!ReplyStore.instance) 
            this.instance = new ReplyStore();
        return ReplyStore.instance;
    }

    constructor() {
        this.context = createContext(this);
    }
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
    readReplies(post_id){
        requestReadReplies(post_id).then(result=>{
            this.replies = [...result]
            console.log(this.replies)
        })
    }

    @action
    modifyReply(reply_id, reply_text){
        return requestModifyReply(reply_id, reply_text)
    }

    @action
    deleteReply(reply_id){
        return requestDeleteReply(reply_id)
    }

    @action
    readMyReplies(){
        return requestReadMyReplies().then(result =>{ // 4-4
            this.replies = [...result]
        })
    }

    @action
    reset() {
        this.replies = []
    }
}

export default ReplyStore = ReplyStore.getInstance();