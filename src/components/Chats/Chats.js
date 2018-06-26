import React        from 'react';
import styled       from 'styled-components';
import {
	FlexCenter,
	SideBarWrapper,
	Flex
}                   from '../Layout';
import { Animated } from '../Animated';


const defaultWidth=320;

const barWidth=`${defaultWidth}px`;
const contentWidth=`calc(100% - ${barWidth})`;

const Wrapper=styled(Flex)`
	height: 100%;
	width: 100%;
	align-items: start;
	background-color: #211E27;
`;

const Content=styled.div`
	height: 100%;
	width: ${({ width })=>width || `auto`};
`;

const SideBarItems=styled.div`
	padding: 8px;
`;

const Header=styled(SideBarItems)`
	height: 50px;
	display: flex;
	align-items: center;
`;

const ChatHeader=styled(Header)`
	background: rgba(23, 20, 28, 0.9);
`;

const SideBarContent=styled(SideBarItems)`
	height: calc(100% - 50px);
`;

const ChatContainer=styled.div`
	width: 600px;
	margin: 0 auto;
	position: relative;
	height: calc(100% - 50px);
`;

const ChatBody=styled(Flex)`
	height: 100%;
	flex-direction: column;
`;

const ChatControls=styled(Flex)`
	height: 100px;
	width: 100%;
`;

const ChatMessages=styled(Flex)`
	justify-content: start;
	align-items: start;
	height: calc(100% - 100px);
	width: 100%;
`;

export class Chats extends React.Component{

	state={
		barWidth: barWidth,
	};

	render(){
		return (
		<Wrapper>
			<SideBarWrapper width={barWidth}>
				<Header>
					<Animated animation={`fadeInDown`}>
						sidebar
					</Animated>
				</Header>
				<SideBarContent>
					{`UserAvatar`}
				</SideBarContent>
			</SideBarWrapper>
			<Content width={contentWidth}>
				<ChatHeader>
					<ChatContainer>
						user name
					</ChatContainer>
					settings
				</ChatHeader>
				<ChatContainer>
					<ChatBody>
						<ChatMessages>
							Chatmessages
						</ChatMessages>
						<ChatControls>
							ChatControls
						</ChatControls>
					</ChatBody>
				</ChatContainer>
			</Content>
		</Wrapper>
	);
	}

};