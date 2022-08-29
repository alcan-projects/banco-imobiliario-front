import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    };
    input:focus, select:focus, button:focus, textarea:focus {
        outline: none;
    };
    a {
        display: block;
        text-decoration: none;
    }
    body {
        overflow: hidden;
    }
    li {
        list-style-type: none;
    }
    span {
        font-size: 16px;
        line-height: 26px;
        color: #585656;
    }
    p {
        font-size: 18px;
        line-height: 28px;
    }
    a {
        font-size: 18px;
        line-height: 20px;
    }
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 24px;
    }
    body {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100vh;
        &::-webkit-scrollbar {
            width: 7px;
        }
        &::-webkit-scrollbar-thumb {
            width: 7px;
            background-color: blueviolet;
            border-radius: 10px;
        }
    }
`

type ButtonStyledType = {
    background: 'primary' | 'success' | 'danger' | 'none',
    border?: 'primary' | 'success' | 'danger',
    padding?: string,
    textAlign?: 'center' | 'end' | 'left' | 'right' | 'start'

}

export const ButtonStyled = styled('button')<ButtonStyledType>`
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 5px;
    color: white;
    text-align: ${prosp => prosp.textAlign || 'left'};
    cursor: pointer;
    p {
        color: white;
    }
    background-color: ${
        props => {
            if(props.background === 'primary'){ return "blue"};
            if(props.background === 'success'){ return "green";}
            if(props.background === 'danger'){ return "red";}
            if(props.background === 'none'){ return "#0000"}
        }
    };
    border: solid 1px ${
        props => {
            if(props.border === 'primary') { return 'blue'}
            if(props.border === 'success') { return 'green'}
            if(props.border === 'danger') { return 'red'}
            else {
                if(props.background === 'primary') { return 'blue'}
                if(props.background === 'success') { return 'green'}
                if(props.background === 'danger') { return 'red'}
                if(props.background === 'none') { return '#0000'}
            }
        }
    };
    a {
        color: white;
    }
    svg {
        margin-right: 10px;
        color: white;
        fill: white;
        font-size: 18px;
    }
    padding: ${props => props.padding || ".5em 1em"};
`

type ContainerProps = {
    dplay?: 'flex' | 'block',
    pd?: number,
    justifyC?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}

export const ContainerStyled = styled.div<ContainerProps>`
    display: ${props => props.dplay || "block"};
    padding: ${props => props.pd+'em' || '0em' };
    justify-content: ${props => props.justifyC || 'flex-start'};
`;

export const TitleStyled = styled('h1')`
    text-align: center;
    padding: 2em 0;
`
