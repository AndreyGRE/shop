"use client";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    unit: string;
    package: string;
    imageUrl?: string;
}

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<Partial<Product>>({});
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setLoading(true);
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
    }

    async function deleteProduct(id: number) {
        if (!confirm("Удалить этот товар?")) return;
        await fetch("/api/products", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        fetchProducts();
    }

    async function saveProduct(e: React.FormEvent) {
        e.preventDefault();

        if (!formData.name || !formData.category || formData.price == null) {
            alert("Заполните все обязательные поля!");
            return;
        }

        const method = formData.id ? "PUT" : "POST";
        try {
            const res = await fetch("/api/products", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const err = await res.json();
                alert("Ошибка сервера: " + err.error);
                return;
            }

            setFormData({});
            fetchProducts();
        } catch (err) {
            console.error(err);
            alert("Ошибка сети или сервера");
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type } = e.target;

        let val: string | number = value;
        if (type === "number") {
            val = value === "" ? 0 : Number(value); // конвертируем в число
        }

        setFormData({ ...formData, [name]: val });
    }

    if (loading)
        return (
            <p className="p-4 text-gray-200 bg-gray-900 min-h-screen">
                Загрузка...
            </p>
        );

    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-white">
                Админка товаров
            </h1>

            {/* Форма */}
            <form
                onSubmit={saveProduct}
                className="mb-8 grid grid-cols-2 gap-4 max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg"
            >
                <input
                    name="name"
                    placeholder="Название"
                    value={formData.name || ""}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 p-2 rounded text-white placeholder-gray-400"
                />
                <input
                    name="price"
                    type="number"
                    placeholder="Цена"
                    value={formData.price || ""}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 p-2 rounded text-white placeholder-gray-400"
                />
                <input
                    name="stock"
                    type="number"
                    placeholder="Количество"
                    value={formData.stock || ""}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 p-2 rounded text-white placeholder-gray-400"
                />
                <input
                    name="category"
                    placeholder="Категория"
                    value={formData.category || ""}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 p-2 rounded text-white placeholder-gray-400"
                />
                <input
                    name="unit"
                    placeholder="Единица"
                    value={formData.unit || ""}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 p-2 rounded text-white placeholder-gray-400"
                />
                <input
                    name="package"
                    placeholder="Упаковка"
                    value={formData.package || ""}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 p-2 rounded text-white placeholder-gray-400"
                />
                <div className="col-span-2 flex flex-col gap-2">
                    <label className="text-gray-300 text-sm font-medium">
                        Изображение
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            setUploading(true);

                            const formDataUpload = new FormData();
                            formDataUpload.append("file", file);

                            const res = await fetch("/api/upload", {
                                method: "POST",
                                body: formDataUpload,
                            });

                            const data = await res.json();
                            setUploading(false);

                            if (data.url) {
                                setFormData({
                                    ...formData,
                                    imageUrl: data.url,
                                });
                            } else {
                                alert("❌ Ошибка загрузки изображения");
                            }
                        }}
                        className="bg-gray-700 border border-gray-600 p-2 rounded text-white"
                    />

                    {uploading && (
                        <p className="text-yellow-400 text-sm">
                            ⏳ Загружаем...
                        </p>
                    )}

                    {formData.imageUrl && (
                        <img
                            src={formData.imageUrl}
                            alt="preview"
                            className="w-32 h-32 object-cover rounded border border-gray-600"
                        />
                    )}
                </div>
                <button
                    type="submit"
                    className={`col-span-2 p-2 rounded font-semibold ${
                        formData.id
                            ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                    {formData.id
                        ? "💾 Сохранить изменения"
                        : "➕ Добавить продукт"}
                </button>
            </form>

            {/* Таблица */}
            <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-lg">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-gray-700 text-gray-200">
                            <th className="border border-gray-600 p-3">ID</th>
                            <th className="border border-gray-600 p-3 text-left">
                                Название
                            </th>
                            <th className="border border-gray-600 p-3">Цена</th>
                            <th className="border border-gray-600 p-3">
                                Категория
                            </th>
                            <th className="border border-gray-600 p-3">Фото</th>
                            <th className="border border-gray-600 p-3">
                                Действия
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr
                                key={p.id}
                                className="hover:bg-gray-700 transition-colors border-t border-gray-700"
                            >
                                <td className="p-3 text-center text-gray-300">
                                    {p.id}
                                </td>
                                <td className="p-3 text-gray-100">{p.name}</td>
                                <td className="p-3 text-center text-gray-200">
                                    {p.price}
                                </td>
                                <td className="p-3 text-center text-gray-200">
                                    {p.category}
                                </td>
                                <td className="p-3 text-center">
                                    {p.imageUrl ? (
                                        <img
                                            src={p.imageUrl}
                                            alt={p.name}
                                            className="w-12 h-12 object-cover rounded mx-auto"
                                        />
                                    ) : (
                                        <span className="text-gray-500">—</span>
                                    )}
                                </td>
                                <td className="p-3 flex justify-center gap-2">
                                    <button
                                        onClick={() => setFormData(p)}
                                        className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition"
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        onClick={() => deleteProduct(p.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition"
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center text-gray-400 p-4"
                                >
                                    Нет данных
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
