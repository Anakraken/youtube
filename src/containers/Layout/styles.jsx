import styled from 'styled-components';
import { colors } from '../../resources/Theme';

const light = {
    '--title': colors.secondary,
    '--description': colors.mid
  };

const night = {
    '--title': colors.dark,
    '--description': colors.clear
};

const Container = styled.div`
    padding-top: 70px;
    width: 95%;
    margin: 0 auto;
    padding-bottom: 80px;
`;
const Background = styled.div`
    min-height: 100vh;
    background: ${({dark})=>(dark ? colors.primary : colors.disabled)};
    color: ${({dark})=>(dark ? colors.clear : colors.primary)};
`;


export {
    Container,
    Background,
    night,
    light
};