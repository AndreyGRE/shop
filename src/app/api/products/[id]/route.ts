import { NextResponse } from "next/server";

let products: any[] = []; // импортировать из общей логики или вынести в отдельный модуль

// Получение одного товара
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

// Обновление товара
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const index = products.findIndex((p) => p.id === Number(params.id));

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

// Удаление товара
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const index = products.findIndex((p) => p.id === Number(params.id));

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const deleted = products.splice(index, 1);
  return NextResponse.json(deleted[0]);
}
