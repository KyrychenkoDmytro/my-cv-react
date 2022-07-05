import './Sidebar.css';
import Social from './Social/Social';
import Skills from './Skills/Skills';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <Social />
            <Skills />
        </div>
    )
}

export default Sidebar;