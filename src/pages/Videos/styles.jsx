import styled from 'styled-components';
import { device } from '../../resources/Theme';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 20px;
    height: 60vh;
        
    @media ${device.mobile} { 
        grid-template-columns: 100%;
    }
`;
const Container = styled.div`
    p{
        margin-top: 10px;
    }
    h3{
        margin-top: 15px;
    }
    iframe{
        width: 100%;
        height: 100%;
    }
`;
const List = styled.div`
    height: 100%;
    display: grid;
    row-gap: 10px;
    align-items: baseline;
    grid-template-rows: repeat(auto-fit, 100px);
    overflow-y: auto;
`;

export {
    Grid,
    Container,
    List
}