import { Link } from 'react-router-dom'
import './Overlay.css'
import share_icon from '../../assets/share.svg'
import cart from '../../assets/cartWhite.svg'
import heart from '../../assets/heartWhite.svg'

const Overlay = ({type, id, name}) => {
    if(type == 'link'){
        return (
            <div className="overlay">
                <div className="wrapper">
                    <Link to={`/product/${name}`}>Visit</Link>
                </div>
            </div>
        )
    }else if(type == 'action'){
        return(
            <div className="overlay">
                <div className="wrapper-action">
                    <Link to={`/shop/product/${id}`} id='main'>View</Link>
                    <div className="micro-actions">
                        <Link id='micro'><img src={share_icon} /> Share</Link>
                        <Link to={`/user/cart/${id}`} id='micro'><img src={cart} /> Cart</Link>
                        <Link to={`/user/likes/${id}`} id='micro'><img src={heart} />Like</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overlay