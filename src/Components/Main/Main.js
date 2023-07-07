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
            <div className="organick">
                    <h2><a href={projects.organick} target="_blank" rel="noreferrer">Organick</a></h2>
                    <ul>
                        <li>Project description: Organic is a grocery e-commerce website where you can order a variety of fresh products to suit every taste.</li>
                        <li>Technology stack: (MERN - PostgreSQL, Express, React, Node), Responsive design, Redux Toolkit, Rest API, Scss, Axios, Figma</li>
                    </ul>
                </div>
                <div className="snake">
                    <h2><a href={projects.snake} target="_blank" rel="noreferrer">Snake</a></h2>
                    <ul>
                        <li>Project description: The Snake Game includes storing the best result in the database.</li>
                        <li>Technology stack: PERN - PostgreSQL, Express, React, Node.</li>
                    </ul>
                </div>
                <div className="delivery">
                    <h2><a href={projects.delivery} target="_blank" rel="noreferrer">Delivery</a></h2>
                    <ul>
                        <li>Project description: The selection of stores and ordering of goods.</li>
                        <li>Technology stack: MERN - MongoDB, Express, React, Node. </li>
                    </ul>
                </div>
                <div className="pizza">
                    <h2><a href={projects.pizza} target="_blank" rel="noreferrer">Pizza</a></h2>
                    <ul>
                        <li>Project description: Pizza online store.</li>
                        <li>Technology stack: React, TS, Redux Toolkit, Scss Modules, Responsive design. </li>
                    </ul>
                </div>
                <div className="pets-paw">
                    <h2><a href={projects.pets} target="_blank" rel="noreferrer"> </a></h2>
                    <ul>
                        <li>Project description: Cat gallery app.</li>
                        <li>Technology stack: React, Redux Toolkit,Rest API, Scss, Axios, Figma. </li>
                    </ul>
                </div>
                <div className='chat'>
                    <h2><a href={projects.chat} target="_blank" rel="noreferrer">Chat</a></h2>
                    <ul>
                        <li>Project description: Chat app with automatically generated response.</li>
                        <li>Technology stack: React, Redux Toolkit,Rest API, Scss, Axios, Local Storage</li>
                    </ul>
                </div>
            </div>
            <h3>Courses</h3>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "20px" }}>
                {courses.map(item => <div style={{ display: "block", flex: "0 1 240px", marginTop: "5px" }} key={item}><img src={item} alt="logo"
                    style={{ display: "block", width: "100%", height: "auto" }}
                ></img></div>)}
            </div>
        </div>
    )
}

export default Main;