import React from 'react'
import logo from "./Capture.PNG"
const Bank5 = () => {
  return (
    <div className='container-bank1'>
        <div className="parent">
            <img src={logo} alt="" />
            <form action="/User" className='form-5'>
                <input type="text" className='user-5' required/>
                <input type="password" className='pass-5'required />
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>

    </div>
  )
}

export default Bank5