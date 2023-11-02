import styled from 'styled-components';
import { global } from '../../global/globalStyle';

export const StoryDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 4vw;
`;

export const ProfilePic = styled.img `
    width: 12.56vw;
    heigth: 12.56vw;

    border-radius: 50%;
    border: solid 2px ${global.colors.cinzaEscuro};
`;

export const ProfileName = styled.p `
    font-size: 2vw;
    font-family: ${global.fonts.poppins};
    font-weigth: 700;
`;
