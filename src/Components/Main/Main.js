import './Main.css';
import { useSelector } from 'react-redux';

function Main() {
    const projects = useSelector(state => state.cv.data.projects);
    const profile = useSelector(state => state.cv.data.profile);
    const books = useSelector(state => state.cv.data.books);

    const courses = useSelector(state => state.cv.data.courses);
    return (
        <div className='Main'>
            <h1>Dmytro <span>Kyrychenko</span></h1>
            <h2>Front-end developer(<span>ReactJS</span>)</h2>
            <h3>Profile</h3>
            <p>{profile}</p>
            <h3>Projects</h3>
            <div className='projects'>
                <div className="pizza">
                    <h2><a href={projects.pizza}>Pizza</a></h2>
                    <ul>
                        <li>Project description: Pizza online store.</li>
                        <li>Technology stack: React, TS, Redux Toolkit, Scss Modules, Responsive design. </li>
                    </ul>
                </div>
                <div className="pets-paw">
                    <h2><a href={projects.pets}> </a></h2>
                    <ul>
                        <li>Project description: Cat gallery app.</li>
                        <li>Technology stack: React, Redux Toolkit,Rest API, Scss, Axios, Figma. </li>
                    </ul>
                </div>
                <div className='chat'>
                    <h2><a href={projects.chat}>Chat</a></h2>
                    <ul>
                        <li>Project description: Chat app with automatically generated response.</li>
                        <li>Technology stack: React, Redux Toolkit,Rest API, Scss, Axios, Local Storage</li>
                    </ul>
                </div>
                {/* <div className='pulse'>
                    <h2><a href={projects.first}>Pulse</a></h2>
                    <ul>
                        <li>Project description: Responsive website design.</li>
                        <li>Technology stack: Photoshop, Zeplin, Scss, BEM, jQuery, gulp.</li>
                    </ul>
                </div> */}
            </div>
            <h3>Courses</h3>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {courses.map(item => <img style={{ display: "block", width: "148px", marginTop: "5px" }} src={item} alt="logo" key={item}></img>)}
            </div>
            <h3>Books</h3>
            <div>
                <ul>
                    {books.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Main;