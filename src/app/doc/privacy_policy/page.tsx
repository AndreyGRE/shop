"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 text-black dark:text-zinc-800">
      <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

      <p className="mb-4">Использование сайта DTL Store означает согласие Пользователя с настоящей Политикой.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Сбор и обработка данных</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Имя, телефон, email;</li>
        <li>Адрес доставки;</li>
        <li>Данные для оплаты.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Цели обработки данных</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Оформление и доставка заказов;</li>
        <li>Связь с покупателем;</li>
        <li>Информация о заказах и акциях.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Передача данных третьим лицам</h2>
      <p className="mb-4">Данные не передаются третьим лицам, кроме служб доставки и платёжных систем.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Хранение данных</h2>
      <p className="mb-4">Персональные данные хранятся до достижения целей обработки или до отзыва согласия.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Контакты</h2>
      <p>Email: info@dtlstore.ru<br />Телефон: +7 977 715 24 03</p>
    </main>
  );
};

export default PrivacyPolicy;
