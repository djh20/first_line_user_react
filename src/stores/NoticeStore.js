import { observable, action } from "mobx";
import { createContext } from "react";
import requestReadNotices, {requestCreateNotice, requestReadMyNotices, requestDeleteNotice} from '../controllers/NoticeController'

class NoticeStore {
    @observable notices = []
    @observable myNotices = []
    static instance = null;

    static getInstance() {
        if (!NoticeStore.instance) 
            this.instance = new NoticeStore();
        return NoticeStore.instance;

    }
    constructor() {
        this.context = createContext(this);
    }

    @action 
    readMyNotices(){
        return requestReadMyNotices().then( (notices) =>{
            console.log(notices)
            this.myNotices = [...notices]
        })
    }

    @action
    createNotice(receiver_id, sender_id, text, source_url){
        return requestCreateNotice(receiver_id, sender_id, text, source_url).then( result => {
            return result;
        })
    }

    @action
    readNotices(condition, query)
    {
        return requestReadNotices(condition, query).then( (notices) =>{
            this.notices = [...notices]
        })
    }

    @action
    deleteNotice(notice_id)
    {
        var index = this.find(notice_id)
        console.log(index)
        if(index != null)
            this.myNotices.splice(index, 1);
        return requestDeleteNotice(notice_id).then( (result) =>{
            return result
        })
    }

    find(notice_id){
        for(var i = 0 ; i < this.myNotices.length ; i++){
            if(this.myNotices[i]['notice_id'] == notice_id){
                console.log(i)
                return i;
            }
        }
        return null
    }
}

export default NoticeStore = NoticeStore.getInstance();