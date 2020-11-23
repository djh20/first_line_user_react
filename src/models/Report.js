export default class PostReport{
    constructor(post_id, report_text){
        this.post_id = post_id
        this.report_text = report_text
    }
}

export class ReplyReport{
    constructor(reply_id, report_text){
        this.reply_id = reply_id
        this.report_text = report_text
    }
}