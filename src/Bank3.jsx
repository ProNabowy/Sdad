import React from 'react'
import logo from "./logo333.png"

const Bank3 = () => {
  return (
    <div className="container-bank1">
        <div className='bank3-log'>
            <img src={logo} alt="" srcset="" />
            <form action="/User">
            <input type="text" placeholder='اسم المستخدم' required />
            <input type="password" placeholder='الرقم السري' required />
            <button type="submit">دخول</button>
            </form>
        </div>
    </div>
  )
}

export default Bank3