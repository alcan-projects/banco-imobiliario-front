import { NextPage } from "next";
import Image from "next/image";

// styleds
import { MenuAbsolut, PrimaryStyled } from "./styled";

// icons
import Bot from '../../../public/maquina.png';
import Not from '../../../public/notebook.png';
import Rede from '../../../public/rede.png';
import Online from '../../../public/online.png';
import { useState } from "react";

const MenuPrimary: NextPage = () => {
    const [menu, setMenu] = useState(true)

    function OneView(){
        setMenu(false)
    }

    return (
        <>
            {
                menu && (
                    <MenuAbsolut>
                        <PrimaryStyled>
                            <h2>Como você quer jogar?</h2>
                            <ul>
                                <li onClick={() => alert('Opção ainda não existe')}>
                                    <Image 
                                        src={Bot} 
                                        alt="Maquina" 
                                        height={50}
                                        width={50}
                                    /> <br />
                                    Contra a máquina
                                </li>
                                <li onClick={OneView}>
                                    <Image 
                                        src={Not} 
                                        alt="Notebook" 
                                        height={50}
                                        width={50}
                                    /> <br />
                                    Uma tela com amigos
                                </li>
                                <li onClick={() => alert('Opção ainda não existe')}>
                                    <Image 
                                        src={Rede} 
                                        alt="Rede de commputadores" 
                                        height={50}
                                        width={50}
                                    /> <br />
                                    Várias telas com amigos
                                </li>
                                <li onClick={() => alert('Opção ainda não existe')}>
                                    <Image 
                                        src={Online} 
                                        alt="On-line" 
                                        height={50}
                                        width={50}
                                    /> <br />
                                    Pessoas on-line
                                </li>
                            </ul>
                        </PrimaryStyled>
                    </MenuAbsolut>
                )
            }
        </>
    )
}

export default MenuPrimary