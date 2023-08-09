import { useSelector } from 'react-redux';

function Skills() {
    const {skills, education, certificateLinks} = useSelector(state => state.cv.data)
    return (
        <div className="Skills">
            <h2>Skills</h2>
            <ul>
                {skills.map(item => <li key={item}>{item}</li>)}
            </ul>
            <h2>Education</h2>
            <div>{education}</div>
            <h2>Certificate links</h2>
            <ul>
            {Object.keys(certificateLinks).map((item) => (
                <li key={item}><a href={certificateLinks[item]} target="_blank" rel="noreferrer">{item}</a></li>
            ))}
            </ul>
        </div>
    )
}

export default Skills;