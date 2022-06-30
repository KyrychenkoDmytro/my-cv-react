import { useSelector } from 'react-redux';

function Social() {
    const data = useSelector(state => state.cv.data.social);
    console.log(data);
    return (
        <div className="Social">
            <div><img src={data.img} alt="log"></img></div>
            <div>{data.tel}</div>
            <div>{data.gmail}</div>
            <div>{data.skype}</div>
            <div>{data.linkedin}</div>
            <div>{data.github}</div>
        </div>
    )
}

export default Social;