"use client";
import SerchSort from "@/components/client/SerchSort";
// import { useEffect } from "react";
import useSearchProd from '@/components/store/useSearchProd'
import ProductList from "@/components/client/ProductList";
import ShoppingCart from "@/components/client/ShoppingCart";
import useShoppingCartIsOpen from "@/components/store/useShoppingCartIsOpen";
import Footer from "@/components/client/Footer";

function App() {

    const { searchProd } = useSearchProd()
    const { isOpen, Close }  = useShoppingCartIsOpen();

    return (
        <>
            <div>
                <SerchSort />
                <ProductList products={searchProd} />
                <ShoppingCart isOpen={isOpen} onClose={()=>{ Close() }}/>
                <Footer/>
            </div>
        </>

    );
}
export default App;