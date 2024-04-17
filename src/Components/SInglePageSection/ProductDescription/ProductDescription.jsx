import './ProductDescription.css'
import fullstar from '../../../assets/full-star.svg'
import halfstar from '../../../assets/half-star.svg'
import image3 from '../../../assets/Images (3).png'
import { useState } from 'react'

const ProductDescription = () => {
    const [size, setSize] = useState('1')
    const data ={
        title: "Sample product",
        price: "250,000.00",
        description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            image3,
            image3,
            image3,
            image3
        ]
    }
  return (
    <div className='single-product-description'>
        <div className="image-container">
            <div className="small">
                <img src={image3} />
                <img src={image3} />
                <img src={image3} />
            </div>
            <div className="big">
                <img src={image3} />
            </div>
        </div>
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

            <div className="size-selector">
                <p>Size</p>
                <div>
                    <input type='radio' id='little' name='size'/>
                    <label htmlFor='little'>L</label>
                    <input type='radio' id='meduim' name='size'/>
                    <label htmlFor='meduim'>XL</label>
                    <input type='radio' id='large' name='size'/>
                    <label htmlFor='large'>XS</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDescription