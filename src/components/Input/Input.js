import React  from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
	background: #fff;
	border-radius: 4px;
	display: block;
	width: 100%;
`;

const StyledInput=styled.input`
	background: transparent;
	border-radius: 4px;
	border: none;
	display: block;
	width: 100%;
	outline: none;
	font-size: 16px;
  padding: 12px;
`;

const Placeholder=styled.div`
	
`;

export class Input extends React.Component{

	state={
		value: ``,
	};

	onChange=({ value })=>{
		this.setState({
			value
		});
	};

	render(){
		return (
			<Wrapper>
				<StyledInput
					onChange={this.onChange}
				/>
				{
					this.props.placeholder &&
					<Placeholder>
						{this.props.placeholder}
					</Placeholder>
				}
			</Wrapper>
		);
	}
}
