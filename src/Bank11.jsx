import React from 'react'
import logo from "./Rajhi1.png"
const Bank11 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form-11'>
                <input type="text" className='user-11' placeholder='اسم المستخدم' required/>
                <input type="password"  className='pass-11' placeholder='الرقم السري'required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank11