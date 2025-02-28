import styled, { css } from "styled-components";

export const AccordionWrapper = styled.div`
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  display: none;
  @media (max-width:768px){
        display: block;
    };
`;

export const AccordionContent = styled.div<{ height: number | string }>`
  height: ${({ height }) => height};
  overflow: ${({ height }) => (height === 'auto' ? 'visible' : 'hidden')};
  transition: height 350ms cubic-bezier(0.4, 0, 1, 1);
`;

export const AccordionTitle = styled.div`
  margin: 0 10px;
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  gap: 30px;
  position: relative;
  padding-left:40px;
  text-align: left;
`;

export const AccordionInnerWrapper = styled.div<{ isopen: number }>`
  display: flex;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isopen }) => isopen == 1 ? "#F7F7F7" : "#ff3535"};
  color:${({ isopen }) => isopen == 1 ? "black" : "white"};
  transition: all 350ms ease-in-out;
`;

export const ArrowIcon = styled.span<{ isopen: number }>`
position: absolute;
left: 0;
  svg {
    opacity:1;
    transition: opacity 350ms ease-in-out;
    width: 25px;
    height: 25px;
  }

  ${({ isopen }) =>
        isopen == 1 &&
        css`
      svg {
        opacity: 0;
        transition: opacity 35ms ease-in;
      }
    `}
`;

export const OpenContent = styled.div`
  padding-bottom: 20px;
`;