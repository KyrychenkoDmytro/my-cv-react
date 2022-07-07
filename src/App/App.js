import Sidebar from "../Components/Sidebar/Sidebar";
import Main from "../Components/Main/Main";
import Animation from "../Components/Animation/Animation";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Main />
        <Animation />
      </div>
    </div>
  );
}

export default App;
