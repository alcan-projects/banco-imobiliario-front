import styled from "styled-components";

type BoxElementStyledType = {
    bColor: "blue" | "red" | "green"
}

export const BoxElementStyled = styled('div')<BoxElementStyledType>`
    display: flex;
    flex-direction: column;
    position: relative;

    background-image: linear-gradient(${
        props => props.bColor === "blue" && `
            to bottom, blueviolet, #650eb5, blueviolet
        `
    });
    background-image: linear-gradient(${
        props => props.bColor === "red" && `
            to bottom, #c90000, #a10404, #c90000
        `
    });
    background-image: linear-gradient(${
        props => props.bColor === "green" && `
            to bottom, #09d009, #098b09, #09d009
        `
    });
    justify-content: space-between;
    strong, p {
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        font-weight: 600;
        padding: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    strong {
        background-color: ${props => props.bColor === "blue" && "#490289"};
        background-color: ${props => props.bColor === "red" && "#a10404"};
        background-color: ${props => props.bColor === "green" && "green"};
        border-radius: 0 0 10px 10px;
    }
    section.images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center !important;
        align-items: center !important;
        height: 100% !important;
        span {
            margin: 1px !important;
            img {
                height: 30px !important;
                width: 30px !important;
                min-width: auto !important;
            }
        }
    }
    section.players {
        position: absolute;
        z-index: 1;
        width: 100% !important;
        height: 100%;
        span {
            width: 15px !important;
            height: 15px !important;
            margin: 5px;
            border-radius: 100%;
            background-color: red;
        }
    }
    
`

export const BoxCornersStyled = styled('div')`

`