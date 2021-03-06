import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes }  from '../index';
import { Flex }    from '../Layout';


const NavBar=styled.div`
	user-select: none;
	text-align: left;
	font-size: 12px;
	width: 100%;
	position: relative;
	padding: 0 24px;
	top: 0;
	left: 0;
	transition: all 300ms;
	transform: translateY(${({ visible })=>visible ? `0` : `-100%`});
	opacity:${({ visible })=>visible ? 1 : 0};
	display: flex;
	align-items: center;
	& a{
		transition: all 300ms;
		display: block;
		padding: 12px 16px;		
		border-bottom: 1px solid transparent;
	}
	& a:hover{
		border-bottom: 1px solid #5f2a74;	
	}
	& a.active{
		border-bottom: 1px solid #4b468c;	
	}
`;

const BarRow=styled.div`	
	position: relative;
	top: 0;
	left: 0;	
	display: flex;
	align-items: center;
	justify-content: start;
	width: 100%;
	height: 40px;
	transition: all 300ms;
	background-color: ${({ visible })=>visible ? `rgba(37, 35, 64, 0.65)` : `transparent`};
`;

const BarCol=styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
`;

const BarPoint=styled.div`	
	border-radius: 50%;
	width: 9px;
	height: 9px;	
	background: ${({ color })=>color || `#fff`};
	cursor: pointer;
	margin: 12px 4px;
`;

export class ToolBar extends React.Component{

	state={
		visible: false,
	};

	onMouseEnter=()=>{
		this.setState({
			visible: true,
		});
	};

	onMouseLeave=()=>{
		this.setState({
			visible: false,
		});
	};

	render(){
		return (
			<BarRow
				visible={this.state.visible}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
			>
				<BarCol>
					<Flex>
						<BarPoint color={`#E63E3E`}/>
						<BarPoint color={`#EFBF14`}/>
						<BarPoint color={`#38AD59`}/>
					</Flex>
				</BarCol>
				<BarCol>
					<NavBar visible={this.state.visible}>
						<NavLink exact to={routes.home}>Home</NavLink>
						<NavLink to={routes.chats}>Chats</NavLink>
						<NavLink to={routes.signin}>SignIn</NavLink>
						<NavLink to={routes.signup}>SignUp</NavLink>
					</NavBar>
				</BarCol>
			</BarRow>
		);
	}
}
