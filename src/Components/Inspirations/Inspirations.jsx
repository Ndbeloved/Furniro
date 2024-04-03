import { Link } from 'react-router-dom'
import './Inspirations.css'
import explore1 from '../../assets/Rectangle 24.png'
import explore2 from '../../assets/Rectangle 25.png'
import explore3 from '../../assets/Rectangle 26.png'
import caret from '../../assets/caret-primary-color.svg'
import line from '../../assets/line.svg'
import { useState } from 'react'

const Inspirations = () => {
    const datas = [
        {
            image: explore1,
            index: 0,
            num: '01',
            category: 'Bed Room',
            mantara: 'Inner peace'
        }, 
        {
            image: explore2,
            index: 1,
            num: '02',
            category: 'Dining Room',
            mantara: 'Aestheic view'
        },
        {
            image: explore3,
            index: 2,
            num: '03',
            category: 'Small space',
            mantara: 'Sylish'
        },
    ]
    const [data, setData] = useState([...datas])
    const [indicatorCount, setIndicatorCount] = useState([1,2,3]) //change array number, when datas is added or removed

    const moveRight = ()=>{
        const firstElement = data.shift();
        data.push(firstElement);
        console.log(data)
        setData([...data])
    }
  return (
    <section className="inspiration-section">
        <div className="text-area">
            <div className="cont">
                <h1>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made alot of beautiful prototype of rooms that might inspire you.</p>
                <Link to='/designs/explore'>Explore More</Link>
            </div>
        </div>
        <div className="slide-area">
            <div className="slidder">
                {data.map((info, index)=>(
                    <div key={index} className={index == 0 ? "image-cont focus" : "image-cont"}>
                        <img src={info.image}/>

                        {index == 0 ? (
                            <div className="card-info">
                                <p id='first-caption'> {info.num}<span><img src={line} /></span>{info.category}</p>
                                <h1>{info.mantara}</h1>
                            </div>
                        ): <></>}

                        {/* so the indicator appears only in the focused image */}
                        {index == 0 ? (

                            <div className="indicator">
                                {indicatorCount.map((indicate, index)=>(
                                    <div key={index} className={index == info.index ? 'focus' : ''}></div>
                                ))}
                            </div>
                        ) : <></>}
                    </div>
                ))}

                <div className='go-right-btn'>
                    <button onClick={()=>{moveRight()}}>
                        <img src={caret} />
                    </button>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Inspirations