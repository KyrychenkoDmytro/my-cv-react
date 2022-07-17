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
            <div>
                <ul>
                    <li>This CV was made using the React library and Redux. Linear CSS animations were also used. You can see the work here: <br />
                        <a href={projects.cv}>{projects.cv}</a>
                    </li>
                    <hr />
                    <li>Also on GitHub you can see the work of my site  <br />
                        <a href={projects.second}>{projects.second}</a>
                    </li>
                    <hr />
                    <li>Mini game - based on CSS animations. <br />
                        <a href={projects.dino}>{projects.dino}</a>
                    </li>
                    <hr />
                    <li>Shop cart - which shows the logic of working with the state and the "Redux" library. <br />
                        <a href={projects.cart}>{projects.cart}</a>
                    </li>
                    <hr />
                    <li> And the most complex project is a Node.js messaging application interacting with a MySQL database through the sequenceize module. <br />
                        <a href={projects.notes}>{projects.notes}</a>
                    </li>
                    <hr />
                </ul>
            </div>
            <h3>Courses</h3>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                {courses.map(item => <img style={{ display: "block", width: "148px", marginTop: "5px"}} src={item} alt="logo" key={item}></img>)}
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