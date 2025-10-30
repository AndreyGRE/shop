import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export type Product = {
    id?: number; // добавляем id для поиска
    name: string;
    price: number;
    stock: number;
    category: string;
    unit: string;
    package: string;
    imageUrl: string;
    description?: string; // добавляем описание, если нужно
};

export async function GET() {
    const products: Product[] = await prisma.product.findMany();
    const categories = Array.from(
        new Set(products.map((p: Product) => p.category))
    );
    return NextResponse.json(categories);
}
