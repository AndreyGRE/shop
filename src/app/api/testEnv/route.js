import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        shopId: process.env.YOOKASSA_SHOP_ID || "undefined",
        secretKey: process.env.YOOKASSA_SECRET_KEY_TEST || "undefined",
        secretKe: process.env.YOOKASSA_SECRET_KEY || "undefined",
    });
}
