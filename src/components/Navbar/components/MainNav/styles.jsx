import styled from 'styled-components';
import {colors, device} from '../../../../resources/Theme';

const Header = styled.div`
    background: ${({dark})=> ( dark ? colors.dark : colors.secondary)};
    color: ${colors.white};
	z-index: 300;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
	left: 0;
	-webkit-box-shadow: 5px 5px 11px 5px ${colors.shadow}; 
	box-shadow: 5px 5px 11px 5px ${colors.shadow};
`;
const Container = styled.div`
    width: 95%;
    margin: auto;
`;

const Hamburger =styled.div`
	float: left;
	line-height:70px;
	

	label{
		color: ${({dark})=> (dark ? colors.clear : colors.white)};
		font-size: 25px;
		cursor: pointer;
	}
`;
const Searcher =styled(Hamburger)`
	background: ${colors.transparent};
	opacity: 0.6;
	height: 35px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	margin-top: 18px;
	transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    margin-left: calc(1em + 20px);
	border-radius: 6px;
	width: 20ch;

	@media ${device.mobile} { 
		display: none;
    }

	&:hover {
		opacity: 1;
	}

	input[type="text"] {
		background: rgba(0, 0, 0, 0);
		border: none;
		outline: none;
		color: ${colors.white};
		font-size: 16px;
		padding-left: 8px;
		
		::placeholder {
			color: ${colors.white};
			font-size: 16px;
			padding-left: 8px;
		}
	}
`;
const Menu = styled.nav`
	float: right;
    height: 70px;
    align-items: center;
    display: inline-flex;
`;
const MenuItem = styled.div`
	display: inline-block;
	width: 100%;
	padding: 15px;
	line-height: normal;
	text-decoration: none;
	color: #fff;
	transition: all 0.3s ease;
	border-bottom: 2px solid transparent;
	font-size: 15px;
	margin-right: 5px;
	cursor: pointer;
	text-align: center;

	@media ${device.mobileS} { 
		margin-right: 0px;
    }

	p{
		width: 90px;
		margin-left: 20px;
		color: ${({dark})=> (dark ? colors.clear : colors.white)};
	}
`;

export {
    Header,
    Container,
	Hamburger,
	Searcher,
	Menu,
	MenuItem,
};