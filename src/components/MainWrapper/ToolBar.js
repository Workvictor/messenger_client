import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes }  from '../index';


const Wrapper=styled.div`
	height: 256px;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	font-size: 11px;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	& span{
		padding: 4px 24px;
	}
`;

const NavBar=styled.div`
	user-select: none;
	text-align: left;
	font-size: 12px;
	width: 100%;
	position: absolute;
	padding: 0 24px;
	top: 0;
	left: 0;
	background-color: rgba(37, 35, 64, 0.65);
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

export class ToolBar extends React.Component{

	state={
		showStartHint: true,
		visible: false,
	};

	onMouseEnter=()=>{
		this.setState({
			showStartHint: false,
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
			<Wrapper
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
			>
				<NavBar visible={this.state.visible}>
					<NavLink exact to={routes.home}>Home</NavLink>
					<NavLink to={routes.chats}>Chats</NavLink>
					<NavLink to={routes.signin}>SignIn</NavLink>
					<NavLink to={routes.signup}>SignUp</NavLink>
				</NavBar>
				{this.state.showStartHint && <span>start here</span>}
			</Wrapper>
		);
	}
}
