import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {ResumeContainer} from "./resumeContainer/ResumeContainer";
import {AboutMe} from "./aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <AboutMe/>
            <ResumeContainer/>
        </div>
    );
}

export default App;
