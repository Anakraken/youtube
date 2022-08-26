import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import {
  Container,
  Background,
  night,
  light
} from './styles';

const Layout =({children}) => {
  const [dark, setDark] = useState(false);

  return (
    <Background dark={dark}>
      <Navbar 
      dark={dark} 
      setDark={()=>setDark(!dark)} 
      />
     
      <Container style={dark ? night : light}>
        {children}
      </Container>
    </Background>
  );
}

export default Layout;