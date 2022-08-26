import React, {useContext} from 'react'
import {
    Side,
    SideSearch,
    SideNavar
} from './styles';
import SearchIcon from '../../../../resources/icons/SearchIcon';
import { useNavigate } from "react-router-dom";
import { VideoContext } from '../../../../state/videoProvider';


const SideNav = () => {
    const {searcher, setSearcher} = useContext(VideoContext);
    let navigate = useNavigate();
    
    const onClick = async (e) => {
        e.preventDefault();
        navigate(`/youtube`);
    };

  return (
    <Side className="container-menu">
            <div className="cont-menu">
                <SideNavar>
                    <div onClick={onClick}>Home</div>
                </SideNavar>
                <SideSearch>
                    <SearchIcon />
                    <input 
                    placeholder="Search…" 
                    type="text"  
                    value={searcher}
                    onChange={(e) => setSearcher(e.target.value)}
                    />
                </SideSearch>
                <label htmlFor="btn-menu">✖️</label>
            </div>
        </Side>
  )
}

export default SideNav;
