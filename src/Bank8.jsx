import React from 'react'
import logo from "./franch.png"
const Bank8 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form-8'>
                <input type="text" className='user-8' placeholder='اسم المستخدم' required/>
                <input type="password"  className='pass-8' placeholder='الرقم السري' required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank8