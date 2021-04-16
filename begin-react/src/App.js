import React, { useState, useReducer, useMemo, createContext } from 'react'
import Hello from './Hello'
import './App.css'
import Warpper from './Wrapper'
import Counter from './Counter'
import InputSample from './inputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'
// import useInputs from './useInputs'
import ContextSample from './ContextSample'
import Button from './components/Button'
import './App.scss'
import CheckBox from './components/CheckBox'
// import produce from 'immer'
import styled, { css, ThemeProvider } from 'styled-components'
import StyledButton from './components/StyledButton'

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
    width: 10rem;
    height: 10rem;
    `
  }
`
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

function countAtiveUsers (users) {
  console.log('활성 사용자 수를 세는 중....')
  return users.filter(({ active }) => active).length
}

const initialState = {
  // inputs: {
  //   username: '',
  //   email: ''
  // },
  users: [
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
  ]
}

function reducer (state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   }
    case 'CREATE_USER':
      return {
        // ...state,
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active }
            : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== action.id)
      }
    default:
      return state
  }
}

export const UserDispatch = createContext(null)

function App () {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [form, onChange, reset] = useInputs({
  //   username: '',
  //   email: ''
  // })

  // const nextId = useRef(4)
  const { users } = state
  // const { username, email } = inputs
  // const { username, email } = form

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, [])

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   })
  //   nextId.current += 1
  //   reset()
  // }, [username, email, reset])

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   })
  // }, [])

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   })
  // }, [])

  const count = useMemo(() => countAtiveUsers(users), [users])

  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: ''
  // })

  // const { username, email } = inputs
  // const onChange = useCallback(e => {
  //   const { name, value } = e.target
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   })
  // }, [inputs])

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public.velopert@gmail.com',
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //     email: 'tester@gmail.com',
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //     email: 'liz@gmail.com',
  //     active: false
  //   }
  // ])

  // const nextId = useRef(4)
  // const onCreate = useCallback(() => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   }
  //   setUsers(users => [...users, user])
  //   setInputs({
  //     username: '',
  //     email: ''
  //   })
  //   console.log(nextId.current) // 4
  //   nextId.current += 1
  // }, [username, email])

  // const onRemove = useCallback(userId => {
  //   setUsers(users => users.filter(({ id }) => id !== userId))
  // }, [])

  // const onToggle = useCallback(userId => {
  //   setUsers(users => users.map(user => user.id === userId
  //     ? { ...user, active: !user.active }
  //     : user
  //   ))
  // }, [])

  // const count = useMemo(() => countAtiveUsers(users), [users])

  const [check, setCheck] = useState(false)

  const onChange = (e) => {
    setCheck(e.target.checked)
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

      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          // username={username}
          // email={email}
          // onChange={onChange}
          // onCreate={onCreate}
        />
        <UserList
          users={users}
          // onRemove={onRemove}
          // onToggle={onToggle}
        />
        <div>활성 사용자 수: {count}</div>
      </UserDispatch.Provider>
      <hr />
      <ContextSample />
      <hr />
      <div className="App">
        <div className="buttons">
          <Button size="large">Button</Button>
          <Button size="medium">Button</Button>
          <Button size="samll">Button</Button>
        </div>
        <div className="buttons">
          <Button color="gray" size="large">Button</Button>
          <Button color="gray" size="medium">Button</Button>
          <Button color="gray" size="samll">Button</Button>
        </div>
        <div className="buttons">
          <Button color="pink" size="large">Button</Button>
          <Button color="pink" size="medium">Button</Button>
          <Button color="pink" size="samll">Button</Button>
        </div>
        <div className="buttons">
          <Button color="blue" outline size="large">Button</Button>
          <Button color="gray" outline size="medium">Button</Button>
          <Button color="pink" outline size="samll">Button</Button>
        </div>
        <div className="buttons">
          <Button
            className="customized-button"
            fullWidth
            size="large"
          >Button</Button>
          <Button color="gray" fullWidth size="large">Button</Button>
          <Button 
            color="pink"
            fullWidth
            size="large"
            onClick={() => {
              console.log('클릭!')
            }}
            onMouseMove={() => {
              console.log('마우스 로그!')
            }}
          >Button</Button>
        </div>
      </div>
      <hr />
      <div>
        <CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>
      </div>
      <Circle color="blue" huge />
      <Circle color="blue" />
      <hr />
      <ThemeProvider theme={{ palette }}>
        <AppBlock>
          <StyledButton>BUTTON</StyledButton>
          <StyledButton color="gray">BUTTON</StyledButton>
          <StyledButton color="pink">BUTTON</StyledButton>
        </AppBlock>
      </ThemeProvider>
    </>
  )
}

export default App
