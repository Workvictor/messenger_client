import React  from 'react';
import styled from 'styled-components';

const Wrapper=styled.button`
	background: #D9382E;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 8px 24px;
	color: #fff;
	font-size: 14px;
	justify-content: center;
	outline: none;
`;

export class Button extends React.Component{

	onClick=()=>{

	};

	render(){
		return (
			<Wrapper
				type={`button`}
				onClick={this.onClick}
				className={this.props.className}
			>
				{this.props.children}
			</Wrapper>
		);
	}
}
