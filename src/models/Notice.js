export default class MyNotice{
    constructor(notice_id, text, send_datetime, source_url){
        this.notice_id = notice_id,
        this.text = text,
        this.send_datetime = send_datetime,
        this.source_url = source_url

    }
    getDic(){
        return{
            notice_id : this.notice_id,
            text : this.text,
            send_datetime : this.send_datetime,
            source_url : this.source_url
        }
    }
}