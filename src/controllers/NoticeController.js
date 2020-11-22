import axios from 'axios'
import MyNotice from '../models/Notice'
export default async function readNotices(_condition, _query){
    return await axios.get(
        `/api/notice/manage/`, {params:{ condition :  _condition, query : _query}},
        {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ // 5-2
            var tmp = result.data.data
            Object.keys(tmp).map((key,index) => (
                data.push(new Notice(tmp[key]['notice_id'],
                tmp[key]['receiver_id'],tmp[key]['sender_id'],
                tmp[key]['text'],tmp[key]['send_datetime'],
                tmp[key]['is_read'],tmp[key]['source_url']
                ).getDic())
            ))
            return data
        }
        return []
    });
}


export async function requestCreateNotice(_receiver_id, _sender_id, _text, _source_url){
    return await axios.post('/api/notice/manage/', 
    {
        receiver_id: _receiver_id,
        sender_id: _sender_id,
        text: _text,
        source_url : _source_url
    },{withCredentials: true}
    ).catch(error => {return error.response}).then(result=>{
        return result
    })

}

export async function requestDeleteNotice(notice_id){
    return await axios({method:'DELETE',url:'/api/notice/', data:{notice_id : notice_id}, withCredentials : true}).catch(err => console.warn(err)).then(res => {return res.status})
}


export async function requestReadMyNotices(){
    return await axios.get(
        `/api/notice/`, 
        {withCredentials: true}
    ).catch(error => {return [] }).then(result =>{
        var data = [];
        if(result.data != null){ // 5-2
            var tmp = result.data.data
            Object.keys(tmp).map((key,index) => (
                data.push(new MyNotice(tmp[key]['notice_id'],
                tmp[key]['text'],tmp[key]['send_datetime'],tmp[key]['source_url']
                ).getDic())
            ))
            console.log(data)
            return data
        }
        return []
    });
}