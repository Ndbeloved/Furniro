import './Filter.css'
import filterIcon from '../../../assets/filter-icon.svg'
import Products from '../Products/Products'
import { useState } from 'react'

const Filter = () => {
    const [filter, setFilter] = useState(16)
    const [page, setPage] = useState(2)
    const [prevPage, setPrevPage] = useState(1)
    return (
    <>
    <div className="filter-wrapper">
        <div className="left-col">
            <div className="filter-text">
                <img src={filterIcon} />
                <p>Filter</p>
            </div>

            <div className="filter-result">
                showing 1-16 of 32 results
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
    <Products filter={filter} page={page} setPage= {setPage} prevPage={prevPage} setPrevPage={setPrevPage}/>
    </>
    )
}

export default Filter