import React, { useReducer, useCallback } from 'react'

function reducer (state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'RESET':
      return {
        [action.name]: action.value
      }
    default:
      return new Error()
  }
}

function useInputs (initialForm) {
  // const [form, setForm] = useState(initialForm)
  const [state, dispatch] = useReducer(reducer, initialForm)

  const onChange = useCallback(e => {
    const { name, value } = e.target
    // setForm(form => ({ ...form, [name]: value }))
    dispatch({
      type: 'CHANGE',
      name,
      value
    })
  }, [])

  const reset = useCallback(() => {
    // setForm(initialForm)
    dispatch({
      type: 'RESET',
      name: initialForm.name,
      value: initialForm.value
    })
  }, [initialForm])

  return [state, onChange, reset] // 객체형태로 반환해도 상관없음
}

export default useInputs
