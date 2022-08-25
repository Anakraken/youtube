import React, { useContext }from 'react';
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
import { VideoContext } from '../../state/videoProvider';

const Navbar = ({dark, disabled, setDark}) => {
    let navigate = useNavigate();
    const {searcher, setSearcher} = useContext(VideoContext);

    const onClick = async (e) => {
        e.preventDefault();
        navigate(`/`);
    };

    const onSearch = (e) =>{
        setSearcher(e.target.value)
    }

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
                    value={searcher}
                    onChange={onSearch}
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