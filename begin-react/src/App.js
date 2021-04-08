import React, { useRef, useState } from 'react'
import Hello from './Hello'
import './App.css'
import Warpper from './Wrapper'
import Counter from './Counter'
import InputSample from './inputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App () {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs
  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@gmail.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@gmail.com',
      active: false
    }
  ])

  const nextId = useRef(4)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user])
    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current) // 4
    nextId.current += 1
  }

  const onRemove = userId => {
    setUsers(users.filter(({ id }) => id !== userId))
  }

  const onToggle = userId => {
    setUsers(users.map(user => user.id === userId
      ? { ...user, active: !user.active }
      : user
    ))
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
        <div className="gray-box"></div>
      </Warpper>
      <Counter />
      <hr />
      <InputSample />
      <hr />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  )
}

export default App
