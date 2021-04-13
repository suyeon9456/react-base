import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext('defaultValue')

function Child () {
  const text = useContext(MyContext) // Context에 있는 값을 가져와서 사용할 수 있게 해주는 리액트에 내장된 훅
  return <div>안녕하세요? {text}</div>
}

function Parent () {
  return <Child />
}

function GrandParent () {
  return <Parent />
}

function ContextSample () {
  const [value, setValue] = useState(true)

  return (
    <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  )
}

export default ContextSample
