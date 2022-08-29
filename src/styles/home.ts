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
        width: 57%;
        background-color: #f9f9f9;
        section {
            display: flex;
            &:nth-child(1), &:nth-child(5){
                width: 100%;
                height: 15.384615385%;
                justify-content: space-between;
                div{
                    width: 7.692307693%;
                    height: 100%;
                    &:nth-child(1), &:nth-child(11){
                        width: 15.384615385% !important;
                    }
                }
            }
            &:nth-child(2), &:nth-child(4){
                width: 15.384615385%;
                height: 69.23076923%;
                flex-direction: column;
                div{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        div.primary {
            width: 69.23076923%;
            height: 69.23076923%;
            background-image: linear-gradient(to bottom, #257dc6, #65b2f2, #257dc6);
        }
    }
`