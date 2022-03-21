import React from 'react'
import MyComponent from './MyComponent';

const App = function(){
    
  return (
    <div id="App">
      <MyComponent 
        // props01={'validation 처리'} 
        props02={100}
        props03={true}
        props04={{no:1}}
        props05={[1,2,3,4]}
        props06={() => '함수'}
        props07={'500'}
        props08={[false, true]}
        props09={{
          no: 1,
          name: '둘리',
          email: 'dooly@gmail.com'
        }}/> 
    </div>
  )
}

export default App
