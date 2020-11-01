import React from 'react'
import CartContainer from './CartContainer'
import OrderForm from './OrderForm'

class Product extends React.Component {

    render() {
        console.log(this.props.order.category)
        let {id, name, image_url, price} = this.props.order
        return(
            <div>
            <img className = 'product-image' src = {image_url} alt ={name} />
            <p>{name}</p>
            <p>{price}</p>
            <OrderForm 
            addOrderToState = {this.props.addOrderToState}
            product_id = {id}
            cart_id = {this.props.cart_id}/>
            {/* <CartContainer 
            addOrderToState = {this.props.addOrderToState} /> */}
            </div>
        )
    }
}

export default Product