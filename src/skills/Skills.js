import s from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const skills = ['JavaScript', 'REACT', 'HTML', 'CSS', 'TypeScript']
    return (
            <div className={s.skillsBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <h2 className={s.title}>SKILLS</h2>
                    <div className={s.skills}>
                        {skills.map((t, index) => <Skill key={index} title={t}/>)}
                    </div>
                </div>
            </div>
    );
}

