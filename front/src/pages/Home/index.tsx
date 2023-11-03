import Cabecalho from "../../components/Cabecalho";
import Story from "../../components/Story";
import { HomeDiv, Stories, TweetSection } from "./style";

import DiegoImg from '../../assets/Home/Story/PersonIcon.jpg';
import Tweet from "../../components/Tweet";

export default function Home() {

    const nome = ['Diego', 'José', 'Maria', 'Thiago', 'Ana', 'Flavio', 'Julia']

    return (
        <HomeDiv>
           <Cabecalho/>
           <Stories>
                <Story foto={DiegoImg} nome={nome[0]}/>
                <Story foto={DiegoImg} nome={nome[1]}/>
                <Story foto={DiegoImg} nome={nome[2]}/>
                <Story foto={DiegoImg} nome={nome[3]}/>
                <Story foto={DiegoImg} nome={nome[4]}/>
                <Story foto={DiegoImg} nome={nome[5]}/>
                <Story foto={DiegoImg} nome={nome[6]}/>
            </Stories>

            <TweetSection>
                <Tweet
                    username='Diego'
                    nickname='diego_123'
                    livro='O pequeno príncipe'
                    texto='É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.'
                    comentarios={6}
                    retweets={10.7}
                    curtidas={13.4}
                />
                <Tweet
                    username='Diego'
                    nickname='diego_123'
                    livro='O pequeno príncipe'
                    texto='É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.'
                    comentarios={6}
                    retweets={10.7}
                    curtidas={13.4}
                />
                <Tweet
                    username='Diego'
                    nickname='diego_123'
                    livro='O pequeno príncipe'
                    texto='É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.'
                    comentarios={6}
                    retweets={10.7}
                    curtidas={13.4}
                />
                <Tweet
                    username='Diego'
                    nickname='diego_123'
                    livro='O pequeno príncipe'
                    texto='É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.'
                    comentarios={6}
                    retweets={10.7}
                    curtidas={13.4}
                />
                <Tweet
                    username='Diego'
                    nickname='diego_123'
                    livro='O pequeno príncipe'
                    texto='É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.'
                    comentarios={6}
                    retweets={10.7}
                    curtidas={13.4}
                />
                <Tweet
                    username='Diego'
                    nickname='diego_123'
                    livro='O pequeno príncipe'
                    texto='É preciso que eu suporte duas ou três larvas se quiser conhecer as borboletas.'
                    comentarios={6}
                    retweets={10.7}
                    curtidas={13.4}
                />
            </TweetSection>    
        </HomeDiv>
    );
};