import {Card} from "./card/Card";
import s from './ResumeContainer.module.css';
import styleContainer from './../common/styles/Container.module.css';

const experienceData = [
    {
        id: 1,
        year: '2010-2013',
        name: 'Tendering specialist',
        content: 'Conducting the bidding procedure from start to concluding an agreement, communication with customers.'
    },
    {
        id: 2,
        year: '2021-present',
        name: 'Front-End Developer',
        content: 'Conducting the bidding procedure from start to concluding an agreement, communication with customers.'
    }
]

const educationData = [
    {
        id: 1,
        year: '1999-2004',
        name: 'Engineer',
        content: ''
    },
    {
        id: 2,
        year: '2021',
        name: 'Front-End Developer',
        content: 'IT-INCUBATOR'
    }
]
export const ResumeContainer = () => {
    const experienceDataComponents = experienceData.map((element) => {
        return (
            <div className={s.item}>
                <span className={s.bullet}></span>
                <Card key={element.id} year={element.year} name={element.name}
                      content={element.content}/>
            </div>
        )
    })
    const educationDataComponents = educationData.map((element) => {
        return (
            <div className={s.item}>
                <span className={s.bullet}></span>
                <Card key={element.id} year={element.year} name={element.name}
                      content={element.content}/>
            </div>
        )
    })
    return (
        <div className={s.resumeBlock}>
            <div className={`${styleContainer.container} ${s.resumeContainer}`}>
                <div className={s.block}>
                    <h2>{'EXPERIENCE'}</h2>
                    <div className={s.items}>
                        {experienceDataComponents}
                    </div>
                </div>

            <div className={s.block}>
                <h2>{'EDUCATION'}</h2>
                <div className={s.items}>
                    {educationDataComponents}
                </div>
            </div>
            </div>
        </div>
    )
};

