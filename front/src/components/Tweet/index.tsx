import { ActionIcon, ActionStatus, ActionsDiv, InteractionDiv, Livro, LivroIcon, LivroInfo, TweetDiv, TweetInfo, TweetText, UserInfo, UserName, UserNickName, UserPic } from "./style";

import LivroImg from '../../assets/Home/LivroIcon.jpg';
import Comentarios from '../../assets/Home/Comment.png';
import Retweets from '../../assets/Home/Retweet.png';
import Curtidas from '../../assets/Home/Favorite.png';

import DiegoImg from '../../assets/Home/Story/PersonIcon.jpg';

type tweetInfo = {
    foto?: string;

    username?: string;
    nickLink?: string;
    nickname?: string;

    livro?: string;
    texto?: string;

    comentarios?: number;
    retweets?: number;
    curtidas?: number;
}

export default function Tweet(
    {foto, username, nickLink, nickname, livro, texto, comentarios, retweets, curtidas}: tweetInfo
) {
    return (
        <TweetDiv>
            <UserPic src={DiegoImg}/>

            <TweetInfo>
                <UserInfo>
                    <UserName>{username}</UserName>
                    <UserNickName href={nickLink}>@{nickname}</UserNickName>
                </UserInfo>

                <LivroInfo>
                    <LivroIcon src={LivroImg}/>
                    <Livro>{livro}</Livro>
                </LivroInfo>

                <TweetText>{texto}</TweetText>

                <ActionsDiv>
                    <InteractionDiv>
                        <ActionIcon src={Comentarios}/>
                        <ActionStatus>{comentarios}k</ActionStatus>
                    </InteractionDiv>

                    <InteractionDiv>
                        <ActionIcon src={Retweets}/>
                        <ActionStatus>{retweets}k</ActionStatus>
                    </InteractionDiv>

                    <InteractionDiv>
                        <ActionIcon src={Curtidas}/>
                        <ActionStatus>{curtidas}k</ActionStatus>
                    </InteractionDiv>
            
                </ActionsDiv>
            </TweetInfo>    
        </TweetDiv>
    );
}