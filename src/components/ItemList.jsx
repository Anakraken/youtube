import React from 'react'
import styled from 'styled-components';
import { colors, device} from '../Theme';
import NotFound from '../resources/noimage.png';

const Container = styled.div`
    display: grid;
    grid-template-columns: 125px auto;
    width: 100%;
    height: 100px;
    align-items: start;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: ${colors.transparent};
    -webkit-box-shadow: 3px 4px 9px 2px ${colors.shadow}; 
	box-shadow: 3px 4px 9px 2px ${colors.shadow};

    h4{
        color: var(--title);
        margin-top: 0px;

        @media ${device.tablet} { 
            margin-top: 5px;
        }
    }
    label{
        color: var(--description);
        margin-top: 5px;
    }

    &:hover{
        background: ${colors.clear};
       
        label{
                color: ${colors.gray};
        }   
    }
`;

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    overflow: hidden;

    img{
        width: 100%;
        height: auto;
    }
`;

const Content = styled.div`
    padding: 15px;
`;
const ItemList = ({title, description, img, onClick}) => {

    return (
        <Container onClick={onClick}>
            <Image>
                <img 
                src={img ? img : NotFound} 
                alt={title ? title : 'Not_found'}
                />
            </Image>
            <Content>
                <h4>{title}</h4>
                <label>{description}</label>
            </Content>
        </Container>
    )
};

export default ItemList;