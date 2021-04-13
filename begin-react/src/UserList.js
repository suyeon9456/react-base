import React, { useEffect, useContext } from 'react'
import { UserDispatch } from './App'

const User = React.memo(function User ({ user }) {
  const { username, id, email, active } = user

  const dispatch = useContext(UserDispatch)
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남')
  //   // props -> state
  //   // REST API
  //   // DB Video.js
  //   // setInterval, setTimeout
  //   return () => {
  //     // clearInterval, ClearTimeout
  //     // 라이브러리 인스터스 제거
  //     console.log('컴포넌트가 화면에서 사라짐')
  //   }
  // }, [])
  useEffect(() => {
    console.log(user)
    return () => {
      console.log('user 값이 바뀌기 전: ', user)
    }
  }, [user])
  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        {user.username}
      </b>
      &nbsp
      <span>{email}</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  )
})

function UserList ({ users }) {
  return (
    <div>
      {
        users?.map(user => (
          <User
            user={user}
            key={user.id}
            // onRemove={onRemove}
            // onToggle={onToggle}
          />
        ))
      }
    </div>
  )
}

// UserList.defaultProps = {
//   users: [
//     { id: '', username: '', email: '' }
//   ]
// }

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
) // props가 바뀔때만 리렌더링됨
