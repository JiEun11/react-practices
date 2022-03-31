import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');

    const handleHashChange = () => {
      const route = window.location.hash.substring(1); //url만 떼어오기
      console.log(route);  
      setRoute(route);
    };

    useEffect(()=> {
      window.addEventListener("hashchange", handleHashChange);
      return ()=>{
        // 페이지 로딩되면 다 없어지기 때문에 꼭 제거해줘야하는 건 아닌데 배운거 써먹으려고..연습해봄.
        window.removeEventListener("hashchange", handleHashChange)
      }
    }, []);

    return (() => {
      switch(route){
        case '/' : 
          return <Main />;
        case '/main':
          return <Main />;
        case '/guestbook':
          return <Guestbook />;
        case '/gallery':
          return <Gallery />;
        default:
          return null;  //화면에 아무것도 뿌리지 않게 설정 ㅎ
      }
    })();

}