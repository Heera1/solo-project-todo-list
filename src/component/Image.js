import React from "react";
import styled from "styled-components";


export const ImageStyled = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: left; */
    /* border: solid 1px red; */
    /* position: absolute;
    top: 0;
    left: 0; */
    float: left;

    width: 40%;
    height: 900px;
    
    background-image: url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-size: 180% 100%;
`;

const Image = () => {


    return (
        <>
            <ImageStyled>
    
            </ImageStyled>
        </>
    )
};

export default Image;
