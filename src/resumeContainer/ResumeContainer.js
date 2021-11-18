import {Experience} from "./experience/Experience";
import {Skills} from "./skills/Skills";
import s from './ResumeContainer.module.css';

export const ResumeContainer = () => {
    return (
        <div className={s.container}>
            <div className={''}>
               <Experience/>
            </div>
            <div>
            <Skills/>
            </div>
        </div>
    );
}

