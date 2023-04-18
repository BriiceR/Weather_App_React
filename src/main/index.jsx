import './index.css';

const Main = ({ datas, datas2 }) => {

    return (
        <div className='main'>
            <h2 className='city'>{datas.name}</h2>
            <p className='time'>{datas2?.list?.[0].dt_txt}</p>
            <h1 className='temperature'>{Math.round(datas?.main?.temp - 273.15)} °C</h1>
        </div>
    )
}
export default Main;