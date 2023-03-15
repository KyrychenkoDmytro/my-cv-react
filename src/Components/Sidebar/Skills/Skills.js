import { useSelector } from 'react-redux';

function Skills() {
    const skills = useSelector(state => state.cv.data.skills);
    const education = useSelector(state => state.cv.data.education);
        const books = useSelector(state => state.cv.data.books);
    return (
        <div className="Skills">
            <h2>Skills</h2>
            <ul>
                {skills.map(item => <li key={item}>{item}</li>)}
            </ul>
            <h2>Education</h2>
            <div>{education}</div>
            <h2>Books</h2>
            <div>
                <ul>
                    {books.map(item => <li style={{marginBottom: "20px"}} key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Skills;