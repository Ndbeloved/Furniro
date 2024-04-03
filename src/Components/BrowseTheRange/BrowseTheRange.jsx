import './BrowseTheRange.css'
import diningImage from '../../assets/Dining.png'
import bedRoom from '../../assets/bedroom.png'
import livingRoom from '../../assets/livingRoom.png'
import CardRange from '../CardRange/CardRange'

const BrowseTheRange = () => {
    const data = [
        {
            image: diningImage,
            name: 'Dining',
        },
        {
            image: livingRoom,
            name: 'Living',
        },
        {
            image: bedRoom,
            name: 'Bedroom',
        },
    ]
    return (
        <section className='browse-range-section'>
            <div className="wrapper">
                <h2 id='caption'>Browse The Range</h2>
                <p id='sub-caption'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                <div className="slider">
                    {data.map((card, index)=>(
                        <CardRange image={card.image} name={card.name} key={index} />
                    ) )}
                </div>
            </div>
        </section>
    )
}

export default BrowseTheRange