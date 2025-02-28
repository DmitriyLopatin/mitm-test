"use client";
import styled from "styled-components";

export const ProgramCardWrapper = styled.div`
margin: 40px 0px;
`;

export const ModuleCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 40px 0;
`
export const ModuleCardWrapper = styled.div`
    display: flex;
    gap: 60px;
    margin-bottom:50px;
`
export const ModuleTitle = styled.div`
    padding-top: 20px;
    font-size: 32px;
    min-width: fit-content;
    border-top: 2px solid #ff3535;   
`
export const ModuleSubjectsList = styled.ul`
    padding-top: 30px;
`

export const ModuleSubject = styled.li`
    margin: 10px 0;
    font-weight:300;
`