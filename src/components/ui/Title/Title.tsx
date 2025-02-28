"use client";

import styled from "styled-components";

export const Title = styled(({ as: Tag = "h1", textalign, ...props }) => <Tag {...props} />)`
font-size: ${({ as }) =>
                as === "h1" ? "32px" : as === "h2" ? "24px" : "18px"};
font-weight: bold;

color: black;
margin: ${({ as }) =>
                as === "h2" && "40px 0 30px"};
text-align: ${({ textalign }) => textalign || "left"};
@media (max-width:768px){
        text-align: ${() => "left"};;
        font-weight: ${({ as }) =>
                as === "h1" ? "500" : as === "h2" ? "700" : "700"};    
        font-size: ${({ as }) =>
                as === "h1" ? "28px" : as === "h2" ? "22px" : "18px"};
    };

`;