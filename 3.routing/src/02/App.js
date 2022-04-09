import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});
    
    useEffect(()=>{
      const handlePopState = (e) => {
        console.log(e.state);
        setRoute(e.state);
      };

      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      }
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault(); // a tag click시 이동 막음 

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        console.log(e.target.href)
        console.log(url);

        window.history.pushState({page: url}, e.target.text, url);  // stat에 클릭하는 url이 하나씩 들어감
        setRoute({page: url});  // state 변화시키니까 화면 Rerendering 되면서 화면이 바뀜.
    }

    return (
        <div>
          {
            (() => {
              switch (route.page) {
                  case '/':
                    return <Main/>;
                  case '/gallery':
                    return <Gallery/>;
                  case '/guestbook':
                    return <Guestbook/>;
                  default:
                    return <Main />
              }
          })()
          }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}