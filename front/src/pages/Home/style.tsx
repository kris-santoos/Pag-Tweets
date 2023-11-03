import styled from "styled-components"; 
import { global } from "../../global/globalStyle";

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

`;

export const Stories = styled.div `
    display: flex;
    width: 95.8vw;
    height: 7.7vh;

    overflow-x: auto;
    overflow-y: visible;

    padding: 0 0 0 4.2vw;

    margin: 2.36vh 0 0 0;

    border-bottom: solid 2px ${global.colors.cinzaClaro};
`;

export const TweetSection = styled.section `
    display: flex;
    flex-direction: column;

    overflow-y: auto;
`;