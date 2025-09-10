import React from "react";
import useCartStore from "@/components/store/useCartStore";
import QuantityInput from '@/components/client/QuantityInput'

const Product = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const cart = useCartStore((state) => state.cart);

    // console.log(product)
    const cartItem = cart.find((item) => item.id === product.id);
    return (
        <div
            key={product.id}
            className=" rounded-xl p-3 
                                bg-white 
                                dark:bg-zinc-100
                                w-full  min-[28rem]:w-[calc(50%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] 
                                shadow-sm hover:shadow-xl 
                                transition fade-up animation-delay:.15s hover:scale-101
                                flex flex-col justify-between gap-y-1"
        >
            <div className="relative pb-[70%] md:pb-[100%] mb-3 overflow-hidden rounded-lg">
                <img
                    src={
                        product.imageUrl ??
                        "https://cdn1.ozone.ru/s3/multimedia-j/6692595355.jpg"
                    }
                    alt="фото"
                    className="absolute  h-full w-full rounded-lg object-cover"
                ></img>
            </div>

            <p className="text-xs text-teal-600 "></p>
            <p className="font-medium text-sm text-black ">{product.name}</p>
            <p className="text-teal-500 font-semibold">₽ {product.price}</p>
             {/* Отображаем кнопки +/- если товар в корзине */}
            {cartItem ? (
                <div className="flex items-center justify-between mt-2">
                    <button
                        className=" text-teal-700 font-semibold px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 ransition-transform duration-100 transform active:-translate-y-[-1px]"
                        onClick={() =>
                            updateQuantity(product.id, cartItem.quantity - 1)
                        }
                    >
                        -
                    </button>
                    {/* <span className=" bg-teal-600 text-md font-medium  w-full text-center mx-2 py-1 rounded">
                        {cartItem.quantity}{" шт."}
                    </span> */}
                     {/* Кликабельное поле количества */}
                    <QuantityInput
                        quantity={cartItem.quantity}
                        onChange={(newQty) => updateQuantity(product.id, newQty)}
                    />

                    <button
                        className="text-teal-700 font-semibold px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded transition-transform duration-100 transform active:-translate-y-[-1px]"
                        onClick={() =>
                            updateQuantity(product.id, cartItem.quantity + 1)
                        }
                    >
                        +
                    </button>
                </div>
            ) : (
                <button
                    className="font-semibold add-to-cart mt-2 w-full py-1.5 text-sm bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-transform duration-100 transform active:-translate-y-[-2px]"
                    onClick={() => addToCart(product)}
                >
                    Добавить в корзину
                </button>
            )}
        </div>
    );
};

export default Product;
