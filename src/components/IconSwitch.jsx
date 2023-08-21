import React from 'react'

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className='switch_icon'>
        <span className="material-symbols-outlined icon" onClick={()=>onSwitch()}>
            {icon}
        </span>
    </div>
  )
}

export default IconSwitch