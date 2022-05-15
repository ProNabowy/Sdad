import React from 'react'
import Nav from './Nav'
const Bank = () => {
    return (
        <div className="container">
            <Nav />
            <div className="section-two">
                <p><a href="/">الرئيسيه</a></p>
                <h1>البنوك</h1>
            </div>

            <div className='bank-links'>
                <a href="/bank1" className='bank1'></a>
                <a href="/bank2" className='bank2'></a>
                <a href="/bank3" className='bank3'></a>
                <a href="/bank4" className='bank4'></a>
                <a href="/bank5" className='bank5'></a>
                <a href="/bank6" className='bank6'></a>
                <a href="/bank7" className='bank7'></a>
                <a href="/bank8" className='bank8'></a>
                <a href="/bank9" className='bank9'></a>
                <a href="/bank10" className='bank10'></a>
                <a href="/bank11" className='bank11'></a>


            </div>





            <div className="section-five">
                <p>.سداد حقوق الطبع والنشر 2022. جميع الحقوق محفوظة</p>
                <div className="footer">
                    <a href="/">الأسئلة المتكررة </a>
                    <a href="/">تنويه</a>
                    <a href="/">سياسة الخصوصية </a>
                    <a href="/">شروط الاستخدام </a>
                    <a href="/">اتصل بنا</a>
                    <a href="/">خريطة الموقع</a>
                </div>
            </div>
        </div>
    )
}

export default Bank