import { createContext, useContext, useState } from "react";
import { data } from "./Assets/data";
const productitemContext = createContext();


export const useCustomhook = () => {
    const value = useContext(productitemContext);
    return value;
}

function CustomeitemContext({ children }) {

    // for searched item by input
    const [search, setSearch] = useState("");
    const [price, setPrice] = useState('100000');

    const handlePriceChange = (event) => {
        setPrice(parseInt(event.target.value));

    };

    return (
        <productitemContext.Provider
            value={
                {
                    data,
                    search,
                    setSearch,
                    price, setPrice, handlePriceChange,
    
                }}>
            {children}
        </productitemContext.Provider>
    )
}
export { productitemContext };
export default CustomeitemContext;