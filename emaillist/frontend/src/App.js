import React, {useState, useEffect} from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

const App = () => {
  const [emails, setEmails] = useState([]);
  // const [keyword, setKeyword] = useState("");

  useEffect( async ()=> {
    const response = await fetch('/api',{
      method : 'get',
      headers : {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body: null
    });

    if(!response.ok){
      console.log("error!!!!", response.status, response.statusText);
      return;
    }
    const json = await response.json();  //response.json()는 비동기 함수
    if(json.result !== 'success'){
      console.log("error!!!!", json.message);
      return;
    }

    setEmails(json.data);

    console.log(response);
  }, []); // mount 되었을 때 실행되도록

  const notifyKeywordChange = function(keyword){
    console.log(keyword);
    // setKeyword(kw);
    const result = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1)
    //중요한건 emails를 직접 변경하지 않는다는 것. 
    setEmails(result);  // 기존 상태를 새 객체로 만들어주는 것이 '함수형 프로그래밍'의 원리, 그래야 state가 변경됨을 감지하고 render를 할 수 있음.
  }

  console.log(data);
  return (
    <div className={'App'}>
      <RegisterForm />
      <SearchBar callBack={notifyKeywordChange} />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App