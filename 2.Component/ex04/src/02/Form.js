import React, { useState } from 'react';
import './assets/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function Form() {
    const [name, setName] = useState("Bella");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(false);  // UI용, 체크박스 띄울지 X박스 띄울지
    const [gender, setGender] = useState('female');   // default값도 세팅
    const [birthYear, setBirthYear] = useState('1984');
    const [description, setDescription] = useState("");
    const [agreeProv, setAgreeProv] = useState('no');

    const onChangeInputName = e => {
      // setName(e.target.value);
    
      // 10글자로 제한하기 
      setName(e.target.value.substr(0,10));
    };

    const onChangeInputEmail = e => {
      setEmail(e.target.value);
      // user의 입력값을 제어한 경우 
      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setValidEmail(re.test(e.target.value));
    };

    // const onChangeInputPassword = e => {
    //   setPassword(e.target.value);
    // }; 내부에 구현함.

    const onChangeInputGender = function(e) {
      setGender(e.target.value);  // 누르는 버튼의 value를 상태값에 세팅
      console.log(e.target.value);
    }

    const onChangeAgreeProv = function(e){
      // console.log(e.target.value);
      // if(e.target.value==='no'){
      //   setAgreeProv('yes');
      // }
      // if(e.target.value==='yes'){
      //   setAgreeProv('no');
      // }
      const status = e.target.value === 'no' ? 'yes' : 'no';
      
      // API 호출을 하게 된다.
      const url = `/prov/agree? status=${status}`;
      // result = await fetch(url);
      console.log(url);
      if(true){
        setAgreeProv(status);
      }
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={ name }
              onChange={onChangeInputName} />

            <label htmlFor="email">이메일</label>
            <input 
              id="email" 
              name="email" 
              type="text" 
              value={ email }
              onChange={onChangeInputEmail}/>
              {
                email === '' ? 
                  null : 
                  (validEmail ? // ()해줘도 되고 안 해도 되고
                    <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft:5, fontSize: 16, color: 'blue'}}/> : 
                    <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft:5, fontSize: 16, color: 'red'}}/>
                  )
              }            

            <label htmlFor="password">패스워드</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={ password } 
              onChange={e => setPassword(e.target.value)}/>

            <fieldset>
                <legend>성별</legend>
                <label>여</label> 
                  <input 
                    type="radio" 
                    name="gender" 
                    value={ "female" } 
                    // defaultChecked={ true } , 제어 컴포넌트로 만들었기 때문에 필요가 없어짐
                    checked={gender === 'female'} 
                    onChange={onChangeInputGender}/>
                <label>남</label> 
                  <input 
                    type="radio" 
                    name="gender" 
                    value={ "male" } 
                    // defaultChecked={ false } 
                    checked={gender === 'male'}
                    onChange={onChangeInputGender} />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select 
              id="birthYear" 
              value={birthYear} 
              onChange={e => setBirthYear(e.target.value)}>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={description} onChange={e=> setDescription(e.target.value)} />

            <fieldset>
                <legend>약관동의</legend>
                <input 
                  id="agree-prov" 
                  type="checkbox" 
                  name="agreeProv" 
                  value= { agreeProv } 
                  // defaultChecked={ false } 
                  checked={agreeProv === 'yes'}
                  onChange = {onChangeAgreeProv}
                  />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}