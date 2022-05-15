import React, { useState } from 'react'
const Nav = () => {
    const [side, setSide] = useState(false)

    const handeClick = e => {
        e.preventDefault()
        if (side === true) {
            document.querySelector(".nav-pills").style.left = "-200vh"
            setSide(false)
        } else {
            document.querySelector(".nav-pills").style.left = "0px"
            setSide(true)
        }
    }
    return (
        <>
            <div className='parent-links'>
                <div className='links-left links'>
                    <a href='#' target={"_blank"} className='english_icon'></a>
                    <a href="#" target={"_blank"} className="arabic_icon"></a>
                </div>
                <div className="links">
                    <a href="#" target={"_blank"}></a>
                    <a href='#' target={"_blank"} className='youtube'></a>
                </div>
            </div>
            <div className="nav">
                <ul class="nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#">عن سداد</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">شخصي</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">اعمال</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">البنوك</a>
                    </li>
                </ul>
                <a href="/" className='logo'></a>
                <button type="button" onClick={handeClick} class="navbar-toggle collapsed" data-toggle="collapse" data-target="#pnlMainMenu" aria-expanded="false">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
        </>
    )
}

export default Nav