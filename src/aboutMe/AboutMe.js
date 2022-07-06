import s from "../aboutMe/AboutMe.module.css";
import st from '../common/styles/Container.module.css';

export const AboutMe = () => {
    return (
        <div className={s.meBlock}>
            <div className={s.headerMe}>
            <h2>ABOUT ME</h2>
                <span>I'm front-end developer and I love what I do.</span>
            </div>
            <div className={st.container}>
                <div className={s.photo}>
            Photo
                </div>
                <div className={s.info}>
                    <li>Last Name</li>
                    <li>First Name</li>
                   {/* <li></li>
                    <li></li>*/}
                </div>
            </div>
        </div>

    );
}
