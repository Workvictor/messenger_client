import React  from 'react';
import styled from 'styled-components';


const Wrapper=styled.div`
	position: relative;
`;

export const Animated=props=>{
	const {animation}=props;
	return (
		<Wrapper className={`${animation} animated`}>
			{props.children}
		</Wrapper>
	);
};