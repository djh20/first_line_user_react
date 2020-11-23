import { FormatColorResetOutlined } from '@material-ui/icons';
import axios from 'axios'
import MyTemperature from '../models/MyTemperature'
import Member from '../models/Member'

export default async function requestLogin(id, pw){
    return await axios.post(
      '/api/member/login/', 
      {id : id ,pw : pw})
      .catch(error => {return error.response}).then(res => {return res} );
  }

export async function requestRegister(member){
      return await axios.post(
          '/api/member/', 
          {id : member.id ,name : member.name ,nickname : member.nickname,
          age : member.age ,gender : member.gender,
          phonenumber : member.phonenumber ,email : member.email,
          })
          .then( res=> {console.log(res); return res}).catch(error => {console.log(error.response);return error.response});
  }

export async function requestReadMember(){
    return await axios.get('/api/member/', {withCredentials: true}).catch(error => {return [] }).then(result =>{
      if(result.data != null){ // 5-2
          var tmp = result.data
          var member = new Member(tmp['id'],tmp['pw'], tmp['name'],
              tmp['nickname'],tmp['age'],tmp['gender'],
              tmp['phonenumber'],tmp['email'])
          return member
      }
      return null
  });
}

export async function requestEditMember(_member){
  return await axios.put('/api/member/',{member : _member}, {withCredentials: true}).catch(err => {console.warn(err); return err.response}).then(res => {return res})
}

export async function requestChangePw(currentPw,NewPw){
  return await axios.put('/api/member/change/password/',{before : currentPw ,after:NewPw}, {withCredentials: true}).catch(err => {console.warn(err); return err.response}).then(res => {return res})
}

export async function requestChangeRandomPw(_id) {
  return await axios.post('/api/member/password/',{id : _id}).then(res => {return res}).catch(err => {console.log(err); return err.response});
}



export async function reqeustMyTemperature(code){
  return await axios.get('/api/member/sementic/', {params:{ code :  code}}, {withCredentials: true}).catch(error => {return [] }).then(result =>{
    var data = [];
    if(result.data != null){ // 5-2
        var tmp = result.data
        Object.keys(tmp).map((key,index) => (
            data.push(new MyTemperature(tmp[key]['year'],tmp[key]['month']-1,tmp[key]['date'],tmp[key]['temperature']))
        ))
        return data
    }
    return []
});
}

