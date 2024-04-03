import { Link } from 'react-router-dom'
import './CardRange.css'
import Overlay from '../Overlay/Overlay'

const CardRange = ({image, name}) => {
  return (
    <div className='range-card'>
        <div className='image-container'>
            <img src={image} />
            <Overlay type='link' text='visit' name={name}/>
        </div>
        <Link to={`/product/${name}`}><p>{name}</p></Link>
    </div>
  )
}

export default CardRange