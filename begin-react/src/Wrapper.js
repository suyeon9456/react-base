import React from 'react'

function Warpper({ children }) {
    const style = {
        border: '2px solid black',
        padding: 16
    }

    return <div style={style}>{children}</div>
}

export default Warpper