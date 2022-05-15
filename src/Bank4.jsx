import React from 'react'
import logo from "./logo44.png"

const Bank3 = () => {
  return (
    <div className="container-bank1">
        <div className='bank3-log' style={{background:"black"}}>
            <img src={logo} alt="" srcset="" />
            <form action="/User">
            <input type="text" placeholder='اسم المستخدم' required />
            <input type="password" placeholder='الرقم السري' required />
            <button type="submit" style={{background:"black",color:"white"}}>دخول</button>
            </form>
        </div>
    </div>
  )
}

export default Bank3