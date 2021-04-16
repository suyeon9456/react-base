import React from 'react'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selected = theme.palette[color]
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `
  }}
`

const ButtonStyle = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`

function StyledButton ({ children, color, ...rest }) {
  return <ButtonStyle color={color} {...rest}>{children}</ButtonStyle>
}

StyledButton.defaultProps = {
  color: 'blue'
}

export default StyledButton
