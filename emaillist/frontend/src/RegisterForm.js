import React from 'react'
import styles from './assets/scss/RegisterForm.scss';

const RegisterForm = ({callback}) => {
  return (
    <form 
      className={styles.RegisterForm}
      onSubmit={function(e){
        e.preventDefault();

        try{
          // [{n:'firstName', v:'Kim'},{n:'lastName', v:'JiEun'},{n:'email', v:'jieun@gmail.com'}]
          const newEmail = Array.from(e.target, (input) => {
            // simple validation
            if(input.value === ''){
              throw new Error(`${input.placeholder}이(가) 비어 있습니다.`);
            }
            return {n:input.name, v:input.value};
        }).filter(({n}) => n !== '')
        .reduce((res, {n, v}) => {
          res[n] = v; //firstName이 세팅됨.
          return res;
        }, {});  // res는 계속 반복이 된다. 2번째 파라미터로 넣은 애가 res의 초기값

        console.log(newEmail);  // 를 했을 때 최종적으로 아래처럼 나올 것임.
        // const newEmail = {
        //   firstName: e.target.firstName.value, 
        //   lastName: e.target.lastName.value, 
        //   email: e.target.email.value
        // };
        // callback(newEmail);
        callback(newEmail);
        }catch(err){
          console.log(err.message);
        }
      }}>
      <input type={'text'} name={'firstName'} placeholder={'성'} className={styles.InputFirstName} />
      <input type={'text'} name={'lastName'} placeholder={'이름'} className={styles.InputLastName} />
      <input type={'text'} name={'email'} placeholder={'이메일'} className={styles.InputEmail} />
      <input type={'submit'} value={'등록'} />
  </form>
  )
}

export default RegisterForm