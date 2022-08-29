import { NextPage } from "next";
import Image from "next/image";

// styleds
import { BoxElementStyled } from './styled'

// interfaces
type backgroundType = "home" | "work" | "agricultura"
type backgroundReturnType = "blue" | "red" | "green"
type BoxElementType = {
    title: string,
    angle?: 'left' | 'rigth'
    icon: any,
    price: string,
    background: backgroundType
    position?: string,
    home?: [number, number, number, number],
    players?: Array<string>
}

// icones
import Plata from '../../../public/planta.png'
import Home from '../../../public/casa.png'

const BoxElement: NextPage<BoxElementType> = ({ 
    icon, 
    angle,
    price, 
    title, 
    background,
    home,
    players
}) => {
    function backgroundFunc(value: backgroundType): backgroundReturnType{
        var color: backgroundReturnType = 'blue';
        color = value === "home" ? "blue" : color;
        color = value === "work" ? "red" : color;
        color = value === "agricultura" ? "green" : color;
        return color
    }

    return (
        <>
            {
                angle === 'left' && (
                    <p>Left</p>
                )
            }
            {
                angle === 'rigth' && (
                    <p>Rigth</p>
                )
            }
            {
                !angle && (
                    <BoxElementStyled bColor={backgroundFunc(background)}>
                        <strong>{title}</strong>
                        {
                            home && (
                                <section className="images">
                                    {
                                        home.map((item, index) => (
                                            <>
                                                {
                                                    item === 0 && (
                                                        <Image key={index} src={Plata} alt="planta"/>
                                                    )
                                                }
                                                {
                                                    item === 1 && (
                                                        <Image key={index} src={Home} alt="home"/>
                                                    )
                                                }
                                            </>
                                        ))
                                    }
                                </section>
                            )
                        }
                        {
                            players && (
                                <section className="players">
                                    {
                                        players.map((play, index) => (
                                            <span 
                                                title={play}
                                                key={index}
                                            ></span>
                                        ))
                                    }
                                </section>
                            )
                        }
                        <p>{price}</p>
                    </BoxElementStyled>
                )
            }
        </>
    )
}

export default BoxElement