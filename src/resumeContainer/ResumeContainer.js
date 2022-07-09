import {Card} from "./card/Card";
import s from './ResumeContainer.module.css';
import styleContainer from './../common/styles/Container.module.css';

const experience = [
    {id: 1, year: '2010-2013', name: 'Tendering specialist', content: 'Conducting the bidding procedure from start to concluding an agreement, communication with customers.'},
    {id: 2, year: '2021-present', name: 'Front-End Developer', content: 'Conducting the bidding procedure from start to concluding an agreement, communication with customers.'}
]

export const ResumeContainer = () => {
    return (
        <div className={s.resumeBlock}>
            <div className={`${styleContainer.container} ${s.resumeContainer}`}>
                <div className={s.block}>
                    <h2>{'EXPERIENCE'}</h2>
                    <div className={s.items}>
                        <div className={s.item}>
                            {experience.map((element) => (
                                <Card key={element.id} year={element.year} name={element.name} content={element.content}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={s.block}>
                    <h2>{'EDUCATION'}</h2>
                </div>
            </div>
        </div>
    )
};

