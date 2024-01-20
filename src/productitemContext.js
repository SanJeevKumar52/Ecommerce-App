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
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handlePriceChange = (event) => {
        setPrice(parseInt(event.target.value));

    };

    const handleCategoryChange = (category) => {
        // Check if the selectedCategories array already includes the given category
        if (selectedCategories.includes(category)) {
            // If the category is already selected, remove it from the selectedCategories array
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            // If the category is not selected, add it to the selectedCategories array
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    

    return (
        <productitemContext.Provider
            value={
                {
                    data,
                    search,
                    setSearch,
                    price, setPrice, handlePriceChange,
                    selectedCategories,
                    handleCategoryChange,
    
                }}>
            {children}
        </productitemContext.Provider>
    )
}
export { productitemContext };
export default CustomeitemContext;