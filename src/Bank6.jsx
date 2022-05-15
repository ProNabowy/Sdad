import React from 'react'
import logo from "./saab.png"
const Bank6 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form'>
                <input type="text" className='user'required />
                <input type="password" className='pass'required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank6