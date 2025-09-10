import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const products =  [
    {
        "name": "3M, 51815 Выс.эффективн. паста Fast Cut Plus Extreme 1л (шт.)",
        "price": 3000.0,
        "stock": 12,
        "category": "Пасты",
        "unit": "шт",
        "package": "коробка",
        "imageUrl": "https://e7.pngegg.com/pngimages/235/373/png-clipart-tread-car-alloy-wheel-rim-tire-car-car-transport.png"
    },
    {
        "name": "3M, 09374 Паста абразивная Perfect-It Fast Cut, 1кг (шт.)",
        "price": 2400.0,
        "stock": 12,
        "category": "Пасты",
        "unit": "шт",
        "package": "коробка",
        "imageUrl": "https://e7.pngegg.com/pngimages/235/373/png-clipart-tread-car-alloy-wheel-rim-tire-car-car-transport.png"
    },
    {
        "name": "3M, 02085 Абразивный полировальный круг Trizact P 3000, D150мм",
        "price": 290.0,
        "stock": 15,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 02043 Водостойкая наждачная бумага Wetordry P 1500 (шт)",
        "price": 26.0,
        "stock": 50,
        "category": "Наждачная бумага",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 02044 Водостойкая наждачная бумага Wetordry P 2000 (шт)",
        "price": 26.0,
        "stock": 50,
        "category": "Наждачная бумага",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 02045 Водостойкая наждачная бумага Wetordry P 2500 (шт)",
        "price": 28.0,
        "stock": 50,
        "category": "Наждачная бумага",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 737U, Cubitron-ll Абразивный круг Р80 D-150мм (шт)",
        "price": 58.0,
        "stock": 50,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 737U, Cubitron-ll Абразивный круг Р120 D-150мм (шт)",
        "price": 58.0,
        "stock": 50,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 737U, Cubitron-ll Абразивный круг Р180 D-150мм (шт)",
        "price": 58.0,
        "stock": 50,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка"
    },
    {
        "name": "3M, 737U, Cubitron-ll Абразивный круг Р240 D-150мм (шт)",
        "price": 58.0,
        "stock": 50,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка",
        "imageUrl": "https://e7.pngegg.com/pngimages/235/373/png-clipart-tread-car-alloy-wheel-rim-tire-car-car-transport.png"
    },
    {
        "name": "3M, 737U, Cubitron-ll Абразивный круг Р320 D-150мм (шт)",
        "price": 58.0,
        "stock": 50,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка",
        "imageUrl": "https://e7.pngegg.com/pngimages/235/373/png-clipart-tread-car-alloy-wheel-rim-tire-car-car-transport.png"
    },
    {
        "name": "3M, 737U, Cubitron-ll Абразивный круг Р400 D-150мм (шт)",
        "price": 58.0,
        "stock": 50,
        "category": "Абразивные материалы",
        "unit": "шт",
        "package": "пачка",
        "imageUrl": "https://e7.pngegg.com/pngimages/235/373/png-clipart-tread-car-alloy-wheel-rim-tire-car-car-transport.png"
    },
    {
        "name": "Adolf Bucher, Емкость 0,38л с крышкой (шт)",
        "price": 20.96,
        "stock": 200,
        "category": "Емкости",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Adolf Bucher, Емкость 0,75л с крышкой (шт)",
        "price": 28.47,
        "stock": 200,
        "category": "Емкости",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Adolf Bucher, Емкость 1,40л с крышкой (шт)",
        "price": 48.52,
        "stock": 200,
        "category": "Емкости",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Adolf Bucher, Емкость 2,30л с крышкой (шт)",
        "price": 89.94,
        "stock": 200,
        "category": "Емкости",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Adolf Bucher, Салфетка из микрофибры, 40х40, 550гр/м² (шт)",
        "price": 170.0,
        "stock": 20,
        "category": "Аксессуары",
        "unit": "шт",
        "package": "пакет"
    },
    {
        "name": "Roxel Pro, Герметик шовный распыляемый в тубе серый 310мл",
        "price": 300.0,
        "stock": 12,
        "category": "Герметики",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Roxel Pro, Герметик шовный распыляемый в тубе черный 310мл",
        "price": 300.0,
        "stock": 12,
        "category": "Герметики",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Roxel Pro, Герметик шовный распыляемый в тубе белый 310мл",
        "price": 300.0,
        "stock": 12,
        "category": "Герметики",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Isistem, Праймер для стекольного герметика 20мл",
        "price": 250.0,
        "stock": 20,
        "category": "Химия",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "RM, Пистолет для распыляемого герметика",
        "price": 6000.0,
        "stock": 1,
        "category": "Инструменты",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "RM, Шлифовальная машинка 220V BLS-150 шаг 2,5 и 5мм",
        "price": 15500.0,
        "stock": 1,
        "category": "Инструменты",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Remix, Проволока сварочная омедненная 0,8 5кг",
        "price": 900.0,
        "stock": 1,
        "category": "Сварочные материалы",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Remix, Распылитель для обезжиривателя помповый 1л",
        "price": 950.0,
        "stock": 1,
        "category": "Инструменты",
        "unit": "шт",
        "package": "пакет"
    },
    {
        "name": "PPG, D800 Лак 1л + 0,5 отвердтель",
        "price": 1750.0,
        "stock": 6,
        "category": "ЛКМ",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Car-S, Шпатлевка Glass 1.7кг + отвердитель",
        "price": 1350.0,
        "stock": 6,
        "category": "Шпатлевки",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "7-Win, Герметик для вклейки стекол в тубе 310мл",
        "price": 300.0,
        "stock": 28,
        "category": "Герметики",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "3M Car, Герметик для вклейки стекол в тубе 310мл",
        "price": 370.0,
        "stock": 42,
        "category": "Герметики",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "Roberlo, Лак 350Hs 5л + 2,5 отвердитель",
        "price": 12000.0,
        "stock": 2,
        "category": "ЛКМ",
        "unit": "шт",
        "package": "коробка"
    },
    {
        "name": "PPS Стакан с крышкой",
        "price": 65.0,
        "stock": 50,
        "category": "Аксессуары",
        "unit": "шт",
        "package": "коробка"
    }
]

async function main() {
  await prisma.product.createMany({
    data: products
  });
}

main()
  .then(async () => {
    console.log("✅ База успешно заполнена");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });