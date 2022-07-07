import { useSelector } from 'react-redux';
import './Social.css';

function Social() {
    const data = useSelector(state => state.cv.data.social);
    
    return (
        <div className="Social">
            <div><img className='main' width="264px"  src={data.img} alt="main"></img></div>
            <div><a href="tel:+380679718191"><img className='icons' width="36px" src="./icons/tel.svg" alt="tel" /> {data.tel}</a></div>
            <div><a href="mailto:khardy.official@gmail.com"><img className='icons' width="36px" src="./icons/mail.svg" alt="mail" /> {data.gmail}</a></div>
            <div><a href="https://join.skype.com/invite/DRJld7GE4cBW"><img className='icons' width="36px" src="./icons/skype.svg" alt="skype" /> Kyrychenko Dmytro</a></div>
            <div><a href="https://www.linkedin.com/in/dmytro-kyrychenko-b33b54243/"><img className='icons' width="36px" src="./icons/linkedin.svg" alt="linkedin" /> linkedin</a></div>
            <div><a href="https://github.com/khardy-official"><img className='icons' width="36px" src="./icons/github.svg" alt="github" /> khardy-official</a></div>
            <div><img className='icons' width="36px" src="./icons/location.svg" alt="location" /> {data.address}</div>
            <hr />
        </div>
    )
}

export default Social;