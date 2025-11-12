// "use client";
// import React from "react";

// const Footer = () => {
//     return (
//         <footer className="bg-white dark:bg-zinc-100 border-t border-zinc-200 mt-10">
//             <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

//                 {/* Левая часть — логотип и название */}
//                 <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
//                     <div className="flex items-center gap-2">
//                         <svg className="w-8" viewBox="0 0 24 24" fill="none">
//                             <circle cx="12" cy="12" r="10" stroke="rgb(13 148 136)" strokeWidth="1.5" />
//                             <circle cx="12" cy="12" r="6" stroke="#1C274C" strokeWidth="1.5" />
//                             <circle cx="12" cy="12" r="2" stroke="#1C274C" strokeWidth="1.5" />
//                             <path d="M6 12L10 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//                             <path d="M14 12L18 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//                             <path d="M9 17.1963L11 13.7322" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//                             <path d="M13 10.2681L15 6.80396" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//                             <path d="M15 17.1963L13 13.7322" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//                             <path d="M11 10.2681L9 6.80396" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
//                         </svg>
//                         <div className="text-xl md:text-2xl font-semibold text-black tracking-tight">
//                             DTL Store
//                         </div>
//                     </div>

//                     {/* Карточка предприятия / реквизиты */}
//                     <div className="mt-2 md:mt-0 text-xs text-zinc-600">
//                         <p>И.П. Макарова В.В.</p>
//                         <p>ИНН: 502981178906, ОГРН: 325508100116951</p>
//                         <p>Московская область, Солнечногорский район. Рабочий пос. Ржавки д.20 кв. 118</p>
//                         <p>Телефон: +7 (123) 456-78-90</p>
//                     </div>
//                 </div>

//                 {/* Центральная часть — контакты */}
//                 <div className="flex flex-col md:flex-row items-center gap-3 text-black">
//                     {/* <div className="flex items-center gap-2">
//                         <a
//                             href="https://t.me/DTLsupport"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:underline hover:text-teal-600 transition"
//                         >
//                             @DTLsupport
//                         </a>
//                     </div> */}

//                     {/* <div className="flex items-center gap-2">
//                         <a
//                             href="mailto:support@dtlstore.com"
//                             className="hover:underline hover:text-teal-600 transition"
//                         >
//                             support@dtlstore.com
//                         </a>
//                     </div> */}

//                     <div className="flex items-center gap-2">
//                         <a
//                             target="_blank"
//                             href="https://t.me/SAD_PUSSSY"
//                             className="flex items-center gap-2 hover:underline hover:text-teal-600 transition"
//                         >
//                             Телеграмм:
//                             <svg
//                                 className="w-8 h-8"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 height="1080"
//                                 viewBox="0 0 1080 1080"
//                                 width="1080"
//                             >
//                                 <path
//                                     d="M729.796 386.21L662.016 705.86C656.902 728.42 643.567 734.032 624.616 723.408L521.342 647.304L471.512 695.231C465.998 700.745 461.384 705.359 450.756 705.359L458.176 600.178L649.583 427.219C657.907 419.799 647.779 415.688 636.649 423.108L400.021 572.103L298.151 540.22C275.992 533.3 275.593 518.06 302.763 507.433L701.219 353.924C719.667 347.007 735.81 358.035 729.796 386.21Z"
//                                     fill="url(#paint0_linear)"
//                                 />
//                                 <rect
//                                     height="760"
//                                     rx="380"
//                                     stroke="url(#paint1_linear)"
//                                     strokeWidth="27"
//                                     width="760"
//                                     x="157.5"
//                                     y="159.5"
//                                 />
//                                 <defs>
//                                     <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="468.5" x2="710.864" y1="286.5" y2="883.047">
//                                         <stop stopColor="#6BBFEC" stopOpacity="0.7" />
//                                         <stop offset="1" stopColor="#21A0E1" />
//                                     </linearGradient>
//                                     <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="346" x2="700.902" y1="191" y2="900.799">
//                                         <stop stopColor="#77C4ED" />
//                                         <stop offset="1" stopColor="#20A0E1" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Правая часть — пользовательское соглашение и копирайт */}
//                 <div className="flex flex-col items-center md:items-end text-xs md:text-sm text-zinc-500 gap-2 text-center md:text-right">
//                     <a
//                         target="_blank"
//                         href="/user_agreement"
//                         className="hover:underline hover:text-teal-600 transition"
//                     >
//                         Пользовательское соглашение
//                     </a>
//                     <div>© {new Date().getFullYear()} DTL Store. Все права защищены.</div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
"use client";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-zinc-100 border-t border-zinc-200 mt-10">
            <div className="max-w-7xl mx-auto px-1 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                {/* Левая часть — реквизиты */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <div className="flex items-center gap-2">
                        <svg className="w-8" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgb(13 148 136)" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="6" stroke="#1C274C" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="2" stroke="#1C274C" strokeWidth="1.5" />
                        </svg>
                        <div className="text-xl md:text-2xl font-semibold text-black tracking-tight">
                            DTL Store
                        </div>
                    </div>

                    <div className="mt-2 md:mt-0 text-xs text-zinc-600">
                        <p>ИП Макарова В.В.</p>
                        <p>ИНН: 502981178906, ОГРНИП: 325508100116951</p>
                        <p>Московская область, Солнечногорский район. Рабочий пос. Ржавки д.20 кв. 118</p>
                        <p>Телефон: +7 977 715 24 03</p>
                        <p>Email: info@dtlstore.ru</p>
                    </div>
                </div>

                {/* Центральная часть — ссылки */}
                <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-black text-center md:text-left">
                    <a href="/doc/offer" className="hover:underline hover:text-teal-600 transition">Договор оферты</a>
                    <a href="/doc/privacy_policy" className="hover:underline hover:text-teal-600 transition">Политика конфиденциальности</a>
                    <a href="/doc/delivery" className="hover:underline hover:text-teal-600 transition">Условия доставки</a>
                    <a href="/doc/payment" className="hover:underline hover:text-teal-600 transition">Способы оплаты</a>
                    <a href="/doc/user_agreement" className="hover:underline hover:text-teal-600 transition">Пользовательское соглашение</a>
                </div>

                {/* Правая часть — копирайт */}
                <div className="flex flex-col items-center md:items-end text-xs md:text-sm text-zinc-500 text-center md:text-right">
                    <div>© {new Date().getFullYear()} DTL Store. Все права защищены.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
