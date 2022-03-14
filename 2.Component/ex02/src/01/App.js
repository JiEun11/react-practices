import React from 'react'

const App = () => {
  const h1Style = {
    backgroundColor: "#eeff99",
    width: 280,
    height: 50,
    padding: 5,
    color: "#111"
  };

  return (
    <div id="App">
      <h1 style={ h1Style } >Inline Styling</h1>
    </div>
  )
}

export default App