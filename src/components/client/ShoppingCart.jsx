import React, { useEffect } from "react";
import useCartStore from "@/components/store/useCartStore";
import CartItem from "@/components/client/CartItem";
import useAddressPrice from "@/components/store/Deliveru";
import dynamic from "next/dynamic";

export default function Modal({ isOpen, onClose }) {
    const { cart, clearCart } = useCartStore();
    const { addressPrice } = useAddressPrice();

    const total =
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0) +
        (addressPrice?.[1]?.delivery_sum || 0);

    const CdekWidget = dynamic(() => import("@/components/client/CdekWidget"), {
        ssr: false, // ❌ отключает SSR
    });

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCheckout = async () => {
        if (!addressPrice?.[1]) {
            alert("Пожалуйста, выберите способ доставки.");
            return;
        }
        const orderData = {
            amount: total.toFixed(2),
            comment: cart
                .map((item) => `${item.name} x${item.quantity}`)
                .join(", "),
        };

        const res = await fetch("/api/createPayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        if (!res.ok) {
            const text = await res.text();
            console.error("Payment error:", res.status, text);
            alert("Ошибка при создании платежа: " + res.status);
            return;
        }

        const data = await res.json();
        console.log("Payment data:", data);
        if (data.confirmationUrl) {
            window.location.href = data.confirmationUrl;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="relative w-full max-w-2xl md:max-w-4xl  bg-zinc-50 rounded-2xl shadow-xl md:p-6 p-2  mx-4 max-h-[90vh] overflow-y-auto flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <h2 className="font-semibold text-3xl text-black">
                        Корзина
                    </h2>

                    <button
                        className="text-black text-5xl hover:text-gray-700"
                        aria-label="Close cart"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        {/* Cart Items */}
                        <div
                            id="cartItems"
                            className="flex-1 overflow-y-auto divide-y divide-zinc-200 dark:divide-zinc-800 my-3"
                        >
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    В корзине пусто...
                                </div>
                            )}
                        </div>

                        {/* Clear Cart Button */}
                        {cart.length > 0 && (
                            <button
                                onClick={clearCart}
                                className="self-end max-w-40 md:max-w-76 mb-3 w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium tracking-tight transition-transform duration-100 transform active:-translate-y-1"
                            >
                                Очистить корзину
                            </button>
                        )}

                        {/* Footer with Total and Checkout */}
                        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col">
                            <div className="flex items-center justify-end mb-4 text-black gap-3 font-semibold">
                                <span className="text-2xl">Итог:</span>
                                <span
                                    className={` font-semibold text-2xl ${
                                        addressPrice.length < 1
                                            ? "text-gray-400"
                                            : "text-teal-600"
                                    }`}
                                >
                                    ₽ {total.toFixed(0)}{" "}
                                    {addressPrice.length < 1
                                        ? "+ доставка"
                                        : ""}
                                </span>
                            </div>
                            <button
                                disabled={addressPrice.length < 1}
                                onClick={handleCheckout}
                                className={`self-center md:max-w-96 w-full py-2 text-white rounded-md font-medium tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500 transition-transform duration-100 transform active:-translate-y-1
                                                ${
                                                    addressPrice?.[1]
                                                        ? "bg-teal-600 hover:bg-teal-700 cursor-pointer"
                                                        : "bg-teal-600 cursor-not-allowed"
                                                } 
                                            `}
                            >
                                {addressPrice?.[1]
                                    ? "Оформить заказ"
                                    : "Выберите доставку"}
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 ">
                        <div>
                            {!addressPrice?.[1] && (
                                <p className="text-red-500 text-sm mt-2 text-center">
                                    Пожалуйста, выберите способ доставки в
                                    правой колонке!
                                </p>
                            )}
                            <div className="text-black text-xl">
                                Адрес доставки: {addressPrice[1]?.city}{" "}
                                {addressPrice[2]?.address}{" "}
                            </div>
                            <div className="text-black text-xl">
                                {" "}
                                Тариф: {addressPrice[1]?.tariff_name}
                            </div>
                        </div>
                        <CdekWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}
