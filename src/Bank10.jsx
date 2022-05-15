import React from 'react'
import logo from "./bank-arab.png"
const Bank10 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form-10'>
                <input type="text" className='user-10' placeholder='اسم المستخدم' required/>
                <input type="password"  className='pass-10' placeholder='الرقم السري' required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank10