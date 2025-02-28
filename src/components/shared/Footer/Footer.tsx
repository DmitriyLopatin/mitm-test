import React from 'react'
import { FooterCard, FooterDogEar, FooterList, FooterTitle, FooterUl, FooterWrapper } from './styled'

export const Footer = () => {
    const footerData = [
        {
            id: 1,
            bgColor: "#ff3535",
            title: "Практические модули",
            clipPath: 1,
            description: [
                {
                    id: 1,
                    text: "Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе"
                }
            ]
        },
        {
            id: 2,
            bgColor: "#2D2C2A",
            title: "Итоговая аттестация",
            clipPath: 0,
            description: [
                {
                    id: 1,
                    text: "Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)"
                },
                {
                    id: 2,
                    text: "Защита итоговой аттестационной работы"
                },
            ]
        },
    ]
    return (
        <FooterWrapper>
            {footerData.map(el =>
                <FooterCard bgcolor={el.bgColor} key={el.id} clipPath={el.clipPath}>
                    {el.clipPath == 1 && <FooterDogEar />}
                    <FooterTitle>
                        {el.title}
                    </FooterTitle>
                    <FooterUl>
                        {el.description.map(item =>
                            <FooterList key={item.id}>{item.text}</FooterList>
                        )}
                    </FooterUl>
                </FooterCard>
            )}
        </FooterWrapper>
    )
}

