import './PopUpCart.css'
import icon_gray from '../../assets/cart_gray.svg'

const PopUpCart = ({visible}) => {
  return (
    <div className={visible ? "cart-popup visible" : "cart-popup"}>
        <div id='relative'>
            <div className="fixed-top">
                <h1>Shopping cart</h1>
                <img src={icon_gray}  />
            </div>
            <div className="items"></div>
            <div className="fixed-bottom">
                <div className="subtotal-cont">
                    <h2>Subtotal</h2>
                    <h2 id='price'>N<span>0</span></h2>
                </div>
                <div className="action-btns"></div>
            </div>
        </div>
    </div>
  )
}

export default PopUpCart