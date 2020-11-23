import { observable, action } from "mobx";
import { createContext } from "react";
import requestReportPost,{requestReportReply} from "../controllers/ReportController";
import Report from "../models/Report";


class ReportStore {
    @observable replies = []
    static instance = null;

    static getInstance() {
        if (!ReportStore.instance) 
            this.instance = new ReportStore();
        return ReportStore.instance;

    }
    constructor() {
        this.context = createContext(this);
    }

    @action
    reportPost(post_id, text){
        return requestReportPost(post_id, text)
    }

    @action
    reportReply(reply_id, text){
       return requestReportReply(reply_id, text)
    }
}

export default ReportStore = ReportStore.getInstance();