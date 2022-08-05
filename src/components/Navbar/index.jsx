import React from 'react';
import {
    Header,
    Container,
    Side,
    Hamburger,
    Searcher,
    Menu,
    MenuItem,
    SideNav
} from './styles';
import SearchIcon from '../../resources/icons/SearchIcon';
import UserIcon from '../../resources/icons/UserIcon';
import SwitchButton from '../SwitchButton/SwitchButton';
import { useNavigate } from "react-router-dom";

const Navbar = ({dark, disabled, setDark, searcher, setSearcher}) => {
    
    let navigate = useNavigate();
    
    const onClick = async (e) => {
        e.preventDefault();
        navigate(`/`);
    };

    return (
        <>
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
                    aria-label="search" 
                    value={searcher}
                    onChange={(e)=>setSearcher(e.value)}
                    />
                </Searcher>
                <Menu>
                    <MenuItem onClick={()=>setDark(!dark)}>
                        <SwitchButton 
                        disabled={disabled} 
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

        <input type="checkbox" id="btn-menu"/>

        <Side className="container-menu">
            <div className="cont-menu">
                <SideNav>
                    <div onClick={onClick}>Home</div>
                </SideNav>
                <label htmlFor="btn-menu">✖️</label>
            </div>
        </Side>
      
        </>
    )
};

export default Navbar;