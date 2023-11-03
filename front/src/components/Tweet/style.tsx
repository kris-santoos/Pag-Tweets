import styled from 'styled-components';
import { global } from '../../global/globalStyle';

export const TweetDiv = styled.div `
    display: inline-flex;
    width: 83.6vw;

    padding: 1.7vh 8.2vw;

    justify-content: space-between;

    border-bottom: solid 2px ${global.colors.cinzaClaro};
`;
/*--------------------------------------------------------*/

export const UserPic = styled.img `
    width: 15.4vw;
    height: 15.4vw;

    border-radius: 50%;

`;

export const TweetInfo = styled.section `
    display: flex;
    flex-direction: column;
    width: 78.5%;
`;

/*--------------------------------------------------------*/

export const UserInfo = styled.div `
    display: inline-flex;
    width: 100%;
    align-items: center;
`;

export const UserName = styled.p `
    font-size: 3vw;
    font-family: ${global.fonts.poppins};
    font-weight: bold;
`;

export const UserNickName = styled.a `
    font-size: 3vw;
    font-family: ${global.fonts.poppins};
    font-weigth: 700;
`;

/*--------------------------------------------------------*/

export const LivroInfo =  styled.div `
    display: inline-flex;
    width: 100%;
    align-items: center;

    font-weight: bold;
`;

export const LivroIcon = styled.img `
    width: 4vw;
    height: 4vw;
`;

export const Livro = styled.p `
    margin: 1vh 0 1vh 1vw;
    font-size: 3vw;
    font-family: ${global.fonts.poppins};
    font-weigth: 700;
`;

/*--------------------------------------------------------*/

export const TweetText = styled.text `
    font-size: 3vw;
    font-family: ${global.fonts.poppins};
    font-weigth: 700;
`;

/*--------------------------------------------------------*/

export const ActionsDiv = styled.section `
    margin: 1vh 0 0 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const InteractionDiv = styled.div `
    display: inline-flex;
    align-items: center;
`;

export const ActionIcon = styled.img `
    height: 4.35vw;
    
`;

export const ActionStatus = styled.p `
    margin: 0 0 0 1.5vw;

    font-size: 3vw;
    font-family: ${global.fonts.poppins};
    font-weigth: 700;
`;