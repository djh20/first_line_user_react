import axios from 'axios'
import PostReport, {ReplyReport} from '../models/Report'



export default async function requestReportPost(post_id, text){
    return await axios.post('/api/report/post/',{ 
        post_id : post_id,
        text : text},{ wpost_idthCreadentials: true }
        ).catch(err => {return err.response}).then(res => { return res})
}

export async function requestReportReply(reply_id, text){
    return await axios.post('/api/report/reply/',{ 
        reply_id : reply_id,
        text : text},{ wpost_idthCreadentials: true }
        ).catch(err => {return err.response}).then(res => { return res})
}