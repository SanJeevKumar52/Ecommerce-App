import { createContext, useContext, useState } from "react";
import { data } from "./Assets/data";
const productitemContext = createContext();


export const useCustomhook = () => {
    const value = useContext(productitemContext);
    return value;
}

function CustomeitemContext({ children }) {
    const [count, setCount] = useState(2);
    return (
        <productitemContext.Provider
            value={
                {
                    count,
                    data
                }}>
            {children}
        </productitemContext.Provider>
    )
}
export { productitemContext };
export default CustomeitemContext;