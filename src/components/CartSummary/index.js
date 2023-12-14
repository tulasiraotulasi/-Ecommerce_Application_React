import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(items => (total += items.price * items.quantity))
      return (
        <div className="totalOrdervalue">
          <h1 className="orderPara">
            Order Total: <span className="span">Rs {total}/-</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button className="button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
