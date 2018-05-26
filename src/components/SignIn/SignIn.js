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
	}
`;

export const SignIn=()=>{
	return (
		<Wrapper row>
			<Title>
				<Animated animation={`fadeInLeft`}>
					Enter your details below.
				</Animated>
			</Title>
			<Animated animation={`fadeInRight`}>
				<FormWrapper>
					<FormTitle>
						Login
					</FormTitle>
					<Group>
						<Label>Email</Label>
						<Input/>
					</Group>
					<Group>
						<Label>Password<Link to={routes.signup}>Forgot password?</Link></Label>
						<Input/>
					</Group>
					<Group>
						<Label>Remember me</Label>
						<StyledButton>
							Login
						</StyledButton>
					</Group>
					<Group>
						Don't have an account? <Link to={routes.signup}>Join</Link>
					</Group>
				</FormWrapper>
			</Animated>
		</Wrapper>
	);
};