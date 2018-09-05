/**
 * Created by Administrator on 2018/9/4.
 * 返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
export default function ajax(url , data={}, type='GET'){
  return new Promise(function(resolve ,rejuct){
    //执行异步ajax请求
    let promise
    if(type==="GET"){
      let dataStr = ''
      Object.keys(data).forEach(key =>{
        dataStr += key + '=' + data[key] +"&"
      })
      if(dataStr != ''){
        //lastIndexOf: 从尾到头检索，找到第一个searchValue返回它的位置
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + "? " +  dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      promise = axios.post(url , data)
    }
    promise.then(function(response){
      resolve(response.data)
    }).catch(function(err){
      rejuct(err)
    })
  })



}
