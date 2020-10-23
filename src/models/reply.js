export default class Reply{
    constructor(reply_id,post_id,text,writer,writing_date,editing_date,is_deleted,is_blinded,prob_is_slang){
        this.reply_id = reply_id
        this.post_id = post_id
        this.writing_date = writing_date
        this.editing_date = editing_date
        this.is_deleted = is_deleted
        this.is_blinded = is_blinded
        this.prob_is_slang = prob_is_slang
    }
}
