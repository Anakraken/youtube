import React, { useContext } from 'react'
import {
    Header,
    Container,
    Hamburger,
    Searcher,
    Menu,
    MenuItem,
} from './styles';
import UserIcon from '../../../../resources/icons/UserIcon';
import SwitchButton from '../../../SwitchButton/SwitchButton';
import SearchIcon from '../../../../resources/icons/SearchIcon';
import { VideoContext } from '../../../../state/videoProvider';


const DesktopNav = ({dark, setDark}) => {
    const {searcher, setSearcher} = useContext(VideoContext);

  return (
    <Header dark={dark}>
            <Container>
                <Hamburger dark={dark}>
                    <label htmlFor="btn-menu">☰</label>
                </Hamburger>
                
                <Searcher>
                    <SearchIcon />
                    <input 
                    placeholder="Search…" 
                    type="text"  
                    value={searcher}
                    onChange={(e) => setSearcher(e.target.value)}
                    />
                </Searcher>
                <Menu>
                    <MenuItem onClick={()=>setDark(!dark)}>
                        <SwitchButton 
                        active={dark} 
                        />   
                    </MenuItem>
                    <MenuItem dark={dark}> 
                        <p>{ dark ? 'Light mode' : 'Dark mode' }</p>
                    </MenuItem>
                    <MenuItem>
                        <UserIcon dark={dark}/>
                    </MenuItem>
                </Menu>
            </Container>
        </Header>
  )
}

export default DesktopNav;
