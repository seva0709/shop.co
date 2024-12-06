import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {

    // HEADER
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(!isActive)
    }

    const closeMenu = () => {
        setIsActive(false)
    }
    // HEADER ///




    // CATEGORY

    const [visibleProducts, setVisibleProducts] = useState(4);

    const loadMoreProducts = () => {
        setVisibleProducts(prev => prev + 4); // Увеличиваем на 4
    };

    // CATEGORY //

    const value = {
        isActive,
        toggleMenu,
        closeMenu,
        visibleProducts,
        loadMoreProducts
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};
