"use client";
import React, { useEffect, useState } from "react";
import ToggleDarkMode from "@/components/client/ToggleDarkMode";
import useShoppingCartIsOpen from "@/components/store/useShoppingCartIsOpen";
import useSearchProd from "@/components/store/useSearchProd";

import useCartStore from "@/components/store/useCartStore";

const SerchSort = () => {
    const cart = useCartStore((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const displayCount = totalItems > 9 ? "9+" : totalItems;

    const { setSearchProd } = useSearchProd();
    const { toggleCart } = useShoppingCartIsOpen();
    const [categories, setCategories] = useState(["Все"]);

    const [serchData, setSerchData] = useState({
        text: "",
        categor: ["Все"],
    });
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/api/categories", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories([...categories, ...data]);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchCategories();
    }, []);

    // поиск отсортрованного!!!!!!!!!!!!
    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                // Создаем параметры поиска
                const searchParams = new URLSearchParams();

                if (serchData.text) {
                    searchParams.append("text", serchData.text);
                }

                if (serchData.categor && serchData.categor.length > 0) {
                    searchParams.append(
                        "categor",
                        JSON.stringify(serchData.categor)
                    );
                }

                const url = `/api/products?${searchParams.toString()}`;

                const response = await fetch(url, {
                    signal: controller.signal,
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Request failed with status ${response.status}`
                    );
                }

                const data = await response.json();
                setSearchProd(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Fetch error:", error);
                    setSearchProd([]);
                }
            }
        };

        const timer = setTimeout(fetchData, 300);

        return () => {
            controller.abort();
            clearTimeout(timer);
        };
    }, [serchData.text, serchData.categor]);

    const toggleCategory = (categoryName) => {
        setSerchData((prev) => {
            const newState = { ...prev };
            if (categoryName === "Все") {
                newState.categor = newState.categor.includes("Все")
                    ? []
                    : ["Все"];
                return newState;
            }
            if (newState.categor.includes(categoryName)) {
                newState.categor = newState.categor.filter(
                    (cat) => cat !== categoryName
                );
            } else {
                newState.categor = [
                    ...newState.categor.filter((cat) => cat !== "Все"),
                    categoryName,
                ];
            }
            if (newState.categor.length === 0) {
                newState.categor = ["Все"];
            }
            return newState;
        });
    };

    const toggleText = (text) => {
        setSerchData((prev) => {
            const newState = { ...prev };
            newState.text = text;
            return newState;
        });
    };

    return (
        <>
            <div className="bg-white sticky top-0 z-100  dark:bg-zinc-100 ">
                <div className=" flex p-2 md:p-4 items-center gap-1 md:gap-6 max-w-7xl mx-auto">
                    <div href="#" className="flex gap-2 cursor-pointer">
                        <svg className="w-8" viewBox="0 0 24 24" fill="none">
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="rgb(13 148 136)"
                                strokeWidth="1.5"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="6"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="2"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M6 12L10 12"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M14 12L18 12"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9 17.1963L11 13.7322"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M13 10.2681L15 6.80396"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M15 17.1963L13 13.7322"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M11 10.2681L9 6.80396"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="text-xl  md:text-3xl  text-black font-semibold tracking-tight fade-up">
                            DTL Store
                        </div>
                    </div>
                    <div className="flex-1 flex gap-1 md:gap-3 p-2 text-black bg-zinc-100/70 dark:bg-zinc-300 rounded-2xl overflow-hidden">
                        <div>
                            <svg
                                className="w-5 rotate-90"
                                fill="#000000"
                                version="1.1"
                                id="Layer_1"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <g>
                                        <path d="M508.255,490.146l-128-128c-0.06-0.06-0.137-0.077-0.196-0.128c34.193-38.434,55.142-88.917,55.142-144.418    c0-120.175-97.425-217.6-217.6-217.6S0.001,97.425,0.001,217.6s97.425,217.6,217.6,217.6c55.501,0,105.975-20.949,144.418-55.151    c0.06,0.06,0.077,0.137,0.128,0.196l128,128c2.5,2.509,5.777,3.755,9.054,3.755s6.554-1.246,9.054-3.746    C513.247,503.253,513.247,495.147,508.255,490.146z M217.601,409.6c-105.865,0-192-86.135-192-192s86.135-192,192-192    s192,86.135,192,192S323.466,409.6,217.601,409.6z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <input
                            className="text-black outline-none flex-1 text-xs md:text-lg"
                            placeholder="Поиск по названию...+*489/// "
                            value={serchData.text}
                            onChange={(e) => {
                                toggleText(e.target.value);
                            }}
                        />
                    </div>
                    <ToggleDarkMode />
                    <div
                        className="relative hover:scale-110"
                        onClick={() => toggleCart()}
                    >
                        <svg
                            className="w-8 cursor-pointer "
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            {/* Счетчик */}
                        </svg>
                        {isClient && totalItems > 0 && (
                            <div className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {displayCount}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap  erflow-x-auto gap-2 hide-scrollbar fade-up max-w-7xl mx-auto mt-4  px-2 md:px-0">
                {categories.map((item, index) => {
                    const isSelected = serchData.categor.includes(item);
                    return (
                        <div
                            key={index}
                            className={`shrink-0 px-3 md:px-4 py-1.5 rounded-full cursor-pointer ${
                                isSelected ? "bg-teal-600" : "bg-zinc-300"
                            }  hover:bg-teal-600 hover:shadow-lg text-white text-sm transition-transform duration-100 transform active:-translate-y-[-2px]`}
                            id={index}
                            onClick={() => toggleCategory(item)}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SerchSort;
