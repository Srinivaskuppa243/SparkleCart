import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState } from '../reducers/StoreReducer';
import reducer from "../reducers/StoreReducer";

// Step 1: Create the Cart Context (store)
export let cartContext = createContext();

// Step 2: Create the Provider
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect for handling the cart functionality (adding/removing items to local storage)
    useEffect(() => {
        // Save the cart state to localStorage whenever it changes
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return () => {}; // cleanup function
    }, [state.cart]);

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;

// Creating the custom hook to avoid repetition
// Custom hooks always start with use<HookName>
export const useCart = () => {
    return useContext(cartContext);
};
