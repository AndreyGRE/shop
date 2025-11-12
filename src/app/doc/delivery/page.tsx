"use client";
import React from "react";

const Delivery = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 text-black dark:text-zinc-800">
      <h1 className="text-3xl font-bold mb-6">Условия доставки</h1>

      <p className="mb-4">Доставка осуществляется по всей территории РФ. Стоимость и сроки зависят от региона и способа доставки.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Способы доставки</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Курьерская доставка до двери;</li>
        <li>Доставка в пункты выдачи заказов;</li>
        <li>Почта России.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Сроки доставки</h2>
      <p className="mb-4">Обычно доставка занимает от 2 до 10 рабочих дней. После отправки Покупателю направляется трек-номер.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Получение заказа</h2>
      <p className="mb-4">При получении проверяйте целостность упаковки. В случае повреждения составляется акт с курьером.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Контакты</h2>
      <p>Email: info@dtlstore.ru<br />Телефон: +7 977 715 24 03</p>
    </main>
  );
};

export default Delivery;
