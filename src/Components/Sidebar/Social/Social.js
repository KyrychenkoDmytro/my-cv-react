import { useSelector } from 'react-redux';
import './Social.css';

function Social() {
    const data = useSelector(state => state.cv.data.social);

    return (
        <div className="Social">
            <div><img className='main' src={data.img} alt="main"></img></div>
            <div><a href="tel:+380679718191"><img className='icons' width="36px" src="./icons/tel.svg" alt="tel" /> {data.tel}</a></div>
            <div><a href="https://t.me/khardy209" target="_blank" rel="noreferrer"><img className='icons' width="36px" src="./icons/telegram.svg" alt="telegram"/> {data.telegram}</a></div>
            <div><a href="mailto:khardy.official@gmail.com" target="_blank" rel="noreferrer"><img className='icons' width="36px" src="./icons/mail.svg" alt="mail" target="_blank" /> {data.gmail}</a></div>
            <div><a href="https://join.skype.com/invite/DRJld7GE4cBW" target="_blank" rel="noreferrer"><img className='icons' width="36px" src="./icons/skype.svg" alt="skype" /> {data.skype}</a></div>
            <div><a href="https://www.linkedin.com/in/dmytro-kyrychenko-b33b54243/" target="_blank" rel="noreferrer"><img className='icons' width="36px" src="./icons/linkedin.svg" alt="linkedin" /> {data.linkedin}</a></div>
            <div><a href="https://github.com/khardy-official" target="_blank" rel="noreferrer"><img className='icons' width="36px" src="./icons/github.svg" alt="github" /> khardy-official</a></div>
            <div><a href="https://www.codewars.com/users/khardy-official/badges/large" target="_blank" rel="noreferrer"><img className='icons' width="36px" src="./icons/codewars.svg" alt="github" /> Codewars</a></div>
            <div><img className='icons' width="36px" src="./icons/location.svg" alt="location" /> {data.address}</div>
            <hr />
        </div>
    )
}

export default Social;