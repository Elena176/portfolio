import s from './Skill.module.css';

export const Skill = (props) => {
    return (
        <div className={s.skill}>
<div className={s.ikon}></div>
            <h3>{props.title}</h3>
        </div>
        /*   <div className={''}>
          JavaScript
        </div>
        <div className={''}>
          React
        </div>
        <div className={''}>
            TypeScript
        </div>
        <div className={''}>
            HTML
        </div>
        <div className={''}>
            CSS
        </div>*/

    )
}

