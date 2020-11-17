export default class Post{
    constructor(post_id,title,num_lookup,text,like,num_reply,tag,writer,writing_date,editing_date,temperature,keyword){
        this.post_id = post_id
        this.title = title
        this.num_lookup = num_lookup
        this.text = text
        this.like = like
        this.num_reply = num_reply
        this.tag = tag
        this.writer = writer
        this.writing_date = writing_date
        this.editing_date = editing_date
        this.temperature = temperature
        this.keyword = keyword
    }

    get_dic(){
        return{
            title : this.title,
            like : this.like,
            num_lookup : this.num_lookup,
            num_reply : this.num_reply,
            writing_date : this.writing_date,
            editing_date : this.editing_date,
            temperature : this.temperature,
            keyword : this.keyword,
        }
    }
}

// Post = {
//     'post_id' : 'post_id',
//     'title' : 'title',
//     'text' : 'text',
//     'like' : 'like',
//     'tag' : 'tag',
//     'writer' : 'writer',
//     'writing_date' : 'writing_date',
//     'editing_date' : 'editing_date',
//     'temperature' : 'temperature',
//     'keyword' : 'keyword'
// }