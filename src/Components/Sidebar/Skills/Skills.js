import { useSelector } from 'react-redux';

function Skills() {
    const skills = useSelector(state => state.cv.data.skills);
    const education = useSelector(state => state.cv.data.education);
    return (
        <div className="Skills">
            <h2>Skills</h2>
            <ul>
                {skills.map(item => <li key={item}>{item}</li>)}
            </ul>
            <h2>Education</h2>
            <div>{education}</div>
        </div>
    )
}

export default Skills;