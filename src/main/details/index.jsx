import './index.css';


const Details = ({ datas }) => {


    return (
        <div className='details'>
            <div className='clouds'>
                <p className="title">Clouds</p>
                <p className="result">{datas?.clouds?.all}%</p>
            </div>
            <div className='humidity'>
                <p className="title">Humidity</p>
                <p className="result">{datas?.main?.humidity}%</p>
            </div>
            <div className='wind'>
                <p className="title">Wind speed</p>
                <p className="result">{Math.round(datas?.wind?.speed)}km/h</p>
            </div>
            <div className='visibility'>
                <p className="title">Visibility</p>
                <p className="result">{datas?.visibility / 1000}km</p>
            </div>
            <div className='pressure'>
                <p className="title">Pressure</p>
                <p className="result">{datas?.main?.pressure}hPa</p>
            </div>
        </div>
    )
}

export default Details;