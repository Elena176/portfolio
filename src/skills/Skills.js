import s from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
            <div className={s.skillsBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <h2 className={s.title}>SKILLS</h2>
                    <div className={s.skills}>
                    <Skill title={'JavaScript'}/>
                    <Skill title={'REACT'}/>
                    <Skill title={'HTML'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'TypeScript'}/>
                    </div>
                </div>
            </div>
    );
}

