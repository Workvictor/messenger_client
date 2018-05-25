import React             from 'react';
import styled            from 'styled-components';
import { Link }          from 'react-router-dom';
import { routes }        from '../index';
import { FlexCenter }    from '../Layout';
import { Animated }      from '../Animated';
import { FormWrapper }   from '../Layout';
import { Input, Button } from '../Input';


const Wrapper=styled(FlexCenter)`
	& h1{
		margin-bottom: 24px;
	}
	& .text-shadow{
		text-shadow: 0 2px 6px #000;
	}
`;

const Label=styled.div`
	text-align: left;
	margin-bottom: 12px;
	font-size: 14px;
	color: #FFFFFF;
`;
const StyledButton=styled(Button)`
	width: 100%
`;

const Group=styled.div`
	margin-bottom: 12px;
	& a{
		color: #BAA4DF;
	}
`;

export const SignIn=()=>{
	return (
		<Wrapper>
			<Animated animation={`fadeInDown`}>
				<h1 className={`text-shadow`}>SignIn</h1>
				<FormWrapper>
					<Group>
						<Label>Email</Label>
						<Input/>
					</Group>
					<Group>
						<Label>Password</Label>
						<Input/>
					</Group>
					<Group>
						<Label>Remember me</Label>
					</Group>
					<Group>
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