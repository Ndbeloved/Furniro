import './Share.css'
import shareImage from '../../assets/shareImage.svg'

const Share = () => {
    return (
        <section className='share-section'>
            <div className='caption'>
                <p>share your setup with</p>
                <h1>#FurniroFurniture</h1>
            </div>
            <div className="img-cont">
                <img src={shareImage} />
            </div>
        </section>
    )
}

export default Share