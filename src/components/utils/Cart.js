///////////////---------Imports---------///////////////
import React, {useState} from 'react'

const Cart = (props) => {
    ///////////////---------Hooks/States---------///////////////


    ///////////////---------Functions---------///////////////


    ///////////////---------Return---------///////////////
    return (
        <>
        {props.items.length == 0 &&
            <>
                <h3>Shopping Cart</h3>
                <img src='https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png' />
            </>
        }
        {props.items.length > 0 &&
            <>
                <h3>Shopping Cart</h3>

            </>
        }
        </>
    )
}

export default Cart
