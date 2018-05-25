import React          from 'react';
import styled         from 'styled-components';
import { Animated }   from '../Animated';
import { FlexCenter } from '../Layout';


const Wrapper=styled(FlexCenter)`
	& h1{
		margin-bottom: 24px;
	}
	& .text-shadow{
		text-shadow: 0 2px 6px #000;
	}
`;


export class Home extends React.Component{
	render(){
		return (
			<Wrapper>
				<Animated animation={`fadeInDown`}>
					<h1 className={`text-shadow`}>Hello</h1>
				</Animated>
				<Animated animation={`fadeInDown`}>
					<span className={`text-shadow`}>Start your chat right now for free</span>
				</Animated>
			</Wrapper>
		);
	}
}