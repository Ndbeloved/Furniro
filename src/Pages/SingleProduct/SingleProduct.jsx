import React from 'react'
import QuickLinks from '../../Components/SInglePageSection/QuickLink/QuickLinks'
import ProductDescription from '../../Components/SInglePageSection/ProductDescription/ProductDescription'

const SingleProduct = () => {
  return (
    <section className='single-page-section'>
        <QuickLinks />
        <ProductDescription />
    </section>
  )
}

export default SingleProduct