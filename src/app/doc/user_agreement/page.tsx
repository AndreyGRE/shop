"use client";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-gray-900 dark:text-gray-100 font-sans leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Пользовательское соглашение</h1>
      <p className="mb-6 text-sm md:text-base">Последнее обновление: 12 ноября 2025 г.</p>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Общие положения</h2>
        <p>
          Настоящее соглашение регулирует условия продажи товаров через интернет-магазин
          (далее — «Магазин»). Использование сайта и оформление заказа означает полное
          согласие с условиями данного соглашения.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Определения</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Товар</strong> — любое изделие, предлагаемое Магазином для продажи.</li>
          <li><strong>Заказ</strong> — предложение Покупателя о приобретении Товара.</li>
          <li><strong>Договор купли-продажи</strong> — договор, заключённый после подтверждения заказа Магазином.</li>
          <li><strong>Потребитель</strong> — физическое лицо, покупающее товар не для бизнеса.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Заключение договора</h2>
        <p>
          Договор купли-продажи считается заключённым после подтверждения заказа Магазином.
          Магазин может отказаться от заключения договора при отсутствии товара, ошибочной цене или сомнениях в платёжеспособности.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Цена и оплата</h2>
        <p>
          Все цены указаны на сайте и включают налоги, если иное не указано. Оплата производится способами, указанными на сайте.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Доставка и риск</h2>
        <p>
          Доставка осуществляется по адресу, указанному Покупателем. Риск случайной гибели или повреждения товара переходит к Покупателю при передаче товара перевозчику.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Возврат и отказ</h2>
        <p>
          Потребитель имеет право отказаться от покупки без указания причины в течение 14 дней с момента получения товара. Исключения: товары, изготовленные по индивидуальному заказу, быстро портящиеся или персонализированные.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Гарантии</h2>
        <p>
          Магазин гарантирует соответствие товара описанию и его качество. Ответственность ограничена законом.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Интеллектуальная собственность</h2>
        <p>
          Все материалы сайта являются собственностью Магазина или праводержателей. Использование возможно только в личных целях.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">9. Персональные данные</h2>
        <p>
          Персональные данные обрабатываются в соответствии с законодательством о защите данных. Магазин обеспечивает безопасность данных и не передает их третьим лицам без законного основания.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">10. Применимое право и споры</h2>
        <p>
          Соглашение регулируется законодательством Нидерландов и ЕС. Споры решаются путём переговоров или в компетентном суде по месту нахождения Магазина.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">11. Изменения условий</h2>
        <p>
          Магазин может изменять условия соглашения. Изменения вступают в силу с момента публикации.
        </p>
      </section>

      <p className="text-sm mt-4">
        Контакты: телефон: +7 977 715 24 03 Московская область, Солнечногорский район. Рабочий пос. Ржавки д.20 кв. 118
      </p>
    </div>
  );
};

export default TermsOfService;
