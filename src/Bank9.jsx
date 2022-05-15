import React from 'react'
import logo from "./Jazeera1.png"
const Bank9 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form-9'>
                <input type="text" className='user-9' placeholder='اسم المستخدم' required/>
                <input type="password"  className='pass-9' placeholder='الرقم السري' required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank9