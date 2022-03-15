import {useContext} from 'react'
import {CartContext} from '../../contexts/CartContexts'

export const Button = ()=>{

    const {handleChange} = useContext(CartContext);
    return (
        <button onClick={()=>handleChange(1)}>Add to cart</button>
    )
}