import React, { useState } from 'react';
import './assets/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function Form() {
    const [name, setName] = useState("Bella");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const onChangeInputName = e => {
      // setName(e.target.value);
    
      // 10글자로 제한하기 
      setName(e.target.value.substr(0,10));
    };

    const onChangeInputEmail = e => {
      setEmail(e.target.value);

      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setValidEmail(re.test(e.target.value));
      
    };

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
                email === '' ? null : (
                  validEmail ? 
                  <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: 16, color: 'blue'}}/> : 
                  <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: 16, color: 'red'}}/>
                )
              }            

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ "" } />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } defaultChecked={ true } />
                <label>남</label> <input type="radio" name="gender" value={ "male" } defaultChecked={ false } />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear">
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={""} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= { "yes" } defaultChecked={ false } />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}