///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Cart = (props) => {
    ///////////////---------Hooks/States---------///////////////
    const [rerender, setRerender] = useState(false)
    const [updateCart, setUpdateCart] = useState(props.cart)
    const [sum, setSum] = useState(0)

    ///////////////---------Functions---------///////////////
    const handleRemove = (index) => {
        console.log(index)
        props.removeCart(index)
        setUpdateCart(props.cart)
        addSum(updateCart)
        setRerender(!rerender)
    }

    const getCart = () => {
        props.setCart(props.cart)
    }

    const addSum = (updateCart) => {
        let total = 0
        for (let i = 0; i < updateCart.length; i++){
            total += updateCart[i].price
        }
        setRerender(!rerender)
        setSum(total)
    }

    const handleBuy = () => {
        for (let i = 0; i <updateCart.length; i++){
            axios
                .delete('https://murmuring-coast-02165.herokuapp.com/api/art/' + updateCart[i].id)
                .then((response) => {
                    props.getArt()
                })

        }
        setUpdateCart([])
        props.setUpdateCart([])
        props.setSum(0)
        props.setCart([])
        alert('Success!')
        props.setCurrentView('showArt')
    }

    //====useEffect====//
    useEffect(() => {
         setUpdateCart(props.cart)
         addSum(props.cart)
    }, [props.cart])

    useEffect(() => {
         addSum(updateCart)
    }, [updateCart])

    ///////////////---------Return---------///////////////
    return (
        <>
        {props.cart.length == 0 &&
            <>
                <br/>
                <h3>Shopping Cart</h3>
                <hr/>
                <img src='https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png' />
            </>
        }
        {props.cart.length > 0 &&
            <>
                <br/>
                <h3>Shopping Cart</h3>
                <br/><hr/><br/>
                {props.cart.map((item) => {
                    return (
                            <div class='mx-auto w-50 text-start'>

                                <img class='w-25 float-start mx-5' src={item.image} />
                                <div class='mx-2'>
                                    <h5>{item.title}</h5>
                                    <h6><strong>Artist: </strong>{item.author.name}</h6>
                                    <h6><strong>Bio: </strong>{item.author.bio}</h6>
                                    <h6><strong>Description: </strong>{item.description}</h6>
                                    <p class='float-end'><strong>Price: </strong>{item.price}</p>
                                </div>
                                <br/><br/>

                            <button onClick={()=>handleRemove(props.cart.indexOf(item))} value={item.id} class='btn btn-outline-danger float-end'><span class="material-icons">
                                remove_shopping_cart
                            </span></button>
                            <br/><br/><hr/>
                        </div>

                    )
                })}
                <br/><br/><br/>
                <h6 class='w-50 mx-5 float-end'><strong>Total:</strong> ${sum}</h6><br/>
                <div class='w-50 mx-auto'>
                    <button onClick={()=>handleBuy()} class='btn btn-outline-primary w-50'>Buy</button>
                </div>
                <br/><br/>

            </>
        }
        </>
    )
}

export default Cart
