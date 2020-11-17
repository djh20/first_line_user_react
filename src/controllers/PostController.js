import axios from 'axios'
import Post from '../models/Post'

export default async function requestReadAllPost(){ // 5-1
    return await axios.get(
        `/api/post/all`, {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ // 5-2
            var tmp = result.data
            Object.keys(tmp).map((key,index) => (
                data.push(new Post(tmp[key]['post_id'], tmp[key]['title'],
                tmp[key]['text'],tmp[key]['like'],tmp[key]['num_reply'],
                tmp[key]['tag'],tmp[key]['writer'],
                tmp[key]['writing_date'],tmp[key]['edting_date'],
                tmp[key]['temperature'],tmp[key]['keyword']
                ))
            ))

            return data
        }
        return []
    });
}

export async function readPost(post_id){ // 5-1
    return await axios.get(
        `/api/post/${post_id}/`, {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        if(result.data != null){ // 5-2
            var tmp = result.data
            var post = new Post(tmp['post_id'], tmp['title'],
                tmp['text'],tmp['like'],tmp['num_reply'],
                tmp['tag'],tmp['writer'],
                tmp['writing_date'],tmp['edting_date'],
                tmp['temperature'],tmp['keyword'])

            return post
        }
        return null
    });
}


export async function search(code, query, pageNo){ // 5-1
    return await axios.get(
        `/api/post/`, {params : {code : code, page_no : pageNo, query:query }}, {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ // 5-2
            var tmp = result.data
            Object.keys(tmp).map((key,index) => (
                data.push(new Post(tmp[key]['post_id'], tmp[key]['title'],
                tmp[key]['text'],tmp[key]['like'],tmp[key]['num_reply'],
                tmp[key]['tag'],tmp[key]['writer'],
                tmp[key]['writing_date'],tmp[key]['edting_date'],
                tmp[key]['temperature'],tmp[key]['keyword']
                ))
            ))

            return data
        }
        return []
    });
}


export async function requestAddPost(post_title, post_text, post_tags, post_keyword)
{
    console.log(post_title)
    console.log(post_text)
    console.log(post_tags)
    console.log(post_keyword)

    return await axios.post('/api/post/',{
        title: post_title,
        text: post_text,
        tag: post_tags,
        keyword: post_keyword},{withCreadentials: true}
    ).catch(err => console.warn(err)).then(res => {return res.status})
}


export async function requestReadMyPost(){ // 5-1
    return await axios.get(
        `/api/post/write/record/`, {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ // 5-2
            var tmp = result.data
            Object.keys(tmp).map((key,index) => (
                data.push(new Post(tmp[key]['post_id'], tmp[key]['title'],
                tmp[key]['text'],tmp[key]['like'],tmp[key]['num_reply'],
                tmp[key]['tag'],tmp[key]['writer'],
                tmp[key]['writing_date'],tmp[key]['edting_date'],
                tmp[key]['temperature'],tmp[key]['keyword']
                ))
            ))
            console.log(data)
            return data
        }
        return []
    });
}