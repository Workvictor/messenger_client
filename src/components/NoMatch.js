import React  from 'react';
import styled from 'styled-components';


const Wrapper=styled.div`
	text-align: center;
`;

export const NoMatch=()=>{
	return (
		<Wrapper>
			<h1>sorry, page not found :(</h1>
		</Wrapper>
	);
};