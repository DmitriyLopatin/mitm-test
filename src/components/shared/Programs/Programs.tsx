import { Title } from '@/components/ui/Title';
import { getPrograms } from '@/services/programs';
import React, { FunctionComponent } from 'react'
import { ProgramCard } from '../ProgramCard';
import { ProgramsWrapper } from './styled';

export const Programs: FunctionComponent = async () => {
    const programs = await getPrograms();
    return (
        <ProgramsWrapper>
            {programs.map(el =>
                <ProgramCard {...el} key={el.id}/>
            )}
        </ProgramsWrapper>
    )
}
