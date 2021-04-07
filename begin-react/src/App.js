import React from 'react'
import Hello from './Hello'
import './App.css'
import Warpper from './Wrapper'
import Counter from './Counter'
import InputSample from './inputSample'

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
    <Warpper>
      {/* 이것이 주석 작성법 */}
      <Hello 
        name={name}
        color="red"
        isSpecial
        // 이것도 주석 작성법
      />
      <Hello 
        // name={name}
        color="pink"
        // 이것도 주석 작성법
      />
      <div style={style}>{name}</div>
      <div className="gray-box" ></div>
    </Warpper>
    <Counter/>
    <InputSample />
    </>
  );
}

export default App;
