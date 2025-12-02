import { NextResponse } from "next/server";

export async function POST(req) {
    const { amount, description } = await req.json();

    const shopId = process.env.YOOKASSA_SHOP_ID_TEST;
    // const shopId = process.env.YOOKASSA_SHOP_ID;
     const secretKey = process.env.YOOKASSA_SECRET_KEY_TEST;
    // const secretKey = process.env.YOOKASSA_SECRET_KEY;

    const idempotenceKey = crypto.randomUUID();

    const response = await fetch("https://api.yookassa.ru/v3/payments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Idempotence-Key": idempotenceKey,
            Authorization:
                "Basic " +
                Buffer.from(`${shopId}:${secretKey}`).toString("base64"),
        },
        body: JSON.stringify({
            amount: {
                value: amount,
                currency: "RUB",
            },
            capture: true,
            confirmation: {
                type: "redirect",
                return_url: "https://colorfullshop.ru", // ← URL возврата
            },
            description: description,
            
        }),
    });

    const payment = await response.json();

    return NextResponse.json({
        payment: payment,
        paymentId: payment.id, 
        confirmationUrl: payment.confirmation?.confirmation_url,
    });
}
