import styled from 'styled-components';
import { device } from '../../resources/Theme';

const Container = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 20px;
    justify-content: center;
    width: 100%;

    @media ${device.tablet} { 
      grid-template-columns: repeat(auto-fill, 280px);
    }
`;

export {
    Container,
    Grid
};