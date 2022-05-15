import React from 'react'
import logo from "./logoOne.png"
const Bank1 = () => {
  return (
    <div className='container-bank1'>
      <div className='bank1-log'>
        <img src={logo} alt="" />
        <form action="/User">
          <input type="text" placeholder='اسم المستخدم' required />
          <input type="password" placeholder='الرقم السري' required />
          <button type="submit">تسجيل الدخول</button>
        </form>
      </div>
    </div>
  )
}

export default Bank1