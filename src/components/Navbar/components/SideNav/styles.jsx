import styled from 'styled-components';
import {colors, device} from '../../../../resources/Theme';

const Hamburger =styled.div`
	float: left;
	line-height:70px;

	label{
		color: ${({dark})=> (dark ? colors.clear : colors.white)};
		font-size: 25px;
		cursor: pointer;
	}
`;
const SideSearch =styled(Hamburger)`
	display: none;

	background: ${colors.transparent};
	opacity: 0.6;
	align-items: center;
	padding-left: 10px;
	margin-top: 18px;
	transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	border-radius: 6px;
	width: 95%;
	height: 35px;

	@media ${device.mobile} { 
		display: flex;
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
const SideNavar = styled.nav`
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
    Side,
	SideSearch,
	SideNavar,
};