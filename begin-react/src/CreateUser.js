import React, { useContext, useRef, useCallback } from 'react'
import useInputs from './useInputs'
import { UserDispatch } from './App'

function CreateUser () {
  const nextId = useRef(4)
  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  })
  const { username, email } = form
  const dispatch = useContext(UserDispatch)
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1
    reset()
  }, [username, email, reset])

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser) // props가 바뀔때만 리렌더링됨
