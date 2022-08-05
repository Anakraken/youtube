import styled from 'styled-components';
import {colors} from '../../Theme';

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

	p{
		width: 90px;
		margin-left: 20px;
		color: ${({dark})=> (dark ? colors.clear : colors.white)};
	}
`;
const Side = styled.div`
	position: absolute;
	background: rgba(0,0,0,0.5);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	transition: all 500ms ease;
	opacity: 0;
	visibility: hidden;
	z-index: 300;

    #btn-menu{
		display: none;
	}
	#btn-menu:checked ~ &{
		opacity: 1;
		visibility: visible;
	}
	.cont-menu{
		width: 100%;
		max-width: 250px;
		background: #1c1c1c;
		height: 100vh;
		position: relative;
		transition: all 500ms ease;
		transform: translateX(-100%);
	}
	#btn-menu:checked ~ & .cont-menu{
		transform: translateX(0%);
	}
	
	.cont-menu label{
		position: absolute;
		right: 25px;
		top: 20px;
		color: #fff;
		cursor: pointer;
		font-size: 18px;
	}
`;
const SideNav = styled.nav`
	transform: translateY(15%);
	padding-top: 40px;
	z-index: 301;


	div{
		display: block;
		text-decoration: none;
		padding: 20px;
		color: #c7c7c7;
		border-left: 5px solid transparent;
		transition: all 400ms ease;
		cursor: pointer;
	}

	div:hover{
		border-left: 5px solid #c7c7c7;
		background: #1f1f1f;
	}
`;
export {
    Header,
    Container,
    Side,
	Hamburger,
	Searcher,
	Menu,
	MenuItem,
	SideNav,
};