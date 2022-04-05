import React, {useState, useEffect} from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

const App = () => {
  const [emails, setEmails] = useState([]);

  useEffect( async ()=> {
    try{
      const response = await fetch('http://localhost:8080/api',{
        method : 'get',
        headers : {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();  //response.json()는 비동기 함수

      if(json.result !== 'success'){
        console.log("error!!!!", json.message);
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
  } catch(err){
      console.log(err);
  }
}, []); // mount 되었을 때 실행되도록

  const notifyKeywordChange = async function(keyword){
    console.log("/api?kw="+keyword);  //를 호출해야함

    try{
      const response = await fetch(`/api?kw=${keyword}`,{
        method : 'post',
        headers : {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();  //response.json()는 비동기 함수

      if(json.result !== 'success'){
        console.log("error!!!!", json.message);
        throw new Error(`${json.result} ${json.message}`);
      }
      setEmails(json.data);

  } catch(err){
      console.log(err);
  }
    // setKeyword(kw);
    // const result = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1)
    //중요한건 emails를 직접 변경하지 않는다는 것. 
    // setEmails(result);  // 기존 상태를 새 객체로 만들어주는 것이 '함수형 프로그래밍'의 원리, 그래야 state가 변경됨을 감지하고 render를 할 수 있음.
}

  const notifyEmailAdd = async function(email){
    console.log('post : /api', email);
    try{
      const response = await fetch(`/api`,{
        method : 'post',
        headers : {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(email)   //JSON 객체 넣어주면 string으로 바뀐다.
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();  //response.json()는 비동기 함수

      if(json.result !== 'success'){
        console.log("error!!!!", json.message);
        throw new Error(`${json.result} ${json.message}`);
      }

      // const newEmails = [];
      // newEmails[0] = json.data;
      // for(var i = 0; i < emails.length; i++){
      //   newEmails[i+1] = emails[i];
      // } 이 코드가 아래로 
      setEmails([json.data, ...emails]);

  } catch(err){
      console.log(err);
  }
}

  return (
    <div className={'App'}>
      <RegisterForm callback={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChange} />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App