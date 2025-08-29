"use client";
import SerchSort from "@/components/client/SerchSort";
// import { useEffect } from "react";
import useSearchProd from '@/components/store/useSearchProd'
import ProductList from "@/components/client/ProductList";
import ShoppingCart from "@/components/client/ShoppingCart";
import useShoppingCartIsOpen from "@/components/store/useShoppingCartIsOpen";

function App() {

    const { searchProd } = useSearchProd()
    const { isOpen, Close }  = useShoppingCartIsOpen();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("/api/products");
    //         const data = await response.json();
    //         console.log(data);
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("/api/categories");
    //         const categories = await response.json();
    //         console.log(categories);
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <div>
                <SerchSort />
                <ProductList products={searchProd} />
                <ShoppingCart isOpen={isOpen} onClose={()=>{ Close() }}/>
            </div>
        </>

    );
}
export default App;