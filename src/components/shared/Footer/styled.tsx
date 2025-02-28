'use client'
import styled from "styled-components";


interface FooterProps {
    bgcolor: string
    clipPath:number
  }

export const FooterCard = styled.div<FooterProps>`
    background-color:  ${(p) => p.bgcolor};
    position: relative;
    padding: 40px;
    @media (max-width:768px){
        padding: 30px 17px;
    };
    width: 100%;
    margin-bottom: 25px;
    --calc-width: calc(100% - 30px);
    ${(p) => p.clipPath && `clip-path: polygon(var(--calc-width) 0, 100% 30px, 100% 100%, 0 100%, 0 0);`}
`
export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width:768px){
        display: block;
    };
    gap: 40px;
    color: white;
    ${FooterCard}:last-of-type {
    li{
            margin-left: 20px;
        }
  }
`
export const FooterDogEar = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: #CD1800;
    top: 0;
    right: 0;
    clip-path: polygon(0 3%, 0% 100%, 100% 100%);
`
export const FooterTitle = styled.div`
    font-size: 36px;
    @media (max-width:768px){
        font-size: 25px;
    };
    font-weight: 700;
`
export const FooterUl = styled.ul`
    margin-top: 25px;
`
export const  FooterList = styled.li`
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 20px;
`