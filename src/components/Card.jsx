import React from 'react'
import styled from 'styled-components';
import { colors, device} from '../Theme';
import NotFound from '../resources/noimage.png';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 310px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: ${colors.transparent};
    -webkit-box-shadow: 3px 4px 9px 2px ${colors.shadow}; 
	box-shadow: 3px 4px 9px 2px ${colors.shadow};

    h2{
        color: var(--title);
        margin-top: 0px;

        @media ${device.tablet} { 
            margin-top: 8px;
        }
    }
    p{
        color: var(--description);
        margin-top: 8px;
    }

    &:hover{
        background: ${colors.clear};
       
        p{
                color: ${colors.gray};
        }

        .full-cover{
            opacity: 1;
        }
    
    }
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background: ${colors.shadow};
    -webkit-box-shadow: 3px 4px 9px 2px ${colors.shadow}; 
	box-shadow: 3px 4px 9px 2px ${colors.shadow};
    overflow: hidden;

    .center{
        height: 100px;
    }
    .full-cover{
        width: 100%;
        height: auto;
        opacity: 0.6;
    }
`;
const Content = styled.div`
    padding: 15px;
`;

const Card = ({data, onSubmit}) => {
    const img = !!data && data.thumbnails.high.url;
    const title = !!data && data.title;
    const description = !!data && data.title;
    const alt= !!data && data.title;

    let navigate = useNavigate();

    const onClick = async (e) => {
        e.preventDefault();
        onSubmit();
        navigate(`/videos`);
    };

    return (
        <Container onClick={onClick}>
            <Image>
                <img 
                src={!!img ? img : NotFound} 
                alt={alt ? alt : 'Not_found'}
                className={img ? 'full-cover' : 'center'}
                />
            </Image>
            <Content>
                <h2>{title}</h2>
                <p>{description}</p>
            </Content>
        </Container>
    )
};

export default Card;