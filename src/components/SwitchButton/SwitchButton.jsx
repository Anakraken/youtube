import React from "react";
import {colors} from '../../Theme';
import styled from 'styled-components';

const Container = styled.div`
  width: 45px;
  height: 15px;
  position: relative;
  border-radius: 35px;
  transition: background-color 100ms ease-out;
  background-color: var(--color);
  cursor: pointer;
  position: absolute;
  bottom: 28px;
`;
const Toggle = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--circle);
  border: solid transparent 1px;
  border-radius: 16px;
  transition: transform 100ms ease-in-out;
  transform: var(--translate);
  position: relative;
  z-index: 2;
  bottom: 6px;
  right: 2px;;
    
  &:hover {
    background-color: var(--hover);
  }
`;

const SwitchButton = ({ active, disabled }) => {  

  const onactive = {
    '--color': colors.secondary,
    '--translate': 'translate(27px,2px)',
    '--circle': colors.mid,
    '--hover': colors.clear
  };

  const inactive = {
    '--color': colors.dark,
    '--translate': 'translate(2px,2px)',
    '--circle': colors.white,
    '--hover': colors.mid
  };

  const disable = {
    '--color': colors.gray,
    '--translate': 'translate(2px,2px)',
    '--circle': colors.disabled,
    '--hover': colors.light
  };

  return (
    <Container 
    active={active} 
    style={disabled ? disable : active ? onactive : inactive}
    >
        <Toggle active={active} />
    </Container>
  );
};
export default SwitchButton;