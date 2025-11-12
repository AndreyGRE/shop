"use client";
import React from "react";

const Payment = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 text-black dark:text-zinc-800">
      <h1 className="text-3xl font-bold mb-6">Способы оплаты</h1>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Банковской картой онлайн:</strong> через платёжный шлюз на сайте.</li>
        <li><strong>Системы быстрых платежей (СБП):</strong> QR-код для оплаты.</li>
        {/* <li><strong>Наложенный платёж:</strong> оплата при получении (если доступно).</li> */}
      </ul>

      <p>После оплаты на email Покупателя направляется подтверждение заказа.</p>
    </main>
  );
};

export default Payment;
