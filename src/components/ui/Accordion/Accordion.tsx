'use client'
import { useHeightAnimation } from '@/helpers/helpers';
import React, { FC } from 'react';

import { Cross, Minus } from './Icons';
import { AccordionContent, AccordionInnerWrapper, AccordionTitle, AccordionWrapper, ArrowIcon, OpenContent } from './styled';




type AccordionProps = {
    title?: string;
    children: React.ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ title, children }) => {
    const duration = 350;

    const { height, handleClick, contentRef } = useHeightAnimation(false, duration);

    return (
        <AccordionWrapper>
            <AccordionInnerWrapper onClick={handleClick} isopen={!!height?0:1}>
                <AccordionTitle>
                    <ArrowIcon isopen={!!height?1:0}>{Cross()}</ArrowIcon>
                    <ArrowIcon isopen={!!height?0:1}>{Minus()}</ArrowIcon>
                    {title}
                </AccordionTitle>
            </AccordionInnerWrapper>
            <AccordionContent height={height}>
                <OpenContent ref={contentRef}>{children}</OpenContent>
            </AccordionContent>
        </AccordionWrapper>
    );
};