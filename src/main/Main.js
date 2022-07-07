import s from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.photo}>Photo
                    </div>
                <div className={s.text}>
                    <span>Hi there !</span>
                    <h1>
                        I'm Elena Tokarieva
                    </h1>
                    <p>I'm a Front-End Developer based in Odessa, Ukraine. I strives to build immersive and beautiful
                        web
                        applications through carefully crafted code and user-centric design.</p>
                </div>
            </div>

        </div>
    );
}

