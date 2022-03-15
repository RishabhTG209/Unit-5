import {useContext} from 'react'
import {CartContext} from '../../contexts/CartContexts'


export const Cart = ()=>{
    const {cart} = useContext(CartContext);
    return (
        <nav>
            <h3>Number of Items: {cart}</h3>
        </nav>
    )
};