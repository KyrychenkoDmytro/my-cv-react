import './Main.css';
import { useSelector } from 'react-redux';

function Main() {
    const projects = useSelector(state => state.cv.data.projects);
    return (
        <div className='Main'>
            <h1>Dmytro <span>Kyrychenko</span></h1>
            <h2>Front-end developer(<span>ReactJS</span>)</h2>
            <h3>Projects</h3>
            <div>
                <ul>
                    <li> My first project was website layout based on PSD layout. It was made on "floats" that no one needs now, but a lot of effort was spent, including on "adaptive design". After that, I got acquainted with the power of "flex" and layout of sites ceased to be a problem.<br />
                        <a href={projects.first}>{projects.first}</a>
                    </li>
                    <hr />
                    <li>The 2nd project already covered the basic knowledge of "JS" and "jQuery" for using sliders and popups. <br />
                        <a href={projects.polar}>{projects.polar}</a>
                    </li>
                    <hr />
                    <li>3rd is a mini game based on CSS animations. <br />
                        <a href={projects.dino}>{projects.dino}</a>
                    </li>
                    <hr />
                    <p>After "JS", I started to get acquainted with "JSX" and the "React" library</p>
                    <hr />
                    <li>4th mini-project (shop cart) - which shows the logic of working with the state and the "Redux" library. <br />
                        <a href={projects.goods}>{projects.goods}</a>
                    </li>
                    <hr />
                    <li> The 5th project already affects the "backend" and the logic of communicating with a remote server has been implemented. <br />
                        <a href={projects.notes}>{projects.notes}</a>
                    </li>
                    <hr />
                    <li>Well, the 6th one is "react-cv" with using Redux. <br />
                        <a href={projects.cv}>{projects.cv}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main;