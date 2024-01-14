import { createContext } from "react";

const productitemContext = createContext();

function CustomeitemContext({children}) {
    console.log(children);
    return (
        <productitemContext.Provider>
            {children}
        </productitemContext.Provider>
    )
}
export {productitemContext};
export default CustomeitemContext;