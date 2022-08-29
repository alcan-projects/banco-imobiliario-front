import { NextPage } from "next";
import Image from "next/image";

// styleds
import { BoxElementStyled } from './styled'

// interfaces
type backgroundType = "home" | "work" | "agricultura"
type backgroundReturnType = "blue" | "red" | "green"
type BoxElementType = {
    title: string,
    icon: any,
    price: string,
    background: backgroundType
    position?: string
}

import Home01 from '../../public/home01.png'

const BoxElement: NextPage<BoxElementType> = ({ icon, price, title, background }) => {
    function backgroundFunc(value: backgroundType): backgroundReturnType{
        var color: backgroundReturnType = 'home';
        color = value === "home" ? "blue" : color;
        color = value === "work" ? "red" : color;
        color = value === "agricultura" ? "green" : color;
        return color
    }

    return (
        <BoxElementStyled bColor={backgroundFunc(background)}>
            <strong>{title}</strong>
            <section className="images">
                <Image 
                    src={Home01} 
                    alt="home"
                />
                <Image 
                    src={Home01} 
                    alt="home"
                />
                <Image 
                    src={Home01} 
                    alt="home"
                />
                
            </section>
            <section className="players">
                <span></span>
                <span></span>
            </section>
            
            <p>{price}</p>
        </BoxElementStyled>
    )
}

export default BoxElement