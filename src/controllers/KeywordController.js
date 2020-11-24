import axios from 'axios'


export default async function requestGetTodayKeyword(code){
    return await axios.get('/api/keyword/', {withCredentials: true}).catch(error => {return [] }).then(result =>{
      var data = "";
      if(result.data != null){ // 5-2
          return result.data['keyword']
      }
      return data
  });
  }
  
  