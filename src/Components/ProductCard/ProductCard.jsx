import Overlay from '../Overlay/Overlay'
import './ProductCard.css'

const ProductCard = ({image, discountPercent, tag, title, descr, price, discount, productId}) => {
  return (
    <div className='product-card'>
        <div className="image-cont">
            <img src={image}/>

            {(discountPercent=='none') ? <></> : <div id='discounted-percent'>{discountPercent}</div>}
            {(tag=='new') ? <div id='discounted-percent' className='new'>{'new'}</div> : <></>}

        </div>
        <div className="text-wrapper">
            <p id='title'>{title}</p>
            <p id='descr'>{descr}</p>
            <p id='price'>{price} {(discountPercent=='none') ? <></> : <span id='discounted'>{discount}</span>}</p>
        </div>

        <Overlay type={'action'} id={productId} />
    </div>
  )
}

export default ProductCard