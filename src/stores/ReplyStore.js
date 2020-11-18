import { observable, action } from "mobx";
import { createContext } from "react";
import requestReadReplies,{requestPostReply, requestReadMyReplies} from "../controllers/ReplyController";
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
            this.replies = [...this.replies,...result]
            console.log(this.replies)
        })
    }

    @action
    readMyReplies(){
        return requestReadMyReplies().then(result =>{ // 4-4
            console.log(this.replies)
            this.replies = [...result]
        })
    }
}

export default ReplyStore = ReplyStore.getInstance();