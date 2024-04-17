import './ProductDescription.css'
import fullstar from '../../../assets/full-star.svg'
import halfstar from '../../../assets/half-star.svg'

const ProductDescription = () => {
  return (
    <div className='single-product-description'>
        <div className="image-container"></div>
        <div className="description-container">
            <h1 id='product-name'>Product Name</h1>
            <p id='product-price'>Rs 250,000.00</p>
            <p id='product-rating'>
                <span>
                    <img src={fullstar} />
                    <img src={fullstar} />
                    <img src={fullstar} />
                    <img src={halfstar} />
                </span>
                5 Customer Review
            </p>
            <p id='product-writeup'>
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, 
                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
        </div>
    </div>
  )
}

export default ProductDescription