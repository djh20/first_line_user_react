export default class Reply{
    constructor(reply_id,post_id, text,writer,writing_date,editing_date){
        this.reply_id = reply_id
        this.text = text
        this.writer = writer
        this.writing_date = writing_date
        this.editing_date = editing_date
        this.post_id = post_id
    }

    get_dic()
    {
        return {
            id : this.reply_id,
            text : this.text,
            writing_date : this.writing_date,
            editing_date : this.editing_date,
            detail : {'post_id' : this.post_id  }
        }
    }
}