import React from 'react'
import classNames from 'classnames'
import './Button.scss'

// large medium, samll
function Button ({ children, size = 'medium', color = 'blue', outline, fullWidth, className, ...rest }) {
  return (
    <button
      className={classNames('Button', size, color, {
        outline,
        fullWidth
      }, className)}
      {...rest}
    >{children}</button>
    // <button className={['Button', size].join(' ')}>{children}</button>
  )
}

// Button.defaultProps = {
//   size: 'medium'
// }

export default Button
