import React from "react";
import styled from "styled-components";


export const TitleStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;

    width: 800px;
    height: 80px;
    font-size: 5rem;

    /* border: solid 1px blue; */
`;

const Title = () => {


    return (
        <>
            <TitleStyled>
                Kyoto
            </TitleStyled>
        </>
    )
};

export default Title;