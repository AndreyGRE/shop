import { NextRequest, NextResponse } from "next/server";
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

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const searchText = searchParams.get("text")?.toLowerCase() || "";
        const categoriesParam = searchParams.get("categor");

        let categories: string[] = [];
        if (categoriesParam) {
            try {
                categories = JSON.parse(categoriesParam);
            } catch (e) {
                return NextResponse.json(
                    { error: "Invalid categories format" },
                    { status: 400 }
                );
            }
        }

        // Если выбрана категория "Все" или пустой массив - игнорируем фильтр по категориям
        const shouldFilterByCategory =
            categories.length > 0 &&
            !categories.includes("Все") &&
            !(categories.length === 1 && categories[0] === "Все");

        // Фильтрация
        const products = await prisma.product.findMany();
        const filteredProducts = products.filter((product: Product) => {
            // Поиск по тексту
            const matchesText =
                !searchText ||
                product.name.toLowerCase().includes(searchText) ||
                product.description?.toLowerCase().includes(searchText);

            // Фильтр по категориям (если не выбрано "Все")
            const matchesCategory =
                !shouldFilterByCategory ||
                categories.includes(product.category);

            return matchesText && matchesCategory;
        });

        return NextResponse.json(filteredProducts);
    } catch (error) {
        console.error("Search error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
// POST — создание товара
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const newProduct = await prisma.product.create({ data });
        return NextResponse.json(newProduct);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Ошибка создания" }, { status: 500 });
    }
}

// PUT — обновление товара
export async function PUT(req: NextRequest) {
    try {
        const data = await req.json();
        if (!data.id) {
            return NextResponse.json(
                { error: "Не указан ID" },
                { status: 400 }
            );
        }
        const updatedProduct = await prisma.product.update({
            where: { id: data.id },
            data,
        });
        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Ошибка обновления" },
            { status: 500 }
        );
    }
}

// DELETE — удаление товара
export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json(
                { error: "Не указан ID" },
                { status: 400 }
            );
        }
        await prisma.product.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Ошибка удаления" }, { status: 500 });
    }
}
