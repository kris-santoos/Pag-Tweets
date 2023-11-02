import { CabecalhoDiv, LogoIcon, ProfileIcon, SideIcon } from "./style";

import SideImg from '../../assets/Home/SideIcon.png';
import LogoImg from '../../assets/Home/Logo.png';
import ProfileImg from '../../assets/Home/ProfileIcon.png';

export default function Cabecalho() {
    return (
        <CabecalhoDiv>
           <SideIcon src={SideImg}/>
           <LogoIcon src={LogoImg}/>
           <ProfileIcon src={ProfileImg}/>
        </CabecalhoDiv>
    );
};