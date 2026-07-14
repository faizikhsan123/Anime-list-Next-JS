import React from 'react'
//eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderMenu = ({ title } : any) => {
  return (
    <div>
      <div className='p-8'>
        <h3 className='text-2xl text-center'>{title}</h3>
      </div>
    </div>
  )
}

export default HeaderMenu
