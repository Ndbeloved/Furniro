import './ProductDescription.css'
import fullstar from '../../../assets/full-star.svg'
import halfstar from '../../../assets/half-star.svg'
import image3 from '../../../assets/Images (3).png'
import { useState } from 'react'
import addIcon from "../../../assets/+.svg"
import minusIcon from '../../../assets/-.svg'
import { Link } from 'react-router-dom'

const ProductDescription = () => {
    const [quantity, setQuantity] = useState(1)
    const [showing, setShowing] = useState(1)
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

    const decrease = ()=>{
        if(quantity == 1){
            let x = 1
        }else{
            setQuantity(prev => prev - 1)
        }
    }
  return (
    <>
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

            <div className="color-selector">
                <p>Color</p>
                <div>
                    <input type='radio' id='blue' name='color' />
                    <label htmlFor="blue" style={{background: "blue"}}></label>
                    <input type='radio' id='yellow' name='color' />
                    <label htmlFor="yellow" style={{background: "orange"}}></label>
                    <input type='radio' id='red' name='color' style={{background: "tomatoe"}} />
                    <label htmlFor="red"></label>
                </div>
            </div>

            <div className="action-btns">
                <div className="quantity">
                    <img src={minusIcon} id='minus' onClick={decrease}/>
                    <img src={addIcon} id='add' onClick={()=>setQuantity(prev => prev + 1)}/>
                    <input type="number" value={quantity} disabled/>
                </div>

                <button>Add to cart</button>
            </div>

            <div className="details-wrapper">
                <p>SKU: <span>SS001</span></p>
                <p>Categories: <span>Sofa</span></p>
                <p>Tags: <span>Sofa, Chair, Home</span></p>
            </div>
        </div>
    </div>

    <div className="descriptions-container">
        <h1><span id={showing==1 ? 'active' : ''} onClick={()=> setShowing(1)} className='decr'>Description</span> <span className='review' id={showing == 2 ? 'active' : ''} onClick={()=> setShowing(2)}>Reviews[5]</span></h1>

        <p className={showing == 1 ? 'descr-content show' : 'descr-content'}>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, 
            unplugs the chords, and takes the show on the road.

            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. 
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to 
            fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
    </div>
    </>
  )
}

export default ProductDescription