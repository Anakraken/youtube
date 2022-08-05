import React, {useState, useContext} from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { colors } from '../Theme';
import { VideoContext } from '../resources/state/videoContext';

const Container = styled.div`
    padding-top: 70px;
    width: 95%;
    margin: 0 auto;
    padding-bottom: 80px;;
`;
const Background = styled.div`
    min-height: 100vh;
    background: ${({dark})=>(dark ? colors.primary : colors.disabled)};
    color: ${({dark})=>(dark ? colors.clear : colors.primary)};
`;

const Layout =({children, setTheme, searcher, setSearcher}) => {
  const theme = useContext(VideoContext);    
  const [dark, setDark] = useState(theme.theme);

  const handleTheme = () => {
    setDark(!dark);
    setTheme({...theme, theme:{theme: dark}});
  };


  const light = {
    '--title': colors.secondary,
    '--description': colors.mid
  };

  const night = {
    '--title': colors.dark,
    '--description': colors.clear
  };

  return (
    <Background dark={dark}>
      <Navbar 
      dark={dark} 
      setDark={handleTheme} 
      searcher={searcher} 
      setSearcher={setSearcher}
      />
     
      <Container style={dark ? night : light}>
        {children}
      </Container>
    </Background>
  );
}

export default Layout;