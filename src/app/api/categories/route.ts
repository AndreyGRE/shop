import { NextResponse } from "next/server";
import data from "@/app/api/data.json";

// ⚠️ Тут важно, чтобы products был общий (лучше вынести в отдельный модуль storage.ts)
let products = data


export async function GET() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return NextResponse.json(categories);
}

// GET /api/categories
