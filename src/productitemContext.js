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
    return (
        <productitemContext.Provider
            value={
                {
                    data,
                    search,
                    setSearch
                }}>
            {children}
        </productitemContext.Provider>
    )
}
export { productitemContext };
export default CustomeitemContext;