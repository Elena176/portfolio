import {Experience} from "./experience/Experience";
import s from './ResumeContainer.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const ResumeContainer = () => {
    return (
        <div className={s.resumeBlock}>
            <div className={`${styleContainer.container} ${s.resumeContainer}`}>
            <div>
               <Experience/>
            </div>
            </div>
        </div>

    );
}

