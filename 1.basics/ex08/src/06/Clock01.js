import React from 'react'

const Clock01 = () => {
  const date = new Date();
  let hours = date.getHours();
  if(hours < 10 ){    // 2자리수로 나오게끔 처리
    hours = '0' + hours;
  }
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = ('0'+date.getSeconds()).slice(-2);

  const currentTime = (hours > 11) ? 'PM' : 'AM';

  return (
    <div>{currentTime} {hours}:{minutes}:{seconds}</div>
    // <div>{currentTime} {hours}:{minutes}:{('0'+date.getSeconds()).slice(-2)}</div> 가능하면 변수를 위에 두지 않고 표현식 안에서 모든 처리를 하기
  )
}

export default Clock01;