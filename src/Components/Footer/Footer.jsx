import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="row-wrapper">
            <div className="col-1">
                <h1 className='furniro' id='caption-big'>Furniro</h1>
                <p id='address'>
                    400 University Drive suite <br />
                    200 carol Gables, <br />
                    FL 33134 USA
                </p>
            </div>
            <div className="col-2">
                <h1 className='minor' id='caption'>Links</h1>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="col-3">
                <h1 className='minor' id='caption'>Help</h1>
                <Link to='/'>Payment options</Link>
                <Link to='/'>Returns</Link>
                <Link to='/'>Privacy policies</Link>
            </div>
            <div className="col-4">
                <h1 className='minor' id='caption'>News letter</h1>
            </div>
        </div>
        <div className="rights-reserved">
            2023 Furniro. All rights reserved
        </div>
    </footer>
  )
}

export default Footer