import axios from 'axios'
import Reply from '../models/Reply'
import cookie from 'react-cookies'
export default async function requestReadReplies(_post_id){ 
    return await axios.get(
        '/api/reply/', {params:{ post_id :  _post_id}},{withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ 
            var tmp = result.data
            Object.keys(tmp).map((key,index) => (
                data.push(new Reply(tmp[key]['reply_id'],tmp[key]['post_id'],tmp[key]['text'],tmp[key]['writer']
                ,tmp[key]['writing_date'],tmp[key]['editing_date'],))
            ))
            console.log(data)
            return data
        }
        return []
    });
}

export async function requestPostReply(_post_id, _text)
{
    console.log(_post_id)
    console.log(_text)
    console.log(cookie.load("jwt"))
    return await axios.post('/api/reply/',{ 
        post_id : _post_id,
        text : _text},{ withCreadentials: true }
        ).catch(err => console.warn(err)).then(res => { return res.status})
}

export async function requestReadMyReplies(){ // 5-1
    return await axios.get(
        `/api/reply/write/record/`, {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ // 5-2
            var tmp = result.data
            Object.keys(tmp).map((key,index) => (
                data.push((new Reply(tmp[key]['reply_id'],tmp[key]['post_id'],tmp[key]['text'],tmp[key]['writer']
                ,tmp[key]['writing_date'],tmp[key]['editing_date'],
                )).get_dic())
            ))
            console.log(data)
            return data
        }
        return []
    });
}