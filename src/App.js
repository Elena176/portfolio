import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {ResumeContainer} from "./resumeContainer/ResumeContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <ResumeContainer/>
        </div>
    );
}

export default App;
