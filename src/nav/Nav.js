import s from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">HOME</a>
            <a href="">ABOUT ME</a>
            <a href="">SKILLS</a>
            <a href="">PORTFOLIO</a>
            <a href="">CONTACTS</a>
        </div>
    );
}

