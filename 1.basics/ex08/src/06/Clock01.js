import React from 'react'

const Clock01 = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  return (
    <div>`${hours}:${minutes}:${seconds}`</div>
  )
}

export default Clock01;