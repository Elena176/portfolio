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
                    <li>Olena</li>
                    <li>Tokarieva</li>
                    <li>Odessa</li>
                    <li>Ukraine</li>
                    <li>Poland</li>
                    <li>Spain</li>
                </div>
            </div>
        </div>

    );
}
