import './Filter.css'
import filterIcon from '../../../assets/filter-icon.svg'
import Products from '../Products/Products'
import { useRef, useState } from 'react'
import featureBanner from '../../../assets/Feature.png'
import trophy from '../../../assets/trophy 1.svg'
import customerSupport from '../../../assets/customer-support.svg'
import guarantee from '../../../assets/guarantee.svg'
import shipping from '../../../assets/shipping.svg'

const Filter = () => {
    const [filter, setFilter] = useState(16)
    const [page, setPage] = useState(1)
    const [prevPage, setPrevPage] = useState(0)

    
    return (
    <>
    <div className="filter-wrapper">
        <div className="left-col">
            <div className="filter-text">
                <img src={filterIcon} />
                <p>Filter</p>
            </div>

            <div className="filter-result">
                showing 1-{filter} of 32 results
            </div>
        </div>

        <div className="right-col">
            <div className="show-by">
                Show
                <input type="number" value={16} onChange={()=>{}}/>
            </div>
            <div className="sort-by">
                Sort by
                <input type="text" value={'Default'} onChange={()=>{}}/>
            </div>
        </div>
    </div>
    <Products filter={filter} page={page} setPage= {setPage} prevPage={prevPage} setPrevPage={setPrevPage} />
    <div className="feature-wrapper">
        <div className="feature">
            <img src={trophy} />
            <div className="text">
                <h2>High Quality</h2>
                <p>Crafted from top materials</p>
            </div>
        </div>

        <div className="feature">
            <img src={guarantee} />
            <div className="text">
                <h2>Warranty Protection</h2>
                <p>Over two years</p>
            </div>
        </div>

        <div className="feature">
            <img src={shipping} />
            <div className="text">
                <h2>Free Shipping</h2>
                <p>Order over 150$</p>
            </div>
        </div>

        <div className="feature">
            <img src={customerSupport} />
            <div className="text">
                <h2>24 / 7 Support</h2>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Filter