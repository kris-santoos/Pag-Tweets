import Cabecalho from "../../components/Cabecalho";
import Story from "../../components/Story";
import { HomeDiv, Stories } from "./style";

import IgorImg from '../../assets/Home/Story/PersonIcon.png';

export default function Home() {

    const nome = ['Igor', 'José', 'Maria', 'Thiago', 'Ana', 'Flavio', 'Julia']

    return (
        <HomeDiv>
           <Cabecalho/>
           <Stories>
                <Story foto={IgorImg} nome={nome[0]}/>
                <Story foto={IgorImg} nome={nome[1]}/>
                <Story foto={IgorImg} nome={nome[2]}/>
                <Story foto={IgorImg} nome={nome[3]}/>
                <Story foto={IgorImg} nome={nome[4]}/>
                <Story foto={IgorImg} nome={nome[5]}/>
                <Story foto={IgorImg} nome={nome[6]}/>
            </Stories> 
        </HomeDiv>
    );
};