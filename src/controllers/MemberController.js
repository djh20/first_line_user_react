import axios from 'axios'
import Post from '../models/Post'

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
            {id : member.id ,pw : member.pw,
            name : member.name ,nickname : member.nickname,
            age : member.age ,gender : member.gender,
            phonenumber : member.phonenumber ,email : member.email,
            })
            .then( res=> {console.log(res.data); return res.data}).catch(error => {console.log(error.response);return error.response.data});
    }