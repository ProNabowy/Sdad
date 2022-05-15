import React from 'react'
import logo from "./inmaLogo.png"

const Bank2 = () => {
  return (
    <div className="container-bank1">
        <div className="bank2-log">
            <div className='top-bank'>
                <img src={logo} alt=""/>
            </div>
            <form action="/User">
            <input type="text" placeholder='اسم المستخدم' required />
            <input type="password" placeholder='الرقم السري' required />
            <button type="submit">دخول</button>
            </form>
        </div>
    </div>
  )
}

export default Bank2