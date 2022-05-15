import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div className="container">
            <Nav />
        <div className="section-two">
            <p><a href="/">الرئيسيه</a>/شخصي</p>
            <h1>للسداد الحكومي</h1>
        </div>
        <div className="section-three">
            <h3>رقم السداد</h3>
            <p>مع فواتير سداد، يمكنك دفع كل الفواتير من خلال البنك، كفواتير الكهرباء، والمياه، والاتصالات، والرسوم الحكومية.</p>
            <span>تتيح الخدمة للمستفيد تسديد المدفوعات عبر نظام سداد للمدفوعات، أحد أنظمة مؤسسة النقد العربي السعودي، وهو نظام مركزي لعرض ودفع الفواتير والزكاة والضرائب ورسوم الخدمات الحكومية والغرامات والمخالفات وفواتير المياه والكهرباء والمدفوعات الأخرى إلكترونياً في المملكة العربية السعودية، حيث إن مهمته الأساسية هي تسهيل وتسريع عملية دفع الفواتير والمدفوعات الأخرى عبر جميع القنوات المصرفية في المملكة (فروع البنوك وأجهزة الصرف الآلي والهاتف المصرفي والإنترنت المصرفية).
            </span>
            <a href="/log-in">ابدا الخدمه</a>
        </div>
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

export default Home