import { observable, action } from "mobx";
import { createContext } from "react";
import axios from "axios";

class ReplyStore {
    @observable reply = {};
    static instance = null;

    static getInstance() {
        if (!ReplyStore.instance) this.instance = new ReplyStore();
    return ReplyStore.instance;
    }
    constructor() {
        this.context = createContext(this);
    }

}

export default ReplyStore = ReplyStore.getInstance();