import s from './Card.module.css';

export const Card = (props) => {
    console.log('span')
    return (
        <div>
            <div className={s.card}>
                <div className={s.cardHeader}>
                    <span className={s.year}>{props.year}</span>
                    <span className={s.speciality}>{props.name}</span>
                </div>
                <div className={s.cardBody}>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}
