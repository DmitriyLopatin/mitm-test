import { Title } from '@/components/ui/Title'
import React, { FC } from 'react'
import { ModuleCards, ModuleCardWrapper, ModuleSubject, ModuleSubjectsList, ModuleTitle, ProgramCardWrapper } from './styled'

export type Program = {
  id: number
  title: string
  specializedSubjects: {
    id: number
    skills: {
      id: number
      title: string
    }[]
  }[]
}

export const ProgramCard: FC<Program> = (props) => {
  const modules = [
    {
      id: 1,
      module: "1 модуль",
      subjects: props.specializedSubjects[0].skills.filter((el, index, arr) => index < (arr.length / 2))
    },
    {
      id: 2,
      module: "2 модуль",
      subjects: props.specializedSubjects[0].skills.filter((el, index, arr) => index >= (arr.length / 2))
    },
  ]
  return (
    <ProgramCardWrapper>
      <Title as="h2">
        {props.title}
      </Title>
      <ModuleCards>
        {modules.map(el =>
          <ModuleCardWrapper key={el.id}>
            <ModuleTitle>
              {el.module}
            </ModuleTitle>
            <ModuleSubjectsList>
              {el.subjects.map(item =>
                <ModuleSubject key={item.id}>
                  {item.title}
                </ModuleSubject>)}
            </ModuleSubjectsList>
          </ModuleCardWrapper>)}
      </ModuleCards>

    </ProgramCardWrapper>
  )
}

