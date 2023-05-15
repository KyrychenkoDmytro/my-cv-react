import './Main.css';
import { useSelector } from 'react-redux';

function Main() {
    const projects = useSelector(state => state.cv.data.projects);
    const profile = useSelector(state => state.cv.data.profile);

    const courses = useSelector(state => state.cv.data.courses);
    return (
        <div className='Main'>
            <h1>Dmytro <span>Kyrychenko</span></h1>
            <h2>Front-end (<span>React</span>) / Full Stack Developer  (<span>NodeJS</span>)</h2>
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
            </div>
            <h3>Courses</h3>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "20px" }}>
                {courses.map(item => <div style={{ display: "block", flex: "0 1 240px", marginTop: "5px" }} key={item}><img src={item} alt="logo" 
                style={{ display: "block", width: "100%", height: "auto"}}
                ></img></div>)}
            </div>
        </div>
    )
}

export default Main;