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
            console.log(tmp)
            console.log(tmp['datas'])
            console.log(tmp['datas'][1])
            Object.keys(tmp['datas']).map((key,index) => (
                data.push(new Reply(tmp['datas'][key]['reply_id'],tmp['datas'][key]['post_id'],tmp['datas'][key]['text'],tmp['datas'][key]['writer']
                ,tmp['datas'][key]['writing_date'],tmp['datas'][key]['editing_date'],tmp['isMine'][key]))
            ))
            console.log(data)
            return data
        }
        return []
    });
}

export async function requestPostReply(_post_id, _text)
{
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
                ,tmp[key]['writing_date'],tmp[key]['editing_date'],tmp['isMine']
                )).get_dic())
            ))
            console.log(data)
            return data
        }
        return []
    });
}


export async function requestModifyReply(reply_id,text)
{
    return await axios.put('/api/reply/',{
        id : reply_id,
        text: text
        },{withCreadentials: true}
    ).catch(err => console.warn(err)).then(res => {return res.status})
}

export async function requestDeleteReply(reply_id){
    return await axios({method:'DELETE',url:'/api/reply/', data:{id : reply_id}, withCredentials : true}).catch(err => console.warn(err)).then(res => {return res.status})
}