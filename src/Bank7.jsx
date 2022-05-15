import React from 'react'
import logo from "./Ahli1.png"
const Bank7 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form-7'>
                <input type="text" className='user-7' placeholder='اسم المستخدم' required/>
                <input type="password" className='pass-7' placeholder='الرقم السري' required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank7