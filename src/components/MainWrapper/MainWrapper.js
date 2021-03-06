import React       from 'react';
import styled      from 'styled-components';
import river       from './river.jpg';
import { ToolBar } from './ToolBar';

const Main=styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #211E27 url(${river}) no-repeat center;
  background-size: cover;
`;

const Wrapper=styled.div`
  background: linear-gradient(180deg, rgba(31, 26, 39, 0.83) 33.41%, #211E27 113.97%);
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Content=styled.div`
  height: calc(100% - 40px);
  position: relative;
`;

export class MainWrapper extends React.Component{

	state={
		pageY: 0,
	};

	onMouseMove=({ pageY })=>{
		this.setState({
			pageY,
		});
	};

	render(){
		return (
			<Main onMouseMove={this.onMouseMove}>
				<Wrapper>
					<ToolBar/>
					<Content>
						{this.props.children}
					</Content>
				</Wrapper>
			</Main>
		);
	}
}
