import styled from "styled-components";

export const MenuAbsolut = styled('div')`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000036;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

export const PrimaryStyled = styled('nav')`
    background-color: white;
    padding: 1em;
    border-radius: 5px;
    h2 {
        color: black;
        text-align: center;
        padding: 1em 0 2em 0;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 450px;
        li {
            color: black;
            padding: 10px;
            background-color: blue;
            margin: 10px;
            border-radius: 5px;
            width: 40%;
            color: #eee;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: #6b6bf9;
            }
        }
    }
`