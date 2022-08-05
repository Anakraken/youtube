import React from "react";
import styled from 'styled-components';
import {colors} from '../Theme';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${colors.primary};
    color: ${colors.clear};
`;

const Loading = () => (
<Container>
    <progress>LOADING...</progress>
</Container>
  );

export default Loading;