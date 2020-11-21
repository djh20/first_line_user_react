export default class Post{
    constructor(post_id,title,text,num_good,num_reply,tag,writer,writing_date,editing_date,temperature,keyword,isMyPost="", isLike){
        this.post_id = post_id
        this.title = title
        this.text = text
        this.num_good = num_good
        this.num_reply = num_reply
        this.tag = tag
        this.writer = writer
        this.writing_date = writing_date
        this.editing_date = editing_date
        this.temperature = temperature
        this.keyword = keyword
        this.isMyPost = isMyPost
        this.isLike = isLike
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