import { observable, action } from "mobx";
import { createContext } from "react";


class SnackbarStore {
    @observable isPositive = false
    @observable message = ""
    @observable open = false
    static instance = null;

    static getInstance() {
        if (!SnackbarStore.instance) 
            this.instance = new SnackbarStore();
        return SnackbarStore.instance;

    }
    constructor() {
        this.context = createContext(this);
    }

    @action
    pushMessage(message,status){
        this.open = true
        this.isPositive=status
        this.message = message
    }
}

export default SnackbarStore = SnackbarStore.getInstance();