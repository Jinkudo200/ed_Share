import React from 'react'
import "../styles/global.css"


export function Row(props) {
  return (
    <div className='row'>
        {props.children}
    </div>
  )
}

export function TouchableOpacity({children, ...rest }) {
  const [touched, touchedSet] = React.useState(false)

  return (
    <button
      style={{ opacity: touched ? 0.5 : 1, transition: 'opacity 300ms ease',border:'none',backgroundColor:'transparent',width:'100%'}}
      onMouseDown={() => touchedSet(true)}
      onMouseUp={() => touchedSet(false)}
      {...rest}>
      {children}
    </button>
  )
}