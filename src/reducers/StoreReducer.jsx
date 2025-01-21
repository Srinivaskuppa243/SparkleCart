//initially we need to get the data and for getting we use parse from json
export let initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [] 
}

//step2: creating reducers
const reducer = (state, action) => {
    switch (action.type) {
        //checking the items already it exists in the cart or not
        case "ADD_TO_CART":
            let existingItem = state.cart.find((item) => item.id === action.payload.id)
            console.log(existingItem)
            if (existingItem) {
                return { ...state, cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)) }
            } else {
                return{...state,cart:[...state.cart,{...action.payload,quantity:1}]}
            }
        case "REMOVE_ITEM_IN_CART":
            return {...state,cart:state.cart.filter((item)=>item.id !==action.payload.id)}
        case "INCREMENT":
            return  {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
        case "DECREMENT":
            return {...state,cart: state.cart.map(item => item.id === action.payload.id && item.quantity > 1? { ...item, quantity: item.quantity - 1 } : item)};
        default:
            break;
    }
}
export default reducer


