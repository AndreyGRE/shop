// src/components/CartItem.jsx
import React from "react";
import useCartStore from "../store/useCartStore";
import QuantityInput from "./QuantityInput";

const CartItem = ({ item }) => {
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    return (
        <div className="flex items-center justify-between py-4 px-3">
            {/* Левая часть: изображение + название */}
            <div className="flex items-start gap-x-4 w-full max-w-xs">
                <img
                    src={
                        item.imageUrl ??
                        "https://cdn1.ozone.ru/s3/multimedia-j/6692595355.jpg" 
                    }
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col text-sm">
                    <span className="font-medium text-gray-800">{item.name}</span>
                    <span className="text-teal-600 font-semibold">₽ {item.price}</span>
                </div>
            </div>

            {/* Правая часть: количество */}
            <div className="flex items-center gap-x-3">
                <QuantityInput
                    quantity={item.quantity}
                    onChange={(newQty) => updateQuantity(item.id, newQty)}
                />
            </div>
        </div>
    );
};

export default CartItem;