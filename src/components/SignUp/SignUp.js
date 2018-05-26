import React             from 'react';
import styled            from 'styled-components';
import { Link }          from 'react-router-dom';
import { routes }        from '../index';
import { Animated }      from '../Animated';
import {
	FormWrapper,
	Flex,
	FlexCenter
}                        from '../Layout';
import { Input, Button } from '../Input';


const Wrapper=styled(FlexCenter)`
	& h1{
		margin-bottom: 24px;
	}
	& .text-shadow{
		text-shadow: 0 2px 6px #000;
	}
`;

const FormTitle=styled.div`
	font-size: 16px;
	margin-bottom: 30px;
	text-align: left;
`;

const Title=styled(Flex)`
	font-size: 70px;
	margin-right: 64px;
	width: 450px;
	text-align: left;
	text-transform: uppercase;
	font-weight: 700;
`;

const Label=styled(Flex)`
	align-items: center;
	justify-content: space-between;
	text-align: left;
	margin-bottom: 12px;
	color: #FFFFFF;
	& a{
		font-size: 12px;
		color: #65567E;
	}
`;

const StyledButton=styled(Button)`
	width: 100%
`;

const Group=styled.div`
	margin-bottom: 42px;
	& a{
		color: #BAA4DF;
		text-decoration: underline;
	}
`;

const GroupSecond=styled(Group)`
	margin-bottom: 32px;
`;

const Paragraph=styled(Group)`
	margin-bottom: 16px;
`;

const Privacy=styled(Group)`
	margin-bottom: 16px;
	color: #8777a9;
	& a{
		color: #8777a9;
	}
`;

export const SignUp=()=>{
	return (
		<Wrapper row>
			<Title>
				<Animated animation={`fadeInLeft`}>
					Get starter Free right now.
				</Animated>
			</Title>
			<Animated animation={`fadeInRight`}>
				<FormWrapper>
					<FormTitle>
						Sign up with your email address
					</FormTitle>
					<Group>
						<Label>Name</Label>
						<Input/>
					</Group>
					<Group>
						<Label>Email</Label>
						<Input/>
					</Group>
					<GroupSecond>
						<Label>Password</Label>
						<Input/>
					</GroupSecond>
					<GroupSecond>
						<StyledButton>
							Sign up
						</StyledButton>
					</GroupSecond>
					<Paragraph>
						Already have an account?
						{` `}<Link to={routes.signin}>Login</Link>
					</Paragraph>
					<Privacy>
						By sign up, you agree to the
						{` `}<Link to={routes.terms}>Terms</Link>{` `}
						and
						{` `}<Link to={routes.privacy}>Privacy Policy</Link>
					</Privacy>
				</FormWrapper>
			</Animated>
		</Wrapper>
	);
};