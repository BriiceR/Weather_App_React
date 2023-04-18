import './index.css';


const Forecast = ({ datas2, datas }) => {
    const icon = datas?.weather?.[0]?.icon;
    const iconDesc = datas?.weather?.[0]?.description;
    const urlIcon = `http://openweathermap.org/img/w/${icon}.png`

    return (
        <div className='flex'>
            <div className='hour'>
                <div>{datas2?.list?.[1].dt_txt}</div>
                <img src={urlIcon} alt={iconDesc} />
                <div>{Math.round(datas2?.list?.[1].main.temp - 273.15)} °C</div>
            </div>

            <div className='hour'>
                <div>{datas2?.list?.[2].dt_txt}</div>
                <img src={urlIcon} alt={iconDesc} />
                <div>{Math.round(datas2?.list?.[2].main.temp - 273.15)} °C</div>
            </div>

            <div className='hour'>
                <div>{datas2?.list?.[3].dt_txt}</div>
                <img src={urlIcon} alt={iconDesc} />
                <div>{Math.round(datas2?.list?.[3].main.temp - 273.15)} °C</div>
            </div>

            <div className='hour'>
                <div>{datas2?.list?.[4].dt_txt}</div>
                <img src={urlIcon} alt={iconDesc} />
                <div>{Math.round(datas2?.list?.[4].main.temp - 273.15)} °C</div>
            </div>
        </div>
    )

}

export default Forecast;