import ProductCard from '../ProductCard/ProductCard'
import './OurProduct.css'
import slytherine from '../../assets/Images (1).png'
import image1 from '../../assets/Images.png'
import image2 from '../../assets/Images (2).png'
import image3 from '../../assets/Images (3).png'
import image4 from '../../assets/Images (4).png'
import image5 from '../../assets/Images (5).png'
import image6 from '../../assets/Images (6).png'
import image7 from '../../assets/Images (7).png'
import image8 from '../../assets/Images (8).png'

const OurProduct = () => {

    const data = [
        {
            image: slytherine,
            discountPercent: '-30%',
            tag: 'old',
            title: 'Slytherine',
            descr: 'Stylish cafe chair',
            price: 'N30,000',
            discount: 'N40,000',
        },
        {
            image: image4,
            discountPercent: 'none',
            tag: 'old',
            title: 'Leviosa',
            descr: 'Stylish cafe chair',
            price: 'N25,000',
            discount: 'none',
        },
        {
            image: image1,
            discountPercent: '-50%',
            tag: 'old',
            title: 'Lolito',
            descr: 'Luxury big sofa',
            price: 'N70,000',
            discount: '140,000',
        },
        {
            image: image3,
            discountPercent: 'none',
            tag: 'new',
            title: 'Respira',
            descr: 'Outdoor bar table and stool',
            price: 'N500,000',
            discount: 'none',
        },
        {
            image: image5,
            discountPercent: 'none',
            tag: 'old',
            title: 'Grifo',
            descr: 'Night lamp',
            price: '15,000',
            discount: 'none',
        },
        {
            image: image6,
            discountPercent: 'none',
            tag: 'new',
            title: 'Muggo',
            descr: 'Small mug',
            price: 'N50,000',
            discount: 'none',
        },
        {
            image: image7,
            discountPercent: '-50%',
            tag: 'old',
            title: 'Pingky',
            descr: 'Cute bed size',
            price: 'N200,000',
            discount: 'N400,000',
        },
        {
            image: image8,
            discountPercent: 'none',
            tag: 'new',
            title: 'Pooty',
            descr: 'Minimlist sofa',
            price: 'N100,000',
            discount: 'none',
        },
    ]

    return (
        <section className='our-product'>
            <h2 id='caption'>Our Product</h2>

            <div className="product-wrapper">
                {data.map((datatium, index)=>(
                    <ProductCard key={index} productId = {index} image={datatium.image} tag={datatium.tag} discountPercent={datatium.discountPercent} title={datatium.title} descr={datatium.descr} price={datatium.price} discount={datatium.discount} />
                ))}
            </div>
        </section>
    )
}

export default OurProduct