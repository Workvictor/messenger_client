import styled from 'styled-components';

export const SideBarWrapper=styled.div`
	position: relative;
	left: 0;
	top: 0;
	height: 100%;
	width: ${({width})=>width||`250px`};
	background: linear-gradient(180.03deg, #2F1F4A -16.09%, rgba(47, 31, 74, 0.54) 99.99%), #181818;
`;