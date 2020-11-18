import { FormatColorResetOutlined } from '@material-ui/icons';
import axios from 'axios'
import Member from '../models/Member'

export default async function requestLogin(id, pw){
    return await axios.post(
      '/api/member/login/', 
      {id : id ,pw : pw})
      .then(
        function (response) {
          console.log(response.status)
          if(response.status == 410)
            return false;
          else{

            return true
          }
    }).catch(error => {console.log('error : ',error.response)});
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
  return await axios.put('/api/member/',{member : _member}, {withCredentials: true}).catch(err => {console.warn(err); return err.response}).then(res => {return res.status})
}

export async function requestChangePw(currentPw,NewPw){
  console.log("컨트롤러 실행")
  return await axios.put('/api/member/change/password/',{before : currentPw ,after:NewPw}, {withCredentials: true}).catch(err => {console.warn(err); return err.response}).then(res => {return res.status})
}