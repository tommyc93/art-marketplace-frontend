///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'

const Cart = (props) => {
    ///////////////---------Hooks/States---------///////////////
    const [rerender, setRerender] = useState(false)

    ///////////////---------Functions---------///////////////
    const handleRemove = (index) => {
        console.log(index)
        props.removeCart(index)
        setRerender(!rerender)
    }

    const getCart = () => {
        props.setCart(props.cart)
    }


    ///////////////---------Return---------///////////////
    return (
        <>
        {props.cart.length == 0 &&
            <>
                <h3>Shopping Cart</h3>
                <img src='https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png' />
            </>
        }
        {props.cart.length > 0 &&
            <>
                <h3>Shopping Cart</h3>
                {props.cart.map((item) => {
                    return (
                        <div class='card flex-even'>
                            <div class='card-header'>
                                <h3>{item.title}</h3>
                            </div>
                            <div class='card-body'>
                                <img class='w-100' src={item.image} />
                            </div>
                            <div class='card-footer'>
                                <h5><strong>Artist: </strong>{item.author.name}</h5>
                                <h6><strong>Bio: </strong>{item.author.bio}</h6>
                                <h5><strong>Description: </strong>{item.description}</h5>
                                <ul>
                                      <li class='list-unstyled'><strong>Created Date: </strong>{item.created_date}</li>
                                      <li class='list-unstyled'><strong>Price: </strong>{item.price}</li>
                                      <li class='list-unstyled'><strong>Rating: </strong>{item.rating}</li>
                                </ul>
                            </div>
                            <button onClick={()=>handleRemove(props.cart.indexOf(item))} value={item.id} class='btn btn-outline-danger'>Remove from Cart</button>
                            <button onClick={props.handleDelete} value={item.id} class='btn btn-outline-danger'>Delete</button>
                        </div>
                    )
                })}
            </>
        }
        </>
    )
}

export default Cart
