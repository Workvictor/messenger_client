import React      from 'react';
import styled     from 'styled-components';
import { NavLink }   from 'react-router-dom';
import river      from './river.jpg';
import { routes } from '../index';

const Main=styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #211E27 url(${river}) no-repeat center;
  background-size: cover;
`;

const Wrapper=styled.div`
  background: linear-gradient(180deg, rgba(31, 26, 39, 0.83) 33.41%, #211E27 113.97%);
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
`;


const ToolBarListener=styled.div`
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
	&:hover .tool-bar{
		transform: translateY(0);
	}
`;

const ToolBar=styled.div`
	text-align: left;
	font-size: 12px;
	width: 100%;
	position: absolute;
	padding: 0 24px;
	top: 0;
	left: 0;
	background-color: rgba(37, 35, 64, 0.65);
	transition: all 300ms;
	transform: translateY(-100%);	
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

export class MainWrapper extends React.Component{
	state={
		showStartHint: true,
	};

	resetStartHint=(showStartHint)=>()=>{
		showStartHint && this.setState({
			showStartHint: false,
		});
	};

	render(){
		return (
			<Main>
				<Wrapper>
					{this.props.children}
					<ToolBarListener
						onMouseOver={this.resetStartHint(this.state.showStartHint)}
					>
						<ToolBar className={`tool-bar`}>
							<NavLink exact to={routes.home}>Home</NavLink>
							<NavLink to={routes.chats}>Chats</NavLink>
							<NavLink to={routes.signin}>SignIn</NavLink>
							<NavLink to={routes.signup}>SignUp</NavLink>
						</ToolBar>
						{this.state.showStartHint && <span>start here</span>}
					</ToolBarListener>
				</Wrapper>
			</Main>
		);
	}
}
