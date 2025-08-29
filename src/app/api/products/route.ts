import { NextRequest, NextResponse } from "next/server";
import data from "@/app/api/data.json";
import { Product } from "@/types/product";

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
    const shouldFilterByCategory = categories.length > 0 && 
                                  !categories.includes("Все") && 
                                  !(categories.length === 1 && categories[0] === "Все");

    // Фильтрация
    const filteredProducts = data.filter((product: Product) => {
      // Поиск по тексту
      const matchesText = !searchText || 
        product.name.toLowerCase().includes(searchText) ||
        product.description?.toLowerCase().includes(searchText);

      // Фильтр по категориям (если не выбрано "Все")
      const matchesCategory = !shouldFilterByCategory || 
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