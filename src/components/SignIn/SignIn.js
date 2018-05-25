import React          from 'react';
import styled         from 'styled-components';
import { FlexCenter } from '../Layout';
import { Animated }   from '../Animated';


const Wrapper=styled(FlexCenter)`
	& h1{
		margin-bottom: 24px;
	}
	& .text-shadow{
		text-shadow: 0 2px 6px #000;
	}
`;

export const SignIn=()=>{
	return (
		<Wrapper>
			<Animated animation={`fadeInDown`}>
				<h1 className={`text-shadow`}>SignIn</h1>
			</Animated>
		</Wrapper>
	);
};