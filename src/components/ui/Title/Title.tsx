"use client";

import styled from "styled-components";

export const Title = styled(({ as: Tag = "h1", textalign, ...props }) => <Tag {...props} />)`
font-size: ${({ as }) =>
        as === "h1" ? "32px" : as === "h2" ? "24px" : "18px"};
font-weight: bold;
color: black;
text-align: ${({ textalign }) => textalign || "left"};
`;