import styled from "styled-components";

export const BaseStyled = styled('div')`
    display: flex;
    justify-content: center;
    background-color: #000;
    div.primary {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100vh;
        width: 100%;
        background-color: #f9f9f9;
        section {
            display: flex;
            width: 100%;
            height: 20%;
            justify-content: space-between;
            div{
                width: 100%;
                height: 100%;
                &:nth-child(1), &:nth-child(14){
                    width: 180% !important;
                    height: 100%;
                    background-color: yellow;
                }
            }
        }
        div.center {
            display: flex;
            width: 100%;
            height: 60%;
            section {
                display: flex;
                flex-direction: column;
                width: 15%;
                height: 100%;
                justify-content: space-between;
                div {
                    width: 100% !important;
                    height: 100% !important;
                    background-color: red;
                }
            }
            div.primary {
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to bottom, #257dc6, #65b2f2, #257dc6);
            }
        }
    }
`